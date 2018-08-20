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
  'bot_id': number,
  'created_at': string,
  'delivery': [
    {
      'delivery_type': string,
      'directory': string,
      'enabled': boolean,
      'ip': string,
      'port': string,
      'privatekey': string,
      'username': string
    }
    ],
  'enterprise_id': number,
  'filetype': string,
  'frequency': string,
  'id': number,
  'isactive': boolean,
  'last_job_id': string,
  'lastreportgenerated': string,
  'nextreportgenerated': string,
  'reporttype_id': number,
  'resource_uri': string,
  'startdate': string,
  'updated_at': string
}

export interface IReportList {
  'objects': IReportItem[],
  'meta': object
}


export interface IReportHistory {
  'objects': [
    {
      '_id': string,
      'botId': string,
      'created_at': string,
      'delivery': {
        'delivery_type': string,
        'enabled': boolean,
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


export interface ISmartTableReportDataItem extends IReportItem {
  bot: string,
  id: number,
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
