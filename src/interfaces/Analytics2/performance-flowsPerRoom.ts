

import { IBot } from '../../app/core/interfaces/IBot';

export interface IFlowsPerRoomResponseBody {
    meta: any,
    objects: [
        {
            output: {
                "flowsPerRoom": IFlowsPerRoomItem[]
            }
        }
    ]
}
export interface IFlowsPerRoomItem {
        "flowsperroom": number,
        "labels": string
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
//                 "flowsPerRoom": [
//                     {
//                         "flowsperroom": 0,
//                         "labels": "01/08/2018"
//                     },
//                     {
//                         "flowsperroom": 0,
//                         "labels": "02/08/2018"
//                     }
//                 ]
//             },
//             "resource_uri": "/api/v1/analytics/None/"
//         }
//     ]
// }