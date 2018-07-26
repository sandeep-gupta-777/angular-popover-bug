import {Action, NgxsOnInit, Selector, State, StateContext, Store} from '@ngxs/store';
import {ResetStoreToDefault, SetLastSateUpdatedTimeAction, SetStateFromLocalStorageAction} from './app.action';
import {INavigationState} from './navigation.state';
import {IAuthState} from '../auth/ngxs/auth.state';
import {ConstantsService} from '../constants.service';
import {defaultChatState} from '../chat/ngxs/chat.state';


export interface IAppData extends INavigationState, IAuthState  {
  lastUpdated: number
}

const appDefaultState = {
  chatsessionstate:defaultChatState
};

@State<any>({
  name:'time',
  defaults: {
    lastUpdated:0,

    state:null
  }
})//same as reducer
export class AppStateReducer{

  constructor(private constantsService:ConstantsService, private store:Store){}

  @Action(SetStateFromLocalStorageAction)
  setUsername({patchState, setState, getState,dispatch,}:StateContext<any>, {payload}: SetStateFromLocalStorageAction){
    console.log('resetting state', getState());
  }

  @Action(ResetStoreToDefault)
  resetStoreToDefault({patchState, setState, getState,dispatch,}:StateContext<any>){
    this.store.reset(appDefaultState);
    console.log('resetting state', getState());
  }

}
