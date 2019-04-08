import {tap} from 'rxjs/operators';
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
import {catchError} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';

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

  sendHumanMessageToBotServer(botDetails: { roomId: number, bot_access_token: string }, consumerDetails: IConsumerDetails, messageByHuman: string, frameEnabled: EChatFrame) {

    const url = this.constantsService.getStartNewChatLoginUrl();
    const body /*: ISendApiRequestPayload */ = {
      'consumer': consumerDetails,
      'type': 'human',
      'msg': messageByHuman || 'hi',
      'platform': 'web'
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

}
