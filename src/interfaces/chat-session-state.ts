export enum EChatFrame {
  WELCOME_BOX, CHAT_LIST,CHAT_BOX,
}

export interface IMessageData {
  'text': string,
  type: string,//TODO: "timePeriod" ||"human", gives error, see why
  time:string
}

export interface IRoomData{
  _id:string,
  'botId': string,
  botToken:string,
  'messageList': IMessageData[],
  "selectedAvatar"?: {
    "id": number,
    "imageUrl": string,
    "name": string
  }
}
export interface IChatSessionState {

  opened: boolean;
  frameEnabled: EChatFrame,
  currentRoomId: string,
  currentBotDetails: {_id:string, name?:string, token:string},
  rooms:IRoomData[]
}
