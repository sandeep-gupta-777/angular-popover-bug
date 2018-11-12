

import { IBot } from '../../app/core/interfaces/IBot';

export interface ITotalRoomsResponseBody {
    meta: any;
    objects: [
        {
            output: {
                'totalRooms': ITotalRoomsItem[]
            }
        }
    ];
}
export interface ITotalRoomsItem {
    'activesessions': number;
    'labels': string;
    'totalsessions': number;
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
    //                 "totalRooms": [
    //                     {
    //                         "activesessions": 0,
    //                         "labels": "01/08/2018",
    //                         "totalsessions": 0
    //                     },
    //                     {
    //                         "activesessions": 0,
    //                         "labels": "07/08/2018",
    //                         "totalsessions": 0
    //                     }
    //                 ]
    //             },
    //             "resource_uri": "/api/v1/analytics/None/"
    //         }
    //     ]
    // }
