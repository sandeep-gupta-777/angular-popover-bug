import {IApi} from '../interfaces';

export class AddApi {
  static readonly type = '[dev] add api';

  constructor(public payload: { api: IApi}) {

  }
}

export class ResetDevState {
  static readonly type = '[dev] reset';
}
