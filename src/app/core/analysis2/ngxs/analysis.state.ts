import {Action, State, StateContext} from '@ngxs/store';
import {
  SetAnalysis2HeaderData,
  SetOverviewInfoData,
  SetChannelWiseFlowsPerSession,
  SetUserAcquisition,
  SetTotalMessages,
  SetUserLoyalty,
  SetChannelWiseAverageSessionTime,
  SetTotalFlows,
  SetFlowsPerRoom,
  SetTotalRooms,
  SetRoomDuration,
  SetChannelWiseSessions,
  SetChannelWiseUsers,
  ResetAnalytics2GraphData, SetUsagetrackingInfo,  ResetAnalytics2HeaderData, TotalSessions, SetSessionsperuser, SetMessagespersession, SetTimepersession, SetTotalTimeOfRooms, SetTopgenerationtemplates, SetSessionhandling
} from './analysis.action';
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
  analysisHeaderData: Partial<IAnalysis2HeaderData>;
  overviewInfo: IOverviewInfo;
  channelWiseFlowsPerSession: IChannelWiseFlowsPerSessionItem[];
  userAcquisition: IUserAcquisitionItem[];
  totalMessages: ITotalMessagesItem[];
  averageRoomTime: IAverageRoomTimeItem[];
  totalFlows: ITotalFlowsItem[];
  userLoyalty: IUserLoyaltyItem[];
  channelWiseAverageSessionTime: IChannelWiseAverageSessionTimeItem[];
  topgenerationtemplates: ITopgenerationtemplatesItem[];
  totalSessions: any[];
  flowsPerRoom: IFlowsPerRoomItem[];
  totalRooms: ITotalRoomsItem[];
  roomDuration: IRoomDurationItem[];
  channelWiseSessions: IChannelWiseSessionsItem[];
  channelWiseUsers: IChannelWiseUsersItem[];
  usagetracking: any;
  sessionsperuser:any;
  messagespersession:any;
  timepersession:any;
  totalTimeOfRooms:any;
  sessionhandling:any;
}
const defaultAnalytics2 = {
  analysisHeaderData: null,
  overviewInfo: null,
  channelWiseFlowsPerSession : null,
  userAcquisition : null,
  totalMessages : null,
  averageRoomTime : null,
  totalFlows : null,
  userLoyalty : null,
  channelWiseAverageSessionTime : null,
  topgenerationtemplates : null,
  totalSessions : null,
  flowsPerRoom : null,
  totalRooms : null,
  roomDuration : null,
  channelWiseSessions : null,
  channelWiseUsers: null,
  usagetracking: null,
  sessionsperuser: null,
  messagespersession: null,
  timepersession: null,
  totalTimeOfRooms: null,
  sessionhandling:null
};
@State<IAnalysis2State>({
  name: 'analysisstate2',
  defaults: defaultAnalytics2
})

