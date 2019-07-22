import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import {
  EBotMessageMediaType,
  EChatFrame,
  IChatSessionState,
  IMessageData,
  IRoomData
} from '../../interfaces/chat-session-state';
import {
  AddMessagesToRoomByRoomId,
  AddNewRoom,
  ChangeBotIsThinkingDisplayByRoomId,
  ChangeFrameAction,
  SetConsumerDetail,
  SetCurrentBotDetailsAndResetChatStateIfBotMismatch,
  SetCurrentRoomID,
  ToggleChatWindow,
  UpdateBotMessage, UpdateConsumerByRoomId
} from './ngxs/chat.action';
import { ServerService } from '../server.service';
import { ConstantsService } from '../constants.service';
import { IHeaderData } from '../../interfaces/header-data';
import { ChatService } from '../chat.service';
import { IAuthState } from '../auth/ngxs/auth.state';
import { ActivatedRoute, Router, RoutesRecognized } from '@angular/router';
import { UtilityService } from '../utility.service';
import { IBot } from '../core/interfaces/IBot';
import { ViewBotStateModel } from '../core/view-bots/ngxs/view-bot.state';
import { IConsumerDetails } from './ngxs/chat.state';
import { IEnterpriseProfileInfo } from '../../interfaces/enterprise-profile';
import { ELogType, LoggingService } from '../logging.service';
import { EventService } from '../event.service';

export interface IBotPreviewFirstMessage {
  'generated_msg': [
    {
      'text': 'lkjlksdmfasd'
    },
    {
      'text': 'Test consent message'
    }
    ];
  'room': IRoomData;

  'transaction_id': '1cba048e58684206b8c3912b7f7e1887';
}

export enum EChatFeedback {
  NEGATIVE = 'NEGATIVE',
  POSITIVE = 'POSITIVE',
  NONE = 'NONE',
}

export interface IChatFeedback {
  'bot_message_id': number,
  'consumer_id': number,
  'feedback': EChatFeedback
}

@Component({
  selector: 'app-chat-wrapper',
  templateUrl: './chat-wrapper.component.html',
  styleUrls: ['./chat-wrapper.component.scss']
})
export class ChatWrapperComponent implements OnInit {
  showOverlay = false;
  showOverlay_edit_fullscreen = false;
  is_logged_in = location.pathname === '/preview-dev';
  @Select() chatsessionstate$: Observable<IChatSessionState>;
  @Select() loggeduser$: Observable<IAuthState>;
  @Select() botlist$: Observable<ViewBotStateModel>;
  @Select() loggeduserenterpriseinfo$: Observable<IEnterpriseProfileInfo>;
  @ViewChild('scrollMe') myScrollContainer: ElementRef;
  frameEnabled: EChatFrame = EChatFrame.WELCOME_BOX;
  myEChatFrame = EChatFrame; //This is required to use enums in template, we can't use enums direactly in templates
  windowOpen = false;
  messageData: IMessageData[] = null;
  selectedAvatar: any;
  loggeduser: IAuthState;
  currentRoom: IRoomData;
  current_uid: string;
  customConsumerDetails: IConsumerDetails;
  bot_access_token: string;
  currentBotId: number;
  currentBot: IBot;
  allBotList: IBot[];
  chatWindowTitle = 'Start Chat';
  messageByHuman = '';
  isFullScreenPreview;
  welcomeScreenBotId: number;
  enterprise_logo = 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png';
  enterprise_unique_name: string;
  bot_unique_name: string;
  user_first_name;
  user_email;
  showBotIsThinking = false;
  showChatImage = false;
  knowMorePanelItems = this.chatService.knowMorePanelItems;

  constructor(private store: Store,
              private serverService: ServerService,
              private constantsService: ConstantsService,
              private chatService: ChatService,
              private activatedRoute: ActivatedRoute,
              private utilityService: UtilityService,
              private route: Router
  ) {
  }

  toggleOverlay() {
    setTimeout(() => {
      this.showOverlay = !this.showOverlay;
    }, 0);
  }

