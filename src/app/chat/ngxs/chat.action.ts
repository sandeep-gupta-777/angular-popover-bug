import {EChatFrame, IMessageData, IRoomData} from '../../../interfaces/chat-session-state';
import {IBot} from '../../core/interfaces/IBot';
import {IConsumerDetails} from './chat.state';

import {IIntegrationOption} from '../../../interfaces/integration-option';
import {EChatFeedback, IChatFeedback} from '../chat-wrapper.component';

export class ToggleChatWindow {
  static readonly type = '[chat-widdow] set toggle';

  constructor(public payload: { open: boolean }) {
  }
}

export class ChangeFrameAction {
  static readonly type = '[chat-widdow] update frame';

  constructor(public payload: { frameEnabled: EChatFrame }) {
  }
}
export class ChangeBotIsThinkingDisplayByRoomId {
  static readonly type = '[chat-widdow] set ShowBotIsThinkingInRoomId';

  constructor(public payload: { roomId: number, shouldShowBotIsThinking: boolean}) {
  }
}

export class AddNewRoom {
  static readonly type = '[chat-widdow] update AddNewRoom';

  constructor(public payload: IRoomData) {
  }
}

// export class AddMessagesToRoomByUId {
//   static readonly type = '[chat-widdow] update AddMessagesToRoom';
//   constructor(public payload: IRoomData) {}
// }
export class AddMessagesToRoomByRoomId {
  static readonly type = '[chat-widdow] update AddMessagesToRoomByRoomId';

  constructor(public payload: IRoomData) {
  }
}

// export class AttachRoomIdToRoomByUId {
//   static readonly type = '[chat-widdow] update AttachRoomIdToRoomByUId';
//   constructor(public payload: {room_id:number, uid:string}) {}
// }
// export class SetLastTemplateKeyToRoomByUId {
//   static readonly type = '[chat-widdow] update SetLastTemplateKeyToRoomByUId';
//   constructor(public payload: {lastTemplateKey:string, uid:string}) {}
// }
export class SetLastTemplateKeyToRoomByRoomId {
  static readonly type = '[chat-widdow] update SetLastTemplateKeyToRoomByRoomId';

  constructor(public payload: { lastTemplateKey: string, room_id: number }) {
  }
}

export class UpdateBotMessage {
  static readonly type = '[chat-widdow] update UpdateBotMessage';

  constructor(public payload: {room_id: number, bot_message_id: number, feedback: EChatFeedback }) {
  }
}

export class SetCurrentRoomID {
  static readonly type = '[chat-widdow] set SetCurrentRoomID';

  constructor(public payload: { id: number }) {
  }
}

export class SetConsumerDetail {
  static readonly type = '[chat-widdow] set SetConsumerDetail';

  constructor(public payload: IConsumerDetails) {
  }
}

export class SetCurrentBotDetailsAndResetChatStateIfBotMismatch {
  static readonly type = '[chat-widdow] set SetCurrentBotID';

  constructor(public payload: {
    bot: IBot
    // id: number,
    // bot_access_token?: string,
    // name?: string,
    // logo?: string,
    // bot_unique_name?:string,
    // integrations:IIntegrationOption
  }) {
  }
}

export class SetCurrentUId {
  static readonly type = '[chat-widdow] set SetCurrentConsumerId';

  constructor(public payload: { uid: string }) {
  }
}

export class ResetChatState {
  static readonly type = '[chat-widdow] reset ResetChatState';

  constructor() {
  }
}

export class DeleteChatRoomsByBotId {
  static readonly type = '[chat-widdow] delete deleteRoomsByBotId';

  constructor(public payload: { id: number }) {
  }
}

