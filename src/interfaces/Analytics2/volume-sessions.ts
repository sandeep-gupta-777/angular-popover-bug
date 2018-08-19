import { IBot } from '../../app/core/interfaces/IBot';

export interface IChannelWiseFlowsPerSessionResponseBody {
    meta: any,
    objects: [
        {
            output: {
                "channelWiseFlowsPerSession": IChannelWiseFlowsPerSessionItem[]
            }
        }
    ]
}
export interface IChannelWiseFlowsPerSessionItem {
    "alexa": number,
    "facebook": number,
    "labels": string,
    "web": number
}

// {
//     "meta": {
//       "limit": 20,
//       "next": null,
//       "offset": 0,
//       "previous": null,
//       "total_count": 1
//     },
//     "objects": [
//       {
//         "output": {
//           "channelWiseFlowsPerSession": [
//             {
//               "alexa": 0,
//               "facebook": 0,
//               "labels": "00:00",
//               "web": 0
//             },
//             {
//               "alexa": 0,
//               "facebook": 0,
//               "labels": "01:00",
//               "web": 0
//             },
//             {
//               "alexa": 0,
//               "facebook": 0,
//               "labels": "02:00",
//               "web": 0
//             },
//             {
//               "alexa": 0,
//               "facebook": 0,
//               "labels": "03:00",
//               "web": 0
//             },
//             {
//               "alexa": 0,
//               "facebook": 0,
//               "labels": "04:00",
//               "web": 0
//             },
//             {
//               "alexa": 0,
//               "facebook": 0,
//               "labels": "05:00",
//               "web": 0
//             },
//             {
//               "alexa": 0,
//               "facebook": 0,
//               "labels": "06:00",
//               "web": 0
//             },
//             {
//               "alexa": 0,
//               "facebook": 0,
//               "labels": "07:00",
//               "web": 0
//             },
//             {
//               "alexa": 0,
//               "facebook": 0,
//               "labels": "08:00",
//               "web": 0
//             },
//             {
//               "alexa": 0,
//               "facebook": 0,
//               "labels": "09:00",
//               "web": 0
//             },
//             {
//               "alexa": 0,
//               "facebook": 0,
//               "labels": "10:00",
//               "web": 0
//             },
//             {
//               "alexa": 0,
//               "facebook": 0,
//               "labels": "11:00",
//               "web": 0
//             },
//             {
//               "alexa": 0,
//               "facebook": 0,
//               "labels": "12:00",
//               "web": 0
//             },
//             {
//               "alexa": 0,
//               "facebook": 0,
//               "labels": "13:00",
//               "web": 0
//             },
//             {
//               "alexa": 0,
//               "facebook": 0,
//               "labels": "14:00",
//               "web": 0
//             },
//             {
//               "alexa": 0,
//               "facebook": 0,
//               "labels": "15:00",
//               "web": 0
//             },
//             {
//               "alexa": 0,
//               "facebook": 0,
//               "labels": "16:00",
//               "web": 0
//             },
//             {
//               "alexa": 0,
//               "facebook": 0,
//               "labels": "17:00",
//               "web": 0
//             },
//             {
//               "alexa": 0,
//               "facebook": 0,
//               "labels": "18:00",
//               "web": 0
//             },
//             {
//               "alexa": 0,
//               "facebook": 0,
//               "labels": "19:00",
//               "web": 0
//             },
//             {
//               "alexa": 0,
//               "facebook": 0,
//               "labels": "20:00",
//               "web": 0
//             },
//             {
//               "alexa": 0,
//               "facebook": 0,
//               "labels": "21:00",
//               "web": 0
//             },
//             {
//               "alexa": 0,
//               "facebook": 0,
//               "labels": "22:00",
//               "web": 0
//             },
//             {
//               "alexa": 0,
//               "facebook": 0,
//               "labels": "23:00",
//               "web": 0
//             }
//           ]
//         },
//         "resource_uri": "/api/v1/analytics/None/"
//       }
//     ]
//   }