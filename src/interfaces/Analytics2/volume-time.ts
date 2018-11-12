import { IBot } from '../../app/core/interfaces/IBot';

export interface IAverageRoomTimeResponseBody {
    meta: any;
    objects: [
        {
            output: {
                'averageRoomTime': IAverageRoomTimeItem[]
            }
        }
    ];
}
export interface IAverageRoomTimeItem {
    'labels': string;
    'averageroomtime': number;
}

// {
//     "meta": {
//         "limit": 20,
//         "next": null,
//         "offset": 0,
//         "previous": null,
//         "total_count": 1
//     },
//     "objects": [
//         {
//             "output": {
//                 "averageRoomTime": [
//                     {
//                         "averageroomtime": 0,
//                         "labels": "01/08/2018"
//                     },
//                     {
//                         "averageroomtime": 0,
//                         "labels": "02/08/2018"
//                     }
//                 ]
//             },
//             "resource_uri": "/api/v1/analytics/None/"
//         }
//     ]
// }
