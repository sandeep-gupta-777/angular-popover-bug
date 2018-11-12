//
// export interface ITestcases {
//   '_id': string,
//   'botId': string,
//   'created_at': string,
//   'data': [string, string][],
//   'updated_at': string
// }

export interface ITestcases {
  'id': number;
  'bot_id': number;
  'created_at': string;
  'created_by': number;
  'data':
    [ string, string, string ][];
  'resource_uri': string;
  'status': string;
  'updated_at': string;
  'updated_by': number;
}




// ================ NEW API ====================
// {
//   "meta": {
//       "limit": 20,
//       "next": null,
//       "offset": 0,
//       "previous": null,
//       "total_count": 1
//   },
//   "objects": [
//       {
//           "bot_id": 1,
//           "created_at": "2018-08-13T12:37:40.201000",
//           "created_by": 0,
//           "data": [
//               [
//                   "hi",
//                   "A1",
//                   "passed"
//               ],
//               [
//                   "",
//                   "",
//                   ""
//               ],
//               [
//                   "how are you?",
//                   "A1",
//                   "passed"
//               ]
//           ],
//           "id": 6,
//           "resource_uri": "/api/v1/bottestcases/6/",
//           "status": "ABORTED",
//           "updated_at": "2018-08-14T11:07:28.928000",
//           "updated_by": 1
//       }
//   ]
// }

// ====================== old API ===================
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

