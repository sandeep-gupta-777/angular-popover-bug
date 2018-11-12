

import { IBot } from '../../app/core/interfaces/IBot';

export interface ITotalFlowsResponseBody {
    meta: any;
    objects: [
        {
            output: {
                'totalFlows': ITotalFlowsItem[]
            }
        }
    ];
}
export interface ITotalFlowsItem {
    'imichat': number;
    'labels': string;
    'nonimichat': number;
    'total': number;
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
//                 "totalFlows": [
//                     {
//                         "imichat": 0,
//                         "labels": "01/08/2018",
//                         "nonimichat": 0,
//                         "total": 0
//                     },
//                     {
//                         "imichat": 0,
//                         "labels": "16/08/2018",
//                         "nonimichat": 0,
//                         "total": 0
//                     }
//                 ]
//             },
//             "resource_uri": "/api/v1/analytics/None/"
//         }
//     ]
// }
