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
    private constantsService: ConstantsService) {
    super(utilityService, matDialog);
  }

  ngOnInit() {
    this.loggeduserenterpriseinfo$.subscribe((enterpriseProfileInfo) => {
      this.enterprise_unique_name = enterpriseProfileInfo.enterprise_unique_name;
    });
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
    //   this.router.navigate(['/core/botdetail/chatbot/',this.bot.id], {
    //     queryParams: {preview: true, bot_unique_name: this.bot.bot_unique_name, enterprise_unique_name: this.enterprise_unique_name}
    //   });
    // })
  }

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
    if (!body.logo) {
      body.logo = 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png';
    }
    this.serverService.makePutReq({url, body, headerData})
      .subscribe((updatedBot: IBot) => {
        this.store.dispatch([
          new UpdateBotInfoByIdInBotInBotList({botId: this.bot.id, data: updatedBot})
        ]);
        this.utilityService.showSuccessToaster('Bot updated');
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
    else {
      this.updateBot();
    }
  }


  async openDeleteModal() {
    let data = await this.utilityService.openDialog({
      dialog: this.matDialog,
      component: ModalConfirmComponent,
      data: {title:`Delete bot ${this.bot.name}?`, message:null, actionButtonText:"Delete", isActionButtonDanger:true},
      classStr: 'danger-modal-header-border',
      dialogRefWrapper:this.dialogRefWrapper
    });


    if(data){
      this.deleteBot();
    }
  }
}
