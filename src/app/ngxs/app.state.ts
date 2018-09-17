import {Action, State, StateContext, Store} from '@ngxs/store';
import {
  ResetAppState,
  ResetStoreToDefault, SetAutoLogoutTime, SetBackendURlRoot, SetEnterpriseNerData,
  SetLastSateUpdatedTimeAction,
  SetMasterIntegrationsList,
  SetMasterProfilePermissions, SetPipelineModuleMasterData,
  SetProgressValue, SetShowBackendURlRoot,
  SetStateFromLocalStorageAction
} from './app.action';
import {ConstantsService} from '../constants.service';
import {IIntegrationMasterListItem} from '../../interfaces/integration-option';
import {IProfilePermission} from '../../interfaces/profile-action-permission';
import {ICustomNerItem} from '../../interfaces/custom-ners';
import {IPipelineItem} from '../../interfaces/ai-module';


export interface IAppState /*extends INavigationState, IAuthState */
{
  lastUpdated: number,
  progressbar: {
    show: boolean,
    loading: boolean,
    value: number
  },
  masterIntegrationList: IIntegrationMasterListItem[],
  masterProfilePermissions: IProfilePermission[],
  masterPipelineItems: IPipelineItem[],
  backendUrlRoot: string,
  showBackendUrlRootButton: boolean,
  enterpriseNerData: ICustomNerItem[],
  autoLogoutTime: number
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
  backendUrlRoot: 'https://dev.imibot.ai/',
  showBackendUrlRootButton: false,
  enterpriseNerData: [],
  masterPipelineItems: null,
  autoLogoutTime: Date.now() + 3600 * 1000
};

@State<IAppState>({
  name: 'app',
  defaults: appDefaultState
})//same as reducer
export class AppStateReducer {

  constructor(private constantsService: ConstantsService, private store: Store) {
  }

  @Action(SetStateFromLocalStorageAction)
  setUsername({patchState, setState, getState, dispatch,}: StateContext<any>, {payload}: SetStateFromLocalStorageAction) {
    console.log('resetting state', getState());
  }

  // @Action(ResetStoreToDefault)
  // resetStoreToDefault({patchState, setState, getState, dispatch,}: StateContext<any>) {
  //   this.store.reset(appDefaultState);
  //   console.log('resetting state', getState());
  // }

  @Action(SetProgressValue)
  SetProgressValue({patchState, setState, getState, dispatch,}: StateContext<any>, payload: SetProgressValue) {
    // this.store.reset(appDefaultState);
    // console.log('resetting state', getState());
    patchState({progressbar: payload.payload.progressbar});
  }

  @Action(SetMasterIntegrationsList)
  setMasterIntegrationsList({patchState, setState, getState, dispatch,}: StateContext<any>, payload: SetMasterIntegrationsList) {
    patchState({masterIntegrationList: payload.payload.masterIntegrationList});
  }

  @Action(SetMasterProfilePermissions)
  setMasterProfilePermissions({patchState, setState, getState, dispatch,}: StateContext<any>, payload: SetMasterProfilePermissions) {
    patchState({masterProfilePermissions: payload.payload.masterProfilePermissions});
  }


  @Action(SetBackendURlRoot)
  setBackendURlRoot({patchState, setState, getState, dispatch,}: StateContext<any>, payload: SetBackendURlRoot) {
    patchState({backendUrlRoot: payload.payload.url});
  }

  @Action(SetShowBackendURlRoot)
  setShowBackendURlRoot({patchState, setState, getState, dispatch,}: StateContext<any>, payload: SetShowBackendURlRoot) {
    patchState({showBackendUrlRootButton: payload.payload.showBackendURlRoot});
  }

  @Action(SetEnterpriseNerData)
  setEnterpriseNerData({patchState, setState, getState, dispatch,}: StateContext<any>, payload: SetEnterpriseNerData) {
    patchState({enterpriseNerData: payload.payload.enterpriseNerData});
  }

  @Action(SetPipelineModuleMasterData)
  setPipelineModuleMasterData({patchState, setState, getState, dispatch,}: StateContext<any>, payload: SetPipelineModuleMasterData) {
    patchState({masterPipelineItems: payload.payload.masterPipelineItems});
  }

  @Action(SetAutoLogoutTime)
  setAutoLogoutTime({patchState, setState, getState, dispatch,}: StateContext<any>, payload: SetAutoLogoutTime) {
    patchState({autoLogoutTime: payload.payload.time});
  }

  @Action(ResetAppState)
  resetAppState({patchState, setState, getState, dispatch,}: StateContext<any>, payload: ResetAppState) {
    patchState(appDefaultState);
  }

}
