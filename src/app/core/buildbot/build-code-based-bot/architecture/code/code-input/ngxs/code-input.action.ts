

/*Action type: Command*/
import {IBot, IBotVersionData} from "../../../../../../interfaces/IBot";
import {IVersionDiff, IVersionDiffMap} from "../../../../../../../../interfaces/code-input";

export class GetVersionsInit$ {
  static readonly type = '[code input] get bot Versions list';
  constructor(public payload: { bot:IBot, bot_access_token:string }) {}
}

export class SetBotId {
  static readonly type = '[code input] set bot id';
  constructor(public payload: { bot:IBot }) {}
}

/*Action type: Event*/
export class GetVersionsSuccess$ {
  static readonly type = '[code input] set bot Versions list';
  constructor(public payload: { botId:number, versions:IBotVersionData[]}) {}
}

/*Action type: Event*/
export class GetVersionsFail {
  static readonly type = '[code input] get bot Versions list FAIL';
  constructor(public payload: { botId:number, message:string}) {}
}

export class UpdateVersion {
  static readonly type = '[code input] get bot UpdateVersion';
  constructor(public payload: { botId:number, version: IBotVersionData}) {}
}

export class SetSelectedVersion {
  static readonly type = '[code input] set selected Versions';
  constructor(public payload: { id: number}) {}
}

export class AddForkedVersion {
  static readonly type = '[code input] add forked bot Versions';
  constructor(public payload: { botId:number, version: IBotVersionData}) {}
}

export class CreateForkedVersion$ {
  static readonly type = '[code input] create forked bot Versions';
  constructor(public payload: { bot:IBot, version: IBotVersionData}) {}
}

export class UpdateVersionLocal {
  static readonly type = '[code input] Update version locally';
  constructor(public payload: { bot:IBot, version: IBotVersionData}) {}
}

export class SetDiff {
  static readonly type = '[code input] set version diff$';
  constructor(public payload: { version: IBotVersionData}) {}
}

export class SaveVersion$ {
  static readonly type = '[code input] save bot Versions';
  constructor(public payload: { bot:IBot, version: IBotVersionData}) {}
}

export class SaveVersionSuccess {
  static readonly type = '[code input] save bot Versions success';
  constructor(public payload: { bot:IBot, version: IBotVersionData}) {}
}

export class ResetVersionState {
  static readonly type = '[code input] reset bot ResetVersionState';
  constructor(public payload: {}) {}
}

export class ValidateCodeInit$ {
  static readonly type = '[code input] validate bot Versions code';
  constructor(public payload: { bot:IBot, version: IBotVersionData}) {}
}

