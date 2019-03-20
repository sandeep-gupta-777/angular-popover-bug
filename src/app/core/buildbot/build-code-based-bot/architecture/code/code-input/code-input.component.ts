import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {Store, Select, Actions, ofActionDispatched} from '@ngxs/store';
import {IBot, IBotVersionData, IBotVersionResult, ICode} from '../../../../../interfaces/IBot';
import {ServerService} from '../../../../../../server.service';
import {ConstantsService, EAllActions, ERoleName} from '../../../../../../constants.service';
import {
  SaveVersionInfoInBot,
  UpdateBotInfoByIdInBotInBotList,
  UpdateVersionInfoByIdInBot
} from '../../../../../view-bots/ngxs/view-bot.action';
import {SaveCodeInfo} from '../../../../ngxs/buildbot.action';
import {ViewBotStateModel} from '../../../../../view-bots/ngxs/view-bot.state';
import {Observable, Subscription} from 'rxjs';
import {IHeaderData} from '../../../../../../../interfaces/header-data';
import {EBotType, UtilityService} from '../../../../../../utility.service';
import {Router, ActivatedRoute} from '@angular/router';
import {IBotCreationState} from '../../../../ngxs/buildbot.state';
import {CodeEditorComponent} from '../code-editor/code-editor.component';
import {EventService} from '../../../../../../event.service';
import {debounce, debounceTime, take} from 'rxjs/operators';
import {LoggingService} from '../../../../../../logging.service';
import {DebugBase} from '../../../../../../debug-base';
import {FormGroup, NgForm} from '@angular/forms';
import {IUser} from '../../../../../interfaces/user';
import {ModalImplementer} from '../../../../../../modal-implementer';
import {MatDialog} from '@angular/material';
import {ModalConfirmComponent} from 'src/app/modal-confirm/modal-confirm.component';
import {
  AddForkedVersion, CreateForkedVersion$,
  GetVersionsInit$,
  SaveVersion$, SaveVersionSuccess, SetSelectedVersion,
  UpdateVersion,
  ValidateCodeInit$
} from "./ngxs/code-input.action";
import {ICodeInputState} from "./ngxs/code-input.state";
import {CodeInputService} from './code-input.service';

declare var zip;
declare var JSZip;
declare var saveAs;

export enum EBotVersionTabs {
  df_template = 'df_template',
  df_rules = 'df_rules',
  generation_rules = 'generation_rules',
  generation_templates = 'generation_templates',
  workflow = 'workflow'
}

export interface IVersionDiff {
  df_template?: boolean,
  df_rules?: boolean,
  generation_rules?: boolean,
  generation_templates?: boolean,
  workflow?: boolean,
}

export interface IVersionDiffMap {
  [index: string]: IVersionDiff
}
export interface IVersionErrorsMap {
  [index: string]: any/*TODO: complete this interface*/
}

@Component({
  selector: 'app-code-input',
  templateUrl: './code-input.component.html',
  styleUrls: ['./code-input.component.scss'],

})
export class CodeInputComponent extends ModalImplementer implements OnInit, OnDestroy {

  validation = {};
  errorMap = {

  };
  modalRefWrapper = {ref: null};
  showConfig = true;
  templateKeySearchKeyword = '';
  myEBotVersionTabs = EBotVersionTabs;
  activeTab = 'df_template';
  buildTab: string;
  isGentemplateCodeParsable = false;
  @ViewChild('modelGenTempNameForm') modelGenTempNameForm: NgForm;

  myEAllActions = EAllActions;
  @Select() botlist$: Observable<ViewBotStateModel>;
  botlist$_sub: Subscription;
  @Select() botcreationstate$: Observable<IBotCreationState>;
  @Input() bot: IBot;
  @Output() datachanged$ = new EventEmitter();
  forked_From: number;
  forked_comments: string;
  errorMessage: string;
  activeVersion: IBotVersionData;
  forked_version_number: number;
  selectedTemplateKeyInLeftSideBar = '';
  myObject = Object;
  newTemplateKey: string;
  showGenTempEditor = false;
  selectedChannelOfGenTemplate: { name: string, displayName: string };
  validationMessageToggle = false;
  @ViewChild('ForkVersiontemplate') forkVersionTemplate: ElementRef;
  // @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  @ViewChildren('gentemplateItem') private gentemplateItems: QueryList<ElementRef>;
  templateKeyDict;

