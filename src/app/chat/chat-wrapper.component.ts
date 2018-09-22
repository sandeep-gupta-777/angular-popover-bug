import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {EBotMessageMediaType, EChatFrame, IChatSessionState, IMessageData, IRoomData} from '../../interfaces/chat-session-state';
import {
  // AddMessagesToRoomByUId,
  ChangeFrameAction,
  // SetCurrentUId,
  SetCurrentRoomID,
  ToggleChatWindow,
  AddNewRoom, AddMessagesToRoomByRoomId, SetConsumerDetail, SetCurrentBotDetails, ResetChatState
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
import {IConsumerDetails} from './ngxs/chat.state';
import {IEnterpriseProfileInfo} from '../../interfaces/enterprise-profile';
import {UpdateBotInfoByIdInBotInBotList} from '../core/view-bots/ngxs/view-bot.action';

export interface IBotPreviewFirstMessage {
  'generated_msg': [
    {
      'text': 'lkjlksdmfasd'
    },
    {
      'text': 'Test consent message'
    }
    ],
  'room': {
    'agent_handover': false,
    'allow_anonymization': false,
    'bot_id': 27,
    'consent_permissions': any[],
    'consumer_id': number,
    'created_at': 1536148813000,
    'cross_retention_period': false,
    'data_store': {},
    'df_state': {
      'answer': null,
      'question': null
    },
    'id': 11924,
    'imichat_agent': {},
    'is_anonymized': false,
    'last_updated_job_id': '5b8fc54d7364530005872f08',
    'manager_bot_room_id': 0,
    'resource_uri': '/api/v1/room/11924/',
    'room_state_closed': false,
    'selected_avatar': {
      'id': 0,
      'imageUrl': 'https://www.gstatic.com/webp/gallery3/2_webp_a.png',
      'name': 'StarBot'
    },
    'updated_at': 1536148813000
  },
  'transaction_id': '1cba048e58684206b8c3912b7f7e1887'
}

@Component({
  selector: 'app-chat-wrapper',
  templateUrl: './chat-wrapper.component.html',
  styleUrls: ['./chat-wrapper.component.scss']
})
export class ChatWrapperComponent implements OnInit {

  @Select() chatsessionstate$: Observable<IChatSessionState>;
  @Select() loggeduser$: Observable<IAuthState>;
  @Select() botlist$: Observable<ViewBotStateModel>;
  @Select() loggeduserenterpriseinfo$: Observable<IEnterpriseProfileInfo>;
  @ViewChild('scrollMe') myScrollContainer: ElementRef;
  frameEnabled: EChatFrame = EChatFrame.WELCOME_BOX;
  myEChatFrame = EChatFrame;//This is required to use enums in template, we can't use enums direactly in templates
  windowOpen: boolean = false;
  messageData: IMessageData[] = null;
  selectedAvatar: any;
  loggeduser: IAuthState;
  currentRoom: IRoomData;
  current_uid: string;
  customConsumerDetails: IConsumerDetails;
  bot_access_token: string;
  currentBotId: number;
  currentBot: any;
  allBotList: IBot[];
  chatWindowTitle: string = 'Start Chat';
  messageByHuman: string = '';
  isFullScreenPreview;
  welcomeScreenBotId: number;
  enterprise_logo = 'https://hm.imimg.com/imhome_gifs/indiamart-og1.jpg';
  enterprise_unique_name: string;
  user_first_name;
  user_email;
  showBotIsThinking = false;

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
    this.loggeduser$.subscribe((loggeduser) => {
      // this.loggeduser = loggeduser;
      try {
        this.user_first_name = this.loggeduser.user.first_name;
        this.user_email = this.loggeduser.user.email;
      } catch (e) {
        console.log(e);
      }
    });
    this.botlist$.subscribe((value) => {
      this.allBotList = value.allBotList;
    });

    this.activatedRoute.queryParamMap.subscribe((queryparam) => {
      let welcomeScreenBotIdStr = queryparam.get('preview');
      if (welcomeScreenBotIdStr) {
        this.welcomeScreenBotId = Number(welcomeScreenBotIdStr);
        if (this.welcomeScreenBotId !== this.currentBot.id)
          this.frameEnabled = EChatFrame.WELCOME_BOX;
      }
    });
    this.loggeduserenterpriseinfo$.subscribe((enterpriseProfileInfo) => {
      this.enterprise_logo = enterpriseProfileInfo.logo || this.enterprise_logo;
      this.enterprise_unique_name = enterpriseProfileInfo.enterprise_unique_name;
    });
    this.isFullScreenPreview = this.activatedRoute.snapshot.data.isFullScreenPreview;
    /*This is to access route data from non-subtree component
    * see: https://github.com/angular/angular/issues/11812
    * */
    this.route.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.isFullScreenPreview = data.state.root.firstChild.data.isFullScreenPreview;
      }
    });

    this.chatsessionstate$.subscribe((chatSessionState: IChatSessionState) => {
      try {
        this.windowOpen = chatSessionState.opened;
        if (!chatSessionState) return;
        if (chatSessionState.currentBotDetails) {
          this.currentBot = chatSessionState.currentBotDetails;
          this.bot_access_token = this.currentBot.bot_access_token;//this.currentRoom && this.currentRoom.bot_access_token || currentBot.bot_access_token;
          this.chatWindowTitle = chatSessionState.currentBotDetails && chatSessionState.currentBotDetails.name;
        }
        if (chatSessionState.currentRoomId) {
          this.currentRoom = chatSessionState.rooms.find((room) => room.id === chatSessionState.currentRoomId);
          this.messageData = this.currentRoom && this.currentRoom.messageList;
          this.selectedAvatar = this.currentRoom && this.currentRoom.selectedAvatar;
        }

        this.frameEnabled = chatSessionState.frameEnabled;
        if (chatSessionState.consumerDetails) {
          this.customConsumerDetails = chatSessionState.consumerDetails;
          this.current_uid = chatSessionState.consumerDetails.uid;
        } else {
          this.current_uid = chatSessionState.currentUId;
        }
      } catch (e) {
        console.error(e);
      }
    });

    let bot_unique_name = this.activatedRoute.snapshot.queryParams['bot_unique_name'];//testingbot
    if (this.currentBot.bot_unique_name !== bot_unique_name) {
      let enterprise_unique_name = this.activatedRoute.snapshot.queryParams['enterprise_unique_name'];//testingbot
      if (!bot_unique_name) return;
      let url = `https://dev.imibot.ai/api/v1/bot/preview/?bot_unique_name=${bot_unique_name}&enterprise_unique_name=${enterprise_unique_name}`;
      this.serverService.makeGetReq({url, noValidateUser: true})
        .subscribe((bot: IBot) => {
          debugger;
          this.user_first_name = bot.enterprise_name;
          this.enterprise_logo = bot.enterprise_logo;
          // this.user_email =bot.enterprise_name;
          this.store.dispatch([
            new UpdateBotInfoByIdInBotInBotList({data: bot, botId: bot.id}),
            new ResetChatState(),
            new SetCurrentBotDetails({
              id: bot.id,
              name: bot.name,
              bot_access_token: bot.bot_access_token,
              logo: bot.logo,
              bot_unique_name: bot.bot_unique_name
            }),
          ]);
        });
    }

  }

  openPreviewTab() {
    // window.open(`https://www.google.com`, "_blank");
  }

  createCustomRoom() {
    let doesAtleastOneConsumerKeyHasValue = false;
    if (!this.customConsumerDetails) {
      this.utilityService.showErrorToaster('Please set custom Consumer details');
      return;
    }
    for (let key in this.customConsumerDetails) {
      doesAtleastOneConsumerKeyHasValue = doesAtleastOneConsumerKeyHasValue || this.customConsumerDetails[key];
    }
    if (!doesAtleastOneConsumerKeyHasValue) {
      this.utilityService.showErrorToaster('Please set custom Consumer details');
    } else {
      this.startNewChat({consumerDetails: this.customConsumerDetails, bot: this.currentBot});
    }

  }


  /*this is called when bot preview button or create a custom room button is clicked*/
  startNewChat(startNewChatData: { consumerDetails: IConsumerDetails, bot: IBot }) {
    if (!startNewChatData.bot) {
      startNewChatData.bot = this.currentBot;
    }
    /*create a new chat room with a uid and without room id
    * add first message of bot into the room
    * open the chat window
    * */
    /*
    * 1. Post send api to server with first message=> will get back consent message and room id
    * 2. create a new room with room id
    * */
    let url = this.constantsService.getStartNewChatLoginUrl();
    let headerData: IHeaderData = {
      'bot-access-token': startNewChatData.bot.bot_access_token,
      'auth-token': null,
      'user-access-token': null,
      'content-type': 'application/json'
    };
    let body /*: ISendApiRequestPayload */ = {
      'type': 'bot',
      'msg': 'hi',
      'platform': 'web',
      // 'consumer': {
      //   'uid': this.current_uid,
      // },
      'consumer': startNewChatData.consumerDetails
    };

    this.serverService.makePostReq({url, body, headerData})
      .subscribe((value: IBotPreviewFirstMessage) => {

        /*1. create a new room with roomid
         *2. add message to the room: consent message */
        let roomMessages: IMessageData[] = value.generated_msg.map((item: { text: string }) => {
          return {
            text: item.text,
            sourceType: 'bot',
            messageMediatype: EBotMessageMediaType.text,
            time: this.utilityService.getCurrentTimeInHHMM()/*todo: change it to real time*/
          };
        });
        this.store.dispatch([
          new AddNewRoom({
            id: value.room.id,
            consumer_id: value.room.consumer_id,
            consumerDetails: startNewChatData.consumerDetails,
            messageList: roomMessages,
            bot_access_token: this.currentBot.bot_access_token,
            uid: startNewChatData.consumerDetails.uid,//this.current_uid,
            selectedAvatar: value.room.selected_avatar,
            bot_id: this.currentBot.id
          }),
          new ChangeFrameAction({frameEnabled: EChatFrame.CHAT_BOX}),
          new SetCurrentRoomID({id: value.room.id})
        ]);
      });
    // let new_uid = this.utilityService.createRandomString(12);
    // this.store.dispatch([
    //   new AddNewRoom({
    //     uid: new_uid,
    //     bot_id: this.currentBot.id,
    //     bot_access_token: this.currentBot.bot_access_token,
    //     id: null,
    //     messageList: [
    //       {
    //         text: this.currentBot.first_message||'I have no first message',
    //         time: this.utilityService.getCurrentTimeInHHMM(),
    //         type: 'bot'
    //       }
    //     ],
    //     selectedAvatar:{
    //       // "id": number,
    //       "imageUrl": this.currentBot.logo,
    //       "name": this.currentBot.name
    //     },
    //     lastTemplateKey:"none"
    //   }),
    //   new ChangeFrameAction({frameEnabled:EChatFrame.CHAT_BOX})
    // ]).subscribe(()=>{
    //   this.store.dispatch([
    //     new SetCurrentUId({uid: new_uid})
    //   ])
    // })

  }

  logForm(consumerFormValue) {
    console.log(consumerFormValue);
    this.store.dispatch([
      new SetConsumerDetail(consumerFormValue)
    ]);
    // if(consumerFormValue.uid){
    //   this.store.dispatch([new SetCurrentUId(consumerFormValue.uid)])
    // }
  }

  navigate(frame) {
    this.chatService.navigate(frame);
  }

  closeChatWindow() {
    this.store.dispatch(new ToggleChatWindow({open: false}));
  }

  // sendMessageByHuman(messageByHuman: string) {
  sendMessageByHuman(messageData: { messageByHuman: string, room: IRoomData }) {
    this.showBotIsThinking = true;
    let messageByHuman = messageData.messageByHuman;
    let room: IRoomData = messageData.room;
    if (messageByHuman.trim() === '') return;
    this.store.dispatch(new AddMessagesToRoomByRoomId({
      id: room.id,
      messageList: [{
        text: messageByHuman,
        sourceType: 'human',
        messageMediatype: EBotMessageMediaType.text,
        time: this.utilityService.getCurrentTimeInHHMM()
      }],
    }))
      .subscribe(() => {
        this.chatService.sendHumanMessageToBotServer(
          {
            bot_access_token: room.bot_access_token,
            id: room.id
          },
          messageData.room.consumerDetails,
          messageByHuman,
          EChatFrame.CHAT_BOX)
          .subscribe(()=>{
            this.showBotIsThinking = false;
          })
      })
    // let messageByHuman = messageData.messageByHuman;
    // if (messageByHuman.trim() === '') return;
    // this.store.dispatch(new AddMessagesToRoomByRoomId({
    //   id: this.currentRoom.id,
    //   messageList: [{
    //     text: messageByHuman,
    //     type: 'human',
    //     time: this.utilityService.getCurrentTimeInHHMM()
    //   }],
    // }))
    //   .subscribe(() => {
    //     // ;
    //     this.chatService.startNewChat(
    //       {
    //         bot_access_token: this.bot_access_token, id: this.currentBotId
    //       },
    //       this.current_uid,
    //       messageByHuman,
    //       EChatFrame.CHAT_BOX);
    //   });

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

  saveConsumerDetails(value) {
    this.store.dispatch([new SetConsumerDetail(value)])
      .subscribe(() => {
        this.utilityService.showSuccessToaster('Saved!');
        this.createCustomRoom();
        // this.store.dispatch([new ChangeFrameAction({frameEnabled: 1})]);
      });
  }

  closeConsumerDropdown() {
    alert();
  }
}
