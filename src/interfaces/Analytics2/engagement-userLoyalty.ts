import { IBot } from '../../app/core/interfaces/IBot';

export interface IUserLoyaltyResponseBody {
    meta: any,
    objects: [
        {
            output: {
                "userLoyalty": IUserLoyaltyItem[],
            }
        }
    ]
}
export interface IUserLoyaltyItem {
    "labels": string,
    "result": number
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
//                 "userLoyalty": [
//                     {
//                         "labels": "1",
//                         "result": 31
//                     },
//                     {
//                         "labels": "2",
//                         "result": 6
//                     },
//                     {
//                         "labels": "3-5",
//                         "result": 9
//                     }
//                 ]
//             },
//             "resource_uri": "/api/v1/analytics/None/"
//         }
//     ]
// }