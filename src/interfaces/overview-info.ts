import {IBot} from '../app/core/interfaces/IBot';

export interface IOverviewInfoResponse {
  'averageMessages': string,
  'averageTime': {
    'days': number,
    'hours': number,
    'minutes': number
  },
  'totalMessages': number,
  'totalSessions': number,
  'totalTime': {
    'days': number,
    'hours': number,
    'minutes': number
  },
  'totalUsers': number
}


export interface IOverviewInfoPostBody {
  // 'bot_id': string//'59e055773b6219000ca825ba',
  'startdate': string// '11/06/2018',
  'enddate': string// '11/06/2018',
  'platform': string//'all'
  // granularity:string,//"hour","month"

  /*following fields are not the part of the body*/
  selectedStartDate:{name: string, displayName: string},
  selectedEndDate:{name: string, displayName: string},
  selectedBot:IBot,
  selectedChannel:{name: string, displayName: string}
}
