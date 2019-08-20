import {IUser} from '../../core/interfaces/user';
import {Action, State, StateContext} from '@ngxs/store';
import {SetCodeBasedBotListAction} from '../../core/view-bots/ngxs/view-bot.action';
import {ResetAuthToDefaultState, ResetLoggedInStatus, SetUser} from './auth.action';
import {ConstantsService} from '../../constants.service';


export interface IAuthState {
  user?: IUser;
  is_loggedIn?: boolean;
}

const initialState: IAuthState = {
  user: null,
  is_loggedIn: false
};

@State<IAuthState>({
  name: 'loggeduser',
  defaults: initialState
})

// same as reducer
export class AuthStateReducer {

  constructor(private constantsService: ConstantsService) {
  }

  @Action(SetUser)
  setUser({patchState, setState, getState, dispatch}: StateContext<IAuthState>, {payload}: SetUser) {

    patchState({user: payload.user, is_loggedIn: payload.is_loggedIn});
    this.constantsService.setLoggedUser(payload.user);
  }

  @Action(ResetAuthToDefaultState)
  resetAuthToDefaultState({patchState, setState, getState, dispatch}: StateContext<IAuthState>) {
    patchState({user: null});
  }

  @Action(ResetLoggedInStatus)
  ResetLoggedInStatus({patchState, setState, getState, dispatch}: StateContext<IAuthState>) {
    patchState({is_loggedIn: false});
  }
}
