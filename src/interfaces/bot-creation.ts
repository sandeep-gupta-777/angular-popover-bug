/*question: why there are two pipeline related fields: pipeline and pipeline data */



import {IIntegrationOption} from './integration-option';
import { ICodeData } from '../app/core/interfaces/IBot';

export interface IBasicInfo {
  'botUniqueName': string;
  'name': string;
  'heading': string;
  'imiChatStatus': boolean;
  'firstMessage': string;
  'error_message': null;
  'isManager': boolean;
  'industry': string;
  'description': string;
  'room_persistence_time': number;
  'countpertransaction': number;
  'logo': string;
}
export interface ISaveDataManagment {
  'data_persistence_period': number;
  'consent_message': string;
  'advanced_data_protection': boolean;
  'allow_anonymization': boolean;
  'blanket_consent': boolean;
}

export interface IAvatar {
    'id': number;
    'imageUrl': string;
    'name': string;
}

export interface IAvatarList {
  'avatars': IAvatar[];
}

export interface IPipeline {
  'pipelineId': string;
  'pipeline': [{
    'default': boolean,
    'displayValues': { 'output_language': string },
    'id': string,
    'inputParams': { 'output_language': string },
    'library': string,
    'module': string,
    'type': string
  }];
}

export interface pipelineData {

}

export interface IUnselectedPipeline {
  'contextual': boolean;
  'default': boolean;
  'id': string;
  'inputParams': object;
  'library': string;
  'module': string;
  'type': string;
}


export interface ICustomners {
  'customNers': [{
    'columnHeaders': [string],
    'columnNERMap': { 'Key': null, 'Response': null },
    'conflict_policy': string,
    'key': string,
    'nerType': string,
    'values': [{ 'Key': string, 'Response': string }]
  }];
}

// export interface ICode {
//   'dfRules'?: string,
//   'dfTemplate'?: string
//   'generationRules'?: string
//   'generationTemplates'?: string
// }

export interface IIntegration {

  'channels': IIntegrationOption;
  // 'channels': {
  //   'alexa': { 'enable': boolean, 'skillId': string },
  //   'facebook': { 'enabled': boolean, 'facebook-token': string, 'facebooktoggle': boolean, 'roomId': string },
  //   'imiconnect': { 'enabled': boolean },
  //   'skype': { 'client_id': string, 'client_secret': string, 'enabled': boolean },
  //   'web': { 'enabled': boolean }
  // }
}

export interface IBotConfig extends IBasicInfo, IAvatarList, ICodeData, ICustomners, IPipeline, IIntegration {
  '_id': string;
  'activeVersionId': string;
  'agentDetails': {
    'debug': { 'debugurl': string, 'enabled': boolean },
    'imichat': { 'access-token': string, 'domain': string, 'enabled': boolean, 'imichattoggle': boolean, 'service-key': string }
  };

}

/*=========example of BotConfig ==========*/

