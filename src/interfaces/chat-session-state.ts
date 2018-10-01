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

  /*added later...entries from server*/
    'agent_handover'?: false,
    'allow_anonymization'?: false,
    'consent_permissions'?: any[],
    'created_at'?: number,
    'cross_retention_period'?: false,
    'data_store'?: {},
    'df_state'?: {
      'answer': null,
      'question': null
    },
    'imichat_agent'?: {},
    'is_anonymized'?: false,
    'last_updated_job_id'?: '5b8fc54d7364530005872f08',
    'manager_bot_room_id'?: 0,
    'resource_uri'?: '/api/v1/room/11924/',
    'room_state_closed'?: false,
    'selected_avatar'?: {
      'id': 0,
      'imageUrl': 'https?://www.gstatic.com/webp/gallery3/2_webp_a.png',
      'name': 'StarBot'
    },
    'updated_at'?: number,

  /*custom fields*/
  showBotIsThinking?:boolean
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
