export interface ITemplateResponse {
  'include': [
    'web'
  ];
  'text': [
    'Hey; this is one of the bots default articles. You can add your own answer to this section and add more variants'
  ];
}

export interface IMlTemplate {
  [index: string]: {
    'logic': string;
    'response': ITemplateResponse;
    'response_type': 'rich'
  };
}


export interface IMLResponse {
  'bot_id': number;
  'comment': 'Default response templates';
  'created_at': 1571378574000.0;
  'created_by': 'Manjula Choudhary';
  'default_templates': [
    'fallback',
    'agent',
    'first_message'
  ];
  'generation_rules': {};
  'id': number;
  'metadata': {};
  'resource_uri': '/api/v1/responsetemplates/6/';
  'state': string;
  'templates': IMlTemplate;
  'updated_at': 1571573175000.0;
  'updated_by': 'Manjula Choudhary';
  'workflow': {
    'logic': string
  };
}
