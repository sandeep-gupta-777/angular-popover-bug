import {Injectable} from '@angular/core';
import {Store} from '@ngxs/store';
import {ServerService} from './server.service';
import {IHeaderData} from '../interfaces/header-data';
import {EChatFrame, IMessageData} from '../interfaces/chat-session-state';
import {
  AddMessagesToRoomByUId,
  AttachRoomIdToRoomByUId,
  ChangeFrameAction,
  SetCurrentBotID,
  SetCurrentRoomID, SetLastTemplateKeyToRoomByUId,
  ToggleChatWindow
} from './chat/ngxs/chat.action';
import {ISendApiRequestPayload, ISendApiResponsePayload} from '../interfaces/send-api-request-payload';
import {ConstantsService} from './constants.service';
import {IBot} from './core/interfaces/IBot';
import {UtilityService} from './utility.service';

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

  startNewChat(botDetails: { id: number, bot_access_token: string }, uid: string, messageByHuman: string, frameEnabled: EChatFrame) {
    let url = this.constantsService.getStartNewChatLoginUrl();
    let body/*: ISendApiRequestPayload */ = {
      'consumer': {
        'uid': uid,
      },
      'type': 'human',
      'msg': messageByHuman || 'hi',
      'platform': 'web'
    };
    let headerData: IHeaderData = {
      'bot-access-token': botDetails.bot_access_token,
      'auth-token': null,
      'user-access-token': null
    };
    this.serverService.makePostReq({url, body, headerData})
      .subscribe((response: ISendApiResponsePayload) => {
        let editedMessages: IMessageData[] = response.generated_msg.map((messgage: { text: string }) => {
          return {
            ...messgage,
            time: this.utilityService.getCurrentTimeInHHMM(),
            type: 'bot'
          };
        });
        // ;
        this.store.dispatch([
          new AddMessagesToRoomByUId({
            id: response.room.id,
            messageList: editedMessages,
            uid,
            bot_id: response.room.bot_id,
            selectedAvatar: response.room.selected_avatar,
            bot_access_token: botDetails.bot_access_token,
            lastTemplateKey: response.templateKey/*TODO: NOT NEEDED*/
          }),
          new AttachRoomIdToRoomByUId({room_id: response.room.id, uid})
        ]);
        this.store.dispatch(new SetLastTemplateKeyToRoomByUId({lastTemplateKey:response.templateKey ,uid:uid}));
        this.store.dispatch(new SetCurrentRoomID({id: response.room.id}));
        this.store.dispatch(new SetCurrentBotID({bot_id: response.room.bot_id}));
      });

    this.store.dispatch(new ToggleChatWindow({open: true}));

    if (frameEnabled)
      this.navigate(frameEnabled);
  }

  navigate(frameEnabled: EChatFrame) {
    this.store.dispatch(new ChangeFrameAction({frameEnabled: frameEnabled}));
  }

}
