//
// export interface IIntegrationOption {
//   "imiconnect"?: {
//     "enabled"?: string,
//     "appId"?: string,
//     "appSecret"?: string,
//     "streamName"?: string,
//     "serviceKey"?: string,
//     "send_via_connect"?: string
//   },
//   "facebook"?: {
//     "enabled"?: string,
//     "facebook-token"?: string,
//     "roomId"?: string
//   },
//   "skype"?: {
//     "enabled"?: string,
//     "client_id"?: string,
//     "client_secret"?: string,
//     "skype-page-name"?: string
//   },
//   "alexa"?: {
//     "enabled"?: string,
//     "skillId"?: string
//   },
//   "line"?: {
//     "enabled"?: string,
//     "skillId"?: string
//   },
//   "viber"?: {
//     "enabled"?: string,
//     "bot_name"?: string,
//     "bot_auth_token"?: string,
//     "bot_avatar"?: string
//   },
//   "debug"?: {
//     "enabled"?: string,
//     "speech_model"?: string
//   },
//   "imichat"?: {
//     "enabled"?: string,
//     "service-key"?: string,
//     "access-token"?: string,
//     "domain"?: string
//   },
//   "web"?: {
//     "enabled"?: string,
//     "speech_model"?: string,
//     "speech_tts"?: string,
//     "speech_url"?: string
//   }
// }



export interface IIntegrationOption {
  ccsp_details: {
    debug: {
      debugurl: string,
      enabled: boolean
    },
    imichat: {
      'access-token': string,
      domain: string,
      enabled: boolean,
      'service-key': string
    }
  };
  channels: {
    alexa: {
      enabled: boolean,
      skillId: string
    },
    facebook: {
      enabled: boolean,
      'facebook-token': string,
      id: string
    },
    skype: {
      client_id: string,
      client_secret: string,
      'skype-page-name': string,
      enabled: boolean
    },
    'line'?: {
      'enabled'?: boolean,
      'skillId'?: string
    },
    'viber'?: {
      'enabled'?: boolean,
      'bot_name'?: string,
      'bot_auth_token'?: string,
      'bot_avatar'?: string
    },
    'web'?: {
      'enabled'?: boolean,
      'speech_model'?: string,
      'speech_tts'?: string,
      'speech_url'?: string
    }
  };
  fulfillment_provider_details: {
    imiconnect: {
      appId: string,
      appSecret: string,
      enabled: boolean,
      serviceKey: string,
      streamName: string,
      send_via_connect: string
    }
  };
  /*custom fields*/
  form_validation_integration?: boolean;
}


export interface IMasterIntegrationResult {
  meta: any;
  objects: IIntegrationMasterListItem[];
}


export interface IIntegrationMasterListItem {
  'created_at': string;
  'icon': string;
  'id': number;
  'inputs': [
    {
      'display_text': string,
      'param_name': string,
    }];
  'integration_type': string;
  'key': string;
  'resource_uri': string;
  'type': string;
  'unique_name': string;
  'updated_at': string;
}
