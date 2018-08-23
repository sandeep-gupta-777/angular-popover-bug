
import {IBot, IBotVersionData} from '../../interfaces/IBot';

export class SetCodeBasedBotListAction {
  static readonly type = '[view-bots] set code-based-timePeriod-list';
  constructor(public payload:{botList:IBot[] }){}
}

export class SetAllBotListAction {
  static readonly type = '[view-bots] set SetAllBotListAction';
  constructor(public payload:{botList:IBot[] }){}
}

export class SetPipeLineBasedBotListAction {
  static readonly type = '[view-bots] set pipeline-based-list';
  constructor(public payload:{botList:IBot[] }){}
}

export class ResetBotListAction {
  static readonly type = '[view-bots] reset ResetBotListAction';
  constructor(){}
}

export class SaveVersionInfoInBot {
  static readonly type = '[build-bots] set version info in bot';
  constructor(public payload: { data: IBotVersionData[], botId:number }) {}
}

export class SaveInfoInBotInBotList {
  static readonly type = '[build-bots] set info in bot inj botlist';
  constructor(public payload: { data: IBot, botId:number }) {}
}
