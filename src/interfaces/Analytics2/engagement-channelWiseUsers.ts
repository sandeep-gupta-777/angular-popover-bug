import { IBot } from '../../app/core/interfaces/IBot';

export interface IChannelWiseUsersResponseBody {
    meta: any,
    objects: [
        {
            output: {
                "channelWiseUsers": IChannelWiseUsersItem[],
            }
        }
    ]
}
export interface IChannelWiseUsersItem {
    "alexa": number,
    "facebook": number,
    "labels": string,
    "web": number
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
//                 "channelWiseUsers": [
//                     {
//                         "alexa": 0,
//                         "facebook": 0,
//                         "labels": "01/08/2018",
//                         "web": 0
//                     }
//                 ]
//             },
//             "resource_uri": "/api/v1/analytics/None/"
//         }
//     ]
// }