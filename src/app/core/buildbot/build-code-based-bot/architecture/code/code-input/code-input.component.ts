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
import {Select, Store} from '@ngxs/store';
import {IBot, IBotVersionData, ICode} from '../../../../../interfaces/IBot';
import {ServerService} from '../../../../../../server.service';
import {ViewBotStateModel} from '../../../../../view-bots/ngxs/view-bot.state';
import {Observable, Subscription} from 'rxjs';
import {IHeaderData} from '../../../../../../../interfaces/header-data';
import {UtilityService} from '../../../../../../utility.service';
import {Router} from '@angular/router';
import {IBotCreationState} from '../../../../ngxs/buildbot.state';
import {CodeEditorComponent} from '../code-editor/code-editor.component';
import {EventService} from '../../../../../../event.service';
import {take} from 'rxjs/operators';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {IUser} from '../../../../../interfaces/user';
import {ModalImplementer} from '../../../../../../modal-implementer';
import {MatDialog} from '@angular/material';
import {ModalConfirmComponent} from 'src/app/modal-confirm/modal-confirm.component';
import {
  CreateForkedVersion$,
  GetVersionsInit$,
  ResetVersionState,
  SetDiff,
  SetSelectedVersion,
  UpdateVersionLocal,
  ValidateCode_flow$,
  ValidateCode_flow_ActivateVersion$,
  ValidateCodeText
} from './ngxs/code-input.action';
import {ICodeInputState} from './ngxs/code-input.state';
import {CodeInputService} from './code-input.service';
import {EBotVersionTabs, IBotVersionErrorMap, IVersionDiffMap} from '../../../../../../../interfaces/code-input';
import {CodeGentemplateUiWrapperComponent} from './code-gentemplate-ui-wrapper/code-gentemplate-ui-wrapper.component';
import {EAllActions} from '../../../../../../typings/enum';
import {FormsService} from '../../../../../../forms.service';
import {ELoadingStatus} from '../../../../../../button-wrapper/button-wrapper.component';

@Component({
  selector: 'app-code-input',
  templateUrl: './code-input.component.html',
  styleUrls: ['./code-input.component.scss'],

})
export class CodeInputComponent extends ModalImplementer implements OnInit, OnDestroy, AfterViewInit {

  validation = {};
  errorMap: IBotVersionErrorMap = {};
  modalRefWrapper = {ref: null};
  myEBotVersionTabs = EBotVersionTabs;
  activeTab: EBotVersionTabs = EBotVersionTabs.df_template;
  isGentemplateCodeParsable = false;
  myEAllActions = EAllActions;
  botlist$_sub: Subscription;
  errorMessage: string;
  saveOrCreateStatus: ELoadingStatus;
  activeVersion: IBotVersionData;
  activeTabCount = 0;
  selectedTemplateKeyInLeftSideBar = '';
  myObject = Object;
  showGenTempEditor = false;
  validationMessageToggle = false;
  templateKeyDict;
  channelListClone: { name: string, displayName: string }[] = []; // = ["facebook", "web", "imiconnect", "imichat", "skype"];
  templateKeyDictClone = null;
  showVersionList = false;
  selectedVersion_st: IBotVersionData = {};
  code: ICode;
  versions_st: IBotVersionData[];
  codeInputForm: FormGroup;
  permanentlyShowUIViewFormBackend: boolean;
  @ViewChild('ForkVersiontemplate') forkVersionTemplate: ElementRef;
  @ViewChildren('gentemplateItem') private gentemplateItems: QueryList<ElementRef>;
  @ViewChild('modelGenTempNameForm') modelGenTempNameForm: NgForm;
  @ViewChild(CodeGentemplateUiWrapperComponent) codeGentemplateUiWrapperComponent: CodeGentemplateUiWrapperComponent;
  @ViewChild(CodeEditorComponent) codeEditorComponent: ElementRef;
  @ViewChild('genTempGridItemGrid') genTempGridItemGrid: ElementRef;

  @Select() botcreationstate$: Observable<IBotCreationState>;
  @Select() botlist$: Observable<ViewBotStateModel>;
  @Select() loggeduser$: Observable<{ user: IUser }>;

  @Select() version$: Observable<ICodeInputState>;
  @Select(state => state.version.versions) version1$: Observable<IBotVersionData[]>;
  @Select(state => state.version.selectedVersion) selectedVersion$: Observable<IBotVersionData>;
  @Select(state => state.version.diff) diff$: Observable<IVersionDiffMap>;
  @Input() bot: IBot;
  @Output() datachanged$ = new EventEmitter();


  constructor(
    private store: Store,
    private serverService: ServerService,
    public utilityService: UtilityService,
    public formsService: FormsService,
    public codeInputService: CodeInputService,
    public formBuilder: FormBuilder,
    public matDialog: MatDialog,
    private router: Router,
  ) {
    super(utilityService, matDialog);
  }

  newVersionModalForm: FormGroup;

