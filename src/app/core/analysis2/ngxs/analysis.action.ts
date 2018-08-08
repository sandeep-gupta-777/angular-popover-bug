// import {IOverviewInfoPostBody} from '../../../../interfaces/overview-info';

import {IOverviewInfoPostBody} from '../../../../interfaces/overview-info';

export class SetOverViewInfo2 {
  static readonly type = '[analytics2] SetOverViewInfo2';

  constructor(public payload: { overviewInfo: IOverviewInfoPostBody }) {
  }
}


