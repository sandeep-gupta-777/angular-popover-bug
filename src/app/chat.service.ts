import { Injectable } from '@angular/core';
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

  constructor(private store:Store, private serverService:ServerService, private constantsService:ConstantsService) { }
  startNewChat(botDetails:{_id:string, token:string}, messageByHuman:string, frameEnabled:EChatFrame){
    console.log("this.startNewChat()");
    /*login here*/
    let url = this.constantsService.getStartNewChatLoginUrl();
    let body: ISendApiRequestPayload = {
      'bot_id': botDetails._id,
      'consumer': {
        // '_id': '5b487477a26917000d998b0a',
        // 'botId': '59e055773b6219000ca825ba',
        'botId': botDetails._id,
        'consentAcknowledged': false,
        'consentPermissions': [],
        'consumerDataStore': {},
        'created_at': '2018-07-13 09:44:23.574375',
        'email': '',
        'extra_params': '',
        'facebookId': '',
        'lineId': '',
        'name': '',
        'phone': '',
        'skypeId': '',
        'uid': 'd67d729f76994a03897e5ca7fb38f716',
        'updated_at': '2018-07-13 09:44:23.574406'
      },
      'type': 'human',
      'msg': messageByHuman||"hi",
      'platform': 'web'
    };
    let headerData:IHeaderData =
      // {"x-access-token":'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYm90IiwiaWQiOiI1OWRmNjdmNWVjNjYyZDAwMTA5MWNiZTYifQ.f9oCj1O0vR7ywFE5LaQewO18iGzjuN9j6wRIOylEC8Q'};
      {"x-access-token":botDetails.token};

    this.serverService.makePostReq({ url, body, headerData})
      .subscribe((response:ISendApiResponsePayload)=>{
        // this.messageByHuman="";//creating the input
        let editedMessages:IMessageData[]  = response.generated_msg.map((messgage:{text:string})=>{
          return {
            ...messgage,
            time: "10:20pm",
            type:"bot"
          }
        });

        this.store.dispatch(new AddMessagesToRoom({
          _id: response.room._id,
          messageList: editedMessages,
          botId: response.room.botId,
          selectedAvatar:response.room.selectedAvatar,
          botToken:botDetails.token
        }));
        this.store.dispatch(new SetCurrentRoomID({_id:response.room._id}));
        this.store.dispatch(new SetCurrentBotID({botId:response.room.botId}));

      });

    this.store.dispatch(new ToggleChatWindow({open:true}));

    if(frameEnabled)
      this.navigate(frameEnabled);
  }

  navigate(frameEnabled:EChatFrame){
    this.store.dispatch(new ChangeFrameAction({frameEnabled:frameEnabled}));
  }

}
