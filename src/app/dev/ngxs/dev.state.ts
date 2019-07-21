import {IApi} from '../interfaces';
import {Action, State, StateContext, Store} from '@ngxs/store';
import {ConstantsService} from '../../constants.service';
import {AddApi, ResetDevState} from './dev.actions';

export interface IDevState {
  list: IApi[];
}
//
const devDefaultState: IDevState = {
  list: []
};

@State<IDevState>({
  name: 'dev',
  defaults: devDefaultState
})
export class DevStateReducer {

  constructor(private constantsService: ConstantsService, private store: Store) {

  }

  @Action(ResetDevState)
  resetDevState({patchState, setState, getState, dispatch, }: StateContext<IDevState>) {
    setState(devDefaultState);
  }

  @Action(AddApi)
  addApi({patchState, setState, getState, dispatch, }: StateContext<IDevState>, {payload}: AddApi) {
    // LoggingService.log('resetting state', getState());

    const state = getState();
    if (!state) {
      return;
    }
    const index = state.list.findIndex(el => el.id === payload.api.id);
    if (index === -1) {
      state.list = [...state.list, payload.api];
    } else {
      state.list[index] = {...state.list[index], ...payload.api};
    }

    patchState({...state});
  }



}
