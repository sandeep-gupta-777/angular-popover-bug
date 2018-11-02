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
import {Store, Select} from '@ngxs/store';
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
import {UtilityService} from '../../../../../../utility.service';
import {Router, ActivatedRoute} from '@angular/router';
import {IBotCreationState} from '../../../../ngxs/buildbot.state';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {CodeEditorComponent} from '../code-editor/code-editor.component';
import {EBotType} from '../../../../../view-bots/view-bots.component';
import {EventService} from '../../../../../../event.service';
import {take} from 'rxjs/operators';
import {LoggingService} from '../../../../../../logging.service';
import {DebugBase} from '../../../../../../debug-base';
import {NgForm} from '@angular/forms';
import {IUser} from '../../../../../interfaces/user';

export enum EBotVersionTabs {
  df_template = 'df_template',
  df_rules = 'df_rules',
  generation_rules = 'generation_rules',
  generation_templates = 'generation_templates',
  workflow = 'workflow'
}

export interface ICarousalItem {
  'image_url': string,
  'button': [{ 'type': string, 'title': string, 'payload': string }],
  'title': string,
  /*custom added*/
  description?: string,
}

export interface IQuickReplyItem {
  'content_type': 'text',
  'title': string,
  'payload': string
  /*custom fields*/
  textType?: string;//payload, url
}

export interface IOutputItem {
  text?: string[],
  code?: string,
  include?: string[],
  generic_template?: { 'elements': ICarousalItem[] }[],
  'quick_reply': [{
    'text': string,
    'quick_replies': [
      IQuickReplyItem
      ]
  }]

}

@Component({
  selector: 'app-code-input',
  templateUrl: './code-input.component.html',
  styleUrls: ['./code-input.component.scss'],

})
export class CodeInputComponent extends DebugBase implements OnInit, OnDestroy, AfterViewInit {

  showConfig = true;
  templateKeySearchKeyword: string = '';
  myEBotVersionTabs = EBotVersionTabs;
  activeTab: string = 'df_template';

  @ViewChild('modelGenTempNameForm') modelGenTempNameForm: NgForm;

  myEAllActions = EAllActions;
  @Select() botlist$: Observable<ViewBotStateModel>;
  botlist$_sub: Subscription;
  @Select() botcreationstate$: Observable<IBotCreationState>;
  @Input() bot: IBot;
  @Output() datachanged$ = new EventEmitter();
  modalRef: BsModalRef;
  forked_From: number;
  forked_comments: string;
  errorMessage: string;
  activeVersion: IBotVersionData;
  forked_version_number: number;
  selectedTemplateKeyInLeftSideBar: string = '';
  myObject = Object;
  newTemplateKey: string;
  showGenTempEditorAndHideGenTempUi: boolean = false;
  selectedChannelOfGenTemplate: { name: string, displayName: string };
  selectedTemplateKeyOutputIndex: number[] = [];
  selectedIntentList: string[] = ['A2', 'A3', 'A4'];
  validationMessageToggle: boolean = false;
  // @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  @ViewChildren('gentemplateItem') private gentemplateItems: QueryList<ElementRef>;
  templateKeyDict;

  onSubmit(modelGridGenTempNames) {
    console.log(modelGridGenTempNames);
  }

  copyModalTemplateSearchKeyword: string = '';
  channelList: { name: string, displayName: string }[] = [];// = ["facebook", "web", "imiconnect", "imichat", "skype"];
  channelListClone: { name: string, displayName: string }[] = [];// = ["facebook", "web", "imiconnect", "imichat", "skype"];
  channelNameList: string[] = [];

  openNewIntentModal(template) {
    this.modalRef = this.modalService.show(template, {class: 'modal-w-30vw'});
    return;
  }

  templateKeyCreationError = '';

