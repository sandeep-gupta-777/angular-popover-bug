import {IReportItem} from '../../../../interfaces/report';


export class SetReportFormAction {
  static readonly type = '[reports] set reportItem$ form ';
  constructor(public payload:{reportItem:IReportItem }){}
}
