import {IBot} from '../../core/interfaces/IBot';
import {IUser} from '../../core/interfaces/user';

export class SetUserAction {
  static readonly type = '[login] set user';;
  constructor(public payload:{user:IUser }){

  }
}
