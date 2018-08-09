import { IMeta } from "../app/core/interfaces/meta";

export interface IConsumerResults{
  "active_rooms": {},
  "bot_id": number,
  "consent_permissions": Array<any>,
  "consent_permissions_acknowledged": boolean,
  "consumer_data_store": {},
  "created_at" : string,
  "email" : string,
  "extra_params" : string,
  "facebook_id" : string,
  "id": number,
  "line_id" : string,
  "name" : string,
  "new_consumer": null,
  "phone" : string,
  "resource_uri" : string,
  "skype_id" : string,
  "uid" : string,
  "updated_at" : string
}

export interface IConsumer {
  'objects': IConsumerResults[],
  'meta': IMeta,
}

