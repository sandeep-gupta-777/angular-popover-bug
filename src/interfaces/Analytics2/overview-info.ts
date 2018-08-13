import {IBot} from '../../app/core/interfaces/IBot';

export interface IOverviewInfoResponse
{meta:any, objects:[{output:IOverviewInfo}]}

export interface IOverviewInfo {
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


// x = {
//   "meta": {
//     "limit": 20,
//     "next": null,
//     "offset": 0,
//     "previous": null,
//     "total_count": 1
//   },
//   "objects": [
//     {
//       "output": {
//         "averageMessages": "0.0",
//         "averageTime": {
//           "days": 0,
//           "hours": 0,
//           "minutes": 40
//         },
//         "totalMessages": 0,
//         "totalSessions": 6,
//         "totalTime": {
//           "days": 0,
//           "hours": 4,
//           "minutes": 0
//         },
//         "totalUsers": 1
//       },
//       "resource_uri": "/api/v1/analytics/None/"
//     }
//   ]
// }


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
