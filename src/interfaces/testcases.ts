//
// export interface ITestcases {
//   '_id': string,
//   'botId': string,
//   'created_at': string,
//   'data': [string, string][],
//   'updated_at': string
// }

export interface ITestcases {
  'id': number,
  'bot_id': number,
  'created_at': string,
  'created_by': number,
  'data':
    [
      string,
      string,
      string
      ][],
  'resource_uri': string,
  'status': string,
  'updated_at': string,
  'updated_by': number
}

// {
//   "bot_id": 1,
//   "created_at": "2018-08-10T07:39:12.222000",
//   "created_by": 0,
//   "data": [
//   [
//     "hi",
//     "A1",
//     ""
//   ]
// ],
//   "id": 2,
//   "resource_uri": "/api/v1/bottestcases/2/",
//   "status": "IDLE",
//   "updated_at": "2018-08-10T07:39:12.222000",
//   "updated_by": 0
// }
