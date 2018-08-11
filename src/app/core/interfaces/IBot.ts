import { IMeta } from "./meta";
import { IAvatar } from "../../../interfaces/bot-creation";
import {IAIModule} from '../../../interfaces/ai-module';

/*TODO: what is the key for industry*/
export interface IBot {
  "active_version_id": number,
  "advanced_data_protection": boolean,
  "allow_anonymization": boolean,
  "avatars": IAvatar[],
  "blanket_consent": boolean,
  "bot_access_token": string,
  "bot_type": string,
  "bot_unique_name": string,
  "child_bots": string,
  "consent_categories": string,
  "consent_message": string,
  "created_at": string,
  "created_by": number,
  "data_persistence_period": number,
  "description": string,
  "enterprise_id": number,
  "error_message": string,
  "first_message": string,
  "heading": string,
  "id": number,
  /*TODO: Queries:Integration should be array*/
  integrations: {
    ccsp_details: {
      debug: {
        debugurl: '',
        enabled: false
      },
      imichat: {
        'access-token': '',
        domain: '',
        enabled: false,
        'service-key': ''
      }
    },
    channels: {
      alexa: {
        enabled: false,
        skillId: ''
      },
      facebook: {
        enabled: true,
        'facebook-token': 'EAAc8APVKjxsBAI86VkZBDg5ZCZAGXSMpVsNQRdUgTSR1eq31ajiajCLSsTQLAeEzgqs6uKN2qq0VBAXcDX31D2OPzEJvaQZAzkNNLcexNxuresG7zXabZCIfySUnEUf9XVbDPWBRZAwJZBFdtAnmXusEYtHlIZAHiPzRWB8jdsFlswZDZD',
        id: '194700987927464'
      },
      skype: {
        client_id: '',
        client_secret: '',
        enabled: false
      }
    },
    fulfillment_provider_details: {
      imiconnect: {
        appId: '',
        appSecret: '',
        enabled: false,
        serviceKey: '',
        streamName: ''
      }
    }
  },
  "logo": string,
  "name": string,
  "parent_bots": string,
  "pipelines": IAIModule[],
  "room_persistence_time": number,
  "transactions_per_pricing_unit": number,
  "updated_at": string,
  "updated_by": number,
  // these r store properties and will not come from server...delete it before updating the bot
  "store_bot_versions" : IBotVersionData[]
}

export interface IBotResult {
  "meta": IMeta,
  "objects": IBot[]
}

export interface IBotVersionResult {
  "meta": IMeta,
  "objects": IBotVersionData[]
}

export interface IBotVersionData  {
  "bot_id": number,
  "comment" : string,
  "created_at" : string,
  "df_rules" : string,
  "df_template" : string,
  "generation_rules" : string,
  "generation_templates" : string,
  "id": number,
  "resource_uri" : string,
  "updated_at" : string,
  "version": number,
  "workflow" : string
}

// export interface IBot {
//   '_id': string,
//   'activeVersionId': string,
//   'agentDetails': {},
//   'allowAnonymization': boolean,
//   'avatars': [
//     {
//       'id': number,
//       'imageUrl': string,
//       'name': string
//     }
//     ],
//   'blanketConsent': boolean,
//   'botLogo': string,
//   'botType': string,
//   'botUniqueName': string,
//   'botsManaged': [any],
//   'channels': {
//     'facebook': {
//       'facebook-token': string,
//       'id': string
//     }
//   },
//   'consentCategories': {
//     'data_anonymization': string,
//     'data_retention': string
//   },
//   'consentEnabled': boolean,
//   'consentMessage': string,
//   'created_at': string,
//   'customNers':
//     [
//       {
//         '_id': string,
//         'conflict_policy': string,
//         'key': string,
//         'nerType': string,
//         'values': string[]//for others
//           |
//           [{//for database
//           "key": string,
//           "payload": string,
//           "title": string
//         }]
//       }
//       ],
//   'data_persistence_period': number,
//   'description': null,
//   'dfRules': string,
//   'dfTemplate': string,
//   'enterpriseId': string,
//   'firstMessage': string,
//   'generationRules': string,
//   'generationTemplates': string,
//   'heading': null,
//   'imiChatStatus': boolean,
//   'industry': string,
//   'isManager': boolean,
//   'name': string,
//   'pipeline': [
//     {
//       'id': string,
//       'inputParams': {},
//       'library': string,
//       'module': string
//     }
//     ],
//   'pipelineId': string,
//   'room_persistence_time': number,
//   'token': string,
//   'unselected_pipeline': [
//     {
//       'contextual': boolean,
//       'default': boolean,
//       'id': string,
//       'inputParams': {},
//       'library': string,
//       'module': string
//     }
//     ],
//   'updated_at': string,
//   /*custom, maybe wrong*/
//   cmsurl:string,
// }
