import {EBotMessageMediaType} from './chat-session-state';

export interface ISendApiRequestPayload {
  'bot_id': string;
  'consumer': {
    '_id'?: string,
    'botId': string,
    'consentAcknowledged': boolean,
    'consentPermissions': any[],
    'consumerDataStore': object,
    'created_at': string,
    'email': string,
    'extra_params': string,
    'facebookId': string,
    'lineId': string,
    'name': string,
    'phone': string,
    'skypeId': string,
    'uid': string,
    'updated_at': string
  };

  'type': string;
  'msg': string;
  'platform': string;
}

export interface IGeneratedMessageItem {
  'text'?: string;
  bot_message_id: number;
  'media'?: [
    {
      'buttons': [
        {
          'title': 'URL Button',
          'type': 'web_url', // title
          'url': 'https://www.messenger.com/'/*TODO: we are not getting payload*/
        }
        ],
      'title': 'this is sample text for image ,it is optional', // use this
      'type': EBotMessageMediaType// "image",//use this
      'url': 'https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg'// use this
    }
    ];
  quick_reply?: {
    'quick_replies': [
      {
        'content_type': 'text',
        'payload': 'Play Game',
        'title': 'Play Game'
      }],
    'text': 'Do you want to play game or validate coupon?<br>Select any'
  };

}

export interface ISendApiResponsePayload {
  'TimeStamp': 1533902788.0;
  'bot_msg': string;
  bot_message_id: number;
  'generated_msg': IGeneratedMessageItem[];
  'messageStore': { 'endflow': true, 'templateKey': 'A1' };
  'room': {
    'agent_handover': false,
    'allow_anonymization': false,
    'bot_id': number// 1,
    'consent_permissions': any[],
    'consumer_id': number, // 43,
    'cross_retention_period': false,
    'data_store': {},
    'df_state': {
      'answer': 'hi', 'question': 'hi'
    },
    'id': number,
    'imichat_agent': {},
    'is_anonymized': false,
    'last_updated_job_id': '5b6d7fc4736453000587246a',
    'manager_bot_room_id': 0,
    'resource_uri': '/api/v1/room/64/',
    'room_state_closed': false,
    'selected_avatar': any
  };
  'sendtoagent': false;
  'templateKey': 'A1';
  'transaction_id': '79f2707b0d2c419198febf0ccaaa4b99';
  // 'generated_msg': [{
  //     'text': string
  //   }],
  // 'room': {
  //   '_id': string,
  //   'agentHandOver': false,
  //   'botId': number,
  //   'consentAcknowledged': true,
  //   'consumerId': {
  //     '_id': string,
  //     'botId': string,
  //     'consentAcknowledged': true,
  //     'consentPermissions': {
  //         'permission': string,
  //         'status': string
  //       }[],
  //     'consumerDataStore': {},
  //     'created_at': string,
  //     'email': string,
  //     'extra_params': string,
  //     'facebookId': string,
  //     'lineId': string,
  //     'name': string,
  //     'phone': string,
  //     'skypeId': string,
  //     'uid': string,
  //     'updated_at': string
  //   },
  //   'created_at': string,
  //   'managerBotRoomId': null,
  //   'room_state_closed': false,
  //   'bot': {
  //     'roomId': 1,
  //     'imageUrl': string,
  //     'name': string
  //   },
  //   'updated_at': string
  // },
  // 'transaction_id': string
}

