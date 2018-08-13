import {Action, State, StateContext} from '@ngxs/store';
import {SetAnalysis2HeaderData, SetOverviewInfoData} from './analysis.action';
import {IOverviewInfo, IOverviewInfoPostBody} from '../../../../interfaces/Analytics2/overview-info';
import {IAnalysis2HeaderData} from '../../../../interfaces/Analytics2/analytics2-header';

export interface IAnalysis2State {
  // analysisHeaderData:IOverviewInfoPostBody,
  analysisHeaderData:IAnalysis2HeaderData,
  overviewInfo: IOverviewInfo
}

@State<IAnalysis2State>({
  name: 'analysisstate2',
  defaults: {
    analysisHeaderData:null,
    overviewInfo:null
  }
})

export class AnalysisStateReducer2 {


  @Action(SetAnalysis2HeaderData)
  setOverViewInfo2({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetAnalysis2HeaderData) {
    let state:IAnalysis2State = getState();
    patchState({ analysisHeaderData:{
        ...state.analysisHeaderData,
        ...payload.analysisHeaderData
      }});
  }

  @Action(SetOverviewInfoData)
  setOverviewInfoData({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetOverviewInfoData) {
    let state:IAnalysis2State = getState();
    patchState({overviewInfo:payload.data});
  }

  static getAnalytics2HeaderData(state){
    return state.analysisstate2.analysisHeaderData;
  }

}

