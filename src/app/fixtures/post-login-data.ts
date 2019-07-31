export const post_login_data = {
  'botlist': {
    'codeBasedBotList': null,
    'pipelineBasedBotList': null,
    'allBotList': [
      {
        'active_version': {
          'bot_id': 13,
          'comment': 'Default active version',
          'id': 10,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 10,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': true,
        'avatars': [
          {
            'imageUrl': 'https://robohash.org/IntelliBot.png',
            'name': 'IntelliBot'
          },
          {
            'id': 0,
            'imageUrl': 'https://robohash.org/IntelliBot.png',
            'name': 'StarBot19'
          }
        ],
        'blanket_consent': true,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTMsInJvbGUiOiJib3QifQ.U3B_ZHcDS963Ru2XDoSUaeNY1dy9JIYkzTDP2zASQno',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'weatherytesting',
        'child_bots': [],
        'consent_categories': [],
        'consent_message': 'Test consent message',
        'created_at': 1499176494000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0.007,
        'description': 'spellcheck testing bot',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 13,
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
              'imichattoggle': false,
              'service-key': ''
            }
          },
          'channels': {
            'alexa': {
              'asyncFlag': false,
              'enable': false,
              'enabled': '',
              'skillId': ''
            },
            'facebook': {
              'enabled': true,
              'facebook-token': 'EAAEpazdnuQIBAGcJhbM1O0wZAMNoXn7KgCN6KKX8DZAReqlgWj590TG36SZByOnHKVoF6IYzoGk7nxnrDFDHVu7n07VYQSUjevtwjFL4BvH60ZCtlWHeOwxPkZBGOoZAEZA5ZA99HNWVIbJE95uDhjzwFkE3hhS1W78I5qeF6ATlJjcZCDbTZA82C3',
              'facebooktoggle': 'true',
              'id': '296418967853107'
            },
            'generic': {
              'enabled': false
            },
            'googlehome': {
              'asyncFlag': '',
              'enabled': false,
              'project': ''
            },
            'line': {
              'channel_access_token': 'wk6DfaSnhkqqq3ync1PbYJOgDlxqTswX4/rGZV1vsNALdNuFzW3oc2fkoxlHHj0DbUZ+8KdOiyBf4CHCH4Bx+vGRJ7y4CBN1U99tJdm24u/w9ysw5W+mE8kpPz2+x4NXxdJRUpqPwwj3UcmVAqw+qAdB04t89/1O/w1cDnyilFU=',
              'channel_id': '1580720057',
              'channel_secret': '0299fe30bf4a4ea94e1b1b77558d3ebd',
              'enabled': false
            },
            'skype': {
              'client_id': '848196a5-895d-4e5c-89ba-a72cfd3f6bc1',
              'client_secret': 'jtZKJHO4~=hkholTX6760)!',
              'enabled': true
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
              'enabled': false
            }
          }
        },
        'is_manager': false,
        'latest_version': {
          '_id': 13,
          'bot_id': 13,
          'comment': 'hgh',
          'id': 464,
          'version': 6
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'weatherytesting2',
        'old_id': '595b9e2e3b64b2008dde65eb',
        'parent_bots': [],
        'pipelines': [
          {
            'contextual': true,
            'created_at': 1535705344000,
            'default': false,
            'display_values': {
              'api_ai_access_token': {
                'display_value': 'api.ai access token',
                'type': 'text'
              }
            },
            'id': 35,
            'input_params': {
              'api_ai_access_token': 'asdas'
            },
            'library': 'apiai',
            'module': 'apiainlp',
            'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
            'resource_uri': '/api/v1/pipelinemodule/35/',
            'unique_name': 'API.ai',
            'updated_at': 1535705344000
          },
          {
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'display_values': {
              'extra_info': {
                'display_value': 'extra information',
                'type': 'text'
              },
              'future': {
                'display_value': 'Future',
                'type': 'text'
              }
            },
            'id': 33,
            'input_params': {
              'extra_info': 'asdadfsad',
              'future': 'asdf'
            },
            'library': 'botman',
            'module': 'timedate',
            'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
            'resource_uri': '/api/v1/pipelinemodule/33/',
            'unique_name': 'IMIbot Date Time Recognition',
            'updated_at': 1535705344000
          },
          {
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
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
              'gender': 'Female',
              'lang': 'en-GB',
              'voice_ms': 'en-IN, Heera, Apollo'
            },
            'library': 'azure',
            'module': 'texttospeech',
            'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
            'resource_uri': '/api/v1/pipelinemodule/27/',
            'unique_name': 'Azure Text to Speech',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/bot/13/',
        'room_close_callback': true,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1554121216000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 14,
          'comment': 'sadsadf  fa sd',
          'id': 383,
          'is_ui_view': false,
          'version': 2
        },
        'active_version_id': 383,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [
          {
            'id': 1,
            'imageUrl': 'https://robohash.org/SilverDroid.png',
            'name': 'SilverDroid'
          }
        ],
        'blanket_consent': true,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTQsInJvbGUiOiJib3QifQ.FjdoGZxnCeI-XkLAXmyivlELjfYgZ_klnTJr4TrxPzE',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'myfacebookbot',
        'child_bots': [],
        'consent_categories': [],
        'consent_message': '',
        'created_at': 1501759285000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'ssadas',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 14,
        'integrations': {
          'ccsp_details': {
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
              'asyncFlag': false,
              'enable': false,
              'skillId': ''
            },
            'facebook': {
              'enabled': false,
              'facebook-token': '',
              'facebooktoggle': false,
              'id': ''
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
          '_id': 14,
          'bot_id': 14,
          'comment': 'sadsadf  fa sd',
          'id': 383,
          'version': 2
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'fbbot',
        'old_id': '5983073593dac3000c9ad974',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/14/',
        'room_close_callback': false,
        'room_persistence_time': 10,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1537773602000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 16,
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
            'imageUrl': 'https://images.pexels.com/photos/34950/pexels-photo.jpg',
            'name': 'test'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTYsInJvbGUiOiJib3QifQ._wQQ4aMM_pjustejFfsUazgjDKn-lWwcKW5paOjIDhQ',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'santosh bot 2',
        'child_bots': [],
        'consent_categories': [
          'phone',
          'email'
        ],
        'consent_message': '',
        'created_at': 1516186620000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': '',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 16,
        'integrations': {
          'ccsp_details': {
            'imichat': {
              'access-token': '44',
              'domain': '66',
              'enabled': true,
              'service-key': '33'
            }
          },
          'channels': {
            'alexa': {
              'asyncFlag': false,
              'enabled': false,
              'skillId': ''
            },
            'facebook': {
              'enabled': true,
              'facebook-token': '11',
              'id': '11'
            },
            'skype': {
              'client_id': '',
              'client_secret': '',
              'enabled': false
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
          '_id': 16,
          'bot_id': 16,
          'comment': 'Default active version',
          'id': 19,
          'version': 1
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'santosh bot 2',
        'old_id': '5a5f2bfcaa71bc000de10df1',
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
        'resource_uri': '/api/v1/bot/16/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1533030159000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 18,
          'comment': 'fdfasf',
          'id': 22,
          'is_ui_view': false,
          'version': 2
        },
        'active_version_id': 22,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [
          {
            'id': 1,
            'imageUrl': 'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg',
            'name': 'test'
          }
        ],
        'blanket_consent': true,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTgsInJvbGUiOiJib3QifQ.7VSUEldlNlYTuwi-nul3mDk9LXdu55P60XdO45OiuFk',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'santosh_test_4',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': 'Sample consent message',
        'created_at': 1516880742000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'media testing',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': 'First message  for bot',
        'heading': '',
        'id': 18,
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
              'asyncFlag': false,
              'enabled': false,
              'skillId': ''
            },
            'facebook': {
              'enabled': true,
              'facebook-token': 'EAAMh4F8YLIEBAJ6J0P8LpKA8ZAmLduuS9eFSNpibMrY0QcMZADClaZAH29P5overEjbVYyz4ktPEpXq5Nmt6wIC3ZArKVVBnv0uYQRZAL1rtHW9BowoyskjclXiWneXSCffs3OGFAR8UiZBb551aOCM63OcltheZBaVadrQabZC97AZDZD',
              'id': '1578578065786449'
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
              'enabled': ''
            },
            'skype': {
              'client_id': '28012040-b436-4ae7-a525-cae81335240c',
              'client_secret': 'egcbJJKB1285}[minKDV8_$',
              'enabled': false,
              'skype-page-name': 'tasty-testy'
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
              'enabled': false
            }
          }
        },
        'is_manager': false,
        'latest_version': {
          '_id': 18,
          'bot_id': 18,
          'comment': 'added skype integration',
          'id': 499,
          'version': 9
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'Media Testing',
        'old_id': '5a69c36664b52a00144dc2de',
        'parent_bots': [],
        'pipelines': [
          {
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'display_values': {},
            'id': 9,
            'input_params': {},
            'library': 'botman',
            'module': 'numbers',
            'resource_uri': '/api/v1/pipelinemodule/9/',
            'unique_name': 'IMIbot Numbers Recognition',
            'updated_at': 1535705344000
          },
          {
            'contextual': false,
            'created_at': 1535705344000,
            'default': true,
            'display_values': {},
            'id': 5,
            'input_params': {},
            'library': 'azure',
            'module': 'spell_check',
            'resource_uri': '/api/v1/pipelinemodule/5/',
            'unique_name': 'Azure Spell Check',
            'updated_at': 1535705344000
          },
          {
            'contextual': false,
            'created_at': 1535705344000,
            'default': true,
            'display_values': {},
            'id': 7,
            'input_params': {},
            'library': 'botman',
            'module': 'custom_ners',
            'resource_uri': '/api/v1/pipelinemodule/7/',
            'unique_name': 'IMIbot Custom NER',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/bot/18/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1553595795000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 20,
          'comment': '',
          'id': 469,
          'is_ui_view': false,
          'version': 2
        },
        'active_version_id': 469,
        'advanced_data_protection': true,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': true,
        'allow_feedback': false,
        'avatars': [
          {
            'id': 1,
            'imageUrl': 'https://www.ngdata.com/wp-content/uploads/2015/06/shutterstock_278629712.jpg',
            'name': 'first'
          }
        ],
        'blanket_consent': true,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjAsInJvbGUiOiJib3QifQ.6Jr6DCA_7g_kv-aIF8AhyPC-Z6N4s-EURi-mECQnxJk',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'santosh test 7',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': 'Test consent message',
        'created_at': 1520873851000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 2,
        'description': 'asdasd',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 20,
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
              'asyncFlag': false,
              'enabled': false,
              'skillId': ''
            },
            'facebook': {
              'enabled': false,
              'facebook-token': '',
              'id': ''
            },
            'line': {
              'enabled': true
            },
            'skype': {
              'client_id': '',
              'client_secret': '',
              'enabled': false
            },
            'viber': {
              'enabled': true
            },
            'web': {
              'enabled': true
            }
          },
          'fulfillment_provider_details': {
            'imiconnect': {
              'appId': '',
              'appSecret': '',
              'enabled': false,
              'serviceKey': '',
              'streamName': ''
            }
          }
        },
        'is_manager': false,
        'latest_version': {
          '_id': 20,
          'bot_id': 20,
          'comment': '',
          'id': 469,
          'version': 2
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'santosh test 7',
        'old_id': '5aa664240951132ecc28acb9',
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
        'resource_uri': '/api/v1/bot/20/',
        'room_close_callback': false,
        'room_persistence_time': 5,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1537579563000,
        'updated_by': 'Manjula Choudhary'
      },
      {
        'active_version': {
          'bot_id': 26,
          'comment': 'Default active version',
          'id': 30,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 30,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjYsInJvbGUiOiJib3QifQ.wcmOS1cBBDuP1OMsFf98kccEFo8jnMekKb6IcWMqirc',
        'bot_metadata': {},
        'bot_type': 'intelligent',
        'bot_unique_name': 'qapipeline102',
        'child_bots': [],
        'consent_categories': [],
        'consent_message': '',
        'created_at': 1526367156000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': 'Testing bot',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 26,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 26,
          'bot_id': 26,
          'comment': 'Default active version',
          'id': 30,
          'version': 1
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'qapipelineB',
        'old_id': '5afa83b4964b580043d0d36a',
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
        'resource_uri': '/api/v1/bot/26/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1526367156000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 30,
          'comment': 'Default active version',
          'id': 40,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 40,
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
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzAsInJvbGUiOiJib3QifQ.qspM3QrnX39-wOchRrHTH608bUjtPHTai0o5SkawAc4',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'cmurltest1',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1528464473000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'Test Description',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 30,
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
              'asyncFlag': false,
              'enabled': false,
              'skillId': ''
            },
            'facebook': {
              'enabled': true,
              'facebook-token': '',
              'id': ''
            },
            'line': {
              'channel_access_token': '',
              'channel_id': '',
              'channel_secret': '',
              'enabled': true
            },
            'skype': {
              'client_id': '',
              'client_secret': '',
              'enabled': true,
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
          'id': 40,
          'version': 1
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'cmurltest1',
        'old_id': '5b1a370e09511346e8fbb04d',
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
        'updated_at': 1535949174000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 32,
          'comment': 'Default active version',
          'id': 42,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 42,
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
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzIsInJvbGUiOiJib3QifQ.9RhDlj0s5dwNAQqX1YyZOlzMgCa-wfqrVwWsJ5Cu0EQ',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'jenkinsjobtestsrc',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1529663755000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': '',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 32,
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
              'asyncFlag': false,
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
              'send_via_connect': '',
              'serviceKey': '',
              'streamName': ''
            }
          }
        },
        'is_manager': false,
        'latest_version': {
          '_id': 32,
          'bot_id': 32,
          'comment': 'Default active version',
          'id': 42,
          'version': 1
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'jenkinsjobtestsrc',
        'old_id': '5b2cd10b73a0a9000edf480b',
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
        'resource_uri': '/api/v1/bot/32/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1529663755000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 33,
          'comment': 'Default active version',
          'id': 45,
          'is_ui_view': false,
          'version': 3
        },
        'active_version_id': 45,
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
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzMsInJvbGUiOiJib3QifQ.uXjBT6ipNTgcBmEN0l2ShC9MSCU_ub3p0jVRbRvXQlQ',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'jenkinsjobtestdest',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1529664140000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': '',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 33,
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
              'asyncFlag': false,
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
              'send_via_connect': '',
              'serviceKey': '',
              'streamName': ''
            }
          }
        },
        'is_manager': false,
        'latest_version': {
          '_id': 33,
          'bot_id': 33,
          'comment': 'rtyeuyruym t eyry',
          'id': 460,
          'version': 4
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'jenkinsjobtestsrc',
        'old_id': '5b2cd28c73a0a9000c311f8e',
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
        'resource_uri': '/api/v1/bot/33/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1529665797000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 34,
          'comment': 'Default active version',
          'id': 46,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 46,
        'advanced_data_protection': true,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': true,
        'allow_feedback': false,
        'avatars': [
          {
            'id': 1,
            'imageUrl': 'https://robohash.org/SilverBot.png',
            'name': 'SilverBot'
          }
        ],
        'blanket_consent': true,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzQsInJvbGUiOiJib3QifQ.mc9Qnl98rVqn4ApfGeJ9SSfl4jGMDxwzj6Hg4AiJKcg',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'anonymization check11',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': 'Test consent message',
        'created_at': 1530004347000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0.0007,
        'description': 'anonymization bot',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': 'Hello',
        'heading': '',
        'id': 34,
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
              'asyncFlag': false,
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
              'send_via_connect': '',
              'serviceKey': '',
              'streamName': ''
            }
          }
        },
        'is_manager': false,
        'latest_version': {
          '_id': 34,
          'bot_id': 34,
          'comment': 'Default active version',
          'id': 46,
          'version': 1
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'anonymization_check1',
        'old_id': '5b32037b7c155800364499e9',
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
        'resource_uri': '/api/v1/bot/34/',
        'room_close_callback': false,
        'room_persistence_time': 1,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1536923746000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 35,
          'comment': 'Default active version',
          'id': 47,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 47,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [
          {
            'id': 1,
            'imageUrl': 'https://robohash.org/StarBot.png',
            'name': 'StarBot'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzUsInJvbGUiOiJib3QifQ.1Dh8G6MSrox1bzqXjoEd0GPPNX0Qm7DgQ5wXxxyCmuA',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'santoshtest12',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1530261588000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': '',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 35,
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
              'asyncFlag': false,
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
              'send_via_connect': '',
              'serviceKey': '',
              'streamName': ''
            }
          }
        },
        'is_manager': false,
        'latest_version': {
          '_id': 35,
          'bot_id': 35,
          'comment': 'Default active version',
          'id': 47,
          'version': 1
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'santoshtest12',
        'old_id': '5b35f0547c1558003d08af8b',
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
        'resource_uri': '/api/v1/bot/35/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1536300583000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 36,
          'comment': 'Default active version',
          'id': 48,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 48,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzcsInJvbGUiOiJib3QifQ._LMr23B2nM_2_hH2_ARCYlulH5_iGwMP8QLcNwR-JHI',
        'bot_metadata': {},
        'bot_type': 'intelligent',
        'bot_unique_name': 'santest2',
        'child_bots': [],
        'consent_categories': [],
        'consent_message': '',
        'created_at': 1531739788000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': '',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 37,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 37,
          'bot_id': 37,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'santest2',
        'old_id': '5b4c7e8ca26917009b0836a7',
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
        'resource_uri': '/api/v1/bot/37/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1531740000000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 390,
          'comment': '',
          'id': 365,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 365,
        'advanced_data_protection': true,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [
          {
            'id': 0,
            'imageUrl': 'https://robohash.org/StarBot.png',
            'name': 'StarBot'
          }
        ],
        'blanket_consent': true,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzkwLCJyb2xlIjoiYm90In0.KYsGbJhWYYY21Pkwum0bmk7OchINeW3is47ZuveBx3Q',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'test123456',
        'child_bots': [],
        'consent_categories': [],
        'consent_message': 'asjdfjsadfkjgf',
        'created_at': 1536058662000,
        'created_by': 'Sravani A',
        'data_persistence_period': 60,
        'description': 'Test bot for functionality check',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': 'wqejfjrkerlk',
        'first_message': 'hi there',
        'heading': '',
        'id': 390,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 390,
          'bot_id': 390,
          'comment': '',
          'id': 365,
          'version': 1
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'testanon',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/390/',
        'room_close_callback': false,
        'room_persistence_time': 2,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1536225568000,
        'updated_by': 'Qwerty1 Parrot'
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDE5LCJyb2xlIjoiYm90In0.rr9Nxtx2YMEWRB_HJoNe4HWEzGIrwdggJ45MNHr3RtY',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'test777',
        'child_bots': [],
        'consent_categories': [],
        'consent_message': '',
        'created_at': 1536096484000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': 'asdasd',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 419,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 419,
          'bot_id': 419,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'asdasd',
        'name': 'asdasdasdsad',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/419/',
        'room_close_callback': false,
        'room_persistence_time': 1212,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1536096484000,
        'updated_by': 'Qwerty1 Parrot'
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDIwLCJyb2xlIjoiYm90In0.j5LOM9r9NB6hnv9mFJPdat5x-x4uNts03SJbw80TAJ0',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'test8888',
        'child_bots': [],
        'consent_categories': [],
        'consent_message': '',
        'created_at': 1536096587000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': 'testbot ',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 420,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 420,
          'bot_id': 420,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'testbot ',
        'name': 'testbot ',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/420/',
        'room_close_callback': false,
        'room_persistence_time': 34234,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1536096587000,
        'updated_by': 'Qwerty1 Parrot'
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
            'imageUrl': 'https://robohash.org/StarBot.png',
            'name': 'StarBot'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDM0LCJyb2xlIjoiYm90In0.jKxOEjZfsuzOeJkcKdUADwC05yr8Qjk-UjDgMxChkz0',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'dasdtyhtsada',
        'child_bots': [],
        'consent_categories': [],
        'consent_message': '',
        'created_at': 1536125775000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': 'testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  ',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': 'sdasdadsads',
        'id': 434,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 434,
          'bot_id': 434,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'sad/lml;lkl;nmlnkmkl22',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/434/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1536125775000,
        'updated_by': 'Qwerty1 Parrot'
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
            'imageUrl': 'https://robohash.org/StarBot.png',
            'name': 'StarBot'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDM1LCJyb2xlIjoiYm90In0.-ciuxqzf2H4fQ8g2sQ51VMLwSdek8HNs0juw3FF5PLI',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'dasdtyhtasdsdafv',
        'child_bots': [],
        'consent_categories': [],
        'consent_message': '',
        'created_at': 1536125983000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': 'testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  ',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': 'asd',
        'first_message': '',
        'heading': 'sdasdadsasd',
        'id': 435,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 435,
          'bot_id': 435,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'sad/lml;lkl;nmlnkmklWhatTheFF',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/435/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1536125983000,
        'updated_by': 'Qwerty1 Parrot'
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
            'imageUrl': 'https://robohash.org/StarBot.png',
            'name': 'StarBot'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDM2LCJyb2xlIjoiYm90In0.zah7kR9YoZd-6elv6Cq3gR9RrwUoXSO3rcUwL9KSqd0',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'dasdtyhtasdsdafvasdasd',
        'child_bots': [],
        'consent_categories': [],
        'consent_message': '',
        'created_at': 1536126313000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': 'testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  ',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': 'asd',
        'first_message': '',
        'heading': 'sdasdadsasd',
        'id': 436,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 436,
          'bot_id': 436,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'sad/lml;lkl;nmlnkmklWhatTheFF',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/436/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1536126313000,
        'updated_by': 'Qwerty1 Parrot'
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
            'imageUrl': 'https://robohash.org/StarBot.png',
            'name': 'StarBot'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDM3LCJyb2xlIjoiYm90In0.MlDqsEBvgDf10sY3f9sAaJFDLWqqroGEdWQaaP0zSz8',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'dasdtyhtasdsdafvasdasdssa',
        'child_bots': [],
        'consent_categories': [],
        'consent_message': '',
        'created_at': 1536126529000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': 'testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  ',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': 'asd',
        'first_message': '',
        'heading': 'sdasdadsasd',
        'id': 437,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 437,
          'bot_id': 437,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'sad/lml;lkl;nmlnkmklWhatTheFFa',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/437/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1536126529000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 439,
          'comment': '',
          'id': 380,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 380,
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDM5LCJyb2xlIjoiYm90In0.2HQGTM5Y511QS8dFoS8nfM7WWuWu2yC_deKUxsiDJYE',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'testing bot 0002',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1536127151000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'Play Game and win Coupons',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': 'Hi.. Welcome to test world. I am testing bot.',
        'heading': 'Welcome to the Game World',
        'id': 439,
        'integrations': {
          'ccsp_details': {
            'debug': {
              'debugurl': '',
              'enabled': false
            },
            'imichat': {
              'access-token': '8ae392b1-d262-4385-9fd2-4aff0edbbc13',
              'domain': 'imibot.imi.ai',
              'enabled': false,
              'service-key': 'a0667b8c-3242-4217-9b4d-5162ae8d7356'
            }
          },
          'channels': {
            'alexa': {
              'asyncFlag': false,
              'enabled': false,
              'skillId': ''
            },
            'facebook': {
              'enabled': false,
              'facebook-token': 'EAADdQ7jKozwBAKkTmnSWOTUglBdqjBdgnuKRmQDJMHKjL7vhHc5BaxJUrSgZAZAmQLYcDBcb81jR8SKc9LvVqWiQLB0RLFQIBwzULyizo2sePeAXRSZC1BiZBHOF0mcD3akBgKEjzZC7gCYuZAQDjoxfyvH1NZCCbG69yiUt3jHSwZDZD',
              'id': '314363828988731'
            },
            'imiconnect': {
              'appId': '',
              'appSecret': '',
              'enabled': false,
              'serviceKey': '',
              'streamName': ''
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
              'send_via_connect': '',
              'serviceKey': '',
              'streamName': ''
            }
          }
        },
        'is_manager': false,
        'latest_version': {
          '_id': 439,
          'bot_id': 439,
          'comment': '',
          'id': 380,
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
            'id': 'IMIbot Common Sense',
            'inputParams': {},
            'library': 'botman',
            'module': 'commonsense',
            'type': 'item'
          }
        ],
        'resource_uri': '/api/v1/bot/439/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 0,
        'updated_at': 1536582693000,
        'updated_by': 'Qwerty1 Parrot'
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
            'imageUrl': 'https://robohash.org/StarBot.png',
            'name': 'StarBot'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDQwLCJyb2xlIjoiYm90In0.TGvCI7_d9lhiOPWJtzV3e73CDTAap2CN90d14wFYEtU',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'ShoaibSiddiquie',
        'child_bots': [],
        'consent_categories': [],
        'consent_message': '',
        'created_at': 1536128137000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': 'testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  testing bot for spellcheck  ',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': 'asd',
        'first_message': '',
        'heading': 'sdasdadsasd',
        'id': 440,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 440,
          'bot_id': 440,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'Shaoib',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/440/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1536128137000,
        'updated_by': 'Qwerty1 Parrot'
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDQzLCJyb2xlIjoiYm90In0.CeS0uDqsr_WbznpvMl1HnMgtNAHi8ilttC4tvlcwJ9I',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'APPLE_123',
        'child_bots': [],
        'consent_categories': [],
        'consent_message': '',
        'created_at': 1536128929000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': 'APPLE_123',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 443,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 443,
          'bot_id': 443,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'APPLE_123',
        'name': 'APPLE_123',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/443/',
        'room_close_callback': false,
        'room_persistence_time': 132,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1536128929000,
        'updated_by': 'Qwerty1 Parrot'
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDQ0LCJyb2xlIjoiYm90In0.Hmk_p7fy1xUyYYcip-_2TK6JEOt7HVsV1m92iGRvuxA',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'salil',
        'child_bots': [],
        'consent_categories': [],
        'consent_message': '',
        'created_at': 1536130232000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': 'sdasda',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 444,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 444,
          'bot_id': 444,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'http://hdwallpapersbuzz.com/wp-content/uploads/2017/04/train-logo-1.png',
        'name': 'salil',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/444/',
        'room_close_callback': false,
        'room_persistence_time': 2,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1536130232000,
        'updated_by': 'Qwerty1 Parrot'
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
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'final',
        'child_bots': [],
        'consent_categories': [],
        'consent_message': '',
        'created_at': 1536130536000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': 'asdas',
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
        'logo': 'asdasdasd',
        'name': 'final',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/445/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1536130536000,
        'updated_by': 'Qwerty1 Parrot'
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
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'final2',
        'child_bots': [],
        'consent_categories': [],
        'consent_message': '',
        'created_at': 1536130589000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': 'asdas',
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
        'logo': 'asdasdasd',
        'name': 'final',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/446/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1536130589000,
        'updated_by': 'Qwerty1 Parrot'
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDQ3LCJyb2xlIjoiYm90In0.Siodfiid3UU84n5o5sZjVrQySYT9UhjylE8XlA4igrE',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'final3',
        'child_bots': [],
        'consent_categories': [],
        'consent_message': '',
        'created_at': 1536130684000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': 'asdas',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 447,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 447,
          'bot_id': 447,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'asdasdasd',
        'name': 'final',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/447/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1536130684000,
        'updated_by': 'Qwerty1 Parrot'
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDUyLCJyb2xlIjoiYm90In0.B5HyFYNBa2qUDMB3vBmFLLEWTwxotzpqa0ZrKaZefoU',
        'bot_metadata': {},
        'bot_type': 'intelligent',
        'bot_unique_name': 'BOT_TYPE1',
        'child_bots': [],
        'consent_categories': [],
        'consent_message': '',
        'created_at': 1536131742000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': 'sadasd',
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
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'asdasd',
        'name': 'BOT_TYPE',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/452/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1536131742000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 465,
          'comment': '',
          'id': 372,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 372,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDY1LCJyb2xlIjoiYm90In0.tBGqcgL-MALrbSz2Ft5ci4dUg7X2WWw3vSp_0jS6kGg',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'spellcheck_testing1212',
        'child_bots': [],
        'consent_categories': [],
        'consent_message': '',
        'created_at': 1536181786000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': 'spellcheck testing bot',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 465,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 465,
          'bot_id': 465,
          'comment': 'testing',
          'id': 373,
          'version': 2
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'testbot ',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/465/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1536181939000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 491,
          'comment': '',
          'id': 384,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 384,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDkxLCJyb2xlIjoiYm90In0.1WsNTPQUIlpr34qZpmYdpqCrBPRSzHi24Z6lhXoRCZ0',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'skypewype',
        'child_bots': [],
        'consent_categories': [],
        'consent_message': '',
        'created_at': 1536230993000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': 'skype tester',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 491,
        'integrations': {
          'ccsp_details': {
            'debug': {
              'debugurl': '',
              'enabled': ''
            },
            'imichat': {
              'access-token': '',
              'domain': '',
              'enabled': '',
              'service-key': ''
            }
          },
          'channels': {
            'alexa': {
              'asyncFlag': false,
              'enabled': '',
              'skillId': ''
            },
            'facebook': {
              'enabled': '',
              'facebook-token': '',
              'id': ''
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
              'send_via_connect': '',
              'serviceKey': '',
              'streamName': ''
            }
          }
        },
        'is_manager': false,
        'latest_version': {
          '_id': 491,
          'bot_id': 491,
          'comment': 'why so stupid?',
          'id': 387,
          'version': 3
        },
        'logo': 'http://hdwallpapersbuzz.com/wp-content/uploads/2017/04/train-logo-1.png',
        'name': 'skype tester',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [
          {
            'contextual': false,
            'created_at': 1535705344000,
            'default': true,
            'display_values': {},
            'id': 8,
            'input_params': {},
            'library': 'botman',
            'module': 'commonsense',
            'resource_uri': '/api/v1/pipelinemodule/8/',
            'unique_name': 'IMIbot Common Sense',
            'updated_at': 1535705344000
          },
          {
            'contextual': false,
            'created_at': 1535705344000,
            'default': true,
            'display_values': {},
            'id': 7,
            'input_params': {},
            'library': 'botman',
            'module': 'custom_ners',
            'resource_uri': '/api/v1/pipelinemodule/7/',
            'unique_name': 'IMIbot Custom NER',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/bot/491/',
        'room_close_callback': false,
        'room_persistence_time': 2,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1536652393000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 520,
          'comment': '',
          'id': 421,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 421,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTIwLCJyb2xlIjoiYm90In0.qPqRw32F5HwA4CTd5qtBI0mRXAmVV8BKJg-jpDpUYqY',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'skype_t',
        'child_bots': [],
        'consent_categories': [],
        'consent_message': '',
        'created_at': 1536579721000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': 'test',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 520,
        'integrations': {
          'ccsp_details': {
            'debug': {
              'debugurl': '',
              'enabled': ''
            },
            'imichat': {
              'access-token': '',
              'domain': '',
              'enabled': '',
              'service-key': ''
            }
          },
          'channels': {
            'alexa': {
              'asyncFlag': false,
              'enabled': '',
              'skillId': ''
            },
            'facebook': {
              'enabled': '',
              'facebook-token': '',
              'id': ''
            },
            'line': {
              'channel_access_token': '',
              'channel_id': '',
              'channel_secret': '',
              'enabled': ''
            },
            'skype': {
              'client_id': '28012040-b436-4ae7-a525-cae81335240c',
              'client_secret': 'egcbJJKB1285}[minKDV8_$',
              'enabled': false,
              'skype-page-name': 'tasty-testy'
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
              'send_via_connect': '',
              'serviceKey': '',
              'streamName': ''
            }
          }
        },
        'is_manager': false,
        'latest_version': {
          '_id': 520,
          'bot_id': 520,
          'comment': '',
          'id': 421,
          'version': 1
        },
        'logo': 'http://hdwallpapersbuzz.com/wp-content/uploads/2017/04/train-logo-1.png',
        'name': 'test_skype',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/520/',
        'room_close_callback': false,
        'room_persistence_time': 2,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1537529491000,
        'updated_by': 'Qwerty1 Parrot'
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTY2LCJyb2xlIjoiYm90In0.2nHAm9rTTM8xGCH5oWvoVrdbFAdMF7LKl-4sbfiOHH8',
        'bot_metadata': {},
        'bot_type': 'intelligent',
        'bot_unique_name': 'Pipeline_based_bot77',
        'child_bots': [],
        'consent_categories': [
          'data_retention'
        ],
        'consent_message': '',
        'created_at': 1536679971000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'Pipeline_based_bot77',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 566,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 566,
          'bot_id': 566,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'Pipeline_based_bot77',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/566/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1536680526000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 572,
          'comment': '',
          'id': 434,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 434,
        'advanced_data_protection': true,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [
          {
            'id': 0,
            'imageUrl': 'https://robohash.org/SilverDroid.png',
            'name': 'StarBot79'
          },
          {
            'id': 0,
            'imageUrl': 'https://robohash.org/StarDroid.png',
            'name': 'StarBot44'
          }
        ],
        'blanket_consent': true,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTcyLCJyb2xlIjoiYm90In0.JDTM0q-iD8Oc5ynWALso7gnTSYcvMRpZFftQD3Q2YyM',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'anonynizeQA1',
        'child_bots': [
          13
        ],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1536924100000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0.0007,
        'description': 'Testing bot overflowing desription test Testing bot overflowing desription testT',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 572,
        'integrations': {
          'ccsp_details': {
            'debug': {
              'debugurl': 'sdasdasd',
              'enabled': false
            },
            'imichat': {
              'access-token': 'asdasd',
              'domain': 'sadasasd',
              'enabled': false,
              'service-key': 'dsadasd'
            }
          },
          'channels': {
            'alexa': {
              'asyncFlag': false,
              'enabled': '',
              'skillId': ''
            },
            'facebook': {
              'enabled': false,
              'facebook-token': 'asdsdsd',
              'id': 'sasdsd'
            },
            'line': {
              'channel_access_token': '',
              'channel_id': '',
              'channel_secret': '',
              'enabled': ''
            },
            'skype': {
              'client_id': 'wqeqweqw',
              'client_secret': 'asdasdas',
              'enabled': false,
              'skype-page-name': 'asdasdasda'
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
              'appId': 'asdsa',
              'appSecret': 'asdasd',
              'enabled': false,
              'send_via_connect': 'sdasd',
              'serviceKey': 'asdas',
              'streamName': 'sadasd'
            }
          }
        },
        'is_manager': false,
        'latest_version': {
          '_id': 572,
          'bot_id': 572,
          'comment': 'df',
          'id': 462,
          'version': 11
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'anonynize_qa1',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [
          {
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'display_values': {},
            'id': 15,
            'input_params': {},
            'library': 'botman',
            'module': 'spell_check',
            'resource_uri': '/api/v1/pipelinemodule/15/',
            'unique_name': 'IMIbot Spell Check',
            'updated_at': 1535705344000
          },
          {
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'display_values': {},
            'id': 6,
            'input_params': {},
            'library': 'google',
            'module': 'parsetree',
            'resource_uri': '/api/v1/pipelinemodule/6/',
            'unique_name': 'Google Parse Tree',
            'updated_at': 1535705344000
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
        'resource_uri': '/api/v1/bot/572/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1537176527000,
        'updated_by': 'Qwerty1 Parrot'
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTczLCJyb2xlIjoiYm90In0.vB7-XSHgvxzqMbVZIbF8O5Y9-aKPCV6_baWZGfT97co',
        'bot_metadata': {},
        'bot_type': 'intelligent',
        'bot_unique_name': 'saad324234',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1537103573000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'asdas',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 573,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 573,
          'bot_id': 573,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'sdasdasdasdasd',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [
          {
            'contextual': false,
            'created_at': 1535705344000,
            'default': true,
            'display_values': {},
            'id': 5,
            'input_params': {},
            'library': 'azure',
            'module': 'spell_check',
            'resource_uri': '/api/v1/pipelinemodule/5/',
            'unique_name': 'Azure Spell Check',
            'updated_at': 1535705344000
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
        'resource_uri': '/api/v1/bot/573/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1537104609000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 593,
          'comment': '',
          'id': 482,
          'is_ui_view': false,
          'version': 2
        },
        'active_version_id': 482,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [
          {
            'id': 0,
            'imageUrl': 'https://robohash.org/SilverDroid.png',
            'name': 'StarBot96'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTkzLCJyb2xlIjoiYm90In0.0Xco02pbvUPWddbBdW-2Asu80BLN3TCkTUpxa1GIwsk',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'asdasdasa21331',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1537617222000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'asdsad',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 593,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 593,
          'bot_id': 593,
          'comment': '',
          'id': 482,
          'version': 2
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'sadasdas',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/593/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1537730828000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 605,
          'comment': 'New New V',
          'id': 498,
          'is_ui_view': false,
          'version': 3
        },
        'active_version_id': 498,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [
          {
            'id': 0,
            'imageUrl': 'https://robohash.org/SmartBot.png',
            'name': 'StarBot20'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NjA1LCJyb2xlIjoiYm90In0.Ig_dAwH5E_wWLTwwX5KvXunJtketMlGwpRh1X3Er45I',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'VersioningTesting',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1537943977000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'Versioning',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 605,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 605,
          'bot_id': 605,
          'comment': 'New New V',
          'id': 498,
          'version': 3
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'Code versioning Testing',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/605/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1537944213000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 614,
          'comment': 'Default Active Version',
          'id': 509,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 509,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [
          {
            'id': 0,
            'imageUrl': 'https://robohash.org/SilverDroid.png',
            'name': 'StarBot70'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NjE0LCJyb2xlIjoiYm90In0.mFwJh9aMUsrUwwXvuWWXPAC6L-R0IomLwx7wIebYKoc',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'botversion_test',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1538314708000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'asdas',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 614,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 614,
          'bot_id': 614,
          'comment': 'Default Active Version',
          'id': 509,
          'version': 1
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'botversion_test',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [
          {
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'display_values': {},
            'id': 6,
            'input_params': {},
            'library': 'google',
            'module': 'parsetree',
            'resource_uri': '/api/v1/pipelinemodule/6/',
            'unique_name': 'Google Parse Tree',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/bot/614/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1538984381000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 636,
          'comment': 'Default Active Version',
          'id': 528,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 528,
        'advanced_data_protection': true,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': true,
        'allow_feedback': false,
        'avatars': [
          {
            'imageUrl': 'https://robohash.org/SilverDroid.png',
            'name': 'StarBot94'
          }
        ],
        'blanket_consent': true,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NjM2LCJyb2xlIjoiYm90In0.VvTwKuNX5gdap-HyR4PmT7v6xp7Bi2P6NRO3UDhmOSc',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'afsdgfds',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': 'saddfsasdfasfd',
        'created_at': 1539941898000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0.0007,
        'description': 'addsf',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': 'asdf',
        'heading': 'wdgrt',
        'id': 636,
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
              'asyncFlag': false,
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
              'send_via_connect': '',
              'serviceKey': '',
              'streamName': ''
            }
          }
        },
        'is_manager': false,
        'latest_version': {
          '_id': 636,
          'bot_id': 636,
          'comment': 'sdasd',
          'id': 536,
          'version': 3
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': ' xcc',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/636/',
        'room_close_callback': false,
        'room_persistence_time': 1,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1540556463000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 637,
          'comment': 'Default Active Version',
          'id': 529,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 529,
        'advanced_data_protection': true,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': true,
        'allow_feedback': false,
        'avatars': [
          {
            'imageUrl': 'https://robohash.org/IntelliBot.png',
            'name': 'StarBot70'
          }
        ],
        'blanket_consent': true,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NjM3LCJyb2xlIjoiYm90In0.aE85Z6i7D3lEojSLMb6OH7-gKEmCoDcI-5nseqrzd9M',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'datamgntqa1',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': 'test consent',
        'created_at': 1539947636000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0.0007,
        'description': 'test bot',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 637,
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
              'asyncFlag': '',
              'enabled': false,
              'skillId': ''
            },
            'facebook': {
              'enabled': true,
              'facebook-token': 'asd',
              'id': 'asda'
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
              'appId': '',
              'appSecret': '',
              'enabled': false,
              'send_via_connect': '',
              'serviceKey': '',
              'streamName': ''
            }
          }
        },
        'is_manager': false,
        'latest_version': {
          '_id': 637,
          'bot_id': 637,
          'comment': 'yiu',
          'id': 586,
          'version': 3
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'datamgntqa1',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/637/',
        'room_close_callback': true,
        'room_persistence_time': 1,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1542273887000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 639,
          'comment': 'Default Active Version',
          'id': 538,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 538,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [
          {
            'imageUrl': 'https://robohash.org/SmartBot.png',
            'name': 'StarBot51'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NjM5LCJyb2xlIjoiYm90In0.xHynIpGY01MsAzHiMlDRKt-_LZGf7OMVthT2qo1z8hU',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'newtestingcodevalidationbot',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '10',
        'created_at': 1541058376000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'Testing Cod eValidations',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': 'Sorry, we could not process',
        'first_message': 'Hi, How can I help you?',
        'heading': 'Testing Code Validations',
        'id': 639,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 639,
          'bot_id': 639,
          'comment': '',
          'id': 541,
          'version': 3
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'New Testing Code Validation BOT',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/639/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1541398688000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 642,
          'comment': 'Default Active Version',
          'id': 543,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 543,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [
          {
            'imageUrl': 'https://robohash.org/SilverDroid.png',
            'name': 'StarBot94'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NjQyLCJyb2xlIjoiYm90In0.b4LG6N9UxsII9RhMf-jU7VYTNEetDG_MOAwLE7EgF5o',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'testingbotuniquename',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1541397556000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'testing',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 642,
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
              'asyncFlag': '',
              'enabled': false,
              'skillId': ''
            },
            'facebook': {
              'enabled': true,
              'facebook-token': 'EAAgFQ9olfZAoBAOBSDJLdZAmVcNIorfyJacDZAmL7pZCg8QQWdB4IV46KaFmUjoOakCFpB8NX3vvKq7RwVDo1r6JiR8uogLLeG3tJ7a8PLwkguCh7Hz1TZCofBXh6a9SISejNRiYHPKU4cgwASVZA9yAm4U34wTXOYQsVNZABrYZAQZDZD',
              'id': '267604503942769'
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
              'send_via_connect': '',
              'serviceKey': '',
              'streamName': ''
            }
          }
        },
        'is_manager': false,
        'latest_version': {
          '_id': 642,
          'bot_id': 642,
          'comment': '',
          'id': 544,
          'version': 2
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'Testing Bot Unique Name 123',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/642/',
        'room_close_callback': false,
        'room_persistence_time': 1,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1543215579000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 645,
          'comment': 'Default Active Version',
          'id': 547,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 547,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [
          {
            'imageUrl': 'https://robohash.org/SmartBot.png',
            'name': 'StarBot66'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NjQ1LCJyb2xlIjoiYm90In0.whRHbAheDnCnSgUL_JvgB13V-J4g7KG0CGV1uQfYrm0',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'thisisgoodaasas',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1541451935000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'sdas',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 645,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 645,
          'bot_id': 645,
          'comment': 'Default Active Version',
          'id': 547,
          'version': 1
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'this is goodaasas',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/645/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1541451935000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 646,
          'comment': 'Default Active Version',
          'id': 548,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 548,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [
          {
            'imageUrl': 'https://robohash.org/SilverDroid.png',
            'name': 'StarBot30'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NjQ2LCJyb2xlIjoiYm90In0.htTV6cksFaydExeZ6FDy8zK3ymTMs6s5UrDSrLtFGbo',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'botuniqueqatesting123',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1541479232000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'dsdsf',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 646,
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
              'asyncFlag': '',
              'enabled': false,
              'skillId': ''
            },
            'facebook': {
              'enabled': true,
              'facebook-token': 'EAAFRb218cyMBAH4HGJgdIZCWCTfwgtKVUfuFAWZCfJNQ3ZCW1Y2M4rpX0RT0y03CQZC9VdOhqXtnr8yjJxuYYuDdYjcwu1BD7TIb5ZBFyt2lFSfhH3OElBb0tINRcelryZCxd3eNlSggNUq1377b9u45UhLDfsC5KtZBw6pr4kweZAZAmESz7gIbQOuP6Hy1ZBtT4ZD',
              'id': '265734924139545'
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
              'send_via_connect': '',
              'serviceKey': '',
              'streamName': ''
            }
          }
        },
        'is_manager': false,
        'latest_version': {
          '_id': 646,
          'bot_id': 646,
          'comment': '',
          'id': 591,
          'version': 2
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'Testing QA Bot unique name 1',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [
          {
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
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
              'gender': 'Female',
              'lang': 'en-GB',
              'voice_ms': 'en-CA, Linda'
            },
            'library': 'azure',
            'module': 'texttospeech',
            'resource_uri': '/api/v1/pipelinemodule/27/',
            'unique_name': 'Azure Text to Speech',
            'updated_at': 1535705344000
          },
          {
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'display_values': {
              'filetype': {
                'content': [
                  'mp3'
                ],
                'default': 'mp3',
                'display_value': 'Output format',
                'type': 'dropdown'
              },
              'speech_language': {
                'content': [
                  'af-ZA',
                  'am-ET',
                  'hy-AM',
                  'az-AZ',
                  'id-ID',
                  'ms-MY',
                  'bn-BD',
                  'bn-IN',
                  'ca-ES',
                  'cs-CZ',
                  'da-DK',
                  'de-DE',
                  'en-AU',
                  'en-CA',
                  'en-GH',
                  'en-GB',
                  'en-IN',
                  'en-IE',
                  'en-KE',
                  'en-NZ',
                  'en-NG',
                  'en-PH',
                  'en-ZA',
                  'en-TZ',
                  'en-US',
                  'es-AR',
                  'es-BO',
                  'es-CL',
                  'es-CO',
                  'es-CR',
                  'es-EC',
                  'es-SV',
                  'es-ES',
                  'es-US',
                  'es-GT',
                  'es-HN',
                  'es-MX',
                  'es-NI',
                  'es-PA',
                  'es-PY',
                  'es-PE',
                  'es-PR',
                  'es-DO',
                  'es-UY',
                  'es-VE',
                  'eu-ES',
                  'fil-PH',
                  'fr-CA',
                  'fr-FR',
                  'gl-ES',
                  'ka-GE',
                  'gu-IN',
                  'hr-HR',
                  'zu-ZA',
                  'is-IS',
                  'it-IT',
                  'jv-ID',
                  'kn-IN',
                  'km-KH',
                  'lo-LA',
                  'lv-LV',
                  'lt-LT',
                  'hu-HU',
                  'ml-IN',
                  'mr-IN',
                  'nl-NL',
                  'ne-NP',
                  'nb-NO',
                  'pl-PL',
                  'pt-BR',
                  'pt-PT',
                  'ro-RO',
                  'si-LK',
                  'sk-SK',
                  'sl-SI',
                  'su-ID',
                  'sw-TZ',
                  'sw-KE',
                  'fi-FI',
                  'sv-SE',
                  'ta-IN',
                  'ta-SG',
                  'ta-LK',
                  'ta-MY',
                  'te-IN',
                  'vi-VN',
                  'tr-TR',
                  'ur-PK',
                  'ur-IN',
                  'el-GR',
                  'bg-BG',
                  'ru-RU',
                  'sr-RS',
                  'uk-UA',
                  'he-IL',
                  'ar-IL',
                  'ar-JO',
                  'ar-AE',
                  'ar-BH',
                  'ar-DZ',
                  'ar-SA',
                  'ar-IQ',
                  'ar-KW',
                  'ar-MA',
                  'ar-TN',
                  'ar-OM',
                  'ar-PS',
                  'ar-QA',
                  'ar-LB',
                  'ar-EG',
                  'fa-IR',
                  'hi-IN',
                  'th-TH',
                  'ko-KR',
                  'cmn-Hant-TW',
                  'yue-Hant-HK',
                  'ja-JP',
                  'cmn-Hans-HK',
                  'cmn-Hans-CN'
                ],
                'default': 'en-uk',
                'display_value': 'Language',
                'type': 'dropdown'
              }
            },
            'id': 29,
            'input_params': {
              'filetype': 'mp3',
              'speech_language': 'en-KE'
            },
            'library': 'google',
            'module': 'texttospeech',
            'resource_uri': '/api/v1/pipelinemodule/29/',
            'unique_name': 'Google Text to Speech',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/bot/646/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1543223228000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 653,
          'comment': 'Default Active Version',
          'id': 554,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 554,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [
          {
            'imageUrl': 'https://robohash.org/IntelliBot.png',
            'name': 'StarBot19'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NjUzLCJyb2xlIjoiYm90In0.CKdYZSvmB866zFhJhgylk-A4qVCsztDSnylwIgaXiIw',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'testingbotgentemplatesnew',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1542020692000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'Testing Gen Templates full',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 653,
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
              'asyncFlag': '',
              'enabled': false,
              'skillId': ''
            },
            'facebook': {
              'enabled': true,
              'facebook-token': '267604503942769',
              'id': 'EAAgFQ9olfZAoBAOBSDJLdZAmVcNIorfyJacDZAmL7pZCg8QQWdB4IV46KaFmUjoOakCFpB8NX3vvKq7RwVDo1r6JiR8uogLLeG3tJ7a8PLwkguCh7Hz1TZCofBXh6a9SISejNRiYHPKU4cgwASVZA9yAm4U34wTXOYQsVNZABrYZAQZDZD'
            },
            'googlehome': {
              'asyncFlag': '',
              'enabled': false,
              'project': ''
            },
            'line': {
              'channel_access_token': 'xasxac',
              'channel_id': 'xzd',
              'channel_secret': 'xasxas',
              'enabled': false
            },
            'skype': {
              'client_id': '',
              'client_secret': '',
              'enabled': true,
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
              'send_via_connect': '',
              'serviceKey': '',
              'streamName': ''
            }
          }
        },
        'is_manager': false,
        'latest_version': {
          '_id': 653,
          'bot_id': 653,
          'comment': 'Default Active Version',
          'id': 554,
          'version': 1
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'Testing Bot Gen Templates New',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/653/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1542025559000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 655,
          'comment': 'Default Active Version',
          'id': 556,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 556,
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NjU1LCJyb2xlIjoiYm90In0.GyDF-jbsSSMVEg3x0IYWZsODJ7ARG3xT0laI5cI-kvQ',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'testing bot 656551',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1542027627000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'Play Game and win Coupons',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': 'Hi.. Welcome to test world. I am testing bot.',
        'heading': 'Welcome to the Game World',
        'id': 655,
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
              'facebook-token': 'EAAc8APVKjxsBAI86VkZBDg5ZCZAGXSMpVsNQRdUgTSR1eq31ajiajCLSsTQLAeEzgqs6uKN2qq0VBAXcDX31D2OPzEJvaQZAzkNNLcexNxuresG7zXabZCIfySUnEUf9XVbDPWBRZAwJZBFdtAnmXusEYtHlIZAHiPzRWB8jdsFlswZDZD',
              'id': '194700987927464'
            },
            'googlehome': {
              'asyncFlag': '',
              'enabled': false,
              'project': ''
            },
            'line': {
              'channel_access_token': 'qdhxHNStR+UMGFXf2CLR0znRNdKvGfYPAWiNNpi5s4CSTwiLGn5icrE1WzmS/fPM+0hhoEVxTJoQ6WiiWqXVy2Q+7/IhjQG72OUsAJZCtoXyxM3hk78D/PZxaDYa6/MZr2EW7GWNLmNHac147iF1dAdB04t89/1O/w1cDnyilFU=',
              'channel_id': '1621830639',
              'channel_secret': '4a7ec027f16ad1421f706b1127c3a649',
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
              'send_via_connect': '',
              'serviceKey': '',
              'streamName': ''
            }
          }
        },
        'is_manager': false,
        'latest_version': {
          '_id': 655,
          'bot_id': 655,
          'comment': 'Default Active Version',
          'id': 556,
          'version': 1
        },
        'logo': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
        'name': 'testing 004',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/655/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 0,
        'updated_at': 1543488223000,
        'updated_by': 'Qwerty1 Parrot'
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NjU4LCJyb2xlIjoiYm90In0.TL0HAFUrh6nay3S6j2oTLIlTO1C-XUEfVsbrshI4qR8',
        'bot_metadata': {},
        'bot_type': 'intelligent',
        'bot_unique_name': 'uhu',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1542091041000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'uij',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 658,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 658,
          'bot_id': 658,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'uhu',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [
          {
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
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
              'gender': 'Female',
              'lang': 'hi-IN',
              'voice_ms': 'hi-IN, Kalpana'
            },
            'library': 'azure',
            'module': 'texttospeech',
            'resource_uri': '/api/v1/pipelinemodule/27/',
            'unique_name': 'Azure Text to Speech',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/bot/658/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1542097430000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 659,
          'comment': 'Default Active Version',
          'id': 558,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 558,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [
          {
            'imageUrl': 'https://robohash.org/SmartDroid.png',
            'name': 'StarBot84'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NjU5LCJyb2xlIjoiYm90In0.zt2ItLn_iAD1PoXdI68uTs9sJtrwxEhY-jn9zW2zNHE',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'qabotsplashscreen',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1542100984000,
        'created_by': 'QA Admin',
        'data_persistence_period': 30,
        'description': 'Splash Screen testing',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 659,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 659,
          'bot_id': 659,
          'comment': 'Default Active Version',
          'id': 558,
          'version': 1
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'QA BOT Splash Screen',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/659/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1542100985000,
        'updated_by': 'QA Admin'
      },
      {
        'active_version': {
          'bot_id': 661,
          'comment': 'Default Active Version',
          'id': 559,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 559,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [
          {
            'imageUrl': 'https://robohash.org/SilverDroid.png',
            'name': 'StarBot22'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NjYxLCJyb2xlIjoiYm90In0.v6_p_bVfhxZ_PrU0xRBfJM-v1yNYgcRT4tNQ7wjXw00',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'testingdevspalsghscreen',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1542101085000,
        'created_by': 'QA Developer',
        'data_persistence_period': 30,
        'description': '12324r',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 661,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 661,
          'bot_id': 661,
          'comment': 'Default Active Version',
          'id': 559,
          'version': 1
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'Testing Dev Spalsgh screen',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/661/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1542101085000,
        'updated_by': 'QA Developer'
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NjYzLCJyb2xlIjoiYm90In0.HMlbnHo2tc4WeModLThC73sXx3G6TWYnWN6F7p0n9KI',
        'bot_metadata': {},
        'bot_type': 'intelligent',
        'bot_unique_name': 'testpipelinebotsplash',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1542101864000,
        'created_by': 'QA Admin',
        'data_persistence_period': 30,
        'description': 'Testing Splash Screen',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 663,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 663,
          'bot_id': 663,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'Test Pipeline BOT Splash',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/663/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1542101864000,
        'updated_by': 'QA Admin'
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NjY0LCJyb2xlIjoiYm90In0.uFH0dYVWWhtlTa-evJ-QXBuk62FsUwvC7fMgcSyNjBo',
        'bot_metadata': {},
        'bot_type': 'intelligent',
        'bot_unique_name': 'pilelinebasedbot',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1542101912000,
        'created_by': 'QA Developer',
        'data_persistence_period': 30,
        'description': 'Testing sensitive message',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 664,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 664,
          'bot_id': 664,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'Pileline Based Bot',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/664/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1542101912000,
        'updated_by': 'QA Developer'
      },
      {
        'active_version': {
          'bot_id': 665,
          'comment': 'Default Active Version',
          'id': 561,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 561,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [
          {
            'imageUrl': 'https://robohash.org/SmartDroid.png',
            'name': 'StarBot37'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NjY1LCJyb2xlIjoiYm90In0.JcoQm_XAV05yYEIUsLZZGKMf59j-j5uMMPJaTISQlyU',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'spellcheck',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1542110557000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'asdasd',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 665,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 665,
          'bot_id': 665,
          'comment': 'Default Active Version',
          'id': 561,
          'version': 1
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'spell check',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [
          {
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
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
              'speech_language': {
                'content': [
                  'af-ZA',
                  'am-ET',
                  'hy-AM',
                  'az-AZ',
                  'id-ID',
                  'ms-MY',
                  'bn-BD',
                  'bn-IN',
                  'ca-ES',
                  'cs-CZ',
                  'da-DK',
                  'de-DE',
                  'en-AU',
                  'en-CA',
                  'en-GH',
                  'en-GB',
                  'en-IN',
                  'en-IE',
                  'en-KE',
                  'en-NZ',
                  'en-NG',
                  'en-PH',
                  'en-ZA',
                  'en-TZ',
                  'en-US',
                  'es-AR',
                  'es-BO',
                  'es-CL',
                  'es-CO',
                  'es-CR',
                  'es-EC',
                  'es-SV',
                  'es-ES',
                  'es-US',
                  'es-GT',
                  'es-HN',
                  'es-MX',
                  'es-NI',
                  'es-PA',
                  'es-PY',
                  'es-PE',
                  'es-PR',
                  'es-DO',
                  'es-UY',
                  'es-VE',
                  'eu-ES',
                  'fil-PH',
                  'fr-CA',
                  'fr-FR',
                  'gl-ES',
                  'ka-GE',
                  'gu-IN',
                  'hr-HR',
                  'zu-ZA',
                  'is-IS',
                  'it-IT',
                  'jv-ID',
                  'kn-IN',
                  'km-KH',
                  'lo-LA',
                  'lv-LV',
                  'lt-LT',
                  'hu-HU',
                  'ml-IN',
                  'mr-IN',
                  'nl-NL',
                  'ne-NP',
                  'nb-NO',
                  'pl-PL',
                  'pt-BR',
                  'pt-PT',
                  'ro-RO',
                  'si-LK',
                  'sk-SK',
                  'sl-SI',
                  'su-ID',
                  'sw-TZ',
                  'sw-KE',
                  'fi-FI',
                  'sv-SE',
                  'ta-IN',
                  'ta-SG',
                  'ta-LK',
                  'ta-MY',
                  'te-IN',
                  'vi-VN',
                  'tr-TR',
                  'ur-PK',
                  'ur-IN',
                  'el-GR',
                  'bg-BG',
                  'ru-RU',
                  'sr-RS',
                  'uk-UA',
                  'he-IL',
                  'ar-IL',
                  'ar-JO',
                  'ar-AE',
                  'ar-BH',
                  'ar-DZ',
                  'ar-SA',
                  'ar-IQ',
                  'ar-KW',
                  'ar-MA',
                  'ar-TN',
                  'ar-OM',
                  'ar-PS',
                  'ar-QA',
                  'ar-LB',
                  'ar-EG',
                  'fa-IR',
                  'hi-IN',
                  'th-TH',
                  'ko-KR',
                  'cmn-Hant-TW',
                  'yue-Hant-HK',
                  'ja-JP',
                  'cmn-Hans-HK',
                  'cmn-Hans-CN'
                ],
                'default': 'en-uk',
                'display_value': 'Language',
                'type': 'dropdown'
              }
            },
            'id': 29,
            'input_params': {
              'filetype': 'mp3',
              'speech_language': 'en-uk'
            },
            'is_paid': 'paid',
            'library': 'google',
            'module': 'texttospeech',
            'pros': '',
            'resource_uri': '/api/v1/pipelinemodule/29/',
            'unique_name': 'Google Text to Speech',
            'updated_at': 1535705344000
          },
          {
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': '',
            'display_values': {},
            'id': 26,
            'input_params': {},
            'is_paid': 'paid',
            'library': 'botman',
            'module': 'sentiment',
            'pros': '',
            'resource_uri': '/api/v1/pipelinemodule/26/',
            'unique_name': ' IMIbot Sentiment Analysis',
            'updated_at': 1535705344000
          },
          {
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': '',
            'display_values': {},
            'id': 15,
            'input_params': {},
            'is_paid': 'paid',
            'library': 'botman',
            'module': 'spell_check',
            'pros': '',
            'resource_uri': '/api/v1/pipelinemodule/15/',
            'unique_name': 'IMIbot Spell Check',
            'updated_at': 1535705344000
          },
          {
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
            'is_paid': 'paid',
            'library': 'google',
            'module': 'ocr',
            'pros': '',
            'resource_uri': '/api/v1/pipelinemodule/11/',
            'unique_name': 'Google OCR',
            'updated_at': 1535705344000
          },
          {
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
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
            'updated_at': 1535705344000
          },
          {
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
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
              'voice': {
                'content': [
                  'Nicole',
                  'Vitória',
                  'Chantal',
                  'Naja',
                  'Lotte',
                  'Léa',
                  'Céline',
                  'Vicki',
                  'Marlene',
                  'Aditi',
                  'Dóra',
                  'Raveena',
                  'Aditi',
                  'Carla',
                  'Mizuki',
                  'Seoyeon',
                  'Zhiyu',
                  'Liv',
                  'Ewa',
                  'Maja',
                  'Inês',
                  'Carmen',
                  'Tatyana',
                  'Conchita',
                  'Astrid',
                  'Filiz',
                  'Amy',
                  'Emma',
                  'Joanna',
                  'Salli',
                  'Kendra',
                  'Kimberly',
                  'Ivy',
                  'Penélope',
                  'Gwyneth'
                ],
                'default': 'Joey',
                'display_value': 'Voice',
                'type': 'dropdown'
              }
            },
            'id': 28,
            'input_params': {
              'filetype': '',
              'voice': ''
            },
            'is_paid': 'paid',
            'library': 'amazon',
            'module': 'texttospeech',
            'pros': '',
            'resource_uri': '/api/v1/pipelinemodule/28/',
            'unique_name': 'Amazon Text to Speech',
            'updated_at': 1535705344000
          },
          {
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': '',
            'display_values': {},
            'id': 16,
            'input_params': {},
            'is_paid': 'paid',
            'library': 'botman',
            'module': 'profanity_filter',
            'pros': '',
            'resource_uri': '/api/v1/pipelinemodule/16/',
            'unique_name': 'IMIbot Profanity Filter',
            'updated_at': 1535705344000
          },
          {
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
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
            'updated_at': 1535705344000
          },
          {
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
            'default': true,
            'description': '',
            'display_values': {},
            'id': 31,
            'input_params': {},
            'is_paid': 'paid',
            'library': 'nltk',
            'module': 'word_tokenization',
            'pros': '',
            'resource_uri': '/api/v1/pipelinemodule/31/',
            'unique_name': 'NLTK Word Tokenization',
            'updated_at': 1535705344000
          },
          {
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': '',
            'display_values': {},
            'id': 21,
            'input_params': {},
            'is_paid': 'paid',
            'library': 'botman',
            'module': 'lemmatization',
            'pros': '',
            'resource_uri': '/api/v1/pipelinemodule/21/',
            'unique_name': 'Botman Lemmatization',
            'updated_at': 1535705344000
          },
          {
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': '',
            'display_values': {},
            'id': 23,
            'input_params': {},
            'is_paid': 'paid',
            'library': 'google',
            'module': 'lemmatization',
            'pros': '',
            'resource_uri': '/api/v1/pipelinemodule/23/',
            'unique_name': 'Google Lemmatization',
            'updated_at': 1535705344000
          },
          {
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': '',
            'display_values': {},
            'id': 22,
            'input_params': {},
            'is_paid': 'paid',
            'library': 'spacy',
            'module': 'lemmatization',
            'pros': '',
            'resource_uri': '/api/v1/pipelinemodule/22/',
            'unique_name': 'Spacy Lemmatization',
            'updated_at': 1535705344000
          },
          {
            'cons': '',
            'contextual': false,
            'created_at': 1537872111000,
            'default': false,
            'description': '',
            'display_values': {},
            'id': 36,
            'input_params': {},
            'is_paid': 'paid',
            'library': 'google',
            'module': 'language_detection',
            'pros': '',
            'resource_uri': '/api/v1/pipelinemodule/36/',
            'unique_name': 'Google Language Detection',
            'updated_at': 1537872111000
          },
          {
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': '',
            'display_values': {},
            'id': 32,
            'input_params': {},
            'is_paid': 'paid',
            'library': 'google',
            'module': 'pos',
            'pros': '',
            'resource_uri': '/api/v1/pipelinemodule/32/',
            'unique_name': 'Google Parts of Speech',
            'updated_at': 1535705344000
          },
          {
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': '',
            'display_values': {},
            'id': 20,
            'input_params': {},
            'is_paid': 'paid',
            'library': 'spacy',
            'module': 'sentence_tokenization',
            'pros': '',
            'resource_uri': '/api/v1/pipelinemodule/20/',
            'unique_name': 'Spacy Sentence Tokenization',
            'updated_at': 1535705344000
          },
          {
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': '',
            'display_values': {},
            'id': 24,
            'input_params': {},
            'is_paid': 'paid',
            'library': 'spacy',
            'module': 'chunking',
            'pros': '',
            'resource_uri': '/api/v1/pipelinemodule/24/',
            'unique_name': 'Spacy Chunking',
            'updated_at': 1535705344000
          },
          {
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
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
            'updated_at': 1535705344000
          },
          {
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
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
            'updated_at': 1535705344000
          },
          {
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
            'default': true,
            'description': '',
            'display_values': {},
            'id': 13,
            'input_params': {},
            'is_paid': 'paid',
            'library': 'spacy',
            'module': 'pos',
            'pros': '',
            'resource_uri': '/api/v1/pipelinemodule/13/',
            'unique_name': 'Spacy Parts of Speech',
            'updated_at': 1535705344000
          },
          {
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': '',
            'display_values': {},
            'id': 9,
            'input_params': {},
            'is_paid': 'paid',
            'library': 'botman',
            'module': 'numbers',
            'pros': '',
            'resource_uri': '/api/v1/pipelinemodule/9/',
            'unique_name': 'IMIbot Numbers Recognition',
            'updated_at': 1535705344000
          },
          {
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': '',
            'display_values': {},
            'id': 14,
            'input_params': {},
            'is_paid': 'paid',
            'library': 'spacy',
            'module': 'parsetree',
            'pros': '',
            'resource_uri': '/api/v1/pipelinemodule/14/',
            'unique_name': 'Spacy Parse Tree',
            'updated_at': 1535705344000
          },
          {
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
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
            'pros': '',
            'resource_uri': '/api/v1/pipelinemodule/12/',
            'unique_name': 'RASA CommonSense',
            'updated_at': 1535705344000
          },
          {
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
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
            'updated_at': 1535705344000
          },
          {
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
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
            'updated_at': 1535705344000
          },
          {
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
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
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/bot/665/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1543569836000,
        'updated_by': 'Qwerty1 Parrot'
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NjY3LCJyb2xlIjoiYm90In0.UdpVU0lyn7_TqsyYQjsN6agt2ozEL0u9N0om_n_TUio',
        'bot_metadata': {},
        'bot_type': 'intelligent',
        'bot_unique_name': 'bhjknk',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1542186699000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'kj',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 667,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 667,
          'bot_id': 667,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'bhjknk',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [
          {
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'display_values': {
              'filetype': {
                'content': [
                  'mp3'
                ],
                'default': 'mp3',
                'display_value': 'Output format',
                'type': 'dropdown'
              },
              'speech_language': {
                'content': [
                  'af-ZA',
                  'am-ET',
                  'hy-AM',
                  'az-AZ',
                  'id-ID',
                  'ms-MY',
                  'bn-BD',
                  'bn-IN',
                  'ca-ES',
                  'cs-CZ',
                  'da-DK',
                  'de-DE',
                  'en-AU',
                  'en-CA',
                  'en-GH',
                  'en-GB',
                  'en-IN',
                  'en-IE',
                  'en-KE',
                  'en-NZ',
                  'en-NG',
                  'en-PH',
                  'en-ZA',
                  'en-TZ',
                  'en-US',
                  'es-AR',
                  'es-BO',
                  'es-CL',
                  'es-CO',
                  'es-CR',
                  'es-EC',
                  'es-SV',
                  'es-ES',
                  'es-US',
                  'es-GT',
                  'es-HN',
                  'es-MX',
                  'es-NI',
                  'es-PA',
                  'es-PY',
                  'es-PE',
                  'es-PR',
                  'es-DO',
                  'es-UY',
                  'es-VE',
                  'eu-ES',
                  'fil-PH',
                  'fr-CA',
                  'fr-FR',
                  'gl-ES',
                  'ka-GE',
                  'gu-IN',
                  'hr-HR',
                  'zu-ZA',
                  'is-IS',
                  'it-IT',
                  'jv-ID',
                  'kn-IN',
                  'km-KH',
                  'lo-LA',
                  'lv-LV',
                  'lt-LT',
                  'hu-HU',
                  'ml-IN',
                  'mr-IN',
                  'nl-NL',
                  'ne-NP',
                  'nb-NO',
                  'pl-PL',
                  'pt-BR',
                  'pt-PT',
                  'ro-RO',
                  'si-LK',
                  'sk-SK',
                  'sl-SI',
                  'su-ID',
                  'sw-TZ',
                  'sw-KE',
                  'fi-FI',
                  'sv-SE',
                  'ta-IN',
                  'ta-SG',
                  'ta-LK',
                  'ta-MY',
                  'te-IN',
                  'vi-VN',
                  'tr-TR',
                  'ur-PK',
                  'ur-IN',
                  'el-GR',
                  'bg-BG',
                  'ru-RU',
                  'sr-RS',
                  'uk-UA',
                  'he-IL',
                  'ar-IL',
                  'ar-JO',
                  'ar-AE',
                  'ar-BH',
                  'ar-DZ',
                  'ar-SA',
                  'ar-IQ',
                  'ar-KW',
                  'ar-MA',
                  'ar-TN',
                  'ar-OM',
                  'ar-PS',
                  'ar-QA',
                  'ar-LB',
                  'ar-EG',
                  'fa-IR',
                  'hi-IN',
                  'th-TH',
                  'ko-KR',
                  'cmn-Hant-TW',
                  'yue-Hant-HK',
                  'ja-JP',
                  'cmn-Hans-HK',
                  'cmn-Hans-CN'
                ],
                'default': 'en-uk',
                'display_value': 'Language',
                'type': 'dropdown'
              }
            },
            'id': 29,
            'input_params': {
              'filetype': 'mp3',
              'speech_language': 'hy-AM'
            },
            'library': 'google',
            'module': 'texttospeech',
            'resource_uri': '/api/v1/pipelinemodule/29/',
            'unique_name': 'Google Text to Speech',
            'updated_at': 1535705344000
          },
          {
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'display_values': {
              'filetype': {
                'content': [
                  'mp3'
                ],
                'default': 'mp3',
                'display_value': 'Output format',
                'type': 'dropdown'
              },
              'voice': {
                'content': [
                  'Nicole',
                  'Vitória',
                  'Chantal',
                  'Naja',
                  'Lotte',
                  'Léa',
                  'Céline',
                  'Vicki',
                  'Marlene',
                  'Aditi',
                  'Dóra',
                  'Raveena',
                  'Aditi',
                  'Carla',
                  'Mizuki',
                  'Seoyeon',
                  'Zhiyu',
                  'Liv',
                  'Ewa',
                  'Maja',
                  'Inês',
                  'Carmen',
                  'Tatyana',
                  'Conchita',
                  'Astrid',
                  'Filiz',
                  'Amy',
                  'Emma',
                  'Joanna',
                  'Salli',
                  'Kendra',
                  'Kimberly',
                  'Ivy',
                  'Penélope',
                  'Gwyneth'
                ],
                'default': 'Joey',
                'display_value': 'Voice',
                'type': 'dropdown'
              }
            },
            'id': 28,
            'input_params': {
              'filetype': 'mp3',
              'voice': 'Dóra'
            },
            'library': 'amazon',
            'module': 'texttospeech',
            'resource_uri': '/api/v1/pipelinemodule/28/',
            'unique_name': 'Amazon Text to Speech',
            'updated_at': 1535705344000
          },
          {
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
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
            'library': 'azure',
            'module': 'texttospeech',
            'resource_uri': '/api/v1/pipelinemodule/27/',
            'unique_name': 'Azure Text to Speech',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/bot/667/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1542189422000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 671,
          'comment': 'Default Active Version',
          'id': 569,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 569,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [
          {
            'imageUrl': 'https://robohash.org/IntelliBot.png',
            'name': 'StarBot49'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NjcxLCJyb2xlIjoiYm90In0.oqUje-UXTUuHpkEpExWJprDl5AYlvz_2r_BZJ9hRA44',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'spellcheck1',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1542259266000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'aaacwed',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 671,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 671,
          'bot_id': 671,
          'comment': 'Default Active Version',
          'id': 569,
          'version': 1
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'Spellcheck',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/671/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1542259266000,
        'updated_by': 'Qwerty1 Parrot'
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NjczLCJyb2xlIjoiYm90In0.dBiWOGBnGOwm6lakJIzizDMM28Wq_xNUjQwIJKWMC8c',
        'bot_metadata': {},
        'bot_type': 'intelligent',
        'bot_unique_name': 'h',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1542713069000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'tft',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': 'asdas',
        'heading': '',
        'id': 673,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 673,
          'bot_id': 673,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'h',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/673/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1551956648000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 677,
          'comment': '',
          'id': 581,
          'is_ui_view': false,
          'version': 2
        },
        'active_version_id': 581,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [
          {
            'imageUrl': 'https://robohash.org/SilverDroid.png',
            'name': 'StarBot12'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Njc3LCJyb2xlIjoiYm90In0.59xYGfTJ-SzDJOHnZy8b1X-06__bSEnqQFKHypwAxAk',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'testingdevrolebot145',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': 'Testing sensitive message',
        'created_at': 1542884289000,
        'created_by': 'QA Developer',
        'data_persistence_period': 30,
        'description': 'Testing the Dev Role permissions',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': 'Sorry, we couldn\'t process now',
        'first_message': 'Hi, How can I help you?',
        'heading': 'Testing Bot Developer Role',
        'id': 677,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 677,
          'bot_id': 677,
          'comment': '',
          'id': 582,
          'version': 3
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'Testing Dev Role Bot',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/677/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1542886249000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 679,
          'comment': 'Default Active Version',
          'id': 589,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 589,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': true,
        'allow_feedback': true,
        'avatars': [
          {
            'imageUrl': 'https://robohash.org/SmartDroid.png',
            'name': 'StarBot54'
          },
          {
            'imageUrl': 'https://robohash.org/SilverDroid.png',
            'name': 'StarBot78'
          },
          {
            'imageUrl': 'https://robohash.org/SilverDroid.png',
            'name': 'StarBot75'
          },
          {
            'imageUrl': 'https://robohash.org/IntelliBot.png',
            'name': 'StarBot11'
          },
          {
            'imageUrl': 'https://robohash.org/StarDroid.png',
            'name': 'StarBot63'
          },
          {
            'imageUrl': 'https://robohash.org/SmartBot.png',
            'name': 'StarBot38'
          },
          {
            'imageUrl': 'https://robohash.org/SilverDroid.png',
            'name': 'StarBot3'
          },
          {
            'imageUrl': 'https://robohash.org/SmartBot.png',
            'name': 'StarBot18'
          },
          {
            'id': 0,
            'imageUrl': 'https://robohash.org/SmartDroid.png',
            'name': 'StarBot43'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Njc5LCJyb2xlIjoiYm90In0.g25XeD54eKraBw3iANrK60eU6Z_hMtvT74e_AW1uzFA',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'firsttestbot1',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': 'This is a Test',
        'created_at': 1542971682000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'spellcheck testing bot',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': 'This is an Error!!',
        'first_message': 'Hello! this is the first message',
        'heading': 'I will help you with your queries',
        'id': 679,
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
              'asyncFlag': '',
              'enabled': false,
              'skillId': ''
            },
            'facebook': {
              'enabled': true,
              'facebook-token': 'EAAcr1gijVOEBABfPTHpvyHUwcZAOkOXgZC3wj99vcovkQT1LH3Tq9IxbajEhDM6vZCaFIve4aDJLHuYZBRn3HQEk0cgnn7myvQXyTOMktnVfDMUhtiYmTjD3pnUjZCpQ0nTEycZBM6pkXJ8ghrUKnHJsgbe8wHxAEftrFhPfm3KKQlSd28ag7u',
              'id': '1034503376758346'
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
              'send_via_connect': '',
              'serviceKey': '',
              'streamName': ''
            }
          }
        },
        'is_manager': false,
        'latest_version': {
          '_id': 679,
          'bot_id': 679,
          'comment': 'jhk',
          'id': 590,
          'version': 2
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'First Test Bot',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [
          {
            '_id': '5b8901000e0ff44f7e071e50',
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
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
              'speech_language': {
                'content': [
                  'af-ZA',
                  'am-ET',
                  'hy-AM',
                  'az-AZ',
                  'id-ID',
                  'ms-MY',
                  'bn-BD',
                  'bn-IN',
                  'ca-ES',
                  'cs-CZ',
                  'da-DK',
                  'de-DE',
                  'en-AU',
                  'en-CA',
                  'en-GH',
                  'en-GB',
                  'en-IN',
                  'en-IE',
                  'en-KE',
                  'en-NZ',
                  'en-NG',
                  'en-PH',
                  'en-ZA',
                  'en-TZ',
                  'en-US',
                  'es-AR',
                  'es-BO',
                  'es-CL',
                  'es-CO',
                  'es-CR',
                  'es-EC',
                  'es-SV',
                  'es-ES',
                  'es-US',
                  'es-GT',
                  'es-HN',
                  'es-MX',
                  'es-NI',
                  'es-PA',
                  'es-PY',
                  'es-PE',
                  'es-PR',
                  'es-DO',
                  'es-UY',
                  'es-VE',
                  'eu-ES',
                  'fil-PH',
                  'fr-CA',
                  'fr-FR',
                  'gl-ES',
                  'ka-GE',
                  'gu-IN',
                  'hr-HR',
                  'zu-ZA',
                  'is-IS',
                  'it-IT',
                  'jv-ID',
                  'kn-IN',
                  'km-KH',
                  'lo-LA',
                  'lv-LV',
                  'lt-LT',
                  'hu-HU',
                  'ml-IN',
                  'mr-IN',
                  'nl-NL',
                  'ne-NP',
                  'nb-NO',
                  'pl-PL',
                  'pt-BR',
                  'pt-PT',
                  'ro-RO',
                  'si-LK',
                  'sk-SK',
                  'sl-SI',
                  'su-ID',
                  'sw-TZ',
                  'sw-KE',
                  'fi-FI',
                  'sv-SE',
                  'ta-IN',
                  'ta-SG',
                  'ta-LK',
                  'ta-MY',
                  'te-IN',
                  'vi-VN',
                  'tr-TR',
                  'ur-PK',
                  'ur-IN',
                  'el-GR',
                  'bg-BG',
                  'ru-RU',
                  'sr-RS',
                  'uk-UA',
                  'he-IL',
                  'ar-IL',
                  'ar-JO',
                  'ar-AE',
                  'ar-BH',
                  'ar-DZ',
                  'ar-SA',
                  'ar-IQ',
                  'ar-KW',
                  'ar-MA',
                  'ar-TN',
                  'ar-OM',
                  'ar-PS',
                  'ar-QA',
                  'ar-LB',
                  'ar-EG',
                  'fa-IR',
                  'hi-IN',
                  'th-TH',
                  'ko-KR',
                  'cmn-Hant-TW',
                  'yue-Hant-HK',
                  'ja-JP',
                  'cmn-Hans-HK',
                  'cmn-Hans-CN'
                ],
                'default': 'en-uk',
                'display_value': 'Language',
                'type': 'dropdown'
              }
            },
            'id': 29,
            'input_params': {
              'filetype': 'mp3',
              'speech_language': 'en-uk'
            },
            'is_added': true,
            'is_paid': 'paid',
            'library': 'google',
            'module': 'texttospeech',
            'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
            'pros': '',
            'unique_name': 'Google Text to Speech',
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
        'resource_uri': '/api/v1/bot/679/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1550229876000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 680,
          'comment': 'Default Active Version',
          'id': 592,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 592,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [
          {
            'imageUrl': 'https://robohash.org/IntelliBot.png',
            'name': 'StarBot80'
          },
          {
            'imageUrl': 'https://robohash.org/StarDroid.png',
            'name': 'StarBot18'
          },
          {
            'imageUrl': 'https://robohash.org/SilverDroid.png',
            'name': 'StarBot83'
          },
          {
            'imageUrl': 'https://robohash.org/SmartDroid.png',
            'name': 'StarBot92'
          },
          {
            'imageUrl': 'https://robohash.org/IntelliBot.png',
            'name': 'StarBot45'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NjgwLCJyb2xlIjoiYm90In0.sD4XZmkKCmUG-0r8FB_hrLsS_iTcxn2UIysMuY2inzc',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'namepin',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1543236589000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'Fetches name of a location given PIN.',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 680,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 680,
          'bot_id': 680,
          'comment': 'Default Active Version',
          'id': 592,
          'version': 1
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'NamePin',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/680/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1543293983000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 685,
          'comment': 'Default Active Version',
          'id': 605,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 605,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [
          {
            'imageUrl': 'https://robohash.org/IntelliBot.png',
            'name': 'StarBot91'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Njg1LCJyb2xlIjoiYm90In0.92eByGn6YwKQ0xKzUVuWA8ja0K3YxGybRf-qiBmYDPI',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'material',
        'child_bots': [
          637,
          655,
          668
        ],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': 'dasda',
        'created_at': 1543322825000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'asdsasdsa',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 685,
        'integrations': {},
        'is_manager': true,
        'latest_version': {
          '_id': 685,
          'bot_id': 685,
          'comment': '',
          'id': 617,
          'version': 13
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'material',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/685/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1543322825000,
        'updated_by': 'Qwerty1 Parrot'
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
            'id': 1,
            'imageUrl': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
            'name': 'test'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Njg4LCJyb2xlIjoiYm90In0.SQx0bvpO0DWjM0QYPMpC3hGnboMXKRiYNK6ho8qJfSM',
        'bot_metadata': {},
        'bot_type': 'intelligent',
        'bot_unique_name': 'genbot_test006',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1543387986000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': 'Play Game and win Coupons',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': 'Hi.. Welcome to test world. I am testing bot.',
        'heading': 'Welcome to the Game World',
        'id': 688,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 688,
          'bot_id': 688,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
        'name': 'genbot_test006',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [
          {
            'id': 'Azure Spell Check',
            'inputParams': {},
            'library': 'azure',
            'module': 'spell_check'
          },
          {
            'id': 'NLTK Word Tokenization',
            'inputParams': {},
            'library': 'nltk',
            'module': 'word_tokenization'
          }
        ],
        'resource_uri': '/api/v1/bot/688/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1543387986000,
        'updated_by': 'Qwerty1 Parrot'
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
            'id': 1,
            'imageUrl': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
            'name': 'test'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Njg5LCJyb2xlIjoiYm90In0.Ph2Y3EH6K_GaYIjddjESfi5rhGhZ9ckZ_wEyV0tSWeI',
        'bot_metadata': {},
        'bot_type': 'intelligent',
        'bot_unique_name': 'genbot_test008',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1543388135000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': 'Play Game and win Coupons',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': 'Hi.. Welcome to test world. I am testing bot.',
        'heading': 'Welcome to the Game World',
        'id': 689,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 689,
          'bot_id': 689,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
        'name': 'genbot_test001',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [
          {
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
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
              'filetype': '',
              'gender': '',
              'lang': '',
              'voice_ms': ''
            },
            'is_paid': 'paid',
            'library': 'azure',
            'module': 'texttospeech',
            'pros': '',
            'resource_uri': '/api/v1/pipelinemodule/27/',
            'unique_name': 'Azure Text to Speech',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/bot/689/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1544001546000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 691,
          'comment': 'Default Active Version',
          'id': 621,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 621,
        'advanced_data_protection': false,
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NjkxLCJyb2xlIjoiYm90In0.YVl-oslW8CPE5jTL0Pvp1NGc0CiCVkZd2GFEXVGOIlA',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'dontuse',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': 'szasdadazcddasdaasdasd',
        'created_at': 1543503784000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'dont use',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 691,
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
              'asyncFlag': '',
              'enabled': false,
              'skillId': ''
            },
            'facebook': {
              'enabled': true,
              'facebook-token': 'asdasdasd',
              'id': 'asdas'
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
              'send_via_connect': '',
              'serviceKey': '',
              'streamName': ''
            }
          }
        },
        'is_manager': false,
        'latest_version': {
          '_id': 691,
          'bot_id': 691,
          'comment': 'Default Active Version',
          'id': 621,
          'version': 1
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'dont use',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [
          {
            '_id': '5b8901000e0ff44f7e071e34',
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': '',
            'display_values': {},
            'id': 1,
            'input_params': {},
            'is_added': true,
            'is_paid': 'paid',
            'library': 'spacy',
            'module': 'ner',
            'pros': '',
            'unique_name': 'Spacy NER',
            'updated_at': 1535705344000
          },
          {
            '_id': '5b8901000e0ff44f7e071e36',
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': '',
            'display_values': {},
            'id': 3,
            'input_params': {},
            'is_added': true,
            'is_paid': 'paid',
            'library': 'dandelion',
            'module': 'ner',
            'pros': '',
            'unique_name': 'Dandelion NER',
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
              'image_type': 'natural_image2'
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
              'api_ai_access_token': 'asdas'
            },
            'is_added': true,
            'is_paid': 'paid',
            'library': 'apiai',
            'module': 'apiainlp',
            'pros': '',
            'unique_name': 'API.ai',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/bot/691/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1544098715000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 696,
          'comment': '',
          'id': 679,
          'is_ui_view': false,
          'version': 6
        },
        'active_version_id': 679,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': true,
        'avatars': [
          {
            'imageUrl': 'asdasd',
            'name': 'sadsasdas'
          },
          {
            'id': 0,
            'imageUrl': 'https://robohash.org/IntelliBot.png',
            'name': 'StarBot47'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Njk2LCJyb2xlIjoiYm90In0.NwmVW0jodaREwgI6yExtNygCftR22_4bhD5BQgZFBTA',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'feedbackbot',
        'child_bots': [
          696
        ],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1544441547000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'This is test',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 696,
        'integrations': {
          'ccsp_details': {
            'debug': {
              'debugurl': 'ss',
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
              'asyncFlag': '',
              'enabled': false,
              'skillId': ''
            },
            'facebook': {
              'enabled': false,
              'facebook-token': 'EAAcr1gijVOEBAKdbF2uY1ofkRZASFEl9HMgB8dTINfN4OLWFS56ZCUnvR7zeB8XRRMoZBDByD70LJsnckecTz1Xi1tHlqvGw30nUZBRH88nDHm2PuTHdDZBsgzXZBV37EtS9VCOGWTezeKUTtrQTdWRtAdVQ1raxjCoG9ZBzkrfYTPu2S3JXFOu',
              'id': '1122081711300399'
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
              'send_via_connect': '',
              'serviceKey': '',
              'streamName': ''
            }
          }
        },
        'is_manager': true,
        'latest_version': {
          '_id': 696,
          'bot_id': 696,
          'comment': '',
          'id': 687,
          'version': 7
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'Feedback Bot',
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
            'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
            'pros': 'no external calls, faster',
            'unique_name': 'Spacy NER',
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
            'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
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
            'pros': '',
            'unique_name': 'IMIbot Common Sense',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/bot/696/',
        'room_close_callback': true,
        'room_persistence_time': 2,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1552311966000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 718,
          'comment': 'Default Active Version',
          'id': 662,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 662,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': false,
        'avatars': [
          {
            'imageUrl': 'https://robohash.org/IntelliBot.png',
            'name': 'StarBot64'
          },
          {
            'id': 0,
            'imageUrl': 'https://cdn-images-1.medium.com/max/327/1*paQ7E6f2VyTKXHpR-aViFg.png',
            'name': 'StarBot28'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NzE4LCJyb2xlIjoiYm90In0.GVZv2KKEgbV6aN3mzrm8FHpBE4c5O_KOy3tUFHezayM',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'fbintegrationbot',
        'child_bots': [
          645,
          639,
          637,
          666,
          678,
          18,
          636,
          13,
          655,
          668,
          679,
          681,
          718,
          700,
          684,
          671,
          648,
          646,
          665,
          642,
          677,
          680,
          685,
          691,
          694,
          696,
          699,
          707
        ],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1546967971000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'Test',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 718,
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
              'asyncFlag': '',
              'enabled': false,
              'skillId': ''
            },
            'facebook': {
              'enabled': false,
              'facebook-token': 'EAAcr1gijVOEBAHlY7Nwyf6Sm2mNL4QpBMVDvZA7CxsAe0UOXzyjnm64ZAxGZBZCN2pUXE1Eo720QWm9pZAjaTQz4ZC95VJXNGwMg1HMFrl7FkjGiGaZBwdduBeu1j0X9xoptV1MLhks9sdM4clELq2W2wQjgZAnExzkWV4LZAjOxOUyYaSlSZBqsBs',
              'id': '1955425207910003'
            },
            'generic': {
              'enabled': false
            },
            'googlehome': {
              'asyncFlag': '',
              'enabled': false,
              'project': ''
            },
            'line': {
              'channel_access_token': 'tt',
              'channel_id': 'tt',
              'channel_secret': 'tt',
              'enabled': true
            },
            'skype': {
              'client_id': 's',
              'client_secret': 'w',
              'enabled': true,
              'skype-page-name': 'w'
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
              'send_via_connect': '',
              'serviceKey': '',
              'streamName': ''
            }
          }
        },
        'is_manager': true,
        'latest_version': {
          '_id': 718,
          'bot_id': 718,
          'comment': '',
          'id': 677,
          'version': 6
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'FB Integration Bot2',
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
            'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
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
          },
          {
            '_id': '5baa10ef39c5a6003deeaa31',
            'cons': 'None',
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
            'pros': 'Fast and reliable',
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
            'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
            'pros': 'low cost, medium accuracy',
            'unique_name': 'Google Translate',
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
            'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
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
            'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
            'pros': 'no external calls, faster',
            'unique_name': 'Spacy NER',
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
            '_id': '5b8901000e0ff44f7e071e3c',
            'cons': ' not contextual, slightly lower accuracy',
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
            'pros': 'cheaper, no external call, slightly faster',
            'unique_name': 'IMIbot Numbers Recognition',
            'updated_at': 1535705344000
          },
          {
            '_id': '5b8901000e0ff44f7e071e3e',
            'cons': 'slightly expensive, sometimes presents with spacing issues in the detected text',
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
            'pros': 'text recognition accuarcy is pretty good even for images with bad lighting conditions, supports multiple languages, supports automatic language detection from image',
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
          },
          {
            '_id': '5b8901000e0ff44f7e071e43',
            'cons': ' not contextual, slightly lower accuracy',
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
            'pros': 'cheaper, no external call, slightly faster',
            'unique_name': 'IMIbot Profanity Filter',
            'updated_at': 1535705344000
          },
          {
            '_id': '5b8901000e0ff44f7e071e3d',
            'cons': 'None',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': 'Abstraction over the framework given by Spacy',
            'display_values': {},
            'id': 10,
            'input_params': {},
            'is_added': true,
            'is_paid': 'free',
            'library': 'spacy',
            'module': 'quesdetect',
            'pros': 'free, no external calls, faster',
            'unique_name': 'Spacy Question Detection',
            'updated_at': 1535705344000
          },
          {
            '_id': '5b8901000e0ff44f7e071e46',
            'cons': 'lower performance',
            'contextual': false,
            'created_at': 1535705344000,
            'default': true,
            'description': 'A suite of libraries and programs for symbolic and statistical NLP for English written in the Python',
            'display_values': {},
            'id': 19,
            'input_params': {},
            'is_added': true,
            'is_paid': 'free',
            'library': 'nltk',
            'module': 'sentence_tokenization',
            'pros': 'free, greater flexibility,no external calls, supports multiple languages',
            'unique_name': 'NLTK Sentence Tokenization',
            'updated_at': 1535705344000
          },
          {
            '_id': '5b8901000e0ff44f7e071e47',
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': '',
            'display_values': {},
            'id': 20,
            'input_params': {},
            'is_added': true,
            'is_paid': 'paid',
            'library': 'spacy',
            'module': 'sentence_tokenization',
            'pros': '',
            'unique_name': 'Spacy Sentence Tokenization',
            'updated_at': 1535705344000
          },
          {
            '_id': '5b8901000e0ff44f7e071e4c',
            'cons': 'relatively more expensive, involves an external call, slightly slower',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': 'This is a Google service and involves an external API call.',
            'display_values': {},
            'id': 25,
            'input_params': {},
            'is_added': true,
            'is_paid': 'paid',
            'library': 'google',
            'module': 'sentiment',
            'pros': 'contextual, slightly higher accuracy, improves over time',
            'unique_name': 'Google Sentiment Analysis',
            'updated_at': 1535705344000
          },
          {
            '_id': '5b8901000e0ff44f7e071e4d',
            'cons': ' not contextual, slightly lower accuracy',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': 'This implementation is based on an open-source project which takes a deterministic approach and is non-contextual in nature.',
            'display_values': {},
            'id': 26,
            'input_params': {},
            'is_added': true,
            'is_paid': 'free',
            'library': 'botman',
            'module': 'sentiment',
            'pros': 'cheaper, no external call, slightly faster',
            'unique_name': ' IMIbot Sentiment Analysis',
            'updated_at': 1535705344000
          },
          {
            '_id': '5b8901000e0ff44f7e071e51',
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': '',
            'display_values': {},
            'id': 30,
            'input_params': {},
            'is_added': true,
            'is_paid': 'paid',
            'library': 'google',
            'module': 'speechtotext',
            'pros': '',
            'unique_name': 'Google Speech to Text',
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
            'unique_name': 'Microsoft Spell Check',
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
            '_id': '5b8901000e0ff44f7e071e4e',
            'cons': 'Higher latency relative to Polly from Amazon',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': 'Azure accepts lang , gender and voice_ms as additional parameters. Detailed documentation can be found at https://docs.microsoft.com/en-in/azure/cognitive-services/speech/api-reference-rest/bingvoiceoutput',
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
            'is_added': true,
            'is_paid': 'paid',
            'library': 'azure',
            'module': 'texttospeech',
            'pros': 'few Indic languages like Hindi, Tamil etc are also supported, supports multiple accents, supports SSML',
            'unique_name': 'Microsoft Text to Speech',
            'updated_at': 1535705344000
          },
          {
            '_id': '5b8901000e0ff44f7e071e4f',
            'cons': 'Limited language support',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': 'Amazon accepts voice parameter with the body and takes values from Id parameter located at http://docs.aws.amazon.com/polly/latest/dg/API_Voice.html',
            'display_values': {
              'filetype': {
                'content': [
                  'mp3'
                ],
                'default': 'mp3',
                'display_value': 'Output format',
                'type': 'dropdown'
              },
              'voice': {
                'content': [
                  'Nicole',
                  'Vitória',
                  'Chantal',
                  'Naja',
                  'Lotte',
                  'Léa',
                  'Céline',
                  'Vicki',
                  'Marlene',
                  'Aditi',
                  'Dóra',
                  'Raveena',
                  'Aditi',
                  'Carla',
                  'Mizuki',
                  'Seoyeon',
                  'Zhiyu',
                  'Liv',
                  'Ewa',
                  'Maja',
                  'Inês',
                  'Carmen',
                  'Tatyana',
                  'Conchita',
                  'Astrid',
                  'Filiz',
                  'Amy',
                  'Emma',
                  'Joanna',
                  'Salli',
                  'Kendra',
                  'Kimberly',
                  'Ivy',
                  'Penélope',
                  'Gwyneth'
                ],
                'default': 'Joey',
                'display_value': 'Voice',
                'type': 'dropdown'
              }
            },
            'id': 28,
            'input_params': {
              'filetype': 'mp3',
              'voice': 'Joey'
            },
            'is_added': true,
            'is_paid': 'paid',
            'library': 'amazon',
            'module': 'texttospeech',
            'pros': 'Slightly faster',
            'unique_name': 'Amazon Text to Speech',
            'updated_at': 1535705344000
          },
          {
            '_id': '5b8901000e0ff44f7e071e50',
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
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
              'speech_language': {
                'content': [
                  'af-ZA',
                  'am-ET',
                  'hy-AM',
                  'az-AZ',
                  'id-ID',
                  'ms-MY',
                  'bn-BD',
                  'bn-IN',
                  'ca-ES',
                  'cs-CZ',
                  'da-DK',
                  'de-DE',
                  'en-AU',
                  'en-CA',
                  'en-GH',
                  'en-GB',
                  'en-IN',
                  'en-IE',
                  'en-KE',
                  'en-NZ',
                  'en-NG',
                  'en-PH',
                  'en-ZA',
                  'en-TZ',
                  'en-US',
                  'es-AR',
                  'es-BO',
                  'es-CL',
                  'es-CO',
                  'es-CR',
                  'es-EC',
                  'es-SV',
                  'es-ES',
                  'es-US',
                  'es-GT',
                  'es-HN',
                  'es-MX',
                  'es-NI',
                  'es-PA',
                  'es-PY',
                  'es-PE',
                  'es-PR',
                  'es-DO',
                  'es-UY',
                  'es-VE',
                  'eu-ES',
                  'fil-PH',
                  'fr-CA',
                  'fr-FR',
                  'gl-ES',
                  'ka-GE',
                  'gu-IN',
                  'hr-HR',
                  'zu-ZA',
                  'is-IS',
                  'it-IT',
                  'jv-ID',
                  'kn-IN',
                  'km-KH',
                  'lo-LA',
                  'lv-LV',
                  'lt-LT',
                  'hu-HU',
                  'ml-IN',
                  'mr-IN',
                  'nl-NL',
                  'ne-NP',
                  'nb-NO',
                  'pl-PL',
                  'pt-BR',
                  'pt-PT',
                  'ro-RO',
                  'si-LK',
                  'sk-SK',
                  'sl-SI',
                  'su-ID',
                  'sw-TZ',
                  'sw-KE',
                  'fi-FI',
                  'sv-SE',
                  'ta-IN',
                  'ta-SG',
                  'ta-LK',
                  'ta-MY',
                  'te-IN',
                  'vi-VN',
                  'tr-TR',
                  'ur-PK',
                  'ur-IN',
                  'el-GR',
                  'bg-BG',
                  'ru-RU',
                  'sr-RS',
                  'uk-UA',
                  'he-IL',
                  'ar-IL',
                  'ar-JO',
                  'ar-AE',
                  'ar-BH',
                  'ar-DZ',
                  'ar-SA',
                  'ar-IQ',
                  'ar-KW',
                  'ar-MA',
                  'ar-TN',
                  'ar-OM',
                  'ar-PS',
                  'ar-QA',
                  'ar-LB',
                  'ar-EG',
                  'fa-IR',
                  'hi-IN',
                  'th-TH',
                  'ko-KR',
                  'cmn-Hant-TW',
                  'yue-Hant-HK',
                  'ja-JP',
                  'cmn-Hans-HK',
                  'cmn-Hans-CN'
                ],
                'default': 'en-uk',
                'display_value': 'Language',
                'type': 'dropdown'
              }
            },
            'id': 29,
            'input_params': {
              'filetype': 'mp3',
              'speech_language': 'en-uk'
            },
            'is_added': true,
            'is_paid': 'paid',
            'library': 'google',
            'module': 'texttospeech',
            'pros': '',
            'unique_name': 'Google Text to Speech',
            'updated_at': 1535705344000
          },
          {
            '_id': '5b8901000e0ff44f7e071e54',
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': 'This implementation is based on an open-source project which takes a deterministic approach.',
            'display_values': {
              'extra_info': {
                'display_value': 'extra information',
                'type': 'text'
              },
              'future': {
                'display_value': 'Future',
                'type': 'text'
              }
            },
            'id': 33,
            'input_params': {
              'extra_info': false,
              'future': true
            },
            'is_added': true,
            'is_paid': 'free',
            'library': 'botman',
            'module': 'timedate',
            'pros': 'free, no external call, very accurate',
            'unique_name': 'IMIbot Date Time Recognition',
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
            'cons': 'lower performance',
            'contextual': false,
            'created_at': 1535705344000,
            'default': true,
            'description': '',
            'display_values': {},
            'id': 31,
            'input_params': {},
            'is_added': true,
            'is_paid': 'free',
            'library': 'nltk',
            'module': 'word_tokenization',
            'pros': 'free, greater flexibility,no external calls, supports multiple languages',
            'unique_name': 'NLTK Word Tokenization',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/bot/718/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1554591386000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 721,
          'comment': 'Default Active Version',
          'id': 667,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 667,
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NzIxLCJyb2xlIjoiYm90In0.M0klQkSr5Di7y-V_RKi5G3qNy8r6Ng5YkqImlZ-joeo',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'testing bot 0001',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1548047562000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'Play Game and win Coupons',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': 'Hi.. Welcome to test world. I am testing bot.',
        'heading': 'Welcome to the Game World',
        'id': 721,
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
          '_id': 721,
          'bot_id': 721,
          'comment': 'Default Active Version',
          'id': 667,
          'version': 1
        },
        'logo': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
        'name': 'Noob Yogesh',
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
        'resource_uri': '/api/v1/bot/721/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 0,
        'updated_at': 1548218374000,
        'updated_by': 'unknown'
      },
      {
        'active_version': {
          'bot_id': 723,
          'comment': 'test\n',
          'id': 690,
          'is_ui_view': false,
          'version': 2
        },
        'active_version_id': 690,
        'advanced_data_protection': true,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': true,
        'allow_feedback': false,
        'avatars': [
          {
            'imageUrl': 'https://cdn-images-1.medium.com/max/327/1*paQ7E6f2VyTKXHpR-aViFg.png',
            'name': 'StarBot81'
          },
          {
            'imageUrl': 'https://robohash.org/StarDroid.png',
            'name': 'StarBot58'
          },
          {
            'imageUrl': 'https://robohash.org/StarDroid.png',
            'name': 'StarBot57'
          },
          {
            'imageUrl': 'https://cdn-images-1.medium.com/max/327/1*paQ7E6f2VyTKXHpR-aViFg.png',
            'name': 'StarBot24'
          },
          {
            'imageUrl': 'https://robohash.org/SilverDroid.png',
            'name': 'StarBot35'
          },
          {
            'imageUrl': 'https://cdn-images-1.medium.com/max/327/1*paQ7E6f2VyTKXHpR-aViFg.png',
            'name': 'StarBot30'
          },
          {
            'imageUrl': 'https://robohash.org/SilverDroid.png',
            'name': 'StarBot98'
          },
          {
            'id': 0,
            'imageUrl': 'https://robohash.org/SilverDroid.png',
            'name': 'StarBot55'
          }
        ],
        'blanket_consent': true,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NzIzLCJyb2xlIjoiYm90In0.6OWxtgoEnoM0eUQ4QluQplRi1dR_0hy6Ij8wZYbQNNI',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'testbot1',
        'child_bots': [
          32
        ],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': 'this is a consent message',
        'created_at': 1548757726000,
        'created_by': 'Puspita Mishra',
        'data_persistence_period': 0.0007,
        'description': 'This is test',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': 'sada',
        'heading': '',
        'id': 723,
        'integrations': {
          'ccsp_details': {
            'debug': {
              'debugurl': 'sxsx',
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
              'asyncFlag': '',
              'enabled': false,
              'skillId': ''
            },
            'facebook': {
              'enabled': false,
              'facebook-token': '',
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
              'send_via_connect': '',
              'serviceKey': '',
              'streamName': ''
            }
          }
        },
        'is_manager': true,
        'latest_version': {
          '_id': 723,
          'bot_id': 723,
          'comment': 'dcs',
          'id': 780,
          'version': 4
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'Test Bot1',
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
          }
        ],
        'resource_uri': '/api/v1/bot/723/',
        'room_close_callback': false,
        'room_persistence_time': 10,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1551768944000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 733,
          'comment': 'Default Active Version',
          'id': 688,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 688,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': true,
        'allow_feedback': false,
        'avatars': [
          {
            'imageUrl': 'https://robohash.org/IntelliBot.png',
            'name': 'StarBot45'
          },
          {
            'imageUrl': 'https://robohash.org/SilverDroid.png',
            'name': 'StarBot0'
          },
          {
            'imageUrl': 'https://robohash.org/SmartBot.png',
            'name': 'StarBot58'
          },
          {
            'imageUrl': 'https://robohash.org/SilverDroid.png',
            'name': 'StarBot18'
          },
          {
            'imageUrl': 'https://robohash.org/StarDroid.png',
            'name': 'StarBot70'
          },
          {
            'imageUrl': 'https://robohash.org/IntelliBot.png',
            'name': 'StarBot68'
          },
          {
            'id': 0,
            'imageUrl': 'https://cdn-images-1.medium.com/max/327/1*paQ7E6f2VyTKXHpR-aViFg.png',
            'name': 'StarBot55'
          }
        ],
        'blanket_consent': true,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NzMzLCJyb2xlIjoiYm90In0.agsLukaDk7Yl6N4S9LW8ccCKW35YGQgcYB69Fj0I8Mg',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'puspita-don\'tuse',
        'child_bots': [
          13,
          14,
          16,
          18,
          20,
          30
        ],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': 'This is a consent test',
        'created_at': 1549520668000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0.0007,
        'description': 'spellcheck testing bot',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': 'sdadasdasdsd',
        'heading': '',
        'id': 733,
        'integrations': {
          'ccsp_details': {
            'debug': {
              'debugurl': 'ee',
              'enabled': false
            },
            'imichat': {
              'access-token': 'sxf',
              'domain': 'ffxf',
              'enabled': false,
              'service-key': 'ffx'
            }
          },
          'channels': {
            'alexa': {
              'asyncFlag': 'gxgag',
              'enabled': false,
              'skillId': 'ggxg'
            },
            'facebook': {
              'enabled': true,
              'facebook-token': 'sff',
              'id': 'ff'
            },
            'googlehome': {
              'asyncFlag': 'frr',
              'enabled': true,
              'project': 'rr'
            },
            'line': {
              'channel_access_token': 'rr',
              'channel_id': 'rr',
              'channel_secret': 'rr',
              'enabled': true
            },
            'skype': {
              'client_id': 'cgg',
              'client_secret': 'ggg',
              'enabled': true,
              'skype-page-name': 'gg'
            },
            'slack': {
              'enabled': true,
              'slack-token': 'tt',
              'verification-token': 'tt'
            },
            'viber': {
              'bot_auth_token': 'tt',
              'bot_avatar': 'ttt',
              'bot_name': 'tt',
              'enabled': true
            },
            'web': {
              'enabled': true,
              'speech_model': 'ee',
              'speech_tts': 'eee',
              'speech_url': 'ee'
            }
          },
          'fulfillment_provider_details': {
            'imiconnect': {
              'appId': 'e',
              'appSecret': 'ee',
              'enabled': true,
              'send_via_connect': 'eee',
              'serviceKey': 'ee',
              'streamName': 'ttt'
            }
          }
        },
        'is_manager': true,
        'latest_version': {
          '_id': 733,
          'bot_id': 733,
          'comment': 'Default active version',
          'id': 835,
          'version': 19
        },
        'logo': 'https://www.gstatic.com/webp/gallery3/2_webp_ll.png',
        'name': 'PuspitaPuspitaPuspitaPuspitaPuspeweeeeeeeeeeeeee',
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
            'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
            'pros': 'free, no external calls, faster',
            'unique_name': 'Spacy Chunking',
            'updated_at': 1535705344000
          },
          {
            '_id': '5b8901000e0ff44f7e071e3f',
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': '',
            'display_values': {
              'model_type': {
                'display_value': 'Model type',
                'type': 'text'
              }
            },
            'id': 12,
            'input_params': {
              'model_type': 'mitie_sklearn'
            },
            'is_added': true,
            'is_paid': 'paid',
            'library': 'smalltalk',
            'module': 'commonsense',
            'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
            'pros': '',
            'unique_name': 'RASA CommonSense',
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
        'resource_uri': '/api/v1/bot/733/',
        'room_close_callback': false,
        'room_persistence_time': 1,
        'transactions_per_pricing_unit': 30,
        'updated_at': 1553243844000,
        'updated_by': 'Qwerty1 Parrot'
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Nzc4LCJyb2xlIjoiYm90In0.SY9JgI6M7wZok3omPp_97fzWkWshWwP8D8cI4OJckOI',
        'bot_metadata': {
          'live_corpus': {},
          'n_results': 0.9999,
          'preview_corpus': {},
          'threshold_diff_score': 1000000,
          'threshold_min_score': 1000000
        },
        'bot_type': 'faqbot',
        'bot_unique_name': 'faqbot_1',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1551963006000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': '',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 778,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 778,
          'bot_id': 778,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
        'name': 'faqbot_1',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/778/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1552023199000,
        'updated_by': 'Qwerty1 Parrot'
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Nzc5LCJyb2xlIjoiYm90In0.eizidLYeBQYeDP13AsUtfT5p3-EAfjJWZemXGlFBoOA',
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
        'created_at': 1551963780000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': '',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 779,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 779,
          'bot_id': 779,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
        'name': 'faqbot_1',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/779/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1551963780000,
        'updated_by': 'Qwerty1 Parrot'
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NzgwLCJyb2xlIjoiYm90In0.EVRNuyXlCpMEODCeJZ_6EYV9AXEQRTy6jNkpA9Kju-Q',
        'bot_metadata': {},
        'bot_type': '',
        'bot_unique_name': 'faqbot_2',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1551964611000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': '',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 780,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 780,
          'bot_id': 780,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
        'name': 'faqbot_2',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/780/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1551964611000,
        'updated_by': 'Qwerty1 Parrot'
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NzgxLCJyb2xlIjoiYm90In0.56SyBNtq9i20LPPW5a5u6eArbwLnW7U2xVH55yjJrZM',
        'bot_metadata': {
          'live_corpus': {},
          'n_results': null,
          'preview_corpus': {},
          'threshold_diff_score': null,
          'threshold_min_score': null
        },
        'bot_type': 'faqbot',
        'bot_unique_name': 'faqbot_3',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1551964966000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'schsh',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 781,
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
              'asyncFlag': '',
              'enabled': false,
              'skillId': ''
            },
            'facebook': {
              'enabled': false,
              'facebook-token': '',
              'id': ''
            },
            'generic': {
              'enabled': false
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
              'send_via_connect': '',
              'serviceKey': '',
              'streamName': ''
            }
          }
        },
        'is_manager': false,
        'latest_version': {
          '_id': 781,
          'bot_id': 781,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://www.gstatic.com/webp/gallery3/2_webp_ll.png',
        'name': 'faqbot_2',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/781/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1556261568000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {
          'bot_id': 783,
          'comment': 'Default Active Version',
          'id': 729,
          'is_ui_view': false,
          'version': 1
        },
        'active_version_id': 729,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': true,
        'allow_feedback': false,
        'avatars': [],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NzgzLCJyb2xlIjoiYm90In0.omndGbVNqW1DmU4N3LMnGFnH_DL9_VMumk7_aEqBYPM',
        'bot_metadata': {},
        'bot_type': 'chatbot',
        'bot_unique_name': 'sds',
        'child_bots': [
          13,
          14,
          16,
          18,
          20,
          30,
          32
        ],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': 'This is a consent message',
        'created_at': 1552281459000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 11,
        'description': 'gg',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': 'error edited',
        'first_message': '',
        'heading': '',
        'id': 783,
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
              'asyncFlag': '',
              'enabled': false,
              'skillId': ''
            },
            'facebook': {
              'enabled': false,
              'facebook-token': 'qq',
              'id': 'q'
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
              'client_id': 's',
              'client_secret': 's',
              'enabled': true,
              'skype-page-name': 's'
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
              'send_via_connect': '',
              'serviceKey': '',
              'streamName': ''
            }
          }
        },
        'is_manager': false,
        'latest_version': {
          '_id': 783,
          'bot_id': 783,
          'comment': '',
          'id': 735,
          'version': 2
        },
        'logo': 'https://www.gstatic.com/webp/gallery3/2_webp_ll.png',
        'name': 'edited bot',
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
            'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
            'pros': 'free, no external calls, faster',
            'unique_name': 'Spacy Chunking',
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
          }
        ],
        'resource_uri': '/api/v1/bot/783/',
        'room_close_callback': false,
        'room_persistence_time': 2,
        'transactions_per_pricing_unit': 20,
        'updated_at': 1553581780000,
        'updated_by': 'Qwerty1 Parrot'
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Nzg0LCJyb2xlIjoiYm90In0.kSY063hQUTzEdLJXsGacAv1J1E3E7QNrgktLyiP4jmw',
        'bot_metadata': {},
        'bot_type': 'intelligent',
        'bot_unique_name': 'pipelinebot 1   pipeline bot 1pipeline bot 1pipeline bot 1pipeline bot 1pipeline bot 1pipeline bot 1pipeline bot 1pipeline bot 1pipeline bot 1pipeline bot 1pipeline bot 1pipeline bot 1pipeline bot 1pipeline bot 1pipeline bot 1',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1552281863000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': 'h',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 784,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 784,
          'bot_id': 784,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg',
        'name': 'pipeline bot 1   pipeline bot 1pipeline bot 1pipeline bot 1pipeline bot 1pipeline bot 1pipeline bot 1pipeline bot 1pipeline bot 1pipeline bot 1pipeline bot 1pipeline bot 1pipeline bot 1pipeline bot 1pipeline bot 1pipeline bot 1',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [
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
            'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
            'pros': 'contextual, slightly higher accuracy, improves over time',
            'unique_name': 'Microsoft Spell Check',
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
            'pipeLineSrc': 'assets/img/pipeline-no-hover-drag.svg',
            'pros': '',
            'unique_name': 'IMIbot Spell Check',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/bot/784/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1553256602000,
        'updated_by': 'Qwerty1 Parrot'
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Nzg5LCJyb2xlIjoiYm90In0.6aaAqEbp_0owyqteRQQPGqKrl4TFySMsfhHszi3PerQ',
        'bot_metadata': {
          'live_corpus': {},
          'n_results': null,
          'preview_corpus': {},
          'threshold_diff_score': null,
          'threshold_min_score': null
        },
        'bot_type': 'faqbot',
        'bot_unique_name': 'faqbot_13',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1552465627000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 30,
        'description': 'k',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 789,
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
              'asyncFlag': '',
              'enabled': false,
              'skillId': ''
            },
            'facebook': {
              'enabled': false,
              'facebook-token': '',
              'id': ''
            },
            'generic': {
              'enabled': false
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
              'send_via_connect': '',
              'serviceKey': '',
              'streamName': ''
            }
          }
        },
        'is_manager': false,
        'latest_version': {
          '_id': 789,
          'bot_id': 789,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
        'name': 'faqbot_1',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/789/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1554286469000,
        'updated_by': 'Qwerty1 Parrot'
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NzkwLCJyb2xlIjoiYm90In0.ELgIChXIx2kb6IM2WIXjUcR-jyIEUxDpSMfuF_6aTuE',
        'bot_metadata': {
          'live_corpus': {},
          'n_results': null,
          'preview_corpus': {},
          'threshold_diff_score': null,
          'threshold_min_score': null
        },
        'bot_type': 'faqbot',
        'bot_unique_name': 'faqbot_1225',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1552465933000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': '',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 790,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 790,
          'bot_id': 790,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
        'name': 'faqbot_1225',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/790/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1552465933000,
        'updated_by': 'Qwerty1 Parrot'
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NzkyLCJyb2xlIjoiYm90In0.h3ndM8676AYPVTx2_0poifV3RrX9mfvYc6BxmTVGkpM',
        'bot_metadata': {},
        'bot_type': 'intelligent',
        'bot_unique_name': 'aasdasdasdasdas',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1552760152000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': 'adSasASas',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 792,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 792,
          'bot_id': 792,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'aasdasdasdasdas',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/792/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1552760152000,
        'updated_by': 'Qwerty1 Parrot'
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Nzk2LCJyb2xlIjoiYm90In0.G8YmIX9_n6MbDiAe99HihUB0BIuAgznXD2IdIxTpbZA',
        'bot_metadata': {},
        'bot_type': 'intelligent',
        'bot_unique_name': 'sgxg',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1553069937000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': 'aa',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 796,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 796,
          'bot_id': 796,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'sgxg',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/796/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1553069937000,
        'updated_by': 'Qwerty1 Parrot'
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
            'id': 1,
            'imageUrl': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
            'name': 'test'
          }
        ],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ODEzLCJyb2xlIjoiYm90In0.CABZNv6M_cb6P-FHxIcXO6LPJNCWlxD2KezlBuzIGBM',
        'bot_metadata': {},
        'bot_type': 'intelligent',
        'bot_unique_name': 'genbot_testnew',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1553243623000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': 'Play Game and win Coupons',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': 'Hi.. Welcome to test world. I am testing bot.',
        'heading': 'Welcome to the Game World',
        'id': 813,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 813,
          'bot_id': 813,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
        'name': 'genbot_test001',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [
          {
            'id': 'Azure Spell Check',
            'inputParams': {},
            'library': 'azure',
            'module': 'spell_check'
          },
          {
            'id': 'NLTK Word Tokenization',
            'inputParams': {},
            'library': 'nltk',
            'module': 'word_tokenization'
          }
        ],
        'resource_uri': '/api/v1/bot/813/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1553243623000,
        'updated_by': 'Qwerty1 Parrot'
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ODE0LCJyb2xlIjoiYm90In0.JwgRUSq4-3f0_VkW2q2FXD8QqpXJCJ8IHwpOj7WlqGU',
        'bot_metadata': {
          'live_corpus': {},
          'n_results': null,
          'preview_corpus': {},
          'threshold_diff_score': null,
          'threshold_min_score': null
        },
        'bot_type': 'faqbot',
        'bot_unique_name': 'faqbot_201903251540',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1553515130000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': '',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 814,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 814,
          'bot_id': 814,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
        'name': 'faqbot_201903251540',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/814/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1553515130000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'active_version': {},
        'active_version_id': 0,
        'advanced_data_protection': false,
        'agent_handover_setting': {},
        'allow_agent_handover': false,
        'allow_anonymization': false,
        'allow_feedback': true,
        'avatars': [],
        'blanket_consent': false,
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ODI2LCJyb2xlIjoiYm90In0.ZpUbqt7Z92AYjaKZCFxhAzgikL5LriKzIPRHPS5s-wM',
        'bot_metadata': {
          'live_corpus': {
            'algorithm': {
              'id': 'deeppavlov',
              'name': 'deeppavlov'
            },
            'model_id': '12345678922',
            'model_version_id': 1
          },
          'n_results': null,
          'preview_corpus': {
            'algorithm': {
              'id': 'deeppavlov',
              'name': 'deeppavlov'
            },
            'model_id': '12345678922',
            'model_version_id': 1
          },
          'threshold_diff_score': null,
          'threshold_min_score': null
        },
        'bot_type': 'faqbot',
        'bot_unique_name': 'faq1test',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1554353966000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': '',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 826,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 826,
          'bot_id': 826,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
        'name': 'faq1 test',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/826/',
        'room_close_callback': true,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1554445870000,
        'updated_by': 'Qwerty1 Parrot'
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
        'bot_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ODU1LCJyb2xlIjoiYm90In0.c_IRp2u3And2QqN5P32GZBGUL4Q-8o8UILzeDBpsx5c',
        'bot_metadata': {
          'live_corpus': {
            'algorithm': {
              'id': 'deeppavlov',
              'name': 'deeppavlov'
            },
            'model_id': '34027a243a694102b453f1523d425ec9',
            'model_version_id': 2
          },
          'n_results': null,
          'preview_corpus': {
            'algorithm': {
              'id': 'deeppavlov',
              'name': 'deeppavlov'
            },
            'model_id': '34027a243a694102b453f1523d425ec9',
            'model_version_id': 3
          },
          'threshold_diff_score': null,
          'threshold_min_score': null
        },
        'bot_type': 'faqbot',
        'bot_unique_name': 'faqbot_29thApr',
        'child_bots': [],
        'consent_categories': [
          'data_retention',
          'data_anonymization'
        ],
        'consent_message': '',
        'created_at': 1556542122000,
        'created_by': 'Qwerty1 Parrot',
        'data_persistence_period': 0,
        'description': '',
        'enable_agent_handover_rules': false,
        'enterprise_id': 4,
        'error_message': '',
        'first_message': '',
        'heading': '',
        'id': 855,
        'integrations': {},
        'is_manager': false,
        'latest_version': {
          '_id': 855,
          'bot_id': 855,
          'comment': null,
          'id': null,
          'version': null
        },
        'logo': 'https://cp-mlxprod-static.microsoft.com/013920-1003/en-us/thumbnail.png',
        'name': 'faqbot for qa',
        'old_id': '',
        'parent_bots': [],
        'pipelines': [],
        'resource_uri': '/api/v1/bot/855/',
        'room_close_callback': false,
        'room_persistence_time': 240,
        'transactions_per_pricing_unit': 1,
        'updated_at': 1556615249000,
        'updated_by': 'Qwerty1 Parrot'
      }
    ]
  },
  'loggeduser': {
    'user': {
      'auth_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoidXNlciIsImlkIjoxMDgzOSwidXNlcl9pZCI6NCwiZW50ZXJwcmlzZV9pZCI6NCwicm9sZV9pZCI6Mn0.IwdW0iYjAiJf1WUUAiduvJ06rXkJAhxFELilnocYoQc',
      'created_at': 1510167501000,
      'email': 'ayeshreddy.k@imimobile.com',
      'enterprise': {
        'enterprise_unique_name': 'ayeshreddy.k',
        'id': 4,
        'logo': 'https://www.gstatic.com/webp/gallery3/2_webp_ll.png',
        'name': 'Ayesh1'
      },
      'enterprise_id': 4,
      'first_name': 'Qwerty1',
      'id': 4,
      'is_active': true,
      'is_admin': true,
      'is_superuser': false,
      'last_login': 1556646569000,
      'last_name': 'Parrot',
      'old_id': '5a030675b050705bd0ca59cd',
      'resource_uri': '/api/v1/user/4/',
      'role': {
        'id': 2,
        'name': 'Admin',
        'permissions': {
          'actions': []
        }
      },
      'role_id': 2,
      'updated_at': 1556542122000,
      'user_access_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoidXNlciIsImlkIjo0fQ.Q4zn6_iHYH4zc4WL0WUeRAFPCXqwdEzAmxv7KwO35J0'
    }
  },
  'loggeduserenterpriseinfo': {
    'id': 4,
    'enterpriseUniqueName': '',
    'created_at': 1491955200000,
    'email': '',
    'enterprise_unique_name': 'ayeshreddy.k',
    'industry': '',
    'logo': 'https://www.gstatic.com/webp/gallery3/2_webp_ll.png',
    'name': 'Ayesh1',
    'phone': '',
    'tier': '',
    'updated_at': 1556409600000,
    'updated_by': 4,
    'websiteUrl': '',
    'enterpriseusers': [],
    'tier_group': 4,
    'log_retention_period': 'P15D',
    'secret_key': 'AQICAHjsZ6dXNX8Jn2vL7XjQU0Ng3LQHWgd3ctQoo1cb1QRYNQGHl2ZpOIJkdMYiDWc4gwnvAAAAaTBnBgkqhkiG9w0BBwagWjBYAgEAMFMGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMBlw37XgLRPR2N6FlAgEQgCY7femudiumay721XMrba2/0ovcenm+uwb+cMBnpSUZqPrCCG/OVg==',
    'created_by': 0,
    'resource_uri': '/api/v1/enterprise/4/',
    'service_key': [
      {
        'created_at': 1544745600000,
        'created_by': 'Qwerty1 Parrot',
        'description': 'description',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6Ijk4ODc3ODU1NjU1YTQxZSJ9.qfACS5iCTW1QiBn7TzXoCS7N10vMN5z25izPpMwZ5tc'
      },
      {
        'created_at': 1546596391435,
        'created_by': 'Qwerty1 Parrot',
        'description': 'description',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjhlNmRjMjZlMGU2YjQ5NCJ9.K9X7Gf4Un02TmZ-bgGoBdRubJj4wjvHjYYpFpbwSTA4'
      },
      {
        'created_at': 1546598030641,
        'created_by': 'Qwerty1 Parrot',
        'description': 'Default service key.',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjJlYjQ4MWEyM2IyZDRhZCJ9.Yth6Fr71YpfTyqKPrXk6Ricpx27YWOdZbJpCp_wltlo'
      },
      {
        'created_at': 1546606893121,
        'created_by': 'Qwerty1 Parrot',
        'description': 'Default service key.',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6ImMxZDk4OTFkNzQ2YTQ2YyJ9.T4Gf27V2rfzpMTQ8nzRsrnj5u9RyPMCtmfjUxoplDZQ'
      },
      {
        'created_at': 1546612469122,
        'created_by': 'Qwerty1 Parrot',
        'description': 'Default service key.',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjEzYzhkNGIxZmI3ZDQwYiJ9.bhze8idIzCT5Zcc2DMlQ9-CKT4Q5BmeERfVyXUH_8Ps'
      },
      {
        'created_at': 1546612607057,
        'created_by': 'Qwerty1 Parrot',
        'description': 'Default service key.',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6ImRjMTUwMGQ5MGUzMjQ4ZCJ9.JE7HqWi9Wof1U5kf8esi0ouSl28zQjr0YzoWTEWhamc'
      },
      {
        'created_at': 1546612770908,
        'created_by': 'Qwerty1 Parrot',
        'description': 'Default service key.',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjVhODRhYWYyYWU1NzQxMSJ9.bxwzTujrTXAmMz0Gmf3of4EhKAvi5JmibeIDciwzXXk'
      },
      {
        'created_at': 1546612835706,
        'created_by': 'Qwerty1 Parrot',
        'description': 'Default service key.',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjNmNzc5Y2QwNGU0NTRlYSJ9.eSP6hC2lASEpkb7MB4jw0wrci3TKaLXBE8Aw5iL4eG4'
      },
      {
        'created_at': 1546613065133,
        'created_by': 'Qwerty1 Parrot',
        'description': 'Default service key.',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6ImViMzE2ZTc2YjQ5MzQwMCJ9.MaUxPGryIWuqt2ve6PP08pM5KILDf5spbb5uD4SDb1E'
      },
      {
        'created_at': 1546613131936,
        'created_by': 'Qwerty1 Parrot',
        'description': 'Default service key.',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjczYmY2ZWI0YzIzZTQ3YSJ9.8uSneL17NyLaEW-UjlBseke5A-xqEh02cOxBAa82GE0'
      },
      {
        'created_at': 1546613204815,
        'created_by': 'Qwerty1 Parrot',
        'description': 'Default service key.',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjhkYjZiNzQ4ZTk5ZDQzNCJ9.6Mp0aPb7drJ8ePjCqBDOGzasiPrkGX8j3NPKFbKzqw4'
      },
      {
        'created_at': 1546613651384,
        'created_by': 'Qwerty1 Parrot',
        'description': 'Default service key.',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjBlMGMwNzQ2YzlmYzQ0ZiJ9.5cWjXrM0sve2YEkYVQ-rfpMHZVr7sd95HC0HErlqIlc'
      },
      {
        'created_at': 1546613776174,
        'created_by': 'Qwerty1 Parrot',
        'description': 'Default service key.',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6Ijg4NTQ4YzAzYjc4MTQzNiJ9.AGnBBKWHK8yxAIpVjmgRcwN8W_w95mjor8FKpEqFa20'
      },
      {
        'created_at': 1546613829310,
        'created_by': 'Qwerty1 Parrot',
        'description': 'Default service key.',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6ImVkNDgxNGJmNDk5MDRjNyJ9.f46FY8o9CpkMb1TiRMJoEMIIlpaC4AjOqJgDt8Z3nPU'
      },
      {
        'created_at': 1546613832657,
        'created_by': 'Qwerty1 Parrot',
        'description': 'Default service key.',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjljMjI0OTc4ODUxMjQwNSJ9.qakh1g-81Pj1KYQJC9RqUlwdCZ1n5FguhwDiflnoRDE'
      },
      {
        'created_at': 1546613993517,
        'created_by': 'Qwerty1 Parrot',
        'description': 'Default service key.',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6ImI4NjBjMWE1NTlmNjQwNSJ9.ypB--1amXLblsLgKbhN03-qzJD6TdEJ6bcDkm9LyPZs'
      },
      {
        'created_at': 1546846133591,
        'created_by': 'Qwerty1 Parrot',
        'description': 'Default service key.',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6ImI4YWE0ZGMzM2EwODRjNCJ9.9nLq1U2eQPmOI9F0Diz6zyMZL1l9makHxoXbkhOB3Yc'
      },
      {
        'created_at': 1546846279648,
        'created_by': 'Qwerty1 Parrot',
        'description': 'Default service key.',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6ImI3MTY1NGJhYzQ1MzRmNyJ9.5D2GNpgE_wUBf1GPtGMYj_kAfkOvN5veEefPL-6s_DU'
      },
      {
        'created_at': 1546846415110,
        'created_by': 'Qwerty1 Parrot',
        'description': 'Default service key.',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6ImI1NzYxM2ZjOGMxMDQxMSJ9.k0fFcEbJ_t8YbZoeGM453hEckCIHlY79YbZln6gNSyY'
      },
      {
        'created_at': 1546846531416,
        'created_by': 'Qwerty1 Parrot',
        'description': 'Dddddddddddd.',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjI3MjljMmY1YzMyOTRiYSJ9.FxIpHPUyzud-Ua0AkXWdfaJ90QV8Xb-6-cQ4o2fAFwo'
      },
      {
        'created_at': 1546846773341,
        'created_by': 'Qwerty1 Parrot',
        'description': 'Dddddddddddd.',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjNkNmQzMzJkNGUxOTRiNiJ9.7izWmCKDPnhVkRTfmSrTQzzerKeC7CO_mYuxbNY6kZI'
      },
      {
        'created_at': 1546847025755,
        'created_by': 'Qwerty1 Parrot',
        'description': 'ssssssss.',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjY1MjQ3NDY3MjA5NTRiYyJ9.UaP_N6yAwiBIphx0kQrs5id0-fJ8nn9xMLjjdQCVYFM'
      },
      {
        'created_at': 1546847234124,
        'created_by': 'Qwerty1 Parrot',
        'description': 'ssssssss.',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6ImE4MDkzNWU4ODk5MTQ1MyJ9.2oqbY86jYOmUl-vHbTNIIsRbDOWO1HuIT2WPdt7n8Cs'
      },
      {
        'created_at': 1546850678663,
        'created_by': 'Qwerty1 Parrot',
        'description': {
          'description': 'asdasdasd'
        },
        'enabled': true,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjU4MjJkNzgzODRlZDQ4YSJ9.pkJqu9cl1gV1cuzyOduJFdJ-qfWluSjdDcxW1nEaCsM'
      },
      {
        'created_at': 1546850778022,
        'created_by': 'Qwerty1 Parrot',
        'description': 'shoaib',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjNiZmMyYTdhMDA5OTRlMiJ9.mfQWiJDPTsmLZZmvyJlX92nCZ4fhHrTuUInp-hBNMps'
      },
      {
        'created_at': 1546860174656,
        'created_by': 'Qwerty1 Parrot',
        'description': 'sdasdsadsadasd',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6Ijg4MTBhYmJhN2Q5YTQwYyJ9.NXfPnoyHwQbhxrlIZ9oz2DX1hiR8dmdp-_qbVbcNwD4'
      },
      {
        'created_at': 1546860659771,
        'created_by': 'Qwerty1 Parrot',
        'description': 'shaoib sdasdasdasd',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjFmMjExYmI4OTRmNDQxNiJ9.BjsKmDa7mriqfci65CSEW2iVXEY2zCBtr_KWfAsJhyY'
      },
      {
        'created_at': 1546861172056,
        'created_by': 'Qwerty1 Parrot',
        'description': 'sandeep',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjVlMmFjNmQ1ZjhiODRhNiJ9.VIx8SPa5wrMIw1dsro7iUewcD-dja5MUvohOT1NMF_I'
      },
      {
        'created_at': 1546861797952,
        'created_by': 'Qwerty1 Parrot',
        'description': 'asda',
        'enabled': false,
        'expired_at': 1547037292812,
        'expired_by': 'Qwerty1 Parrot',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6Ijk2NTg1MmEzYTQwZTQ5MiJ9.yyOYXmPp1xA2KcL5oIYotY71EYLq8X1anQ9eOeH902M'
      },
      {
        'created_at': 1546862071738,
        'created_by': 'Qwerty1 Parrot',
        'description': '111',
        'enabled': false,
        'expired_at': 1547627959130,
        'expired_by': 'Qwerty1 Parrot',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjExMzZkNDg5YzhhYzQzYiJ9.nth4abR5lX7aWYa2g3VZgZUKSPs4wTcEPyfCzF_czYY'
      },
      {
        'created_at': 1546864129858,
        'created_by': 'Qwerty1 Parrot',
        'description': '2222',
        'enabled': false,
        'expired_at': 1547627961236,
        'expired_by': 'Qwerty1 Parrot',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjMyNzUyNDNhMDllZjRjMSJ9.lr7BDUAdH3twaHTAby0LYFKlGMRrv5TtoGxJJL1fOjo'
      },
      {
        'created_at': 1546864136872,
        'created_by': 'Qwerty1 Parrot',
        'description': '3333',
        'enabled': false,
        'expired_at': 1547627962941,
        'expired_by': 'Qwerty1 Parrot',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjA1NTUwMDc5YzEwMTQwNCJ9.hu9VxIXSXG-BFmvbayjoh-XKlsv7cx3AACwKD5AQCpg'
      },
      {
        'created_at': 1546864141674,
        'created_by': 'Qwerty1 Parrot',
        'description': '4444',
        'enabled': false,
        'expired_at': 1547627968065,
        'expired_by': 'Qwerty1 Parrot',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjAxMGRjNjc2Y2RhMjRmYiJ9.fIRyGTgDRmwFdIndwYVXAWjvpO8ytdxYPADShaqHviw'
      },
      {
        'created_at': 1546864148449,
        'created_by': 'Qwerty1 Parrot',
        'description': '5555',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjVkNjY0YzJmZWNkMTQ5OSJ9.9XPVYay4o2ggHil4NYzG991P1Go-GWpp6le520F78rw'
      },
      {
        'created_at': 1546951206219,
        'created_by': 'Qwerty1 Parrot',
        'description': 'description',
        'enabled': false,
        'expired_at': 1552270331538,
        'expired_by': 'Qwerty1 Parrot',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjViMjNhYjNmNzJiYzQ5NCJ9.aJE4RX8W3wy5Q1DZ3vrjLiFpqiQVg-09zDpq0Soy-BM'
      },
      {
        'created_at': 1547010959358,
        'created_by': 'Qwerty1 Parrot',
        'description': 'Test Long Text Test Long Text Test Long Text Test Long Text Test Long Text',
        'enabled': false,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6ImFlZTYwM2ZkZDRmMzQ2ZSJ9.-9QLlzLaBjObf7PWFMGBLYQiHiI1UMhuV-mvkB_K-34'
      },
      {
        'created_at': 1547018317778,
        'created_by': 'Qwerty1 Parrot',
        'description': 'real',
        'enabled': false,
        'expired_at': 1547628318448,
        'expired_by': 'Qwerty1 Parrot',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjU5MGRhM2ZiZTc2NjRmZSJ9.47JDWFg5dEcqrOPUuSntxrbw-Lv-46MCtMILEvC5m8Y'
      },
      {
        'created_at': 1547036985912,
        'created_by': 'Qwerty1 Parrot',
        'description': 'description1',
        'enabled': false,
        'expired_at': 1547037195321,
        'expired_by': 'Qwerty1 Parrot',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjhkYzI5MzY3MmEyZTQyMSJ9.krPZVDh35lMajsGlJgZNMp6cf9Qbw7rCuz_qeezNXKQ'
      },
      {
        'created_at': 1547037318109,
        'created_by': 'Qwerty1 Parrot',
        'description': 'Test12',
        'enabled': false,
        'expired_at': 1547037330807,
        'expired_by': 'Qwerty1 Parrot',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjIwYTk4NTZhNTdiMzRiMiJ9.bb-19WVs2og8lcmUKFyQG4pVhKPWWHtj2umq0bvWFIM'
      },
      {
        'created_at': 1547627987975,
        'created_by': 'Qwerty1 Parrot',
        'description': 'sandeep',
        'enabled': false,
        'expired_at': 1547628237222,
        'expired_by': 'Qwerty1 Parrot',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6ImI3NjJiZTYwOTI0YzQzZCJ9.PwIlTzfC1a_KBTk6WgkuhlYW4_9MMnsC-9IkMRJARU4'
      },
      {
        'created_at': 1547639103227,
        'created_by': 'Qwerty1 Parrot',
        'description': 'Puspita',
        'enabled': false,
        'expired_at': 1547640155763,
        'expired_by': 'Qwerty1 Parrot',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6ImNjZDViZGRjZTAzNTRmZiJ9.yLYsOwyxIy2NiCHDshaB4HHwwMXLxkCusjx7i8GWYvs'
      },
      {
        'created_at': 1547814279484,
        'created_by': 'Qwerty1 Parrot',
        'description': 'a',
        'enabled': false,
        'expired_at': 1548671983219,
        'expired_by': 'Qwerty1 Parrot',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6ImU1ODdhMWY2NjJkYjQzYyJ9.n9M7EnBOpYmZuJCo2oMNE0cJHfPBFY4VoMv-8kEDTxg'
      },
      {
        'created_at': 1547814369737,
        'created_by': 'Qwerty1 Parrot',
        'description': 'test22',
        'enabled': true,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6ImFkODc3ZWUzYjExZDRhYiJ9.9F_kDqg4rxVOz_UKF-6XgjV3zgWOf82g0jNeKh-r4Sw'
      },
      {
        'created_at': 1548062222442,
        'created_by': 'Qwerty1 Parrot',
        'description': 'imichat',
        'enabled': false,
        'expired_at': 1548062225406,
        'expired_by': 'Qwerty1 Parrot',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjBjNDBiOTI1YzVlNzQ0YSJ9.Y33HvCn278HznBJM75tE3qEoatmiue_SwljTSCTebJg'
      },
      {
        'created_at': 1548062257034,
        'created_by': 'Qwerty1 Parrot',
        'description': 'imichat',
        'enabled': false,
        'expired_at': 1548062265830,
        'expired_by': 'Qwerty1 Parrot',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6ImY0MTc1MDFmY2RlZDQ1OSJ9.sRGJ_OB5CDpcEhAWtThR0ERaCfy1DRR6WRiwQbbFF9k'
      },
      {
        'created_at': 1548138886594,
        'created_by': 'Qwerty1 Parrot',
        'description': 'Default service key.',
        'enabled': false,
        'expired_at': 1548139482861,
        'expired_by': 'Qwerty1 Parrot',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjU1ZDNhNjY1NDMwNTQzMSJ9.Z5ypgcOngHCXkfHo7nH2wryustIG_VQgjLRIEnLuGC0'
      },
      {
        'created_at': 1548331010066,
        'created_by': 'Qwerty1 Parrot',
        'description': 'new',
        'enabled': true,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6ImIzZjQyNzBhYjJjNzQ5NiJ9.XoxGi7795tNf04yEVb26seDdS_pz1bJR1XiBBGjo_KQ'
      },
      {
        'created_at': 1548669643013,
        'created_by': 'Qwerty1 Parrot',
        'description': 'dasd',
        'enabled': true,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6Ijc4OWY5ODU4OTQxMTRlZiJ9.dldPEzXugGzp_yMVg7dGcW4ZtjJiJOe7CtbZfTs1KTI'
      },
      {
        'created_at': 1548670439550,
        'created_by': 'Qwerty1 Parrot',
        'description': 'asdasd',
        'enabled': true,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjEyYmQ0OTEwN2YxNjQzZCJ9.LJm4EdLW72EUM58nOWzFMSWYmcnth1u1bXliAvz2Yxc'
      },
      {
        'created_at': 1548671976901,
        'created_by': 'Qwerty1 Parrot',
        'description': 'sdfsdf',
        'enabled': true,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjlhODg3MmZmMmU4OTQ3MyJ9.JIM1-CHTgoIWW_ao1yPtg9ZpGVw_T1xaac6Ijb2zcLI'
      },
      {
        'created_at': 1549268941116,
        'created_by': 'Qwerty1 Parrot',
        'description': 'puspita1',
        'enabled': false,
        'expired_at': 1549270136866,
        'expired_by': 'Qwerty1 Parrot',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6ImZhMTk3NzExNTBiOTRhNiJ9.BCqJFdFixVgWr1KOb8nIXCfJAfmPR1d1xdxs1ay2Kb4'
      },
      {
        'created_at': 1549368375190,
        'created_by': 'Qwerty1 Parrot',
        'description': 'adsadasdsa adsadasdsa adsadasdsa adsadasdsa adsadasdsa adsadasdsa adsadasdsa adsadasdsa adsadasdsa adsadasdsa adsadasdsa adsadasdsa adsadasdsa adsadasdsa adsadasdsa adsadasdsa adsadasdsa adsadasdsa adsadasdsa adsadasdsa adsadasdsa adsadasdsa adsadasdsa adsadasdsa adsadasdsa adsadasdsa adsadasdsa adsadasdsa adsadasdsa ',
        'enabled': true,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjU0NjAxMDYzNTM4NzQ5NSJ9.Orkn-_YdEl5lUvbf0-mUVN2HT_tGCj5vYIAGo-ifvrA'
      },
      {
        'created_at': 1553254539500,
        'created_by': 'Qwerty1 Parrot',
        'description': 'Default service key.',
        'enabled': true,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6ImFhYTgzZmVjODA2MDQyNyJ9.R8y817Iw6HnsFO8e3cHCuBWUXYKnsubDmKoCc-8td_I'
      },
      {
        'created_at': 1553254671172,
        'created_by': 'Qwerty1 Parrot',
        'description': 'description edited',
        'enabled': false,
        'expired_at': 1553255339934,
        'expired_by': 'Qwerty1 Parrot',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6ImVhMjFkYjJiOTExMzQxZSJ9.6za1Q_zrj3j0q3UQlQWXmlbxZW0HKKUv-lUiftKKJFk'
      },
      {
        'created_at': 1555257462448,
        'created_by': 'Qwerty1 Parrot',
        'description': 'description edited',
        'enabled': false,
        'expired_at': 1555257463286,
        'expired_by': 'Qwerty1 Parrot',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjBiN2I2YzZlNWJmYjQ4ZCJ9.RZc9HFPVEzLVhKma6V0usbo3F3Dd0rQZH29QM4yv3HY'
      },
      {
        'created_at': 1555258019483,
        'created_by': 'Qwerty1 Parrot',
        'description': 'description edited',
        'enabled': false,
        'expired_at': 1555258020496,
        'expired_by': 'Qwerty1 Parrot',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjgzNGE4MzFlMzNmODQ3MiJ9.JVWxENRhmiQEgt7aS8dNvfBFazDgF67rPjh09s6ckJ0'
      },
      {
        'created_at': 1555258066763,
        'created_by': 'Qwerty1 Parrot',
        'description': 'description edited',
        'enabled': false,
        'expired_at': 1555258067666,
        'expired_by': 'Qwerty1 Parrot',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6Ijg4MTE2ZTMzOWM0YjQ0MyJ9.hyBhy3IR6mfpdAAxt-fJijRLcBEnGcSdx836oVXACCE'
      },
      {
        'created_at': 1555258192921,
        'created_by': 'Qwerty1 Parrot',
        'description': 'description edited',
        'enabled': false,
        'expired_at': 1555258732206,
        'expired_by': 'Qwerty1 Parrot',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6Ijk5ODExZGMxZDc2YzRkOCJ9.y4t1HY-J-TyhcB9LRLbZ9dndAgydzXGbIOquPa2-nww'
      },
      {
        'created_at': 1555258792561,
        'created_by': 'Qwerty1 Parrot',
        'description': 'description edited',
        'enabled': false,
        'expired_at': 1555258793438,
        'expired_by': 'Qwerty1 Parrot',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6IjBkNGEzMDg4YzViODQ2NiJ9.lj4YbDD4Es6x09dQ1pUfzhtVHNB43xy9CEgG90m2Aj0'
      },
      {
        'created_at': 1555258825200,
        'created_by': 'Qwerty1 Parrot',
        'description': 'description edited',
        'enabled': true,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6ImY1ZWMxZjEyOWJkODQ4MiJ9.QwMvdUYKJ-89KyHQAYlIBZYMironaxpcyuCA4oiEEPg'
      },
      {
        'created_at': 1555262838687,
        'created_by': 'Qwerty1 Parrot',
        'description': 'description edited',
        'enabled': true,
        'expired_at': null,
        'expired_by': '',
        'key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzZXJ2aWNlLWtleSI6ImQ4YzAxYjcxMGZiYjQ1NCJ9.GAuGsCRI4LMMLnP3H8LFV-xtFYgovJftZNeEzg4fUOs'
      }
    ]
  },
  'botcreationstate': {
    'codeBased': {
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'room_persistence_time': 240,
      'data_persistence_period': 30,
      'transactions_per_pricing_unit': 30,
      'form_validation_basic_info': false,
      'form_validation_avator': false
    },
    'pipeLineBased': {
      'logo': 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png',
      'room_persistence_time': 240,
      'data_persistence_period': 30,
      'transactions_per_pricing_unit': 30,
      'form_validation_basic_info': false
    }
  },
  'analysisstate2': {
    'analysisHeaderData': null,
    'overviewInfo': null,
    'channelWiseFlowsPerSession': null,
    'userAcquisition': null,
    'totalMessages': null,
    'averageRoomTime': null,
    'totalFlows': null,
    'userLoyalty': null,
    'channelWiseAverageSessionTime': null,
    'topgenerationtemplates': null,
    'totalSessions': null,
    'flowsPerRoom': null,
    'totalRooms': null,
    'roomDuration': null,
    'channelWiseSessions': null,
    'channelWiseUsers': null,
    'usagetracking': null,
    'sessionsperuser': null,
    'messagespersession': null,
    'timepersession': null,
    'totalTimeOfRooms': null,
    'sessionhandling': null
  },
  'app': {
    'autoLogoutTime': null,
    'masterProfilePermissions': [
      {
        'category': 'Bots',
        'created_at': '2018-08-31T08:49:03.625000',
        'description': 'List of all bots in the enterprise the user has access to',
        'id': 1,
        'is_configurable_action': false,
        'is_default_action': true,
        'name': 'Get Bots',
        'permissions': {
          'endpoint': '/api/v1/bot/',
          'fields': [],
          'get_params': [
            {
              'key': 'id',
              'optional': true,
              'type': 'bot'
            },
            {
              'key': 'id__in',
              'type': 'bots'
            },
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/1/',
        'updated_at': '2018-08-31T08:49:03.625000'
      },
      {
        'category': 'Bots',
        'created_at': '2018-08-31T08:49:03.630000',
        'description': 'Create a new bot on the platform',
        'id': 2,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Create Bots',
        'permissions': {
          'endpoint': '/api/v1/bot/',
          'fields': [],
          'method': 'POST',
          'post_fields': [
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/2/',
        'updated_at': '2018-08-31T08:49:03.630000'
      },
      {
        'category': 'Bots',
        'created_at': '2018-08-31T08:49:03.633000',
        'description': 'Edit the configuration information for an existing bot',
        'id': 3,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Update Bots',
        'permissions': {
          'endpoint': '/api/v1/bot/',
          'fields': [],
          'get_params': [
            {
              'key': 'id',
              'optional': true,
              'type': 'bot'
            },
            {
              'key': 'id__in',
              'type': 'bots'
            },
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'method': 'PUT',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/3/',
        'updated_at': '2018-08-31T08:49:03.633000'
      },
      {
        'category': 'Bots',
        'created_at': '2018-08-31T08:49:03.636000',
        'description': 'Delete a bot',
        'id': 4,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Delete Bots',
        'permissions': {
          'endpoint': '/api/v1/bot/',
          'fields': [],
          'get_params': [
            {
              'key': 'id',
              'type': 'bot'
            },
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'method': 'DELETE',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/4/',
        'updated_at': '2018-08-31T08:49:03.636000'
      },
      {
        'category': 'Bots',
        'created_at': '2018-08-31T08:49:03.639000',
        'description': 'Get Bots Anonymous',
        'id': 5,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Get Bots Anonymous',
        'permissions': {
          'endpoint': '/api/v1/bot/',
          'fields': [
            'name',
            'bot_unique_name',
            'name',
            'bot_type',
            'logo',
            'heading',
            'description',
            'avatars'
          ],
          'get_params': [
            {
              'key': 'id',
              'type': 'bot'
            }
          ],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin',
            'anonymous'
          ]
        },
        'resource_uri': '/api/v1/actions/5/',
        'updated_at': '2018-08-31T08:49:03.639000'
      },
      {
        'category': 'Bot Knowledge Base',
        'created_at': '2018-08-31T08:49:03.641000',
        'description': 'View enterprise knowledge base concepts',
        'id': 6,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Get Enterprise Knowledge base',
        'permissions': {
          'endpoint': '/api/v1/customner/',
          'fields': [],
          'get_params': [
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            },
            {
              'key': 'bot_id',
              'optional': true,
              'type': 'bot'
            }
          ],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/6/',
        'updated_at': '2018-08-31T08:49:03.641000'
      },
      {
        'category': 'Bot Knowledge Base',
        'created_at': '2018-08-31T08:49:03.644000',
        'description': 'Create a new enterprise knowledge base concept',
        'id': 7,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Create Enterprise Knowledge base',
        'permissions': {
          'endpoint': '/api/v1/customner/',
          'fields': [],
          'method': 'POST',
          'post_fields': [
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            },
            {
              'key': 'bot_id',
              'optional': true,
              'type': 'bot'
            }
          ],
          'role': [
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/7/',
        'updated_at': '2018-08-31T08:49:03.644000'
      },
      {
        'category': 'Bot Knowledge Base',
        'created_at': '2018-08-31T08:49:03.647000',
        'description': 'Edit an enterprise knowledge base concept',
        'id': 8,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Update Enterprise Knowledge base',
        'permissions': {
          'endpoint': '/api/v1/customner/',
          'fields': [],
          'get_params': [
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            },
            {
              'key': 'bot_id',
              'optional': true,
              'type': 'bot'
            }
          ],
          'method': 'PUT',
          'role': [
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/8/',
        'updated_at': '2018-08-31T08:49:03.647000'
      },
      {
        'category': 'Bot Knowledge Base',
        'created_at': '2018-08-31T08:49:03.649000',
        'description': 'Delete an enterprise knowledge base concept',
        'id': 9,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Delete Enterprise Knowledge base',
        'permissions': {
          'endpoint': '/api/v1/customner/',
          'fields': [],
          'get_params': [
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            },
            {
              'key': 'bot_id',
              'optional': true,
              'type': 'bot'
            }
          ],
          'method': 'DELETE',
          'role': [
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/9/',
        'updated_at': '2018-08-31T08:49:03.649000'
      },
      {
        'category': 'Bot Versioning',
        'created_at': '2018-08-31T08:49:03.652000',
        'description': 'Create/fork a new version from an existing version',
        'id': 10,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Create Bot Versioning',
        'permissions': {
          'endpoint': '/api/v1/botversioning/',
          'fields': [],
          'method': 'POST',
          'post_fields': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/10/',
        'updated_at': '2018-08-31T08:49:03.652000'
      },
      {
        'category': 'Bot Versioning',
        'created_at': '2018-08-31T08:49:03.655000',
        'description': 'View all the versions and version metadata (last updated date) for a bot\'s code',
        'id': 11,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'GET Bot Versioning',
        'permissions': {
          'endpoint': '/api/v1/botversioning/',
          'fields': [],
          'get_params': [
            {
              'key': 'bot_id',
              'type': 'bot'
            },
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/11/',
        'updated_at': '2018-08-31T08:49:03.655000'
      },
      {
        'category': 'Bot Versioning',
        'created_at': '2018-08-31T08:49:03.657000',
        'description': 'Edit an exisiting bot version or make an Inactive version the Active version',
        'id': 12,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Update Bot Versioning',
        'permissions': {
          'endpoint': '/api/v1/botversioning/',
          'fields': [],
          'get_params': [
            {
              'key': 'bot_id',
              'type': 'bot'
            },
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'method': 'PUT',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/12/',
        'updated_at': '2018-08-31T08:49:03.657000'
      },
      {
        'category': 'Bot Versioning',
        'created_at': '2018-08-31T08:49:03.660000',
        'description': 'Delete a Bot Version',
        'id': 13,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Delete Bot Versioning',
        'permissions': {
          'endpoint': '/api/v1/botversioning/',
          'fields': [],
          'get_params': [
            {
              'key': 'bot_id',
              'type': 'bot'
            },
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'method': 'DELETE',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/13/',
        'updated_at': '2018-08-31T08:49:03.660000'
      },
      {
        'category': 'Role Management',
        'created_at': '2018-08-31T08:49:03.662000',
        'description': 'Create a new custom role ',
        'id': 14,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Create Role',
        'permissions': {
          'endpoint': '/api/v1/role/',
          'fields': [],
          'method': 'POST',
          'post_fields': [
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'role': [
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/14/',
        'updated_at': '2018-08-31T08:49:03.663000'
      },
      {
        'category': 'Role Management',
        'created_at': '2018-08-31T08:49:03.665000',
        'description': 'Get all the system and custom roles along with their permissions',
        'id': 15,
        'is_configurable_action': false,
        'is_default_action': true,
        'name': 'Get Role',
        'permissions': {
          'endpoint': '/api/v1/role/',
          'fields': [],
          'get_params': [
            {
              'key': 'enterprise_id__in',
              'type': 'enterprise'
            }
          ],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/15/',
        'updated_at': '2018-08-31T08:49:03.665000'
      },
      {
        'category': 'Role Management',
        'created_at': '2018-08-31T08:49:03.668000',
        'description': 'Modify the permissions for a custom role',
        'id': 16,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Update Role',
        'permissions': {
          'endpoint': '/api/v1/role/',
          'fields': [],
          'get_params': [
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'method': 'PUT',
          'role': [
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/16/',
        'updated_at': '2018-08-31T08:49:03.668000'
      },
      {
        'category': 'Role Management',
        'created_at': '2018-08-31T08:49:03.670000',
        'description': 'Delete a role',
        'id': 17,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Delete Role',
        'permissions': {
          'endpoint': '/api/v1/role/',
          'fields': [],
          'get_params': [
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'method': 'DELETE',
          'role': [
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/17/',
        'updated_at': '2018-08-31T08:49:03.670000'
      },
      {
        'category': 'User Management',
        'created_at': '2018-08-31T08:49:03.673000',
        'description': 'Add a new user to the enterprise and assign a role',
        'id': 18,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Create User',
        'permissions': {
          'endpoint': '/api/v1/user/',
          'fields': [],
          'method': 'POST',
          'post_fields': [
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'role': [
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/18/',
        'updated_at': '2018-08-31T08:49:03.673000'
      },
      {
        'category': 'User Management',
        'created_at': '2018-08-31T08:49:03.676000',
        'description': 'View all the details of user',
        'id': 19,
        'is_configurable_action': false,
        'is_default_action': true,
        'name': 'Get User',
        'permissions': {
          'endpoint': '/api/v1/user/',
          'fields': [],
          'get_params': [
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/19/',
        'updated_at': '2018-08-31T08:49:03.677000'
      },
      {
        'category': 'User Management',
        'created_at': '2018-08-31T08:49:03.679000',
        'description': 'Update the user details such as role',
        'id': 20,
        'is_configurable_action': false,
        'is_default_action': true,
        'name': 'Update User',
        'permissions': {
          'endpoint': '/api/v1/user/',
          'exclude': [
            'is_superuser'
          ],
          'fields': [],
          'get_params': [
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'method': 'PUT',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/20/',
        'updated_at': '2018-08-31T08:49:03.679000'
      },
      {
        'category': 'Bot Management',
        'created_at': '2018-08-31T08:49:03.682000',
        'description': 'View all the consumer related information ',
        'id': 21,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Get Consumers',
        'permissions': {
          'endpoint': '/api/v1/consumer/',
          'fields': [],
          'get_params': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/21/',
        'updated_at': '2018-08-31T08:49:03.682000'
      },
      {
        'category': 'Bot Management',
        'created_at': '2018-08-31T08:49:03.684000',
        'description': 'View all historical sessions information',
        'id': 22,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Get Sessions',
        'permissions': {
          'endpoint': '/api/v1/room/',
          'fields': [],
          'get_params': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/22/',
        'updated_at': '2018-08-31T08:49:03.684000'
      },
      {
        'category': 'Bot Management',
        'created_at': '2018-08-31T08:49:03.687000',
        'description': 'View access to Analytics data such Engagement,volume,performance',
        'id': 23,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Analytics',
        'permissions': {
          'endpoint': '/api/v1/analytics/',
          'fields': [],
          'get_params': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/23/',
        'updated_at': '2018-08-31T08:49:03.687000'
      },
      {
        'category': 'Bot Testing',
        'created_at': '2018-08-31T08:49:03.690000',
        'description': 'View the testcases for a particular bot in the Testing section',
        'id': 24,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Get Bot Testcases',
        'permissions': {
          'endpoint': '/api/v1/bottestcases/',
          'fields': [],
          'get_params': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/24/',
        'updated_at': '2018-08-31T08:49:03.690000'
      },
      {
        'category': 'Bot Testing',
        'created_at': '2018-08-31T08:49:03.692000',
        'description': 'Add a test case in the Testing table',
        'id': 25,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Create Bot Testcases',
        'permissions': {
          'endpoint': '/api/v1/bottestcases/',
          'fields': [],
          'method': 'POST',
          'post_fields': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/25/',
        'updated_at': '2018-08-31T08:49:03.692000'
      },
      {
        'category': 'Bot Testing',
        'created_at': '2018-08-31T08:49:03.695000',
        'description': 'Edit test cases in the Testing table',
        'id': 26,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Update Bot Testcases',
        'permissions': {
          'endpoint': '/api/v1/bottestcases/',
          'fields': [],
          'get_params': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'method': 'PUT',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/26/',
        'updated_at': '2018-08-31T08:49:03.695000'
      },
      {
        'category': 'Bot Testing',
        'created_at': '2018-08-31T08:49:03.698000',
        'description': 'Delete existing test cases from the Testing table',
        'id': 27,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Delete Bot Testcases',
        'permissions': {
          'endpoint': '/api/v1/bottestcases/',
          'fields': [],
          'get_params': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'method': 'DELETE',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/27/',
        'updated_at': '2018-08-31T08:49:03.698000'
      },
      {
        'category': 'Bot Architecture',
        'created_at': '2018-08-31T08:49:03.700000',
        'description': 'View all the available integration channels',
        'id': 28,
        'is_configurable_action': false,
        'is_default_action': true,
        'name': 'Get Integrations',
        'permissions': {
          'endpoint': '/api/v1/integrations/',
          'fields': [],
          'get_params': [],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/28/',
        'updated_at': '2018-08-31T08:49:03.700000'
      },
      {
        'category': 'Bot Architecture',
        'created_at': '2018-08-31T08:49:03.704000',
        'description': 'View all the available pipeline modules',
        'id': 29,
        'is_configurable_action': false,
        'is_default_action': true,
        'name': 'Get Pipeline Module',
        'permissions': {
          'endpoint': '/api/v1/pipelinemodule/',
          'fields': [],
          'get_params': [],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/29/',
        'updated_at': '2018-08-31T08:49:03.704000'
      },
      {
        'category': 'Reports',
        'created_at': '2018-08-31T08:49:03.707000',
        'description': 'Subscribe to a bot report',
        'id': 30,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Create Reports',
        'permissions': {
          'endpoint': '/api/v1/reports/',
          'fields': [],
          'get_params': [
            {
              'key': 'bot_id',
              'type': 'bot'
            },
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'method': 'POST',
          'post_fields': [
            {
              'key': 'bot_id',
              'type': 'bot'
            },
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/30/',
        'updated_at': '2018-08-31T08:49:03.707000'
      },
      {
        'category': 'Reports',
        'created_at': '2018-08-31T08:49:03.710000',
        'description': 'View the list of all reports ever subscribed to by the enterprise',
        'id': 31,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Get Reports',
        'permissions': {
          'endpoint': '/api/v1/reports/',
          'fields': [],
          'get_params': [
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/31/',
        'updated_at': '2018-08-31T08:49:03.710000'
      },
      {
        'category': 'Reports',
        'created_at': '2018-08-31T08:49:03.713000',
        'description': 'Update the details, such as frequency, email id etc  for a subscribed report',
        'id': 32,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Update Reports',
        'permissions': {
          'endpoint': '/api/v1/reports/',
          'fields': [],
          'get_params': [
            {
              'key': 'bot_id__in',
              'type': 'bots'
            },
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'method': 'PUT',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/32/',
        'updated_at': '2018-08-31T08:49:03.713000'
      },
      {
        'category': 'Reports',
        'created_at': '2018-08-31T08:49:03.716000',
        'description': 'Unsubscribe from a report',
        'id': 33,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Delete Reports',
        'permissions': {
          'endpoint': '/api/v1/reports/',
          'fields': [],
          'get_params': [
            {
              'key': 'id__in',
              'type': 'bots'
            },
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'method': 'DELETE',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/33/',
        'updated_at': '2018-08-31T08:49:03.716000'
      },
      {
        'category': 'Reports',
        'created_at': '2018-08-31T08:49:03.718000',
        'description': 'View the historical data of all the reports sent out for an enterprise',
        'id': 34,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Get Report History',
        'permissions': {
          'endpoint': '/api/v1/reporthistory/',
          'fields': [],
          'get_params': [
            {
              'key': 'bot_id__in',
              'type': 'bots'
            },
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/34/',
        'updated_at': '2018-08-31T08:49:03.718000'
      },
      {
        'category': 'Enterprise Details',
        'created_at': '2018-08-31T08:49:03.721000',
        'description': 'Get detail of enterprise the user is logged in',
        'id': 35,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Get Enterprise',
        'permissions': {
          'endpoint': '/api/v1/enterprise/',
          'fields': [],
          'get_params': [
            {
              'key': 'id',
              'type': 'enterprise'
            }
          ],
          'method': 'GET',
          'role': [
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/35/',
        'updated_at': '2018-08-31T08:49:03.721000'
      },
      {
        'category': 'Enterprise Details',
        'created_at': '2018-08-31T08:49:03.723000',
        'description': 'Update the details for the enterprise such as name,logo etc',
        'id': 36,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Update Enterprise',
        'permissions': {
          'endpoint': '/api/v1/enterprise/',
          'exclude': [],
          'fields': [],
          'get_params': [
            {
              'key': 'id',
              'type': 'enterprise'
            }
          ],
          'method': 'PUT',
          'role': [
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/36/',
        'updated_at': '2018-08-31T08:49:03.723000'
      },
      {
        'category': 'User Management',
        'created_at': '2018-08-31T08:49:03.727000',
        'description': 'Remove a user from an enterprise',
        'id': 37,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Delete User',
        'permissions': {
          'endpoint': '/api/v1/user/',
          'fields': [],
          'get_params': [
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'method': 'DELETE',
          'role': [
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/37/',
        'updated_at': '2018-08-31T08:49:03.727000'
      },
      {
        'category': 'Reports',
        'created_at': '2018-08-31T08:49:03.730000',
        'description': 'View the report types for a bot',
        'id': 38,
        'is_configurable_action': false,
        'is_default_action': true,
        'name': 'Get Report Types',
        'permissions': {
          'endpoint': '/api/v1/reporttypes/',
          'fields': [],
          'get_params': [],
          'method': 'GET',
          'role': [
            'admin',
            'super_admin',
            'user'
          ]
        },
        'resource_uri': '/api/v1/actions/38/',
        'updated_at': '2018-08-31T08:49:03.730000'
      },
      {
        'category': 'Preview Bot',
        'created_at': true,
        'description': 'Preview Bot',
        'id': 39,
        'is_configurable_action': false,
        'is_default_action': true,
        'name': 'Send API',
        'permissions': {
          'endpoint': '/api/v1/webhook/web/',
          'fields': [],
          'get_params': [],
          'method': 'POST',
          'role': [
            'bot'
          ]
        },
        'resource_uri': '/api/v1/actions/39/',
        'updated_at': '2018-09-07T05:16:40.246000'
      },
      {
        'category': 'Bot Management',
        'created_at': '2018-08-31T08:49:03.735000',
        'description': 'View messages for a session',
        'id': 40,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Get Messages',
        'permissions': {
          'endpoint': '/api/v1/message/',
          'fields': [],
          'get_params': [
            {
              'key': 'bot_id',
              'type': 'bot'
            },
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/40/',
        'updated_at': '2018-08-31T08:49:03.735000'
      },
      {
        'category': 'Permissions',
        'created_at': '2018-08-31T08:49:03.738000',
        'description': 'Get all the actions associated with the user profile',
        'id': 41,
        'is_configurable_action': false,
        'is_default_action': true,
        'name': 'Get Actions',
        'permissions': {
          'endpoint': '/api/v1/actions/',
          'fields': [],
          'get_params': [],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/41/',
        'updated_at': '2018-08-31T08:49:03.738000'
      },
      {
        'category': 'Close Sessions',
        'created_at': '2018-08-31T08:49:03.740000',
        'description': 'Close a room',
        'id': 42,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Close Room',
        'permissions': {
          'endpoint': '/api/v1/room/closeroom/',
          'fields': [],
          'get_params': [],
          'method': 'POST',
          'role': [
            'anonymous'
          ]
        },
        'resource_uri': '/api/v1/actions/42/',
        'updated_at': '2018-08-31T08:49:03.740000'
      },
      {
        'category': 'IMIChat',
        'created_at': '2018-08-31T08:49:03.743000',
        'description': 'Access to close the existing IMIchatsession from bot\'s end',
        'id': 43,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'agent_close',
        'permissions': {
          'endpoint': '/api/v1/ccsp/imichat/agentclose/',
          'fields': [],
          'get_params': [],
          'method': 'POST',
          'role': [
            'anonymous'
          ]
        },
        'resource_uri': '/api/v1/actions/43/',
        'updated_at': '2018-08-31T08:49:03.743000'
      },
      {
        'category': 'GDPR',
        'created_at': '2018-08-31T08:49:03.746000',
        'description': 'anonymize the conversations after the data retention period(GDPR)',
        'id': 44,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Anonymize Conversation',
        'permissions': {
          'endpoint': '/api/v1/anonymize/conversation/',
          'fields': [],
          'get_params': [],
          'method': 'POST',
          'role': [
            'anonymous'
          ]
        },
        'resource_uri': '/api/v1/actions/44/',
        'updated_at': '2018-08-31T08:49:03.746000'
      },
      {
        'category': 'Debug',
        'created_at': '2018-08-31T08:49:03.749000',
        'description': 'for debuging the df rules from starters code',
        'id': 45,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Post dfRules Debug',
        'permissions': {
          'endpoint': '/api/v1/webhook/web/dfRulesDebug/',
          'fields': [],
          'method': 'POST',
          'role': [
            'bot'
          ]
        },
        'resource_uri': '/api/v1/actions/45/',
        'updated_at': '2018-08-31T08:49:03.749000'
      },
      {
        'category': 'Debug',
        'created_at': '2018-08-31T08:49:03.751000',
        'description': 'for debuging the df rules from starters code',
        'id': 46,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Post genRules Debug',
        'permissions': {
          'endpoint': '/api/v1/webhook/web/genRulesDebug/',
          'fields': [],
          'method': 'POST',
          'role': [
            'bot'
          ]
        },
        'resource_uri': '/api/v1/actions/46/',
        'updated_at': '2018-08-31T08:49:03.751000'
      },
      {
        'category': 'Debug',
        'created_at': '2018-08-31T08:49:03.754000',
        'description': 'for debuging the df rules from starters code',
        'id': 47,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Post genTemplate Debug',
        'permissions': {
          'endpoint': '/api/v1/webhook/web/genTemplateDebug/',
          'fields': [],
          'method': 'POST',
          'role': [
            'bot'
          ]
        },
        'resource_uri': '/api/v1/actions/47/',
        'updated_at': '2018-08-31T08:49:03.754000'
      },
      {
        'category': 'Debug',
        'created_at': '2018-08-31T08:49:03.756000',
        'description': 'for debuging the df rules from starters code',
        'id': 48,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Post Workflow Debug',
        'permissions': {
          'endpoint': '/api/v1/webhook/web/callbackDebug/',
          'fields': [],
          'method': 'POST',
          'role': [
            'bot'
          ]
        },
        'resource_uri': '/api/v1/actions/48/',
        'updated_at': '2018-08-31T08:49:03.756000'
      },
      {
        'category': 'Webhooks',
        'created_at': '2018-08-31T08:49:03.759000',
        'description': 'called by imiconnect when the callback is triggered',
        'id': 49,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Workflow Webhook',
        'permissions': {
          'endpoint': '/api/v1/webhook/workflow/',
          'fields': [],
          'method': 'POST',
          'role': [
            'bot'
          ]
        },
        'resource_uri': '/api/v1/actions/49/',
        'updated_at': '2018-08-31T08:49:03.759000'
      },
      {
        'category': 'Webhooks',
        'created_at': '2018-08-31T08:49:03.762000',
        'description': 'Preview bot for facebook channel',
        'id': 50,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Facebook Webhook',
        'permissions': {
          'endpoint': '/api/v1/webhook/facebook/',
          'fields': [],
          'method': 'POST',
          'role': [
            'bot'
          ]
        },
        'resource_uri': '/api/v1/actions/50/',
        'updated_at': '2018-08-31T08:49:03.762000'
      },
      {
        'category': 'Backward Compatibility',
        'created_at': '2018-08-31T08:49:03.764000',
        'description': 'This is specific to ikea',
        'id': 51,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Backward Compatible Message API',
        'permissions': {
          'endpoint': '/analytics/rooms/',
          'fields': [],
          'get_params': [],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/51/',
        'updated_at': '2018-08-31T08:49:03.764000'
      },
      {
        'category': 'Pipeline',
        'created_at': '2018-08-31T09:29:51.526000',
        'description': 'Permission to access pipeline bot response',
        'id': 52,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Intelligence API Webhook',
        'permissions': {
          'endpoint': '/api/v1/webhook/intelligent/',
          'fields': [],
          'method': 'POST',
          'role': [
            'bot'
          ]
        },
        'resource_uri': '/api/v1/actions/52/',
        'updated_at': '2018-08-31T09:29:51.526000'
      },
      {
        'category': 'GDPR',
        'created_at': '2018-08-31T10:01:38.717000',
        'description': 'This is used to anonymize all the rooms related to  a consumer',
        'id': 53,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Delete Consumer',
        'permissions': {
          'endpoint': '/api/v1/anonymize/consumer/',
          'fields': [],
          'get_params': [],
          'method': 'POST',
          'role': [
            'anonymous'
          ]
        },
        'resource_uri': '/api/v1/actions/53/',
        'updated_at': '2018-08-31T10:01:38.718000'
      },
      {
        'category': 'Sessions',
        'created_at': '2018-09-04T08:11:44.655000',
        'description': 'Decrypt encrypted sessions and consumers',
        'id': 54,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Create Decrypt Audit',
        'permissions': {
          'endpoint': '/api/v1/decrypt_audit/',
          'fields': [],
          'method': 'POST',
          'post_fields': [
            {
              'key': 'user_id',
              'type': 'user'
            },
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/54/',
        'updated_at': '2018-09-04T08:11:44.656000'
      },
      {
        'category': 'GDPR',
        'created_at': '2018-09-05T08:40:12.871000',
        'description': 'anonymize the conversations after the data retention period(GDPR)',
        'id': 55,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Anonymize Conversation',
        'permissions': {
          'endpoint': 'api/v1/anonymize/conversation/',
          'fields': [],
          'get_params': [],
          'method': 'GET',
          'role': [
            'anonymous'
          ]
        },
        'resource_uri': '/api/v1/actions/55/',
        'updated_at': '2018-09-05T08:40:12.871000'
      },
      {
        'category': 'GDPR',
        'created_at': '2018-09-05T08:40:42.759000',
        'description': 'Delete consumer and rooms',
        'id': 56,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'erase consumer',
        'permissions': {
          'endpoint': '/consumer/erase/',
          'fields': [],
          'get_params': [],
          'method': 'GET',
          'role': [
            'anonymous'
          ]
        },
        'resource_uri': '/api/v1/actions/56/',
        'updated_at': '2018-09-05T08:40:42.760000'
      },
      {
        'category': 'Reports',
        'created_at': '2018-09-06T07:57:37.062000',
        'description': 'Execute reports(done by scheduler)',
        'id': 57,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Exec Reports',
        'permissions': {
          'endpoint': '/api/v1/reports/exec/',
          'method': 'POST',
          'role': [
            'anonymous'
          ]
        },
        'resource_uri': '/api/v1/actions/57/',
        'updated_at': '2018-09-06T07:57:37.062000'
      },
      {
        'category': 'Reports',
        'created_at': '2018-09-06T11:51:56.535000',
        'description': 'Download reports in particular format',
        'id': 58,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Download Reports',
        'permissions': {
          'endpoint': '/api/v1/reporthistory/downloadreports/',
          'get_params': [
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/58/',
        'updated_at': '2018-09-06T11:51:56.535000'
      },
      {
        'category': 'Bot Preview',
        'created_at': '2018-09-07T05:09:45.336000',
        'description': 'Preview bot for skype channel',
        'id': 59,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Skype API',
        'permissions': {
          'endpoint': '/api/v1/webhook/skype/',
          'fields': [],
          'get_params': [],
          'method': 'POST',
          'role': [
            'bot'
          ]
        },
        'resource_uri': '/api/v1/actions/59/',
        'updated_at': '2018-09-07T05:09:45.336000'
      },
      {
        'category': 'User Management',
        'created_at': '2018-09-18T10:57:50.277000',
        'description': 'Change user password',
        'id': 60,
        'is_configurable_action': false,
        'is_default_action': true,
        'name': 'Update Password',
        'permissions': {
          'endpoint': '/api/v1/user/updatepassword/',
          'fields': [],
          'get_params': [
            {
              'key': 'id',
              'type': 'user'
            },
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'method': 'POST',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/60/',
        'updated_at': '2018-09-18T10:57:50.277000'
      },
      {
        'category': 'Bot Knowledge Base',
        'created_at': '2018-09-26T11:15:38.421000',
        'description': 'View bot knowledge base concepts',
        'id': 61,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Get Bot Knowledge base',
        'permissions': {
          'endpoint': '/api/v1/customner/',
          'fields': [],
          'get_params': [
            {
              'key': 'bot_id',
              'type': 'bot'
            },
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/61/',
        'updated_at': '2018-09-26T11:15:38.421000'
      },
      {
        'category': 'Bot Knowledge Base',
        'created_at': '2018-09-26T11:16:43.357000',
        'description': 'Create a new bot knowledge base concept',
        'id': 62,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Create Bot Knowledge base',
        'permissions': {
          'endpoint': '/api/v1/customner/',
          'fields': [],
          'method': 'POST',
          'post_fields': [
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            },
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/62/',
        'updated_at': '2018-09-26T11:16:43.357000'
      },
      {
        'category': 'Bot Knowledge Base',
        'created_at': '2018-09-26T11:17:11.231000',
        'description': 'Edit a bot knowledge base concept',
        'id': 63,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Update Bot Knowledge base',
        'permissions': {
          'endpoint': '/api/v1/customner/',
          'fields': [],
          'get_params': [
            {
              'key': 'bot_id',
              'type': 'bot'
            },
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'method': 'PUT',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/63/',
        'updated_at': '2018-09-26T11:17:11.231000'
      },
      {
        'category': 'Bot Knowledge Base',
        'created_at': '2018-09-26T11:17:52.463000',
        'description': 'Delete a bot knowledge base concept',
        'id': 64,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Delete Bot Knowledge base',
        'permissions': {
          'endpoint': '/api/v1/customner/',
          'fields': [],
          'get_params': [
            {
              'key': 'bot_id',
              'type': 'bot'
            },
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'method': 'DELETE',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/64/',
        'updated_at': '2018-09-26T11:17:52.463000'
      },
      {
        'category': 'Webhooks',
        'created_at': '2018-09-27T09:08:46.910000',
        'description': 'Preview bot for google home channel',
        'id': 65,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Google Home Webhook',
        'permissions': {
          'endpoint': '/api/v1/webhook/googlehome/',
          'fields': [],
          'method': 'POST',
          'role': [
            'bot'
          ]
        },
        'resource_uri': '/api/v1/actions/65/',
        'updated_at': '2018-09-27T09:08:46.910000'
      },
      {
        'category': 'Enterprise Details',
        'created_at': '2018-08-31T08:49:03.625000',
        'description': 'Get all the enterprises mapped to a user',
        'id': 66,
        'is_configurable_action': false,
        'is_default_action': true,
        'name': 'Get Enterprises',
        'permissions': {
          'endpoint': '/api/v1/user/enterprises/',
          'fields': [],
          'get_params': [],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/66/',
        'updated_at': '2018-08-31T08:49:03.625000'
      },
      {
        'category': 'Login',
        'created_at': '2018-08-31T08:49:03.625000',
        'description': 'Selection of an enterprise after login',
        'id': 67,
        'is_configurable_action': false,
        'is_default_action': true,
        'name': 'Enterprises Login',
        'permissions': {
          'endpoint': '/api/v1/user/enterprise_login/',
          'fields': [],
          'get_params': [],
          'method': 'POST',
          'role': [
            'unauthorized',
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/67/',
        'updated_at': '2018-08-31T08:49:03.625000'
      },
      {
        'category': 'Bot Architecture',
        'created_at': '2018-08-31T08:49:03.655000',
        'description': 'Description forpipeline a  module',
        'id': 68,
        'is_configurable_action': false,
        'is_default_action': true,
        'name': 'GET ModuleDetail',
        'permissions': {
          'endpoint': '/api/v1/moduledetails/',
          'fields': [],
          'get_params': [],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/68/',
        'updated_at': '2018-08-31T08:49:03.655000'
      },
      {
        'category': 'GDPR',
        'created_at': '2018-10-17T09:38:05.541000',
        'description': 'GET consent permissions',
        'id': 69,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'GET consent permissions',
        'permissions': {
          'endpoint': '/getConsent/',
          'fields': [],
          'get_params': [],
          'method': 'GET',
          'role': [
            'anonymous'
          ]
        },
        'resource_uri': '/api/v1/actions/69/',
        'updated_at': '2018-10-17T09:38:05.541000'
      },
      {
        'category': 'GDPR',
        'created_at': '2018-10-17T09:38:05.541000',
        'description': 'update consent permissions',
        'id': 70,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'update consent permissions',
        'permissions': {
          'endpoint': '/updateConsent',
          'fields': [],
          'get_params': [],
          'method': 'POST',
          'role': [
            'anonymous'
          ]
        },
        'resource_uri': '/api/v1/actions/70/',
        'updated_at': '2018-10-17T09:38:05.541000'
      },
      {
        'category': 'Preview Bot',
        'created_at': '2018-12-04T08:49:03.679000',
        'description': 'Add feedback to bot response',
        'id': 71,
        'is_configurable_action': false,
        'is_default_action': true,
        'name': 'Add Feedback',
        'permissions': {
          'endpoint': '/api/v1/message/feedback/',
          'exclude': [],
          'fields': [],
          'get_params': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'method': 'PUT',
          'role': [
            'bot'
          ]
        },
        'resource_uri': '/api/v1/actions/71/',
        'updated_at': '2018-12-04T08:49:03.679000'
      },
      {
        'category': 'Bot Management',
        'created_at': '2018-12-17T08:49:03.740000',
        'description': 'Analytics backup',
        'id': 72,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Create Backup',
        'permissions': {
          'endpoint': '/api/v1/aggregation/createbackup/',
          'fields': [],
          'get_params': [],
          'method': 'POST',
          'role': [
            'anonymous'
          ]
        },
        'resource_uri': '/api/v1/actions/72/',
        'updated_at': '2018-12-17T08:49:03.740000'
      },
      {
        'category': 'User Management',
        'created_at': '2018-12-21T08:49:03.727000',
        'description': 'Remove user from a enterprise',
        'id': 73,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Remove User from Enterprise',
        'permissions': {
          'endpoint': '/api/v1/user/removeenterpriseuser/',
          'fields': [],
          'get_params': [
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'method': 'POST',
          'role': [
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/73/',
        'updated_at': '2018-12-21T08:49:03.727000'
      },
      {
        'category': 'Enterprise Details',
        'created_at': '2018-12-27T08:49:03.721000',
        'description': 'View summary of deleted logs for an enterprise ',
        'id': 74,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Get enterprise log deletion summary',
        'permissions': {
          'endpoint': '/api/v1/deletelogs/enterpriselogdeletionsummary/',
          'fields': [],
          'get_params': [
            {
              'key': 'enterprise_id',
              'type': 'enterprise'
            }
          ],
          'method': 'GET',
          'role': [
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/74/',
        'updated_at': '2018-12-27T08:49:03.721000'
      },
      {
        'category': 'Enterprise Details',
        'created_at': '2018-08-31T08:49:03.723000',
        'description': 'Create service key for an enterprise',
        'id': 75,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Generate Service Key',
        'permissions': {
          'endpoint': '/api/v1/enterprise/generate_service_key/',
          'fields': [],
          'get_params': [
            {
              'key': 'id',
              'type': 'enterprise'
            }
          ],
          'method': 'POST',
          'role': [
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/75/',
        'updated_at': '2018-08-31T08:49:03.723000'
      },
      {
        'category': 'Enterprise Details',
        'created_at': '2018-08-31T08:49:03.723000',
        'description': 'update description of service key for an enterprise',
        'id': 76,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Update Service Key Description',
        'permissions': {
          'endpoint': '/api/v1/enterprise/update_service_key_description/',
          'fields': [],
          'get_params': [
            {
              'key': 'id',
              'type': 'enterprise'
            }
          ],
          'method': 'POST',
          'role': [
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/76/',
        'updated_at': '2018-08-31T08:49:03.723000'
      },
      {
        'category': 'Enterprise Details',
        'created_at': '2018-08-31T08:49:03.723000',
        'description': 'Disable a service key for an enterprise',
        'id': 77,
        'is_configurable_action': false,
        'is_default_action': false,
        'name': 'Disable Service Key',
        'permissions': {
          'endpoint': '/api/v1/enterprise/disable_service_key/',
          'fields': [],
          'get_params': [
            {
              'key': 'id',
              'type': 'enterprise'
            }
          ],
          'method': 'POST',
          'role': [
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/77/',
        'updated_at': '2018-08-31T08:49:03.723000'
      },
      {
        'category': 'Bot Testing',
        'created_at': '2019-02-18T07:33:03.644000',
        'description': 'Run testcases for a particular bot in the Testing section',
        'id': 78,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Bot One-click Testing',
        'permissions': {
          'endpoint': '/api/v1/bottestcases/oneclicktesting/',
          'fields': [],
          'get_params': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/78/',
        'updated_at': '2019-02-18T07:33:03.644000'
      },
      {
        'category': 'Bot Testing',
        'created_at': '2019-02-18T07:33:03.644000',
        'description': 'Cancel already running testcases for a particular bot in the Testing section',
        'id': 79,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Cancel Bot Testing',
        'permissions': {
          'endpoint': '/api/v1/bottestcases/canceltesting/',
          'fields': [],
          'get_params': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/79/',
        'updated_at': '2019-02-18T07:33:03.644000'
      },
      {
        'category': 'Sections',
        'created_at': '2019-02-26T23:12:13.473000',
        'description': 'Get all the default sections associated in a search based bot',
        'id': 80,
        'is_configurable_action': false,
        'is_default_action': true,
        'name': 'Get Default Sections',
        'permissions': {
          'endpoint': '/api/v1/actions/',
          'fields': [],
          'get_params': [],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/80/',
        'updated_at': '2019-02-26T23:12:13.473000'
      },
      {
        'category': 'Bots',
        'created_at': '2019-03-05T08:49:03.630000',
        'description': 'Modify allow agent handover of bot',
        'id': 81,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Modify agent handover',
        'permissions': {
          'endpoint': '/api/v1/bot/updateagenthandover/',
          'fields': [],
          'method': 'POST',
          'post_fields': [
            {
              'key': 'id',
              'type': 'bot'
            }
          ],
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/81/',
        'updated_at': '2019-03-05T08:49:03.630000'
      },
      {
        'category': 'Corpus',
        'created_at': '2019-03-05T08:49:03.630000',
        'description': 'Create faq bot corpus',
        'id': 82,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Create Corpus',
        'permissions': {
          'endpoint': '/api/v1/corpus/',
          'fields': [],
          'method': 'POST',
          'post_fields': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/82/',
        'updated_at': '2019-03-05T08:49:03.630000'
      },
      {
        'category': 'Corpus',
        'created_at': '2019-03-05T08:49:03.630000',
        'description': 'Update faq bot corpus',
        'id': 83,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Update Corpus',
        'permissions': {
          'endpoint': '/api/v1/corpus/',
          'fields': [],
          'get_params': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'method': 'PUT',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/83/',
        'updated_at': '2019-03-05T08:49:03.630000'
      },
      {
        'category': 'Corpus',
        'created_at': '2019-03-05T08:49:03.630000',
        'description': 'Get faq bot corpus',
        'id': 84,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Get Corpus',
        'permissions': {
          'endpoint': '/api/v1/corpus/',
          'fields': [],
          'get_params': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/84/',
        'updated_at': '2019-03-05T08:49:03.630000'
      },
      {
        'category': 'Corpus',
        'created_at': '2019-03-05T08:49:03.630000',
        'description': 'Get faq bot corpus',
        'id': 85,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'delete Corpus',
        'permissions': {
          'endpoint': '/api/v1/corpus/',
          'fields': [],
          'get_params': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'method': 'GET',
          'role': [
            'anonymus'
          ]
        },
        'resource_uri': '/api/v1/actions/85/',
        'updated_at': '2019-03-05T08:49:03.630000'
      },
      {
        'category': 'Category',
        'created_at': '2019-03-05T08:49:03.630000',
        'description': 'Create category in corpus',
        'id': 86,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Create Category',
        'permissions': {
          'endpoint': '/api/v1/corpus/createcategory/',
          'fields': [],
          'method': 'POST',
          'post_fields': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/86/',
        'updated_at': '2019-03-05T08:49:03.630000'
      },
      {
        'category': 'Category',
        'created_at': '2019-03-05T08:49:03.630000',
        'description': 'Update category in corpus',
        'id': 87,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Update Category',
        'permissions': {
          'endpoint': '/api/v1/corpus/updatecategory/',
          'fields': [],
          'method': 'POST',
          'post_fields': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/87/',
        'updated_at': '2019-03-05T08:49:03.630000'
      },
      {
        'category': 'Category',
        'created_at': '2019-03-05T08:49:03.630000',
        'description': 'Remove category from corpus',
        'id': 88,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Remove Category',
        'permissions': {
          'endpoint': '/api/v1/corpus/removecategory/',
          'fields': [],
          'method': 'POST',
          'post_fields': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/88/',
        'updated_at': '2019-03-05T08:49:03.630000'
      },
      {
        'category': 'Category',
        'created_at': '2019-03-05T08:49:03.630000',
        'description': 'Change Category of a Section',
        'id': 89,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Section Category Change',
        'permissions': {
          'endpoint': '/api/v1/corpus/changesectioncategory/',
          'fields': [],
          'method': 'POST',
          'post_fields': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/89/',
        'updated_at': '2019-03-05T08:49:03.630000'
      },
      {
        'category': 'Corpus',
        'created_at': '2019-03-05T08:49:03.630000',
        'description': 'Make a corpus live',
        'id': 90,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Make Corpus Live',
        'permissions': {
          'endpoint': '/api/v1/corpus/makecorpuslive/',
          'fields': [],
          'method': 'POST',
          'post_fields': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/90/',
        'updated_at': '2019-03-05T08:49:03.630000'
      },
      {
        'category': 'Section',
        'created_at': '2019-03-05T08:49:03.630000',
        'description': 'Create Section',
        'id': 91,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Create Section',
        'permissions': {
          'endpoint': '/api/v1/corpus/createsection/',
          'fields': [],
          'method': 'POST',
          'post_fields': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/91/',
        'updated_at': '2019-03-05T08:49:03.630000'
      },
      {
        'category': 'Section',
        'created_at': '2019-03-05T08:49:03.630000',
        'description': 'Update a section in corpus',
        'id': 92,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Update Section',
        'permissions': {
          'endpoint': '/api/v1/corpus/updatesection/',
          'fields': [],
          'method': 'POST',
          'post_fields': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/92/',
        'updated_at': '2019-03-05T08:49:03.630000'
      },
      {
        'category': 'Section',
        'created_at': '2019-03-05T08:49:03.630000',
        'description': 'Remove a section from corpus',
        'id': 93,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Remove Section',
        'permissions': {
          'endpoint': '/api/v1/corpus/removesection/',
          'fields': [],
          'method': 'POST',
          'post_fields': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/93/',
        'updated_at': '2019-03-05T08:49:03.630000'
      },
      {
        'category': 'Corpus',
        'created_at': '2019-03-05T08:49:03.630000',
        'description': 'Get default/training in progress corpus',
        'id': 94,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Get Default Corpus',
        'permissions': {
          'endpoint': '/api/v1/corpus/getdefaultcorpus/',
          'fields': [],
          'get_params': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'method': 'GET',
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/94/',
        'updated_at': '2019-03-05T08:49:03.630000'
      },
      {
        'category': 'Corpus',
        'created_at': '2019-03-05T08:49:03.630000',
        'description': 'Api to train corpus',
        'id': 95,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Train Corpus',
        'permissions': {
          'endpoint': '/api/v1/corpus/train/',
          'fields': [],
          'method': 'POST',
          'post_fields': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/95/',
        'updated_at': '2019-03-05T08:49:03.630000'
      },
      {
        'category': 'Category',
        'created_at': '2019-04-29T08:49:03.630000',
        'description': 'Change category of a section by creating a new category',
        'id': 96,
        'is_configurable_action': true,
        'is_default_action': false,
        'name': 'Section Category Change with Category Creation',
        'permissions': {
          'endpoint': '/api/v1/corpus/createcategoryandmaptosection/',
          'fields': [],
          'method': 'POST',
          'post_fields': [
            {
              'key': 'bot_id',
              'type': 'bot'
            }
          ],
          'role': [
            'user',
            'admin',
            'super_admin'
          ]
        },
        'resource_uri': '/api/v1/actions/96/',
        'updated_at': '2019-04-29T08:49:03.630000'
      }
    ],
    'masterIntegrationList': [
      {
        'created_at': 1535705344000,
        'icon': 'https://s3-eu-west-1.amazonaws.com/imibot-production/integrations/v2/connect.svg',
        'id': 1,
        'inputs': [
          {
            'display_text': 'App Id',
            'param_name': 'appId'
          },
          {
            'display_text': 'App Secret',
            'param_name': 'appSecret'
          },
          {
            'display_text': 'Stream Name',
            'param_name': 'streamName'
          },
          {
            'display_text': 'Service Key',
            'param_name': 'serviceKey'
          },
          {
            'display_text': 'Send request via Connect',
            'param_name': 'send_via_connect'
          }
        ],
        'integration_type': 'fulfillment_provider_details',
        'key': 'imiconnect',
        'resource_uri': '/api/v1/integrations/1/',
        'type': 'Fulfillment Platforms',
        'unique_name': 'IMIconnect',
        'updated_at': 1535705344000
      },
      {
        'created_at': 1535705344000,
        'icon': 'https://s3-eu-west-1.amazonaws.com/imibot-production/integrations/v2/facebook.svg',
        'id': 2,
        'inputs': [
          {
            'display_text': 'PageId',
            'param_name': 'id'
          },
          {
            'display_text': 'Facebook Token',
            'param_name': 'facebook-token'
          }
        ],
        'integration_type': 'channels',
        'key': 'facebook',
        'resource_uri': '/api/v1/integrations/2/',
        'type': 'Text Channels',
        'unique_name': 'Facebook',
        'updated_at': 1535705344000
      },
      {
        'created_at': 1535705344000,
        'icon': 'https://s3-eu-west-1.amazonaws.com/imibot-production/integrations/v2/skype.svg',
        'id': 3,
        'inputs': [
          {
            'display_text': 'Client Id',
            'param_name': 'client_id'
          },
          {
            'display_text': 'Client Secret Key',
            'param_name': 'client_secret'
          },
          {
            'display_text': 'Skype Page Name',
            'param_name': 'skype-page-name'
          }
        ],
        'integration_type': 'channels',
        'key': 'skype',
        'resource_uri': '/api/v1/integrations/3/',
        'type': 'Text Channels',
        'unique_name': 'Skype',
        'updated_at': 1535705344000
      },
      {
        'created_at': 1535705344000,
        'icon': 'https://s3-eu-west-1.amazonaws.com/imibot-production/integrations/v2/line.svg',
        'id': 4,
        'inputs': [
          {
            'display_text': 'Channel access token',
            'param_name': 'channel_access_token'
          },
          {
            'display_text': 'Channel Secret',
            'param_name': 'channel_secret'
          },
          {
            'display_text': 'Channel Id',
            'param_name': 'channel_id'
          }
        ],
        'integration_type': 'channels',
        'key': 'line',
        'resource_uri': '/api/v1/integrations/4/',
        'type': 'Text Channels',
        'unique_name': 'Line',
        'updated_at': 1535705344000
      },
      {
        'created_at': 1535705344000,
        'icon': 'https://s3-eu-west-1.amazonaws.com/imibot-production/integrations/v2/viber.svg',
        'id': 5,
        'inputs': [
          {
            'display_text': 'bot-name',
            'param_name': 'bot_name'
          },
          {
            'display_text': 'Bot-auth-token',
            'param_name': 'bot_auth_token'
          },
          {
            'display_text': 'Bot Avatar',
            'param_name': 'bot_avatar'
          }
        ],
        'integration_type': 'channels',
        'key': 'viber',
        'resource_uri': '/api/v1/integrations/5/',
        'type': 'Text Channels',
        'unique_name': 'Viber',
        'updated_at': 1535705344000
      },
      {
        'created_at': 1535705344000,
        'icon': 'https://s3-eu-west-1.amazonaws.com/imibot-production/integrations/v2/chat.svg',
        'id': 6,
        'inputs': [
          {
            'display_text': 'Service Key',
            'param_name': 'service-key'
          },
          {
            'display_text': 'Access Token',
            'param_name': 'access-token'
          },
          {
            'display_text': 'Domain',
            'param_name': 'domain'
          }
        ],
        'integration_type': 'ccsp_details',
        'key': 'imichat',
        'resource_uri': '/api/v1/integrations/6/',
        'type': 'Chat Agent Platforms',
        'unique_name': 'IMIchat',
        'updated_at': 1535705344000
      },
      {
        'created_at': 1535705344000,
        'icon': 'https://s3-eu-west-1.amazonaws.com/imibot-production/integrations/v2/debug.svg',
        'id': 7,
        'inputs': [
          {
            'display_text': 'Debug Url',
            'param_name': 'debugurl'
          }
        ],
        'integration_type': 'ccsp_details',
        'key': 'debug',
        'resource_uri': '/api/v1/integrations/7/',
        'type': 'monitoring',
        'unique_name': 'Local Debug',
        'updated_at': 1535705344000
      },
      {
        'created_at': 1535705344000,
        'icon': 'https://s3-eu-west-1.amazonaws.com/imibot-production/integrations/v2/alexa.svg',
        'id': 8,
        'inputs': [
          {
            'display_text': 'Skill Id',
            'param_name': 'skillId'
          },
          {
            'display_text': 'async',
            'param_name': 'asyncFlag'
          }
        ],
        'integration_type': 'channels',
        'key': 'alexa',
        'resource_uri': '/api/v1/integrations/8/',
        'type': 'Voice Channels',
        'unique_name': 'Alexa',
        'updated_at': 1535705344000
      },
      {
        'created_at': 1535705344000,
        'icon': 'https://s3-eu-west-1.amazonaws.com/imibot-production/integrations/v2/WebSpeech.svg',
        'id': 9,
        'inputs': [
          {
            'display_text': 'Speech Model',
            'param_name': 'speech_model'
          },
          {
            'display_text': 'Enable TTS',
            'param_name': 'speech_tts'
          },
          {
            'display_text': 'Speech Integration URL',
            'param_name': 'speech_url'
          }
        ],
        'integration_type': 'channels',
        'key': 'web',
        'resource_uri': '/api/v1/integrations/9/',
        'type': 'Voice Channels',
        'unique_name': 'Web Speech',
        'updated_at': 1535705344000
      },
      {
        'created_at': 1536651185000,
        'icon': 'https://s3-eu-west-1.amazonaws.com/imibot-production/integrations/v2/GoogleHome.svg',
        'id': 10,
        'inputs': [
          {
            'display_text': 'Project',
            'param_name': 'project'
          },
          {
            'display_text': 'async',
            'param_name': 'asyncFlag'
          }
        ],
        'integration_type': 'channels',
        'key': 'googlehome',
        'resource_uri': '/api/v1/integrations/10/',
        'type': 'Voice Channels',
        'unique_name': 'Google Home',
        'updated_at': 1536651185000
      },
      {
        'created_at': 1536651185000,
        'icon': 'https://s3-eu-west-1.amazonaws.com/imibot-production/integrations/v2/Slack.svg',
        'id': 11,
        'inputs': [
          {
            'display_text': 'Slack Token',
            'param_name': 'slack-token'
          },
          {
            'display_text': 'App Verification Token',
            'param_name': 'verification-token'
          }
        ],
        'integration_type': 'channels',
        'key': 'slack',
        'resource_uri': '/api/v1/integrations/11/',
        'type': 'Text Channels',
        'unique_name': 'Slack',
        'updated_at': 1536651185000
      },
      {
        'created_at': 1554017585000,
        'icon': 'https://s3-eu-west-1.amazonaws.com/imibot-production/integrations/v2/WebSpeech.svg',
        'id': 12,
        'inputs': [],
        'integration_type': 'channels',
        'key': 'generic',
        'resource_uri': '/api/v1/integrations/12/',
        'type': 'Text Channels',
        'unique_name': 'Generic',
        'updated_at': 1554017585000
      }
    ],
    'pipelineModulesV2List': [
      {
        'description': 'Extracts named entities from input text. For example input: Microsoft is headquartered at Redmond the output is org: Microsoft. Here Microsoft is recognized as an organization. Similarly the library can recognize common things such as nationalities, location, buildings, people, events, money, quantity etc.',
        'display_values': 'Named Entity Recognition',
        'id': 1,
        'pipeline_modules': [
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
            'is_paid': 'free',
            'library': 'spacy',
            'module': 'ner',
            'pros': 'no external calls, faster',
            'unique_name': 'Spacy NER',
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
            'is_paid': 'paid',
            'library': 'dandelion',
            'module': 'ner',
            'pros': 'contextual, slightly higher accuracy, improves over time',
            'unique_name': 'Dandelion NER',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/1/',
        'unique_name': 'ner'
      },
      {
        'description': '',
        'display_values': 'Language Detection',
        'id': 2,
        'pipeline_modules': [
          {
            '_id': '5baa10ef39c5a6003deeaa31',
            'cons': 'None',
            'contextual': false,
            'created_at': 1537872111000,
            'default': false,
            'description': '',
            'display_values': {},
            'id': 36,
            'input_params': {},
            'is_paid': 'paid',
            'library': 'google',
            'module': 'language_detection',
            'pros': 'Fast and reliable',
            'unique_name': 'Google Language Detection',
            'updated_at': 1537872111000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/2/',
        'unique_name': 'language_detection'
      },
      {
        'description': '',
        'display_values': 'Machine Learning',
        'id': 3,
        'pipeline_modules': [
          {
            '_id': '5b8901000e0ff44f7e071e44',
            'cons': 'Data flows out of IMIbot.Adds to the bot\'s cost and latency',
            'contextual': true,
            'created_at': 1535705344000,
            'default': false,
            'description': '',
            'display_values': {
              'wit_access_token': {
                'display_value': 'Wit Access token',
                'type': 'text'
              }
            },
            'id': 17,
            'input_params': {
              'wit_access_token': ''
            },
            'is_paid': 'paid',
            'library': 'wit',
            'module': 'Machine Learning',
            'pros': 'Good accuracy in intent recognition.Less code to be written locally',
            'unique_name': 'Wit.ai',
            'updated_at': 1535705344000
          },
          {
            '_id': '5b8901000e0ff44f7e071e56',
            'cons': 'Data flows out of IMIbot.Adds to the bot\'s cost and latency',
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
              'api_ai_access_token': ''
            },
            'is_paid': 'paid',
            'library': 'apiai',
            'module': 'Machine Learning',
            'pros': 'Good accuracy in intent recognition.Less code to be written locally.Data flows out of IMIbot.Adds to the bot\'s cost and latency',
            'unique_name': 'Dialogflow',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/3/',
        'unique_name': 'Machine Learning'
      },
      {
        'description': 'This module helps extract units from text input',
        'display_values': 'Units Recognition',
        'id': 4,
        'pipeline_modules': [
          {
            '_id': '5b8901000e0ff44f7e071e55',
            'cons': 'slightly lower accuracy',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': '',
            'display_values': {},
            'id': 34,
            'input_params': {},
            'is_paid': 'free',
            'library': 'botman',
            'module': 'units',
            'pros': 'no external calls, cheap',
            'unique_name': 'IMIbot Units Recognition',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/4/',
        'unique_name': 'units'
      },
      {
        'description': 'This module takes an image url as an input and returns the text detected in the image as response. The image_type parameter which captures the type of the image being fed as input can take the following values:natural_imageTo be used if the input image contains objects in addition to text.document.To be used if OCR needs to be performed on structured documents.',
        'display_values': 'OCR',
        'id': 5,
        'pipeline_modules': [
          {
            '_id': '5b8901000e0ff44f7e071e3e',
            'cons': 'slightly expensive, sometimes presents with spacing issues in the detected text',
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
            'is_paid': 'paid',
            'library': 'google',
            'module': 'ocr',
            'pros': 'text recognition accuarcy is pretty good even for images with bad lighting conditions, supports multiple languages, supports automatic language detection from image',
            'unique_name': 'Google OCR',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/5/',
        'unique_name': 'ocr'
      },
      {
        'description': 'Converts a paragraph into an array of sentences.',
        'display_values': 'Sentence Tokenization',
        'id': 6,
        'pipeline_modules': [
          {
            '_id': '5b8901000e0ff44f7e071e46',
            'cons': 'lower performance',
            'contextual': false,
            'created_at': 1535705344000,
            'default': true,
            'description': 'A suite of libraries and programs for symbolic and statistical NLP for English written in the Python',
            'display_values': {},
            'id': 19,
            'input_params': {},
            'is_paid': 'free',
            'library': 'nltk',
            'module': 'sentence_tokenization',
            'pros': 'free, greater flexibility,no external calls, supports multiple languages',
            'unique_name': 'NLTK Sentence Tokenization',
            'updated_at': 1535705344000
          },
          {
            '_id': '5b8901000e0ff44f7e071e47',
            'cons': 'comparatively lesser flexibility, opinionated, only supports English',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': '',
            'display_values': {},
            'id': 20,
            'input_params': {},
            'is_paid': 'free',
            'library': 'spacy',
            'module': 'sentence_tokenization',
            'pros': 'free, no external calls, faster',
            'unique_name': 'Spacy Sentence Tokenization',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/6/',
        'unique_name': 'sentence_tokenization'
      },
      {
        'description': 'Takes an audio url and the language code as inputs and converts the recorded speech in the audio to text.',
        'display_values': 'Speech to Text',
        'id': 7,
        'pipeline_modules': [
          {
            '_id': '5b8901000e0ff44f7e071e51',
            'cons': 'Expensive',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': '',
            'display_values': {},
            'id': 30,
            'input_params': {},
            'is_paid': 'paid',
            'library': 'google',
            'module': 'speechtotext',
            'pros': 'Supports all the popular languages, great accuracy',
            'unique_name': 'Google Speech to Text',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/7/',
        'unique_name': 'speechtotext'
      },
      {
        'description': 'This module picks and classifies entities from input text to predefined, custom entity classes.For example, if the bot developer has defined a custom entity called Metal and provided the values gold, sliver and platinum to it and a bot user enters the string Gold prices have declined. Then the bot pipeline module output for this text would recognize Gold as entity type Metal.',
        'display_values': 'Custom Named Entity Recognition',
        'id': 8,
        'pipeline_modules': [
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
            'is_paid': 'free',
            'library': 'botman',
            'module': 'custom_ners',
            'pros': ' no external calls, faster',
            'unique_name': 'IMIbot Custom NER',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/8/',
        'unique_name': 'custom_ners'
      },
      {
        'description': 'Detects if the input phrase falls under any of a large category set of small talk or commone sense intents like greetings, abuse, etc. The module also suggests an appropriate response.',
        'display_values': 'Common Sense',
        'id': 9,
        'pipeline_modules': [
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
            'is_paid': 'free',
            'library': 'botman',
            'module': 'commonsense',
            'pros': '',
            'unique_name': 'IMIbot Common Sense',
            'updated_at': 1535705344000
          },
          {
            '_id': '5b8901000e0ff44f7e071e3f',
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': '',
            'display_values': {
              'model_type': {
                'display_value': 'Model type',
                'type': 'text'
              }
            },
            'id': 12,
            'input_params': {
              'model_type': 'mitie_sklearn'
            },
            'is_paid': 'paid',
            'library': 'smalltalk',
            'module': 'commonsense',
            'pros': '',
            'unique_name': 'RASA CommonSense',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/9/',
        'unique_name': 'commonsense'
      },
      {
        'description': 'Parses a given sentence into an array of individual words (tokens).',
        'display_values': 'Word Tokenization',
        'id': 10,
        'pipeline_modules': [
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
            'is_paid': 'Free',
            'library': 'spacy',
            'module': 'word_tokenization',
            'pros': ' free, no external calls, faster',
            'unique_name': 'Spacy Word Tokenization',
            'updated_at': 1535705344000
          },
          {
            '_id': '5b8901000e0ff44f7e071e52',
            'cons': 'lower performance',
            'contextual': false,
            'created_at': 1535705344000,
            'default': true,
            'description': '',
            'display_values': {},
            'id': 31,
            'input_params': {},
            'is_paid': 'free',
            'library': 'nltk',
            'module': 'word_tokenization',
            'pros': 'free, greater flexibility,no external calls, supports multiple languages',
            'unique_name': 'NLTK Word Tokenization',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/10/',
        'unique_name': 'word_tokenization'
      },
      {
        'description': 'Checks for mispelt words in a given sentence and sends the sentence back with those words corrected to the most likely right words.',
        'display_values': 'Spell Check',
        'id': 11,
        'pipeline_modules': [
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
            'is_paid': 'paid',
            'library': 'azure',
            'module': 'spell_check',
            'pros': 'contextual, slightly higher accuracy, improves over time',
            'unique_name': 'Microsoft Spell Check',
            'updated_at': 1535705344000
          },
          {
            '_id': '5b8901000e0ff44f7e071e42',
            'cons': 'not contextual, slightly lower accuracy',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': '',
            'display_values': {},
            'id': 15,
            'input_params': {},
            'is_paid': 'free',
            'library': 'botman',
            'module': 'spell_check',
            'pros': 'cheaper, no external call, slightly faster',
            'unique_name': 'IMIbot Spell Check',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/11/',
        'unique_name': 'spell_check'
      },
      {
        'description': 'This API translates text from the source to the target language.',
        'display_values': 'Language Translation',
        'id': 12,
        'pipeline_modules': [
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
            'is_paid': 'paid',
            'library': 'google',
            'module': 'language_translate',
            'pros': 'low cost, medium accuracy',
            'unique_name': 'Google Translate',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/12/',
        'unique_name': 'language_translate'
      },
      {
        'description': 'Generates a grammatical dependency graph or parse tree of a given sentence using the standard spacy vocabulary nomenclature.',
        'display_values': 'Parse Tree Generation',
        'id': 13,
        'pipeline_modules': [
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
            'is_paid': 'free',
            'library': 'spacy',
            'module': 'parsetree',
            'pros': 'free, no external calls, faster',
            'unique_name': 'Spacy Parse Tree',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/13/',
        'unique_name': 'parsetree'
      },
      {
        'description': 'This module helps retrieve phrases from input text',
        'display_values': 'Profanity Filter',
        'id': 14,
        'pipeline_modules': [
          {
            '_id': '5b8901000e0ff44f7e071e43',
            'cons': ' not contextual, slightly lower accuracy',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': '',
            'display_values': {},
            'id': 16,
            'input_params': {},
            'is_paid': 'free',
            'library': 'botman',
            'module': 'profanity_filter',
            'pros': 'cheaper, no external call, slightly faster',
            'unique_name': 'IMIbot Profanity Filter',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/14/',
        'unique_name': 'profanity_filter'
      },
      {
        'description': 'Parses a given sentence for a mention of a number or a numeric quantity and extracts it in the response.',
        'display_values': 'Number Recognition',
        'id': 15,
        'pipeline_modules': [
          {
            '_id': '5b8901000e0ff44f7e071e3c',
            'cons': ' not contextual, slightly lower accuracy',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': 'Parses a given sentence for a mention of one or more of the following metrics and the corresponding unit of measurement used.Metrics currently supported:Distance,Volume,CurrencyEach metric can be looked for individually by using the name of that metric as the library in the request body. If you use botman as the library, the module scans for all the supported metrics.',
            'display_values': {},
            'id': 9,
            'input_params': {},
            'is_paid': 'free',
            'library': 'botman',
            'module': 'numbers',
            'pros': 'cheaper, no external call, slightly faster',
            'unique_name': 'IMIbot Numbers Recognition',
            'updated_at': 1535705344000
          },
          {
            '_id': '5cb99278a6d3ec2002ef5e0c',
            'cons': 'lower accuracy',
            'contextual': false,
            'created_at': 1555577344000,
            'default': false,
            'description': 'Number detection for 6 languages - english,hindi,gujarati,marathi,tamil and bengali',
            'display_values': {
              'max_num_digits': {
                'default': 10,
                'display_value': 'Max number of Digits',
                'type': 'Number'
              },
              'source_language': {
                'default': 'hi',
                'display_value': 'Source Language',
                'type': 'text'
              }
            },
            'id': 39,
            'input_params': {
              'max_num_digits': 10,
              'source_language': 'hi'
            },
            'is_paid': 'free',
            'library': 'haptik',
            'module': 'numbers',
            'pros': 'free and no external calls',
            'unique_name': 'Multilingual Number Detection',
            'updated_at': 1555577344000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/15/',
        'unique_name': 'numbers'
      },
      {
        'description': 'Analyzes a given sentence or phrase for the sentiment expressed in it as one of three possibilities: negative, neutral and positive.',
        'display_values': 'Sentiment Analysis',
        'id': 18,
        'pipeline_modules': [
          {
            '_id': '5b8901000e0ff44f7e071e4c',
            'cons': 'relatively more expensive, involves an external call, slightly slower',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': 'This is a Google service and involves an external API call.',
            'display_values': {},
            'id': 25,
            'input_params': {},
            'is_paid': 'paid',
            'library': 'google',
            'module': 'sentiment',
            'pros': 'contextual, slightly higher accuracy, improves over time',
            'unique_name': 'Google Sentiment Analysis',
            'updated_at': 1535705344000
          },
          {
            '_id': '5b8901000e0ff44f7e071e4d',
            'cons': ' not contextual, slightly lower accuracy',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': 'This implementation is based on an open-source project which takes a deterministic approach and is non-contextual in nature.',
            'display_values': {},
            'id': 26,
            'input_params': {},
            'is_paid': 'free',
            'library': 'botman',
            'module': 'sentiment',
            'pros': 'cheaper, no external call, slightly faster',
            'unique_name': ' IMIbot Sentiment Analysis',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/18/',
        'unique_name': 'sentiment'
      },
      {
        'description': 'Parses a given sentence for a mention of a date or time and extracts them into the most likely standard representations.',
        'display_values': 'Time & Date Recognition',
        'id': 19,
        'pipeline_modules': [
          {
            '_id': '5b8901000e0ff44f7e071e54',
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': 'This implementation is based on an open-source project which takes a deterministic approach.',
            'display_values': {
              'extra_info': {
                'display_value': 'extra information',
                'type': 'text'
              },
              'future': {
                'display_value': 'Future',
                'type': 'text'
              }
            },
            'id': 33,
            'input_params': {
              'extra_info': false,
              'future': true
            },
            'is_paid': 'free',
            'library': 'botman',
            'module': 'timedate',
            'pros': 'free, no external call, very accurate',
            'unique_name': 'IMIbot Date Time Recognition',
            'updated_at': 1535705344000
          },
          {
            '_id': '5cb99279a6d3ec2002ef5e0e',
            'cons': 'lower accuracy',
            'contextual': false,
            'created_at': 1555577344000,
            'default': false,
            'description': 'Datetime detection for 6 languages - english,hindi,gujarati,marathi,tamil and bengali',
            'display_values': {
              'source_language': {
                'default': 'hi',
                'display_value': 'Source Language',
                'type': 'text'
              },
              'timezone': {
                'default': 'Asia/Kolkata',
                'display_value': 'Timezone',
                'type': 'text'
              }
            },
            'id': 41,
            'input_params': {
              'source_language': 'hi',
              'timezone': 'Asia/Kolkata'
            },
            'is_paid': 'free',
            'library': 'haptik',
            'module': 'timedate',
            'pros': 'free and no external calls',
            'unique_name': 'Multilingual Datetime Detection',
            'updated_at': 1555577344000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/19/',
        'unique_name': 'timedate'
      },
      {
        'description': 'Parses a given sentence and assigns the most appropriate part-of-speech tag to each of the words in the sentence.',
        'display_values': 'POS Tagging',
        'id': 20,
        'pipeline_modules': [
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
            'is_paid': 'free',
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
            'is_paid': 'paid',
            'library': 'google',
            'module': 'pos',
            'pros': 'more accurate, supports multiple languages',
            'unique_name': 'Google Parts of Speech',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/20/',
        'unique_name': 'pos'
      },
      {
        'description': 'Determines whether the input phrase is a question or not. See examples for a better understanding',
        'display_values': 'Question Detection',
        'id': 21,
        'pipeline_modules': [
          {
            '_id': '5b8901000e0ff44f7e071e3d',
            'cons': 'None',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': 'Abstraction over the framework given by Spacy',
            'display_values': {},
            'id': 10,
            'input_params': {},
            'is_paid': 'free',
            'library': 'spacy',
            'module': 'quesdetect',
            'pros': 'free, no external calls, faster',
            'unique_name': 'Spacy Question Detection',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/21/',
        'unique_name': 'quesdetect'
      },
      {
        'description': 'Gets the lexemes of all words in your text. A lexeme is the base form of a word. For exapmple, the lexeme of running is run',
        'display_values': 'Lemmatization',
        'id': 22,
        'pipeline_modules': [
          {
            '_id': '5b8901000e0ff44f7e071e48',
            'cons': 'slightly lower accuracy',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': '',
            'display_values': {},
            'id': 21,
            'input_params': {},
            'is_paid': 'free',
            'library': 'botman',
            'module': 'lemmatization',
            'pros': 'cheaper, no external call, slightly faster',
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
            'is_paid': 'paid',
            'library': 'google',
            'module': 'lemmatization',
            'pros': 'contextual, slightly higher accuracy',
            'unique_name': 'Google Lemmatization',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/22/',
        'unique_name': 'lemmatization'
      },
      {
        'description': 'This module helps retrieve phrases from input text',
        'display_values': 'Chunking',
        'id': 23,
        'pipeline_modules': [
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
            'is_paid': 'free',
            'library': 'spacy',
            'module': 'chunking',
            'pros': 'free, no external calls, faster',
            'unique_name': 'Spacy Chunking',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/23/',
        'unique_name': 'chunking'
      },
      {
        'description': 'Converts the given text into speech file. The module takes different additional arguments depneding on the library used.',
        'display_values': 'Text to Speech',
        'id': 24,
        'pipeline_modules': [
          {
            '_id': '5b8901000e0ff44f7e071e4e',
            'cons': 'Higher latency relative to Polly from Amazon',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': 'Azure accepts lang , gender and voice_ms as additional parameters. Detailed documentation can be found at https://docs.microsoft.com/en-in/azure/cognitive-services/speech/api-reference-rest/bingvoiceoutput',
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
              'filetype': '',
              'gender': '',
              'lang': '',
              'voice_ms': ''
            },
            'is_paid': 'paid',
            'library': 'azure',
            'module': 'texttospeech',
            'pros': 'few Indic languages like Hindi, Tamil etc are also supported, supports multiple accents, supports SSML',
            'unique_name': 'Microsoft Text to Speech',
            'updated_at': 1535705344000
          },
          {
            '_id': '5b8901000e0ff44f7e071e4f',
            'cons': 'Limited language support',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': 'Amazon accepts voice parameter with the body and takes values from Id parameter located at http://docs.aws.amazon.com/polly/latest/dg/API_Voice.html',
            'display_values': {
              'filetype': {
                'content': [
                  'mp3'
                ],
                'default': 'mp3',
                'display_value': 'Output format',
                'type': 'dropdown'
              },
              'voice': {
                'content': [
                  'Nicole',
                  'Vitória',
                  'Chantal',
                  'Naja',
                  'Lotte',
                  'Léa',
                  'Céline',
                  'Vicki',
                  'Marlene',
                  'Aditi',
                  'Dóra',
                  'Raveena',
                  'Aditi',
                  'Carla',
                  'Mizuki',
                  'Seoyeon',
                  'Zhiyu',
                  'Liv',
                  'Ewa',
                  'Maja',
                  'Inês',
                  'Carmen',
                  'Tatyana',
                  'Conchita',
                  'Astrid',
                  'Filiz',
                  'Amy',
                  'Emma',
                  'Joanna',
                  'Salli',
                  'Kendra',
                  'Kimberly',
                  'Ivy',
                  'Penélope',
                  'Gwyneth'
                ],
                'default': 'Joey',
                'display_value': 'Voice',
                'type': 'dropdown'
              }
            },
            'id': 28,
            'input_params': {
              'filetype': '',
              'voice': ''
            },
            'is_paid': 'paid',
            'library': 'amazon',
            'module': 'texttospeech',
            'pros': 'Slightly faster',
            'unique_name': 'Amazon Text to Speech',
            'updated_at': 1535705344000
          },
          {
            '_id': '5b8901000e0ff44f7e071e50',
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
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
              'speech_language': {
                'content': [
                  'af-ZA',
                  'am-ET',
                  'hy-AM',
                  'az-AZ',
                  'id-ID',
                  'ms-MY',
                  'bn-BD',
                  'bn-IN',
                  'ca-ES',
                  'cs-CZ',
                  'da-DK',
                  'de-DE',
                  'en-AU',
                  'en-CA',
                  'en-GH',
                  'en-GB',
                  'en-IN',
                  'en-IE',
                  'en-KE',
                  'en-NZ',
                  'en-NG',
                  'en-PH',
                  'en-ZA',
                  'en-TZ',
                  'en-US',
                  'es-AR',
                  'es-BO',
                  'es-CL',
                  'es-CO',
                  'es-CR',
                  'es-EC',
                  'es-SV',
                  'es-ES',
                  'es-US',
                  'es-GT',
                  'es-HN',
                  'es-MX',
                  'es-NI',
                  'es-PA',
                  'es-PY',
                  'es-PE',
                  'es-PR',
                  'es-DO',
                  'es-UY',
                  'es-VE',
                  'eu-ES',
                  'fil-PH',
                  'fr-CA',
                  'fr-FR',
                  'gl-ES',
                  'ka-GE',
                  'gu-IN',
                  'hr-HR',
                  'zu-ZA',
                  'is-IS',
                  'it-IT',
                  'jv-ID',
                  'kn-IN',
                  'km-KH',
                  'lo-LA',
                  'lv-LV',
                  'lt-LT',
                  'hu-HU',
                  'ml-IN',
                  'mr-IN',
                  'nl-NL',
                  'ne-NP',
                  'nb-NO',
                  'pl-PL',
                  'pt-BR',
                  'pt-PT',
                  'ro-RO',
                  'si-LK',
                  'sk-SK',
                  'sl-SI',
                  'su-ID',
                  'sw-TZ',
                  'sw-KE',
                  'fi-FI',
                  'sv-SE',
                  'ta-IN',
                  'ta-SG',
                  'ta-LK',
                  'ta-MY',
                  'te-IN',
                  'vi-VN',
                  'tr-TR',
                  'ur-PK',
                  'ur-IN',
                  'el-GR',
                  'bg-BG',
                  'ru-RU',
                  'sr-RS',
                  'uk-UA',
                  'he-IL',
                  'ar-IL',
                  'ar-JO',
                  'ar-AE',
                  'ar-BH',
                  'ar-DZ',
                  'ar-SA',
                  'ar-IQ',
                  'ar-KW',
                  'ar-MA',
                  'ar-TN',
                  'ar-OM',
                  'ar-PS',
                  'ar-QA',
                  'ar-LB',
                  'ar-EG',
                  'fa-IR',
                  'hi-IN',
                  'th-TH',
                  'ko-KR',
                  'cmn-Hant-TW',
                  'yue-Hant-HK',
                  'ja-JP',
                  'cmn-Hans-HK',
                  'cmn-Hans-CN'
                ],
                'default': 'en-uk',
                'display_value': 'Language',
                'type': 'dropdown'
              }
            },
            'id': 29,
            'input_params': {
              'filetype': '',
              'speech_language': ''
            },
            'is_paid': 'paid',
            'library': 'google',
            'module': 'texttospeech',
            'pros': '',
            'unique_name': 'Google Text to Speech',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/24/',
        'unique_name': 'texttospeech'
      },
      {
        'description': 'Is used to expand contracted text ',
        'display_values': 'Contractions',
        'id': 27,
        'pipeline_modules': [
          {
            '_id': '5cb092cc23865186fe631870',
            'cons': 'None',
            'contextual': false,
            'created_at': 1554720111000,
            'default': false,
            'description': '',
            'display_values': {},
            'id': 37,
            'input_params': {},
            'is_paid': 'free',
            'library': 'botman',
            'module': 'expand',
            'pros': 'Fast and reliable',
            'unique_name': 'Pycontractions',
            'updated_at': 1554720111000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/27/',
        'unique_name': 'expand'
      },
      {
        'description': 'Detects phone numbers for 6 languages - english,hindi,gujarati,marathi,tamil and bengali',
        'display_values': 'Phone Number Detection',
        'id': 28,
        'pipeline_modules': [
          {
            '_id': '5cb99277a6d3ec2002ef5e0b',
            'cons': 'lower accuracy',
            'contextual': false,
            'created_at': 1555577344000,
            'default': false,
            'description': 'Phone number detection for 6 languages - english,hindi,gujarati,marathi,tamil and bengali',
            'display_values': {
              'source_language': {
                'default': 'hi',
                'display_value': 'Source Language',
                'type': 'text'
              }
            },
            'id': 38,
            'input_params': {
              'source_language': 'hi'
            },
            'is_paid': 'free',
            'library': 'haptik',
            'module': 'inerphnumdetection',
            'pros': 'free and no external calls',
            'unique_name': 'Multilingual Phone Number Detection',
            'updated_at': 1555577344000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/28/',
        'unique_name': 'inerphnumdetection'
      },
      {
        'description': 'Detects numeric range/interval for 2 languages - english,hindi',
        'display_values': 'Numeric Range Detection',
        'id': 29,
        'pipeline_modules': [
          {
            '_id': '5cb99278a6d3ec2002ef5e0d',
            'cons': 'lower accuracy',
            'contextual': false,
            'created_at': 1555577344000,
            'default': false,
            'description': 'Numeric Range/Interval detection for 2 languages - english,hindi',
            'display_values': {
              'source_language': {
                'default': 'hi',
                'display_value': 'Source Language',
                'type': 'text'
              }
            },
            'id': 40,
            'input_params': {
              'source_language': 'hi'
            },
            'is_paid': 'free',
            'library': 'haptik',
            'module': 'inernumrangedetection',
            'pros': 'free and no external calls',
            'unique_name': 'Multilingual Number Range Detection',
            'updated_at': 1555577344000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/29/',
        'unique_name': 'inernumrangedetection'
      },
      {
        'description': 'Detects emotions in a given text',
        'display_values': 'Emotion Classifier',
        'id': 30,
        'pipeline_modules': [
          {
            '_id': '5cb99279a6d3ec2002ef5e0f',
            'cons': 'lower accuracy',
            'contextual': false,
            'created_at': 1555577344000,
            'default': false,
            'description': 'Detects top 5 emotions in a given text',
            'display_values': {},
            'id': 42,
            'input_params': {},
            'is_paid': 'free',
            'library': 'botman',
            'module': 'emotionclassifier',
            'pros': 'free and no external calls',
            'unique_name': 'IMIbot Emotion Classifier',
            'updated_at': 1555577344000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/30/',
        'unique_name': 'emotionclassifier'
      },
      {
        'description': 'Extracts the keywords representing the main theme of a given sentence',
        'display_values': 'Main Theme',
        'id': 31,
        'pipeline_modules': [
          {
            '_id': '5b8901000e0ff44f7e071e35',
            'cons': '',
            'contextual': false,
            'created_at': 1535705344000,
            'default': false,
            'description': '',
            'display_values': {},
            'id': 2,
            'input_params': {},
            'is_paid': 'paid',
            'library': 'spacy',
            'module': 'maintheme',
            'pros': '',
            'unique_name': 'Main Theme',
            'updated_at': 1535705344000
          }
        ],
        'resource_uri': '/api/v1/moduledetails/31/',
        'unique_name': 'maintheme'
      }
    ],
    'roleInfoArr': [
      {
        'base_role': 0,
        'created_at': 1535705344000,
        'created_by': 'unknown',
        'enterprise_id': 0,
        'id': 2,
        'is_system_role': true,
        'name': 'Admin',
        'permissions': {
          'actions': []
        },
        'resource_uri': '/api/v1/role/2/',
        'session_expiry_time': -1,
        'updated_at': 1535705344000,
        'updated_by': 'unknown'
      },
      {
        'base_role': 0,
        'created_at': 1535705344000,
        'created_by': 'unknown',
        'enterprise_id': 0,
        'id': 4,
        'is_system_role': true,
        'name': 'Analyst',
        'permissions': {
          'actions': [
            1,
            19,
            20,
            22,
            23,
            39,
            40,
            41,
            54,
            60,
            61,
            66,
            67,
            71
          ]
        },
        'resource_uri': '/api/v1/role/4/',
        'session_expiry_time': 10,
        'updated_at': 1535705344000,
        'updated_by': 'unknown'
      },
      {
        'base_role': 0,
        'created_at': 1535705344000,
        'created_by': 'unknown',
        'enterprise_id': 0,
        'id': 3,
        'is_system_role': true,
        'name': 'Bot Developer',
        'permissions': {
          'actions': [
            1,
            2,
            3,
            4,
            6,
            10,
            11,
            12,
            13,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            39,
            40,
            41,
            54,
            60,
            61,
            62,
            63,
            64,
            66,
            67,
            68,
            71,
            78,
            79
          ]
        },
        'resource_uri': '/api/v1/role/3/',
        'session_expiry_time': 1800,
        'updated_at': 1535705344000,
        'updated_by': 'unknown'
      },
      {
        'base_role': 0,
        'created_at': 1535705344000,
        'created_by': 'unknown',
        'enterprise_id': 0,
        'id': 5,
        'is_system_role': true,
        'name': 'Tester',
        'permissions': {
          'actions': [
            1,
            19,
            20,
            22,
            24,
            25,
            26,
            27,
            39,
            40,
            41,
            60,
            54,
            61,
            66,
            67,
            71,
            78,
            79
          ]
        },
        'resource_uri': '/api/v1/role/5/',
        'session_expiry_time': 1800,
        'updated_at': 1535705344000,
        'updated_by': 'unknown'
      },
      {
        'base_role': 3,
        'created_at': 1553082244000,
        'created_by': 'Qwerty1 Parrot',
        'enterprise_id': 4,
        'id': 27,
        'is_system_role': false,
        'name': 'Dev based',
        'permissions': {
          'actions': [
            1,
            2,
            3,
            4,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            15,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            29,
            30,
            31,
            32,
            33,
            34,
            38,
            40,
            54,
            58,
            61,
            62,
            63,
            64,
            68,
            78,
            79
          ]
        },
        'resource_uri': '/api/v1/role/27/',
        'session_expiry_time': 1800,
        'updated_at': 1553083007000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'base_role': 3,
        'created_at': 1551695781000,
        'created_by': 'Qwerty1 Parrot',
        'enterprise_id': 4,
        'id': 20,
        'is_system_role': false,
        'name': 'Test',
        'permissions': {
          'actions': [
            1,
            2,
            3,
            4,
            5,
            6,
            10,
            11,
            12,
            13,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            39,
            40,
            41,
            54,
            60,
            61,
            62,
            63,
            64,
            66,
            67,
            68,
            71,
            78,
            79
          ]
        },
        'resource_uri': '/api/v1/role/20/',
        'session_expiry_time': 1800,
        'updated_at': 1551695781000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'base_role': 5,
        'created_at': 1553079075000,
        'created_by': 'Qwerty1 Parrot',
        'enterprise_id': 4,
        'id': 26,
        'is_system_role': false,
        'name': 'Tester based',
        'permissions': {
          'actions': [
            1,
            2,
            3,
            4,
            22,
            24,
            25,
            26,
            27,
            40,
            54,
            64,
            78,
            79
          ]
        },
        'resource_uri': '/api/v1/role/26/',
        'session_expiry_time': 1800,
        'updated_at': 1553079075000,
        'updated_by': 'Qwerty1 Parrot'
      },
      {
        'base_role': 4,
        'created_at': 1546458696000,
        'created_by': 'Qwerty1 Parrot',
        'enterprise_id': 4,
        'id': 10,
        'is_system_role': true,
        'name': 'ayesh enterprise role',
        'permissions': {
          'actions': [
            1,
            3,
            19,
            20,
            22,
            23,
            39,
            40,
            41,
            60,
            61,
            66
          ]
        },
        'resource_uri': '/api/v1/role/10/',
        'session_expiry_time': 1800,
        'updated_at': 1548396867000,
        'updated_by': 'Qwerty1 Parrot'
      }
    ],
    'lastUpdated': 0,
    'progressbar': {
      'show': false,
      'loading': false,
      'value': 0
    },
    'showBackendUrlRootButton': false,
    'enterpriseNerData': [],
    'masterPipelineItems': null
  },
  'chatsessionstate': {
    'frameEnabled': 'WELCOME_BOX',
    'opened': false,
    'currentRoomId': null,
    'currentBotDetails': null,
    'currentUId': null,
    'rooms': null,
    'consumerDetails': null
  }
};
