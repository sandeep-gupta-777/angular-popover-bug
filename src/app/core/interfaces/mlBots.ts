import { IMeta } from './meta';
export interface IIntentsItem {
    "created_at": number,
    "entities": any[],
    "intent_id": string,
    "name": string,
    "reset_state": boolean,
    "template_key": string,
    "updated_at": number,
    "utterances": { "entities": string[], "utterance": string }[]
}
export interface IEntitiesItem {
  "color": string,
  "created_at": number,
  "data": { "values": { "synonyms": string[], "value": string }[] },
  "intent_id": string,
  "entity_id": string,
  "name": string,
  "system_entity": boolean,
  "type": string,
  "updated_at": number
}
export interface IMLCorpus {
  "algorithm": any,
  "bot_id": number,
  "created_at": number,
  "created_by": string,
  "description": string,
  "entities": IEntitiesItem[],
  "first_draft": boolean,
  "id": number,
  "intents": IIntentsItem[],
  "metadata": any,
  "model_id": string,
  "model_version_id": number,
  "parent_corpus": number,
  "resource_uri": string,
  "state": string,
  "updated_at": number,
  "updated_by": string
}
export interface IMLCorpusResult {
  'meta': IMeta;
  'objects': IMLCorpus[];
}
