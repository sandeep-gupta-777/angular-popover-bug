/*question: why there are two pipeline related fields: pipeline and pipeline data */

import {IIntegrationOption} from './integration-option';
import { ICodeData } from '../app/core/interfaces/IBot';

export interface IBasicInfo {
  'botUniqueName': string;
  'name': string;
  'heading': string;
  'imiChatStatus': boolean;
  'firstMessage': string;
  'error_message': null;
  'isManager': boolean;
  'industry': string;
  'description': string;
  'room_persistence_time': number;
  'countpertransaction': number;
  'logo': string;
}
export interface ISaveDataManagment {
  'data_persistence_period': number;
  'consent_message': string;
  'advanced_data_protection': boolean;
  'allow_anonymization': boolean;
  'blanket_consent': boolean;
}

export interface IAvatar {
    'id': number;
    'imageUrl': string;
    'name': string;
}

export interface IAvatarList {
  'avatars': IAvatar[];
}

export interface IPipeline {
  'pipelineId': string;
  'pipeline': [{
    'default': boolean,
    'displayValues': { 'output_language': string },
    'id': string,
    'inputParams': { 'output_language': string },
    'library': string,
    'module': string,
    'type': string
  }];
}

// export interface pipelineData {
//
// }

export interface IUnselectedPipeline {
  'contextual': boolean;
  'default': boolean;
  'id': string;
  'inputParams': object;
  'library': string;
  'module': string;
  'type': string;
}


export interface ICustomners {
  'customNers': [{
    'columnHeaders': [string],
    'columnNERMap': { 'Key': null, 'Response': null },
    'conflict_policy': string,
    'key': string,
    'nerType': string,
    'values': [{ 'Key': string, 'Response': string }]
  }];
}

export interface IIntegration {
  'channels': IIntegrationOption;
}

export interface IBotConfig extends IBasicInfo, IAvatarList, ICodeData, ICustomners, IPipeline, IIntegration {
  '_id': string;
  'activeVersionId': string;
  'agentDetails': {
    'debug': { 'debugurl': string, 'enabled': boolean },
    'imichat': { 'access-token': string, 'domain': string, 'enabled': boolean, 'imichattoggle': boolean, 'service-key': string }
  };
}
