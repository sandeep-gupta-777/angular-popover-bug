import {Action, State, StateContext} from '@ngxs/store';
import {SetAnalysis2HeaderData, SetOverviewInfoData, SetChannelWiseFlowsPerSession, SetUserAcquisition, SetTotalMessages, SetAverageRoomTime, SetUserLoyalty, SetChannelWiseAverageSessionTime, SetTotalFlows, SetFlowsPerRoom, SetTotalRooms, SetRoomDuration, SetChannelWiseSessions, SetChannelWiseUsers} from './analysis.action';
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
import { IFlowsPerRoomItem } from '../../../../interfaces/Analytics2/performance-flowsPerRoom';
import { ITotalRoomsItem } from '../../../../interfaces/Analytics2/performance-totalRooms';
import { IRoomDurationItem } from '../../../../interfaces/Analytics2/performance-roomDuration';
import { IChannelWiseSessionsItem } from '../../../../interfaces/Analytics2/engagement-channelWiseSessions';
import { IChannelWiseUsersItem } from '../../../../interfaces/Analytics2/engagement-channelWiseUsers';

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
  topgenerationtemplates : ITopgenerationtemplatesItem[],
  flowsPerRoom : IFlowsPerRoomItem[],
  totalRooms : ITotalRoomsItem[],
  roomDuration : IRoomDurationItem[],
  channelWiseSessions : IChannelWiseSessionsItem[],
  channelWiseUsers : IChannelWiseUsersItem[]
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
    topgenerationtemplates :null,
    flowsPerRoom : null,
    totalRooms : null,
    roomDuration : null,
    channelWiseSessions : null,
    channelWiseUsers: null
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

  @Action(SetTotalFlows)
  setTotalFlows({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetTotalFlows) {
    let state:IAnalysis2State = getState();
    patchState({totalFlows:payload.data});
  }
  @Action(SetFlowsPerRoom)
  setFlowsPerRoom({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetFlowsPerRoom) {
    let state:IAnalysis2State = getState();
    patchState({flowsPerRoom:payload.data});
  }
  @Action(SetTotalRooms)
  setTotalRooms({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetTotalRooms) {
    let state:IAnalysis2State = getState();
    patchState({totalRooms:payload.data});
  }
  @Action(SetRoomDuration)
  setRoomDuration({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetRoomDuration) {
    let state:IAnalysis2State = getState();
    patchState({roomDuration:payload.data});
  }
  @Action(SetChannelWiseSessions)
  setChannelWiseSessions({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetChannelWiseSessions) {
    let state:IAnalysis2State = getState();
    patchState({channelWiseSessions:payload.data});
  }
  @Action(SetChannelWiseUsers)
  setChannelWiseUsers({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetChannelWiseUsers) {
    let state:IAnalysis2State = getState();
    patchState({channelWiseUsers:payload.data});
  }

  static getAnalytics2HeaderData(state){
    return state.analysisstate2.analysisHeaderData;
  }
  static getAnalytics2GraphData(state){/*this is not observe headerData*/
    return {
      ...state.analysisstate2,
      headerData:null
    };
  }

}

