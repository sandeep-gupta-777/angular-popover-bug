import {stringDistance} from 'codelyzer/util/utils';
import {IMeta} from '../app/core/interfaces/meta';

export interface IReportTypeItem {
  '_id': string;
  'code': string;
  'created_at': string;
  'description': string;
  'name': string;
  'type': string;
  'updated_at': string;
}

export interface IReportItem {
  'bot_id': number;
  'botName': string; /*custom field*/
  'created_at': string;
  'delivery': {
    'delivery_type': string,
    'directory': string,
    'enabled': boolean,
    'ip': string,
    'port': string,
    'privatekey': string,
    'username': string,
    recipients: string[]
  }[];
  'enterprise_id': number;
  'filetype': string;
  'frequency': string;
  'id': number;
  'isactive': boolean;
  'last_job_id': string;
  'lastreportgenerated': string;
  'nextreportgenerated': string;
  'reporttype_id': number;
  'resource_uri': string;
  'startdate': number;
  'updated_at': string;
}

export interface IReportList {
  'objects': IReportItem[];
  'meta': { total_count: number };
}


export interface IReportHistoryItem {
  'id': number;
  'bot_id': number;
  'created_at': number;
  'delivery': {
    'delivery_type': string,
    'enabled': boolean,
    'recipients': string,
  }[];
  'enterprise_id': number;
  'report_id': string;
  'reporttype_id': string;
  'url': string;
}

export interface IReportHistory {
  'objects': IReportHistoryItem[];

// {
//   "bot_id": 27,
//   "created_at": 1536232739000,
//   "delivery": "[OrderedDict([('ip', ''), ('port', ''), ('username', 'ayeshreddy.k@imimobile.com'), ('privatekey', 'Botwoman@123!'), ('directory', ''), ('delivery_type', 'sftp')]), OrderedDict([('enabled', False), ('recipients', 'a@g.com'), ('delivery_type', 'email')])]",
//   "enterprise_id": 4,
//   "id": 8,
//   "report_id": 15,
//   "reporttype_id": 1,
//   "resource_uri": "/api/v1/reporthistory/8/",
//   "url": "https://imibot-dev.s3.amazonaws.com/4/reports/IMI_BOT_HISTORY_05092018to06092018.csv"
// },
  meta: IMeta;
}


export interface ISmartTableReportDataItem extends IReportItem {
  bot: string;
  id: number;
  name: string;
  frequency: string;
  last_jobId: string;
  nextreportgenerated: string;
  isactive: boolean;
}

export interface ISmartTableReportHisoryDataItem extends IReportHistoryItem {
  bot: string; //name of bot
  name: string; //name of reportItem$ type
  created_at: number;  //created_at in IReportHistory
}
