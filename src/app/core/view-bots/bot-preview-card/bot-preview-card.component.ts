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
  SetCurrentBotDetails, SetCurrentUId,
  ToggleChatWindow
} from '../../../chat/ngxs/chat.action';
import {ConstantsService} from '../../../constants.service';
import {ServerService} from '../../../server.service';
import {IHeaderData} from '../../../../interfaces/header-data';
import {IConsumerDetails} from '../../../chat/ngxs/chat.state';

@Component({
  selector: 'app-bot-preview-card',
  templateUrl: './bot-preview-card.component.html',
  styleUrls: ['./bot-preview-card.component.scss']
})
export class BotPreviewCardComponent implements OnInit {

  @Input() bot: IBot;
  @Select() chatsessionstate$:Observable<IChatSessionState>;
  modalRef: BsModalRef;
  myObject = Object;
  message: string;
  parentRoute: string;
  currentChatPreviewBotId:number;
  currentUid:string;
  customConsumerDetails:IConsumerDetails;

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
    this.parentRoute = this.activatedRoute.snapshot.data.route;
    this.chatsessionstate$.subscribe((chatSessionState:IChatSessionState)=>{
      if(chatSessionState && chatSessionState.currentBotDetails && chatSessionState.currentBotDetails.id)
      this.currentChatPreviewBotId = chatSessionState.currentBotDetails.id;
      this.currentUid = chatSessionState.currentUId;
      this.customConsumerDetails = chatSessionState.consumerDetails;
    });
  }

  copy(text: string, element) {
    this.utilityService.copyToClipboard(text);
    setTimeout(() => {
      element.hide();
    }, 1000);
  }

  openBot() {

    this.router.navigate(['/core/viewbots/chatbot'], {queryParams:{preview:this.bot.id}});

    /*if a new bot is being opened=> clear previous chat state*/
    if(this.currentChatPreviewBotId && this.bot.id!==this.currentChatPreviewBotId){
      this.store.dispatch([
        new ResetChatState()
      ]).subscribe(()=>{
        this.store.dispatch([
          // new ChangeFrameAction({frameEnabled: EChatFrame.WELCOME_BOX}),
          new ToggleChatWindow({open: true}),
        ]).subscribe(() => {
          this.store.dispatch([
            new SetCurrentBotDetails({id:this.bot.id, name:this.bot.name, token:this.bot.bot_access_token, logo:this.bot.logo}),
            new SetCurrentUId({uid: (this.customConsumerDetails&& this.customConsumerDetails.uid) ||String(Date.now())}),
          ]);
        });
      })
    }else {
      this.store.dispatch([
        new ChangeFrameAction({frameEnabled: EChatFrame.WELCOME_BOX}),
        new ToggleChatWindow({open: true}),
      ]).subscribe(() => {
        this.store.dispatch([
          new SetCurrentBotDetails({id:this.bot.id, name:this.bot.name, token:this.bot.bot_access_token, logo:this.bot.logo}),
          new SetCurrentUId({uid: (this.customConsumerDetails&& this.customConsumerDetails.uid) ||String(Date.now())}),
        ]);
      });
    }

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
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
            this.utilityService.showSuccessToaster('Bot successfully deleted!');
            this.store.dispatch([
              new DeleteChatRoomsByBotId({id: this.bot.id})
            ]);
          });

      });
  }

  navigateToBotDetailPage(event){//preview-button
    if(!event.target.classList.contains('click-save-wrapper')){
      this.router.navigate(['core/botdetail/'+this.parentRoute+'/'+ this.bot.id])/*TODO:improve it*/
    }
  }


}
