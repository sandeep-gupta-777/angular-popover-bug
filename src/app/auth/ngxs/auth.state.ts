import {IUser} from '../../core/interfaces/user';
import {Action, State, StateContext} from '@ngxs/store';
import {SetCodeBasedBotListAction} from '../../core/view-bots/ngxs/view-bot.action';
import {ResetAuthToDefaultState, SetUser} from './auth.action';
import {ConstantsService} from '../../constants.service';


export interface IAuthState {
  user?: IUser;
}
const initialState: IAuthState ={
  user:null
};

@State<IAuthState>({
  name:'loggeduser',
  defaults:initialState
})

//same as reducer
export class AuthStateReducer {

  constructor(private constantsService:ConstantsService){}
  @Action(SetUser)
  setUser({patchState, setState, getState,dispatch}:StateContext<IAuthState>, {payload} : SetUser){
    patchState({user:payload.user});
    this.constantsService.setLoggedUser(payload.user);
  }

  @Action(ResetAuthToDefaultState)
  resetAuthToDefaultState({patchState, setState, getState,dispatch}:StateContext<IAuthState>){
    patchState({user:null});
  }

}