export class AnalysisStateReducer2 {
  constructor(){
    debugger;
  }
  @Action(SetAnalysis2HeaderData)
  setAnalysis2HeaderData({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetAnalysis2HeaderData) {
    debugger;
    const state: IAnalysis2State = getState();
    if (state) {
      patchState({ analysisHeaderData: {
          ...state.analysisHeaderData,
          ...payload.analysisHeaderData
        }});
    } else {
      patchState({ analysisHeaderData: payload.analysisHeaderData});
    }
  }

  @Action(SetOverviewInfoData)
  setOverviewInfoData({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetOverviewInfoData) {
    const state: IAnalysis2State = getState();
    patchState({overviewInfo: payload.data});
  }

  @Action(SetChannelWiseFlowsPerSession)
  setVolumUserData({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetChannelWiseFlowsPerSession) {
    const state: IAnalysis2State = getState();
    patchState({channelWiseFlowsPerSession: payload.data});
  }
  
  @Action(SetSessionsperuser)
  SetSessionsperuser({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetSessionsperuser) {
    const state: IAnalysis2State = getState();
    patchState({sessionsperuser: payload.data});
  }
  @Action(SetMessagespersession)
  SetMessagespersession({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetMessagespersession) {
    const state: IAnalysis2State = getState();
    patchState({messagespersession: payload.data});
  }
  @Action(SetTimepersession)
  SetTimepersession({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetTimepersession) {
    const state: IAnalysis2State = getState();
    patchState({timepersession: payload.data});
  }
  @Action(SetUserAcquisition)
  setUserAcquisition({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetUserAcquisition) {
    const state: IAnalysis2State = getState();
    patchState({userAcquisition: payload.data});
  }
  
  @Action(SetSessionhandling)
  setSessionhandling({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetSessionhandling) {
    const state: IAnalysis2State = getState();
    patchState({sessionhandling: payload.data});
  }
  @Action(SetTotalMessages)
  setTotalMessages({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetTotalMessages) {
    const state: IAnalysis2State = getState();
    patchState({totalMessages: payload.data});
  }
  @Action(SetTotalTimeOfRooms)
  setAverageRoomTime({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetTotalTimeOfRooms) {
    const state: IAnalysis2State = getState();
    patchState({totalTimeOfRooms: payload.data});
  }
  @Action(SetUserLoyalty)
  setUserLoyalty({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetUserLoyalty) {
    const state: IAnalysis2State = getState();
    patchState({userLoyalty: payload.data});
  }
  @Action(SetChannelWiseAverageSessionTime)
  setChannelWiseAverageSessionTime({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetChannelWiseAverageSessionTime) {
    const state: IAnalysis2State = getState();
    patchState({channelWiseAverageSessionTime: payload.data});
  }

  @Action(SetTotalFlows)
  setTotalFlows({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetTotalFlows) {
    const state: IAnalysis2State = getState();
    patchState({totalFlows: payload.data});
  }
  @Action(SetFlowsPerRoom)
  setFlowsPerRoom({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetFlowsPerRoom) {
    const state: IAnalysis2State = getState();
    patchState({flowsPerRoom: payload.data});
  }
  @Action(SetTotalRooms)
  setTotalRooms({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetTotalRooms) {
    const state: IAnalysis2State = getState();
    patchState({totalRooms: payload.data});
  }
  @Action(SetRoomDuration)
  setRoomDuration({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetRoomDuration) {
    const state: IAnalysis2State = getState();
    patchState({roomDuration: payload.data});
  }
  @Action(SetChannelWiseSessions)
  setChannelWiseSessions({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetChannelWiseSessions) {
    const state: IAnalysis2State = getState();
    patchState({channelWiseSessions: payload.data});
  }

  @Action(SetChannelWiseUsers)
  setChannelWiseUsers({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetChannelWiseUsers) {
    const state: IAnalysis2State = getState();
    patchState({channelWiseUsers: payload.data});
  }

  @Action(SetUsagetrackingInfo)
  setUsagetrackingInfo({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetUsagetrackingInfo) {
    const state: IAnalysis2State = getState();
    patchState({usagetracking: payload.data});
  }

  @Action(SetTopgenerationtemplates)
  topgenerationtemplates({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetTopgenerationtemplates) {
    const state: IAnalysis2State = getState();
    patchState({topgenerationtemplates: payload.data});
  }

  @Action(TotalSessions)
  TotalSessions({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: TotalSessions) {
    const state: IAnalysis2State = getState();

    patchState({totalSessions: payload.data});
  }

  @Action(ResetAnalytics2GraphData)
  resetAnalytics2Data({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>) {
    const state = getState();
    patchState({...defaultAnalytics2, analysisHeaderData: state.analysisHeaderData});
  }

  @Action(ResetAnalytics2HeaderData)/*only for logout*/
  resetAnalytics2HeaderData({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>) {
    const state = getState();
    patchState({analysisHeaderData: null});
  }

  static getAnalytics2HeaderData(state) {
    return state.analysisstate2.analysisHeaderData;
  }
  static getAnalytics2GraphData(state) {/*this is not observe headerData*/
    return {
      ...state.analysisstate2,
      // headerData:null
    };
  }

}

