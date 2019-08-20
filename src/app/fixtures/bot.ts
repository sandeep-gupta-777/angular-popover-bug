export const bots =  {
  'meta': {
    'limit': 1000,
    'next': null,
    'offset': 0,
    'previous': null,
    'total_count': 89
  },
  'objects': [
    {
      'active_version': {
        'bot_id': 19,
        'comment': '',
        'id': 594,
        'is_ui_view': false,
        'version': 15
      },
      'active_version_id': 594,
      'advanced_data_protection': true,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': true,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/StarDroid.png',
          'name': 'StarBot87'
        }
      ],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTksInJvbGUiOiJib3QifQ.qxLlmDRc51mzL_ggPUugL4COruEjp-5gvOsilf3XmzQ',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'samplebot',
      'child_bots': [
        23
      ],
      'consent_categories': [],
      'consent_message': '0000-----i',
      'created_at': 1499169482000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 1,
      'description': 'test sample',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': 'Hello this is first message',
      'heading': '',
      'id': 19,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': true,
            'facebook-token': 'EAAcr1gijVOEBAMd1ntuZCMxSgil3TfQCjMCvca04Eii4rEdK77VfUCIAoP0lhIC8TNxQFAtAedwORTjJfLbY4HAMKZAoA2hHLQtUUDdIu7gK62SuWsO7zSHaWZCW2eyBMhe8kbP1YLScjU09dUyDe4ePGsflfXMlNFiYroyQSjyhrP4aCZBM',
            'id': '1122081711300399'
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'slack': {
            'enabled': false,
            'slack-token': '',
            'verification-token': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 19,
        'bot_id': 19,
        'comment': '',
        'id': 595,
        'version': 16
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'samplebot',
      'old_id': '595b82ca8617e100581e794b',
      'parent_bots': [],
      'pipelines': [
        {
          'cons': '',
          'contextual': false,
          'created_at': 1536651184000,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 8,
          'input_params': {},
          'is_paid': 'paid',
          'library': 'botman',
          'module': 'commonsense',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'pros': '',
          'resource_uri': '/api/v1/pipelinemodule/8/',
          'unique_name': 'IMIbot Common Sense',
          'updated_at': 1536651184000
        },
        {
          '_id': '5b8901000e0ff44f7e071e3f',
          'cons': '',
          'contextual': false,
          'created_at': 1535705344000,
          'default': false,
          'description': '',
          'display_values': {},
          'id': 12,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'smalltalk',
          'module': 'rasanlp',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'pros': '',
          'unique_name': 'RASA CommonSense',
          'updated_at': 1535705344000
        },
        {
          '_id': '5b8901000e0ff44f7e071e3a',
          'cons': '',
          'contextual': false,
          'created_at': 1535705344000,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 7,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'botman',
          'module': 'custom_ners',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'pros': '',
          'unique_name': 'IMIbot Custom NER',
          'updated_at': 1535705344000
        },
        {
          '_id': '5baa10ef39c5a6003deeaa31',
          'cons': '',
          'contextual': false,
          'created_at': 1537872111000,
          'default': false,
          'description': '',
          'display_values': {},
          'id': 36,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'google',
          'module': 'language_detection',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'pros': '',
          'unique_name': 'Google Language Detection',
          'updated_at': 1537872111000
        },
        {
          '_id': '5b8901000e0ff44f7e071e37',
          'cons': 'involves an external call',
          'contextual': false,
          'created_at': 1535705344000,
          'default': false,
          'description': '',
          'display_values': {
            'output_language': {
              'display_value': 'Output language',
              'type': 'text'
            }
          },
          'id': 4,
          'input_params': {
            'output_language': 'en'
          },
          'is_added': true,
          'is_paid': 'paid',
          'library': 'google',
          'module': 'language_translate',
          'pros': 'low cost, medium accuracy',
          'unique_name': 'Google Translate',
          'updated_at': 1535705344000
        },
        {
          '_id': '5b8901000e0ff44f7e071e48',
          'cons': '',
          'contextual': false,
          'created_at': 1535705344000,
          'default': false,
          'description': '',
          'display_values': {},
          'id': 21,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'botman',
          'module': 'lemmatization',
          'pros': '',
          'unique_name': 'IMIbot Lemmatization',
          'updated_at': 1535705344000
        },
        {
          '_id': '5b8901000e0ff44f7e071e49',
          'cons': 'slightly lower accuracy',
          'contextual': false,
          'created_at': 1535705344000,
          'default': false,
          'description': 'This implementation is based on an free, fast and open-source library.',
          'display_values': {},
          'id': 22,
          'input_params': {},
          'is_added': true,
          'is_paid': 'Free',
          'library': 'spacy',
          'module': 'lemmatization',
          'pros': 'cheaper,faster, does not involve and external call',
          'unique_name': 'Spacy Lemmatization',
          'updated_at': 1535705344000
        },
        {
          '_id': '5b8901000e0ff44f7e071e4a',
          'cons': 'relatively more expensive, involves an external call, slightly slower',
          'contextual': false,
          'created_at': 1535705344000,
          'default': false,
          'description': 'This is a paid API.',
          'display_values': {},
          'id': 23,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'google',
          'module': 'lemmatization',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'pros': 'contextual, slightly higher accuracy',
          'unique_name': 'Google Lemmatization',
          'updated_at': 1535705344000
        },
        {
          '_id': '5b8901000e0ff44f7e071e36',
          'cons': 'relatively more expensive, involves an external call, entity coverage is not consistent',
          'contextual': false,
          'created_at': 1535705344000,
          'default': false,
          'description': 'This is a paid service by dandelion.eu',
          'display_values': {},
          'id': 3,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'dandelion',
          'module': 'ner',
          'pros': 'contextual, slightly higher accuracy, improves over time',
          'unique_name': 'Dandelion NER',
          'updated_at': 1535705344000
        },
        {
          '_id': '5b8901000e0ff44f7e071e34',
          'cons': ' lower entity coverage, lower accuracy',
          'contextual': false,
          'created_at': 1535705344000,
          'default': false,
          'description': 'This implementation is based on a fast, free and open-source library called Spacy',
          'display_values': {},
          'id': 1,
          'input_params': {},
          'is_added': true,
          'is_paid': 'free',
          'library': 'spacy',
          'module': 'ner',
          'pros': 'no external calls, faster',
          'unique_name': 'Spacy NER',
          'updated_at': 1535705344000
        },
        {
          '_id': '5b8901000e0ff44f7e071e3c',
          'cons': '',
          'contextual': false,
          'created_at': 1535705344000,
          'default': false,
          'description': 'Parses a given sentence for a mention of one or more of the following metrics and the corresponding unit of measurement used.Metrics currently supported:Distance,Volume,CurrencyEach metric can be looked for individually by using the name of that metric as the library in the request body. If you use botman as the library, the module scans for all the supported metrics.',
          'display_values': {},
          'id': 9,
          'input_params': {},
          'is_added': true,
          'is_paid': 'free',
          'library': 'botman',
          'module': 'numbers',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'pros': '',
          'unique_name': 'IMIbot Numbers Recognition',
          'updated_at': 1535705344000
        },
        {
          '_id': '5b8901000e0ff44f7e071e3e',
          'cons': '',
          'contextual': false,
          'created_at': 1535705344000,
          'default': false,
          'description': '',
          'display_values': {
            'image_type': {
              'display_value': 'Natural Image',
              'type': 'text'
            }
          },
          'id': 11,
          'input_params': {
            'image_type': 'natural_image'
          },
          'is_added': true,
          'is_paid': 'paid',
          'library': 'google',
          'module': 'ocr',
          'pros': '',
          'unique_name': 'Google OCR',
          'updated_at': 1535705344000
        },
        {
          '_id': '5b8901000e0ff44f7e071e40',
          'cons': 'comparatively lesser flexibility, opinionated, only supports English',
          'contextual': false,
          'created_at': 1535705344000,
          'default': true,
          'description': 'This implementation is based on a fast, free and open-source library',
          'display_values': {},
          'id': 13,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'spacy',
          'module': 'pos',
          'pros': 'free, no external calls, faster',
          'unique_name': 'Spacy Parts of Speech',
          'updated_at': 1535705344000
        },
        {
          '_id': '5b8901000e0ff44f7e071e53',
          'cons': 'paid, needs external api calls',
          'contextual': false,
          'created_at': 1535705344000,
          'default': false,
          'description': 'A paid service by Google',
          'display_values': {},
          'id': 32,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'google',
          'module': 'pos',
          'pros': 'more accurate, supports multiple languages',
          'unique_name': 'Google Parts of Speech',
          'updated_at': 1535705344000
        },
        {
          '_id': '5b8901000e0ff44f7e071e39',
          'cons': 'paid, needs external api calls',
          'contextual': false,
          'created_at': 1535705344000,
          'default': false,
          'description': '',
          'display_values': {},
          'id': 6,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'google',
          'module': 'parsetree',
          'pros': 'more accurate, supports multiple languages',
          'unique_name': 'Google Parse Tree',
          'updated_at': 1535705344000
        },
        {
          '_id': '5b8901000e0ff44f7e071e41',
          'cons': 'comparatively lesser flexibility, opinionated, only supports English',
          'contextual': false,
          'created_at': 1535705344000,
          'default': false,
          'description': '',
          'display_values': {},
          'id': 14,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'spacy',
          'module': 'parsetree',
          'pros': 'free, no external calls, faster',
          'unique_name': 'Spacy Parse Tree',
          'updated_at': 1535705344000
        }
      ],
      'resource_uri': '/api/v1/bot/19/',
      'room_close_callback': false,
      'room_persistence_time': 100,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1550811430000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 20,
        'comment': 'Default active version',
        'id': 19,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 19,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'id': 1,
          'imageUrl': 'https://robohash.org/SmartDroid.png',
          'name': 'SmartDroid'
        }
      ],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjAsInJvbGUiOiJib3QifQ.6Jr6DCA_7g_kv-aIF8AhyPC-Z6N4s-EURi-mECQnxJk',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'samplebot2',
      'child_bots': [],
      'consent_categories': [],
      'consent_message': '',
      'created_at': 1499170677000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 60,
      'description': '',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 20,
      'integrations': {
        'ccsp_details': {
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': '',
            'id': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 20,
        'bot_id': 20,
        'comment': '',
        'id': 615,
        'version': 2
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'samplebot2',
      'old_id': '595b87758617e100581e7958',
      'parent_bots': [],
      'pipelines': [
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 5,
          'input_params': {},
          'library': 'azure',
          'module': 'spell_check',
          'unique_name': 'Azure Spell Check'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 13,
          'input_params': {},
          'library': 'spacy',
          'module': 'pos',
          'unique_name': 'Spacy Parts of Speech'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 8,
          'input_params': {},
          'library': 'botman',
          'module': 'commonsense',
          'unique_name': 'IMIbot Common Sense'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 7,
          'input_params': {},
          'library': 'botman',
          'module': 'custom_ners',
          'unique_name': 'IMIbot Custom NER'
        }
      ],
      'resource_uri': '/api/v1/bot/20/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1505893585000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 21,
        'comment': 'Default active version',
        'id': 20,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 20,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'id': 1,
          'imageUrl': 'https://robohash.org/IntelliBorg.png',
          'name': 'IntelliBorg'
        }
      ],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjEsInJvbGUiOiJib3QifQ.huU3dWhMWqkgIq6uo1IcJCXxtxvpfXJBweD8WwnsEUA',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'samplebot3',
      'child_bots': [
        21,
        20
      ],
      'consent_categories': [],
      'consent_message': '',
      'created_at': 1499170824000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 60,
      'description': 'zzdasdsadasd',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 21,
      'integrations': {
        'ccsp_details': {
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': '',
            'id': ''
          }
        }
      },
      'is_manager': true,
      'latest_version': {
        '_id': 21,
        'bot_id': 21,
        'comment': 'Default active version',
        'id': 20,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'samplebot3',
      'old_id': '595b8808a490be00542dec99',
      'parent_bots': [],
      'pipelines': [
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 5,
          'input_params': {},
          'library': 'azure',
          'module': 'spell_check',
          'unique_name': 'Azure Spell Check'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 8,
          'input_params': {},
          'library': 'botman',
          'module': 'commonsense',
          'unique_name': 'IMIbot Common Sense'
        }
      ],
      'resource_uri': '/api/v1/bot/21/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1539194788000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 22,
        'comment': 'Default active version',
        'id': 21,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 21,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'id': 1,
          'imageUrl': 'https://robohash.org/IntelliBot.png',
          'name': 'IntelliBot'
        }
      ],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjIsInJvbGUiOiJib3QifQ.Bdl737MY4a9f4e6u5aYVGmCmeIopEa1FmnbbXBYy-tg',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'sample4',
      'child_bots': [],
      'consent_categories': [],
      'consent_message': '',
      'created_at': 1499177083000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 60,
      'description': '',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 22,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': '',
            'id': ''
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'enabled': false
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 22,
        'bot_id': 22,
        'comment': 'Default active version',
        'id': 21,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'sample4',
      'old_id': '595ba07b8617e1001f076c76',
      'parent_bots': [],
      'pipelines': [
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 5,
          'input_params': {},
          'library': 'azure',
          'module': 'spell_check',
          'unique_name': 'Azure Spell Check'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 8,
          'input_params': {},
          'library': 'botman',
          'module': 'commonsense',
          'unique_name': 'IMIbot Common Sense'
        }
      ],
      'resource_uri': '/api/v1/bot/22/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1540063682000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 23,
        'comment': '',
        'id': 624,
        'is_ui_view': false,
        'version': 4
      },
      'active_version_id': 624,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': true,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/IntelliBot.png',
          'name': 'IntelliBot'
        }
      ],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjMsInJvbGUiOiJib3QifQ.OLiLAom5l1V8aFUmcvaEbDnVDxmVYYhsksJLQZ6nTX0',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'weatherytesting',
      'child_bots': [],
      'consent_categories': [],
      'consent_message': '       this is a consent message',
      'created_at': 1499749081000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 60,
      'description': 'sdasdasd',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '  this is a consent message test',
      'heading': '',
      'id': 23,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': '',
            'id': ''
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'slack': {
            'enabled': false,
            'slack-token': '',
            'verification-token': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 23,
        'bot_id': 23,
        'comment': '',
        'id': 624,
        'version': 4
      },
      'logo': 'https://via.placeholder.com/48x48?text=.jpg',
      'name': 'weatherytesting',
      'old_id': '59645ad98617e100eba637ca',
      'parent_bots': [],
      'pipelines': [
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 5,
          'input_params': {},
          'library': 'azure',
          'module': 'spell_check',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'unique_name': 'Azure Spell Check'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 8,
          'input_params': {},
          'library': 'botman',
          'module': 'commonsense',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'unique_name': 'IMIbot Common Sense'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 7,
          'input_params': {},
          'library': 'botman',
          'module': 'custom_ners',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'unique_name': 'IMIbot Custom NER'
        }
      ],
      'resource_uri': '/api/v1/bot/23/',
      'room_close_callback': false,
      'room_persistence_time': 2,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1553836059000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 24,
        'comment': 'Default active version',
        'id': 23,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 23,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'id': 1,
          'imageUrl': 'http://s1.1zoom.net/big0/626/DOTA_2_Terrorblade_453216.jpg',
          'name': 'terrorblade'
        }
      ],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjQsInJvbGUiOiJib3QifQ.Dps3fEX6sG78SDm0oVG-K3GDZk1uz-o7fQ7Vi4XMtng',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'thisisgreate',
      'child_bots': [],
      'consent_categories': [],
      'consent_message': '',
      'created_at': 1507810310000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 60,
      'description': 'asdfasdfasd',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 24,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': ''
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': true,
            'facebook-token': 'EAADdQ7jKozwBAArgNwLzyUtsNQWZB7vgtTIt34rJk3PcIkDZB6V6aOmtL6zALs6DOanD2VBqeZCYKRhZArbj8Lj32vWVPjtZArsu483z9OccmLngOJu6HZAoCR6yAsuEHzFjx7iajEZA2Uewi3z7UpVzSzRNr1ZC97LLDacY8YNb8wZDZD',
            'id': '314363828988731'
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': ''
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': '',
            'skype-page-name': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': ''
          },
          'web': {
            'enabled': '',
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': '',
            'endpoint': 'messagingapi',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 24,
        'bot_id': 24,
        'comment': 'Default active version',
        'id': 23,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'testingbot',
      'old_id': '59df5c06dc858102599e859f',
      'parent_bots': [],
      'pipelines': [
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 5,
          'input_params': {},
          'library': 'azure',
          'module': 'spell_check',
          'unique_name': 'Azure Spell Check'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 8,
          'input_params': {},
          'library': 'botman',
          'module': 'commonsense',
          'unique_name': 'IMIbot Common Sense'
        },
        {
          'contextual': false,
          'created_at': 1536651184000,
          'default': false,
          'display_values': {},
          'id': 32,
          'input_params': {},
          'library': 'google',
          'module': 'pos',
          'resource_uri': '/api/v1/pipelinemodule/32/',
          'unique_name': 'Google Parts of Speech',
          'updated_at': 1536651184000
        }
      ],
      'resource_uri': '/api/v1/bot/24/',
      'room_close_callback': false,
      'room_persistence_time': 1,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1537966416000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 25,
        'comment': 'Default active version',
        'id': 24,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 24,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'id': 1,
          'imageUrl': 'http://s1.1zoom.net/big0/626/DOTA_2_Terrorblade_453216.jpg',
          'name': 'terrorblade'
        }
      ],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjUsInJvbGUiOiJib3QifQ.M89w8_fN52lLG_AvblrZ5cYEK83aroFxkw8cNvTP47s',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'sample123',
      'child_bots': [],
      'consent_categories': [],
      'consent_message': '',
      'created_at': 1507810598000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 60,
      'description': '',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 25,
      'integrations': {
        'ccsp_details': {
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': '',
            'id': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 25,
        'bot_id': 25,
        'comment': 'Default active version',
        'id': 24,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'testingbot',
      'old_id': '59df5d26b58b0d024fddbd76',
      'parent_bots': [],
      'pipelines': [
        {
          'cons': '',
          'contextual': false,
          'created_at': 1536651184000,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 5,
          'input_params': {},
          'is_paid': 'paid',
          'library': 'azure',
          'module': 'spell_check',
          'pros': '',
          'resource_uri': '/api/v1/pipelinemodule/5/',
          'unique_name': 'Azure Spell Check',
          'updated_at': 1536651184000
        },
        {
          'cons': '',
          'contextual': false,
          'created_at': 1536651184000,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 7,
          'input_params': {},
          'is_paid': 'paid',
          'library': 'botman',
          'module': 'custom_ners',
          'pros': '',
          'resource_uri': '/api/v1/pipelinemodule/7/',
          'unique_name': 'IMIbot Custom NER',
          'updated_at': 1536651184000
        },
        {
          'cons': '',
          'contextual': false,
          'created_at': 1536651184000,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 8,
          'input_params': {},
          'is_paid': 'paid',
          'library': 'botman',
          'module': 'commonsense',
          'pros': '',
          'resource_uri': '/api/v1/pipelinemodule/8/',
          'unique_name': 'IMIbot Common Sense',
          'updated_at': 1536651184000
        }
      ],
      'resource_uri': '/api/v1/bot/25/',
      'room_close_callback': false,
      'room_persistence_time': 1,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1544686837000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 26,
        'comment': 'Default active version',
        'id': 25,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 25,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'id': 1,
          'imageUrl': 'http://s1.1zoom.net/big0/626/DOTA_2_Terrorblade_453216.jpg',
          'name': 'terrorblade'
        }
      ],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjYsInJvbGUiOiJib3QifQ.wcmOS1cBBDuP1OMsFf98kccEFo8jnMekKb6IcWMqirc',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'samplegggg',
      'child_bots': [],
      'consent_categories': [],
      'consent_message': '',
      'created_at': 1507810698000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 60,
      'description': 'sdfsadfad',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 26,
      'integrations': {
        'ccsp_details': {
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': '',
            'id': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 26,
        'bot_id': 26,
        'comment': 'Default active version',
        'id': 25,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'testingbot',
      'old_id': '59df5d8adc8581024585e308',
      'parent_bots': [],
      'pipelines': [
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 5,
          'input_params': {},
          'library': 'azure',
          'module': 'spell_check',
          'unique_name': 'Azure Spell Check'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 8,
          'input_params': {},
          'library': 'botman',
          'module': 'commonsense',
          'unique_name': 'IMIbot Common Sense'
        }
      ],
      'resource_uri': '/api/v1/bot/26/',
      'room_close_callback': false,
      'room_persistence_time': 1,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1536908259000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 28,
        'comment': 'Default active version',
        'id': 26,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 26,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'id': 1,
          'imageUrl': 'https://robohash.org/SmartDroid.png',
          'name': 'SmartDroid'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjgsInJvbGUiOiJib3QifQ.3K9KA1Yzwif_LU01K5E6TXE0qv2P7b-OnkarTJGc9Ys',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'ayeshbot',
      'child_bots': [],
      'consent_categories': [],
      'consent_message': '',
      'created_at': 1525345499000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': '',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 28,
      'integrations': {
        'ccsp_details': {
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': '',
            'id': ''
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 28,
        'bot_id': 28,
        'comment': 'Default active version',
        'id': 26,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'sfasdfas',
      'old_id': '5aeaecdbe3803b009ca9362d',
      'parent_bots': [],
      'pipelines': [
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 13,
          'input_params': {},
          'library': 'spacy',
          'module': 'pos',
          'unique_name': 'Spacy Parts of Speech'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 19,
          'input_params': {},
          'library': 'nltk',
          'module': 'sentence_tokenization',
          'unique_name': 'NLTK Sentence Tokenization'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 5,
          'input_params': {},
          'library': 'azure',
          'module': 'spell_check',
          'unique_name': 'Azure Spell Check'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 31,
          'input_params': {},
          'library': 'nltk',
          'module': 'word_tokenization',
          'unique_name': 'NLTK Word Tokenization'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 8,
          'input_params': {},
          'library': 'botman',
          'module': 'commonsense',
          'unique_name': 'IMIbot Common Sense'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 7,
          'input_params': {},
          'library': 'botman',
          'module': 'custom_ners',
          'unique_name': 'IMIbot Custom NER'
        }
      ],
      'resource_uri': '/api/v1/bot/28/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1525345499000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 29,
        'comment': 'Default active version',
        'id': 27,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 27,
      'advanced_data_protection': true,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': true,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/StarBot.png',
          'name': 'StarBot'
        }
      ],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjksInJvbGUiOiJib3QifQ.Iq_73YuvBy6jyx_RKkXVQhjon_v4PawmEeRFykvnB-0',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'anonymization.check',
      'child_bots': [],
      'consent_categories': [],
      'consent_message': 'test consent message',
      'created_at': 1528272963000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 0.003,
      'description': 'sadasdasda',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 29,
      'integrations': {
        'ccsp_details': {
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': '',
            'id': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 29,
        'bot_id': 29,
        'comment': 'Default active version',
        'id': 27,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'anonymization_check',
      'old_id': '5b179843f2dd57000fe0bb25',
      'parent_bots': [],
      'pipelines': [
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 13,
          'input_params': {},
          'library': 'spacy',
          'module': 'pos',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'unique_name': 'Spacy Parts of Speech'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 19,
          'input_params': {},
          'library': 'nltk',
          'module': 'sentence_tokenization',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'unique_name': 'NLTK Sentence Tokenization'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 5,
          'input_params': {},
          'library': 'azure',
          'module': 'spell_check',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'unique_name': 'Azure Spell Check'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 31,
          'input_params': {},
          'library': 'nltk',
          'module': 'word_tokenization',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'unique_name': 'NLTK Word Tokenization'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 8,
          'input_params': {},
          'library': 'botman',
          'module': 'commonsense',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'unique_name': 'IMIbot Common Sense'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 7,
          'input_params': {},
          'library': 'botman',
          'module': 'custom_ners',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'unique_name': 'IMIbot Custom NER'
        },
        {
          '_id': '5b8901000e0ff44f7e071e4b',
          'cons': 'none',
          'contextual': false,
          'created_at': 1535705344000,
          'default': false,
          'description': '',
          'display_values': {},
          'id': 24,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'spacy',
          'module': 'chunking',
          'pros': 'free, no external calls, faster',
          'unique_name': 'Spacy Chunking',
          'updated_at': 1535705344000
        }
      ],
      'resource_uri': '/api/v1/bot/29/',
      'room_close_callback': false,
      'room_persistence_time': 5,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1551789936000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 30,
        'comment': 'Default active version',
        'id': 28,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 28,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'id': 1,
          'imageUrl': 'https://robohash.org/StarDroid.png',
          'name': 'StarDroid'
        }
      ],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzAsInJvbGUiOiJib3QifQ.qspM3QrnX39-wOchRrHTH608bUjtPHTai0o5SkawAc4',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'Qa_anonymization',
      'child_bots': [],
      'consent_categories': [],
      'consent_message': 'test consent message from qa',
      'created_at': 1528277481000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 0.003,
      'description': '',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 30,
      'integrations': {
        'ccsp_details': {
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': '',
            'id': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 30,
        'bot_id': 30,
        'comment': 'Default active version',
        'id': 28,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'Qa.anonymization',
      'old_id': '5b17a9e9f2dd57000fe0bb83',
      'parent_bots': [],
      'pipelines': [
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 13,
          'input_params': {},
          'library': 'spacy',
          'module': 'pos',
          'unique_name': 'Spacy Parts of Speech'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 19,
          'input_params': {},
          'library': 'nltk',
          'module': 'sentence_tokenization',
          'unique_name': 'NLTK Sentence Tokenization'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 5,
          'input_params': {},
          'library': 'azure',
          'module': 'spell_check',
          'unique_name': 'Azure Spell Check'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 31,
          'input_params': {},
          'library': 'nltk',
          'module': 'word_tokenization',
          'unique_name': 'NLTK Word Tokenization'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 8,
          'input_params': {},
          'library': 'botman',
          'module': 'commonsense',
          'unique_name': 'IMIbot Common Sense'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 7,
          'input_params': {},
          'library': 'botman',
          'module': 'custom_ners',
          'unique_name': 'IMIbot Custom NER'
        }
      ],
      'resource_uri': '/api/v1/bot/30/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1528277481000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {},
      'active_version_id': 0,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'id': 0,
          'imageUrl': 'https://cdn-images-1.medium.com/max/327/1*paQ7E6f2VyTKXHpR-aViFg.png',
          'name': 'StarBot10'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjEwLCJyb2xlIjoiYm90In0.-WoubbQ803yK5pnComdNMBDBxTnj6gKOVPNeM45xkB8',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'qabot_A',
      'child_bots': [],
      'consent_categories': [],
      'consent_message': '',
      'created_at': 1537770820000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'Testing bot',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': 'Welcome to the chatbot',
      'heading': '',
      'id': 210,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 210,
        'bot_id': 210,
        'comment': null,
        'id': null,
        'version': null
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'qabotA',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/210/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1537778075000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {},
      'active_version_id': 0,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'id': 0,
          'imageUrl': 'https://robohash.org/SilverDroid.png',
          'name': 'StarBot34'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjEzLCJyb2xlIjoiYm90In0.o383VN0D5uj-a1G75C6Ihq362Dm4eShbAWtFj9FDgKs',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'sda',
      'child_bots': [],
      'consent_categories': [],
      'consent_message': '',
      'created_at': 1537771215000,
      'created_by': 'unknown',
      'data_persistence_period': 30,
      'description': 'asd',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 213,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 213,
        'bot_id': 213,
        'comment': null,
        'id': null,
        'version': null
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'sad/lml;lkl;nmlnkmkl',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/213/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1537771215000,
      'updated_by': 'unknown'
    },
    {
      'active_version': {},
      'active_version_id': 0,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'id': 0,
          'imageUrl': 'https://robohash.org/SilverDroid.png',
          'name': 'StarBot47'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjE0LCJyb2xlIjoiYm90In0.wopI1BjtHp194J6K_GJLg_SvVrWiewSdhJ5EyfcHpiw',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'sad',
      'child_bots': [],
      'consent_categories': [],
      'consent_message': '',
      'created_at': 1537771308000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'sad',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 214,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': '',
            'id': ''
          },
          'googlehome': {
            'enabled': true,
            'project': 'sdsdf'
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 214,
        'bot_id': 214,
        'comment': '',
        'id': 354,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'da',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/214/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1540064518000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {},
      'active_version_id': 0,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'id': 0,
          'imageUrl': 'https://robohash.org/SilverDroid.png',
          'name': 'StarBot25'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjE3LCJyb2xlIjoiYm90In0.wT_0DV9FXqMb_opn0wBGL5m6AfYf0NIrfcHWBuboxBI',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'dsf',
      'child_bots': [],
      'consent_categories': [],
      'consent_message': '',
      'created_at': 1537771686000,
      'created_by': 'unknown',
      'data_persistence_period': 30,
      'description': 'dsf',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 217,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 217,
        'bot_id': 217,
        'comment': null,
        'id': null,
        'version': null
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'dsf',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/217/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1537771686000,
      'updated_by': 'unknown'
    },
    {
      'active_version': {},
      'active_version_id': 0,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/IntelliBot.png',
          'name': 'StarBot30'
        },
        {
          'imageUrl': 'https://robohash.org/IntelliBot.png',
          'name': 'StarBot30'
        },
        {
          'imageUrl': 'https://robohash.org/SilverDroid.png',
          'name': 'StarBot77'
        },
        {
          'imageUrl': 'asdasd',
          'name': 'asdsd'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjI3LCJyb2xlIjoiYm90In0.5ZnxiApEQB5O-gMXgpFo-9Vi0aRDLHdvIMtke6DIasY',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'test1234567788',
      'child_bots': [
        24,
        19,
        25,
        26
      ],
      'consent_categories': [],
      'consent_message': '20',
      'created_at': 1537783912000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'kfhkakhfk',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 227,
      'integrations': {},
      'is_manager': true,
      'latest_version': {
        '_id': 227,
        'bot_id': 227,
        'comment': null,
        'id': null,
        'version': null
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'alfkahdklah',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/227/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1539949291000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 238,
        'comment': 'ee',
        'id': 634,
        'is_ui_view': false,
        'version': 15
      },
      'active_version_id': 634,
      'advanced_data_protection': true,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://www.gstatic.com/webp/gallery3/2_webp_a.png',
          'name': 'StarBot'
        }
      ],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjM4LCJyb2xlIjoiYm90In0.2G2tp-lMg1xKtf_sMKybwS4dG61VZR9LYvNcrwxLt7Q',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'testingbotfromdev',
      'child_bots': [
        13,
        18,
        17,
        16,
        19
      ],
      'consent_categories': [],
      'consent_message': 'Test consent message',
      'created_at': 1538121670000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'testing bot',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': 'lkjlksdmfasd',
      'heading': '',
      'id': 238,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': 'asdasda',
            'enabled': true
          },
          'imichat': {
            'access-token': '8ae392b1-d262-4385-9fd2-4aff0edbbc13',
            'domain': 'imibot.imi.chat',
            'enabled': true,
            'service-key': ' a0667b8c-3242-4217-9b4d-5162ae8d7356'
          }
        },
        'channels': {
          'alexa': {
            'enabled': true,
            'skillId': 'asdas'
          },
          'facebook': {
            'enabled': true,
            'facebook-token': 'EAADdQ7jKozwBAPezkZBJob6zKlUV1p5SVvzcZAMZCZCDdnZA2VSU3nbAnp2hdzzzBmD01o1W7DbC2aKZBNB589ZBlV35h1Yu05mqp6pc78WdZACYpwSMGZB7TSOgKoQenhZBa5XEpU4p3dp3TFkwlvZAUgaVpfwM86zrZCH425Tp5KCK1QZDZD',
            'facebooktoggle': 'true',
            'id': '314363828988731'
          },
          'googlehome': {
            'enabled': true,
            'project': 'adsasda'
          },
          'line': {
            'channel_access_token': 'adad',
            'channel_id': 'asdas',
            'channel_secret': 'sdasd',
            'enabled': true
          },
          'skype': {
            'client_id': 'a',
            'client_secret': 'a',
            'enabled': true,
            'skype-page-name': 'a'
          },
          'slack': {
            'enabled': true,
            'slack-token': 'asdas',
            'verification-token': 'sadasd'
          },
          'viber': {
            'bot_auth_token': 'adsda',
            'bot_avatar': 'asda',
            'bot_name': 'asda',
            'enabled': true
          },
          'web': {
            'enabled': true,
            'speech_model': 'asdas',
            'speech_tts': 'asdas',
            'speech_url': 'asda'
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': 'IM20051444',
            'appSecret': 'aD69OwcY',
            'enabled': true,
            'endpoint': 'messagingapi',
            'send_via_connect': 'true',
            'serviceKey': 'f6e50f7b-2bfd-11e8-bf0b-0213261164bb',
            'streamName': 'bot'
          }
        }
      },
      'is_manager': true,
      'latest_version': {
        '_id': 238,
        'bot_id': 238,
        'comment': 'sdasdad',
        'id': 635,
        'version': 16
      },
      'logo': 'https://www.gstatic.com/webp/gallery3/2_webp_a.png',
      'name': 'testingbot',
      'old_id': '5afeb4086b1b3b000f53817d',
      'parent_bots': [],
      'pipelines': [
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 8,
          'input_params': {},
          'library': 'botman',
          'module': 'commonsense',
          'unique_name': 'IMIbot Common Sense'
        },
        {
          'contextual': false,
          'created_at': 1535705344,
          'default': true,
          'display_values': {},
          'id': 7,
          'input_params': {},
          'library': 'botman',
          'module': 'custom_ners',
          'resource_uri': '/api/v1/pipelinemodule/7/',
          'unique_name': 'IMIbot Custom NER',
          'updated_at': 1535705344
        }
      ],
      'resource_uri': '/api/v1/bot/238/',
      'room_close_callback': false,
      'room_persistence_time': 30,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1552630873000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 241,
        'comment': 'Default Active Version',
        'id': 305,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 305,
      'advanced_data_protection': true,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'id': 0,
          'imageUrl': 'https://www.gstatic.com/webp/gallery3/2_webp_a.png',
          'name': 'StarBot'
        }
      ],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjQxLCJyb2xlIjoiYm90In0.31cjOd7hiRAUDXnex5nuzxU3NpiFov-FaZaBS4UZjkk',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'testingbotfromdevtosdf111111',
      'child_bots': [
        18,
        17,
        16,
        19
      ],
      'consent_categories': [],
      'consent_message': 'Test consent message',
      'created_at': 1538131880000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'testing bot',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': 'lkjlksdmfasd',
      'heading': '',
      'id': 241,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': ''
          },
          'imichat': {
            'access-token': '8ae392b1-d262-4385-9fd2-4aff0edbbc13',
            'domain': 'imibot.imi.chat',
            'enabled': false,
            'service-key': ' a0667b8c-3242-4217-9b4d-5162ae8d7356'
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': true,
            'facebook-token': 'EAADdQ7jKozwBAPezkZBJob6zKlUV1p5SVvzcZAMZCZCDdnZA2VSU3nbAnp2hdzzzBmD01o1W7DbC2aKZBNB589ZBlV35h1Yu05mqp6pc78WdZACYpwSMGZB7TSOgKoQenhZBa5XEpU4p3dp3TFkwlvZAUgaVpfwM86zrZCH425Tp5KCK1QZDZD',
            'facebooktoggle': 'true',
            'id': '314363828988731'
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': ''
          },
          'skype': {
            'client_id': 'a',
            'client_secret': 'a',
            'enabled': true,
            'skype-page-name': 'a'
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': 'IM20051444',
            'appSecret': 'aD69OwcY',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': 'true',
            'serviceKey': 'f6e50f7b-2bfd-11e8-bf0b-0213261164bb',
            'streamName': 'bot'
          }
        }
      },
      'is_manager': true,
      'latest_version': {
        '_id': 241,
        'bot_id': 241,
        'comment': 'Default Active Version',
        'id': 305,
        'version': 1
      },
      'logo': 'https://www.gstatic.com/webp/gallery3/2_webp_a.png',
      'name': 'testingbot',
      'old_id': '5afeb4086b1b3b000f53817d',
      'parent_bots': [],
      'pipelines': [
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 8,
          'input_params': {},
          'library': 'botman',
          'module': 'commonsense',
          'unique_name': 'IMIbot Common Sense'
        },
        {
          'contextual': false,
          'created_at': 1535705344,
          'default': true,
          'display_values': {},
          'id': 7,
          'input_params': {},
          'library': 'botman',
          'module': 'custom_ners',
          'resource_uri': '/api/v1/pipelinemodule/7/',
          'unique_name': 'IMIbot Custom NER',
          'updated_at': 1535705344
        },
        {
          'contextual': false,
          'created_at': 1535705344000,
          'default': false,
          'display_values': {},
          'id': 10,
          'input_params': {},
          'library': 'spacy',
          'module': 'quesdetect',
          'resource_uri': '/api/v1/pipelinemodule/10/',
          'unique_name': 'Spacy Question Detection',
          'updated_at': 1535705344000
        }
      ],
      'resource_uri': '/api/v1/bot/241/',
      'room_close_callback': false,
      'room_persistence_time': 30,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1539208818000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 242,
        'comment': '',
        'id': 318,
        'is_ui_view': false,
        'version': 4
      },
      'active_version_id': 318,
      'advanced_data_protection': true,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'id': 0,
          'imageUrl': 'https://www.gstatic.com/webp/gallery3/2_webp_a.png',
          'name': 'StarBot'
        }
      ],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjQyLCJyb2xlIjoiYm90In0.rXkK0rhk4PlyGVZsXfBiy4Po3bcqtReocA1jzz5le-U',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'testingbot123fromdtos',
      'child_bots': [
        18,
        17,
        16,
        19
      ],
      'consent_categories': [],
      'consent_message': 'Test consent message',
      'created_at': 1538132407000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot testing bot ',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': 'lkjlksdmfasd',
      'heading': '',
      'id': 242,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': ''
          },
          'imichat': {
            'access-token': '8ae392b1-d262-4385-9fd2-4aff0edbbc13',
            'domain': 'imibot.imi.chat',
            'enabled': false,
            'service-key': ' a0667b8c-3242-4217-9b4d-5162ae8d7356'
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': true,
            'facebook-token': 'EAADdQ7jKozwBAPezkZBJob6zKlUV1p5SVvzcZAMZCZCDdnZA2VSU3nbAnp2hdzzzBmD01o1W7DbC2aKZBNB589ZBlV35h1Yu05mqp6pc78WdZACYpwSMGZB7TSOgKoQenhZBa5XEpU4p3dp3TFkwlvZAUgaVpfwM86zrZCH425Tp5KCK1QZDZD',
            'facebooktoggle': 'true',
            'id': '314363828988731'
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': ''
          },
          'skype': {
            'client_id': 'a',
            'client_secret': 'a',
            'enabled': true,
            'skype-page-name': 'a'
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': 'IM20051444',
            'appSecret': 'aD69OwcY',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': 'true',
            'serviceKey': 'f6e50f7b-2bfd-11e8-bf0b-0213261164bb',
            'streamName': 'bot'
          }
        }
      },
      'is_manager': true,
      'latest_version': {
        '_id': 242,
        'bot_id': 242,
        'comment': 'sandeep test\n',
        'id': 319,
        'version': 5
      },
      'logo': 'https://www.gstatic.com/webp/gallery3/2_webp_a.png',
      'name': 'testingbot',
      'old_id': '5afeb4086b1b3b000f53817d',
      'parent_bots': [],
      'pipelines': [
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 8,
          'input_params': {},
          'library': 'botman',
          'module': 'commonsense',
          'unique_name': 'IMIbot Common Sense'
        },
        {
          'contextual': false,
          'created_at': 1535705344,
          'default': true,
          'display_values': {},
          'id': 7,
          'input_params': {},
          'library': 'botman',
          'module': 'custom_ners',
          'resource_uri': '/api/v1/pipelinemodule/7/',
          'unique_name': 'IMIbot Custom NER',
          'updated_at': 1535705344
        },
        {
          'contextual': false,
          'created_at': 1535705344000,
          'default': false,
          'display_values': {},
          'id': 10,
          'input_params': {},
          'library': 'spacy',
          'module': 'quesdetect',
          'resource_uri': '/api/v1/pipelinemodule/10/',
          'unique_name': 'Spacy Question Detection',
          'updated_at': 1535705344000
        }
      ],
      'resource_uri': '/api/v1/bot/242/',
      'room_close_callback': false,
      'room_persistence_time': 30,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1539211266000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 259,
        'comment': 'Default Active Version',
        'id': 334,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 334,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'dasd',
          'name': 'sad'
        },
        {
          'imageUrl': 'https://robohash.org/SilverDroid.png',
          'name': 'StarBot44'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjU5LCJyb2xlIjoiYm90In0.TZUxlfGVNOgMKtMj_Hg_xG8d6cb3KpF5v1FxvYGYDvg',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'sdaasdasdasd',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': 'sadsa',
      'created_at': 1539600860000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'da',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 259,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': true,
            'facebook-token': 'asdasda',
            'id': 'asdas'
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 259,
        'bot_id': 259,
        'comment': 'Default Active Version',
        'id': 334,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'sadsd',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/259/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1539834610000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 260,
        'comment': 'Default Active Version',
        'id': 335,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 335,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/SilverDroid.png',
          'name': 'StarBot58'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjYwLCJyb2xlIjoiYm90In0.WArrYdALdDzGCOWR6P5giOyaDFxBlPo8YAbtgyt00cg',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'displaycheck',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': 'fgh',
      'created_at': 1539601801000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'vbv',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 260,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 260,
        'bot_id': 260,
        'comment': 'Default Active Version',
        'id': 335,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'displaycheck',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/260/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1539601802000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 262,
        'comment': 'Default Active Version',
        'id': 337,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 337,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'id': 1,
          'imageUrl': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
          'name': 'test'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjYyLCJyb2xlIjoiYm90In0.ehZpYrZtui8Q2LuOriTwmsRToYwg2NF0F8cyG4ebiws',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'QABOTVinitha101',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1539601998000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'Play Game and win CouponsaSasAS',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': 'test error message',
      'first_message': 'Hi.. Welcome to test world. I am testing bot.',
      'heading': 'Welcome to the Game World',
      'id': 262,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': 'AASasASas',
            'enabled': true
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': 'EAAgbTYpmGGMBAD6Wu4ZAjIWDUD4UVu7hr9gQw2FqdPy0ILNXJpcPhwOWZBFYFVIgjZAR8t2jDrZAyhYO5KjgBz2wbsmSaMkkkdjddgzkWc2I2NXmxLUgg3xguYzogq3CNBAgF2T9ZBEOxS1zP579bHDtDzhttTOcaENgg5DemfYLac9iRRctaXJlT9WQsQIsZD',
            'id': '2062050427249385'
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 262,
        'bot_id': 262,
        'comment': 'Default Active Version',
        'id': 337,
        'version': 1
      },
      'logo': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
      'name': 'testing BOT VinithaASaASas',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [
        {
          'contextual': false,
          'default': true,
          'id': 'IMIbot Common Sense',
          'inputParams': {},
          'library': 'botman',
          'module': 'commonsense',
          'type': 'item'
        },
        {
          'contextual': false,
          'created_at': 1536651184000,
          'default': true,
          'display_values': {},
          'id': 5,
          'input_params': {},
          'library': 'azure',
          'module': 'spell_check',
          'resource_uri': '/api/v1/pipelinemodule/5/',
          'unique_name': 'Azure Spell Check',
          'updated_at': 1536651184000
        },
        {
          'contextual': false,
          'default': true,
          'id': 'IMIbot Custom NER',
          'inputParams': {},
          'library': 'botman',
          'module': 'custom_ners',
          'type': 'item'
        }
      ],
      'resource_uri': '/api/v1/bot/262/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 0,
      'updated_at': 1543228404000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 263,
        'comment': 'Default Active Version',
        'id': 338,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 338,
      'advanced_data_protection': true,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': true,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/StarDroid.png',
          'name': 'StarBot86'
        }
      ],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjYzLCJyb2xlIjoiYm90In0.J0e1yN4pJpeUlosssUjxVuTu6HCmiJuUVPWdQ3JENSk',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'check_901',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': 'test consent ',
      'created_at': 1539679936000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 1,
      'description': 'test bot',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 263,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 263,
        'bot_id': 263,
        'comment': 'Default Active Version',
        'id': 338,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'check901',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/263/',
      'room_close_callback': false,
      'room_persistence_time': 1,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1539679944000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 265,
        'comment': 'Default Active Version',
        'id': 341,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 341,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/SilverDroid.png',
          'name': 'StarBot91'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjY1LCJyb2xlIjoiYm90In0.HU6u6dgiTBuNFucluxpr4sxBGpSED0DEK-H_CNhoLj0',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'reportCheck',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': 'test consent message',
      'created_at': 1539772222000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 1,
      'description': 'test bot',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 265,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': true,
            'facebook-token': 'asdasd',
            'id': 'sadasd'
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'slack': {
            'enabled': false,
            'slack-token': '',
            'verification-token': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': true
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 265,
        'bot_id': 265,
        'comment': 'Default Active Version',
        'id': 341,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'reportcheck',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/265/',
      'room_close_callback': false,
      'room_persistence_time': 1,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1550565703000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 266,
        'comment': 'Default Active Version',
        'id': 342,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 342,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/SmartBot.png',
          'name': 'StarBot92'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjY2LCJyb2xlIjoiYm90In0.DxIEzGntp60PCUKPrR4SwmNPlqvnVxVKJ_xQ_87zQZw',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'gentemplateUI',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1539845514000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'gentemplate ui',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 266,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 266,
        'bot_id': 266,
        'comment': 'Default Active Version',
        'id': 342,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'gentemplate ui',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/266/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1539845514000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 267,
        'comment': 'Default Active Version',
        'id': 343,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 343,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/SilverDroid.png',
          'name': 'StarBot95'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjY3LCJyb2xlIjoiYm90In0.RkvMCtsxxSa9i3i-cpmGw5qyEU-B9_veEFQK7lr5hFg',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'gentemplateTest',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1539862920000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'gentemplateTest',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 267,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': true,
            'facebook-token': 'sadsasd',
            'id': 'sadsa'
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 267,
        'bot_id': 267,
        'comment': 'Default Active Version',
        'id': 343,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'gentemplateTest',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/267/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1539922409000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 268,
        'comment': 'Default Active Version',
        'id': 344,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 344,
      'advanced_data_protection': true,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': true,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/IntelliBot.png',
          'name': 'StarBot71'
        }
      ],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjY4LCJyb2xlIjoiYm90In0.wu07ZmSqOa62Gky0iMk7Uk5FxYIQYrWp6PebIZkwkG4',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'GDPRcheck',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': 'test consent mesage',
      'created_at': 1539928971000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 0.0007,
      'description': 'test bot',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 268,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 268,
        'bot_id': 268,
        'comment': 'Default Active Version',
        'id': 344,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'GDPRcheck',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/268/',
      'room_close_callback': false,
      'room_persistence_time': 1,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1539929745000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 269,
        'comment': 'Default Active Version',
        'id': 345,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 345,
      'advanced_data_protection': true,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': true,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/SmartBot.png',
          'name': 'StarBot97'
        }
      ],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjY5LCJyb2xlIjoiYm90In0.V5TxSvXDRgxVCZT2G6kHyc4PNuaLi24VEVTYcnZxgcA',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'advanceddata',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': 'test messsage',
      'created_at': 1539935097000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 0.0007,
      'description': 'test bot',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 269,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': '',
            'id': ''
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 269,
        'bot_id': 269,
        'comment': 'Default Active Version',
        'id': 345,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'advanceddata',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/269/',
      'room_close_callback': false,
      'room_persistence_time': 1,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1540288136000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 270,
        'comment': 'Default Active Version',
        'id': 346,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 346,
      'advanced_data_protection': true,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': true,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://cdn-images-1.medium.com/max/327/1*paQ7E6f2VyTKXHpR-aViFg.png',
          'name': 'StarBot27'
        }
      ],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjcwLCJyb2xlIjoiYm90In0.QUWMqg30SnNYL0pOBpsowswad9j2DzwgmMEaONRWWdA',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'gentemplateqa1',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': 'test consent message',
      'created_at': 1539936603000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'test bot',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 270,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': '',
            'id': ''
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'viber': {
            'bot_auth_token': 'asdasa',
            'bot_avatar': 'sadasd',
            'bot_name': 'sdasd',
            'enabled': true
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 270,
        'bot_id': 270,
        'comment': 'Default Active Version',
        'id': 346,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'gentemplateqa1',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/270/',
      'room_close_callback': true,
      'room_persistence_time': 1,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1550567091000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 271,
        'comment': 'Default Active Version',
        'id': 347,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 347,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://cdn-images-1.medium.com/max/327/1*paQ7E6f2VyTKXHpR-aViFg.png',
          'name': 'StarBot77'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjcxLCJyb2xlIjoiYm90In0.bZZoDiWRwecps3BlQ5Ki55Aqx4iZY5qHOiif6RTT07A',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'maskingtest',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': 'test consent',
      'created_at': 1540186660000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 1,
      'description': 'test bot',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 271,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': 'imibot.imi.chat',
            'domain': '764831c6-dacb-4362-8934-9eeca38203f0',
            'enabled': true,
            'service-key': '0a5a413e-a49f-40ab-a813-c72240f26b59'
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': '',
            'id': ''
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'slack': {
            'enabled': false,
            'slack-token': '',
            'verification-token': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': 'r',
            'appSecret': 'rr',
            'enabled': true,
            'endpoint': 'messagingapi',
            'send_via_connect': 'r',
            'serviceKey': 'r',
            'streamName': 'r'
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 271,
        'bot_id': 271,
        'comment': 'Default Active Version',
        'id': 347,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'maskingtestasdadas',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/271/',
      'room_close_callback': false,
      'room_persistence_time': 1,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1554109389000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 272,
        'comment': '',
        'id': 539,
        'is_ui_view': false,
        'version': 4
      },
      'active_version_id': 539,
      'advanced_data_protection': true,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': true,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://cdn-images-1.medium.com/max/327/1*paQ7E6f2VyTKXHpR-aViFg.png',
          'name': 'StarBot11'
        }
      ],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjcyLCJyb2xlIjoiYm90In0.2953kZ5Oc6SSGSor_6NJ2fDV9k9ZMPhH8RqxljWXuAU',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'NewTestingBOT',
      'child_bots': [
        24,
        23
      ],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': 'this is test consent message',
      'created_at': 1540371719000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 0.0007,
      'description': 'Testing BOT for QA',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': 'Sorry, we could not process',
      'first_message': 'Hi, how can I help you?',
      'heading': 'Testing sensitive message',
      'id': 272,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '0a5a413e-a49f-40ab-a813-c72240f26b59',
            'domain': 'imibot.imi.chat',
            'enabled': true,
            'service-key': '764831c6-dacb-4362-8934-9eeca38203f0'
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': true,
            'facebook-token': 'EAAgFQ9olfZAoBAOBSDJLdZAmVcNIorfyJacDZAmL7pZCg8QQWdB4IV46KaFmUjoOakCFpB8NX3vvKq7RwVDo1r6JiR8uogLLeG3tJ7a8PLwkguCh7Hz1TZCofBXh6a9SISejNRiYHPKU4cgwASVZA9yAm4U34wTXOYQsVNZABrYZAQZDZD',
            'id': '267604503942769'
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '0b500834-a839-4d92-a197-dae4a0994bc8',
            'client_secret': 'xphACY53qhvdYRNU544{~+?',
            'enabled': true,
            'skype-page-name': 'Testing Bot Gen Templates'
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': 'sdasds',
            'appSecret': 'sadas',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': 'sdaas',
            'serviceKey': 'sadsas',
            'streamName': 'adsas'
          }
        }
      },
      'is_manager': true,
      'latest_version': {
        '_id': 272,
        'bot_id': 272,
        'comment': '',
        'id': 539,
        'version': 4
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'New Testing BOT',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [
        {
          'cons': '',
          'contextual': false,
          'created_at': 1536651184000,
          'default': false,
          'description': '',
          'display_values': {},
          'id': 10,
          'input_params': {},
          'is_paid': 'paid',
          'library': 'spacy',
          'module': 'quesdetect',
          'pros': '',
          'resource_uri': '/api/v1/pipelinemodule/10/',
          'unique_name': 'Spacy Question Detection',
          'updated_at': 1536651184000
        },
        {
          'cons': '',
          'contextual': false,
          'created_at': 1536651184000,
          'default': false,
          'description': '',
          'display_values': {},
          'id': 6,
          'input_params': {},
          'is_paid': 'paid',
          'library': 'google',
          'module': 'parsetree',
          'pros': '',
          'resource_uri': '/api/v1/pipelinemodule/6/',
          'unique_name': 'Google Parse Tree',
          'updated_at': 1536651184000
        },
        {
          'cons': '',
          'contextual': false,
          'created_at': 1536651184000,
          'default': false,
          'description': '',
          'display_values': {},
          'id': 12,
          'input_params': {
            'model_type': 'mitie_sklearn'
          },
          'is_paid': 'paid',
          'library': 'smalltalk',
          'module': 'rasanlp',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'pros': '',
          'resource_uri': '/api/v1/pipelinemodule/12/',
          'unique_name': 'RASA CommonSense',
          'updated_at': 1536651184000
        },
        {
          'cons': '',
          'contextual': false,
          'created_at': 1536651184000,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 19,
          'input_params': {},
          'is_paid': 'paid',
          'library': 'nltk',
          'module': 'sentence_tokenization',
          'pros': '',
          'resource_uri': '/api/v1/pipelinemodule/19/',
          'unique_name': 'NLTK Sentence Tokenization',
          'updated_at': 1536651184000
        },
        {
          'cons': '',
          'contextual': false,
          'created_at': 1536651184000,
          'default': false,
          'description': '',
          'display_values': {},
          'id': 18,
          'input_params': {},
          'is_paid': 'paid',
          'library': 'spacy',
          'module': 'word_tokenization',
          'pros': '',
          'resource_uri': '/api/v1/pipelinemodule/18/',
          'unique_name': 'Spacy Word Tokenization',
          'updated_at': 1536651184000
        },
        {
          'cons': '',
          'contextual': false,
          'created_at': 1536651184000,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 5,
          'input_params': {},
          'is_paid': 'paid',
          'library': 'azure',
          'module': 'spell_check',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'pros': '',
          'resource_uri': '/api/v1/pipelinemodule/5/',
          'unique_name': 'Azure Spell Check',
          'updated_at': 1536651184000
        }
      ],
      'resource_uri': '/api/v1/bot/272/',
      'room_close_callback': true,
      'room_persistence_time': 8,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1550566750000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 276,
        'comment': 'Default Active Version',
        'id': 363,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 363,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/StarDroid.png',
          'name': 'StarBot75'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mjc2LCJyb2xlIjoiYm90In0.olUXeO8GUzFfGaoDLLptMDZe9fuMlg6RUYF9E9mCZKA',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'dsad',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1540997895000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'asdas',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 276,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 276,
        'bot_id': 276,
        'comment': 'Default Active Version',
        'id': 363,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'asdas',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/276/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1540997895000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 277,
        'comment': 'testing version list component\n',
        'id': 367,
        'is_ui_view': false,
        'version': 2
      },
      'active_version_id': 367,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/SmartBot.png',
          'name': 'StarBot50'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mjc3LCJyb2xlIjoiYm90In0.qcF_8umnrrx_HTsVWTnlloSljIQwthzrLejVESb_JpA',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'northaasdasdas',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '12',
      'created_at': 1541054397000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'yug',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 277,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': 'test',
            'enabled': true
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': true,
            'facebook-token': 'ASDA',
            'id': 'SADA'
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': 'ADS',
            'client_secret': 'ASD',
            'enabled': true,
            'skype-page-name': 'ASDASD'
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': 'sas',
            'appSecret': 'AS',
            'enabled': true,
            'endpoint': 'messagingapi',
            'send_via_connect': 'as',
            'serviceKey': 'as',
            'streamName': 'SA'
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 277,
        'bot_id': 277,
        'comment': 'testing version list component\n',
        'id': 367,
        'version': 2
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'Northa asdasdas',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/277/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1541279875000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 335,
        'comment': 'Default Active Version',
        'id': 432,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 432,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/SilverDroid.png',
          'name': 'StarBot41'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzM1LCJyb2xlIjoiYm90In0.wUPFNW5vsNQmJaAZ2fvXQ6Z9Llw4Ko8fmy7T-BIqkJk',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'sdasd',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1543399965000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'asdasda',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 335,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 335,
        'bot_id': 335,
        'comment': 'Default Active Version',
        'id': 432,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'saadasd',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/335/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1543399972000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 336,
        'comment': 'Default Active Version',
        'id': 433,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 433,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/SmartDroid.png',
          'name': 'StarBot63'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzM2LCJyb2xlIjoiYm90In0.WCxtswU6Zaq_IDb5inehcOXyLqYK4d6F3BqLBQ8KUwI',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'testavator',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1543400150000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'asdasd',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 336,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': true,
            'facebook-token': 'sandee',
            'id': 'asdas'
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': 'asda',
            'client_secret': 'asdas',
            'enabled': true,
            'skype-page-name': 'asdasd'
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 336,
        'bot_id': 336,
        'comment': 'Default Active Version',
        'id': 433,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'asdad',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/336/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1543404383000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 337,
        'comment': 'This is s long comment This is s long comment This is s long comment This is s long comment This is s long comment This is s long comment This is s long comment This is s long comment This is s long comment This is s long comment',
        'id': 450,
        'is_ui_view': false,
        'version': 4
      },
      'active_version_id': 450,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/SmartBot.png',
          'name': 'StarBot49'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzM3LCJyb2xlIjoiYm90In0.g7NZ9_0uLLmZUeeG6usgafY5yDUEq2G6GzWYWfp2Kys',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'testbot',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1543404545000,
      'created_by': 'Testing AdminMultiple',
      'data_persistence_period': 30,
      'description': 'Testing Bot Search in DB',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 337,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': '',
            'id': ''
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 337,
        'bot_id': 337,
        'comment': 'This is 12th',
        'id': 458,
        'version': 12
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'Test Bot',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [
        {
          'cons': '',
          'contextual': false,
          'created_at': 1536651184000,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 7,
          'input_params': {},
          'is_paid': 'paid',
          'library': 'botman',
          'module': 'custom_ners',
          'pros': '',
          'resource_uri': '/api/v1/pipelinemodule/7/',
          'unique_name': 'IMIbot Custom NER',
          'updated_at': 1536651184000
        }
      ],
      'resource_uri': '/api/v1/bot/337/',
      'room_close_callback': false,
      'room_persistence_time': 120,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1544680599000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 338,
        'comment': 'Default Active Version',
        'id': 435,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 435,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/SilverDroid.png',
          'name': 'StarBot76'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzM4LCJyb2xlIjoiYm90In0.E9YKjX8J-zKCrhGKGV0uccp6sk5qtVu6UdFW41abp98',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'asdasd',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1543414808000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'sadas',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 338,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 338,
        'bot_id': 338,
        'comment': 'Default Active Version',
        'id': 435,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'testing pipeline',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [
        {
          'cons': '',
          'contextual': false,
          'created_at': 1536651184000,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 5,
          'input_params': {},
          'is_paid': 'paid',
          'library': 'azure',
          'module': 'spell_check',
          'pros': '',
          'resource_uri': '/api/v1/pipelinemodule/5/',
          'unique_name': 'Azure Spell Check',
          'updated_at': 1536651184000
        },
        {
          'cons': '',
          'contextual': false,
          'created_at': 1536651184000,
          'default': false,
          'description': '',
          'display_values': {},
          'id': 10,
          'input_params': {},
          'is_paid': 'paid',
          'library': 'spacy',
          'module': 'quesdetect',
          'pros': '',
          'resource_uri': '/api/v1/pipelinemodule/10/',
          'unique_name': 'Spacy Question Detection',
          'updated_at': 1536651184000
        },
        {
          'cons': '',
          'contextual': false,
          'created_at': 1536651184000,
          'default': false,
          'description': '',
          'display_values': {
            'image_type': {
              'display_value': 'Natural Image',
              'type': 'text'
            }
          },
          'id': 11,
          'input_params': {
            'image_type': 'natural_image'
          },
          'is_paid': 'paid',
          'library': 'google',
          'module': 'ocr',
          'pros': '',
          'resource_uri': '/api/v1/pipelinemodule/11/',
          'unique_name': 'Google OCR',
          'updated_at': 1536651184000
        }
      ],
      'resource_uri': '/api/v1/bot/338/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1543926431000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 339,
        'comment': 'Default Active Version',
        'id': 439,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 439,
      'advanced_data_protection': true,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/SilverDroid.png',
          'name': 'StarBot64'
        }
      ],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzM5LCJyb2xlIjoiYm90In0.Q-xGqmgK4KsiOq9SVTHEdXpObCcRZ4M2PJbClGm6jwY',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'xz',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1543488299000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 0.003,
      'description': 'xzx',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 339,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 339,
        'bot_id': 339,
        'comment': 'Default Active Version',
        'id': 439,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'x z',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [
        {
          'cons': '',
          'contextual': false,
          'created_at': 1536651184000,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 5,
          'input_params': {},
          'is_paid': 'paid',
          'library': 'azure',
          'module': 'spell_check',
          'pros': '',
          'resource_uri': '/api/v1/pipelinemodule/5/',
          'unique_name': 'Azure Spell Check',
          'updated_at': 1536651184000
        }
      ],
      'resource_uri': '/api/v1/bot/339/',
      'room_close_callback': false,
      'room_persistence_time': 5,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1551790444000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {},
      'active_version_id': 0,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/SilverDroid.png',
          'name': 'StarBot48'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzQ3LCJyb2xlIjoiYm90In0.UD_qqrP3KcY3hygXZ5u9yohKRxi5LD3gsNGuklpXx8A',
      'bot_metadata': {},
      'bot_type': 'intelligent',
      'bot_unique_name': 'ttstest',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1543994645000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'This is a test',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 347,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 347,
        'bot_id': 347,
        'comment': null,
        'id': null,
        'version': null
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'TTS Test',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [
        {
          'cons': '',
          'contextual': false,
          'created_at': 1536651184000,
          'default': false,
          'description': '',
          'display_values': {
            'filetype': {
              'content': [
                'mp3'
              ],
              'default': 'mp3',
              'display_value': 'Output format',
              'type': 'dropdown'
            },
            'gender': {
              'content': [
                'Female',
                'Male',
                'Male',
                'Female',
                'Male',
                'Female',
                'Male',
                'Male',
                'Female',
                'Female',
                'Male',
                'Male',
                'Female',
                'Female',
                'Female',
                'Female',
                'Female',
                'Female',
                'Male',
                'Male',
                'Female',
                'Female',
                'Male',
                'Female',
                'Female',
                'Male',
                'Female',
                'Female',
                'Male',
                'Female',
                'Male',
                'Female',
                'Female',
                'Female',
                'Male',
                'Female',
                'Female',
                'Male',
                'Male',
                'Female',
                'Female',
                'Male',
                'Male',
                'Male',
                'Male',
                'Male',
                'Female',
                'Female',
                'Male',
                'Female',
                'Female',
                'Male',
                'Female',
                'Female',
                'Female',
                'Female',
                'Male',
                'Female',
                'Male',
                'Female',
                'Male',
                'Female',
                'Male',
                'Male',
                'Female',
                'Male',
                'Male',
                'Female',
                'Male',
                'Female',
                'Female',
                'Male',
                'Female',
                'Female',
                'Male',
                'Female',
                'Female',
                'Male'
              ],
              'default': 'Male',
              'display_value': 'Gender',
              'type': 'dropdown'
            },
            'lang': {
              'content': [
                'ar-EG*',
                'ar-SA',
                'bg-BG',
                'ca-ES',
                'cs-CZ',
                'da-DK',
                'de-AT',
                'de-CH',
                'de-DE',
                'de-DE',
                'de-DE',
                'el-GR',
                'en-AU',
                'en-AU',
                'en-CA',
                'en-CA',
                'en-GB',
                'en-GB',
                'en-GB',
                'en-IE',
                'en-IN',
                'en-IN',
                'en-IN',
                'en-US',
                'en-US',
                'en-US',
                'es-ES',
                'es-ES',
                'es-ES',
                'es-MX',
                'es-MX',
                'fi-FI',
                'fr-CA',
                'fr-CA',
                'fr-CH',
                'fr-FR',
                'fr-FR',
                'fr-FR',
                'he-IL',
                'hi-IN',
                'hi-IN',
                'hi-IN',
                'hr-HR',
                'hu-HU',
                'id-ID',
                'it-IT',
                'it-IT',
                'ja-JP',
                'ja-JP',
                'ja-JP',
                'ko-KR',
                'ms-MY',
                'nb-NO',
                'nl-NL',
                'pl-PL',
                'pt-BR',
                'pt-BR',
                'pt-PT',
                'ro-RO',
                'ru-RU',
                'ru-RU',
                'ru-RU',
                'sk-SK',
                'sl-SI',
                'sv-SE',
                'ta-IN',
                'th-TH',
                'tr-TR',
                'vi-VN',
                'zh-CN',
                'zh-CN',
                'zh-CN',
                'zh-HK',
                'zh-HK',
                'zh-HK',
                'zh-TW',
                'zh-TW',
                'zh-TW'
              ],
              'default': 'en-GB',
              'display_value': 'Language',
              'type': 'dropdown'
            },
            'voice_ms': {
              'content': [
                'ar-EG, Hoda',
                'ar-SA, Naayf',
                'bg-BG, Ivan',
                'ca-ES, HerenaRUS',
                'cs-CZ, Jakub',
                'da-DK, HelleRUS',
                'de-AT, Michael',
                'de-CH, Karsten',
                'de-DE, Hedda',
                'de-DE, HeddaRUS',
                'de-DE, Stefan, Apollo',
                'el-GR, Stefanos',
                'en-AU, Catherine',
                'en-AU, HayleyRUS',
                'en-CA, Linda',
                'en-CA, HeatherRUS',
                'en-GB, Susan, Apollo',
                'en-GB, HazelRUS',
                'en-GB, George, Apollo',
                'en-IE, Sean',
                'en-IN, Heera, Apollo',
                'en-IN, PriyaRUS',
                'en-IN, Ravi, Apollo',
                'en-US, ZiraRUS',
                'en-US, JessaRUS',
                'en-US, BenjaminRUS',
                'es-ES, Laura, Apollo',
                'es-ES, HelenaRUS',
                'es-ES, Pablo, Apollo',
                'es-MX, HildaRUS',
                'es-MX, Raul, Apollo',
                'fi-FI, HeidiRUS',
                'fr-CA, Caroline',
                'fr-CA, HarmonieRUS',
                'fr-CH, Guillaume',
                'fr-FR, Julie, Apollo',
                'fr-FR, HortenseRUS',
                'fr-FR, Paul, Apollo',
                'he-IL, Asaf',
                'hi-IN, Kalpana, Apollo',
                'hi-IN, Kalpana',
                'hi-IN, Hemant',
                'hr-HR, Matej',
                'hu-HU, Szabolcs',
                'id-ID, Andika',
                'it-IT, Cosimo, Apollo',
                'it-IT, LuciaRUS',
                'ja-JP, Ayumi, Apollo',
                'ja-JP, Ichiro, Apollo',
                'ja-JP, HarukaRUS',
                'ko-KR, HeamiRUS',
                'ms-MY, Rizwan',
                'nb-NO, HuldaRUS',
                'nl-NL, HannaRUS',
                'pl-PL, PaulinaRUS',
                'pt-BR, HeloisaRUS',
                'pt-BR, Daniel, Apollo',
                'pt-PT, HeliaRUS',
                'ro-RO, Andrei',
                'ru-RU, Irina, Apollo',
                'ru-RU, Pavel, Apollo',
                'ru-RU, EkaterinaRUS',
                'sk-SK, Filip',
                'sl-SI, Lado',
                'sv-SE, HedvigRUS',
                'ta-IN, Valluvar',
                'th-TH, Pattara',
                'tr-TR, SedaRUS',
                'vi-VN, An',
                'zh-CN, HuihuiRUS',
                'zh-CN, Yaoyao, Apollo',
                'zh-CN, Kangkang, Apollo',
                'zh-HK, Tracy, Apollo',
                'zh-HK, TracyRUS',
                'zh-HK, Danny, Apollo',
                'zh-TW, Yating, Apollo',
                'zh-TW, HanHanRUS',
                'zh-TW, Zhiwei, Apollo'
              ],
              'default': 'en-GB, George, Apollo',
              'display_value': 'Voice',
              'type': 'dropdown'
            }
          },
          'id': 27,
          'input_params': {
            'filetype': 'mp3',
            'gender': 'Male',
            'lang': 'en-GB',
            'voice_ms': 'en-GB, George, Apollo'
          },
          'is_paid': 'paid',
          'library': 'azure',
          'module': 'texttospeech',
          'pros': '',
          'resource_uri': '/api/v1/pipelinemodule/27/',
          'unique_name': 'Azure Text to Speech',
          'updated_at': 1536651184000
        }
      ],
      'resource_uri': '/api/v1/bot/347/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1544001079000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 356,
        'comment': 'Default Active Version',
        'id': 484,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 484,
      'advanced_data_protection': true,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': true,
      'allow_feedback': true,
      'avatars': [
        {
          'imageUrl': 'https://cdn-images-1.medium.com/max/327/1*paQ7E6f2VyTKXHpR-aViFg.png',
          'name': 'StarBot25'
        }
      ],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzU2LCJyb2xlIjoiYm90In0.ReoPrhu1qeTTHX2Azn0WXcy8PUmIiCNdHkkCbtUZ6hQ',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'analyticstestingbot',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1545051217000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'This is a test bot',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': 'This is first message!!',
      'heading': '',
      'id': 356,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': '',
            'id': ''
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'slack': {
            'enabled': false,
            'slack-token': '',
            'verification-token': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 356,
        'bot_id': 356,
        'comment': 'nee bonda ra nee bonda',
        'id': 667,
        'version': 3
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'Analytics Testing Bot',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/356/',
      'room_close_callback': false,
      'room_persistence_time': 5,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1553770216000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 357,
        'comment': 'Default Active Version',
        'id': 485,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 485,
      'advanced_data_protection': true,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/IntelliBot.png',
          'name': 'StarBot60'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzU3LCJyb2xlIjoiYm90In0.NfgQFtwP73M7flXPTEPjHFoZKSxYLYBUJ_eEzzU0Akw',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'test1',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1545128136000,
      'created_by': 'unknown',
      'data_persistence_period': 30,
      'description': 'Testing bot',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 357,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 357,
        'bot_id': 357,
        'comment': 'sdadasda',
        'id': 500,
        'version': 3
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'Test1',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/357/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1546925844000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 362,
        'comment': 'Default Active Version',
        'id': 490,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 490,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': true,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/SmartDroid.png',
          'name': 'StarBot86'
        },
        {
          'imageUrl': 'https://robohash.org/StarDroid.png',
          'name': 'StarBot29'
        },
        {
          'imageUrl': 'https://robohash.org/IntelliBot.png',
          'name': 'StarBot17'
        },
        {
          'imageUrl': 'https://cdn-images-1.medium.com/max/327/1*paQ7E6f2VyTKXHpR-aViFg.png',
          'name': 'StarBot2'
        },
        {
          'imageUrl': 'https://robohash.org/SilverDroid.png',
          'name': 'StarBot9'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzYyLCJyb2xlIjoiYm90In0.ZZfO9U0LL74GSCq76WvsJ8hdRGeQiyQ1LPhHTYWRmjY',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'pipelinetest1',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1545193534000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'test',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 362,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 362,
        'bot_id': 362,
        'comment': 'Default Active Version',
        'id': 490,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'pipeline test1',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [
        {
          '_id': '5b8901000e0ff44f7e071e34',
          'cons': ' lower entity coverage, lower accuracy',
          'contextual': false,
          'created_at': 1535705344000,
          'default': false,
          'description': 'This implementation is based on a fast, free and open-source library called Spacy',
          'display_values': {},
          'id': 1,
          'input_params': {},
          'is_added': true,
          'is_paid': 'free',
          'library': 'spacy',
          'module': 'ner',
          'pros': 'no external calls, faster',
          'unique_name': 'Spacy NER',
          'updated_at': 1535705344000
        }
      ],
      'resource_uri': '/api/v1/bot/362/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1545813853000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {},
      'active_version_id': 0,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://cdn-images-1.medium.com/max/327/1*paQ7E6f2VyTKXHpR-aViFg.png',
          'name': 'StarBot56'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzYzLCJyb2xlIjoiYm90In0.tVQLyMSFG4LKbHg--F2NFJMPi_u4mPHQFDslU6rLuR4',
      'bot_metadata': {},
      'bot_type': 'intelligent',
      'bot_unique_name': 'pipelinetest2',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1545193557000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'test2',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 363,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 363,
        'bot_id': 363,
        'comment': null,
        'id': null,
        'version': null
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'Pipeline test2',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [
        {
          '_id': '5baa10ef39c5a6003deeaa31',
          'cons': '',
          'contextual': false,
          'created_at': 1537872111000,
          'default': false,
          'description': '',
          'display_values': {},
          'id': 36,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'google',
          'module': 'language_detection',
          'pros': '',
          'unique_name': 'Google Language Detection',
          'updated_at': 1537872111000
        },
        {
          '_id': '5b8901000e0ff44f7e071e56',
          'cons': '',
          'contextual': true,
          'created_at': 1535705344000,
          'default': false,
          'description': '',
          'display_values': {
            'api_ai_access_token': {
              'display_value': 'api.ai access token',
              'type': 'text'
            }
          },
          'id': 35,
          'input_params': {
            'api_ai_access_token': 'ss'
          },
          'is_added': true,
          'is_paid': 'paid',
          'library': 'apiai',
          'module': 'apiainlp',
          'pros': '',
          'unique_name': 'API.ai',
          'updated_at': 1535705344000
        },
        {
          '_id': '5b8901000e0ff44f7e071e55',
          'cons': '',
          'contextual': false,
          'created_at': 1535705344000,
          'default': false,
          'description': '',
          'display_values': {},
          'id': 34,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'botman',
          'module': 'units',
          'pros': '',
          'unique_name': 'IMIbot Units Recognition',
          'updated_at': 1535705344000
        },
        {
          '_id': '5b8901000e0ff44f7e071e3e',
          'cons': '',
          'contextual': false,
          'created_at': 1535705344000,
          'default': false,
          'description': '',
          'display_values': {
            'image_type': {
              'display_value': 'Natural Image',
              'type': 'text'
            }
          },
          'id': 11,
          'input_params': {
            'image_type': 'natural_imageaa'
          },
          'is_added': true,
          'is_paid': 'paid',
          'library': 'google',
          'module': 'ocr',
          'pros': '',
          'unique_name': 'Google OCR',
          'updated_at': 1535705344000
        },
        {
          '_id': '5b8901000e0ff44f7e071e45',
          'cons': 'comparatively lesser flexibility, opinionated, only supports English',
          'contextual': false,
          'created_at': 1535705344000,
          'default': false,
          'description': 'This implementation is based on a fast, free and open-source library',
          'display_values': {},
          'id': 18,
          'input_params': {},
          'is_added': true,
          'is_paid': 'Free',
          'library': 'spacy',
          'module': 'word_tokenization',
          'pros': ' free, no external calls, faster',
          'unique_name': 'Spacy Word Tokenization',
          'updated_at': 1535705344000
        },
        {
          '_id': '5b8901000e0ff44f7e071e52',
          'cons': '',
          'contextual': false,
          'created_at': 1535705344000,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 31,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'nltk',
          'module': 'word_tokenization',
          'pros': '',
          'unique_name': 'NLTK Word Tokenization',
          'updated_at': 1535705344000
        },
        {
          '_id': '5b8901000e0ff44f7e071e38',
          'cons': 'relatively more expensive, involves an external call, slightly slower',
          'contextual': false,
          'created_at': 1535705344000,
          'default': true,
          'description': 'This is a Microsoft service and involves an external API call. It is machine learning based and is contextual.',
          'display_values': {},
          'id': 5,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'azure',
          'module': 'spell_check',
          'pros': 'contextual, slightly higher accuracy, improves over time',
          'unique_name': 'Azure Spell Check',
          'updated_at': 1535705344000
        },
        {
          '_id': '5b8901000e0ff44f7e071e42',
          'cons': '',
          'contextual': false,
          'created_at': 1535705344000,
          'default': false,
          'description': '',
          'display_values': {},
          'id': 15,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'botman',
          'module': 'spell_check',
          'pros': '',
          'unique_name': 'IMIbot Spell Check',
          'updated_at': 1535705344000
        },
        {
          '_id': '5b8901000e0ff44f7e071e37',
          'cons': '',
          'contextual': false,
          'created_at': 1535705344000,
          'default': false,
          'description': '',
          'display_values': {
            'output_language': {
              'display_value': 'Output language',
              'type': 'text'
            }
          },
          'id': 4,
          'input_params': {
            'output_language': 'en'
          },
          'is_added': true,
          'is_paid': 'paid',
          'library': 'google',
          'module': 'language_translate',
          'pros': '',
          'unique_name': 'Google Translate',
          'updated_at': 1535705344000
        },
        {
          '_id': '5b8901000e0ff44f7e071e39',
          'cons': '',
          'contextual': false,
          'created_at': 1535705344000,
          'default': false,
          'description': '',
          'display_values': {},
          'id': 6,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'google',
          'module': 'parsetree',
          'pros': '',
          'unique_name': 'Google Parse Tree',
          'updated_at': 1535705344000
        },
        {
          '_id': '5b8901000e0ff44f7e071e43',
          'cons': '',
          'contextual': false,
          'created_at': 1535705344000,
          'default': false,
          'description': '',
          'display_values': {},
          'id': 16,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'botman',
          'module': 'profanity_filter',
          'pros': '',
          'unique_name': 'IMIbot Profanity Filter',
          'updated_at': 1535705344000
        }
      ],
      'resource_uri': '/api/v1/bot/363/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1545193949000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 370,
        'comment': 'long comment  long commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentlong commentyyyy',
        'id': 693,
        'is_ui_view': false,
        'version': 17
      },
      'active_version_id': 693,
      'advanced_data_protection': true,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': true,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/IntelliBot.png',
          'name': 'StarBot69'
        },
        {
          'imageUrl': 'https://robohash.org/IntelliBot.png',
          'name': 'StarBot39'
        },
        {
          'imageUrl': 'https://robohash.org/SilverDroid.png',
          'name': 'StarBot8'
        },
        {
          'imageUrl': 'https://robohash.org/SilverDroid.png',
          'name': 'StarBot51'
        }
      ],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzcwLCJyb2xlIjoiYm90In0.lvLMyq-oqUBQVlUv5MadtwfRgDLSqLEUFl23sq354pg',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'fbintegrationtestbot',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': 'consent message1',
      'created_at': 1546948249000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 0.0416,
      'description': 'To test FB location',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': 'asdasdas',
      'heading': '',
      'id': 370,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': 'sadasda',
            'enabled': true
          },
          'imichat': {
            'access-token': 'sdas',
            'domain': 'asa',
            'enabled': true,
            'service-key': 'adasd'
          }
        },
        'channels': {
          'alexa': {
            'enabled': true,
            'skillId': 'yy'
          },
          'facebook': {
            'enabled': true,
            'facebook-token': 'EAAcr1gijVOEBAH1C1pgB2aAc0cSnGw3xgAhTdZAWCL8vUk0rryIZAgYY7XrTZB6kOtMkxiZBTZAf7R7CRoxsL61mTM3BaGjNzVIWyG5OQWEZAoNg7VbBNUD7R5pH1ObhNIeGIzb6uQOpPIGcb6XozZCjBZBruGxIOCvVGBdA8ZBW6U2ZCson2vUfZAP',
            'id': '1955425207910003'
          },
          'googlehome': {
            'enabled': true,
            'project': 'hhh'
          },
          'line': {
            'channel_access_token': 'asd',
            'channel_id': 'asd',
            'channel_secret': 'asdas',
            'enabled': true
          },
          'skype': {
            'client_id': 'asda',
            'client_secret': 'as',
            'enabled': true,
            'skype-page-name': 'asd'
          },
          'slack': {
            'enabled': true,
            'slack-token': 'gg',
            'verification-token': 'h'
          },
          'viber': {
            'bot_auth_token': 'hh',
            'bot_avatar': 'hhh',
            'bot_name': 'hh',
            'enabled': true
          },
          'web': {
            'enabled': true,
            'speech_model': 'tt',
            'speech_tts': 'tt',
            'speech_url': 'ttt'
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': 'asdasdasd',
            'appSecret': 'asdas',
            'enabled': true,
            'endpoint': 'messagingapi',
            'send_via_connect': 'asd',
            'serviceKey': 'sd',
            'streamName': 'sdasdasdasasdasdas'
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 370,
        'bot_id': 370,
        'comment': 'long new long newlong newlong newlong newlong newlong newlong newlong newlong newlong newlong newlong newlong newlong newlong newlong newlong newlong newlong newlong newlong newlong newlong newlong newlong new',
        'id': 700,
        'version': 21
      },
      'logo': 'https://www.gstatic.com/webp/gallery3/2_webp_a.png',
      'name': 'FB Integration Test Bot  Test Bot  Test  Test Bot Test Bot Test Bot Test Bot Test Bot Test Bot Bot Test Bot Test Bot',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/370/',
      'room_close_callback': false,
      'room_persistence_time': 5,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1556526247000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 374,
        'comment': 'Default Active Version',
        'id': 518,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 518,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
          'name': 'test'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mzc0LCJyb2xlIjoiYm90In0.Mf8Tx1ybeVwpW_HS5YL3Mx0ILDZZEiKZimJSRhu6lvI',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'testing bot 0001',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1548048793000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'Play Game and win Coupons',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': 'Hi.. Welcome to test world. I am testing bot.',
      'heading': 'Welcome to the Game World',
      'id': 374,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': true,
            'facebook-token': 'asdadasdas',
            'id': '194700987927464'
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false
          },
          'slack': {
            'enabled': false,
            'slack-token': '',
            'verification-token': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': 'asdsa',
            'appSecret': 'asdas',
            'enabled': true,
            'endpoint': 'messagingapi',
            'send_via_connect': 'asdasdas',
            'serviceKey': 'asdas',
            'streamName': 'asdas'
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 374,
        'bot_id': 374,
        'comment': 'Default Active Version',
        'id': 518,
        'version': 1
      },
      'logo': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
      'name': 'testing 004',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [
        {
          'contextual': false,
          'default': true,
          'id': 'Azure Spell Check',
          'inputParams': {},
          'library': 'azure',
          'module': 'spell_check',
          'type': 'item'
        },
        {
          'contextual': false,
          'default': false,
          'id': 'Google Parse Tree',
          'inputParams': {},
          'library': 'google',
          'module': 'parsetree',
          'type': 'item'
        },
        {
          'contextual': false,
          'default': false,
          'id': 'IMIbot Numbers Recognition',
          'inputParams': {},
          'library': 'botman',
          'module': 'numbers',
          'type': 'item'
        },
        {
          'contextual': false,
          'default': true,
          'id': 'IMIbot Common Sense',
          'inputParams': {},
          'library': 'botman',
          'module': 'commonsense',
          'type': 'item'
        },
        {
          'contextual': false,
          'default': true,
          'id': 'IMIbot Custom NER',
          'inputParams': {},
          'library': 'botman',
          'module': 'custom_ners',
          'type': 'item'
        }
      ],
      'resource_uri': '/api/v1/bot/374/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 0,
      'updated_at': 1550591040000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {},
      'active_version_id': 0,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': true,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/IntelliBot.png',
          'name': 'StarBot84'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mzg3LCJyb2xlIjoiYm90In0.HzvhtRn2BDaROjenMMd5ch8rgmD5lbInfY6vowdgz6c',
      'bot_metadata': {},
      'bot_type': 'intelligent',
      'bot_unique_name': 'pipelinwwe  bot19',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1549010741000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'ss',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 387,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 387,
        'bot_id': 387,
        'comment': null,
        'id': null,
        'version': null
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'pipeline bot1',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [
        {
          '_id': '5b8901000e0ff44f7e071e4b',
          'cons': 'none',
          'contextual': false,
          'created_at': 1535705344000,
          'default': false,
          'description': '',
          'display_values': {},
          'id': 24,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'spacy',
          'module': 'chunking',
          'pros': 'free, no external calls, faster',
          'unique_name': 'Spacy Chunking',
          'updated_at': 1535705344000
        },
        {
          '_id': '5b8901000e0ff44f7e071e3b',
          'cons': '',
          'contextual': false,
          'created_at': 1535705344000,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 8,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'botman',
          'module': 'commonsense',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'pros': '',
          'unique_name': 'IMIbot Common Sense',
          'updated_at': 1535705344000
        }
      ],
      'resource_uri': '/api/v1/bot/387/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1553601805000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 393,
        'comment': 'Default Active Version',
        'id': 549,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 549,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'id': 0,
          'imageUrl': 'https://robohash.org/SilverDroid.png',
          'name': 'StarBot10'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzkzLCJyb2xlIjoiYm90In0.PjgtOpmWlBB5MZiMqhZWskkOnK28tVGBqKO40D00X5Q',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'updatebotwithinvalidcode',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1549354228000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'created by manjula',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 393,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 393,
        'bot_id': 393,
        'comment': 'code with syntax error',
        'id': 550,
        'version': 2
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'update bot with invalid code',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/393/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1549354229000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 394,
        'comment': '',
        'id': 558,
        'is_ui_view': false,
        'version': 2
      },
      'active_version_id': 558,
      'advanced_data_protection': true,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/StarDroid.png',
          'name': 'StarBot70'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mzk0LCJyb2xlIjoiYm90In0.RCvt5rsD6rWiH5m1qHLngc9loagETwEucfCTskZUU-o',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'testbot123',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1549359001000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'TestBot123',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': 'Oh something went wrong please try again !',
      'first_message': 'Hi Test 45 !',
      'heading': 'TestBot45',
      'id': 394,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': true,
            'facebook-token': 'rk',
            'id': 'rk'
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': 'rk',
            'client_secret': 'rk',
            'enabled': true,
            'skype-page-name': 'rk'
          },
          'slack': {
            'enabled': false,
            'slack-token': '',
            'verification-token': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 394,
        'bot_id': 394,
        'comment': '',
        'id': 558,
        'version': 2
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'TestBot123',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [
        {
          '_id': '5b8901000e0ff44f7e071e3b',
          'cons': '',
          'contextual': false,
          'created_at': 1535705344000,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 8,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'botman',
          'module': 'commonsense',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'pros': '',
          'unique_name': 'IMIbot Common Sense',
          'updated_at': 1535705344000
        },
        {
          '_id': '5b8901000e0ff44f7e071e3a',
          'cons': 'None',
          'contextual': false,
          'created_at': 1535705344000,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 7,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'botman',
          'module': 'custom_ners',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'pros': ' no external calls, faster',
          'unique_name': 'IMIbot Custom NER',
          'updated_at': 1535705344000
        }
      ],
      'resource_uri': '/api/v1/bot/394/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1552471292000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {},
      'active_version_id': 0,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDExLCJyb2xlIjoiYm90In0.LumuiVAxhBulFgNWql_PBqUtc6t6WPay34hSXkqspT0',
      'bot_metadata': {},
      'bot_type': 'intelligent',
      'bot_unique_name': 'asdas',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1550501162000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 0,
      'description': 'asdas',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': 'asdasd',
      'first_message': 'asda',
      'heading': '',
      'id': 411,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 411,
        'bot_id': 411,
        'comment': null,
        'id': null,
        'version': null
      },
      'logo': 'https://staging.imibot.ai/static/assets/img/IMI_logo.png',
      'name': 'asdas',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/411/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1550501162000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {},
      'active_version_id': 0,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDE0LCJyb2xlIjoiYm90In0.SRDVfXfs0Vhl5Liz-_zhMw2uFp5rPbUCz-qevjM3ljk',
      'bot_metadata': {},
      'bot_type': 'intelligent',
      'bot_unique_name': 'anonymization_checkasdasd',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1550505837000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 0,
      'description': 'sasdsdas',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': 'https://s3-eu-west-1.amazonaws.com/imibot-production/integrations/IMI_logo.png',
      'first_message': 'https://s3-eu-west-1.amazonaws.com/imibot-production/integrations/IMI_logo.png',
      'heading': '',
      'id': 414,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 414,
        'bot_id': 414,
        'comment': null,
        'id': null,
        'version': null
      },
      'logo': 'https://s3-eu-west-1.amazonaws.com/imibot-production/integrations/IMI_logo.png',
      'name': 'anonymization_checkasdasd',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/414/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1550505837000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {},
      'active_version_id': 0,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDE1LCJyb2xlIjoiYm90In0.8uizHSRhcr5SJE2SY5exF0WsJCtvdo4rATt6BUTMxRI',
      'bot_metadata': {},
      'bot_type': 'intelligent',
      'bot_unique_name': 'anonymization_check',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1550505853000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'S',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': 'https://s3-eu-west-1.amazonaws.com/imibot-production/integrations/IMI_logo.png',
      'first_message': 'https://s3-eu-west-1.amazonaws.com/imibot-production/integrations/IMI_logo.png',
      'heading': '',
      'id': 415,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': '',
            'id': ''
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'slack': {
            'enabled': false,
            'slack-token': '',
            'verification-token': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 415,
        'bot_id': 415,
        'comment': null,
        'id': null,
        'version': null
      },
      'logo': 'https://s3-eu-west-1.amazonaws.com/imibot-production/integrations/IMI_logo.png',
      'name': 'anonymization_check',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/415/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1552623835000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 416,
        'comment': 'Default Active Version',
        'id': 592,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 592,
      'advanced_data_protection': true,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': true,
      'allow_feedback': false,
      'avatars': [
        {
          'id': 0,
          'imageUrl': 'https://robohash.org/SmartDroid.png',
          'name': 'StarBot13'
        }
      ],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDE2LCJyb2xlIjoiYm90In0.ISwbMhmi-OHh1jZSHXJGtrB2671XjgvLXaMjOEofBmU',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'newtestingbot1',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1550568702000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 0.0007,
      'description': 'this s for gdpr test',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 416,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 416,
        'bot_id': 416,
        'comment': 'Default Active Version',
        'id': 592,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'New Testing Bot1',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/416/',
      'room_close_callback': false,
      'room_persistence_time': 5,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1550568703000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 417,
        'comment': 'Default Active Version',
        'id': 593,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 593,
      'advanced_data_protection': true,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': true,
      'allow_feedback': false,
      'avatars': [
        {
          'id': 0,
          'imageUrl': 'https://robohash.org/SmartBot.png',
          'name': 'StarBot85'
        }
      ],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDE3LCJyb2xlIjoiYm90In0.aBBEhFhOePsaxLits-MtgBq188qxjZSAH9S59CCDjn8',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'newtestingbot2',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': 'This is a consent messag',
      'created_at': 1550572994000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 0.0007,
      'description': 'to test gdpr',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 417,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 417,
        'bot_id': 417,
        'comment': 'Default Active Version',
        'id': 593,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'New Testing Bot2',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/417/',
      'room_close_callback': false,
      'room_persistence_time': 8,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1550572994000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 421,
        'comment': 'Default Active Version',
        'id': 601,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 601,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/StarDroid.png',
          'name': 'StarBot30'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDIxLCJyb2xlIjoiYm90In0.cqLC7y2WpxyYiItOp7ndC1HNr-it_Ac0txlipk6-icI',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'sdsdeqweq',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1550639077000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'aasdsadasd',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 421,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': '',
            'id': ''
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'slack': {
            'enabled': false,
            'slack-token': '',
            'verification-token': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 421,
        'bot_id': 421,
        'comment': '',
        'id': 602,
        'version': 2
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'sdsd',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/421/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1550673617000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 422,
        'comment': 'Code cleaned + commented',
        'id': 606,
        'is_ui_view': false,
        'version': 2
      },
      'active_version_id': 606,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'id': 1,
          'imageUrl': 'https://robohash.org/IntelliBot.png',
          'name': 'IntelliBot'
        }
      ],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDIyLCJyb2xlIjoiYm90In0.NGOLeykb_0EO85pWWVO2Kon9VXQ35uZrk-uo-V7PD1A',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'connect_bot',
      'child_bots': [],
      'consent_categories': [],
      'consent_message': '',
      'created_at': 1550747711000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 60,
      'description': 'desc',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': 'Hi, welcome to IKEA’s Virtual Assistant, how may I help you today?',
      'heading': 'Delivery IKEA',
      'id': 422,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'imichattoggle': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enable': false,
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': '',
            'facebooktoggle': false,
            'id': ''
          },
          'googlehome': {
            'asyncFlag': '',
            'enabled': false,
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': 'IM20051444',
            'appSecret': 'aD69OwcY',
            'enabled': true,
            'endpoint': 'messagingapi',
            'send_via_connect': 'false',
            'serviceKey': 'f6e50f7b-2bfd-11e8-bf0b-0213261164bb',
            'streamName': 'bot'
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 422,
        'bot_id': 422,
        'comment': 'Code cleaned + commented',
        'id': 606,
        'version': 2
      },
      'logo': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-y7Ng1H4i69odzg03DM50m3CTjGjvf4cMo3QArZXRCsjG1ABNw',
      'name': 'Delivery option',
      'old_id': '5af58d095fdaf0000d3f469e',
      'parent_bots': [],
      'pipelines': [
        {
          'contextual': false,
          'default': false,
          'display_values': {},
          'id': 6,
          'input_params': {},
          'library': 'google',
          'module': 'parsetree',
          'unique_name': 'Google Parse Tree'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 8,
          'input_params': {},
          'library': 'botman',
          'module': 'commonsense',
          'unique_name': 'IMIbot Common Sense'
        },
        {
          'contextual': false,
          'default': true,
          'display_values': {},
          'id': 7,
          'input_params': {},
          'library': 'botman',
          'module': 'custom_ners',
          'unique_name': 'IMIbot Custom NER'
        }
      ],
      'resource_uri': '/api/v1/bot/422/',
      'room_close_callback': false,
      'room_persistence_time': 10,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1550747946000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 424,
        'comment': 'Default Active Version',
        'id': 608,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 608,
      'advanced_data_protection': true,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': true,
      'allow_feedback': false,
      'avatars': [
        {
          'id': 0,
          'imageUrl': 'https://robohash.org/SmartDroid.png',
          'name': 'StarBot91'
        }
      ],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDI0LCJyb2xlIjoiYm90In0.ckiCoxuMQoD0sFvdX81AeYgC0HrnBr6iKPfHr_tKcic',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'newtestingbot3',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': 'this is consent',
      'created_at': 1550750452000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 0.0001,
      'description': 'Test',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 424,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 424,
        'bot_id': 424,
        'comment': 'Default Active Version',
        'id': 608,
        'version': 1
      },
      'logo': 'https://www.gstatic.com/webp/gallery3/2_webp_ll.png',
      'name': 'New testing bot 3',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/424/',
      'room_close_callback': false,
      'room_persistence_time': 10,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1550750452000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 426,
        'comment': 'Default Active Version',
        'id': 611,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 611,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'id': 0,
          'imageUrl': 'https://robohash.org/SilverDroid.png',
          'name': 'StarBot68'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDI2LCJyb2xlIjoiYm90In0.nUr0TqcBhs4fxP6DSk7FH_ux6rEDJsZVHKwE8dNDToI',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'sdfsdfsd',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1550852710000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'asdasdasd',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 426,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 426,
        'bot_id': 426,
        'comment': 'Default Active Version',
        'id': 611,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'sdfsdfsd',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/426/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1550852710000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 428,
        'comment': '',
        'id': 625,
        'is_ui_view': false,
        'version': 2
      },
      'active_version_id': 625,
      'advanced_data_protection': true,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'imageUrl': 'https://robohash.org/SilverDroid.png',
          'name': 'StarBot57'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDI4LCJyb2xlIjoiYm90In0.gHPrfQxLYKh671hhUbLdJQCNx3fshzqbM8pf-i6kRS0',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'asdasasdasdasd',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1551133012000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'asdasdassadasdasd',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': 'sadasda',
      'first_message': 'asdsad',
      'heading': '',
      'id': 428,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': '',
            'id': ''
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'slack': {
            'enabled': false,
            'slack-token': '',
            'verification-token': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 428,
        'bot_id': 428,
        'comment': '',
        'id': 625,
        'version': 2
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'asdasasdasdasdadasdsasAasASa',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/428/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1551725262000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {},
      'active_version_id': 0,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDQ1LCJyb2xlIjoiYm90In0.MDSoIFdpyfYrHT9Qt-o92GsbzFzjASIdZ-l2Fc8sNdE',
      'bot_metadata': {
        'live_corpus': {},
        'n_results': null,
        'preview_corpus': {},
        'threshold_diff_score': null,
        'threshold_min_score': null
      },
      'bot_type': 'faqbot',
      'bot_unique_name': 'faqbot_2',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1552472967000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 0,
      'description': '',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 445,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 445,
        'bot_id': 445,
        'comment': null,
        'id': null,
        'version': null
      },
      'logo': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
      'name': 'faqbot_1',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/445/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1552472967000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {},
      'active_version_id': 0,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDQ2LCJyb2xlIjoiYm90In0.OSjTZX0sUdIMasBsYGJLx8M34m4xSSDVpOekdf1QPeI',
      'bot_metadata': {
        'live_corpus': {},
        'n_results': null,
        'preview_corpus': {},
        'threshold_diff_score': null,
        'threshold_min_score': null
      },
      'bot_type': 'faqbot',
      'bot_unique_name': '   ',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1552472993000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 0,
      'description': '',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 446,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 446,
        'bot_id': 446,
        'comment': null,
        'id': null,
        'version': null
      },
      'logo': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
      'name': 'faqbot_1',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/446/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1552472993000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 447,
        'comment': 'Default Active Version',
        'id': 629,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 629,
      'advanced_data_protection': true,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': true,
      'avatars': [],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDQ3LCJyb2xlIjoiYm90In0.Siodfiid3UU84n5o5sZjVrQySYT9UhjylE8XlA4igrE',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'demo bot',
      'child_bots': [
        20,
        21,
        24,
        25,
        26,
        28
      ],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': 'asdadasdadasd',
      'created_at': 1552473211000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'this is demo zdcsacxzczx',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': 'This is first message asdadas asdadas asdadas asdadas asdadas asdadas asdadas asdadas asdadas asdadas asdadas asdadas asdadas asdadas asdadas asdadas asdadas asdadas asdadas asdadas asdadas asdadas ',
      'heading': '',
      'id': 447,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': '',
            'id': ''
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'slack': {
            'enabled': false,
            'slack-token': '',
            'verification-token': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': true,
      'latest_version': {
        '_id': 447,
        'bot_id': 447,
        'comment': 'Default Active Version',
        'id': 629,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'demo  bot',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [
        {
          '_id': '5ca42ab3c181968d0f8a1f2b',
          'cons': 'None',
          'contextual': false,
          'created_at': 1537872111000,
          'default': false,
          'description': '',
          'display_values': {},
          'id': 37,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'botman',
          'module': 'expand',
          'pros': 'Fast and reliable',
          'unique_name': 'Pycontractions',
          'updated_at': 1537872111000
        }
      ],
      'resource_uri': '/api/v1/bot/447/',
      'room_close_callback': true,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1554292580000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {},
      'active_version_id': 0,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': true,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDQ5LCJyb2xlIjoiYm90In0.60pMJGewtLcFkvDBlkfPk7m3uTK1BpQ9rGhPJRonsU4',
      'bot_metadata': {
        'live_corpus': {
          'algorithm': {},
          'model_id': 'uyt',
          'model_version_id': 12
        },
        'n_results': 8,
        'preview_corpus': {
          'algorithm': {
            'id': 'deeppavlov',
            'name': 'deeppavlov'
          },
          'model_id': '12345678911',
          'model_version_id': 1
        },
        'threshold_diff_score': 0.3,
        'threshold_min_score': 0.1
      },
      'bot_type': 'faqbot',
      'bot_unique_name': 'faqbot_1',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1552477961000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 0,
      'description': '',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 449,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 449,
        'bot_id': 449,
        'comment': null,
        'id': null,
        'version': null
      },
      'logo': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
      'name': 'faqbot_1',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/449/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1554291165000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 450,
        'comment': 'Default Active Version',
        'id': 632,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 632,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': true,
      'avatars': [],
      'blanket_consent': true,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDUwLCJyb2xlIjoiYm90In0.Wi2Q6HJmq7sQAcp7UgWtabidGHs8I1NJDnzAPrgwvdM',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'test421edited',
      'child_bots': [
        20
      ],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': 'hi this is a consent message',
      'created_at': 1552624247000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'test edited',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': 'ok1',
      'first_message': 'ok',
      'heading': '',
      'id': 450,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': true,
            'facebook-token': 'd',
            'id': 'ddw'
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': 'q',
            'channel_id': 'q',
            'channel_secret': 'q',
            'enabled': true
          },
          'skype': {
            'client_id': 'a',
            'client_secret': 'a',
            'enabled': true,
            'skype-page-name': 'a'
          },
          'slack': {
            'enabled': true,
            'slack-token': 'q',
            'verification-token': 'q'
          },
          'viber': {
            'bot_auth_token': 'q',
            'bot_avatar': 'q',
            'bot_name': 'q',
            'enabled': true
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': 'rr',
            'appSecret': 'rr',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': 'r',
            'serviceKey': 'rr',
            'streamName': 'rr'
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 450,
        'bot_id': 450,
        'comment': 'Default Active Version',
        'id': 632,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'test421edited',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [
        {
          '_id': '5b8901000e0ff44f7e071e4b',
          'cons': 'none',
          'contextual': false,
          'created_at': 1535705344000,
          'default': false,
          'description': '',
          'display_values': {},
          'id': 24,
          'input_params': {},
          'is_added': true,
          'is_paid': 'free',
          'library': 'spacy',
          'module': 'chunking',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'pros': 'free, no external calls, faster',
          'unique_name': 'Spacy Chunking',
          'updated_at': 1535705344000
        }
      ],
      'resource_uri': '/api/v1/bot/450/',
      'room_close_callback': false,
      'room_persistence_time': 20,
      'transactions_per_pricing_unit': 2,
      'updated_at': 1555055985000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 452,
        'comment': 'new code',
        'id': 647,
        'is_ui_view': false,
        'version': 6
      },
      'active_version_id': 647,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDUyLCJyb2xlIjoiYm90In0.B5HyFYNBa2qUDMB3vBmFLLEWTwxotzpqa0ZrKaZefoU',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'NewTest Bot',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1552976576000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 's',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 452,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 452,
        'bot_id': 452,
        'comment': 'new code',
        'id': 647,
        'version': 6
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'New Test Bot',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/452/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1553590540000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 455,
        'comment': 's',
        'id': 643,
        'is_ui_view': false,
        'version': 2
      },
      'active_version_id': 643,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDU1LCJyb2xlIjoiYm90In0._JyD3ZZdZTLTobfcKOL4qfce6V16corRcTd3ujbcBCg',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'codecheck',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1553203871000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'codecheck',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 455,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': true,
            'facebook-token': 'sasdsa',
            'id': 'asdas'
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'slack': {
            'enabled': false,
            'slack-token': '',
            'verification-token': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 455,
        'bot_id': 455,
        'comment': 'a',
        'id': 652,
        'version': 3
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'codecheck',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/455/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1553674548000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 456,
        'comment': 'Default Active Version',
        'id': 650,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 650,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDU2LCJyb2xlIjoiYm90In0.k_9Uvp_VbI7TUoOdka07ux61CD7G784UOZFPSs-8eJk',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'codecheck1',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1553592131000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 's',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 456,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 456,
        'bot_id': 456,
        'comment': 'forked from 1',
        'id': 720,
        'version': 2
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'code check',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/456/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1553592131000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {},
      'active_version_id': 0,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDU4LCJyb2xlIjoiYm90In0.8zQnxaFTHfKmz1ujVUVjZsrkOvnUtFPJNjGIqSwPdzA',
      'bot_metadata': {},
      'bot_type': 'intelligent',
      'bot_unique_name': 'p1gxshcshh',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1553601839000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 0,
      'description': 's',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 458,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 458,
        'bot_id': 458,
        'comment': null,
        'id': null,
        'version': null
      },
      'logo': 'https://s3-eu-west-1.amazonaws.com/imibot-production/integrations/v2/pipeline-bot-icon.png',
      'name': 'p1 gxs hcshh',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/458/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1553601839000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 459,
        'comment': 'Default Active Version',
        'id': 653,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 653,
      'advanced_data_protection': true,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDU5LCJyb2xlIjoiYm90In0.foMyPyDAxvXycmwAeuWV-zJYglvhpsc3fmpC7kqiC2k',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'sessiontabletest',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1553695398000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'this is test',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 459,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': '',
            'id': ''
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'slack': {
            'enabled': false,
            'slack-token': '',
            'verification-token': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 459,
        'bot_id': 459,
        'comment': 'Default Active Version',
        'id': 653,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'session tabletest',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/459/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1553897446000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {},
      'active_version_id': 0,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDY2LCJyb2xlIjoiYm90In0.o_vAk8VPfIMreWCE8L_0QQoaUb8NvSW_XNpJHHQnE8Q',
      'bot_metadata': {
        'live_corpus': {
          'algorithm': {
            'id': 'deeppavlov',
            'name': 'deeppavlov'
          },
          'model_id': '12345678999999',
          'model_version_id': 1
        },
        'n_results': 3,
        'preview_corpus': {
          'algorithm': {
            'id': 'deeppavlov',
            'name': 'deeppavlov'
          },
          'model_id': '234567877777',
          'model_version_id': 1
        },
        'threshold_diff_score': 0.3,
        'threshold_min_score': 0.6
      },
      'bot_type': 'faqbot',
      'bot_unique_name': 'faqbot_29th',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1553834968000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 0,
      'description': '',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 466,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 466,
        'bot_id': 466,
        'comment': null,
        'id': null,
        'version': null
      },
      'logo': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
      'name': 'faqbot for qa',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/466/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1554279752000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 477,
        'comment': 'Default Active Version',
        'id': 680,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 680,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDc3LCJyb2xlIjoiYm90In0.Cik2w_mJq9R6eh492LxkKG_cRSVvDWcCfwVhRZEkNic',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'asdasdasdadas',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1554124059000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'sdasasdas\n',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 477,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 477,
        'bot_id': 477,
        'comment': 'Default Active Version',
        'id': 680,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'asdasdasdadas',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/477/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1554124065000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 495,
        'comment': 'Default Active Version',
        'id': 721,
        'is_ui_view': true,
        'version': 1
      },
      'active_version_id': 721,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDk1LCJyb2xlIjoiYm90In0.HPA3eflts21dIWh_pXd3adIX-plc6FzWgHtbro426bI',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'testing_is_ui_view',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1554799522000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'kajfkaa',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 495,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 495,
        'bot_id': 495,
        'comment': 'My new fork code only',
        'id': 742,
        'version': 3
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'testing_is_ui_view',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [
        {
          '_id': '5b8901000e0ff44f7e071e3a',
          'cons': 'None',
          'contextual': false,
          'created_at': 1535705344000,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 7,
          'input_params': {},
          'is_added': true,
          'is_paid': 'free',
          'library': 'botman',
          'module': 'custom_ners',
          'pros': ' no external calls, faster',
          'unique_name': 'IMIbot Custom NER',
          'updated_at': 1535705344000
        }
      ],
      'resource_uri': '/api/v1/bot/495/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1555409753000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 498,
        'comment': '',
        'id': 726,
        'is_ui_view': false,
        'version': 2
      },
      'active_version_id': 726,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': true,
      'allow_feedback': true,
      'avatars': [
        {
          'id': 1,
          'imageUrl': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
          'name': 'test'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDk4LCJyb2xlIjoiYm90In0.BMwj50r9ilkY2ryYhg7t_EIJ89R7cT1F4R2y2aTgm-4',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'QA testing bot 1554832287153',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1554832287000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'QA spellcheck testing bot (testing2)',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': 'Hi.. Welcome to test world. I am testing bot.',
      'heading': 'Welcome to the Game World',
      'id': 498,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': true,
            'facebook-token': 'EAAc8APVKjxsBAI86VkZBDg5ZCZAGXSMpVsNQRdUgTSR1eq31ajiajCLSsTQLAeEzgqs6uKN2qq0VBAXcDX31D2OPzEJvaQZAzkNNLcexNxuresG7zXabZCIfySUnEUf9XVbDPWBRZAwJZBFdtAnmXusEYtHlIZAHiPzRWB8jdsFlswZDZD',
            'id': '194700987927464'
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false
          },
          'slack': {
            'enabled': false,
            'slack-token': '',
            'verification-token': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': 'messagingapi',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 498,
        'bot_id': 498,
        'comment': '',
        'id': 726,
        'version': 2
      },
      'logo': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
      'name': 'QA Testing bot_1554832287153',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [
        {
          'cons': '',
          'contextual': false,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 8,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'botman',
          'module': 'commonsense',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'pros': '',
          'unique_name': 'IMIbot Common Sense'
        },
        {
          'cons': 'None',
          'contextual': false,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 7,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'botman',
          'module': 'custom_ners',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'pros': ' no external calls, faster',
          'unique_name': 'IMIbot Custom NER'
        }
      ],
      'resource_uri': '/api/v1/bot/498/',
      'room_close_callback': true,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1554840755000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 502,
        'comment': '',
        'id': 734,
        'is_ui_view': false,
        'version': 2
      },
      'active_version_id': 734,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'id': 1,
          'imageUrl': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
          'name': 'test'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTAyLCJyb2xlIjoiYm90In0.sC1VGztsH93hwFjhXWfYzhsPHi8ep5qP4xqT15JSaYU',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'QA testing bot 1555042968289',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1555042968000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'Play Game and win Coupons',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': 'Hi.. Welcome to test world. I am testing bot.',
      'heading': 'Welcome to the Game World',
      'id': 502,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': true,
            'facebook-token': 'EAAc8APVKjxsBAI86VkZBDg5ZCZAGXSMpVsNQRdUgTSR1eq31ajiajCLSsTQLAeEzgqs6uKN2qq0VBAXcDX31D2OPzEJvaQZAzkNNLcexNxuresG7zXabZCIfySUnEUf9XVbDPWBRZAwJZBFdtAnmXusEYtHlIZAHiPzRWB8jdsFlswZDZD',
            'id': '194700987927464'
          },
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'serviceKey': '',
            'streamName': ''
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 502,
        'bot_id': 502,
        'comment': '',
        'id': 734,
        'version': 2
      },
      'logo': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
      'name': 'QA Testing bot_1555042968289',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [
        {
          'cons': '',
          'contextual': false,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 8,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'botman',
          'module': 'commonsense',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'pros': '',
          'unique_name': 'IMIbot Common Sense'
        },
        {
          'cons': 'None',
          'contextual': false,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 7,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'botman',
          'module': 'custom_ners',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'pros': ' no external calls, faster',
          'unique_name': 'IMIbot Custom NER'
        }
      ],
      'resource_uri': '/api/v1/bot/502/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 0,
      'updated_at': 1555042997000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 503,
        'comment': 'Default Active Version',
        'id': 737,
        'is_ui_view': true,
        'version': 1
      },
      'active_version_id': 737,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTAzLCJyb2xlIjoiYm90In0.BluIMv706AA6v5agRHwzrXg6-ot9QGB-j5nNfoStCPg',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'Gentemptester',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1555347074000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'For gen template testing by dilip',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': 'For gen temp code test ',
      'heading': '',
      'id': 503,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 503,
        'bot_id': 503,
        'comment': 'error forked',
        'id': 741,
        'version': 5
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'Gentemptester',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [
        {
          '_id': '5b8901000e0ff44f7e071e3a',
          'cons': 'None',
          'contextual': false,
          'created_at': 1535705344000,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 7,
          'input_params': {},
          'is_added': true,
          'is_paid': 'free',
          'library': 'botman',
          'module': 'custom_ners',
          'pros': ' no external calls, faster',
          'unique_name': 'IMIbot Custom NER',
          'updated_at': 1535705344000
        }
      ],
      'resource_uri': '/api/v1/bot/503/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1555405763000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 507,
        'comment': 'Default Active Version',
        'id': 745,
        'is_ui_view': true,
        'version': 1
      },
      'active_version_id': 745,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'id': 1,
          'imageUrl': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
          'name': 'test'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTA3LCJyb2xlIjoiYm90In0.yNCOmXqvZzrwiWYwMTRQqeqxP1rrq6cE7k2-ohj6EDk',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'QA testing bot 1555919850764',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1555919850000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'spellcheck testing bot',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': 'Hi.. Welcome to test world. I am testing bot.',
      'heading': 'Welcome to the Game World',
      'id': 507,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': true,
            'facebook-token': 'EAAc8APVKjxsBAI86VkZBDg5ZCZAGXSMpVsNQRdUgTSR1eq31ajiajCLSsTQLAeEzgqs6uKN2qq0VBAXcDX31D2OPzEJvaQZAzkNNLcexNxuresG7zXabZCIfySUnEUf9XVbDPWBRZAwJZBFdtAnmXusEYtHlIZAHiPzRWB8jdsFlswZDZD',
            'id': '194700987927464'
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false
          },
          'slack': {
            'enabled': false,
            'slack-token': '',
            'verification-token': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': '',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 507,
        'bot_id': 507,
        'comment': 'Default Active Version',
        'id': 745,
        'version': 1
      },
      'logo': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
      'name': 'QA Testing bot_1555919850764',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [
        {
          'cons': '',
          'contextual': false,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 8,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'botman',
          'module': 'commonsense',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'pros': '',
          'unique_name': 'IMIbot Common Sense'
        },
        {
          'cons': 'None',
          'contextual': false,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 7,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'botman',
          'module': 'custom_ners',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'pros': ' no external calls, faster',
          'unique_name': 'IMIbot Custom NER'
        }
      ],
      'resource_uri': '/api/v1/bot/507/',
      'room_close_callback': false,
      'room_persistence_time': 1,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1555946645000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 523,
        'comment': '',
        'id': 771,
        'is_ui_view': false,
        'version': 2
      },
      'active_version_id': 771,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'id': 1,
          'imageUrl': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
          'name': 'test'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTIzLCJyb2xlIjoiYm90In0.p36zC7wJqM0wG_1HxwiP9_dj39zkVmv2oziFVdcpMDk',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'QA testing bot 1556527403123',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1556527403000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'Play Game and win Coupons',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': 'Hi.. Welcome to test world. I am testing bot.',
      'heading': 'Welcome to the Game World',
      'id': 523,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': true,
            'facebook-token': 'EAAc8APVKjxsBAI86VkZBDg5ZCZAGXSMpVsNQRdUgTSR1eq31ajiajCLSsTQLAeEzgqs6uKN2qq0VBAXcDX31D2OPzEJvaQZAzkNNLcexNxuresG7zXabZCIfySUnEUf9XVbDPWBRZAwJZBFdtAnmXusEYtHlIZAHiPzRWB8jdsFlswZDZD',
            'id': '194700987927464'
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false
          },
          'slack': {
            'enabled': false,
            'slack-token': '',
            'verification-token': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': '',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 523,
        'bot_id': 523,
        'comment': '',
        'id': 771,
        'version': 2
      },
      'logo': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
      'name': 'this_is_bot_update',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [
        {
          'cons': '',
          'contextual': false,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 8,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'botman',
          'module': 'commonsense',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'pros': '',
          'unique_name': 'IMIbot Common Sense'
        },
        {
          '_id': '5b8901000e0ff44f7e071e3a',
          'cons': 'None',
          'contextual': false,
          'created_at': 1535705344000,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 7,
          'input_params': {},
          'is_added': true,
          'is_paid': 'free',
          'library': 'botman',
          'module': 'custom_ners',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'pros': ' no external calls, faster',
          'unique_name': 'IMIbot Custom NER',
          'updated_at': 1535705344000
        }
      ],
      'resource_uri': '/api/v1/bot/523/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1556978733000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 525,
        'comment': 'asdasd',
        'id': 777,
        'is_ui_view': false,
        'version': 3
      },
      'active_version_id': 777,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTI1LCJyb2xlIjoiYm90In0.0VsJ2V853rPiPJZbVeGx6H2Quj_rIsRhxB3ly2AgfDc',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'wsadsdad',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1556988703000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'asdasdas',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': 'asdasd',
      'first_message': '',
      'heading': '',
      'id': 525,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': '',
            'id': ''
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'slack': {
            'enabled': false,
            'slack-token': '',
            'verification-token': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': '',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 525,
        'bot_id': 525,
        'comment': 'asdasd',
        'id': 777,
        'version': 3
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'wsadsdad',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/525/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1557295945000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {},
      'active_version_id': 0,
      'advanced_data_protection': false,
      'agent_handover_setting': {
        'consecutive_count': 3,
        'fallback_count': 3,
        'partial_match_count': 3,
        'response_flag': true
      },
      'allow_agent_handover': true,
      'allow_anonymization': false,
      'allow_feedback': true,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTI2LCJyb2xlIjoiYm90In0.geMwXXMWJNMZJJlh1Nq-ougQFWmV1aFwgbdpE4RTk3w',
      'bot_metadata': {
        'live_corpus': {},
        'low_confidence_score': 0.4,
        'n_results': 3,
        'preview_corpus': {},
        'threshold_diff_score': 0.05,
        'threshold_min_score': 0.3
      },
      'bot_type': 'faqbot',
      'bot_unique_name': 'Newfaq1',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1557120595000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'ok',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 526,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': '',
            'id': ''
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'slack': {
            'enabled': false,
            'slack-token': '',
            'verification-token': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': '',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 526,
        'bot_id': 526,
        'comment': null,
        'id': null,
        'version': null
      },
      'logo': 'https://www.gstatic.com/webp/gallery3/2_webp_ll.png',
      'name': 'New faq1',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/526/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1557120744000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {},
      'active_version_id': 0,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTI3LCJyb2xlIjoiYm90In0.GaAPyp1Vt_0hAmSDh_-llFC5BDmkstEgUT-2okURJBE',
      'bot_metadata': {
        'live_corpus': {},
        'low_confidence_score': 0.4,
        'n_results': 3,
        'preview_corpus': {},
        'threshold_diff_score': 0.05,
        'threshold_min_score': 0.3
      },
      'bot_type': 'faqbot',
      'bot_unique_name': 'verylong bot name very long bot name very long bot name very long bot name very long bot name very long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot name',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1557122408000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 0,
      'description': '',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 527,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 527,
        'bot_id': 527,
        'comment': null,
        'id': null,
        'version': null
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'very long bot name very long bot name very long bot name very long bot name very long bot name very long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot namevery long bot name',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/527/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1557122408000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {},
      'active_version_id': 0,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTI4LCJyb2xlIjoiYm90In0.Hz37mYrN7Ib4_3tgZckK3DAu_ccVIvDOrtUxQlbawkg',
      'bot_metadata': {
        'live_corpus': {},
        'low_confidence_score': 0.4,
        'n_results': 3,
        'preview_corpus': {},
        'threshold_diff_score': 0.05,
        'threshold_min_score': 0.3
      },
      'bot_type': 'faqbot',
      'bot_unique_name': 'long unique namelong unique namelong unique namelong unique namelong unique namelong unique namelong unique namelong unique namelong unique namelong unique namelong unique namelong unique namelong unique namelong unique namelong unique name',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1557122486000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'g',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 528,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': '',
            'id': ''
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'slack': {
            'enabled': false,
            'slack-token': '',
            'verification-token': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': '',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 528,
        'bot_id': 528,
        'comment': null,
        'id': null,
        'version': null
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'bdcyduy',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/528/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1557122555000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {},
      'active_version_id': 0,
      'advanced_data_protection': false,
      'agent_handover_setting': {
        'consecutive_count': 3,
        'fallback_count': 3,
        'partial_match_count': 3,
        'response_flag': true
      },
      'allow_agent_handover': true,
      'allow_anonymization': false,
      'allow_feedback': true,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTI5LCJyb2xlIjoiYm90In0.FRIvf_L-jxB9LcqCZakIvVc1v0PtE9ZRtLcq7WofBSQ',
      'bot_metadata': {
        'live_corpus': {
          'algorithm': {
            'id': 'deeppavlov',
            'name': 'deeppavlov'
          },
          'model_id': '68b624c454dc48dab708a9707c27e2d8',
          'model_version_id': 2
        },
        'low_confidence_score': 0.4,
        'n_results': 3,
        'preview_corpus': {
          'algorithm': {
            'id': 'deeppavlov',
            'name': 'deeppavlov'
          },
          'model_id': '68b624c454dc48dab708a9707c27e2d8',
          'model_version_id': 2
        },
        'threshold_diff_score': 0.05,
        'threshold_min_score': 0.3
      },
      'bot_type': 'faqbot',
      'bot_unique_name': 'newfaq22',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1557134852000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 0,
      'description': '',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 529,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 529,
        'bot_id': 529,
        'comment': null,
        'id': null,
        'version': null
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'new faq22',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/529/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1557135568000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {},
      'active_version_id': 0,
      'advanced_data_protection': false,
      'agent_handover_setting': {
        'consecutive_count': 3,
        'fallback_count': 2,
        'partial_match_count': 2,
        'response_flag': false
      },
      'allow_agent_handover': true,
      'allow_anonymization': false,
      'allow_feedback': true,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTMwLCJyb2xlIjoiYm90In0.-H2BVs7q61jv6GjOt-Zq5iL9fFe1ZsFy2xIYRSri7bg',
      'bot_metadata': {
        'live_corpus': {
          'algorithm': {
            'id': 'deeppavlov',
            'name': 'deeppavlov'
          },
          'model_id': 'b4160e626e8b4b2dab381424f6bed963',
          'model_version_id': 1
        },
        'low_confidence_score': 0.23,
        'n_results': 3,
        'preview_corpus': {
          'algorithm': {
            'id': 'deeppavlov',
            'name': 'deeppavlov'
          },
          'model_id': 'b4160e626e8b4b2dab381424f6bed963',
          'model_version_id': 12
        },
        'threshold_diff_score': 0.04,
        'threshold_min_score': 0.35
      },
      'bot_type': 'faqbot',
      'bot_unique_name': 'faqbot_7thMay',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1557212434000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'gg',
      'enable_agent_handover_rules': true,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 530,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': false,
            'facebook-token': '',
            'id': ''
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'slack': {
            'enabled': false,
            'slack-token': '',
            'verification-token': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': '',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 530,
        'bot_id': 530,
        'comment': null,
        'id': null,
        'version': null
      },
      'logo': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
      'name': 'faqbot_7thMay',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/530/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1557663527000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 531,
        'comment': 'Default Active Version',
        'id': 775,
        'is_ui_view': false,
        'version': 1
      },
      'active_version_id': 775,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': true,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTMxLCJyb2xlIjoiYm90In0.Eti2qHrNT5ATsQC-OfWfDNRKrI6Ryl2RQzGzK8rPYpE',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'FBUpgrade',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1557221329000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'to test fb upgrade',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': 'this is first message',
      'heading': '',
      'id': 531,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': true,
            'facebook-token': 'EAALXNr54M9ABAGWshZCdSrIwyZBTTwMlyPcYf7FllFjeZCd3fgZA1RYc05FatIE5dj7rKjjZB6dZAKMui06VimOwkvChlLvVfzWqbvRF1qRLHGK4pCq6eh55JJ5HMKx3XRBLMWhz7f0tGHY9ynf72MChw7ubZCZCDhgmS78oqYKd4icyK1By0KQf',
            'id': '1942333889393840'
          },
          'googlehome': {
            'enabled': '',
            'project': ''
          },
          'line': {
            'channel_access_token': '',
            'channel_id': '',
            'channel_secret': '',
            'enabled': false
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false,
            'skype-page-name': ''
          },
          'slack': {
            'enabled': false,
            'slack-token': '',
            'verification-token': ''
          },
          'viber': {
            'bot_auth_token': '',
            'bot_avatar': '',
            'bot_name': '',
            'enabled': false
          },
          'web': {
            'enabled': false,
            'speech_model': '',
            'speech_tts': '',
            'speech_url': ''
          }
        },
        'fulfillment_provider_details': {
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'endpoint': '',
            'send_via_connect': '',
            'serviceKey': '',
            'streamName': ''
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 531,
        'bot_id': 531,
        'comment': 'Default Active Version',
        'id': 775,
        'version': 1
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'FBUpgrade',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/531/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1557725600000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {},
      'active_version_id': 0,
      'advanced_data_protection': false,
      'agent_handover_setting': {
        'consecutive_count': 3,
        'fallback_count': 3,
        'partial_match_count': 3,
        'response_flag': true
      },
      'allow_agent_handover': true,
      'allow_anonymization': false,
      'allow_feedback': true,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTMyLCJyb2xlIjoiYm90In0.OGfTirgG_bdWIbrb54tX8ihz54FNw1h3LdDy6DASW-c',
      'bot_metadata': {
        'live_corpus': {},
        'low_confidence_score': 0.4,
        'n_results': 3,
        'preview_corpus': {
          'algorithm': {
            'id': 'deeppavlov',
            'name': 'deeppavlov'
          },
          'model_id': '77452f909ae14e5f8e395d443ea68c3b',
          'model_version_id': 4
        },
        'threshold_diff_score': 0.05,
        'threshold_min_score': 0.3
      },
      'bot_type': 'faqbot',
      'bot_unique_name': 'manjula_testing',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1557232826000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 0,
      'description': '',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 532,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 532,
        'bot_id': 532,
        'comment': null,
        'id': null,
        'version': null
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'manjula_testing',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/532/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1557295614000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {},
      'active_version_id': 0,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTMzLCJyb2xlIjoiYm90In0.I6T7WGNpuXtzSu0_0LRLQela2wGlDgV5B1IISZn7OyA',
      'bot_metadata': {
        'live_corpus': {},
        'low_confidence_score': 0.4,
        'n_results': 3,
        'preview_corpus': {
          'algorithm': {
            'id': 'deeppavlov',
            'name': 'deeppavlov'
          },
          'model_id': 'c2848de9c5c84bc3b71d27c2a0415336',
          'model_version_id': 9
        },
        'threshold_diff_score': 0.05,
        'threshold_min_score': 0.3
      },
      'bot_type': 'faqbot',
      'bot_unique_name': 'Testtraining',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1557240823000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 0,
      'description': '',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 533,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 533,
        'bot_id': 533,
        'comment': null,
        'id': null,
        'version': null
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'Test training',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/533/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1557252356000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 534,
        'comment': 'Default Active Version',
        'id': 778,
        'is_ui_view': true,
        'version': 1
      },
      'active_version_id': 778,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTM0LCJyb2xlIjoiYm90In0.cSqavgKXeRtLT5ecqDLg3lwC9ZVLAQFORZS73M4C1CI',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'genTemplateTest',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1557296836000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'hshdhcs',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 534,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 534,
        'bot_id': 534,
        'comment': 'from 1',
        'id': 779,
        'version': 2
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'genTemplate Test',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/534/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1557296836000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {},
      'active_version_id': 0,
      'advanced_data_protection': false,
      'agent_handover_setting': {
        'consecutive_count': 3,
        'fallback_count': 3,
        'partial_match_count': 3,
        'response_flag': true
      },
      'allow_agent_handover': true,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTM1LCJyb2xlIjoiYm90In0.HtNqVVYlKm71Xe_yo-g-WF0MDGIRCBdiQPuJnP0SN6o',
      'bot_metadata': {
        'live_corpus': {},
        'low_confidence_score': 0.4,
        'n_results': 3,
        'preview_corpus': {
          'algorithm': {
            'id': 'deeppavlov',
            'name': 'deeppavlov'
          },
          'model_id': '3c33e80448324573bed25da8838b5c75',
          'model_version_id': 7
        },
        'threshold_diff_score': 0.05,
        'threshold_min_score': 0.3
      },
      'bot_type': 'faqbot',
      'bot_unique_name': 'faqbot_testing_demo',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1557306019000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 0,
      'description': '',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': '',
      'heading': '',
      'id': 535,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 535,
        'bot_id': 535,
        'comment': null,
        'id': null,
        'version': null
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'faqbot_testing_demo',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/535/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 1,
      'updated_at': 1557309737000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 543,
        'comment': 'Default Active Version',
        'id': 791,
        'is_ui_view': true,
        'version': 1
      },
      'active_version_id': 791,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [
        {
          'id': 1,
          'imageUrl': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
          'name': 'test'
        }
      ],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTQzLCJyb2xlIjoiYm90In0.iEW6FNGMW5s2VBtM4_6MszmcMuR5URrxeIa1XZYK8I4',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'QA testing bot 1557728582055',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1557728582000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'Play Game and win Coupons',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': '',
      'first_message': 'Hi.. Welcome to test world. I am testing bot.',
      'heading': 'Welcome to the Game World',
      'id': 543,
      'integrations': {
        'ccsp_details': {
          'debug': {
            'debugurl': '',
            'enabled': false
          },
          'imichat': {
            'access-token': '',
            'domain': '',
            'enabled': false,
            'service-key': ''
          }
        },
        'channels': {
          'alexa': {
            'enabled': false,
            'skillId': ''
          },
          'facebook': {
            'enabled': true,
            'facebook-token': 'EAAc8APVKjxsBAI86VkZBDg5ZCZAGXSMpVsNQRdUgTSR1eq31ajiajCLSsTQLAeEzgqs6uKN2qq0VBAXcDX31D2OPzEJvaQZAzkNNLcexNxuresG7zXabZCIfySUnEUf9XVbDPWBRZAwJZBFdtAnmXusEYtHlIZAHiPzRWB8jdsFlswZDZD',
            'id': '194700987927464'
          },
          'imiconnect': {
            'appId': '',
            'appSecret': '',
            'enabled': false,
            'serviceKey': '',
            'streamName': ''
          },
          'skype': {
            'client_id': '',
            'client_secret': '',
            'enabled': false
          }
        }
      },
      'is_manager': false,
      'latest_version': {
        '_id': 543,
        'bot_id': 543,
        'comment': 'Default Active Version',
        'id': 791,
        'version': 1
      },
      'logo': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
      'name': 'QA Testing bot_1557728582055',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [
        {
          'cons': '',
          'contextual': false,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 8,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'botman',
          'module': 'commonsense',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'pros': '',
          'unique_name': 'IMIbot Common Sense'
        },
        {
          'cons': 'None',
          'contextual': false,
          'default': true,
          'description': '',
          'display_values': {},
          'id': 7,
          'input_params': {},
          'is_added': true,
          'is_paid': 'paid',
          'library': 'botman',
          'module': 'custom_ners',
          'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
          'pros': ' no external calls, faster',
          'unique_name': 'IMIbot Custom NER'
        }
      ],
      'resource_uri': '/api/v1/bot/543/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 0,
      'updated_at': 1557728582000,
      'updated_by': 'Ayesh Update'
    },
    {
      'active_version': {
        'bot_id': 545,
        'comment': 'Default Active Version',
        'id': 795,
        'is_ui_view': true,
        'version': 1
      },
      'active_version_id': 795,
      'advanced_data_protection': false,
      'agent_handover_setting': {},
      'allow_agent_handover': false,
      'allow_anonymization': false,
      'allow_feedback': false,
      'avatars': [],
      'blanket_consent': false,
      'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTQ1LCJyb2xlIjoiYm90In0.El7XYQyysyaWCuI-LUaNVJmu_PZSO8q1Z63890qRBFc',
      'bot_metadata': {},
      'bot_type': 'chatbot',
      'bot_unique_name': 'e2e(plsdontuse)',
      'child_bots': [],
      'consent_categories': [
        'data_retention',
        'data_anonymization'
      ],
      'consent_message': '',
      'created_at': 1557733759000,
      'created_by': 'Ayesh Update',
      'data_persistence_period': 30,
      'description': 'e2e (pls dont use)',
      'enable_agent_handover_rules': false,
      'enterprise_id': 4,
      'error_message': 'e2e (pls dont use)',
      'first_message': 'e2e (pls dont use)',
      'heading': '',
      'id': 545,
      'integrations': {},
      'is_manager': false,
      'latest_version': {
        '_id': 545,
        'bot_id': 545,
        'comment': 'e2e',
        'id': 796,
        'version': 2
      },
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'name': 'e2e (pls dont use)',
      'old_id': '',
      'parent_bots': [],
      'pipelines': [],
      'resource_uri': '/api/v1/bot/545/',
      'room_close_callback': false,
      'room_persistence_time': 240,
      'transactions_per_pricing_unit': 30,
      'updated_at': 1557733759000,
      'updated_by': 'Ayesh Update'
    }
  ]
};
