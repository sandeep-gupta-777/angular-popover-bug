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
//             }
//           ]
//         },
//         "resource_uri": "/api/v1/analytics/None/"
//       }
//     ]
//   }