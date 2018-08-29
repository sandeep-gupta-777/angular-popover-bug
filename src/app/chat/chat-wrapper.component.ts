import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {EChatFrame, IChatSessionState, IMessageData, IRoomData} from '../../interfaces/chat-session-state';
import {
  AddMessagesToRoomByUId,
  ChangeFrameAction,
  SetCurrentUId,
  SetCurrentRoomID,
  ToggleChatWindow,
  AddNewRoom
} from './ngxs/chat.action';
import {ServerService} from '../server.service';
import {ConstantsService} from '../constants.service';
import {ISendApiRequestPayload, ISendApiResponsePayload} from '../../interfaces/send-api-request-payload';
import {IHeaderData} from '../../interfaces/header-data';
import {ChatService} from '../chat.service';
import {IAuthState} from '../auth/ngxs/auth.state';
import {ActivatedRoute, Route, Router, RoutesRecognized} from '@angular/router';
import {UtilityService} from '../utility.service';
import {IBot} from '../core/interfaces/IBot';
import {ViewBotStateModel} from '../core/view-bots/ngxs/view-bot.state';

@Component({
  selector: 'app-chat-wrapper',
  templateUrl: './chat-wrapper.component.html',
  styleUrls: ['./chat-wrapper.component.scss']
})
export class ChatWrapperComponent implements OnInit {

  @Select() chatsessionstate$: Observable<IChatSessionState>;
  @Select() loggeduser$: Observable<IAuthState>;
  @Select() botlist$: Observable<ViewBotStateModel>;
  @ViewChild('scrollMe') myScrollContainer: ElementRef;
  frameEnabled: EChatFrame = EChatFrame.WELCOME_BOX;
  myEChatFrame = EChatFrame;//This is required to use enums in template, we can't use enums direactly in templates
  windowOpen: boolean = false;
  messageData: IMessageData[] = null;
  selectedAvatar: any;
  loggeduser:IAuthState;
  currentRoom: IRoomData;
  current_uid: string;
  bot_access_token: string;
  currentBotId: number;
  currentBot: IBot;
  allBotList: IBot[];
  chatWindowTitle: string = 'Start Chat';
  messageByHuman: string = '';
  isFullScreenPreview;

  constructor(private store: Store,
              private serverService: ServerService,
              private constantsService: ConstantsService,
              private chatService: ChatService,
              private activatedRoute: ActivatedRoute,
              private utilityService: UtilityService,
              private route: Router
  ) {
  }

  ngOnInit() {
    this.loggeduser$.subscribe((loggeduser)=>{
      this.loggeduser = loggeduser;
    })
    this.botlist$.subscribe((value) => {
      this.allBotList = value.allBotList;
    });
    this.isFullScreenPreview = this.activatedRoute.snapshot.data.isFullScreenPreview;
    /*This is to access route data from non-subtree component
    * see: https://github.com/angular/angular/issues/11812
    * */
    this.route.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        // ;
        this.isFullScreenPreview = data.state.root.firstChild.data.isFullScreenPreview;
      }
    });

    this.chatsessionstate$.subscribe((chatSessionState: IChatSessionState) => {

      ;
      try{
        this.windowOpen = chatSessionState.opened;
        if (!chatSessionState || !chatSessionState.opened) return;
        this.currentBot = this.allBotList.find((value)=>value.id===chatSessionState.currentBotDetails.id);
        this.frameEnabled = chatSessionState.frameEnabled;
        this.currentRoom = chatSessionState.rooms.find((room) => room.uid === chatSessionState.currentUId);
        if(this.currentBot){
          this.currentBotId = this.currentBot.id;//chatSessionState.currentBotDetails && chatSessionState.currentBotDetails.id || currentBot.id;
          this.bot_access_token = this.currentBot.bot_access_token;//this.currentRoom && this.currentRoom.bot_access_token || currentBot.bot_access_token;
          this.chatWindowTitle = chatSessionState.currentBotDetails && chatSessionState.currentBotDetails.name;
        }
        if(this.currentRoom && this.currentBot){
          this.messageData = this.currentRoom && this.currentRoom.messageList;
          this.selectedAvatar = this.currentRoom && this.currentRoom.selectedAvatar;
          // this.currentBot = this.allBotList.find((bot) => bot.id === this.currentBotId);
          this.current_uid =chatSessionState.currentUId;
        }
      }catch (e) {
        console.error(e);
      }
    });

    this.store.subscribe((state) => {
    });
  }


  startNewChat() {
    /*create a new chat room with a uid and without room id
    * add first message of bot into the room
    * open the chat window
    * */

    ;
    // ;
    let new_uid = this.utilityService.createRandomString(12);
    this.store.dispatch([
      new AddNewRoom({
        uid: new_uid,
        bot_id: this.currentBot.id,
        bot_access_token: this.currentBot.bot_access_token,
        id: null,
        messageList: [
          {
            text: this.currentBot.first_message||'I have no first message',
            time: this.utilityService.getCurrentTimeInHHMM(),
            type: 'bot'
          }
        ],
        selectedAvatar:{
          // "id": number,
          "imageUrl": this.currentBot.logo,
          "name": this.currentBot.name
        },
        lastTemplateKey:"none"
      }),
      new ChangeFrameAction({frameEnabled:EChatFrame.CHAT_BOX})
    ]).subscribe(()=>{
      this.store.dispatch([
        new SetCurrentUId({uid: new_uid})
      ])
    })
    // this.chatService.startNewChat(
    //   {
    //     bot_access_token:this.bot_access_token, id:this.currentBotId
    //   },
    //   current_uid,
    //   messageByHuman,
    //   frameEnabled);
  }

  navigate(frame) {
    this.chatService.navigate(frame);
  }

  closeChatWindow() {
    this.store.dispatch(new ToggleChatWindow({open: false}));
  }

  sendMessageByHuman(messageByHuman: string) {
    if (messageByHuman.trim() === '') return;
    this.store.dispatch(new AddMessagesToRoomByUId({
      id: this.currentRoom.id,
      uid: this.current_uid,
      messageList: [{
        text: messageByHuman,
        type: 'human',
        time: this.utilityService.getCurrentTimeInHHMM()
      }],
      bot_id: this.currentRoom.bot_id,
      bot_access_token: this.bot_access_token,
      lastTemplateKey:'none'
    }))
      .subscribe(()=>{
        // ;
        this.chatService.startNewChat(
          {
            bot_access_token:this.bot_access_token, id:this.currentBotId
          },
          this.current_uid,
          messageByHuman,
          EChatFrame.CHAT_BOX);
      });

    console.log('sending messgae by human');
    // this.startNewChat(messageByHuman, null);
    this.messageByHuman = '';
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.log(err);
    }
  }

  toggleChatWindow() {
    this.store.dispatch([
      new ToggleChatWindow({open: true})
    ]);
  }
}
