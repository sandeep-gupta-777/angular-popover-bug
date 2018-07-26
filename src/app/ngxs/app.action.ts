import {IUser} from '../core/interfaces/user';
import {IAppData} from './app.state';

export class SetStateFromLocalStorageAction {
  static readonly type = '[app] set state from localstorage';
  constructor(public payload:{state:IAppData}){

  }
}
export class SetLastSateUpdatedTimeAction {
  static readonly type = '[app] set last state updated';
  constructor(public payload:{lastUpdated:number}){

  }
}

export class ResetStoreToDefault {
  static readonly type = '[app] reset ResetStoreToDefault';
  constructor(){}
}


