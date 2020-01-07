import {Component, ElementRef, Input, OnInit, TemplateRef} from '@angular/core';
import {Observable} from 'rxjs';
import {IBot} from '../../interfaces/IBot';
import {EBotType, UtilityService} from '../../../utility.service';
import {ChatService} from '../../../chat.service';
import {EChatFrame, IChatSessionState} from '../../../../interfaces/chat-session-state';
import {ActivatedRoute, Router} from '@angular/router';
import {Select, Store} from '@ngxs/store';
import {
  ChangeFrameAction,
  DeleteChatRoomsByBotId,
  ResetChatState,
  SetCurrentBotDetailsAndResetChatStateIfBotMismatch, SetCurrentUId,
  ToggleChatWindow
} from '../../../chat/ngxs/chat.action';
import {ConstantsService} from '../../../constants.service';
import {ServerService} from '../../../server.service';
import {IHeaderData} from '../../../../interfaces/header-data';
import {IConsumerDetails} from '../../../chat/ngxs/chat.state';
import {IUser} from '../../interfaces/user';
import {IAuthState} from '../../../auth/ngxs/auth.state';
import {IEnterpriseProfileInfo} from '../../../../interfaces/enterprise-profile';
import {LoggingService} from '../../../logging.service';
import {UpdateBotInfoByIdInBotInBotList} from '../ngxs/view-bot.action';
import {CreateBotDialogComponent} from '../create-bot-dialog/create-bot-dialog.component';
import {MatDialog} from '@angular/material';
import {ModalConfirmComponent} from '../../../modal-confirm/modal-confirm.component';
import {ModalImplementer} from '../../../modal-implementer';
import {EventService} from '../../../event.service';
import {EAllActions, ERoleName} from '../../../typings/enum';

@Component({
  selector: 'app-bot-preview-card',
  templateUrl: './bot-preview-card.component.html',
  styleUrls: ['./bot-preview-card.component.scss']
})
export class BotPreviewCardComponent extends ModalImplementer implements OnInit {
  defaultImage = 'assets/img/no image.svg';
  EBotType = EBotType;
  @Input() bot: IBot;
  ServerService = ServerService;
  showLoader = false;
  @Select() loggeduser$: Observable<{ user: IUser }>;
  @Select() chatsessionstate$: Observable<IChatSessionState>;
  @Select() loggeduserenterpriseinfo$: Observable<IEnterpriseProfileInfo>;
  doStartBlinking = false;
  myObject = Object;
  message: string;
  @Input() parentRoute: string;
  currentChatPreviewBotId: number;
  currentUid: string;
  customConsumerDetails: IConsumerDetails;
  role: string;
  enterprise_unique_name: string;
  myEAllActions = EAllActions;
  menuOpened = false;

  constructor(
    public utilityService: UtilityService,
    private chatService: ChatService,
    private activatedRoute: ActivatedRoute,
    public router: Router,
    public constantsService: ConstantsService,
    public serverService: ServerService,
    public matDialog: MatDialog,
    public store: Store
  ) {
    super(utilityService, matDialog);
  }

  ngOnInit() {
    this.loggeduser$.subscribe((loggeduserState) => {
      this.enterprise_unique_name = loggeduserState && loggeduserState.user && loggeduserState.user.enterprise && loggeduserState.user.enterprise.enterprise_unique_name;
    });

    this.chatsessionstate$.subscribe((chatSessionState: IChatSessionState) => {
      if (chatSessionState && chatSessionState.currentBotDetails && chatSessionState.currentBotDetails.id) {
        this.currentChatPreviewBotId = chatSessionState.currentBotDetails.id;
      }
      this.currentUid = chatSessionState.currentUId;
      this.customConsumerDetails = chatSessionState.consumerDetails;
    });

    this.loggeduser$.subscribe((authState: IAuthState) => {
      this.role = authState.user && authState.user.role.name;
    });
  }

  copy(text: string, element) {
    this.utilityService.copyToClipboard(text);
    setTimeout(() => {
      element.hide();
    }, 1000);
  }


