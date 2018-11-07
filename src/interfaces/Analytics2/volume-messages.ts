import { IBot } from '../../app/core/interfaces/IBot';

export interface ITotalMessagesResponseBody {
    meta: any;
    objects: [
        {
            output: {
                'messagesinfo': ITotalMessagesItem[],
            }
            'total': {
                'bothandled': number,
                'nonbothandled': number,
                'total': number
            }
        }
    ];
}
export interface ITotalMessagesItem {
    'bothandled': number;
    'labels': string;
    'nonbothandled': number;
    'total': number;
}
//  ============= New api ================
// {
//     "meta": {
//         "limit": 20, "next": null, "offset": 0, "previous": null, "total_count": 1
//     }, "objects":
//     [
//         {
//             "output": {
//                 "totalMessages": [
//                     { "labels": "00:00", "nonbothandled": 0 },
//                     { "labels": "01:00", "nonbothandled": 0 }
//                 ]
//             },
//             "resource_uri": "/api/v1/analytics/None/"
//         }
//     ]
// }




// ============ Old api ===================
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
//                 "messagesinfo": [
//                     {
//                         "bothandled": 0,
//                         "labels": "01/08/2018",
//                         "nonbothandled": 0,
//                         "total": 0
//                     },
//                     {
//                         "bothandled": 0,
//                         "labels": "10/08/2018",
//                         "nonbothandled": 0,
//                         "total": 0
//                     }
//                 ],
//                 "total": {
//                     "bothandled": 0,
//                     "nonbothandled": 0,
//                     "total": 0
//                 }
//             },
//             "resource_uri": "/api/v1/analytics/None/"
//         }
//     ]
// }
