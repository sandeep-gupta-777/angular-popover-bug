
export interface IRoomDurationResponseBody {
    meta: any;
    objects: [
        {
            output: {
                'roomDuration': IRoomDurationItem[]
            }
        }
    ];
}
export interface IRoomDurationItem {
    'labels': string;
    'result': number;
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
    //                 "roomDuration": [
    //                     {
    //                         "labels": "<1",
    //                         "result": 0
    //                     },
    //                     {
    //                         "labels": "1-5",
    //                         "result": 0
    //                     },
    //                     {
    //                         "labels": "5-10",
    //                         "result": 0
    //                     },
    //                     {
    //                         "labels": "100-500",
    //                         "result": 0
    //                     },
    //                     {
    //                         "labels": ">500",
    //                         "result": 0
    //                     }
    //                 ]
    //             },
    //             "resource_uri": "/api/v1/analytics/None/"
    //         }
    //     ]
    // }
