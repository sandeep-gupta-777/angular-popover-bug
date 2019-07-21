

/*Action type: Command*/
import {IBot, IBotVersionData, ICodeVersionValidation, IValidationTabItem} from '../../../../../../interfaces/IBot';
import {
  IVersionDiff,
  IVersionDiffMap,
  IVersionErrorsMap
} from '../../../../../../../../interfaces/code-input';

export class GetVersionsInit$ {
  static readonly type = '[code input] get bot Versions list';
  constructor(public payload: { bot: IBot, bot_access_token: string }) {}
}

export class SetBotId {
  static readonly type = '[code input] set bot id';
  constructor(public payload: { bot: IBot }) {}
}


export class SetErrorMap {
  static readonly type = '[code input] SetErrorMap';
  constructor(public payload: { validation: ICodeVersionValidation, id: number}) {}
}

/*Action type: Event*/
export class GetVersionsSuccess$ {
  static readonly type = '[code input] set bot Versions list';
  constructor(public payload: { botId: number, versions: IBotVersionData[]}) {}
}

/*Action type: Event*/
export class GetVersionsFail {
  static readonly type = '[code input] get bot Versions list FAIL';
  constructor(public payload: { botId: number, message: string}) {}
}

export class UpdateVersion {
  static readonly type = '[code input] get bot UpdateVersion';
  constructor(public payload: { botId: number, version: IBotVersionData}) {}
}

export class SetSelectedVersion {
  static readonly type = '[code input] set selected Versions';
  constructor(public payload: { id: number}) {}
}

export class AddForkedVersion {
  static readonly type = '[code input] add forked bot Versions';
  constructor(public payload: { botId: number, version: IBotVersionData}) {}
}

export class CreateForkedVersion$ {
  static readonly type = '[code input] create forked bot Versions';
  constructor(public payload: { bot: IBot, version: IBotVersionData}) {}
}

export class UpdateVersionLocal {
  static readonly type = '[code input] Update version locally';
  constructor(public payload: { bot: IBot, version: IBotVersionData}) {}
}

export class SetDiff {
  static readonly type = '[code input] set version diff$';
  constructor(public payload: { version: IBotVersionData}) {}
}

export class SaveVersion$ {
  static readonly type = '[code input] save bot Versions';
  constructor(public payload: { bot: IBot, version: IBotVersionData}) {}
}

export class SaveVersionSuccess {
  static readonly type = '[code input] save bot Versions success';
  constructor(public payload: { bot: IBot, version: IBotVersionData}) {}
}

export class ResetVersionState {
  static readonly type = '[code input] reset bot ResetVersionState';
}

export class ValidateCode_flow$ {
  static readonly type = '[code input] initiate version save: validate bot Versions code';
  constructor(public payload: { bot: IBot, version: IBotVersionData}) {}
}

export class ValidateCode_flow_ActivateVersion$ {
  static readonly type = '[code input] initiate version save: validate bot Versions code ValidateCode_flow_ActivateVersion$';
  constructor(public payload: { bot: IBot, version: IBotVersionData}) {}
}

export class ValidateCodeText {
  static readonly type = '[code input] validate bot Versions code text: standalone';
  constructor(public payload: { bot: IBot, version: IBotVersionData}) {}
}


