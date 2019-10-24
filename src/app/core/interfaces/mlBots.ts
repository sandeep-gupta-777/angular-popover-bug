import {IMeta} from './meta';
import {IIntent} from '../../typings/intents';

export interface IIntentsItem {
  'created_at': number;
  'entities': any[];
  'intent_id': number;
  'name': string;
  'reset_state': boolean;
  'template_key': string;
  'updated_at': number;
  'utterances': { 'entities': string[], 'utterance': string }[];
}

export interface IEntitiesItem {
  'color': string,
  'created_at': number,
  'data': { 'values': { 'synonyms': string[], 'value': string }[] },
  'intent_id': string;
  'name': string;
  'required': boolean;
  'template_key': string;
  'system_entity': boolean;
  'type': string;
  'updated_at': number;
  counter: string,
  entity_id: string,
}

export interface IMLCorpus {
  'algorithm': any;
  'bot_id': number;
  'created_at': number;
  'created_by': string;
  'description': string;
  'entities': IEntitiesItem[];
  'first_draft': boolean;
  'id': number;
  'intents': IIntent[];
  'metadata': any;
  'model_id': string;
  'model_version_id': number;
  'parent_corpus': number;
  'resource_uri': string;
  'state': string;
  'updated_at': number;
  'updated_by': string;
}

export interface IMLCorpusResult {
  'meta': IMeta;
  'objects': IMLCorpus[];
}