  ngOnInit() {
    this.newVersionModalForm = this.formBuilder.group({
      version_id: [],
      comment: ['', [FormsService.startWithAlphanumericValidator(), FormsService.lengthValidator({max: 2000, min: 1})]]
    });
    CodeInputService.init(this.dialogRefWrapper, this.forkVersionTemplate, this.matDialog);
    this.channelListClone = CodeInputService.createChannelList(this.bot);
    EventService.botUpdatedInServer$.subscribe((bot) => {
      this.channelListClone = CodeInputService.createChannelList(bot);
    });

    this.version$.subscribe((versionState: ICodeInputState) => {
      if (!versionState) {
        return;
      }
      const versions = versionState.versions;
      if (versions) {
        this.versions_st = versions;
      }
      this.errorMap = versionState.errorMap;

      const selectedVersion = versionState.selectedVersion;
      if (selectedVersion) {

        this.selectedVersion_st = selectedVersion;
        this.permanentlyShowUIViewFormBackend = selectedVersion.is_ui_view;
        if (this.codeInputForm) {
          const localVersionClone = this.versions_st.find(version => version.id === selectedVersion.id);
          if (!UtilityService.isObjectSubSet(localVersionClone, this.codeInputForm.value)) {
            this.codeInputForm.patchValue(localVersionClone);
          }
        }
        this.syncBotViews(true);
      }

    });

    this.codeInputForm = this.formsService.getCodeInputForm();
    this.store.dispatch(new ResetVersionState())
      .subscribe(() => {
        this.store.dispatch([new GetVersionsInit$({bot: this.bot, bot_access_token: ServerService.getBotTokenById(this.bot)})]);
      });

    this.codeInputForm.valueChanges
      .subscribe((formData) => {

        const version = {
          ...formData,
          id: this.selectedVersion_st.id
        };
        this.store.dispatch([new UpdateVersionLocal({version, bot: this.bot})]);
        this.store.dispatch([new SetDiff({version: version})]);
      });

    EventService.codeValidationErrorOnUpdate$.subscribe((data) => {
      this.selectedVersion_st.validation = data;
      this.validationMessageToggle = true;
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
    const countOf_templateKey_stringInGenTemplateCodeStr = (genTemplateCode.includes('else:')) ? genTemplateCode.split('templateKey').length : genTemplateCode.split('templateKey').length - 1;
    const countOf_output_stringInGenTemplateCodeStr = genTemplateCode.split('output').length - 1;
    const countOfTemplateKeyFoundByParser = Object.keys(this.templateKeyDict).length;

    return countOf_templateKey_stringInGenTemplateCodeStr === countOfTemplateKeyFoundByParser &&
      countOf_output_stringInGenTemplateCodeStr === countOfTemplateKeyFoundByParser;
  }

  updateSelectedTemplateKeyValue(codeStr: string) {
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar] = codeStr;
  }

  validateCodeTest(code: string) {

    const validation = {
      id: this.selectedVersion_st.id,
      [this.activeTab]: code
    };

    this.store.dispatch(new ValidateCodeText({version: validation, bot: this.bot}));
  }

  async saveSelectedVersion() {
    this.syncBotViews(this.showGenTempEditor);
    ServerService.getBotTokenById(this.bot);
// this.syncBotViews(false);
    setTimeout(() => {
      this.store.dispatch(new SetDiff({version: {...this.codeInputForm.value, id: this.selectedVersion_st.id}}))
        .subscribe((val) => {
          this.diff$.pipe(take(1)).subscribe((diffMap) => {
            const oldDiff = this.selectedVersion_st.updated_fields;
            const newDiff = diffMap[this.selectedVersion_st.id];
            const body = {
              ...this.selectedVersion_st,
              updated_fields: CodeInputService.getUpdatedFields(oldDiff, newDiff),
              ...this.codeInputForm.value,
            };
            this.store.dispatch([new ValidateCode_flow$({bot: this.bot, version: body})]);
          });
        });
    }, 100);

  }

  convertUiDictToGenTemplateCode(templateKeyDict: any) {
    const parseUiDict = this.utilityService.parseGenTemplateUiDictionaryToIfElseCode(templateKeyDict);
    if (parseUiDict !== undefined && parseUiDict !== null) {
      this.codeInputForm.patchValue({generation_templates: parseUiDict});
    }
  }

  openForkNewVersionModal(template) {
    this.newVersionModalForm.patchValue({version_id: this.selectedVersion_st.version, comment: ''});
    this.openPrimaryModal(template);
  }

  forkNewVersion(value: { comment: string, version_id: number }) {

    this.syncBotViews(this.showGenTempEditor);
    this.dialogRefWrapper.ref.close();
    let forkedVersionInfo = this.codeInputForm.value;
    forkedVersionInfo = {...forkedVersionInfo};
    forkedVersionInfo.updated_fields = forkedVersionInfo.changed_fields; /*TODO: what do i do here?*/
    forkedVersionInfo.changed_fields = CodeInputService.initializeVersionDiff();
    forkedVersionInfo.comment = value.comment;
    // forkedVersionInfo.forked_from = this.forked_version_number;
    forkedVersionInfo.forked_from = value.version_id;
    forkedVersionInfo.bot_id = this.bot.id;
    ServerService.getBotTokenById(this.bot);
    setTimeout(() => {
      this.store.dispatch([new CreateForkedVersion$({bot: this.bot, version: forkedVersionInfo})]);
    }, 1000);
  }

  changeSelectedVersionHandler(version) {

    if (!this.showGenTempEditor && this.codeGentemplateUiWrapperComponent) {
      this.templateKeyDict = this.codeGentemplateUiWrapperComponent.getTemplateDict();
    }
    this.syncBotViews(this.showGenTempEditor);
    this.showGenTempEditor = !version.is_ui_view;
    this.permanentlyShowUIViewFormBackend = version.is_ui_view;
    setTimeout(() => {
      this.store.dispatch([new SetSelectedVersion({id: version.id})]);
    }, 400);
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
    if (this.botlist$_sub) {
      this.botlist$_sub.unsubscribe();
    }
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


  viewChanged(showGenTempUI: boolean) {

    this.showGenTempEditor = !showGenTempUI;
    this.syncBotViews(showGenTempUI);
  }

  syncBotViews(isNextViewGenTempUI: boolean) {
    if (isNextViewGenTempUI) {
      this.convertGenTemplateCodeStringIntoUiComponents();
    } else {
      this.convertUiDictToGenTemplateCode(this.templateKeyDict);

      // this.convertGenTemplateCodeStringIntoUiComponents();

    }
  }

  openEditCodeModal(version: IBotVersionData) {

    this.utilityService.openDialog({
      dialogRefWrapper: this.dialogRefWrapper,
      classStr: 'danger-modal-header-border',
      data: {
        actionButtonText: 'Confirm',
        message: `The interface view will be unavailable for this version permanently. Do you wish to continue? `,
        title: 'Edit code',
        isActionButtonDanger: true
      },
      dialog: this.matDialog,
      component: ModalConfirmComponent
    }).then((data) => {
      if (data) {
        this.codeInputService.changeToCodeViewPermanently(this.bot, version)
          .subscribe((version_temp: IBotVersionData) => {
            this.selectedVersion_st = version_temp;
            this.codeInputForm.patchValue({is_ui_view: version_temp.is_ui_view});
            location.reload();
            //   (value :IBotVersionData)=>{
            //   this.store.dispatch([new SetSelectedVersion({id: value.id})]);
            // }
          });
      }
    });
    // this.utilityService.openDangerModal(template, this.matDialog, this.dialogRefWrapper);
  }

  downloadZipHandler() {
    CodeInputService.downloadZip(this.bot, this.selectedVersion_st);
  }

  activateVersion(active_version_id: number) {
    // this.codeInputService.activateVersion();
    // this.store.dispatch(new ValidateCode_flow_ActivateVersion$({version: this.selectedVersion_st, bot:this.bot}));
    if (this.permanentlyShowUIViewFormBackend) {
      this.syncBotViews(!this.showGenTempEditor);
    }
    ServerService.getBotTokenById(this.bot);
    setTimeout(() => {
      this.store.dispatch(new SetDiff({version: {...this.codeInputForm.value, id: this.selectedVersion_st.id}}))
        .subscribe((val) => {

          this.diff$.pipe(take(1)).subscribe((diffMap) => {
            const oldDiff = this.selectedVersion_st.updated_fields;
            const newDiff = diffMap[this.selectedVersion_st.id];
            const body = {
              ...this.selectedVersion_st,
              updated_fields: CodeInputService.getUpdatedFields(oldDiff, newDiff),
              ...this.codeInputForm.value,
            };
            // this.store.dispatch([new ValidateCode_flow$({bot: this.bot, version: body})]);
            this.store.dispatch(new ValidateCode_flow_ActivateVersion$({version: body, bot: this.bot}));
          });
        });
    }, 100);

  }

  codeEditorTabChangedHandler(tabCount: number) {
    setTimeout(() => {/*reload all editors*/
      this.utilityService.refreshCodeEditor$.emit();
    });
    if (tabCount === 3) {
      if (this.permanentlyShowUIViewFormBackend) {
        this.showGenTempEditor = false;
        // this.syncBotViews(!this.showGenTempEditor);
        this.syncBotViews(this.showGenTempEditor);
      } else {
        this.showGenTempEditor = true;
      }

    }
    this.activeTabCount = tabCount;
    this.activeTab = CodeInputService.getActiveTabNameByTabCount(tabCount);
  }

  ngAfterViewInit(): void {
    // this.que

    if (this.permanentlyShowUIViewFormBackend) {
      this.showGenTempEditor = false;
    } else {
      this.showGenTempEditor = true;
    }
  }

  log(x) {
    alert(x);
  }

}
