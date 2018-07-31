import {IUser} from '../../core/interfaces/user';
import {Action, State, StateContext} from '@ngxs/store';
import {SetCodeBasedBotListAction} from '../../core/view-bots/ngxs/view-bot.action';
import {SetUserAction} from './auth.action';
import {ConstantsService} from '../../constants.service';


export interface IAuthState {
  user?: IUser;
}

@State<IAuthState>({
  name:'loggeduser',
  defaults:{
    user:null
  }
})

//same as reducer
export class AuthStateReducer {

  constructor(private constantsService:ConstantsService){}
  @Action(SetUserAction)
  setUser({patchState, setState, getState,dispatch}:StateContext<IAuthState>, payload : SetUserAction){
    patchState({user:payload.payload.user});
    this.constantsService.setLoggedUser(payload.payload.user);
  }
}