  onSubmit(modelGridGenTempNames) {
    console.log(modelGridGenTempNames);
  }

  copyModalTemplateSearchKeyword = '';
  channelList: { name: string, displayName: string }[] = []; // = ["facebook", "web", "imiconnect", "imichat", "skype"];
  channelListClone: { name: string, displayName: string }[] = []; // = ["facebook", "web", "imiconnect", "imichat", "skype"];
  channelNameList: string[] = [];

  templateKeyDictClone = null;
  editorCodeObj = {
    'df_template': {text: ''},
    'df_rules': {text: ''},
    'generation_rules': {text: ''},
    'generation_templates': {text: ''},
    'workflow': {text: ''},
  };
  showVersionList = false;

  selectedVersion_st: IBotVersionData = null;
  code: ICode;

  constructor(
    private store: Store,
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private eventService: EventService,
    public utilityService: UtilityService,
    public codeInputService: CodeInputService,
    private router: Router,
    public matDialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private actions$: Actions
  ) {
    super(utilityService, matDialog);
  }

  role: string;
  @Select() loggeduser$: Observable<{ user: IUser }>;
  @Select() version$: Observable<ICodeInputState>;
  @Select(state => state.version.selectedVersion) selectedVersion$: Observable<IBotVersionData>;
  @Select(state => state.version.versions) version1$: Observable<any>;
  versionsClone: IBotVersionData[];
  versionDiffs: IVersionDiffMap = {};

  showViewChangeToggle = true;
  codeInputForm: FormGroup;
  changedFields: {
    df_template: boolean,
    df_rules: boolean,
    generation_rules: boolean,
    generation_templates: boolean,
    workflow: boolean,
  } = {
    'df_template': false,
    'df_rules': false,
    'generation_rules': false,
    'generation_templates': false,
    'workflow': false,
  };

  ngOnInit() {

    this.actions$
      .pipe(ofActionDispatched(SaveVersionSuccess))/*Listening to successful version saved*/
      .subscribe(({payload}) => {
        this.versionDiffs[payload.version.id] = CodeInputService.initializeVersionDiff();
        this.utilityService.showSuccessToaster('New Versions saved');
      });

    this.version1$.subscribe((versions) => {
      if (!versions) {
        return;
      }
      this.versionsClone = UtilityService.cloneObj(versions);
    });

    this.selectedVersion$.subscribe((selectedVersion) => {
      if (!selectedVersion) return;
      this.selectedVersion_st = selectedVersion;
      if (this.codeInputForm) {
        let localVersionClone = this.versionsClone.find(version => version.id === selectedVersion.id);
        this.codeInputForm.patchValue(localVersionClone);
      }
      this.syncBotViews(true);
    });

    CodeInputService.init(this.dialogRefWrapper, this.forkVersionTemplate, this.matDialog);
    this.codeInputForm = this.utilityService.getCodeInputForm();
    this.store.dispatch(new GetVersionsInit$({bot: this.bot, bot_access_token: this.bot.bot_access_token}));

    this.codeInputForm.valueChanges
      .pipe(debounceTime(200))
      .subscribe((formData) => {
        if (!this.versionsClone) return;
        /*store data in local copy of version*/
        let selectedVersion = this.versionsClone.find((e) => e.id === this.selectedVersion_st.id);
        Object.assign(selectedVersion, UtilityService.cloneObj(formData));
        this.versionDiffs = {
          ...this.versionDiffs,
          [this.selectedVersion_st.id]: CodeInputService.getChangedFields(formData, this.selectedVersion_st)
        };
      });

    this.loggeduser$.subscribe((loggeduserState) => {
      if (!loggeduserState.user) {
        return;
      }
      this.role = loggeduserState.user.role.name;
      this.showViewChangeToggle = this.role === ERoleName.Admin || this.role === ERoleName['Bot Developer'];
    });

    this.activatedRoute.queryParams.subscribe((queryParam) => {
      /*when upper panel minimizes or maximizes, change lower panel height accordingly*/
      const showConfigStr = this.activatedRoute.snapshot.queryParamMap.get('show-config');
      this.showConfig = (showConfigStr === 'true' || showConfigStr == undefined);
    });

    if (!this.bot.store_bot_versions) {
      this.serverService.getAllVersionOfBotFromServerAndStoreInBotInBotList(this.bot.id, this.bot.bot_access_token);
    }

    EventService.codeValidationErrorOnUpdate$.subscribe((data) => {
      this.selectedVersion_st.validation = data;
      this.validationMessageToggle = true;
    });
  }

