export interface IEnterpriseUser {
  "_id": string
  "created_at": string
  "email": string
  "enterpriseId": string
  "firstname": string
  "lastname": string
  "roleId": string
  "roles": {
    "Admin": {
      "bots": any[],
      "permissions": string[]
    }
  },
  "session_expiry_time": null,
  "updated_at": string
  "updated_by": string
}


/*====example====*/
/*
{
  "_id": "5a030aa9b050705bd0ca5a45",
  "created_at": "2017-11-08 19:16:17.532000",
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
