export interface IBot {
  '_id': string,
  'activeVersionId': string,
  'agentDetails': {},
  'allowAnonymization': boolean,
  'avatars': [
    {
      'id': number,
      'imageUrl': string,
      'name': string
    }
    ],
  'blanketConsent': boolean,
  'botLogo': string,
  'botType': string,
  'botUniqueName': string,
  'botsManaged': [any],
  'channels': {
    'facebook': {
      'facebook-token': string,
      'id': string
    }
  },
  'consentCategories': {
    'data_anonymization': string,
    'data_retention': string
  },
  'consentEnabled': false,
  'consentMessage': string,
  'created_at': string,
  'customNers':
    [
      {
        '_id': string,
        'conflict_policy': string,
        'key': string,
        'nerType': string,
        'values': string[]//for others
          |
          [{//for database
          "key": string,
          "payload": string,
          "title": string
        }]
      }
      ],
  'data_persistence_period': number,
  'description': null,
  'dfRules': string,
  'dfTemplate': string,
  'enterpriseId': string,
  'firstMessage': string,
  'generationRules': string,
  'generationTemplates': string,
  'heading': null,
  'imiChatStatus': false,
  'industry': string,
  'isManager': false,
  'name': string,
  'pipeline': [
    {
      'id': string,
      'inputParams': {},
      'library': string,
      'module': string
    }
    ],
  'pipelineId': string,
  'room_persistence_time': number,
  'token': string,
  'unselected_pipeline': [
    {
      'contextual': false,
      'default': false,
      'id': string,
      'inputParams': {},
      'library': string,
      'module': string
    }
    ],
  'updated_at': string,
  /*custom, maybe wrong*/
  cmsurl:string,
}
