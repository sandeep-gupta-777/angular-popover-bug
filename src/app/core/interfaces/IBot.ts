import { IMeta } from "./meta";
import { IAvatar } from "../../../interfaces/bot-creation";
import {IPipelineItem} from '../../../interfaces/ai-module';
import {IIntegrationOption} from '../../../interfaces/integration-option';

/*TODO: what is the key for industry*/
export interface IBot {
  active_version?: {
    bot_id: 13,
    comment: 'code version check',
    id: 12,
    version: 3
  },
  latest_version?: {
    _id: 13,
    bot_id: 13,
    comment: 'code version check',
    id: 12,
    version: 3
  }
  "active_version_id"?: number,
  "advanced_data_protection"?: boolean,
  "allow_anonymization"?: boolean,
  "avatars"?: IAvatar[],
  "blanket_consent"?: boolean,
  "bot_access_token"?: string,
  "bot_type"?: string,
  "bot_unique_name"?: string,
  "child_bots"?: Array<number>,
  "consent_categories"?: string,
  "consent_message"?: string,
  "created_at"?: string,
  "created_by"?: number,
  "data_persistence_period"?: number,
  "description"?: string,
  "enterprise_id"?: number,
  "error_message"?: string,
  "first_message"?: string,
  room_close_callback?:boolean,
  "heading"?: string,
  "id"?: number,
  /*TODO: Queries:Integration should be array*/
  integrations?: IIntegrationOption
  //   {
  //   ccsp_details: {
  //     debug: {
  //       debugurl: string,
  //       enabled: boolean
  //     },
  //     imichat: {
  //       'access-token': string,
  //       domain: string,
  //       enabled: boolean,
  //       'service-key': string
  //     }
  //   },
  //   channels: {
  //     alexa: {
  //       enabled: boolean,
  //       skillId: string
  //     },
  //     facebook: {
  //       enabled: true,
  //       'facebook-token':string,
  //       id: string
  //     },
  //     skype: {
  //       client_id: string,
  //       client_secret: string,
  //       enabled: boolean,
  //       'skype-page-name':string
  //     }
  //   },
  //   fulfillment_provider_details: {
  //     imiconnect: {
  //       appId: string,
  //       appSecret: string,
  //       enabled: boolean,
  //       serviceKey: string,
  //       streamName: string
  //     }
  //   }
  // }
  ,
  "logo"?: string,
  "name"?: string,
  "parent_bots"?: string,
  "pipelines"?: IPipelineItem[],
  "room_persistence_time"?: number,
  "transactions_per_pricing_unit"?: number,
  "updated_at"?: string,
  "updated_by"?: number,

  enterprise_name?:string,
  enterprise_logo?:string,
  // these r store properties and will not come from server...delete it before updating the bot
  "store_bot_versions" ?: Partial<IBotVersionData>[];
  store_selected_version?:number,

  /*Form validations*/
  form_validation_basic_info?:boolean,
  form_validation_data_management?:boolean,
  form_validation_avator?:boolean,
  form_validation_integration?:boolean,
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
  "bot_id"?: number,
  "comment" ?: string,
  "created_at" ?: string,
  "df_rules" ?: string,
  "df_template" ?: string,
  "generation_rules" ?: string,
  "generation_templates" ?: string,
  "id"?: number,
  "resource_uri" ?: string,
  "updated_at" ?: string,
  "version"?: number,
  "workflow" ?: string,
  "updated_fields"?: {
    "df_template"?: boolean,
    "df_rules"?: boolean,
    "generation_rules"?: boolean,
    "generation_template"?: boolean,
    "workflows"?: boolean
  },
  "forked_from"?: number,
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
export interface ICodeData {
  "code": ICode
}

export interface ICode {
  // "bot_id": number,
  "comment"? : string,
  "df_rules"? : string,
  "df_template"? : string,
  "generation_rules"? : string,
  "generation_templates" ?: string,
  "version"?: number,
  "workflow"? : string
}

export interface IBotCreation extends Partial<IBot>/*,ICodeData */{

}
