import { IMeta } from "../app/core/interfaces/meta";


export interface ISessionMessageItem{
  "bot_id": number,
  "consumer_id": number,
  "created_at": string,
  "generated_df": {},
  "generated_msg": Array<any>,
  "generated_msg_string": string,
  "id": number,
  "message": any//Array<any>| string,
  "message_store": {
    activeBotId?:any;
    activeBotRoomId?:any;
  },
  "platform": string,
  "resource_uri": string,
  "room_id": number,
  "transaction_id": string,
  "updated_at": string,
  "user_type": string

  /*custom fields*/
  messageByHuman:string
}

export interface ISessionMessage {
  "meta": IMeta,
  "objects": ISessionMessageItem[]
}

export interface ISessionItem {
  "agent_handover": boolean,
  "allow_anonymization": boolean,
  "bot_id": number,
  "consent_permissions": Array<any>,
  "consumer_id": number,
  "cross_retention_period": boolean,
  "data_store": any,
  "df_state": any,
  "id": number,
  "imichat_agent": {},
  "is_anonymized": boolean,
  "last_updated_job_id": string,
  "manager_bot_room_id": number,
  "resource_uri": string,
  "room_state_closed": boolean,
  "selected_avatar": {
      "id": number,
      "imageUrl": string,
      "name": string
  }
  "sendtoagent":boolean,
  "total_message_count":number,
  "updated_at":any,
  /*for smart table*/
  highlight?:boolean,
  isEncrypted:boolean
}



export interface ISessions {
  'meta' : IMeta,
  'objects': ISessionItem[]

}