/*
let x = {
  '_id': '59e055773b6219000ca825ba',
  'activeVersionId': '5afd77daee3c30978c33f6cd',
  'agentDetails': {
    'debug': {'debugurl': '', 'enabled': false},
    'imichat': {'access-token': '', 'domain': '', 'enabled': false, 'imichattoggle': false, 'service-key': ''}
  },
  'allowAnonymization': false,
  'avatars': [{'roomId': 1, 'imageUrl': 'https://robohash.org/StarBot.png', 'name': 'StarBot'}],
  'blanketConsent': false,
  'botLogo': 'http://www.irislink.com/Documents/Image/_IrisLink2.0/Mobile_Scanner/IRIScan_Mouse_wifi/image-translate.png',
  'botType': 'chatbot',
  'botUniqueName': 'translate_demo',
  'botsManaged': [],
  'callback': null,
  'channels': {
    'alexa': {'enable': false, 'skillId': ''},
    'facebook': {'enabled': false, 'facebook-token': '', 'facebooktoggle': false, 'roomId': ''},
    'imiconnect': {'enabled': false},
    'skype': {'client_id': '', 'client_secret': '', 'enabled': false},
    'web': {'enabled': false}
  },
  'consentCategories': [],
  'consentEnabled': false,
  'consentMessage': 'Yo, I have your consent!',
  'countpertransaction': null,
  'created_at': '2017-10-13 05:56:07.759000',
  'customNers': [{
    'columnHeaders': ['Key', 'Response'],
    'columnNERMap': {'Key': null, 'Response': null},
    'conflict_policy': 'override',
    'key': 'English_Responses',
    'nerType': 'database',
    'values': [{'Key': 'hello', 'Response': 'Hey there!'}]
  }],
  'data_persistence_period': 30,
  'description': 'sdaf',
  'dfRules': '\nnewdf = {"word": None,"language":None}\nif "custom_ners" in variables["nlp"] and "english" in variables["nlp"]["custom_ners"]:\n\tnewdf = {"word": "english_Hi"}\nif "nlp" in variables and variables["nlp"] and "detectedSourceLanguage" in variables["nlp"]:\n\tnewdf["language"]=variables["nlp"]["detectedSourceLanguage"]\noutput = {"df": newdf}  \t',
  'dfTemplate': 'df={"word":None}\noutput={"df":df}',
  'enterpriseId': '59b0f043378feb000d7c9d13',
  'error_message': null,
  'firstMessage': 'Hi there! Please say hi or its equivalent in English, Arabic or Spanish',
  'generationRules': 'templateKey="random"\nnewdf = variables["newdfState"]\nif newdf and "word" in newdf and newdf["word"]:\n\ttemplateKey = "hello"\nelse:\n    templateKey = "random"\nmessagestore = {"endflow": True}\noutput = {"templateKey": templateKey, "messageStore": messagestore}',
  'generationTemplates': 'languageDictionaries={"en":"English_Responses","es":"Spanish_Responses","ar":"Arabic_Responses"}\nresponse="hi"\nif variables["templateKey"] == "random":\n    output = [{"include": ["web"],\n               "text": ["Sorry, I only understand simple greetings like hi in a few supported languages"]}]\nelse:\n    for item in languageDictionaries:\n        if str(variables["newdfState"]["language"]) == item:\n            response = [item for item in variables["databases"][languageDictionaries[item]] if str(item["templateKey"]) == str(variables["templateKey"])][0]["Response"]\n    output = [{"include": ["web"], "text": [response]}]\n',
  'heading': 'hey',
  'imiChatStatus': false,
  'industry': 'Language Services',
  'isManager': true,
  'name': 'Translator',
  'pipeline': [{
    'default': false,
    'displayValues': {'output_language': 'Output language'},
    'roomId': 'Google Translate',
    'inputParams': {'output_language': 'en'},
    'library': 'google',
    'module': 'language_translate',
    'type': 'item'
  }, {'roomId': 'IMIbot Custom NER', 'inputParams': {}, 'library': 'botman', 'module': 'custom_ners', 'type': 'item'}],
  'pipelineId': '59e055773b6219002b9873fa',
  'room_persistence_time': 240,
  'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYm90IiwiaWQiOiI1OWUwNTU3NzNiNjIxOTAwMGNhODI1YmEifQ.73aRHEJ_dookTtTTIUvpyDOXwGiWTmoDwpPO1TJl5e0',
  'unselected_pipeline': [

    {
    'contextual': false,
    'default': false,
    'roomId': 'Spacy NER',
    'inputParams': {},
    'library': 'spacy',
    'module': 'ner',
    'type': 'item'
  }, {
    'contextual': false,
    'default': false,
    'roomId': 'Main Theme',
    'inputParams': {},
    'library': 'spacy',
    'module': 'maintheme',
    'type': 'item'
  }, {
    'contextual': false,
    'default': false,
    'roomId': 'Dandelion NER',
    'inputParams': {},
    'library': 'dandelion',
    'module': 'ner',
    'type': 'item'
  }, {
    'contextual': false,
    'default': false,
    'displayValues': {'image_type': 'Natural Image'},
    'roomId': 'Google OCR',
    'inputParams': {'image_type': 'natural_image'},
    'library': 'google',
    'module': 'ocr',
    'type': 'item'
  }, {
    'contextual': false,
    'default': false,
    'roomId': 'RASA CommonSense',
    'inputParams': {'model_type': 'mitie_sklearn'},
    'library': 'smalltalk',
    'module': 'rasanlp',
    'type': 'item'
  }, {
    'contextual': false,
    'default': true,
    'roomId': 'Spacy Parts of Speech',
    'inputParams': {},
    'library': 'spacy',
    'module': 'pos',
    'type': 'item'
  }, {
    'contextual': false,
    'default': false,
    'roomId': 'Spacy Parse Tree',
    'inputParams': {},
    'library': 'spacy',
    'module': 'parsetree',
    'type': 'item'
  }, {
    'contextual': false,
    'default': false,
    'roomId': 'IMIbot Spell Check',
    'inputParams': {},
    'library': 'botman',
    'module': 'spell_check',
    'type': 'item'
  }, {
    'contextual': true,
    'default': false,
    'displayValues': {'wit_access_token': 'Wit Access token'},
    'roomId': 'Wit.ai',
    'inputParams': {'wit_access_token': ''},
    'library': 'wit',
    'module': 'witnlp',
    'type': 'item'
  }, {
    'contextual': false,
    'default': false,
    'roomId': 'Spacy Word Tokenization',
    'inputParams': {},
    'library': 'spacy',
    'module': 'word_tokenization',
    'type': 'item'
  }, {
    'contextual': false,
    'default': true,
    'roomId': 'NLTK Sentence Tokenization',
    'inputParams': {},
    'library': 'nltk',
    'module': 'sentence_tokenization',
    'type': 'item'
  }, {
    'contextual': false,
    'default': false,
    'roomId': 'Spacy Sentence Tokenization',
    'inputParams': {},
    'library': 'spacy',
    'module': 'sentence_tokenization',
    'type': 'item'
  }, {
    'contextual': false,
    'default': false,
    'roomId': 'Botman Lemmatization',
    'inputParams': {},
    'library': 'botman',
    'module': 'lemmatization',
    'type': 'item'
  }, {
    'contextual': false,
    'default': false,
    'roomId': 'Spacy Lemmatization',
    'inputParams': {},
    'library': 'spacy',
    'module': 'lemmatization',
    'type': 'item'
  }, {
    'contextual': false,
    'default': false,
    'roomId': 'Google Lemmatization',
    'inputParams': {},
    'library': 'google',
    'module': 'lemmatization',
    'type': 'item'
  }, {
    'contextual': false,
    'default': false,
    'roomId': 'Spacy Chunking',
    'inputParams': {},
    'library': 'spacy',
    'module': 'chunking',
    'type': 'item'
  }, {
    'contextual': false,
    'default': false,
    'roomId': 'Google Sentiment Analysis',
    'inputParams': {},
    'library': 'google',
    'module': 'sentiment',
    'type': 'item'
  }, {
    'contextual': false,
    'default': false,
    'roomId': ' IMIbot Sentiment Analysis',
    'inputParams': {},
    'library': 'botman',
    'module': 'sentiment',
    'type': 'item'
  }, {
    'contextual': false,
    'default': false,
    'displayValues': {'filetype': 'Output format'},
    'roomId': 'Azure Text to Speech',
    'inputParams': {'filetype': ''},
    'library': 'azure',
    'module': 'texttospeech',
    'type': 'item'
  }, {
    'contextual': false,
    'default': false,
    'displayValues': {'filetype': 'Output format'},
    'roomId': 'Amazon Text to Speech',
    'inputParams': {'filetype': ''},
    'library': 'amazon',
    'module': 'texttospeech',
    'type': 'item'
  }, {
    'contextual': false,
    'default': false,
    'displayValues': {'filetype': 'Output format'},
    'roomId': 'Google Text to Speech',
    'inputParams': {'filetype': ''},
    'library': 'google',
    'module': 'texttospeech',
    'type': 'item'
  }, {
    'contextual': false,
    'default': false,
    'roomId': 'Google Speech to Text',
    'inputParams': {},
    'library': 'google',
    'module': 'speechtotext',
    'type': 'item'
  }, {
    'contextual': false,
    'default': true,
    'roomId': 'Azure Spell Check',
    'inputParams': {},
    'library': 'azure',
    'module': 'spell_check',
    'type': 'item'
  }, {
    'contextual': false,
    'default': true,
    'roomId': 'NLTK Word Tokenization',
    'inputParams': {},
    'library': 'nltk',
    'module': 'word_tokenization',
    'type': 'item'
  }, {
    'contextual': false,
    'default': false,
    'roomId': 'Google Parts of Speech',
    'inputParams': {},
    'library': 'google',
    'module': 'pos',
    'type': 'item'
  }, {
    'contextual': false,
    'default': false,
    'roomId': 'Google Parse Tree',
    'inputParams': {},
    'library': 'google',
    'module': 'parsetree',
    'type': 'item'
  }, {
    'contextual': false,
    'default': false,
    'displayValues': {'extra_info': 'extra information', 'future': 'Future'},
    'roomId': 'IMIbot Date Time Recognition',
    'inputParams': {'extra_info': false, 'future': true},
    'library': 'botman',
    'module': 'timedate',
    'type': 'item'
  }, {
    'contextual': false,
    'default': false,
    'roomId': 'IMIbot Units Recognition',
    'inputParams': {},
    'library': 'botman',
    'module': 'units',
    'type': 'item'
  }, {
    'contextual': false,
    'default': false,
    'roomId': 'IMIbot Numbers Recognition',
    'inputParams': {},
    'library': 'botman',
    'module': 'numbers',
    'type': 'item'
  }, {
    'contextual': false,
    'default': true,
    'roomId': 'IMIbot Common Sense',
    'inputParams': {},
    'library': 'botman',
    'module': 'commonsense',
    'type': 'item'
  }, {
    'contextual': false,
    'default': false,
    'roomId': 'Spacy Question Detection',
    'inputParams': {},
    'library': 'spacy',
    'module': 'quesdetect',
    'type': 'item'
  }, {
    'contextual': true,
    'default': false,
    'displayValues': {'api_ai_access_token': 'api.ai access token'},
    'roomId': 'API.ai',
    'inputParams': {'api_ai_access_token': ''},
    'library': 'apiai',
    'module': 'apiainlp',
    'type': 'item'
  }],
  'updated_at': '2018-06-06 09:17:41.806000',
  'updated_by': '5a030aa9b050705bd0ca5a45',
  'pipelineData': {
    'pipeline': [{
      'default': false,
      'displayValues': {'output_language': 'Output language'},
      'roomId': 'Google Translate',
      'inputParams': {'output_language': 'en'},
      'library': 'google',
      'module': 'language_translate',
      'type': 'item'
    }, {'roomId': 'IMIbot Custom NER', 'inputParams': {}, 'library': 'botman', 'module': 'custom_ners', 'type': 'item'}]
  }
};
*/
