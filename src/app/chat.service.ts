import {Injectable} from '@angular/core';
import {Store} from '@ngxs/store';
import {ServerService} from './server.service';
import {IHeaderData} from '../interfaces/header-data';
import {EBotMessageMediaType, EChatFrame, IMessageData} from '../interfaces/chat-session-state';
import {
  AddMessagesToRoomByRoomId,
  // AddMessagesToRoomByUId,
  ChangeFrameAction,
  SetCurrentBotDetailsAndResetChatStateIfBotMismatch,
  SetCurrentRoomID, SetLastTemplateKeyToRoomByRoomId, ChangeBotIsThinkingDisplayByRoomId,
  ToggleChatWindow
} from './chat/ngxs/chat.action';
import {IGeneratedMessageItem, ISendApiRequestPayload, ISendApiResponsePayload} from '../interfaces/send-api-request-payload';
import {ConstantsService} from './constants.service';
import {IBot} from './core/interfaces/IBot';
import {UtilityService} from './utility.service';
import {IConsumerDetails} from './chat/ngxs/chat.state';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private store: Store,
    private serverService: ServerService,
    private utilityService: UtilityService,
    private constantsService: ConstantsService) {
  }

  sendHumanMessageToBotServer(botDetails: { id: number, bot_access_token: string }, consumerDetails: IConsumerDetails, messageByHuman: string, frameEnabled: EChatFrame) {
    let url = this.constantsService.getStartNewChatLoginUrl();
    let body/*: ISendApiRequestPayload */ = {
      'consumer': consumerDetails,
      'type': 'human',
      'msg': messageByHuman || 'hi',
      'platform': 'web'
    };
    let headerData: IHeaderData = {
      'bot-access-token': botDetails.bot_access_token,
      'auth-token': null,
      'user-access-token': null
    };

    this.store.dispatch(new ToggleChatWindow({open: true}));

    if (frameEnabled)
      this.navigate(frameEnabled);
    return this.serverService.makePostReq({url, body, headerData, dontShowProgressBar:true})
      .do((response: ISendApiResponsePayload) => {
        /*recieved chat reply from bot*/
        let generatedMessages = response.generated_msg;
        let serializedMessages: IMessageData[] = this.utilityService.serializeGeneratedMessagesToPreviewMessages(generatedMessages);
        // let serializedMessages: IMessageData[] = generatedMessages.map((message: IGeneratedMessageItem) => {
        //   /*check if media is the key
        //   * if yes, return {message_type:media[0].type, ...message}
        //   * else return it as tet
        //   * */
        //
        //   // this.utilityService.getActiveVersionInBot()
        //
        //
        //   if(Object.keys(message)[0] === "media"){
        //     return {
        //       messageMediatype:message.media[0].type,//
        //       ...message,
        //       time: this.utilityService.getCurrentTimeInHHMM(),
        //       text:EBotMessageMediaType.image,//this is for preview of last message in chat room list
        //       sourceType: 'bot'
        //     }
        //   }else if(Object.keys(message)[0] === "quick_reply"){
        //
        //     return {
        //       messageMediatype:EBotMessageMediaType.quickReply,//
        //       ...message,
        //       time: this.utilityService.getCurrentTimeInHHMM(),
        //       text:(<any>message).quick_reply.text || EBotMessageMediaType.quickReply,//this is for preview of last message in chat room list
        //       sourceType: 'bot'
        //     }
        //   }
        //
        //   /*if message type = text*/
        //   return {
        //     text: message.text,
        //     time: this.utilityService.getCurrentTimeInHHMM(),
        //     sourceType: 'bot',,
        //     messageMediatype:EBotMessageMediaType.text
        //   };
        // });

        this.store.dispatch([
          new AddMessagesToRoomByRoomId({
            id: response.room.id,
            consumer_id: response.room.consumer_id,
            messageList: serializedMessages,
            // uid,
            // bot_id: response.room.bot_id,
            // selectedAvatar: response.room.selected_avatar,
            // bot_access_token: botDetails.bot_access_token,
            // lastTemplateKey: response.templateKey/*TODO: NOT NEEDED*/
          }),
          new ChangeBotIsThinkingDisplayByRoomId({roomId:response.room.id, shouldShowBotIsThinking:false})
          // new AttachRoomIdToRoomByUId({room_id: response.room.id, uid})
        ]);
        this.store.dispatch(new SetLastTemplateKeyToRoomByRoomId({lastTemplateKey:response.templateKey ,room_id:response.room.id}));
        // this.store.dispatch(new SetCurrentRoomID({id: response.room.id}));
        // this.store.dispatch(new SetCurrentBotID({bot_id: response.room.bot_id}));
      });
  }

  navigate(frameEnabled: EChatFrame) {
    this.store.dispatch(new ChangeFrameAction({frameEnabled: frameEnabled}));
  }

}
