import {EChatFrame, IMessageData, IRoomData} from '../../../interfaces/chat-session-state';
import {IBot} from '../../core/interfaces/IBot';

export class ToggleChatWindow {
  static readonly type = '[chat-widdow] set toggle';

  constructor(public payload: { open: boolean }) {
  }
}

export class ChangeFrameAction {
  static readonly type = '[chat-widdow] update frame';

  constructor(public payload: { frameEnabled: EChatFrame }) {}
}
export class AddNewRoom {
  static readonly type = '[chat-widdow] update AddNewRoom';
  constructor(public payload: IRoomData) {}
}
export class AddMessagesToRoomByUId {
  static readonly type = '[chat-widdow] update AddMessagesToRoom';
  constructor(public payload: IRoomData) {}
}
export class AttachRoomIdToRoomByUId {
  static readonly type = '[chat-widdow] update AttachRoomIdToRoomByUId';
  constructor(public payload: {room_id:number, uid:string}) {}
}
export class SetLastTemplateKeyToRoomByUId {
  static readonly type = '[chat-widdow] update SetLastTemplateKeyToRoomByUId';
  constructor(public payload: {lastTemplateKey:string, uid:string}) {}
}

export class SetCurrentRoomID {
  static readonly type = '[chat-widdow] set SetCurrentRoomID';
  constructor(public payload: { id: number}) {}
}

export class SetCurrentBotID {
  static readonly type = '[chat-widdow] set SetCurrentBotID';
  constructor(public payload: { bot_id: number,bot?:IBot}) {}
}

export class SetCurrentUId {
  static readonly type = '[chat-widdow] set SetCurrentConsumerId';
  constructor(public payload: { uid: string}) {}
}

export class ResetChatState {
  static readonly type = '[chat-widdow] reset ResetChatState';
  constructor() {}
}

