export interface IUser {
  resource_uri: string;
  id: number;
  last_login: string;
  is_superuser: boolean;
  enterprise_id: number;
  enterprises: any;
  role_id: number;
  email: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
  is_admin: boolean;
  date_joined: string;
  auth_token: string;
  user_access_token: string;
  enterprise: any;
  role: {
    'resource_uri': string,
    'permissions': {
      'actions': number[],
      'bots': number[]
    },
    'id': number,
    'name': string,
    'enterprise_id': number,
    'is_system_role': boolean,
    'session_expiry_time': number,
    'created_by': number,
    'updated_by': number,
    'created_at': boolean,
    'updated_at': string
  };
}


// export interface IUser {



//   "_id": string,
//   "auth_token": string,
//   "created_at": string,
//   "email": string,
//   "enterpriseId": string,
//   "enterpriseUniqueName": string,
//   "first_name": string,
//   "last_name": string,
//   "roomId": string,
//   "ip": string,
//   "permissions": [
//     "overview_summary",
//     "usage_statistics",
//     "users_acquisition",
//     "sessions_duration",
//     "sessions_activeflows",
//     "messages_summary",
//     "messages_analysis",
//     "plaoforms_users",
//     "platforms_sessions",
//     "platforms_sessiontime",
//     "platforms_flows",
//     "events_generationtemplates",
//     "engagement_userloyalty",
//     "engagement_sessionduration",
//     "viewbots_python_botwizard_basicinfo",
//     "viewbots_blockly_botwizard_basicinfo",
//     "viewbots_intelligent_botwizard_basicinfo",
//     "viewbots_python_botwizard_avatars",
//     "viewbots_blockly_botwizard_avatars",
//     "viewbots_intelligent_botwizard_avatars",
//     "viewbots_python_botwizard_pipeline",
//     "viewbots_blockly_botwizard_pipeline",
//     "viewbots_intelligent_botwizard_pipeline",
//     "viewbots_python_botwizard_code",
//     "viewbots_blockly_botwizard_code",
//     "viewbots_intelligent_botwizard_code",
//     "viewbots_python_botwizard_knowledgebase",
//     "viewbots_blockly_botwizard_knowledgebase",
//     "viewbots_intelligent_botwizard_knowledgebase",
//     "viewbots_templatetesting",
//     "viewbots_consumersdata",
//     "viewbots_sessionsdata",
//     "viewbots_python_botwizard",
//     "viewbots_blockly_botwizard",
//     "viewbots_intelligent_botwizard",
//     "customners",
//     "customnersReadWrite",
//     "customnersRead"
//     ],
//   "role": string,
//   "roleId": string,
//   /*why there are two permissions?*/
//   "roles": {
//     "Admin": {
//       "bots": [any],
//       "permissions": [any]
//     }
//   },
//   "session_expiry_time": string,
//   "status": string,
//   "token": string,
//   "updated_at": string

// }



// Example of IUser:
// {
//   "_id": "5a0c4f28b050707aab3ddf07",
//   "auth_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYXV0aCIsImlkIjoiNWIzYjIyNGRhNDljM2UwMWM0NTk0ZjFjIn0.EriBuP-tsKg_KcAE2Rw9mRSf3VCg0t5M1vpL8P-m6ho",
//   "created_at": "2017-11-15 19:58:56.430000",
//   "email": "demos@imimobile.com",
//   "enterpriseId": "59f1bb5fd5db88000b8303e9",
//   "enterpriseUniqueName": "demos",
//   "firstname": "IMImobile Demos",
//   "roomId": "5a0c4f28b050707aab3ddf07",
//   "ip": "172.16.247.247",
//   "permissions": [
//   "overview_summary",
//   "usage_statistics",
//   "users_acquisition",
//   "sessions_duration",
//   "sessions_activeflows",
//   "messages_summary",
//   "messages_analysis",
//   "plaoforms_users",
//   "platforms_sessions",
//   "platforms_sessiontime",
//   "platforms_flows",
//   "events_generationtemplates",
//   "engagement_userloyalty",
//   "engagement_sessionduration",
//   "viewbots_python_botwizard_basicinfo",
//   "viewbots_blockly_botwizard_basicinfo",
//   "viewbots_intelligent_botwizard_basicinfo",
//   "viewbots_python_botwizard_avatars",
//   "viewbots_blockly_botwizard_avatars",
//   "viewbots_intelligent_botwizard_avatars",
//   "viewbots_python_botwizard_pipeline",
//   "viewbots_blockly_botwizard_pipeline",
//   "viewbots_intelligent_botwizard_pipeline",
//   "viewbots_python_botwizard_code",
//   "viewbots_blockly_botwizard_code",
//   "viewbots_intelligent_botwizard_code",
//   "viewbots_python_botwizard_knowledgebase",
//   "viewbots_blockly_botwizard_knowledgebase",
//   "viewbots_intelligent_botwizard_knowledgebase",
//   "viewbots_templatetesting",
//   "viewbots_consumersdata",
//   "viewbots_sessionsdata",
//   "viewbots_python_botwizard",
//   "viewbots_blockly_botwizard",
//   "viewbots_intelligent_botwizard",
//   "customners",
//   "customnersReadWrite",
//   "customnersRead"
// ],
//   "role": "Admin",
//   "roleId": "5a0c4f27b050707aab3ddf06",
//   "roles": {
//   "Admin": {
//     "bots": [],
//       "permissions": []
//   }
// },
//   "session_expiry_time": null,
//   "status": "Logged In",
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlkIjoiNWEwYzRmMjhiMDUwNzA3YWFiM2RkZjA3In0.CWBRCJOFXEUQL6VZZ-H_uHR8RUm54S7bya16bOZnW-s",
//   "updated_at": "2017-11-15 19:58:56.430000"
// }


