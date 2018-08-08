export interface ISendApiRequestPayload {
  'bot_id': string,
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
  },

  'type': string,
  'msg': string,
  'platform': string
}


export interface ISendApiResponsePayload {
  'generated_msg': [{
      'text': string
    }],
  'room': {
    '_id': string,
    'agentHandOver': false,
    'botId': number,
    'consentAcknowledged': true,
    'consumerId': {
      '_id': string,
      'botId': string,
      'consentAcknowledged': true,
      'consentPermissions': {
          'permission': string,
          'status': string
        }[],
      'consumerDataStore': {},
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
    },
    'created_at': string,
    'managerBotRoomId': null,
    'room_state_closed': false,
    'selectedAvatar': {
      'id': 1,
      'imageUrl': string,
      'name': string
    },
    'updated_at': string
  },
  'transaction_id': string
}

