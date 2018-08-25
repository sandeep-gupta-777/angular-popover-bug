import {IUser} from '../core/interfaces/user';
import {IAppState} from './app.state';
import {IIntegrationMasterListItem} from '../../interfaces/integration-option';
import {IProfilePermission} from '../../interfaces/profile-action-permission';

export class SetStateFromLocalStorageAction {
  static readonly type = '[app] set state from localstorage';

  constructor(public payload: { state: IAppState }) {

  }
}

export class SetLastSateUpdatedTimeAction {
  static readonly type = '[app] set last state updated';

  constructor(public payload: { lastUpdated: number }) {

  }
}

export class ResetStoreToDefault {
  static readonly type = '[app] reset ResetStoreToDefault';

  constructor() {
  }
}

export class SetProgressValue {
  static readonly type = '[app] set SetProgressValue';

  constructor(public payload: {
    progressbar: {
      loading: boolean,
      value: number
    }
  }) {}
}

export class SetMasterIntegrationsList {
  static readonly type = '[app] set SetMasterIntegrationsList';

  constructor(public payload: {
    masterIntegrationList:IIntegrationMasterListItem[]
  }) {}
}


export class SetMasterProfilePermissions {
  static readonly type = '[app] set SetProfilePermissions';

  constructor(public payload: {
    masterProfilePermissions:IProfilePermission[]
  }) {}
}


