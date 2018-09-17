import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Store, Select} from '@ngxs/store';
import {IBot, IBotVersionData, IBotVersionResult, ICode} from '../../../../../interfaces/IBot';
import {ServerService} from '../../../../../../server.service';
import {ConstantsService} from '../../../../../../constants.service';
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
export class CodeInputComponent implements OnInit, OnDestroy {

  showConfig = true;
  myEBotVersionTabs = EBotVersionTabs;
  activeTab: string = 'df_template';
  @Select() botlist$: Observable<ViewBotStateModel>;
  botlist$_sub: Subscription;
  @Select() botcreationstate$: Observable<IBotCreationState>;
  @Input() bot: IBot;
  @Output() datachanged$ = new EventEmitter();
  modalRef: BsModalRef;
  forked_From: number;
  forked_comments: string;
  errorMessage: string;
  forked_version_number: number;
  // @ViewChild('fork_new_version_form') fork_new_version_form: HTMLFormElement;

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
  activeVersion;
  selectedVersion: IBotVersionData;
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
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((queryParam)=>{
      let showConfigStr = this.activatedRoute.snapshot.queryParamMap.get('show-config');
      this.showConfig = (showConfigStr === 'true' || showConfigStr == undefined);
    });

    let url = this.constantsService.getAllVersionsByBotId();//comperror
    let botId = this.bot.id;
    this.serverService.makeGetReq<IBotVersionResult>({url, headerData: {'bot-access-token': this.bot.bot_access_token}})
      .subscribe((botVersionResult) => {
        this.store.dispatch([
          new SaveVersionInfoInBot({data: botVersionResult.objects, botId: this.bot.id})
        ]);
      });
    this.botlist$_sub = this.botlist$.subscribe((value) => {
      debugger;
      let activeVersion = this.bot.store_bot_versions && this.bot.store_bot_versions.find((BotVersion) => {
        return this.bot.active_version_id === BotVersion.id;
      });
      if (!activeVersion) {
        try {
          this.selectedVersion = this.bot.store_bot_versions[0];
        } catch (e) {
          console.log(e);
        }
      }
      this.activeVersion = activeVersion;;
      if (!this.selectedVersion) {
        this.selectedVersion = activeVersion;
        this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('code-tab') || EBotVersionTabs.df_template;
      }
      this.bot.store_selected_version = this.selectedVersion && this.selectedVersion.id;
      this.tabClicked(this.activeTab);

    }, (err) => {
      console.log(err);
    });


  }

  async openFile(inputEl) {
    this.editorCodeObj[this.activeTab].text = await this.utilityService.readInputFileAsText(inputEl);
    this.editorCodeObj[this.activeTab] = {...this.editorCodeObj[this.activeTab]};
  }

  @ViewChild(CodeEditorComponent) codeEditorComponent: ElementRef;

  tabClicked(activeTab: string) {
    // this.eventService.emitRemoveCodeMirrorHistoryEvent('code-input.component.ts');
    this.activeTab = activeTab;
    this.code = this.selectedVersion;
    /*TODO: We dont need code here... just replace it with selectedVersion. Also we dont need ICode interface*/
    if (this.code) {
      this.editorCodeObj[this.activeTab].text = this.code[this.activeTab];
      this.editorCodeObj[this.activeTab] = {...this.editorCodeObj[this.activeTab]};
    }
    this.router.navigate([`core/botdetail/${EBotType.chatbot}/`, this.bot.id], {
      queryParams: {'code-tab': activeTab},
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  }

  saveText(codeStr: string) {
    /*
    *at this point some changes have been made to selected version's codeText
    *if the new codeText is same as old codeText
    * */

    if (this.selectedVersion && this.selectedVersion.id) {
      let selectedVersion_pristine = this.bot.store_bot_versions && this.bot.store_bot_versions.find((version) => version.id === this.selectedVersion.id);
      let codeTextPristine = selectedVersion_pristine[this.activeTab];
      if (!this.selectedVersion.updated_fields[this.activeTab])/*If field is dirty from server, nothing can change it*/
        this.selectedVersion.updated_fields[this.activeTab] = codeStr !== codeTextPristine;
      this.selectedVersion[this.activeTab] = codeStr;
    } else {
      /*we are creating a new version*/
      /*find bot version with id = -1*/
      let new_version: Partial<IBotVersionData> = this.bot.store_bot_versions && this.bot.store_bot_versions.find((version) => version.id === -1);
      if (!new_version) {
        new_version = {
          'bot_id': this.bot.id,
          'comment': '',
          'df_rules': '',
          'df_template': '',
          'generation_rules': '',
          'generation_templates': '',
          'id': -1,
          'workflow': '',
          'updated_fields': {
            'df_template': false,
            'df_rules': false,
            'generation_rules': false,
            'generation_template': false,
            'workflows': false
          },
          'forked_from': -1,
        };
        this.selectedVersion = new_version;
        this.selectedVersion[this.activeTab] = codeStr;
        if (!this.bot.store_bot_versions) {
          this.bot.store_bot_versions = [];
        }
        this.bot.store_bot_versions.push(this.selectedVersion);
      }
      this.selectedVersion = new_version;
      new_version[this.activeTab] = codeStr;
    }
    /*comparing old code text to new*/


  }

  saveSelectedVersion() {

    let headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    if (this.selectedVersion.id && this.selectedVersion.id !== -1) {
      let url = this.constantsService.getSaveVersionByBotId(this.bot.id);
      this.serverService.makePutReq({url, body: this.selectedVersion, headerData})
        .subscribe((value:IBotVersionData) => {
          this.selectedVersion = Object.assign(this.selectedVersion, value);
          console.log(this.bot.store_bot_versions);
          this.store.dispatch([
            new UpdateVersionInfoByIdInBot({data: value, botId: this.bot.id})
          ]);
          this.utilityService.showSuccessToaster('new version saved successfully!');
        });
    } else {
      let url = this.constantsService.getCreateNewVersionByBotId(this.bot.id);
      let body = this.selectedVersion;
      delete body.id;
      delete body.resource_uri;
      delete body.forked_from;

      this.serverService.makePostReq({url, body, headerData})
        .subscribe((forkedVersion: IBotVersionData) => {
          console.log(forkedVersion);
          this.selectedVersion = forkedVersion;
          this.utilityService.showSuccessToaster('new version forked successfully!');
          this.store.dispatch([
            new UpdateVersionInfoByIdInBot({data:forkedVersion, botId:this.bot.id})
          ]);
          // this.ngOnInit();
          /*TODO: implement it correctly*/
        });
    }
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
    //     console.log(forkedVersion);
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
        console.log(forkedVersion);
        this.bot.store_bot_versions.push(forkedVersion);
        this.selectedVersion = forkedVersion;
        this.utilityService.showSuccessToaster('new version forked successfully!');
        this.forked_comments = "";
        this.forked_version_number = null;
        this.store.dispatch([
          new UpdateVersionInfoByIdInBot({botId:this.bot.id, data:forkedVersion})
        ]);
        // this.ngOnInit();
        /*TODO: implement it correctly*/
      });
  }

  changeSelectedVersion(version) {
    this.bot.store_selected_version = version.id;
    this.selectedVersion = version;
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
}
