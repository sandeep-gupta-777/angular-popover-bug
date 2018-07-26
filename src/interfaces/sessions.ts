export interface IGeneratedDf {
  'activeBot': string, /*Active bot name here*/
  'intentStatus': boolean,
  'isBye': boolean,
  'isGreeting': boolean,
  'isNo': boolean,
  'isSendToAgent': boolean,
  'isThanks': boolean,
  'isYes': boolean
}

export interface ISessionMessageData {
  '_cls': string,
  '_id': string,
  'botId': string,
  'bot_message_sensitive': any,
  'consumerId': string,
  'created_at': string,
  'extra_params': string,
  'message': string,
  'messageStore': any,
  'generatedDf': IGeneratedDf,
  'generatedMsg': { 'text': string }[],
  'platform': string,
  'roomId': string,
  'sensitive': any,
  'transaction_id': string,
  'updated_at': string,
  'userType': string,
  'user_message_sensitive': any
}

export interface ISessionItem {
  '_id': string,
  'agentHandOver': boolean,
  'allowAnonymization': any,
  'botId': string,
  'consentAcknowledged': boolean,
  'consentPermissions': any[],
  'consumerId': string,
  'created_at': string,
  'dataStore': object,
  'dfState': {
    'language': string,
    'word': any
  },
  'last_updated_job_id': string,
  'managerBotRoomId': any,
  'messages': ISessionMessageData[],
  'room_state_closed': true,
  'selectedAvatar': {
    'id': number,
    'imageUrl': string,
    'name': string
  },
  'updated_at': string
}


export interface ISessions {
  'results': ISessionItem[],
  'total': number
}
