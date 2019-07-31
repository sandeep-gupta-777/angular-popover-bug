import { IMeta } from './meta';
import { IAvatar } from '../../../interfaces/bot-creation';
import { IPipelineItem } from '../../../interfaces/ai-module';
import { IIntegrationOption } from '../../../interfaces/integration-option';
import { ICorpus } from './faqbots';
import { EBotType } from '../../utility.service';

/*TODO: what is the key for industry*/
export interface IBot {
  active_version?: {
    bot_id: number,
    comment: string,
    id: number,
    version: number
  };
  latest_version?: {
    _id: number,
    bot_id: number,
    comment: number,
    id: number,
    version: number
  };
  'active_version_id'?: number;
  'advanced_data_protection'?: boolean;
  'allow_anonymization'?: boolean;
  'allow_feedback'?: boolean;
  'avatars'?: IAvatar[];
  'blanket_consent'?: boolean;
  'bot_access_token'?: string;
  'bot_type'?: EBotType;
  'bot_unique_name'?: string;
  'child_bots'?: Array<number>;
  'consent_categories'?: string;
  'consent_message'?: string;
  'created_at'?: string;
  'created_by'?: number;
  'data_persistence_period'?: number;
  'description'?: string;
  'enterprise_id'?: number;
  'error_message'?: string;
  'first_message'?: string;
  room_close_callback?: boolean;
  'heading'?: string;
  'id'?: number;
  is_manager?: boolean;
  // allow_feedback?:boolean,
  /*TODO: Queries:Integration should be array*/
  integrations?: IIntegrationOption;
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
  //       roomId: string
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
  // for faq bots only
  'allow_agent_handover'?: boolean;
  'logo'?: string;
  'name'?: string;
  'parent_bots'?: string;
  'pipelines'?: IPipelineItem[];
  'room_persistence_time'?: number;
  'transactions_per_pricing_unit'?: number;
  'updated_at'?: string;
  'updated_by'?: string;
  'bot_disabled_settings'?: {
    'bot_disabled': true,
    'disabled_message': 'bye',
    'agent_handover': false
  };

  enterprise_name?: string;
  enterprise_logo?: string;
  enterprise_unique_name?: string;
  // these r store properties and will not come from server...delete it before updating the bot
  'store_bot_versions'?: Partial<IBotVersionData>[];
  store_selected_version?: number;
  store_isPinned?: boolean;

  /*Form validations*/
  form_validation_basic_info?: boolean;
  form_validation_data_management?: boolean;
  form_validation_avator?: boolean;
  form_validation_integration?: boolean;

  // faq bots
  corpus?: ICorpus;
  // faqbot meta data
  bot_metadata?: {
    live_corpus?: any;
    low_confidence_score?: number;
    n_results?: number;
    preview_corpus?: any;
    threshold_diff_score?: number;
    threshold_min_score?: number;
  },

  agent_handover_setting?: {
    consecutive_count?: {
      enabled?: boolean,
      value?: number
    },
    fallback_count?: {
      enabled?: boolean,
      value?: number
    },
    partial_match_count?: {
      enabled?: boolean,
      value?: number
    },
    response_flag?: boolean
  };

//  curation
  allow_curation?: boolean;

  curation_settings?: {
    agent_handover?: {
      enabled?: boolean;
    };
    downvoted?: {
      enabled?: boolean;
    };
    fallback?: {
      enabled?: boolean;
    };
    from_session?: {
      enabled?: boolean;
    };
    low_confidence?: {
      enabled?: boolean;
      low_confidence_score?: number;
    };
    partial_match?: {
      enabled?: boolean;
    }
  };
}

export interface IBotResult {
  'meta': IMeta;
  'objects': IBot[];
}

export interface IBotVersionResult {
  'meta': IMeta;
  'objects': IBotVersionData[];
}


export interface IBotVersionData {
  'bot_id'?: number;
  'comment'?: string;
  'created_at'?: string;
  'df_rules'?: string;
  'df_template'?: string;
  'generation_rules'?: string;
  'generation_templates'?: string;
  'id'?: number;
  'resource_uri'?: string;
  'updated_at'?: string;
  'version'?: number;
  'workflow'?: string;
  'updated_fields'?: {
    'df_template'?: boolean,
    'df_rules'?: boolean,
    'generation_rules'?: boolean,
    'generation_templates'?: boolean,
    'workflow'?: boolean
  };
  'changed_fields'?: {
    'df_template'?: boolean,
    'df_rules'?: boolean,
    'generation_rules'?: boolean,
    'generation_templates'?: boolean,
    'workflow'?: boolean
  };
  'forked_from'?: number,
  'validation'?: ICodeVersionValidation,
  'is_ui_view'?: boolean,
}

export interface ICodeVersionValidation {
  'df_rules'?: IValidationTabItem,
  'df_template'?: IValidationTabItem,
  'generation_rules'?: IValidationTabItem,
  'generation_templates'?: IValidationTabItem,
  'workflow'?: IValidationTabItem,
}

export interface IValidationTabItem {
  error?: boolean;
  error_line?: string;
  error_msg?: string;
  msg?: string;
}

// export interface IBot {
//   '_id': string,
//   'activeVersionId': string,
//   'agentDetails': {},
//   'allowAnonymization': boolean,
//   'avatars': [
//     {
//       'roomId': number,
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
//       'roomId': string
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
//       'roomId': string,
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
//       'roomId': string,
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
  'code': ICode;
}

export interface ICode {
  // "bot_id": number,
  'comment'?: string;
  'df_rules'?: string;
  'df_template'?: string;
  'generation_rules'?: string;
  'generation_templates'?: string;
  'version'?: number;
  'workflow'?: string;
}

export interface IBotCreation extends Partial<IBot>/*,ICodeData */
{

}
