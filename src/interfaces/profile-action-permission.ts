interface IProfilePermission{
  "created_at": string,
  "description": string,
  "id": 1,
  "is_system_role": true,
  "name": string,
  "permissions": {
  "endpoint": string,
    "fields": any[],
    "get_params": [
    {
      "key": string,
      "optional": true,
      "type": string
    }
  ],
    "method": string,
    "role": [
    "user",
    "admin",
    "super_admin"
  ]
},
  "resource_uri": string,
  "updated_at": string
}
