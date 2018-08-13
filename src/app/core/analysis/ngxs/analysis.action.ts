// import {IOverviewInfoPostBody} from '../../../../interfaces/overview-info';

import {IOverviewInfo, IOverviewInfoPostBody} from '../../../../interfaces/Analytics2/overview-info';

export class SetOverViewInfo {
  static readonly type = '[analytics] SetOverViewInfo';

  constructor(public payload: { overviewInfo: IOverviewInfo }) {
  }
}


