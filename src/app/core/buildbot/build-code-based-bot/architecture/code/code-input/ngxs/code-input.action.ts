

/*Action type: Command*/
import {IBot, IBotVersionData} from "../../../../../../interfaces/IBot";

export class GetVersionsInit$ {
  static readonly type = '[code input] get bot version list';
  constructor(public payload: { bot:IBot, bot_access_token:string }) {}
}

/*Action type: Event*/
export class GetVersionsSuccess$ {
  static readonly type = '[code input] set bot version list';
  constructor(public payload: { botId:number, versions:IBotVersionData[]}) {}
}

/*Action type: Event*/
export class GetVersionsFail {
  static readonly type = '[code input] get bot version list FAIL';
  constructor(public payload: { botId:number, message:string}) {}
}

export class UpdateVersion {
  static readonly type = '[code input] get bot version list FAIL';
  constructor(public payload: { botId:number, version: IBotVersionData}) {}
}

export class SetSelectedVersion {
  static readonly type = '[code input] set selected version';
  constructor(public payload: { version: IBotVersionData}) {}
}

export class AddForkedVersion {
  static readonly type = '[code input] add forked bot version';
  constructor(public payload: { botId:number, version: IBotVersionData}) {debugger;}
}

export class CreateForkedVersion$ {
  static readonly type = '[code input] create forked bot version';
  constructor(public payload: { bot:IBot, version: IBotVersionData}) {debugger}
}

export class SaveVersion$ {
  static readonly type = '[code input] save forked bot version';
  constructor(public payload: { bot:IBot, version: IBotVersionData}) {}
}

export class ValidateCodeInit$ {
  static readonly type = '[code input] validate bot version code';
  constructor(public payload: { bot:IBot, version: IBotVersionData}) {}
}

