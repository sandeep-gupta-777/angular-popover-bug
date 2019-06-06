import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Store} from '@ngxs/store';
import {ServerService} from './server.service';
import {IHeaderData} from '../interfaces/header-data';
import {EChatFrame, IMessageData, IRoomData} from '../interfaces/chat-session-state';
import {
  AddMessagesToRoomByRoomId,
  ChangeBotIsThinkingDisplayByRoomId,
  ChangeFrameAction,
  SetLastTemplateKeyToRoomByRoomId,
  ToggleChatWindow,
  SetCurrentBotDetailsAndResetChatStateIfBotMismatch
} from './chat/ngxs/chat.action';
import {IGeneratedMessageItem, ISendApiResponsePayload} from '../interfaces/send-api-request-payload';
import {ConstantsService} from './constants.service';
import {IBot} from './core/interfaces/IBot';
import {EBotType, UtilityService} from './utility.service';
import {IConsumerDetails} from './chat/ngxs/chat.state';
import {catchError} from 'rxjs/internal/operators';
import {LoggingService} from "./logging.service";
import { EventService } from './event.service';

declare var IMI: any;

@Injectable()
export class ChatService {

  constructor(
    private store: Store,
    private serverService: ServerService,
    private utilityService: UtilityService,
    private constantsService: ConstantsService) {
  }

  sendHumanMessageToBotServer(botDetails: { roomId: number, bot_access_token: string,type:EBotType }, consumerDetails: IConsumerDetails, messageByHuman: string, frameEnabled: EChatFrame) {

    const url = this.constantsService.getStartNewChatLoginUrl();
    const body /*: ISendApiRequestPayload */ = {
      'consumer': consumerDetails,
      'type': 'human',
      'msg': messageByHuman || 'hi',
      'platform': 'web',
      is_test: botDetails.type === EBotType.faqbot
    };
    const headerData: IHeaderData = {
      'bot-access-token': botDetails.bot_access_token,
      'auth-token': null,
      'user-access-token': null
    };

    this.store.dispatch(new ToggleChatWindow({open: true}));

    if (frameEnabled) {
      this.navigate(frameEnabled);
    }
    return this.serverService.makePostReq({url, body, headerData, dontShowProgressBar: true})
      .pipe(
        tap((response: ISendApiResponsePayload) => {
          /*recieved chat reply from bot*/
          const generatedMessages = response.generated_msg;
          const bot_message_id = response.bot_message_id;
          const serializedMessages: IMessageData[] = this.utilityService.serializeGeneratedMessagesToPreviewMessages(generatedMessages, bot_message_id);

          this.store.dispatch([
            new AddMessagesToRoomByRoomId({
              id: response.room.id,
              consumer_id: response.room.consumer_id,
              messageList: serializedMessages,
            }),
            new ChangeBotIsThinkingDisplayByRoomId({roomId: response.room.id, shouldShowBotIsThinking: false})
          ]);
          this.store.dispatch(new SetLastTemplateKeyToRoomByRoomId({lastTemplateKey: response.templateKey, room_id: response.room.id}));
        }),
        catchError((e: any) => {
          return this.store.dispatch([
            new ChangeBotIsThinkingDisplayByRoomId({roomId: botDetails.roomId, shouldShowBotIsThinking: false})
          ]);
        })
        );
  }

  navigate(frameEnabled: EChatFrame) {
    this.store.dispatch(new ChangeFrameAction({frameEnabled: frameEnabled}));
  }

  messaging;
  currentPreviewBot: IBot;
  currentRoomId: number;

