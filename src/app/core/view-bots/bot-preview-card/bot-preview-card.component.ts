import {Component, ElementRef, Input, OnInit, TemplateRef} from '@angular/core';
import {Observable} from 'rxjs';
import {IBot} from '../../interfaces/IBot';
import {UtilityService} from '../../../utility.service';
import {ChatService} from '../../../chat.service';
import {EChatFrame, IChatSessionState} from '../../../../interfaces/chat-session-state';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import {Select, Store} from '@ngxs/store';
import {
  ChangeFrameAction,
  DeleteChatRoomsByBotId,
  ResetChatState,
  SetCurrentBotDetailsAndResetChatStateIfBotMismatch, SetCurrentUId,
  ToggleChatWindow
} from '../../../chat/ngxs/chat.action';
import {ConstantsService, ERoleName, EAllActions} from '../../../constants.service';
import {ServerService} from '../../../server.service';
import {IHeaderData} from '../../../../interfaces/header-data';
import {IConsumerDetails} from '../../../chat/ngxs/chat.state';
import {IUser} from '../../interfaces/user';
import {IAuthState} from '../../../auth/ngxs/auth.state';
import {IEnterpriseProfileInfo} from '../../../../interfaces/enterprise-profile';
import {LoggingService} from '../../../logging.service';
import {UpdateBotInfoByIdInBotInBotList} from '../ngxs/view-bot.action';

@Component({
  selector: 'app-bot-preview-card',
  templateUrl: './bot-preview-card.component.html',
  styleUrls: ['./bot-preview-card.component.scss']
})
export class BotPreviewCardComponent implements OnInit {

  @Input() bot: IBot;
  showLoader = false;
  @Select() loggeduser$: Observable<{ user: IUser }>;
  @Select() chatsessionstate$: Observable<IChatSessionState>;
  @Select() loggeduserenterpriseinfo$: Observable<IEnterpriseProfileInfo>;
  modalRef: BsModalRef;
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

  constructor(
    public utilityService: UtilityService,
    private chatService: ChatService,
    private modalService: BsModalService,
    private activatedRoute: ActivatedRoute,
    public router: Router,
    public constantsService: ConstantsService,
    public serverService: ServerService,
    public store: Store
  ) {
  }

  ngOnInit() {
    this.loggeduserenterpriseinfo$.subscribe((enterpriseProfileInfo) => {
      this.enterprise_unique_name = enterpriseProfileInfo.enterprise_unique_name;
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


  previewBot() {
    this.router.navigate(['', {outlets: {preview: 'preview'}}]);
    this.store.dispatch([
      new SetCurrentBotDetailsAndResetChatStateIfBotMismatch({
        bot: {...this.bot, enterprise_unique_name: this.enterprise_unique_name}
      }),
      new ToggleChatWindow({open: true}),
      new ChangeFrameAction({frameEnabled: EChatFrame.WELCOME_BOX})
    ]);

  }

  togglePinBotCard(bot, doPin) {
    this.store.dispatch([
      new UpdateBotInfoByIdInBotInBotList({botId: bot.id, data: {store_isPinned: doPin}})
    ]).subscribe(() => {
      if (doPin) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  deleteBot() {
    this.modalRef.hide();
    const url = this.constantsService.getDeleteBotUrl(this.bot.id);
    const headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
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

  navigateToBotDetailPage(event) {//preview-button
    debugger;
    if (!event.target.classList.contains('click-save-wrapper')) {
      this.router.navigate(['core/botdetail/' + this.parentRoute + '/' + this.bot.id]);
      this.showLoader = true;

      /*TODO:improve it*/

      if (ERoleName.Tester === this.role) {
        // this.router.navigate(['/core/viewbots/chatbot'], {queryParams:{preview:this.bot.id,build:"testing"}});
        this.router.navigate(['core/botdetail/' + this.parentRoute + '/' + this.bot.id], {
          queryParams: {
            preview: this.bot.id,
            build: 'testing'
          }
        });
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

}
