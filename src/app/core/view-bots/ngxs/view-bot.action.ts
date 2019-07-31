import {IBot, IBotVersionData} from '../../interfaces/IBot';

function getBotWithoutBotToken(bot: IBot): IBot {
  const newBot = {...bot};
  delete newBot.bot_access_token;
  return newBot;
}

function removeBotAccessToken(bot: IBot | IBot[]): (IBot | IBot[]) {
  if (Array.isArray(bot)) {
    return bot.map((bot_temp) => {
      return getBotWithoutBotToken(bot_temp);
    });
  } else {
    return getBotWithoutBotToken(bot);
  }
}

export class SetCodeBasedBotListAction {
  static readonly type = '[view-bots] set code-based-timePeriod-list';

  constructor(public payload: { botList: IBot[] }) {
    this.payload.botList = removeBotAccessToken(this.payload.botList) as IBot[];
  }
}

export class SetAllBotListAction {
  static readonly type = '[view-bots] set SetAllBotListAction';

  constructor(public payload: { botList: IBot[] }) {
    this.payload.botList = removeBotAccessToken(this.payload.botList) as IBot[];
  }
}

export class AddNewBotInAllBotList {
  static readonly type = '[view-bots] set AddNewBotInAllBotList';

  constructor(public payload: { bot: IBot }) {
    this.payload.bot = removeBotAccessToken(this.payload.bot) as IBot;
  }
}

export class SetPipeLineBasedBotListAction {
  static readonly type = '[view-bots] set pipeline-based-list';

  constructor(public payload: { botList: IBot[] }) {
    this.payload.botList = removeBotAccessToken(this.payload.botList) as IBot[];
  }
}

export class ResetBotListAction {
  static readonly type = '[view-bots] reset ResetBotListAction';

  constructor() {
  }
}

export class SaveVersionInfoInBot {
  static readonly type = '[build-bots] set Versions info in bot';

  constructor(public payload: { data: IBotVersionData[], botId: number }) {
    console.log('SaveVersionInfoInBot');
  }
}

export class UpdateVersionInfoByIdInBot {
  static readonly type = '[build-bots] update Versions info in bot';

  constructor(public payload: { data: IBotVersionData, botId: number }) {

  }
}

export class UpdateBotInfoByIdInBotInBotList {
  static readonly type = '[build-bots] set info in bot inj botlist';

  constructor(public payload: { data: IBot, botId: number }) {
    this.payload.data = removeBotAccessToken(this.payload.data) as IBot;
  }
}
