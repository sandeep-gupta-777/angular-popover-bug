import {IUser} from '../../core/interfaces/user';

export class SetUser {
  static readonly type = '[login] set user';
  constructor(public payload: {user: IUser, is_loggedIn: boolean }) {
  }

}

export class ResetAuthToDefaultState {
  static readonly type = '[login] reset user';
  constructor() {
  }

}

export class ResetLoggedInStatus {
  static readonly type = '[login] ResetLoggedInStatus';
  constructor() {
  }

}
