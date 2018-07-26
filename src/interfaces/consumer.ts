export interface IConsumerResults{
  '_id': string,
  'botId': string,
  'consentAcknowledged': boolean,
  'consentPermissions': any[],
  'consumerDataStore': object,
  'created_at': string,
  'decrypt': true,
  'email': string,
  'extra_params': string,
  'facebookId': string,
  'lineId': string,
  'name': string,
  'phone': string,
  'skypeId': string,
  'uid': string,
  'updated_at': string
}

export interface IConsumer {
  'results': IConsumerResults[],
  'total': number
}

