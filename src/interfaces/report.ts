import {stringDistance} from 'codelyzer/util/utils';

export interface IReportTypeItem {
  '_id': string,
  'code': string,
  'created_at': string,
  'description': string,
  'name': string,
  'type': string,
  'updated_at': string,
}

export interface IReportItem {
  '_id': string,
  'botId': string,
  'created_at': string,
  'delivery': {
    'delivery_type': string,
    'enabled': true,
    'recipients': string,
  }[],
  'enterpriseId': string,
  'filetype': string,//
  'frequency': string,//
  'last_jobId': string,
  'nextreportgenerated': string,
  'reporttypeId': string,
  'startdate': string,
  'updated_at': string
  isactive: boolean,
}

export interface IReportList {
  'results': IReportItem[],
  'total': number
}


export interface IReportHistory {
  'results': [
    {
      '_id': string,
      'botId': string,
      'created_at': string,
      'delivery': {
        'delivery_type': string,
        'enabled': true,
        'recipients': string,
      }[],
      'enterpriseId': string,
      'reportId': string,
      'reporttypeId': string,
      'url': string,
    }
    ],
  'total': number
}


export interface ISmartTableReportDataItem extends IReportItem{
  bot: string,
  _id: string,
  name: string,
  frequency: string,
  last_jobId: string,
  nextreportgenerated: string,
  isactive: boolean
}

export interface ISmartTableReportHisoryDataItem {
  bot: string, //name of bot
  name: string, //name of reportItem$ type
  created_at: string,  //created_at in IReportHistory
}
