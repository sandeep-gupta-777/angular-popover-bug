export interface IEnterpriseUser {
  'bots': number[];
  'created_at': string;
  'email': string;
  'enterprise_id': number;
  'first_name': string;
  'id': number;
  'is_active': true;
  'is_admin': true;
  'is_superuser': false;
  'last_login': string;
  'last_name': string;
  'resource_uri': string;
  'role': {
    'created_at': string,
    'created_by': number,
    'enterprise_id': number,
    'id': number,
    'is_system_role': true,
    'name': string,
    'permissions': {
      'actions': number[]
    },
    'resource_uri': string,
    'session_expiry_time': number,
    'updated_at': string,
    'updated_by': number
  };
  'role_id': number;
  'updated_at': string;
}

/*====example====*/
/*
{
  "_id": "5a030aa9b050705bd0ca5a45",
  "created_at": "2017number1-08 19:16:17.532000",
  "email": "demos@imimobile.com",
  "enterpriseId": "59b0f043378feb000d7c9d13",
  "firstname": "IMIbot",
  "lastname": "Admin",
  "roleId": "5a030aa7b050705bd0ca5a44",
  "roles": {
  "Admin": {
    "bots": [],
      "permissions": []
  }
},
  "session_expiry_time": null,
  "updated_at": "2018-07-02 10:21:11.767000",
  "updated_by": "5a030aa9b050705bd0ca5a45"
}
*/