  ngOnInit() {
    EventService.botUpdatedInServer$.subscribe((bot: IBot) => {
      if (this.currentBot)
        if (bot.id === this.currentBot.id && bot.allow_feedback !== this.currentBot.allow_feedback) {
          this.store.dispatch([
            new SetCurrentBotDetailsAndResetChatStateIfBotMismatch({ bot: bot })
          ]);
        }
    });

    LoggingService.log('inside chat-wrapper');
    this.loggeduser$.subscribe((loggeduser) => {
      try {
        if (!loggeduser) {
          return;
        }
        // this.is_logged_in = !!(loggeduser.user && loggeduser.user.id);
        if(!loggeduser.user){
          return;
        }
        this.user_first_name = loggeduser.user.first_name || 'Anonymous User';
        this.user_email = loggeduser.user.email;
      } catch (e) {
        this.user_first_name = 'Anonymous User';
        LoggingService.error(e);
      }
    });

    /*hotfix: enterprise logo*/
    this.loggeduserenterpriseinfo$.subscribe((enterpriseProfileInfo) => {
      if(enterpriseProfileInfo){
        this.enterprise_logo = enterpriseProfileInfo.logo || this.enterprise_logo;
      }
    });

    this.isFullScreenPreview = this.activatedRoute.snapshot.data.isFullScreenPreview;
    debugger;
    if (this.isFullScreenPreview) {
      debugger;
      this.activatedRoute.queryParamMap.subscribe((queryparam) => {
        const welcomeScreenBotIdStr = queryparam.get('preview');
        const enterprise_unique_name = queryparam.get('enterprise_unique_name');
        const bot_unique_name = queryparam.get('bot_unique_name');
        if (!bot_unique_name || !enterprise_unique_name) {
          return;
        }
        this.enterprise_unique_name = enterprise_unique_name;
        if (enterprise_unique_name && bot_unique_name && bot_unique_name) {
          this.serverService.getNSetChatPreviewBot(bot_unique_name, enterprise_unique_name)
            .subscribe(()=>{
              this.startNewChatForAnonUser();
            })

        }
      });
    }
    this.route.events.subscribe((data) => {
      /*This is to access route data from non-subtree component
      * see: https://github.com/angular/angular/issues/11812
      * */
      if (data instanceof RoutesRecognized) {
        this.isFullScreenPreview = data.state.root.firstChild.data.isFullScreenPreview;
      }
    });

    EventService.startANewChat$.subscribe((val) => {
      this.startNewChat(val);
    });

    this.chatsessionstate$.subscribe((chatSessionState: IChatSessionState) => {

      try {
        this.windowOpen = chatSessionState.opened;
        if (!chatSessionState) {
          return;
        }

        const hasPreviewBotChanged = chatSessionState.currentBotDetails &&
          (!this.currentBot || this.currentBot.id !== chatSessionState.currentBotDetails.id);
        const hasPreviewRoomChanged = chatSessionState.currentRoomId &&
          (!this.currentRoom || (this.currentRoom.id !== chatSessionState.currentRoomId));

        this.showBotIsThinking = this.currentRoom && this.currentRoom.showBotIsThinking;


        this.currentBot = chatSessionState.currentBotDetails;
        if (this.currentBot) {
          this.enterprise_unique_name = this.currentBot.enterprise_unique_name;
          this.bot_access_token = this.currentBot.bot_access_token; //this.currentRoom && this.currentRoom.bot_access_token || bot.bot_access_token;
          this.chatWindowTitle = chatSessionState.currentBotDetails.name;
        }

        if (chatSessionState.currentRoomId) {
          this.currentRoom = chatSessionState.rooms.find((room) => room.id === chatSessionState.currentRoomId);
          chatSessionState.consumerDetails = this.currentRoom.consumerDetails;
          this.messageData = this.currentRoom && this.currentRoom.messageList;
          this.selectedAvatar = this.currentRoom && this.currentRoom.selectedAvatar;
        }

        if (hasPreviewRoomChanged || hasPreviewBotChanged) {
          this.chatService.initializeIMIConnect(chatSessionState.currentBotDetails, chatSessionState.currentRoomId, chatSessionState);
        }

        this.frameEnabled = chatSessionState.frameEnabled;
        if (chatSessionState.consumerDetails) {
          this.customConsumerDetails = chatSessionState.consumerDetails;
          this.current_uid = chatSessionState.consumerDetails.uid;
        } else {
          this.current_uid = chatSessionState.currentUId;
        }
      } catch (e) {
        LoggingService.log(e, ELogType.error);
      }
    });

  }

