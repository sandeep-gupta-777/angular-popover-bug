import { IBot } from '../../app/core/interfaces/IBot';

export interface IUserAcquisitionResponseBody {
    meta: any;
    objects: [
        {
            output: {
                'userAcquisition': IUserAcquisitionItem[]
            }
        }
    ];
}
export interface IUserAcquisitionItem {
    'labels': string;
    'newusers': number;
    'returningusers': number;
    'totalusers': number;
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
//                 "userAcquisition": [
//                     {
//                         "labels": "07/08/2018",
//                         "newusers": 0,
//                         "returningusers": 0,
//                         "totalusers": 0
//                     },
//                     {
//                         "labels": "08/08/2018",
//                         "newusers": 0,
//                         "returningusers": 0,
//                         "totalusers": 0
//                     },
//                     {
//                         "labels": "09/08/2018",
//                         "newusers": 0,
//                         "returningusers": 1,
//                         "totalusers": 1
//                     },
//                     {
//                         "labels": "10/08/2018",
//                         "newusers": 0,
//                         "returningusers": 2,
//                         "totalusers": 2
//                     }
//                 ]
//             },
//             "resource_uri": "/api/v1/analytics/None/"
//         }
//     ]
// }
