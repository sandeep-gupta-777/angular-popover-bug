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
  AddNewRoom, AddMessagesToRoomByRoomId, SetConsumerDetail, SetCurrentBotDetailsAndResetChatStateIfBotMismatch, ResetChatState
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
import {IIntegrationOption} from '../../interfaces/integration-option';

export interface IBotPreviewFirstMessage {
  'generated_msg': [
    {
      'text': 'lkjlksdmfasd'
    },
    {
      'text': 'Test consent message'
    }
    ],
  'room': IRoomData,

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
  currentBot: IBot;
  allBotList: IBot[];
  chatWindowTitle: string = 'Start Chat';
  messageByHuman: string = '';
  isFullScreenPreview;
  welcomeScreenBotId: number;
  enterprise_logo = 'https://hm.imimg.com/imhome_gifs/indiamart-og1.jpg';
  enterprise_unique_name: string;
  bot_unique_name: string;
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
    console.log('inside chat-wrapper');
    this.loggeduser$.subscribe((loggeduser) => {
      try {
        this.user_first_name = loggeduser.user.first_name || 'Anonymous User';
        this.user_email = loggeduser.user.email;
      } catch (e) {
        this.user_first_name = 'Anonymous User';
        console.log(e);
      }
    });

    this.isFullScreenPreview = this.activatedRoute.snapshot.data.isFullScreenPreview;
    if (this.isFullScreenPreview) {
      this.activatedRoute.queryParamMap.subscribe((queryparam) => {
        let welcomeScreenBotIdStr = queryparam.get('preview');
        let enterprise_unique_name = queryparam.get('enterprise_unique_name');
        let bot_unique_name = queryparam.get('bot_unique_name');
        if (!bot_unique_name || !enterprise_unique_name) return;
        this.enterprise_unique_name = enterprise_unique_name;
        if (enterprise_unique_name && bot_unique_name && bot_unique_name) {
          this.serverService.getNSetChatPreviewBot(bot_unique_name, enterprise_unique_name);
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

    this.chatsessionstate$.subscribe((chatSessionState: IChatSessionState) => {
      try {
        this.windowOpen = chatSessionState.opened;
        if (!chatSessionState) return;

        let hasPreviewBotChanged = chatSessionState.currentBotDetails &&
          (!this.currentBot || this.currentBot.id!==chatSessionState.currentBotDetails.id);
        let hasPreviewRoomChanged = chatSessionState.currentRoomId &&
          (!this.currentRoom || (this.currentRoom.id!==chatSessionState.currentRoomId));

        if(hasPreviewRoomChanged || hasPreviewBotChanged){
          this.serverService.initializeIMIConnect(chatSessionState.currentBotDetails, chatSessionState.currentRoomId);
        }

        this.currentBot = chatSessionState.currentBotDetails;/**/
        if (this.currentBot) {
          this.enterprise_unique_name = this.currentBot.enterprise_unique_name;
          this.bot_access_token = this.currentBot.bot_access_token;//this.currentRoom && this.currentRoom.bot_access_token || currentBot.bot_access_token;
          this.chatWindowTitle =  chatSessionState.currentBotDetails.name;
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

    startNewChatData.bot = startNewChatData.bot ? startNewChatData.bot : this.currentBot;//todo: is it really required?

    /*========================Creation of chat room using Send API===============================*/

    /*FLOW:
    * 1. Post send api to server with first message=> will get back consent message and room id
    * 2. create a new room using room id
    * */
    this.serverService.startANewChatUsingSendApi(startNewChatData)
      .subscribe((value: IBotPreviewFirstMessage) => {

        /*
        *A new room has been created. Now if the room belongs to IMI Connect bot,
        *initialize IMI Connect integration
        * */
        this.serverService.initializeIMIConnect(startNewChatData.bot, value.room.id);
        /*1. create a new room with room id
         *2. add message to the room: consent message */
        let roomMessages = this.utilityService.serializeServerValueToChatRoomMessages(value);

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
  }

  logForm(consumerFormValue) {
    console.log(consumerFormValue);
    this.store.dispatch([
      new SetConsumerDetail(consumerFormValue)
    ]);
  }

  navigate(frame) {
    this.chatService.navigate(frame);
  }

  closeChatWindow() {
    this.store.dispatch(new ToggleChatWindow({open: false}));
  }

  // sendMessageByHuman(messageByHuman: string) {
  sendMessageByHuman(messageData: { messageByHuman: string, room: IRoomData }) {
    console.log('sending message by human');
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
        /*
 * Before starting a new chat, we need to check if the currentBot has imiconnect
 * integration is on or not, its not on=> use send API
 * if its on => use IMI connect
 * */
        let shouldStartChatViaImiConnectSDK = false;
        try {
          let botImiConnectIntegrationInfo = this.currentBot.integrations.fulfillment_provider_details.imiconnect;
          shouldStartChatViaImiConnectSDK = botImiConnectIntegrationInfo &&
            botImiConnectIntegrationInfo.enabled &&
            (botImiConnectIntegrationInfo.send_via_connect==="true");
        } catch (e) {
          console.log(e);
        }

        /*========================Creation of chat room using IMI CONNECT===============================*/
        if (shouldStartChatViaImiConnectSDK) {
          this.serverService.sendHumanMessageViaImiConnect(this.currentRoom,this.currentBot, messageByHuman);
          return;
        }
        this.chatService.sendHumanMessageToBotServer(
          {
            bot_access_token: room.bot_access_token,
            id: room.id
          },
          messageData.room.consumerDetails,
          messageByHuman,
          EChatFrame.CHAT_BOX)
          .subscribe(() => {
            this.showBotIsThinking = false;
          }, (error) => {
            this.showBotIsThinking = false;
          });
      });
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
        this.utilityService.showSuccessToaster('Saved');
        this.createCustomRoom();
        // this.store.dispatch([new ChangeFrameAction({frameEnabled: 1})]);
      });
  }


}