  openPreviewTab() {
    // window.open(`https://www.google.com`, "_blank");
  }

  createCustomRoom(customConsumerDetails) {

    let doesAtleastOneConsumerKeyHasValue = false;
    if (!customConsumerDetails) {
      this.utilityService.showErrorToaster('Please set custom Consumer details');
      return;
    }
    for (const key in customConsumerDetails) {
      doesAtleastOneConsumerKeyHasValue = doesAtleastOneConsumerKeyHasValue || customConsumerDetails[key];
    }
    if (!doesAtleastOneConsumerKeyHasValue) {
      this.utilityService.showErrorToaster('Please set custom Consumer details');
    } else {
      this.startNewChat({
        consumerDetails: customConsumerDetails,
        bot: this.currentBot,
        isCustomRoom: true
      });
    }

  }

  startNewChatForAnonUser(){
    this.startNewChat({
      consumerDetails: {uid: UtilityService.generateUUid()},
      bot: this.currentBot,
      isCustomRoom: false
    });
  }


  /*this is called when bot preview button or create a custom room button is clicked*/
  startNewChat(startNewChatData: { consumerDetails: IConsumerDetails, bot: IBot, isCustomRoom?: boolean }) {
    this.showOverlay_edit_fullscreen = false;
    startNewChatData.bot = startNewChatData.bot ? startNewChatData.bot : this.currentBot; //todo: is it really required?

    /*========================Creation of chat room using Send API===============================*/

    /*FLOW:
    * 1. Post send api to server with first message=> will get back consent message and room roomId
    * 2. create a new room using room roomId
    * */
    this.chatService.startANewChatUsingSendApi(startNewChatData)
      .subscribe((value: IBotPreviewFirstMessage) => {

        if (!value.room || !value.room.id) {
          // alert('api not supported. Maybe kill switch?');
          console.error('api not supported. Maybe kill switch?');
          return;
        }

        /*
        *A new room has been created. Now if the room belongs to IMI Connect bot,
        *initialize IMI Connect integration
        * */
        this.chatService.initializeIMIConnect(startNewChatData.bot, value.room.id, startNewChatData);
        /*1. create a new room with room roomId
         *2. add message to the room: consent message */
        const roomMessages = this.utilityService.serializeServerValueToChatRoomMessages(value);

        this.store.dispatch([
          new AddNewRoom({
            id: value.room.id,
            consumer_id: value.room.consumer_id,
            consumerDetails: startNewChatData.consumerDetails,
            messageList: roomMessages,
            bot: this.currentBot,
            bot_access_token: this.currentBot.bot_access_token,
            uid: startNewChatData.consumerDetails.uid, //this.current_uid,
            selectedAvatar: value.room.selected_avatar,
            bot_id: this.currentBot.id,
            created_at: value.room.created_at,
            isCustomRoom: startNewChatData.isCustomRoom
          }),
          new ChangeFrameAction({ frameEnabled: EChatFrame.CHAT_BOX }),
          new SetCurrentRoomID({ id: value.room.id }),
          new ChangeBotIsThinkingDisplayByRoomId({ roomId: value.room.id, shouldShowBotIsThinking: false })
        ]);
      });
  }

  logForm(consumerFormValue) {
    LoggingService.log(consumerFormValue);
    this.store.dispatch([
      new SetConsumerDetail(consumerFormValue)
    ]);
  }

  navigate(frame) {
    this.chatService.navigate(frame);
  }

  closeChatWindow() {
    this.store.dispatch(new ToggleChatWindow({ open: false }));
  }