  createNewTemplatekey() {
    let isTemplateKeyUnique = !Object.keys(this.templateKeyDict).find((key) => key === this.newTemplateKey);
    if (!isTemplateKeyUnique) {
      this.templateKeyCreationError = 'This template key already exists';
      return;
    }
    let intentUnit = {};
    intentUnit[this.newTemplateKey] = [{
      'text': [''],
      'include': ['web', ...this.channelNameList],
    }];
    this.templateKeyDict = {...this.templateKeyDict, ...intentUnit};
    this.modalRef.hide();
    this.selectedTemplateKeyInLeftSideBar = this.newTemplateKey;
    this.newTemplateKey = '';
  }

  addTextUnit() {
    let textUnit = {
      'include': ['web', ...this.channelNameList],
      'text': ['']
    };
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar].push(textUnit);
    setTimeout(() => this.scrollToBottom());

  }

  addImageCaraosalUnit() {
    let caraosalUnit = {
      'include': ['web', ...this.channelNameList],
      'generic_template': [{
        'elements': [{
          'image_url': 'https://s3-us-west-2.amazonaws.com/o2bot/image/carousel_pay_bills.jpg',
          'button': [{'type': 'postback', 'title': 'Renew Now', 'payload': 'expire'}],
          'title': 'Contract Renewal'
        }]
      }]
    };
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar].push(caraosalUnit);
    setTimeout(() => this.scrollToBottom());

  }

  addQuickReplyUnit() {
    let quickReplyUnit = {
      'include': ['web', ...this.channelNameList],
      'quick_reply': [{
        'text': 'Would you like us to activate this ?',
        'quick_replies': [{'content_type': 'text', 'title': 'Yes', 'payload': 'yes'},
          {'content_type': 'text', 'title': 'No', 'payload': 'no'}]
      }]
    };
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar].push(quickReplyUnit);
    setTimeout(() => this.scrollToBottom());

  }

  addCodeUnit() {

    let codeUnit = {
      'include': ['web', ...this.channelNameList],
      'code': ['Write ur text here .....']
    };
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar].push(codeUnit);
    setTimeout(() => this.scrollToBottom());
  }


  deleteGentemplate(e) {
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar].splice(e, 1);
    // console.log(this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar]);
  }

  moveUpGentempate(e) {
    var temp = this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e];
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e] = this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e - 1];
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e - 1] = temp;
  }

  moveDownGentempate(e) {
    if (this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar].length == e + 1) {
      console.log('just dot do that , U know Y');
      return;
    }
    var temp = this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e];
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e] = this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e + 1];
    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][e + 1] = temp;
  }

  // functins on selected gen temp list
  selectGentempate(e) {
    let i = JSON.parse(e);
    if (i.select) {
      this.selectedTemplateKeyOutputIndex.push(i.index);
    }
    if (!(i.select)) {
      var index = this.selectedTemplateKeyOutputIndex.indexOf(i.index);
      if (index > -1) {
        this.selectedTemplateKeyOutputIndex.splice(index, 1);
      }
    }
  }

  selectedListDelete() {
    this.selectedTemplateKeyOutputIndex.sort((a, b) => b - a);
    for (let i of this.selectedTemplateKeyOutputIndex) {
      this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar].splice(i, 1);
    }
    this.selectedTemplateKeyOutputIndex = [];
  }

  selectedListDuplicate() {
    for (let i of this.selectedTemplateKeyOutputIndex) {
      this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar].push(JSON.parse(JSON.stringify(this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][i])));
    }
    this.selectedTemplateKeyOutputIndex = [];
  }

  selectedListCopyModel(IntentSelectionModal) {
    this.modalRef = this.modalService.show(IntentSelectionModal, {class: 'modal-lg'});
  }

  ngAfterViewInit(){
    this.channelSelectorForm.form.valueChanges.subscribe((value)=>{
      this.selectedChannelOfGenTemplate = value;
    });
  }

  selectedListCopy(modelGenTempNameForm: NgForm) {

    let selectedTemplateKeyObject = modelGenTempNameForm.value;
    /*Example: selectedTemplateKeyObject  = {A1:true, A2:false}*/
    let selectedGenTempObjList = [];
    for (let i of this.selectedTemplateKeyOutputIndex) {
      selectedGenTempObjList.push(this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar][i]);
    }

    let selectedIntentDestinationKeys = Object.keys(selectedTemplateKeyObject).filter((key) => selectedTemplateKeyObject[key]);
    for (let key of selectedIntentDestinationKeys) {
      this.templateKeyDict[key].push(...selectedGenTempObjList);
    }
    this.selectedTemplateKeyOutputIndex = [];
    this.modalRef.hide();
  }

  // selectedIntent(SIntent){
  //   this.selectedIntentTab = SIntent;
  // }

  // @ViewChild('fork_new_version_form') fork_new_version_form: HTMLFormElement;

  templateKeyDictClone = null;

  getTemplateKeyDictClone() {

    if (!this.templateKeyDictClone) this.templateKeyDictClone = {...this.templateKeyDict};
    return this.templateKeyDictClone;
  }

  editorCode;
  // editorCodeObj:{text:string} = {text:""};
  editorCodeObj = {
    'df_template': {text: ''},
    'df_rules': {text: ''},
    'generation_rules': {text: ''},
    'generation_templates': {text: ''},
    'workflow': {text: ''},
  };
  showVersionList = false;

  selectedVersion: IBotVersionData = null;
  code: ICode;

  constructor(
    private store: Store,
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private eventService: EventService,
    private utilityService: UtilityService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService,
  ) {
    super();
  }
  @ViewChild('channelSelectorForm') channelSelectorForm:NgForm;
  role:string;
  @Select() loggeduser$: Observable<{ user: IUser }>;
  showViewChangeToggle:boolean = true;
  ngOnInit() {

    this.loggeduser$.subscribe((loggeduserState)=>{
      this.role = loggeduserState.user.role.name;
      this.showViewChangeToggle = this.role===ERoleName.Admin || this.role===ERoleName['Bot Developer'];
    });

    this.activatedRoute.queryParams.subscribe((queryParam) => {
      /*when upper panel minimizes or maximizes, change lower panel height accordingly*/
      let showConfigStr = this.activatedRoute.snapshot.queryParamMap.get('show-config');
      this.showConfig = (showConfigStr === 'true' || showConfigStr == undefined);
    });

    this.serverService.getAllVersionOfBotFromServerAndStoreInBotInBotList(this.bot.id, this.bot.bot_access_token);
    this.botlist$_sub = this.botlist$.subscribe(() => {
      try {
        this.utilityService.getActiveVersionInBot(this.bot);
        if (this.bot.integrations && this.bot.integrations.channels) {
          this.channelList = Object.keys(this.bot.integrations.channels)
            .map((integrationKey) => {
              return {
                name: integrationKey,
                displayName: integrationKey
              };
            })
            .filter((enabledIntegrations) => this.bot.integrations.channels[enabledIntegrations.name].enabled);
          this.channelListClone = [...this.channelList];
          this.channelListClone.unshift({name: 'all', displayName: 'All'});
        }

        this.selectedChannelOfGenTemplate = {name: 'all', displayName: 'All'};
        this.channelNameList = this.channelList.map(channel => {
          return channel.name;
        }).filter(e => e !== 'all');

        setTimeout(() => {
          if (this.selectedVersion && this.selectedVersion[EBotVersionTabs.generation_templates]) {
            this.templateKeyDict = this.utilityService.parseGenTemplateCodeStrToObject(this.selectedVersion[EBotVersionTabs.generation_templates]);
            if (this.templateKeyDict) {
              this.templateKeyDictClone = {...this.templateKeyDict};
              if (!this.selectedTemplateKeyInLeftSideBar) this.selectedTemplateKeyInLeftSideBar = Object.keys(this.templateKeyDict)[0];
            }
          }
        });
      } catch (e) {
        console.error(e);
      }

      /*
      * if active version exists, selected version =active version
      * otherwise, selected version = first version, if that exists
      * */

      let activeVersion = this.activeVersion = this.utilityService.getActiveVersionInBot(this.bot);
      if (!this.selectedVersion || this.selectedVersion.id === -1)
        this.selectedVersion = activeVersion ? activeVersion : (this.bot.store_bot_versions && this.bot.store_bot_versions.length && this.bot.store_bot_versions[0]);
      else {
        /*updating selected version*/
        this.selectedVersion = this.bot.store_bot_versions && this.bot.store_bot_versions.length && this.bot.store_bot_versions.find((version) => version.id === this.selectedVersion.id);
      }


      if (!this.selectedVersion) {
        this.selectedVersion = this.constantsService.getSelectedVersionTemplate(this.bot.id);
      }

      this.forked_version_number = this.selectedVersion && this.selectedVersion.version;
      this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('code-tab') || EBotVersionTabs.df_template;
      this.bot.store_selected_version = this.selectedVersion && this.selectedVersion.id;
      this.tabClicked(this.activeTab);

    }, (err) => {
      LoggingService.log(err);
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
    /*TODO: We dont need code here... just replace it with selectedVersion. Also we dont need ICode interface*/
    if (this.selectedVersion) {
      this.editorCodeObj[this.activeTab].text = this.selectedVersion[this.activeTab];
      this.editorCodeObj[this.activeTab] = {...this.editorCodeObj[this.activeTab]};
    }

    if (activeTab === EBotVersionTabs.generation_templates) {
      this.convertGenTemplateCodeStringIntoUiComponents();
    }
    this.router.navigate([`core/botdetail/${EBotType.chatbot}/`, this.bot.id], {
      queryParams: {'code-tab': activeTab},
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  }

  convertGenTemplateCodeStringIntoUiComponents() {

    try {

      this.templateKeyDict = this.utilityService.parseGenTemplateCodeStrToObject(this.selectedVersion[EBotVersionTabs.generation_templates]);
      this.templateKeyDictClone = {...this.templateKeyDict};
    } catch (e) {
      console.log(e);
    }
  }

  dataType(item: any) {
    return typeof item;
  }

  updateSelectedTemplateKeyValue(codeStr: string) {

    this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar] = codeStr;
  }

  saveText(codeStr: string) {

    /*
    *at this point some changes have been made to selected version's codeText
    * */
    if (this.selectedVersion && this.selectedVersion.id) {
      let selectedVersion_pristine = this.bot.store_bot_versions && this.bot.store_bot_versions.find((version) => version.id === this.selectedVersion.id);
      let codeTextPristine = selectedVersion_pristine && selectedVersion_pristine[this.activeTab];
      if (!this.selectedVersion.changed_fields[this.activeTab])/*If field is dirty from server, nothing can change it*/
        this.selectedVersion.changed_fields[this.activeTab] = codeStr !== codeTextPristine;
      this.selectedVersion[this.activeTab] = codeStr;
    } else {
      /*we are creating a new version*/
      /*find bot version with id = -1*/
      let new_version: Partial<IBotVersionData> = this.bot.store_bot_versions && this.bot.store_bot_versions.find((version) => version.id === -1);
      if (!new_version) {
        new_version = this.constantsService.getNewBotVersionTemplate(this.bot.id);
        if (!this.bot.store_bot_versions) {
          this.bot.store_bot_versions = [];
        }
        this.bot.store_bot_versions.push(new_version);
      }
      this.selectedVersion = new_version;
      this.selectedVersion[this.activeTab] = codeStr;
    }
    /*comparing old code text to new*/


  }

  validateCodeTest(code: string) {
    let headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    let body = {
      // "df_template": this.editorCodeObjRef.text,
      // "df_rules": "",
      // "workflow": "",
      // "generation_rules": "",
      // "generation_templates": "",
      // "version": 4,
      // "comment": ""
    };
    body[this.activeTab] = code;

    let codeValidationUrl = this.constantsService.codeValidationUrl();

    this.serverService.makePostReq<any>({headerData, body, url: codeValidationUrl})
      .subscribe((validationResult) => {
        console.log('validation resulted ');
        this.selectedVersion.validation[this.activeTab] = validationResult[this.activeTab];
        // response is of form
        // bot_id: 245
        // comment: "Default active version"
        // df_rules: { error: true, error_line: "  print "aaa"↵", error_msg: "Missing parentheses in call to 'print'. Did you mean print("aaa")? at line number - 7" }
        // df_template: { msg: "No Errors" }
        // generation_rules: { msg: "No Errors" }
        // generation_templates: { msg: "No Errors" }
        // version: 4
        // workflow: { msg: "No Errors" }
      });
  }

  saveSelectedVersion(validationWarningModal) {

    if (this.showGenTempEditorAndHideGenTempUi === false) {
      this.convertUiDictToGenTemplateCode();
    }

    let headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };

    let validatinBody = {
      'df_template': this.selectedVersion.df_template,
      'df_rules': this.selectedVersion.df_rules,
      'workflow': this.selectedVersion.workflow,
      'generation_rules': this.selectedVersion.generation_rules,
      'generation_templates': this.selectedVersion.generation_templates,
      'version': this.selectedVersion.version,
      'comment': this.selectedVersion.comment
    };
    let codeValidationUrl = this.constantsService.codeValidationUrl();

    this.serverService.makePostReq<any>({headerData, body: validatinBody, url: codeValidationUrl})
      .subscribe((validationResult) => {
        this.selectedVersion.validation = validationResult;
        if (!this.selectedVersion.validation.df_template.error &&
          !this.selectedVersion.validation.df_rules.error &&
          !this.selectedVersion.validation.workflow.error &&
          !this.selectedVersion.validation.generation_rules.error &&
          !this.selectedVersion.validation.generation_templates.error) {

          this.selectedVersion.updated_fields = this.selectedVersion.changed_fields;
          this.selectedVersion.changed_fields = {
            'df_template': false,
            'df_rules': false,
            'generation_rules': false,
            'generation_template': false,
            'workflows': false
          };
          if (this.selectedVersion.id && this.selectedVersion.id !== -1) {
            let url = this.constantsService.getSaveVersionByBotId(this.bot.id);
            this.serverService.makePutReq({url, body: this.selectedVersion, headerData})
              .subscribe((value: IBotVersionData) => {
                this.selectedVersion = Object.assign(this.selectedVersion, value);
                LoggingService.log(this.bot.store_bot_versions);
                this.store.dispatch([
                  new UpdateVersionInfoByIdInBot({data: value, botId: this.bot.id})
                ]);
                this.utilityService.showSuccessToaster('New version saved');
              });
          } else {
            let url = this.constantsService.getCreateNewVersionByBotId(this.bot.id);
            let body = this.selectedVersion;
            delete body.id;
            delete body.resource_uri;
            delete body.forked_from;
            /*remove version id = -1, from store*/
            this.bot.store_bot_versions.length = 0;
            this.serverService.makePostReq({url, body, headerData})
              .subscribe((forkedVersion: IBotVersionData) => {
                LoggingService.log(forkedVersion);
                this.selectedVersion = forkedVersion;
                this.utilityService.showSuccessToaster('New version forked');
                this.store.dispatch([
                  new UpdateVersionInfoByIdInBot({data: forkedVersion, botId: this.bot.id})
                ]);
              });
          }
        }
        else {
          if (this.bot.active_version_id === this.selectedVersion.id) {
            this.modalRef = this.modalService.show(validationWarningModal, {class: 'modal-md'});
          }
          else {
            this.utilityService.showErrorToaster('Your code has error. But it will be save as its not active');

            this.selectedVersion.updated_fields = this.selectedVersion.changed_fields;
            this.selectedVersion.changed_fields = {
              'df_template': false,
              'df_rules': false,
              'generation_rules': false,
              'generation_template': false,
              'workflows': false
            };
            if (this.selectedVersion.id && this.selectedVersion.id !== -1) {
              let url = this.constantsService.getSaveVersionByBotId(this.bot.id);
              this.serverService.makePutReq({url, body: this.selectedVersion, headerData})
                .subscribe((value: IBotVersionData) => {
                  this.selectedVersion = Object.assign(this.selectedVersion, value);
                  LoggingService.log(this.bot.store_bot_versions);
                  this.store.dispatch([
                    new UpdateVersionInfoByIdInBot({data: value, botId: this.bot.id})
                  ]);
                  this.utilityService.showSuccessToaster('New version saved');
                });
            } else {
              let url = this.constantsService.getCreateNewVersionByBotId(this.bot.id);
              let body = this.selectedVersion;
              delete body.id;
              delete body.resource_uri;
              delete body.forked_from;
              /*remove version id = -1, from store*/
              this.bot.store_bot_versions.length = 0;
              this.serverService.makePostReq({url, body, headerData})
                .subscribe((forkedVersion: IBotVersionData) => {
                  LoggingService.log(forkedVersion);
                  this.selectedVersion = forkedVersion;
                  this.utilityService.showSuccessToaster('New version forked');
                  this.store.dispatch([
                    new UpdateVersionInfoByIdInBot({data: forkedVersion, botId: this.bot.id})
                  ]);
                });
            }

          }

        }
      });


  }

  convertUiDictToGenTemplateCode() {
    let parseUiDict = this.utilityService.parseGenTemplateUiDictionaryToIfElseCode(this.templateKeyDict);
    if (parseUiDict!=undefined) {
      this.selectedVersion.generation_templates = parseUiDict;
    }
    this.editorCodeObj = {...this.editorCodeObj, generation_templates: {text: this.selectedVersion.generation_templates}};
  }

  openForkNewVersionModal(template) {
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
    return;

    // let headerData: IHeaderData = {
    //   'bot-access-token': this.bot.bot_access_token
    // };
    // let url = this.constantsService.getCreateNewVersionByBotId(this.bot.id);
    // // this.selectedVersion.version=12;
    //
    // delete this.selectedVersion.id;
    // delete this.selectedVersion.resource_uri;
    // delete this.selectedVersion.resource_uri;
    //
    // this.serverService.makePostReq({url, body: this.selectedVersion, headerData})
    //   .subscribe((forkedVersion: IBotVersionData) => {
    //     LoggingService.log(forkedVersion);
    //     this.selectedVersion = forkedVersion;
    //     this.utilityService.showSuccessToaster('new version forked successfully!')
    //     ;
    //     this.ngOnInit();
    //     /*TODO: implement it correctly*/
    //   });
  }

  forkNewVersion() {

    if (!this.forked_version_number) {
      this.flashErrorMessage('Please select version id');
      return;
    }
    this.modalRef.hide();
    let forkedVersionInfo = this.bot.store_bot_versions.find((versions) => versions.version == this.forked_version_number);
    forkedVersionInfo = {...forkedVersionInfo};
    forkedVersionInfo.updated_fields = forkedVersionInfo.changed_fields;
    forkedVersionInfo.changed_fields = {
      'df_template': false,
      'df_rules': false,
      'generation_rules': false,
      'generation_template': false,
      'workflows': false
    };
    forkedVersionInfo.comment = this.forked_comments;
    forkedVersionInfo.forked_from = this.forked_version_number;
    let headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    let url = this.constantsService.getCreateNewVersionByBotId(this.bot.id);
    delete forkedVersionInfo.id;
    delete forkedVersionInfo.resource_uri;
    delete forkedVersionInfo.resource_uri;

    this.serverService.makePostReq({url, body: forkedVersionInfo, headerData})
      .subscribe((forkedVersion: IBotVersionData) => {
        LoggingService.log(forkedVersion);
        this.bot.store_bot_versions.push(forkedVersion);
        this.utilityService.showSuccessToaster('New version forked');
        this.forked_comments = '';
        this.forked_version_number = null;
        this.store.dispatch([
          new UpdateVersionInfoByIdInBot({botId: this.bot.id, data: forkedVersion})
        ]).subscribe(() => {
          this.changeSelectedVersion(forkedVersion);
          // this.selectedVersion = forkedVersion;
        });
        // this.ngOnInit();
        /*TODO: implement it correctly*/
      });
  }

  changeSelectedVersion(version) {
    this.bot.store_selected_version = version.id;
    this.selectedVersion = version;
    this.forked_version_number = this.selectedVersion.version;
    this.tabClicked(this.activeTab);
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

  scrollToBottom(): void {

    try {
      /*TODO: use ViewChildren instead of class name.
      * TODO: put animation here*/
      // this.genTempGridItemGrid.nativeElement.scrollTop = this.genTempGridItemGrid.nativeElement.scrollHeight -500;
      // let arr = this.gentemplateItems.toArray();
      // let lastItem = arr[arr.length-1]
      // lastItem.nativeElement.scrollIntoView();
      // console.log(lastItem.nativeElement);

      let arr1 = document.getElementsByClassName('gentemplateItem');
      let x = arr1[arr1.length - 1];
      x.scrollIntoView();


    } catch (err) {
      console.log(err);
    }
  }

  selectedChannelChanged(selectedChannel: string) {
    this.selectedChannelOfGenTemplate = this.channelListClone.find((channel) => channel.name === selectedChannel);
  }

  genTemplateViewChange(showGenTempEditorAndHideGenTempUi) {
    if (showGenTempEditorAndHideGenTempUi) {
      this.convertUiDictToGenTemplateCode();
    } else {
      this.convertGenTemplateCodeStringIntoUiComponents();
      if (!this.selectedTemplateKeyInLeftSideBar && this.templateKeyDict && Array.isArray(Object.keys(this.templateKeyDict))) {
        this.selectedTemplateKeyInLeftSideBar = Object.keys(this.templateKeyDict)[0];
      }
    }
  }

  openDeleteTemplateKeyModal(deleteTemplateKeyModal) {
    this.modalRef = this.modalService.show(deleteTemplateKeyModal);
  }

  openEditTemplateKeyModal(EditTemplateKeyModal) {
    this.modalRef = this.modalService.show(EditTemplateKeyModal);
  }

  deleteTemplateKey(tempKey) {
    delete this.templateKeyDict[tempKey];
    this.utilityService.showSuccessToaster('Template key deleted!');
    this.modalRef.hide();
  }

  editTemplateKey(templateKeyEditForm) {
    let {old_key, new_key} = templateKeyEditForm.value;
    this.utilityService.renameKeyInObject(this.templateKeyDict, old_key, new_key);
    this.selectedTemplateKeyInLeftSideBar = new_key;
    this.modalRef.hide();
  }

  selectAllCheckBoxesInCopyTemplateForm(form: NgForm) {
    let formVal = form.value;
    for (let key in formVal) {
      formVal[key] = true;
    }
    form.form.patchValue(formVal);
  }


  isTemplateKeyOutputUnparsable() {


    return this.activeTab === this.myEBotVersionTabs.generation_templates &&
      !this.showGenTempEditorAndHideGenTempUi &&
      this.templateKeyDict &&
      typeof this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar] === 'string';
  }

  test() {
    console.log(this.selectedVersion);
    console.log(this.bot.store_bot_versions);
  }
}
