import {Action, State, StateContext} from '@ngxs/store';
import {
  ResetAnalytics2GraphData,
  ResetAnalytics2HeaderData,
  SetAnalysis2HeaderData,
  SetChannelWiseAverageSessionTime,
  SetChannelWiseFlowsPerSession,
  SetChannelWiseSessions,
  SetChannelWiseUsers,
  SetFlowsPerRoom,
  SetMessagespersession,
  SetOverviewInfoData,
  SetRoomDuration,
  SetSessionhandling,
  SetSessionsperuser,
  SetTimepersession,
  SetTopgenerationtemplates,
  SetTotalFlows,
  SetTotalMessages,
  SetTotalRooms,
  SetTotalTimeOfRooms,
  SetUsagetrackingInfo,
  SetUserAcquisition,
  SetUserLoyalty,
  TotalSessions
} from './analysis.action';
import {IOverviewInfo} from '../../../../interfaces/Analytics2/overview-info';
import {IAnalysis2HeaderData} from '../../../../interfaces/Analytics2/analytics2-header';
import {IChannelWiseFlowsPerSessionItem} from '../../../../interfaces/Analytics2/volume-sessions';
import {IUserAcquisitionItem} from '../../../../interfaces/Analytics2/volume-users';
import {ITotalMessagesItem} from '../../../../interfaces/Analytics2/volume-messages';
import {IAverageRoomTimeItem} from '../../../../interfaces/Analytics2/volume-time';
import {ITotalFlowsItem} from '../../../../interfaces/Analytics2/performance-flows';
import {IUserLoyaltyItem} from '../../../../interfaces/Analytics2/engagement-userLoyalty';
import {IChannelWiseAverageSessionTimeItem} from '../../../../interfaces/Analytics2/engagement-averageSessionTime';
import {ITopgenerationtemplatesItem} from '../../../../interfaces/Analytics2/performance-gentemplate';
import {IFlowsPerRoomItem} from '../../../../interfaces/Analytics2/performance-flowsPerRoom';
import {ITotalRoomsItem} from '../../../../interfaces/Analytics2/performance-totalRooms';
import {IRoomDurationItem} from '../../../../interfaces/Analytics2/performance-roomDuration';
import {IChannelWiseSessionsItem} from '../../../../interfaces/Analytics2/engagement-channelWiseSessions';
import {IChannelWiseUsersItem} from '../../../../interfaces/Analytics2/engagement-channelWiseUsers';

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
  sessionsperuser: any;
  messagespersession: any;
  timepersession: any;
  totalTimeOfRooms: any;
  sessionhandling: any;
}

const defaultAnalytics2 = {
  analysisHeaderData: null,
  overviewInfo: null,
  channelWiseFlowsPerSession: null,
  userAcquisition: null,
  totalMessages: null,
  averageRoomTime: null,
  totalFlows: null,
  userLoyalty: null,
  channelWiseAverageSessionTime: null,
  topgenerationtemplates: null,
  totalSessions: null,
  flowsPerRoom: null,
  totalRooms: null,
  roomDuration: null,
  channelWiseSessions: null,
  channelWiseUsers: null,
  usagetracking: null,
  sessionsperuser: null,
  messagespersession: null,
  timepersession: null,
  totalTimeOfRooms: null,
  sessionhandling: null
};

@State<IAnalysis2State>({
  name: 'analysisstate2',
  defaults: defaultAnalytics2
})

export class AnalysisStateReducer2 {

  static getAnalytics2HeaderData(state) {
    return state.analysisstate2.analysisHeaderData;
  }

  static getAnalytics2GraphData(state) {/*this is not observe headerData*/
    return {
      ...state.analysisstate2,
      // headerData:null
    };
  }

  constructor() {

  }