  async openFile(inputEl) {
    this.editorCodeObj[this.activeTab].text = await this.utilityService.readInputFileAsText(inputEl);
    this.editorCodeObj[this.activeTab] = {...this.editorCodeObj[this.activeTab]};
  }

  @ViewChild(CodeEditorComponent) codeEditorComponent: ElementRef;
  @ViewChild('genTempGridItemGrid') genTempGridItemGrid: ElementRef;


  tabClicked(activeTab: string) {

    this.activeTab = activeTab;
    /*TODO: We dont need code here... just replace it with selectedVersion_st. Also we dont need ICode interface*/
    if (this.selectedVersion_st) {
      this.editorCodeObj[this.activeTab].text = this.selectedVersion_st[this.activeTab];
      this.editorCodeObj[this.activeTab] = {...this.editorCodeObj[this.activeTab]};
    }

    if (activeTab === EBotVersionTabs.generation_templates) {
      this.convertGenTemplateCodeStringIntoUiComponents();
    }
    this.router.navigate([`core/botdetail/${EBotType.chatbot}/`, this.bot.id], {
      queryParams: {'code-tab': activeTab},
      queryParamsHandling: 'merge',
      preserveFragment: true,
      replaceUrl: true
    });
  }

  convertGenTemplateCodeStringIntoUiComponents() {
    try {
      console.log('convertGenTemplateCodeStringIntoUiComponents');
      this.templateKeyDict = this.utilityService.parseGenTemplateCodeStrToObject(this.codeInputForm.value[EBotVersionTabs.generation_templates]);
      this.isGentemplateCodeParsable = this.isGentemplateCodeParsableCheck(this.codeInputForm.value[EBotVersionTabs.generation_templates]);
      this.templateKeyDictClone = {...this.templateKeyDict};
    } catch (e) {
      console.log(e);
    }
  }

  isGentemplateCodeParsableCheck(genTemplateCode) {
    const countOf_templateKey_stringInGenTemplateCodeStr = (genTemplateCode.includes("else:")) ? genTemplateCode.split('templateKey').length : genTemplateCode.split('templateKey').length - 1;
    const countOf_output_stringInGenTemplateCodeStr = genTemplateCode.split('output').length - 1;
    const countOfTemplateKeyFoundByParser = Object.keys(this.templateKeyDict).length;

    return countOf_templateKey_stringInGenTemplateCodeStr === countOfTemplateKeyFoundByParser &&
      countOf_output_stringInGenTemplateCodeStr === countOfTemplateKeyFoundByParser;
  }