  sendMessageByHuman(messageData: { messageByHuman: string, room: IRoomData,updateConsumerInfo?:boolean }) {
    const messageByHuman = messageData.messageByHuman && messageData.messageByHuman.trim();
    if(!messageByHuman && !messageData.updateConsumerInfo){
      return;
    }
    const room: IRoomData = messageData.room;
    /*
    * Unfortunately currently send api is being used for updating consumer details
    * if message by human is empty,we will proceed to updated consumer details
    * */
    const updateConsumerDetails = !(messageByHuman && messageByHuman.trim());
    if (!messageData.updateConsumerInfo) {
      this.store.dispatch([new AddMessagesToRoomByRoomId({
          id: room.id,
          messageList: [{
            text: messageByHuman,
            sourceType: 'human',
            messageMediatype: EBotMessageMediaType.text,
            time: Date.now(),//this.utilityService.getCurrentTimeInHHMM(),
            bot_message_id: null
          }]
        }),
          new ChangeBotIsThinkingDisplayByRoomId({ shouldShowBotIsThinking: true, roomId: messageData.room.id })
        ]
      );
    }
    of(1)
      .subscribe(() => {
        /*
        * Before starting a new chat, we need to check if the bot has imiconnect
        * integration is on or not, its not on=> use send API
        * if its on => use IMI connect
        * */
        let shouldStartChatViaImiConnectSDK = false;
        try {
          const botImiConnectIntegrationInfo = this.currentBot.integrations.fulfillment_provider_details.imiconnect;
          shouldStartChatViaImiConnectSDK = botImiConnectIntegrationInfo &&
            botImiConnectIntegrationInfo.enabled &&
            (botImiConnectIntegrationInfo.send_via_connect == 'true');
        } catch (e) {
          LoggingService.error(e);
        }

        /*========================Creation of chat room using IMI CONNECT===============================*/
        if (shouldStartChatViaImiConnectSDK) {
          this.chatService.sendHumanMessageViaImiConnect(this.currentRoom, this.currentBot, messageByHuman);
          return;
        }
        this.chatService.sendHumanMessageToBotServer(
          {
            bot_access_token: room.bot_access_token || this.currentBot.bot_access_token,
            roomId: room.id,
            type: room.bot && room.bot.bot_type
          },
          messageData.room.consumerDetails,
          messageByHuman,
          EChatFrame.CHAT_BOX)
          .subscribe(() => {

            if(messageData.updateConsumerInfo){
              this.store.dispatch(new UpdateConsumerByRoomId({consumerDetails: room.consumerDetails, room_id: room.id}));
              this.utilityService.showSuccessToaster('Consumer details updated');
            }else {
              this.showBotIsThinking = false;
            }
          }, (error) => {
            this.showBotIsThinking = false;
          });
      });
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      LoggingService.log(err);
    }
  }

  toggleChatWindow() {
    this.store.dispatch([
      new ToggleChatWindow({ open: true })
    ]);
  }


  consumerFormSubmitHandler(consumerDetails: IConsumerDetails,createNewRoom:boolean){
      debugger;
    if(createNewRoom){
      this.startNewChat({consumerDetails, isCustomRoom: createNewRoom, bot: this.currentBot})
    }else {
      this.saveConsumerDetails(consumerDetails, this.currentRoom.id);
    }
    this.showOverlay = false;
    this.showOverlay_edit_fullscreen = false;
  }

  hideOverlay(){
    this.showOverlay = false;
    this.showOverlay_edit_fullscreen = false;
  }

  saveConsumerDetails(value: IConsumerDetails, roomId:number) {

    console.log('hello');
    this.showOverlay = false;
    let room: IRoomData = {
      consumerDetails: {
        ...value,
        id: this.currentRoom.consumer_id
      },
      id: roomId || this.currentRoom.id,
      bot: this.currentBot
    };
    this.sendMessageByHuman({ room, messageByHuman: '', updateConsumerInfo:true });
  }
  //
  sendFeedback(feedback: IChatFeedback) {

    let roomId = this.currentRoom.id;
    feedback.consumer_id = this.currentRoom.consumer_id;
    let url = this.constantsService.getChatFeedbackUrl();
    let headerData: IHeaderData = {
      'bot-access-token': this.currentRoom.bot_access_token,
      'auth-token': null,
      'user-access-token': null
    };
    this.serverService.makePutReq({ url, body: feedback, headerData })
      .subscribe((val) => {
        this.store.dispatch([
          new UpdateBotMessage({
            room_id: roomId,
            feedback: feedback.feedback,
            bot_message_id: feedback.bot_message_id
          })
        ]);
      }, () => {

        this.store.dispatch([
          new UpdateBotMessage({
            room_id: roomId,
            feedback: EChatFeedback.NONE,
            bot_message_id: feedback.bot_message_id
          })
        ]);
      });
  }


}
