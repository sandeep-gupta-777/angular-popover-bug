export interface IProfilePermission {
  "category": string;
  "created_at": string;
  "description": string;
  "id": number,
  "is_configurable_action": true,
  "is_default_action": false,
  "name": string;
  "permissions": {
    "endpoint": string;
    "fields": [];
    "get_params"?: any[],
    "post_fields"?: any[],
    "method": string;
    "role": any[]
  },
  "resource_uri": string;
  "updated_at": string;
}