  updateSelectedTemplateKeyValue(codeStr: string) {
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar] = codeStr;
  }



  validateCodeTest(code: string) {
    debugger;
    const headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    const body = {};
    body[this.activeTab] = code;

    const codeValidationUrl = this.constantsService.codeValidationUrl();

    this.serverService.makePostReq<any>({headerData, body, url: codeValidationUrl})
      .subscribe((validationResult) => {
        debugger;
        console.log('validation resulted ');
        let validation = {};
        validation[this.activeTab] = validationResult[this.activeTab];
        this.errorMap[this.selectedVersion_st.id] = validation;
      });
  }


  async saveSelectedVersion() {
    debugger;
    this.syncBotViews(this.showGenTempEditor);

    const headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };

    let id = this.selectedVersion_st.id;
    let newDiff = UtilityService.cloneObj(this.versionDiffs[id]);
    let oldDiff = this.selectedVersion_st.updated_fields;

    const body = {
      ...this.selectedVersion_st,
      updated_fields: CodeInputService.getUpdatedFields(oldDiff, newDiff),
      ...this.codeInputForm.value,
    };
    this.store.dispatch([new ValidateCodeInit$({bot: this.bot, version: body})]);
  }

  convertUiDictToGenTemplateCode(templateKeyDict) {
    const parseUiDict = this.utilityService.parseGenTemplateUiDictionaryToIfElseCode(templateKeyDict);
    if (parseUiDict != undefined) {
      this.codeInputForm.patchValue({generation_templates:parseUiDict});
      // this.selectedVersion_st.generation_templates = parseUiDict;
    }
    this.editorCodeObj = {
      ...this.editorCodeObj,
      generation_templates: {text: this.selectedVersion_st.generation_templates}
    };
  }

  openForkNewVersionModal(template) {
    this.openPrimaryModal(template);
  }

  forkNewVersion(value:{comment:string, version_id:number}) {
    this.syncBotViews(this.showGenTempEditor);
    this.dialogRefWrapper.ref.close();
    let forkedVersionInfo = this.codeInputForm.value;
    forkedVersionInfo = {...forkedVersionInfo};
    forkedVersionInfo.updated_fields = forkedVersionInfo.changed_fields;/*TODO: what do i do here?*/
    forkedVersionInfo.changed_fields = CodeInputService.initializeVersionDiff();
    forkedVersionInfo.comment = value.comment;
    // forkedVersionInfo.forked_from = this.forked_version_number;
    forkedVersionInfo.forked_from = value.version_id;
    forkedVersionInfo.bot_id = this.bot.id;

    const headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };

    this.store.dispatch([new CreateForkedVersion$({bot: this.bot, version: forkedVersionInfo})]);
  }

  changeSelectedVersion(version) {

    this.syncBotViews(this.showGenTempEditor);

    /*we are moving away from old Versions and going to new Versions
    * for old Versions => if view is UI view. covert ui view to code, if its code view don't do anything
    * for new Versions => if view is UI view. covert code to ui view, if its code view don't do anything
    * */
    this.store.dispatch([new SetSelectedVersion({id: version.id})]);

    // if (this.showGenTempEditor === false) {
    //   this.convertUiDictToGenTemplateCode(this._templateKeyDict);
    // }
    console.log('selected Versions changed');
    // this.bot.store_selected_version = version.id;
    // this.selectedVersion_st = version;
    // this.forked_version_number = this.selectedVersion_st.version;
    // if (this.showGenTempEditor === false) {
    //   this.convertGenTemplateCodeStringIntoUiComponents();
    // }
    // this.tabClicked(this.activeTab);
  }

  toggleVersionList() {
    return this.showVersionList = !this.showVersionList;
  }

  flashErrorMessage(message: string) {
    this.errorMessage = message;
    setTimeout(() => {
      this.errorMessage = '';
    }, 3000);
  }

  ngOnDestroy(): void {
    this.botlist$_sub && this.botlist$_sub.unsubscribe();
  }

  genTemplateViewChange(showGenTempEditorAndHideGenTempUi) {
    if (showGenTempEditorAndHideGenTempUi) {
      this.convertUiDictToGenTemplateCode(this.templateKeyDict);
    } else {
      this.convertGenTemplateCodeStringIntoUiComponents();
      if (!this.selectedTemplateKeyInLeftSideBar && this.templateKeyDict && Array.isArray(Object.keys(this.templateKeyDict))) {
        this.selectedTemplateKeyInLeftSideBar = Object.keys(this.templateKeyDict)[0];
      }
    }
  }

  isTemplateKeyOutputUnparsable() {
    return this.activeTab === this.myEBotVersionTabs.generation_templates &&
      !this.showGenTempEditor &&
      this.templateKeyDict &&
      typeof this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar] === 'string';
  }


  viewChanged(showGenTempUI:boolean) {
    debugger;
    this.showGenTempEditor = !showGenTempUI;
    this.syncBotViews(showGenTempUI);
  }

  syncBotViews(isNextViewGenTempUI:boolean){
    if (isNextViewGenTempUI) {
      this.convertGenTemplateCodeStringIntoUiComponents();
    } else {
      this.convertUiDictToGenTemplateCode(this.templateKeyDict);

      // this.convertGenTemplateCodeStringIntoUiComponents();

    }
  }

  downloadZipHandler() {
    CodeInputService.downloadZip(this.bot, this.selectedVersion_st);
  }

  activateVersion(active_version_id: number) {
    this.serverService.updateBot({id: this.bot.id, active_version_id, bot_access_token: this.bot.bot_access_token})
      .subscribe();
  }

  codeEditorTabChangedHandler(tabCount:number) {
    debugger;
    setTimeout(() => {/*reload all editors*/
      this.utilityService.refreshCodeEditor$.emit();
    });
    if(tabCount ===3){
      this.syncBotViews(!this.showGenTempEditor);
    }
  }

}
