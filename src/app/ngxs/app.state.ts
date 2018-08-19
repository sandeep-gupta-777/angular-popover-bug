import {Action, NgxsOnInit, Selector, State, StateContext, Store} from '@ngxs/store';
import {ResetStoreToDefault, SetLastSateUpdatedTimeAction, SetProgressValue, SetStateFromLocalStorageAction} from './app.action';
import {INavigationState} from './navigation.state';
import {IAuthState} from '../auth/ngxs/auth.state';
import {ConstantsService} from '../constants.service';
import {defaultChatState} from '../chat/ngxs/chat.state';


export interface IAppState /*extends INavigationState, IAuthState */
{
  lastUpdated: number,
  progressbar: {
    show: boolean,
    value: number
  }
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
      value: 0
    }
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

}
