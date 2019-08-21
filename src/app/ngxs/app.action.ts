import {IAppState} from './app.state';
import {IIntegrationMasterListItem} from '../../interfaces/integration-option';
import {IProfilePermission} from '../../interfaces/profile-action-permission';
import {ICustomNerItem} from '../../interfaces/custom-ners';
import {IPipelineItem} from '../../interfaces/ai-module';
import {IPipelineItemV2} from '../core/buildbot/build-code-based-bot/architecture/pipeline/pipeline.component';
import {IRoleInfo} from '../../interfaces/role-info';

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
    masterIntegrationList: IIntegrationMasterListItem[]
  }) {}
}

export class SetPipelineItemsV2 {
  static readonly type = '[app] set SetPipelineItemsV2';

  constructor(public payload: {
    data: IPipelineItemV2[]
  }) {}
}


export class SetMasterProfilePermissions {
  static readonly type = '[app] set SetProfilePermissions';

  constructor(public payload: {
    masterProfilePermissions: IProfilePermission[]
  }) {}
}

export class SetBackendURlRoot {
  static readonly type = '[app] set SetBackendURlRoot';

  constructor(public payload: {
    url: string
  }) {
    console.log('SetBackendURlRoot ACTION:', payload);
  }
}

export class SetShowBackendURlRoot {
  static readonly type = '[app] set SetShowBackendURlRoot ';

  constructor(public payload: {
    showBackendURlRoot: boolean
  }) {}
}

export class SetEnterpriseNerData {
  static readonly type = '[app] set SetEnterpriseNERs';

  constructor(public payload: {
    enterpriseNerData: ICustomNerItem[]
  }) {}
}

export class SetPipelineModuleMasterData {
  static readonly type = '[app] set SetPipelineModuleMasterData';

  constructor(public payload: {
    masterPipelineItems: IPipelineItem[]
  }) {}
}

export class ResetAppState {
  static readonly type = '[app] set ReSetAppState';

  constructor() {}
}

export class SetAutoLogoutTime {
  static readonly type = '[app] set setAutoLogoutTime';

  constructor(public payload: {time: number}) {}
}
export class SetRoleInfo {
  static readonly type = '[app] set role info';

  constructor(public payload: {roleInfoArr: IRoleInfo[]}) {}
}



