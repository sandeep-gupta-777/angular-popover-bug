import {Action, NgxsOnInit, Selector, State, StateContext, Store} from '@ngxs/store';
import {
  ResetAppState,
  ResetStoreToDefault, SetBackendURlRoot, SetEnterpriseNerData,
  SetLastSateUpdatedTimeAction,
  SetMasterIntegrationsList,
  SetMasterProfilePermissions,
  SetProgressValue,
  SetStateFromLocalStorageAction
} from './app.action';
import {INavigationState} from './navigation.state';
import {IAuthState} from '../auth/ngxs/auth.state';
import {ConstantsService} from '../constants.service';
import {defaultChatState} from '../chat/ngxs/chat.state';
import {IIntegrationMasterListItem} from '../../interfaces/integration-option';
import {IProfilePermission} from '../../interfaces/profile-action-permission';
import {stringify} from 'querystring';
import {ICustomNerItem} from '../../interfaces/custom-ners';


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
  backendUrlRoot:string,
  enterpriseNerData:ICustomNerItem[]
}

const appDefaultState = {
  lastUpdated: 0,
  progressbar: {
    show: false,
    loading: false,
    value: 0
  },
  masterIntegrationList: null,
  masterProfilePermissions:null,
  backendUrlRoot:'https://dev.imibot.ai/',
  enterpriseNerData:[]
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

  @Action(SetEnterpriseNerData)
  setEnterpriseNerData({patchState, setState, getState, dispatch,}: StateContext<any>, payload: SetEnterpriseNerData) {
    patchState({enterpriseNerData: payload.payload.enterpriseNerData});
  }

  @Action(ResetAppState)
  resetAppState({patchState, setState, getState, dispatch,}: StateContext<any>, payload: ResetAppState) {
    patchState(appDefaultState);
  }

}
