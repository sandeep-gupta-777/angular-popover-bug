
import {IBot, IBotVersionData} from '../../interfaces/IBot';

export class SetCodeBasedBotListAction {
  static readonly type = '[view-bots] set code-based-timePeriod-list';
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
