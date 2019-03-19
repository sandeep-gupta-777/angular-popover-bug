

/*Action type: Command*/
import {IBot, IBotVersionData} from "../../../../../../interfaces/IBot";

export class GetVersionsInit$ {
  static readonly type = '[code input] get bot Versions list';
  constructor(public payload: { bot:IBot, bot_access_token:string }) {}
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
  static readonly type = '[code input] get bot Versions list FAIL';
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
  constructor(public payload: { bot:IBot, version: IBotVersionData}) {debugger}
}

export class SaveVersion$ {
  static readonly type = '[code input] save forked bot Versions';
  constructor(public payload: { bot:IBot, version: IBotVersionData}) {}
}

export class SaveVersionSuccess {
  static readonly type = '[code input] save forked bot Versions success';
  constructor(public payload: { bot:IBot, version: IBotVersionData}) {}
}

export class ValidateCodeInit$ {
  static readonly type = '[code input] validate bot Versions code';
  constructor(public payload: { bot:IBot, version: IBotVersionData}) {}
}

