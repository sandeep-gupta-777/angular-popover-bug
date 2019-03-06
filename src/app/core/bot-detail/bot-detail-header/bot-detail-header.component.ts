import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {IBot} from '../../interfaces/IBot';
import {ServerService} from '../../../server.service';
import {Select, Store} from '@ngxs/store';
import {ConstantsService, EAllActions} from '../../../constants.service';
import {IHeaderData} from '../../../../interfaces/header-data';
import {UtilityService} from '../../../utility.service';
import {ChangeFrameAction, SetCurrentBotDetailsAndResetChatStateIfBotMismatch, ToggleChatWindow} from '../../../chat/ngxs/chat.action';
import {EChatFrame} from '../../../../interfaces/chat-session-state';
import {AddNewBotInAllBotList, UpdateBotInfoByIdInBotInBotList} from '../../view-bots/ngxs/view-bot.action';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {IEnterpriseProfileInfo} from '../../../../interfaces/enterprise-profile';
import {ELogType, LoggingService} from '../../../logging.service';
import {ModalConfirmComponent} from '../../../modal-confirm/modal-confirm.component';
import {MatDialog} from '@angular/material';
import {ModalImplementer} from '../../../modal-implementer';
import {EventService} from '../../../event.service';

@Component({
  selector: 'app-bot-detail-header',
  templateUrl: './bot-detail-header.component.html',
  styleUrls: ['./bot-detail-header.component.scss']
})
export class BotDetailHeaderComponent extends ModalImplementer implements OnInit {

  @Input() bot: IBot;
  myObject = Object;
  myEAllActions = EAllActions;
  showSpinIcon = false;
  @Output() refreshBotDetails$ = new EventEmitter();
  enterprise_unique_name;
  @Select() loggeduserenterpriseinfo$: Observable<IEnterpriseProfileInfo>;

  constructor(
    private store: Store,
    private serverService: ServerService,
    private router: Router,
    public matDialog:MatDialog,
    public  utilityService: UtilityService,
    private constantsService: ConstantsService,
    ) {
    super(utilityService, matDialog);
  }

  ngOnInit() {
    this.loggeduserenterpriseinfo$.subscribe((enterpriseProfileInfo) => {
      this.enterprise_unique_name = enterpriseProfileInfo.enterprise_unique_name;
    });

    EventService.updateBot$.subscribe(()=>{
      this.updateBot();
    })
  }

  openBot() {
    this.store.dispatch([
      new SetCurrentBotDetailsAndResetChatStateIfBotMismatch({
        bot: {...this.bot, enterprise_unique_name: this.enterprise_unique_name}
      }),
      new ToggleChatWindow({open: true}),
      new ChangeFrameAction({frameEnabled: EChatFrame.WELCOME_BOX})
    ]);
    // this.store.dispatch([
    //   // new SetCurrentBotDetailsAndResetChatStateIfBotMismatch({
    //   //   bot:this.bot
    //   // }),
    //   new ToggleChatWindow({open: true}),
    //   // new ChangeFrameAction({frameEnabled: EChatFrame.WELCOME_BOX})
    // ]).subscribe(()=>{
    //   this.router.navigate(['/core/botdetail/chatbot/',this.bot.roomId], {
    //     queryParams: {preview: true, bot_unique_name: this.bot.bot_unique_name, enterprise_unique_name: this.enterprise_unique_name}
    //   });
    // })
  }

  /*TODO: remove it*/
  updateBot() {

    try {
      this.dialogRefWrapper.ref.close();
    } catch (e) {
      LoggingService.error(e);
    }
    this.bot.active_version_id = this.bot.store_selected_version;
    const bot = this.utilityService.performFormValidationBeforeSaving(this.bot);
    if (!bot) { return; }

    const url = this.constantsService.updateBotUrl(this.bot.id);
    const headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    if (this.bot.store_selected_version && this.bot.store_selected_version !== this.bot.active_version_id) {
      if (!confirm('active version has been changed')) { return; }
      this.bot.active_version_id = this.bot.store_selected_version;
    }
    const body:any = this.constantsService.updateBotSerializer(this.bot);

    this.serverService.makePutReq({url, body, headerData})
      .subscribe((updatedBot: IBot) => {

        EventService.botUpdatedInServer.emit(updatedBot);
        this.store.dispatch([
          new UpdateBotInfoByIdInBotInBotList({botId: this.bot.id, data: updatedBot})
        ]);
        this.utilityService.showSuccessToaster('Bot updated');
      },
      err  => {

        EventService.codeValidationErrorOnUpdate$.emit(err.error);
        console.log("emited this :::::::::::::",err.error);
      });
  }

  refreshBotDetails() {
    this.showSpinIcon = true;
    setTimeout(() => {
      this.showSpinIcon = false;
    }, 2000);
    this.refreshBotDetails$.emit();
  }

  deleteBot() {
    const url = this.constantsService.getDeleteBotUrl(this.bot.id);
    const headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    this.serverService.makeDeleteReq({url, headerData})
      .subscribe((value) => {
        this.serverService.getNSetBotList()
          .subscribe(() => {
            this.router.navigate(['']);
            this.utilityService.showSuccessToaster('Bot deleted');
          });
      });
  }
  dialogRefWrapper = {ref:null};
  openActiveBotChangedModal(template: TemplateRef<any>) {

    if (this.bot.store_selected_version && this.bot.store_selected_version !== this.bot.active_version_id) {

      let selectedVersion = this.bot.store_bot_versions.find(value => value.id == this.bot.store_selected_version);
      if(selectedVersion.changed_fields['df_template']||
        selectedVersion.changed_fields['df_rules']||
        selectedVersion.changed_fields['generation_rules']||
        selectedVersion.changed_fields['generation_templates']||
        selectedVersion.changed_fields['workflow']){
        this.utilityService.openDialog({
          dialogRefWrapper: this.dialogRefWrapper,
          classStr:'danger-modal-header-border',
          data:{
            actionButtonText:"Activate with last saved data",
            message: 'The version you are trying to make active contains unsaved changes.Do you want to use the last saved data of this version?',
            title:'Activate code version',
            isActionButtonDanger:true
          },
          dialog: this.matDialog,
          component:ModalConfirmComponent
        }).then((data)=>{
          if(data) this.updateBot();
        })
      }
      else{
        this.utilityService.openDialog({
          dialogRefWrapper: this.dialogRefWrapper,
          classStr:'danger-modal-header-border',
          data:{
            actionButtonText:"Update",
            message: 'If you update the bot your currently selected version will be the new Active version.',
            title:'Active version changed',
            isActionButtonDanger:true
          },
          dialog: this.matDialog,
          component:ModalConfirmComponent
        }).then((data)=>{
          if(data) this.updateBot();
        })
      }
    }
    else {
      this.updateBot();
    }
  }

  async openDeleteModal() {

    await this.utilityService.openDialog({
      dialogRefWrapper: this.dialogRefWrapper,
      classStr:'danger-modal-header-border',
      data:{
        actionButtonText:"Delete bot",
        message: null,
        title:`Delete ${this.bot.name}?`,
        isActionButtonDanger:true,
        inputDescription: null,
        closeButtonText: "Keep bot"
      },
      dialog: this.matDialog,
      component:ModalConfirmComponent
    }).then((data)=>{

      if(data){
        this.deleteBot();
      }
    })
    // this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
  }

  openAnalyticsForBot(){
    this.router.navigate(['/core/analytics2/overview'], {queryParams:{bot_id:this.bot.id}});
  }
}
