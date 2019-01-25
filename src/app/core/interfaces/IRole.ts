import { IMeta } from "./meta";
// export interface IRole {

//         "category" : string;
//         "created_at" : string;
//         "description" : string;
//         "id": number,
//         "is_configurable_action": true,
//         "is_default_action": false,
//         "name" : string;
//         "permissions": {
//             "endpoint" : string;
//             "fields": [];
//             "get_params"?: any[],
//             "post_fields"?: any[],
//             "method" : string;
//             "role": any[]
//         },
//         "resource_uri" : string;
//         "updated_at" : string;
    
// }
export interface IRole {
    "base_role": number,
    "created_at": number,
    "created_by":string,
    "enterprise_id": number,
    "id": number,
    "is_system_role": boolean,
    "name":string,
    "permissions": {
        "actions": []
    },
    "resource_uri":string,
    "session_expiry_time": number,
    "updated_at": number,
    "updated_by":string,
}
export interface IRoleResult {
    'meta': IMeta;
    'objects': IRole[];
  }