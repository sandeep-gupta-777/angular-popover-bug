import {Action, State, StateContext} from '@ngxs/store';
import {SetAnalysis2HeaderData, SetOverviewInfoData, SetChannelWiseFlowsPerSession} from './analysis.action';
import {IOverviewInfo, IOverviewInfoPostBody} from '../../../../interfaces/Analytics2/overview-info';
import {IAnalysis2HeaderData} from '../../../../interfaces/Analytics2/analytics2-header';
import {  IChannelWiseFlowsPerSessionResponseBody, IChannelWiseFlowsPerSessionItem } from '../../../../interfaces/Analytics2/volume-sessions';

export interface IAnalysis2State {
  // analysisHeaderData:IOverviewInfoPostBody,
  analysisHeaderData:IAnalysis2HeaderData,
  overviewInfo: IOverviewInfo,
  channelWiseFlowsPerSession : IChannelWiseFlowsPerSessionItem[]
}

@State<IAnalysis2State>({
  name: 'analysisstate2',
  defaults: {
    analysisHeaderData:null,
    overviewInfo:null,
    channelWiseFlowsPerSession : null
  }
})

export class AnalysisStateReducer2 {


  @Action(SetAnalysis2HeaderData)
  setAnalysis2HeaderData({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetAnalysis2HeaderData) {
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

  
  @Action(SetChannelWiseFlowsPerSession)
  setVolumUserData({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetChannelWiseFlowsPerSession) {
    let state:IAnalysis2State = getState();
    patchState({channelWiseFlowsPerSession:payload.data});
  }

  static getAnalytics2HeaderData(state){
    return state.analysisstate2.analysisHeaderData;
  }

}

