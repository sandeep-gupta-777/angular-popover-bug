import {Action, NgxsOnInit, Selector, State, StateContext, Store} from '@ngxs/store';
import {
  ResetStoreToDefault,
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


export interface IAppState /*extends INavigationState, IAuthState */
{
  lastUpdated: number,
  progressbar: {
    show: boolean,
    loading: boolean,
    value: number
  },
  masterIntegrationList: IIntegrationMasterListItem[],
  masterProfilePermissions: IProfilePermission[]
}

const appDefaultState = {
  chatsessionstate: defaultChatState

};

@State<IAppState>({
  name: 'app',
  defaults: {
    lastUpdated: 0,
    progressbar: {
      show: false,
      loading: false,
      value: 0
    },
    masterIntegrationList: null,
    masterProfilePermissions:null
  }
})//same as reducer
export class AppStateReducer {

  constructor(private constantsService: ConstantsService, private store: Store) {
  }

  @Action(SetStateFromLocalStorageAction)
  setUsername({patchState, setState, getState, dispatch,}: StateContext<any>, {payload}: SetStateFromLocalStorageAction) {
    console.log('resetting state', getState());
  }

  @Action(ResetStoreToDefault)
  resetStoreToDefault({patchState, setState, getState, dispatch,}: StateContext<any>) {
    this.store.reset(appDefaultState);
    console.log('resetting state', getState());
  }

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

}
