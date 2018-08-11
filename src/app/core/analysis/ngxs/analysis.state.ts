import {Action, State, StateContext} from '@ngxs/store';
import {SetOverViewInfo} from './analysis.action';
import {IOverviewInfoPostBody} from '../../../../interfaces/overview-info';

export interface IAnalysisState {
  overviewinfo:IOverviewInfoPostBody,
}

@State<IAnalysisState>({
  name: 'analysisstate',
  defaults: {
    overviewinfo:null
  }
})

export class AnalysisStateReducer {

  @Action(SetOverViewInfo)
  setOverViewInfo({patchState, setState, getState, dispatch}: StateContext<IAnalysisState>, {payload}: SetOverViewInfo) {
    let state:IAnalysisState = getState();
    setState({...state, overviewinfo:payload.overviewInfo});
  }

}

