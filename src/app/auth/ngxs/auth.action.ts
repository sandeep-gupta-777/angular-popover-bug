import {IBot} from '../../core/interfaces/IBot';
import {IUser} from '../../core/interfaces/user';

export class SetUser {
  static readonly type = '[login] set user';
  constructor(public payload: {user: IUser }) {
  }

}

export class ResetAuthToDefaultState {
  static readonly type = '[login] reset user';
  constructor() {
  }

}
