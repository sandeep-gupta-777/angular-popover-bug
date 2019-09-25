import {Action, State, StateContext, Store} from '@ngxs/store';
import {
  ResetAppState,
  ResetStoreToDefault, SetAutoLogoutTime, SetBackendURlRoot, SetBotLanguages, SetEnterpriseNerData,
  SetLastSateUpdatedTimeAction,
  SetMasterIntegrationsList,
  SetMasterProfilePermissions, SetPipelineItemsV2, SetPipelineModuleMasterData,
  SetProgressValue, SetRoleInfo, SetShowBackendURlRoot,
  SetStateFromLocalStorageAction
} from './app.action';
import {ConstantsService} from '../constants.service';
import {IIntegrationMasterListItem} from '../../interfaces/integration-option';
import {IProfilePermission} from '../../interfaces/profile-action-permission';
import {ICustomNerItem} from '../../interfaces/custom-ners';
import {IPipelineItem} from '../../interfaces/ai-module';
import {LoggingService} from '../logging.service';
import {IPipelineItemV2} from '../core/buildbot/build-code-based-bot/architecture/pipeline/pipeline.component';
import {IRoleInfo} from '../../interfaces/role-info';
import {IBotLanguage} from '../core/interfaces/IBot';


export interface IAppState {
  lastUpdated: number;
  progressbar: {
    show: boolean,
    loading: boolean,
    value: number
  };
  masterIntegrationList: IIntegrationMasterListItem[];
  masterProfilePermissions: IProfilePermission[];
  masterPipelineItems: IPipelineItem[];
  backendUrlRoot: string;
  showBackendUrlRootButton: boolean;
  enterpriseNerData: ICustomNerItem[];
  autoLogoutTime: number;
  pipelineModulesV2List: IPipelineItemV2[];
  roleInfoArr: IRoleInfo[];
  botLanguages: IBotLanguage[];
}

const appDefaultState: IAppState = {
  lastUpdated: 0,
  progressbar: {
    show: false,
    loading: false,
    value: 0
  },
  masterIntegrationList: null,
  masterProfilePermissions: null,
  backendUrlRoot: 'https://imibot.ai/', //// 'https://staging.imibot.ai/',//'https://dev.imibot.ai/'////
  showBackendUrlRootButton: false,
  enterpriseNerData: [],
  masterPipelineItems: null,
  autoLogoutTime: Date.now() + 3600 * 1000,
  pipelineModulesV2List: [],
  roleInfoArr: null,
  botLanguages: []
};

@State<IAppState>({
  name: 'app',
  defaults: appDefaultState
})// same as reducer
export class AppStateReducer {

  constructor(private constantsService: ConstantsService, private store: Store) {
  }

  @Action(SetStateFromLocalStorageAction)
  setUsername({patchState, setState, getState, dispatch, }: StateContext<any>, {payload}: SetStateFromLocalStorageAction) {
    LoggingService.log('resetting state', getState());
  }

  @Action(SetProgressValue)
  SetProgressValue({patchState, setState, getState, dispatch, }: StateContext<any>, payload: SetProgressValue) {
    // this.store.reset(appDefaultState);
    // LoggingService.log('resetting state', getState());
    patchState({progressbar: payload.payload.progressbar});
  }

  @Action(SetMasterIntegrationsList)
  setMasterIntegrationsList({patchState, setState, getState, dispatch, }: StateContext<any>, payload: SetMasterIntegrationsList) {
    patchState({masterIntegrationList: payload.payload.masterIntegrationList});
  }

  @Action(SetPipelineItemsV2)
  setPipelineItemsV2({patchState, setState, getState, dispatch, }: StateContext<any>, payload: SetPipelineItemsV2) {
    patchState({pipelineModulesV2List: payload.payload.data});
  }

  @Action(SetBotLanguages)
  setBotLanguages({patchState, setState, getState, dispatch, }: StateContext<any>, payload: SetBotLanguages) {
    patchState({botLanguages: payload.payload.botLanguages});
  }

  @Action(SetMasterProfilePermissions)
  setMasterProfilePermissions({patchState, setState, getState, dispatch, }: StateContext<any>, payload: SetMasterProfilePermissions) {
    patchState({masterProfilePermissions: payload.payload.masterProfilePermissions});
  }


  @Action(SetBackendURlRoot)
  setBackendURlRoot({patchState, setState, getState, dispatch, }: StateContext<any>, payload: SetBackendURlRoot) {
    console.log('backend root:', payload);
    patchState({backendUrlRoot: payload.payload.url});
  }

  @Action(SetShowBackendURlRoot)
  setShowBackendURlRoot({patchState, setState, getState, dispatch, }: StateContext<any>, payload: SetShowBackendURlRoot) {
    //
    patchState({showBackendUrlRootButton: payload.payload.showBackendURlRoot});
  }

  @Action(SetEnterpriseNerData)
  setEnterpriseNerData({patchState, setState, getState, dispatch, }: StateContext<any>, payload: SetEnterpriseNerData) {
    patchState({enterpriseNerData: payload.payload.enterpriseNerData});
  }

  @Action(SetPipelineModuleMasterData)
  setPipelineModuleMasterData({patchState, setState, getState, dispatch, }: StateContext<any>, payload: SetPipelineModuleMasterData) {
    patchState({masterPipelineItems: payload.payload.masterPipelineItems});
  }

  @Action(SetAutoLogoutTime)
  setAutoLogoutTime({patchState, setState, getState, dispatch, }: StateContext<any>, payload: SetAutoLogoutTime) {
    patchState({autoLogoutTime: payload.payload.time});
  }

  @Action(ResetAppState)
  resetAppState({patchState, setState, getState, dispatch, }: StateContext<any>, payload: ResetAppState) {
    const state: IAppState = getState();
    /*when app is reset, backendUrlRoot must not reset, since its only set when login page reloads*/
    const backendUrlRoot = state.backendUrlRoot;
    patchState({...appDefaultState, backendUrlRoot});
  }

  @Action(SetRoleInfo)
  setRoleInfo({patchState, setState, getState, dispatch, }: StateContext<any>, payload: SetRoleInfo) {
    patchState({roleInfoArr: payload.payload.roleInfoArr});
  }

}
