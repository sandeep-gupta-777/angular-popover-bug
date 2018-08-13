export enum EChatFrame {
  WELCOME_BOX, CHAT_LIST,CHAT_BOX,
}

export interface IMessageData {
  'text': string,
  type: string,//TODO: "timePeriod" ||"human", gives error, see why
  time:string
}

export interface IRoomData{
  id:number,
  bot_id: number,
  bot_access_token:string,
  'messageList': IMessageData[],
  uid?:string,
  "selectedAvatar"?: {
    "id"?: number,
    "imageUrl": string,
    "name"?: string
  },
  lastTemplateKey:string
}
export interface IChatSessionState {

  opened: boolean;
  frameEnabled: EChatFrame,
  currentRoomId: number,
  currentBotDetails: {
    id:number,
    name?:string,
    logo:string,
    token:string
  },
  currentUId:string,
  rooms:IRoomData[]
}