  previewBot(event: Event) {
    event.stopPropagation();
    // this.router.navigate(['', {outlets: {preview: 'preview'}}]);
    this.store.dispatch([
      new SetCurrentBotDetailsAndResetChatStateIfBotMismatch({
        bot: {...this.bot, enterprise_unique_name: this.enterprise_unique_name}
      }),
      new ToggleChatWindow({open: true}),
      new ChangeFrameAction({frameEnabled: EChatFrame.CHAT_BOX})
    ]);

    /*TODO: integrate this with store*/
    EventService.startANewChat({
      bot: this.bot, consumerDetails: {uid: this.utilityService.createRandomUid()},
    });

  }

  togglePinBotCard(bot, doPin) {
    this.store.dispatch([
      new UpdateBotInfoByIdInBotInBotList({botId: bot.id, data: {store_isPinned: doPin}})
    ]).subscribe(() => {
      if (doPin) {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
    });

  }

  async openDeleteModal() {

    await this.utilityService.openDialog({
      dialogRefWrapper: this.dialogRefWrapper,
      classStr: 'danger-modal-header-border',
      data: {
        actionButtonText: 'Delete bot',
        message: 'This action cannot be undone. Are you sure you wish to delete?',
        title: `Delete bot ${this.bot.name}?`,
        isActionButtonDanger: true,
        inputDescription: null,
        closeButtonText: 'Keep bot'
      },
      dialog: this.matDialog,
      component: ModalConfirmComponent
    }).then((data) => {

      if (data) {
        this.deleteBot();
      }
    });
    // this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
  }

  // async openDeleteModal() {
  //   let data = await this.utilityService.openDialog({
  //     dialog: this.matDialog,
  //     component: ModalConfirmComponent,
  //     data: {title:`Delete bot ${this.bot.name}?`, message:null, actionButtonText:"Delete", isActionButtonDanger:true},
  //     classStr: 'danger-modal-header-border',
  //     dialogRefWrapper:this.dialogRefWrapper
  //   });

  //   if(data){
  //     this.deleteBot();
  //   }
  // }

  deleteBot() {

    // this.modalRefWrapper.hide();
    const url = this.constantsService.getDeleteBotUrl(this.bot.id);
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot)
    };
    this.serverService.makeDeleteReq({url, headerData})
      .subscribe((value) => {
        this.serverService.getNSetBotList().subscribe(() => {
          this.utilityService.showSuccessToaster('Bot deleted');
          this.store.dispatch([
            new DeleteChatRoomsByBotId({id: this.bot.id})
          ]);
        });

      });
  }

  navigateToBotDetailPage(event) {// preview-button
    if (this.bot.bot_type !== EBotType.chatbot) {
      this.router.navigate(['core/botdetail/' + this.parentRoute + '/' + this.bot.id]);
      return;
    }

    if (!event.target.classList.contains('click-save-wrapper')) {
      this.router.navigate(['core/botdetail/' + this.parentRoute + '/' + this.bot.id]);
      this.showLoader = true;

      /*TODO:improve it*/

      if (ERoleName.Tester === this.role) {
        // this.router.navigate(['/core/viewbots/chatbot'], {queryParams:{preview:this.bot.roomId,build:"testing"}});
        if (this.bot.bot_type === 'chatbot') {
          this.router.navigate(['core/botdetail/' + this.parentRoute + '/' + this.bot.id], {
            queryParams: {
              preview: this.bot.id,
              build: 'test'
            }
          });
        } else {
          this.router.navigate(['core/botdetail/' + this.parentRoute + '/' + this.bot.id]);
        }

        /*TODO:improve it*/

      } else {
        this.router.navigate(['core/botdetail/' + this.parentRoute + '/' + this.bot.id]);
        /*TODO:improve it*/
      }
    }
  }

  test(channelName) {
    this.router.navigateByUrl(`core/botdetail/chatbot/${this.bot.id}?build-tab=integration&code-tab=df_template#${channelName}`);
  }


  copySharablePreviewLinkHandler() {
    this.utilityService.copySharablePreviewLink(this.bot.bot_unique_name, this.enterprise_unique_name);
  }
}
