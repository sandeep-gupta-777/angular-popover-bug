import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {EChatFrame, IChatSessionState, IMessageData, IRoomData} from '../../interfaces/chat-session-state';
import {AddMessagesToRoom, ChangeFrameAction, SetCurrentRoomID, ToggleChatWindow} from './ngxs/chat.action';
import {ServerService} from '../server.service';
import {ConstantsService} from '../constants.service';
import {ISendApiRequestPayload, ISendApiResponsePayload} from '../../interfaces/send-api-request-payload';
import {IHeaderData} from '../../interfaces/header-data';
import {ChatService} from '../chat.service';
import {IAuthState} from '../auth/ngxs/auth.state';
import {ActivatedRoute, Route, Router, RoutesRecognized} from '@angular/router';

@Component({
  selector: 'app-chat-wrapper',
  templateUrl: './chat-wrapper.component.html',
  styleUrls: ['./chat-wrapper.component.scss']
})
export class ChatWrapperComponent implements OnInit {

  @Select() chatsessionstate$: Observable<IChatSessionState>;
  @Select() loggeduser$: Observable<IAuthState>;
  @ViewChild('scrollMe') myScrollContainer: ElementRef;
  frameEnabled:EChatFrame = EChatFrame.WELCOME_BOX;
  myEChatFrame = EChatFrame;//This is required to use enums in template, we can't use enums direactly in templates
  windowOpen:boolean;
  messageData:IMessageData[] = null;
  selectedAvatar:any;
  currentRoom:IRoomData;
  bot_access_token:string;
  currentBotId:number;
  chatWindowTitle:string = "Start Chat";
  messageByHuman:string="";
  isFullScreenPreview;
  constructor(private store: Store,
              private serverService:ServerService,
              private constantsService: ConstantsService,
              private chatService: ChatService,
              private activatedRoute: ActivatedRoute,
              private route:Router
  ){}

  ngOnInit() {
    console.log("ChatWrapperComponent init");
    this.isFullScreenPreview = this.activatedRoute.snapshot.data.isFullScreenPreview;
    /*This is to access route data from non-subtree component
    * see: https://github.com/angular/angular/issues/11812
    * */
    this.route.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        // debugger;
        this.isFullScreenPreview = data.state.root.firstChild.data.isFullScreenPreview;
      }
    });

    this.chatsessionstate$.subscribe((chatSessionState: IChatSessionState)=>{
      if(!chatSessionState) return;
      let currentBot = chatSessionState.currentBotDetails;
      this.frameEnabled = chatSessionState.frameEnabled;
      this.windowOpen=chatSessionState.opened;
      this.currentRoom = chatSessionState.rooms.find((room)=>room.id===chatSessionState.currentRoomId);
      this.messageData = this.currentRoom && this.currentRoom.messageList;
      this.selectedAvatar = this.currentRoom && this.currentRoom.selectedAvatar;
      this.bot_access_token = this.currentRoom && this.currentRoom.bot_access_token || currentBot.token;
      this.currentBotId = chatSessionState.currentBotDetails && chatSessionState.currentBotDetails.id || currentBot.id;
      this.chatWindowTitle = chatSessionState.currentBotDetails && chatSessionState.currentBotDetails.name;
    });

    this.store.subscribe((state)=>{
    })
  }


  startNewChat(messageByHuman:string, frameEnabled?:EChatFrame){
    this.chatService.startNewChat(
      {
        bot_access_token:this.bot_access_token, id:this.currentBotId
      },
      messageByHuman,
      frameEnabled);
  }

  navigate(frame){
    this.chatService.navigate(frame);
  }

  closeChatWindow(){
    this.store.dispatch(new ToggleChatWindow({open:false}));
  }
  sendMessageByHuman(messageByHuman:string){
    if(messageByHuman.trim() === "") return;
    this.store.dispatch(new AddMessagesToRoom({
      id: this.currentRoom.id,
      messageList: [{
        text:messageByHuman,
        type:"human",
        time:"10:20 PM"
      }],
      bot_id: this.currentRoom.bot_id,
      bot_access_token:this.bot_access_token
    }));
    console.log("sending messgae by human");
    this.startNewChat(messageByHuman, null);
    this.messageByHuman="";
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { console.log(err)}
  }
  toggleChatWindow(){
    this.store.dispatch([
      new ToggleChatWindow({open:true})
    ])
  }
}
