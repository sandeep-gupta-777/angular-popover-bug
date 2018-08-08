import {Action, State, StateContext} from '@ngxs/store';
import {SetOverViewInfo2} from './analysis.action';
import {IOverviewInfoPostBody} from '../../../../interfaces/overview-info';

export interface IAnalysisState {
  overviewinfo:IOverviewInfoPostBody,
}

@State<IAnalysisState>({
  name: 'analysisstate2',
  defaults: {
    overviewinfo:null
  }
})

export class AnalysisStateReducer2 {


  @Action(SetOverViewInfo2)
  setOverViewInfo2({patchState, setState, getState, dispatch}: StateContext<IAnalysisState>, {payload}: SetOverViewInfo2) {
    let state:IAnalysisState = getState();
    setState({...state, overviewinfo:payload.overviewInfo});
  }

}

