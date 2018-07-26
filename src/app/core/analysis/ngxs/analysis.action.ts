// import {IOverviewInfoPostBody} from '../../../../interfaces/overview-info';

import {IOverviewInfoPostBody} from '../../../../interfaces/overview-info';

export class SetOverViewInfo {
  static readonly type = '[analytics] SetOverViewInfo';

  constructor(public payload: { overviewInfo: IOverviewInfoPostBody }) {
  }
}


