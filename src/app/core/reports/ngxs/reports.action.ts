import {IReportItem} from '../../../../interfaces/report';


export class SetReportFormAction {
  static readonly type = '[reports] set reportItem$ f ';
  constructor(public payload: {reportItem: IReportItem }) {}
}

  export class SetCurrentEditedReportAction {
  static readonly type = '[reports] set SetCurrentEditedReportAction ';
  constructor(public payload: {reportItem: IReportItem }) {}
}
