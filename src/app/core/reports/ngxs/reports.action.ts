import {IReportItem} from '../../../../interfaces/report';


export class SetReportFormAction {
  static readonly type = '[reports] set reportItem$ f ';
  constructor(public payload:{reportItem:IReportItem }){}
}
