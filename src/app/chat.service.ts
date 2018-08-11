import {Injectable} from '@angular/core';
import {Store} from '@ngxs/store';
import {ServerService} from './server.service';
import {IHeaderData} from '../interfaces/header-data';
import {EChatFrame, IMessageData} from '../interfaces/chat-session-state';
import {AddMessagesToRoom, ChangeFrameAction, SetCurrentBotID, SetCurrentRoomID, ToggleChatWindow} from './chat/ngxs/chat.action';
import {ISendApiRequestPayload, ISendApiResponsePayload} from '../interfaces/send-api-request-payload';
import {ConstantsService} from './constants.service';
import {IBot} from './core/interfaces/IBot';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private store: Store, private serverService: ServerService, private constantsService: ConstantsService) {
  }

  startNewChat(botDetails: { id: number, bot_access_token: string }, messageByHuman: string, frameEnabled: EChatFrame) {
    let url = this.constantsService.getStartNewChatLoginUrl();
    let body/*: ISendApiRequestPayload */ = {
      // 'bot_id': botDetails.id,
      'consumer': {
        phone: 12415434123124,
        '_id': '5b487477a86917310d998b0a',
        // 'botId': '59e055773b6219000ca825ba',
        // 'botId': botDetails.id,
        // 'consentAcknowledged': false,
        // 'consentPermissions': [],
        // 'consumerDataStore': {},
        // 'created_at': '2018-07-13 09:44:23.574375',
        // 'email': '',
        // 'extra_params': '',
        // 'facebookId': '',
        // 'lineId': '',
        // 'name': '',
        // 'phone': '',
        // 'skypeId': '',
        // 'uid': 'd67d729f76994a03897e5ca7fb38f716',
        // 'updated_at': '2018-07-13 09:44:23.574406'
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
        // debugger;
        // this.messageByHuman="";//creating the input
        let editedMessages: IMessageData[] = response.generated_msg.map((messgage: { text: string }) => {
          return {
            ...messgage,
            time: '10:20pm',
            type: 'bot'
          };
        });

        this.store.dispatch(new AddMessagesToRoom({
          id: response.room.id,
          messageList: editedMessages,
          bot_id: response.room.bot_id,
          selectedAvatar: response.room.selected_avatar,
          bot_access_token: botDetails.bot_access_token
        }));
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
