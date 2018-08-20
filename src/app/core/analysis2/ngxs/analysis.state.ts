import {Action, State, StateContext} from '@ngxs/store';
import {SetAnalysis2HeaderData, SetOverviewInfoData, SetChannelWiseFlowsPerSession, SetUserAcquisition, SetTotalMessages, SetAverageRoomTime, SetUserLoyalty, SetChannelWiseAverageSessionTime} from './analysis.action';
import {IOverviewInfo, IOverviewInfoPostBody} from '../../../../interfaces/Analytics2/overview-info';
import {IAnalysis2HeaderData} from '../../../../interfaces/Analytics2/analytics2-header';
import {  IChannelWiseFlowsPerSessionResponseBody, IChannelWiseFlowsPerSessionItem } from '../../../../interfaces/Analytics2/volume-sessions';
import { IUserAcquisitionItem } from '../../../../interfaces/Analytics2/volume-users';
import { ITotalMessagesItem } from '../../../../interfaces/Analytics2/volume-messages';
import { IAverageRoomTimeItem } from '../../../../interfaces/Analytics2/volume-time';
import { ITotalFlowsItem } from '../../../../interfaces/Analytics2/performance-flows';
import { IUserLoyaltyItem } from '../../../../interfaces/Analytics2/engagement-userLoyalty';
import { IChannelWiseAverageSessionTimeItem } from '../../../../interfaces/Analytics2/engagement-averageSessionTime';
import { ITopgenerationtemplatesItem } from '../../../../interfaces/Analytics2/performance-gentemplate';

export interface IAnalysis2State {
  // analysisHeaderData:IOverviewInfoPostBody,
  analysisHeaderData:Partial<IAnalysis2HeaderData>,
  overviewInfo: IOverviewInfo,
  channelWiseFlowsPerSession : IChannelWiseFlowsPerSessionItem[],
  userAcquisition : IUserAcquisitionItem[],
  totalMessages : ITotalMessagesItem[],
  averageRoomTime: IAverageRoomTimeItem[],
  totalFlows : ITotalFlowsItem[],
  userLoyalty : IUserLoyaltyItem[],
  channelWiseAverageSessionTime : IChannelWiseAverageSessionTimeItem[],
  topgenerationtemplates : ITopgenerationtemplatesItem[]
}

@State<IAnalysis2State>({
  name: 'analysisstate2',
  defaults: {
    analysisHeaderData:null,
    overviewInfo:null,
    channelWiseFlowsPerSession : null,
    userAcquisition : null,
    totalMessages : null,
    averageRoomTime : null,
    totalFlows : null,
    userLoyalty : null,
    channelWiseAverageSessionTime : null,
    topgenerationtemplates :null
  }
})

export class AnalysisStateReducer2 {


  @Action(SetAnalysis2HeaderData)
  setAnalysis2HeaderData({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetAnalysis2HeaderData) {
    let state:IAnalysis2State = getState();
    if(state){
      patchState({ analysisHeaderData:{
          ...state.analysisHeaderData,
          ...payload.analysisHeaderData
        }});
    }else {
      patchState({ analysisHeaderData:payload.analysisHeaderData});
    }
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

  @Action(SetUserAcquisition)
  setUserAcquisition({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetUserAcquisition) {
    let state:IAnalysis2State = getState();
    patchState({userAcquisition:payload.data});
  }

  @Action(SetTotalMessages)
  setTotalMessages({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetTotalMessages) {
    let state:IAnalysis2State = getState();
    patchState({totalMessages:payload.data});
  }
  @Action(SetAverageRoomTime)
  setAverageRoomTime({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetAverageRoomTime) {
    let state:IAnalysis2State = getState();
    patchState({averageRoomTime:payload.data});
  }
  @Action(SetUserLoyalty)
  setUserLoyalty({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetUserLoyalty) {
    let state:IAnalysis2State = getState();
    patchState({userLoyalty:payload.data});
  }
  @Action(SetChannelWiseAverageSessionTime)
  setChannelWiseAverageSessionTime({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetChannelWiseAverageSessionTime) {
    let state:IAnalysis2State = getState();
    patchState({channelWiseAverageSessionTime:payload.data});
  }


  static getAnalytics2HeaderData(state){
    return state.analysisstate2.analysisHeaderData;
  }

}

