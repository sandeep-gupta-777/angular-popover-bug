
import {IOverviewInfo} from '../../../../interfaces/Analytics2/overview-info';
import {IAnalysis2HeaderData} from '../../../../interfaces/Analytics2/analytics2-header';
import {  IChannelWiseFlowsPerSessionItem } from '../../../../interfaces/Analytics2/volume-sessions';
import { IUserAcquisitionItem } from '../../../../interfaces/Analytics2/volume-users';
import { ITotalMessagesItem } from '../../../../interfaces/Analytics2/volume-messages';
import { IAverageRoomTimeItem } from '../../../../interfaces/Analytics2/volume-time';
import { IUserLoyaltyItem } from '../../../../interfaces/Analytics2/engagement-userLoyalty';
import { IChannelWiseAverageSessionTimeItem } from '../../../../interfaces/Analytics2/engagement-averageSessionTime';

export class SetAnalysis2HeaderData {
  static readonly type = '[analytics2] SetOverViewInfo2';
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