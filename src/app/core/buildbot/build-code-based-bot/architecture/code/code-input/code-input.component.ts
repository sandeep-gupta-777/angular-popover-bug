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
import { Store, Select } from '@ngxs/store';
import { IBot, IBotVersionData, IBotVersionResult, ICode } from '../../../../../interfaces/IBot';
import { ServerService } from '../../../../../../server.service';
import { ConstantsService, EAllActions, ERoleName } from '../../../../../../constants.service';
import {
  SaveVersionInfoInBot,
  UpdateBotInfoByIdInBotInBotList,
  UpdateVersionInfoByIdInBot
} from '../../../../../view-bots/ngxs/view-bot.action';
import { SaveCodeInfo } from '../../../../ngxs/buildbot.action';
import { ViewBotStateModel } from '../../../../../view-bots/ngxs/view-bot.state';
import { Observable, Subscription } from 'rxjs';
import { IHeaderData } from '../../../../../../../interfaces/header-data';
import { EBotType, UtilityService } from '../../../../../../utility.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IBotCreationState } from '../../../../ngxs/buildbot.state';
import { CodeEditorComponent } from '../code-editor/code-editor.component';
import { EventService } from '../../../../../../event.service';
import { take } from 'rxjs/operators';
import { LoggingService } from '../../../../../../logging.service';
import { DebugBase } from '../../../../../../debug-base';
import { NgForm } from '@angular/forms';
import { IUser } from '../../../../../interfaces/user';
import { ModalImplementer } from '../../../../../../modal-implementer';
import { MatDialog } from '@angular/material';
import { ModalConfirmComponent } from 'src/app/modal-confirm/modal-confirm.component';

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


@Component({
  selector: 'app-code-input',
  templateUrl: './code-input.component.html',
  styleUrls: ['./code-input.component.scss'],

})
export class CodeInputComponent extends ModalImplementer implements OnInit, OnDestroy {


