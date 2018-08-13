
import {IOverviewInfo} from '../../../../interfaces/Analytics2/overview-info';
import {IAnalysis2HeaderData} from '../../../../interfaces/Analytics2/analytics2-header';

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



