export interface IMeta { 
  "limit": number, 
  "next": null, 
  "offset": number, 
  "previous": null, 
  "total_count": number 
}

export interface ISessionMessageItem{
  "bot_id": number,
  "consumer_id": number,
  "created_at": string,
  "id": number,
  "message": string,
  "message_store": {},
  "platform": string,
  "resource_uri": string,
  "room_id": number,
  "transaction_id": string,
  "updated_at": string,
  "user_type": string
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
  "data_store": {},
  "df_state": {},
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
}



export interface ISessions {
  'meta' : IMeta,
  'objects': ISessionItem[]
  
}
