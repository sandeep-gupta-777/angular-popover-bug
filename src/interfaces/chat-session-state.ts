import {IConsumerDetails} from '../app/chat/ngxs/chat.state';
import {IGeneratedMessageItem} from './send-api-request-payload';
import {IIntegrationOption} from './integration-option';
import {IBot} from '../app/core/interfaces/IBot';

export enum EChatFrame {
  WELCOME_BOX="WELCOME_BOX",
  CHAT_LIST="CHAT_LIST",
  CHAT_BOX="CHAT_BOX",
}

export enum EBotMessageMediaType{
  image="image",
  text="text",
  quickReply= "quickReply",
  bot_thinking="bot_thinking"
}

export interface IMessageData extends IGeneratedMessageItem{
  /*custom fields*/
  sourceType: string,//TODO: "timePeriod" ||"human", gives error, see why
  time: string,
  messageMediatype:EBotMessageMediaType
}

export interface IRoomData {
  id: number,
  consumer_id?: number,
  consumerDetails?: IConsumerDetails,
  bot_id?: number,
  bot_access_token?: string,
  'messageList': IMessageData[],
  uid?: string,
  'selectedAvatar'?: {
    'id'?: number,
    'imageUrl': string,
    'name'?: string
  },
  lastTemplateKey?: string
}

export interface IChatSessionState {

  opened: boolean;
  frameEnabled: EChatFrame,
  currentRoomId: number,
  currentBotDetails: IBot,
  currentUId: string,
  rooms: IRoomData[],
  consumerDetails: IConsumerDetails
}