  modalRefWrapper = { ref: null };
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
  showGenTempEditorAndHideGenTempUi = false;
  selectedChannelOfGenTemplate: { name: string, displayName: string };
  validationMessageToggle = false;
  @ViewChild('ForkVersiontemplate') ForkVersiontemplate: ElementRef;
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
    'df_template': { text: '' },
    'df_rules': { text: '' },
    'generation_rules': { text: '' },
    'generation_templates': { text: '' },
    'workflow': { text: '' },
  };
  showVersionList = false;

  selectedVersion: IBotVersionData = null;
  code: ICode;

  constructor(
    private store: Store,
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private eventService: EventService,
    public utilityService: UtilityService,
    private router: Router,
    public matDialog: MatDialog,
    private activatedRoute: ActivatedRoute,
  ) {
    super(utilityService, matDialog);
  }

  role: string;
  @Select() loggeduser$: Observable<{ user: IUser }>;
  showViewChangeToggle = true;

  ngOnInit() {

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

      this.selectedVersion.validation = data;
      this.validationMessageToggle = true;
    });
    this.botlist$_sub = this.botlist$.subscribe(() => {


      // try {
      //   let newTemplateKeyDict = this.utilityService.parseGenTemplateCodeStrToObject(this.selectedVersion[EBotVersionTabs.generation_templates]);
      //   if(this.utilityService.areTwoJSObjectSame(this.templateKeyDict, newTemplateKeyDict)) return;
      // }catch (e) {
      //   console.log(e);
      // }

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
          if (this.channelListClone.length > 0) {
            this.channelListClone.unshift({ name: 'all', displayName: 'All' });
          }
        }

        this.selectedChannelOfGenTemplate = { name: 'all', displayName: 'All' };
        this.channelNameList = this.channelList.map(channel => {
          return channel.name;
        }).filter(e => e !== 'all');

      } catch (e) {
        console.error(e);
      }

      /*
      * if active version exists, selected version =active version
      * otherwise, selected version = first version, if that exists
      * */

      const activeVersion = this.activeVersion = this.utilityService.getActiveVersionInBot(this.bot);
      if (!this.selectedVersion || this.selectedVersion.id === -1) {
        this.selectedVersion = activeVersion ? activeVersion : (this.bot.store_bot_versions && this.bot.store_bot_versions.length && this.bot.store_bot_versions[0]);
      } else {
        /*updating selected version*/
        this.selectedVersion = this.bot.store_bot_versions && this.bot.store_bot_versions.length && this.bot.store_bot_versions.find((version) => version.id === this.selectedVersion.id);
      }


      if (!this.selectedVersion) {
        this.selectedVersion = this.constantsService.getSelectedVersionTemplate(this.bot.id);
      }

      this.forked_version_number = this.selectedVersion && this.selectedVersion.version;
      this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('code-tab') || EBotVersionTabs.df_template;
      // if(this.activeTab===EBotVersionTabs.generation_templates){
      //   this.activeTab = EBotVersionTabs.df_template;
      // }
      this.buildTab = this.activatedRoute.snapshot.queryParamMap.get('build-tab');
      this.bot.store_selected_version = this.selectedVersion && this.selectedVersion.id;

      try {
        if (this.selectedVersion && this.selectedVersion[EBotVersionTabs.generation_templates]) {
          const newTemplateKeyDict = this.utilityService.createDeepClone(this.utilityService.parseGenTemplateCodeStrToObject(this.selectedVersion[EBotVersionTabs.generation_templates]));
          if (!this.utilityService.areTwoJSObjectSame(this.templateKeyDict, newTemplateKeyDict)) {
            this.utilityService.emptyObjectWithoutChaningRef(this.templateKeyDict);
            if (this.templateKeyDict) {
              Object.assign(this.templateKeyDict, newTemplateKeyDict);
            } else {
              this.templateKeyDict = newTemplateKeyDict;
            }
            if (this.templateKeyDict) {
              this.templateKeyDictClone = { ...this.templateKeyDict };
              if (!this.selectedTemplateKeyInLeftSideBar) {
                this.selectedTemplateKeyInLeftSideBar = Object.keys(this.templateKeyDict)[0];
              }
            }
          }

        }
      } catch (e) {
        console.log(e);

      }

      this.tabClicked(this.activeTab);

    }, (err) => {
      LoggingService.log(err);
    });
  }

  async openFile(inputEl) {
    this.editorCodeObj[this.activeTab].text = await this.utilityService.readInputFileAsText(inputEl);
    this.editorCodeObj[this.activeTab] = { ...this.editorCodeObj[this.activeTab] };
  }

  @ViewChild(CodeEditorComponent) codeEditorComponent: ElementRef;
  @ViewChild('genTempGridItemGrid') genTempGridItemGrid: ElementRef;


  tabClicked(activeTab: string) {

    // if (this.activeTab===EBotVersionTabs.generation_templates && this.showGenTempEditorAndHideGenTempUi === false) {
    //   this.convertGenTemplateCodeStringIntoUiComponents();
    // }else if(this.activeTab===EBotVersionTabs.generation_templates && this.showGenTempEditorAndHideGenTempUi === false){
    //   this.convertUiDictToGenTemplateCode(this.templateKeyDict);
    // }

    this.activeTab = activeTab;
    /*TODO: We dont need code here... just replace it with selectedVersion. Also we dont need ICode interface*/
    if (this.selectedVersion) {
      this.editorCodeObj[this.activeTab].text = this.selectedVersion[this.activeTab];
      this.editorCodeObj[this.activeTab] = { ...this.editorCodeObj[this.activeTab] };
    }

    if (activeTab === EBotVersionTabs.generation_templates) {
      this.convertGenTemplateCodeStringIntoUiComponents();
    }
    this.router.navigate([`core/botdetail/${EBotType.chatbot}/`, this.bot.id], {
      queryParams: { 'code-tab': activeTab },
      queryParamsHandling: 'merge',
      preserveFragment: true,
      replaceUrl: true
    });
  }

  convertGenTemplateCodeStringIntoUiComponents() {
    try {
      console.log('convertGenTemplateCodeStringIntoUiComponents');
      this.templateKeyDict = this.utilityService.parseGenTemplateCodeStrToObject(this.selectedVersion[EBotVersionTabs.generation_templates]);
      this.isGentemplateCodeParsable = this.isGentemplateCodeParsableCheck(this.selectedVersion[EBotVersionTabs.generation_templates]);
      this.templateKeyDictClone = { ...this.templateKeyDict };
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

  saveText(codeStr: string) {

    /*
    *at this point some changes have been made to selected version's codeText
    * */
    if (this.selectedVersion && this.selectedVersion.id) {
      const selectedVersion_pristine = this.bot.store_bot_versions && this.bot.store_bot_versions.find((version) => version.id === this.selectedVersion.id);
      const codeTextPristine = selectedVersion_pristine && selectedVersion_pristine[this.activeTab];
      if (!this.selectedVersion.changed_fields[this.activeTab]) {/*If field is dirty from server, nothing can change it*/
        this.selectedVersion.changed_fields[this.activeTab] = codeStr !== codeTextPristine;
      }
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

  }

  validateCodeTest(code: string) {
    const headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    const body = {};
    body[this.activeTab] = code;

    const codeValidationUrl = this.constantsService.codeValidationUrl();

    this.serverService.makePostReq<any>({ headerData, body, url: codeValidationUrl })
      .subscribe((validationResult) => {
        console.log('validation resulted ');
        this.selectedVersion.validation[this.activeTab] = validationResult[this.activeTab];
      });
  }

  saveSelectedVersion() {

    if (this.showGenTempEditorAndHideGenTempUi === false && this.isGentemplateCodeParsable) {
      this.convertUiDictToGenTemplateCode(this.templateKeyDict);
    }

    const headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };

    const validatinBody = {
      'df_template': this.selectedVersion.df_template,
      'df_rules': this.selectedVersion.df_rules,
      'workflow': this.selectedVersion.workflow,
      'generation_rules': this.selectedVersion.generation_rules,
      'generation_templates': this.selectedVersion.generation_templates,
      'version': this.selectedVersion.version,
      'comment': this.selectedVersion.comment
    };
    const codeValidationUrl = this.constantsService.codeValidationUrl();

    this.serverService.makePostReq<any>({ headerData, body: validatinBody, url: codeValidationUrl })
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
            const url = this.constantsService.getSaveVersionByBotId(this.bot.id);
            this.serverService.makePutReq({ url, body: this.selectedVersion, headerData })
              .subscribe((value: IBotVersionData) => {
                this.selectedVersion = Object.assign(this.selectedVersion, value);
                LoggingService.log(this.bot.store_bot_versions);
                this.store.dispatch([
                  new UpdateVersionInfoByIdInBot({ data: value, botId: this.bot.id })
                ]);
                this.utilityService.showSuccessToaster('New version saved');
              });
          } else {
            const url = this.constantsService.getCreateNewVersionByBotId(this.bot.id);
            const body = this.selectedVersion;
            delete body.id;
            delete body.resource_uri;
            delete body.forked_from;
            /*remove version id = -1, from store*/
            this.bot.store_bot_versions.length = 0;
            this.serverService.makePostReq({ url, body, headerData })
              .subscribe((forkedVersion: IBotVersionData) => {
                LoggingService.log(forkedVersion);
                this.selectedVersion = forkedVersion;
                this.utilityService.showSuccessToaster('New version forked');
                this.store.dispatch([
                  new UpdateVersionInfoByIdInBot({ data: forkedVersion, botId: this.bot.id })
                ]);
              });
          }
        } else {

          if (this.bot.active_version_id === this.selectedVersion.id) {
            // this.modalRef = this.modalService.show(validationWarningModal, {class: 'modal-md'});
            // this.openPrimaryModal(validationWarningModal);
            this.utilityService.openDialog({
              dialogRefWrapper: this.dialogRefWrapper,
              classStr: 'danger-modal-header-border',
              data: {
                actionButtonText: "Fork an inactive version",
                message: 'The current active version has error which need to be rectified before saving the version.You can resolve the errors in the active version to save it right now.You can fork this version to an inactive version with these errors and you can save it,inactive versions can be saved with errors.',
                title: 'Version save failed',
                isActionButtonDanger: true
              },
              dialog: this.matDialog,
              component: ModalConfirmComponent
            }).then((data) => {
              if (data) {
                this.openForkNewVersionModal(this.ForkVersiontemplate);
              }
            })
          } else {
            this.utilityService.openDialog({
              dialogRefWrapper: this.dialogRefWrapper,
              classStr: 'danger-modal-header-border',
              data: {
                actionButtonText: "Save with errors",
                message: "Errors are found in the version, do you want to save the version? This version cannot be activated with errors.",
                title: `Save version with errors`,
                isActionButtonDanger: true,
                inputDescription: null,
                closeButtonText: "Keep editing"
              },
              dialog: this.matDialog,
              component: ModalConfirmComponent
            }).then((data) => {

              if (data) {
                this.utilityService.showErrorToaster('Your code has error. But it will be saved as its not active');
                this.selectedVersion.updated_fields = this.selectedVersion.changed_fields;
                this.selectedVersion.changed_fields = {
                  'df_template': false,
                  'df_rules': false,
                  'generation_rules': false,
                  'generation_template': false,
                  'workflows': false
                };
                if (this.selectedVersion.id && this.selectedVersion.id !== -1) {
                  const url = this.constantsService.getSaveVersionByBotId(this.bot.id);
                  this.serverService.makePutReq({ url, body: this.selectedVersion, headerData })
                    .subscribe((value: IBotVersionData) => {
                      this.selectedVersion = Object.assign(this.selectedVersion, value);
                      LoggingService.log(this.bot.store_bot_versions);
                      this.store.dispatch([
                        new UpdateVersionInfoByIdInBot({ data: value, botId: this.bot.id })
                      ]);
                      setTimeout(() => {
                        this.utilityService.showSuccessToaster('New version saved');
                      }, 2000);
                    });
                } else {
                  const url = this.constantsService.getCreateNewVersionByBotId(this.bot.id);
                  const body = this.selectedVersion;
                  delete body.id;
                  delete body.resource_uri;
                  delete body.forked_from;
                  /*remove version id = -1, from store*/
                  this.bot.store_bot_versions.length = 0;
                  this.serverService.makePostReq({ url, body, headerData })
                    .subscribe((forkedVersion: IBotVersionData) => {
                      LoggingService.log(forkedVersion);
                      this.selectedVersion = forkedVersion;

                      setTimeout(() => {
                        this.utilityService.showSuccessToaster('New version forked');
                      }, 2000);

                      this.store.dispatch([
                        new UpdateVersionInfoByIdInBot({ data: forkedVersion, botId: this.bot.id })
                      ]);
                    });
                }
              }
            })


          }
        }
      });


  }

  convertUiDictToGenTemplateCode(templateKeyDict) {
    const parseUiDict = this.utilityService.parseGenTemplateUiDictionaryToIfElseCode(templateKeyDict);
    if (parseUiDict != undefined) {
      this.selectedVersion.generation_templates = parseUiDict;
    }
    this.editorCodeObj = { ...this.editorCodeObj, generation_templates: { text: this.selectedVersion.generation_templates } };
  }

  openForkNewVersionModal(template) {
    // this.modalRef = this.modalService.show(template, {class: 'modal-md'});
    this.openPrimaryModal(template);
  }

  forkNewVersion() {

    if (!this.forked_version_number) {
      this.flashErrorMessage('Please select version id');
      return;
    }
    this.dialogRefWrapper.ref.close();
    let forkedVersionInfo = this.bot.store_bot_versions.find((versions) => versions.version == this.forked_version_number);
    forkedVersionInfo = { ...forkedVersionInfo };
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
    const headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    const url = this.constantsService.getCreateNewVersionByBotId(this.bot.id);
    delete forkedVersionInfo.id;
    delete forkedVersionInfo.resource_uri;
    delete forkedVersionInfo.resource_uri;

    this.serverService.makePostReq({ url, body: forkedVersionInfo, headerData })
      .subscribe((forkedVersion: IBotVersionData) => {
        LoggingService.log(forkedVersion);
        this.bot.store_bot_versions.push(forkedVersion);
        this.utilityService.showSuccessToaster('New version forked');
        this.forked_comments = '';
        this.forked_version_number = null;
        this.store.dispatch([
          new UpdateVersionInfoByIdInBot({ botId: this.bot.id, data: forkedVersion })
        ]).subscribe(() => {
          this.changeSelectedVersion(forkedVersion);
          // this.selectedVersion = forkedVersion;
        });
        // this.ngOnInit();
        /*TODO: implement it correctly*/
      });
  }

  changeSelectedVersion(version) {
    /*we are moving away from old version and going to new version
    * for old version => if view is UI view. covert ui view to code, if its code view don't do anything
    * for new version => if view is UI view. covert code to ui view, if its code view don't do anything
    * */
    if (this.showGenTempEditorAndHideGenTempUi === false) {
      this.convertUiDictToGenTemplateCode(this.templateKeyDict);
    }
    console.log('selected version changed');
    this.bot.store_selected_version = version.id;
    this.selectedVersion = version;
    this.forked_version_number = this.selectedVersion.version;
    if (this.showGenTempEditorAndHideGenTempUi === false) {
      this.convertGenTemplateCodeStringIntoUiComponents();
    }
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
      !this.showGenTempEditorAndHideGenTempUi &&
      this.templateKeyDict &&
      typeof this.templateKeyDict[this.selectedTemplateKeyInLeftSideBar] === 'string';
  }

  test() {
    // console.log(this.selectedVersion);
    // console.log(this.bot.store_bot_versions);
    console.log(this.templateKeyDict);
  }

  viewChanged(showGenTempEditorAndHideGenTempUi) {
    if (showGenTempEditorAndHideGenTempUi === false) {
      this.convertGenTemplateCodeStringIntoUiComponents();
    } else {
      this.convertGenTemplateCodeStringIntoUiComponents();
    }
  }

  downloadZip() {
    var zip = new JSZip();
    this.addFileToZip(zip, 'df_template.py', this.selectedVersion.df_template);
    this.addFileToZip(zip, 'df_rules.py', this.selectedVersion.df_rules);
    this.addFileToZip(zip, 'generation_rules.py', this.selectedVersion.generation_rules);
    this.addFileToZip(zip, 'generation_templates.py', this.selectedVersion.generation_templates);
    this.addFileToZip(zip, 'workflow.py', this.selectedVersion.workflow);
    // var img = zip.folder("images");
    // img.file("smile.gif", imgData, {base64: true});
    zip.generateAsync({ type: 'blob' })
      .then((content) => {
        // see FileSaver.js
        saveAs(content, `${this.bot.bot_unique_name}_codeV${this.selectedVersion.version}`);
      });
  }

  addFileToZip(zip: any, name: string, text: string) {
    zip.file(name, text);
  }


}
