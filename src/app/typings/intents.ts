import {IEntitiesItem} from '../core/interfaces/mlBots';

export interface IEntityMarker {
  start: number;
  end: number;
  type: string;
  entity_id: string;
  value?: string;
}

export enum EMarkerAttributes {
  data_entity_id = 'data_entity_id',
  data_id = 'data_id',
  data_position = 'data_position',
}

export interface IUtterance {
  'entities': IEntityMarker[];
  'utterance': string;
}

export interface IIntent {
  'created_at'?: 1571272780563;
  'entities'?: IEntitiesItem[];
  'intent_id'?: number;
  'name'?: 'Help';
  'reset_state'?: true;
  'template_key'?: 'help';
  'updated_at'?: 1571272780563;
  'utterances'?: IUtterance[];
}
