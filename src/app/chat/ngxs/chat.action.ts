import {EChatFrame, IMessageData, IRoomData} from '../../../interfaces/chat-session-state';

export class ToggleChatWindow {
  static readonly type = '[chat-widdow] set toggle';

  constructor(public payload: { open: boolean }) {
  }
}

export class ChangeFrameAction {
  static readonly type = '[chat-widdow] update frame';

  constructor(public payload: { frameEnabled: EChatFrame }) {}
}
export class AddMessagesToRoom {
  static readonly type = '[chat-widdow] update AddMessagesToRoom';
  constructor(public payload: IRoomData) {}
}

export class SetCurrentRoomID {
  static readonly type = '[chat-widdow] set SetCurrentRoomID';
  constructor(public payload: { _id: string}) {}
}

export class SetCurrentBotID {
  static readonly type = '[chat-widdow] set SetCurrentBotID';
  constructor(public payload: { botId: number}) {}
}

export class ResetChatState {
  static readonly type = '[chat-widdow] reset ResetChatState';
  constructor() {}
}