  @Action(SetAnalysis2HeaderData)
  setAnalysis2HeaderData({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetAnalysis2HeaderData) {

    const state: IAnalysis2State = getState();
    if (state) {
      patchState({
        analysisHeaderData: {
          ...state.analysisHeaderData,
          ...payload.analysisHeaderData
        }
      });
    } else {
      patchState({analysisHeaderData: payload.analysisHeaderData});
    }
  }

  @Action(SetOverviewInfoData)
  setOverviewInfoData({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetOverviewInfoData) {
    patchState({overviewInfo: payload.data});
  }

  @Action(SetChannelWiseFlowsPerSession)
  setVolumUserData({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetChannelWiseFlowsPerSession) {
    patchState({channelWiseFlowsPerSession: payload.data});
  }

  @Action(SetSessionsperuser)
  SetSessionsperuser({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetSessionsperuser) {

    patchState({sessionsperuser: payload.data});
  }

  @Action(SetMessagespersession)
  SetMessagespersession({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetMessagespersession) {

    patchState({messagespersession: payload.data});
  }

  @Action(SetTimepersession)
  SetTimepersession({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetTimepersession) {

    patchState({timepersession: payload.data});
  }

  @Action(SetUserAcquisition)
  setUserAcquisition({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetUserAcquisition) {

    patchState({userAcquisition: payload.data});
  }

  @Action(SetSessionhandling)
  setSessionhandling({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetSessionhandling) {

    patchState({sessionhandling: payload.data});
  }

  @Action(SetTotalMessages)
  setTotalMessages({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetTotalMessages) {

    patchState({totalMessages: payload.data});
  }

  @Action(SetTotalTimeOfRooms)
  setAverageRoomTime({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetTotalTimeOfRooms) {

    patchState({totalTimeOfRooms: payload.data});
  }

  @Action(SetUserLoyalty)
  setUserLoyalty({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetUserLoyalty) {

    patchState({userLoyalty: payload.data});
  }

  @Action(SetChannelWiseAverageSessionTime)
  setChannelWiseAverageSessionTime({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetChannelWiseAverageSessionTime) {

    patchState({channelWiseAverageSessionTime: payload.data});
  }

  @Action(SetTotalFlows)
  setTotalFlows({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetTotalFlows) {

    patchState({totalFlows: payload.data});
  }

  @Action(SetFlowsPerRoom)
  setFlowsPerRoom({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetFlowsPerRoom) {

    patchState({flowsPerRoom: payload.data});
  }

  @Action(SetTotalRooms)
  setTotalRooms({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetTotalRooms) {

    patchState({totalRooms: payload.data});
  }

  @Action(SetRoomDuration)
  setRoomDuration({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetRoomDuration) {

    patchState({roomDuration: payload.data});
  }

  @Action(SetChannelWiseSessions)
  setChannelWiseSessions({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetChannelWiseSessions) {

    patchState({channelWiseSessions: payload.data});
  }

  @Action(SetChannelWiseUsers)
  setChannelWiseUsers({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetChannelWiseUsers) {

    patchState({channelWiseUsers: payload.data});
  }

  @Action(SetUsagetrackingInfo)
  setUsagetrackingInfo({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetUsagetrackingInfo) {

    patchState({usagetracking: payload.data});
  }

  @Action(SetTopgenerationtemplates)
  topgenerationtemplates({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: SetTopgenerationtemplates) {

    patchState({topgenerationtemplates: payload.data});
  }

  @Action(TotalSessions)
  TotalSessions({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>, {payload}: TotalSessions) {


    patchState({totalSessions: payload.data});
  }

  @Action(ResetAnalytics2GraphData)
  resetAnalytics2Data({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>) {
    const state = getState();
    patchState({...defaultAnalytics2, analysisHeaderData: state.analysisHeaderData});
  }

  @Action(ResetAnalytics2HeaderData)/*only for logout*/
  resetAnalytics2HeaderData({patchState, setState, getState, dispatch}: StateContext<IAnalysis2State>) {
    patchState({analysisHeaderData: null});
  }
}
