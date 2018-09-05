
import {IOverviewInfo} from '../../../../interfaces/Analytics2/overview-info';
import {IAnalysis2HeaderData} from '../../../../interfaces/Analytics2/analytics2-header';
import {  IChannelWiseFlowsPerSessionItem } from '../../../../interfaces/Analytics2/volume-sessions';
import { IUserAcquisitionItem } from '../../../../interfaces/Analytics2/volume-users';
import { ITotalMessagesItem } from '../../../../interfaces/Analytics2/volume-messages';
import { IAverageRoomTimeItem } from '../../../../interfaces/Analytics2/volume-time';
import { IUserLoyaltyItem } from '../../../../interfaces/Analytics2/engagement-userLoyalty';
import { IChannelWiseAverageSessionTimeItem } from '../../../../interfaces/Analytics2/engagement-averageSessionTime';
import { ITotalFlowsItem } from '../../../../interfaces/Analytics2/performance-flows';
import { IFlowsPerRoomItem } from '../../../../interfaces/Analytics2/performance-flowsPerRoom';
import { ITotalRoomsItem } from '../../../../interfaces/Analytics2/performance-totalRooms';
import { IRoomDurationItem } from '../../../../interfaces/Analytics2/performance-roomDuration';
import { IChannelWiseSessionsItem } from '../../../../interfaces/Analytics2/engagement-channelWiseSessions';
import { IChannelWiseUsersItem } from '../../../../interfaces/Analytics2/engagement-channelWiseUsers';

export class SetAnalysis2HeaderData {
  static readonly type = '[analytics2] SetAnalysis2HeaderData';
  constructor(public payload: { analysisHeaderData: Partial<IAnalysis2HeaderData> }) {
  }
}

export class SetOverviewInfoData {
  static readonly type = '[analytics2] SetOverviewInfoData';
  constructor(public payload: { data: IOverviewInfo}) {
  }
}


export class SetChannelWiseFlowsPerSession {
  static readonly type = '[analytics2] SetChannelWiseFlowsPerSession';
  constructor(public payload: { data: IChannelWiseFlowsPerSessionItem[]}) {
  }
}

export class SetUserAcquisition {
  static readonly type = '[analytics2] SetUserAcquisition';
  constructor(public payload: { data: IUserAcquisitionItem[]}) {
  }
}

export class SetTotalMessages {
  static readonly type = '[analytics2] SetTotalMessages';
  constructor(public payload: { data: ITotalMessagesItem[]}) {
  }
}

export class SetAverageRoomTime {
  static readonly type = '[analytics2] SetAverageRoomTime';
  constructor(public payload: { data: IAverageRoomTimeItem[]}) {
  }
}

export class SetUserLoyalty {
  static readonly type = '[analytics2] SetUserLoyalty';
  constructor(public payload: { data: IUserLoyaltyItem[]}) {
  }
}

export class SetChannelWiseAverageSessionTime {
  static readonly type = '[analytics2] SetChannelWiseAverageSessionTime';
  constructor(public payload: { data: IChannelWiseAverageSessionTimeItem[]}) {
  }
}
export class SetTotalFlows {
  static readonly type = '[analytics2] SetTotalFlows';
  constructor(public payload: { data: ITotalFlowsItem[]}) {
  }
}
export class SetFlowsPerRoom {
  static readonly type = '[analytics2] SetFlowsPerRoom';
  constructor(public payload: { data: IFlowsPerRoomItem[]}) {
  }
}
export class SetTotalRooms {
  static readonly type = '[analytics2] SetTotalRooms';
  constructor(public payload: { data: ITotalRoomsItem[]}) {
  }
}
export class SetRoomDuration {
  static readonly type = '[analytics2] SetRoomDuration';
  constructor(public payload: { data: IRoomDurationItem[]}) {
  }
}

export class SetChannelWiseSessions {
  static readonly type = '[analytics2] SetChannelWiseSessions';
  constructor(public payload: { data: IChannelWiseSessionsItem[]}) {
  }
}

export class SetChannelWiseUsers {
  static readonly type = '[analytics2] SetChannelWiseUsers';
  constructor(public payload: { data: IChannelWiseUsersItem[]}) {
  }
}

export class ResetAnalytics2Data {
  static readonly type = '[analytics2] ResetAnalytics2Data';
  constructor() {
  }
}