  initializeIMIConnect(previewBot: IBot, currentRoomId: number, obj : any) {
    if (this.currentRoomId === currentRoomId && this.currentPreviewBot === previewBot) {
      return;
    } else {
      try {
        IMI.IMIconnect.shutdown();
      } catch (e) {
        LoggingService.error(e);
      }

    }
    this.currentRoomId = currentRoomId;
    this.currentPreviewBot = previewBot;

    // this.currentPreviewBot = previewBot;
    /*TODO: make initialization happen only once*/
    let imiConnectIntegrationDetails;
    try {
      imiConnectIntegrationDetails = previewBot.integrations.fulfillment_provider_details.imiconnect;
      if (!imiConnectIntegrationDetails.enabled || !imiConnectIntegrationDetails.send_via_connect) {
        LoggingService.log('this is not an imiconnect bot...');
        return;
      }
    } catch (e) {
      LoggingService.log('this is not an imiconnect bot');
      return;
    }
    const appId = imiConnectIntegrationDetails.appId; //'GS23064017';
    const appSecret = imiConnectIntegrationDetails.appSecret; //'uZi6B5Zg';
    // var streamName = "bot";
    const serviceKey = imiConnectIntegrationDetails.serviceKey; //'3b8f6470-5e56-11e8-bf0b-0213261164bb';//'f6e50f7b-2bfd-11e8-bf0b-0213261164bb';
    let userId = currentRoomId + '_hellothisissandeep1231312';
    if(obj && obj.consumerDetails){
      userId = obj.consumerDetails.uid;
    }

    // startNewChatData.consumerDetails.uid
    const config = new IMI.ICConfig(appId, appSecret);
    const messaging = IMI.ICMessaging.getInstance();

    console.info('========initializing connection with imiconnect with following details');
    LoggingService.log(
      'appId= ' + appId + '\n' +
      'appSecret= ' + appSecret + '\n' +
      'serviceKey= ' + serviceKey + '\n' +
      'userId= ' + userId + '\n');


    const prepareMessage = (messageObj) => {
      console.info('============================message from IMICONNECT Has been recieved============================', messageObj);
      const generatedMessagesStr = messageObj.message;
      let generatedMessages: IGeneratedMessageItem[];
      try {
        generatedMessages = JSON.parse(generatedMessagesStr);
      } catch (e) {
        console.error('Unable to parse json from IMIConnect callback', generatedMessagesStr);
        console.error('Assuming its a string');
        generatedMessages = [{text: generatedMessagesStr, bot_message_id: null}];
      }
      const serializedMessages: IMessageData[] = this.utilityService.serializeGeneratedMessagesToPreviewMessages(generatedMessages, null);
      this.store.dispatch([
        new AddMessagesToRoomByRoomId({
          id: currentRoomId,
          messageList: serializedMessages
        }),
        new ChangeBotIsThinkingDisplayByRoomId({roomId: currentRoomId, shouldShowBotIsThinking: false}),
        // new SetCurrentRoomID({roomId: 123456789.room.roomId})
      ]);
    };

    const msgCallBack = {//messaging.setICMessagingReceiver(msgCallBack);
      onConnectionStatusChanged: function (statuscode) {
        LoggingService.log('msgCallBack,onConnectionStatusChanged', statuscode);
        let statusMessage = null;
        if (statuscode == 2) {
          statusMessage = 'Connected';
        } else if (statuscode == 6) {
          statusMessage = 'Error while connecting';
        } else {
          statusMessage = 'Not Connected';
        }

      },
      onMessageReceived: function (message) {


        prepareMessage(message);

        if (message.getType() === IMI.ICMessageType.Message) {
          const callback = {
            onFailure: function (err) {
              LoggingService.log('failed to get topics:');

              //handleFailure(err);
            }
          };
          messaging.setMessageAsRead(message.getTransactionId(), callback);
        }
      }
    };


    messaging.setICMessagingReceiver(msgCallBack);
    const deviceId = IMI.ICDeviceProfile.getDefaultDeviceId();
    IMI.IMIconnect.startup(config);
    IMI.IMIconnect.registerListener(
      {
        onFailure: function () {
          LoggingService.log('token got expired...');
        }
      });


    const regcallback = {
      onSuccess: function (msg) {

        try {
          messaging.connect();
          LoggingService.log('onSuccess: reg');
        } catch (ex) {
          LoggingService.log(ex);
        }

      },
      onFailure: function (err) {
        LoggingService.log('Registration failed');

      }
    };
    const deviceProfile = new IMI.ICDeviceProfile(deviceId, userId);
    LoggingService.log('IMI.IMIconnect.isRegistered()' + IMI.IMIconnect.isRegistered());
    IMI.IMIconnect.register(deviceProfile, regcallback);


    // //send message
    //     var pubcallback = {
    //       onSuccess: function () {
    //         LoggingService.log("message sent");
    //
    //       },
    //       onFailure: function (errormsg) {
    //         LoggingService.log("failed to send message");
    //       }
    //
    //     };
    //
    //     var message = new IMI.ICMessage();
    //     message.setMessage("Hello this is sample message");
    //
    //     var thread = new IMI.ICThread();
    //     thread.setId("bot");
    //     thread.setTitle("bot");
    //     thread.setStreamName(streamName);
    //
    //     message.setThread(thread);
    //     messaging.publishMessage(message, pubcallback);

    this.messaging = messaging;
  }
  currentRoom: IRoomData;

  sendHumanMessageViaImiConnect(currentRoom, currentBot: IBot, messageByHuman: string) {

    let streamName: string; //'gsureg';
    try {
      streamName = currentBot.integrations.fulfillment_provider_details.imiconnect.streamName;
    } catch (e) {
      LoggingService.log(e);
    }
    // this.currentRoom = currentRoom;
    //send message
    const pubcallback = {
      onSuccess: function () {
        LoggingService.log('message sent');

      },
      onFailure: function (errormsg) {
        LoggingService.log('failed to send message');
      }

    };

    const message = new IMI.ICMessage();
    message.setMessage(messageByHuman);

    const thread = new IMI.ICThread();
    thread.setId('bot');
    thread.setTitle('bot');
    thread.setStreamName(streamName);

    message.setThread(thread);
    this.messaging.publishMessage(message, pubcallback);
  }

  startANewChatUsingSendApi(startNewChatData: { consumerDetails: IConsumerDetails, bot: IBot }) {
    const url = this.constantsService.getStartNewChatLoginUrl();
    const headerData: IHeaderData = {
      'bot-access-token': startNewChatData.bot.bot_access_token,
      'auth-token': null,
      'user-access-token': null,
      'content-type': 'application/json'
    };
    const body /*: ISendApiRequestPayload */ = {
      'type': 'bot',
      'msg': 'hi',
      'platform': 'web',
      'is_test':startNewChatData.bot.bot_type === EBotType.faqbot,
      // 'consumer': {
      //   'uid': this.current_uid,
      // },
      'consumer': startNewChatData.consumerDetails,
    };

    return this.serverService.makePostReq({url, body, headerData});
  }

  openPreviewFormService(bot : IBot,enterprise_unique_name :string){
    this.store.dispatch([
      new SetCurrentBotDetailsAndResetChatStateIfBotMismatch({
        bot: {...bot, enterprise_unique_name: enterprise_unique_name}
      }),
      new ToggleChatWindow({open: true}),
      new ChangeFrameAction({frameEnabled: EChatFrame.CHAT_BOX})
    ]);

    /*TODO: integrate this with store*/
    EventService.startANewChat$.emit({bot:bot, consumerDetails: {uid: this.utilityService.createRandomUid()},
    });
  }

}
