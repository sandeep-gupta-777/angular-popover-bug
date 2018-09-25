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
import {ConstantsService, ERoleName} from '../../../constants.service';
import {ServerService} from '../../../server.service';
import {IHeaderData} from '../../../../interfaces/header-data';
import {IConsumerDetails} from '../../../chat/ngxs/chat.state';
import {IUser} from '../../interfaces/user';
import {IAuthState} from '../../../auth/ngxs/auth.state';
import {IEnterpriseProfileInfo} from '../../../../interfaces/enterprise-profile';

@Component({
  selector: 'app-bot-preview-card',
  templateUrl: './bot-preview-card.component.html',
  styleUrls: ['./bot-preview-card.component.scss']
})
export class BotPreviewCardComponent implements OnInit {

  @Input() bot: IBot;
  @Select() loggeduser$: Observable<{ user: IUser }>;
  @Select() chatsessionstate$: Observable<IChatSessionState>;
  @Select() loggeduserenterpriseinfo$: Observable<IEnterpriseProfileInfo>;
  modalRef: BsModalRef;
  myObject = Object;
  message: string;
  parentRoute: string;
  currentChatPreviewBotId: number;
  currentUid: string;
  customConsumerDetails: IConsumerDetails;
  role: string;
  enterprise_unique_name: string;

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
    this.parentRoute = this.activatedRoute.snapshot.data.route;
    this.chatsessionstate$.subscribe((chatSessionState: IChatSessionState) => {
      if (chatSessionState && chatSessionState.currentBotDetails && chatSessionState.currentBotDetails.id)
        this.currentChatPreviewBotId = chatSessionState.currentBotDetails.id;
      this.currentUid = chatSessionState.currentUId;
      this.customConsumerDetails = chatSessionState.consumerDetails;
    });

    this.loggeduser$.subscribe((authState: IAuthState) => {
      this.role = authState.user.role.name;
    });
  }

  copy(text: string, element) {
    this.utilityService.copyToClipboard(text);
    setTimeout(() => {
      element.hide();
    }, 1000);
  }


  previewBot() {

    console.log("Bot Preview clicked");
    // if(log)http://localhost:4200/core/botdetail/chatbot/20?build=testing
    /*if a new bot is being opened=> clear previous chat state*/
    // if (this.bot.id !== (this.currentChatPreviewBotId && this.currentChatPreviewBotId)) {
      // this.store.dispatch([
        // nezw ToggleChatWindow({open: true}),
        // new SetCurrentUId({uid: (this.customConsumerDetails && this.customConsumerDetails.uid) || String(Date.now())}),
      // ]).subscribe(() => {
    this.store.dispatch([
      new SetCurrentBotDetailsAndResetChatStateIfBotMismatch({
        bot:{...this.bot,enterprise_unique_name:this.enterprise_unique_name}
      }),
      new ToggleChatWindow({open: true}),
      new ChangeFrameAction({frameEnabled: EChatFrame.WELCOME_BOX})
    ])
      // .subscribe(()=>{
      // this.router.navigate(['/core/viewbots/chatbot'], {
      //   queryParams: {preview: true, bot_unique_name: this.bot.bot_unique_name, enterprise_unique_name: this.enterprise_unique_name}
      // });
    // });

      // });
    // }
    // if (this.currentChatPreviewBotId && this.bot.id !== this.currentChatPreviewBotId) {
    //   this.store.dispatch([
    //     new ResetChatState()
    //   ]).subscribe(() => {
    //     /*TODO: code repeat; refactor the code*/
    //     this.store.dispatch([
    //       // new ChangeFrameAction({frameEnabled: EChatFrame.WELCOME_BOX}),
    //       new ToggleChatWindow({open: true}),
    //     ]).subscribe(() => {
    //       this.store.dispatch([
    //         new SetCurrentBotDetailsAndResetChatStateIfBotMismatch({
    //           id: this.bot.id,
    //           name: this.bot.name,
    //           bot_access_token: this.bot.bot_access_token,
    //           logo: this.bot.logo,
    //           bot_unique_name: this.bot.bot_unique_name,
    //           integrations:this.bot.integrations
    //         }),
    //         new SetCurrentUId({uid: (this.customConsumerDetails && this.customConsumerDetails.uid) || String(Date.now())}),
    //       ]).subscribe(() => {
    //         this.router.navigate(['/core/viewbots/chatbot'],
    //           {queryParams: {preview: true,bot_unique_name:this.bot.bot_unique_name,enterprise_unique_name:this.enterprise_unique_name}});
    //       });
    //     });
    //   });
    // } else {
    //   this.store.dispatch([
    //     new ChangeFrameAction({frameEnabled: EChatFrame.WELCOME_BOX}),
    //     new ToggleChatWindow({open: true}),
    //   ]).subscribe(() => {
    //     this.store.dispatch([
    //       new SetCurrentBotDetailsAndResetChatStateIfBotMismatch({
    //         id: this.bot.id,
    //         name: this.bot.name,
    //         bot_access_token: this.bot.bot_access_token,
    //         bot_unique_name: this.bot.bot_unique_name,
    //         logo: this.bot.logo,
    //         integrations:this.bot.integrations
    //       }),
    //       new SetCurrentUId({uid: (this.customConsumerDetails && this.customConsumerDetails.uid) || String(Date.now())}),
    //     ]);
    //   });
    // }

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  deleteBot() {
    this.modalRef.hide();
    let url = this.constantsService.getDeleteBotUrl(this.bot.id);
    let headerData: IHeaderData = {
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
    if (!event.target.classList.contains('click-save-wrapper')) {
      this.router.navigate(['core/botdetail/' + this.parentRoute + '/' + this.bot.id]);
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

  openBotDetailsPage() {
    // this.router.navigate(['core/botdetail/'+parentRoute+'/'+ bot.id])
    ;

  }


}
