export enum EAPINames {
  integration_master = 'api/v1/integrations/',
  enterprise = 'enterprise/',
}


export enum ERoleName {
  Admin = 'Admin',
  'Bot Developer' = 'Bot Developer',
  Analyst = 'Analyst',
  Tester = 'Tester',
}

export enum EAllActions {
  'Get Bots' = 'Get Bots',
  'Create Bots' = 'Create Bots',
  'Update Bots' = 'Update Bots',
  'Delete Bots' = 'Delete Bots',
  'Get Bots Anonymous' = 'Get Bots Anonymous',
  'Get Enterpise Knowledge base' = 'Get Enterpise Knowledge base', //Get Enterprise Knowledge base
  'Create Enterprise Knowledge base' = 'Create Enterprise Knowledge base',
  'Update Enterprise Knowledge base' = 'Update Enterprise Knowledge base',
  'Delete Enterprise Knowledge base' = 'Delete Enterprise Knowledge base',
  'Create Bot Versioning' = 'Create Bot Versioning',
  'GET Bot Versioning' = 'GET Bot Versioning',
  'Update Bot Versioning' = 'Update Bot Versioning',
  'Delete Bot Versioning' = 'Delete Bot Versioning',
  'Create Role' = 'Create Role',
  'Get Role' = 'Get Role',
  'Update Role' = 'Update Role',
  'Delete Role' = 'Delete Role',
  'Create User' = 'Create User',
  'Get User' = 'Get User',
  'Update User' = 'Update User',
  'Get Consumers' = 'Get Consumers',
  'Get Sessions' = 'Get Sessions',
  'Analytics' = 'Analytics',
  'Get Bot Testcases' = 'Get Bot Testcases',
  'Create Bot Testcases' = 'Create Bot Testcases',
  'Update Bot Testcases' = 'Update Bot Testcases',
  'Delete Bot Testcases' = 'Delete Bot Testcases',
  'Get Integrations' = 'Get Integrations',
  'Get Pipeline Module' = 'Get Pipeline Module',
  'Create Reports' = 'Create Reports',
  'Get Reports' = 'Get Reports',
  'Update Reports' = 'Update Reports',
  'Delete Reports' = 'Delete Reports',
  'Get Report History' = 'Get Report History',
  'Get Enterprise' = 'Get Enterprise',
  'Update Enterprise' = 'Update Enterprise',
  'Delete User' = 'Delete User',
  'Get Report Types' = 'Get Report Types',
  'Send API' = 'Send API',
  'Get Messages' = 'Get Messages',
  'Get Actions' = 'Get Actions',
  'Close Room' = 'Close Room',
  'agent_close' = 'agent_close',
  'Anonymize Conversation' = 'Anonymize Conversation',
  'Post dfRules Debug' = 'Post dfRules Debug',
  'Post genRules Debug' = 'Post genRules Debug',
  'Post genTemplate Debug' = 'Post genTemplate Debug',
  'Post Workflow Debug' = 'Post Workflow Debug',
  'Workflow Webhook' = 'Workflow Webhook',
  'Facebook Webhook' = 'Facebook Webhook',
  'Backward Compatible Message API' = 'Backward Compatible Message API',
  'Intelligence API Webhook' = 'Intelligence API Webhook',
  'Delete Consumer' = 'Delete Consumer',
  'Create Decrypt Audit' = 'Create Decrypt Audit',
  'erase consumer' = 'erase consumer',
  'Exec Reports' = 'Exec Reports',
  'Download Reports' = 'Download Reports',
  'Skype API' = 'Skype API',
  'Update Password' = 'Update Password',
  'Get Bot Knowledge base' = 'Get Bot Knowledge base',
  'Create Bot Knowledge base' = 'Create Bot Knowledge base',
  'Update Bot Knowledge base' = 'Update Bot Knowledge base',
  'Delete Bot Knowledge base' = 'Delete Bot Knowledge base',
  'ModuleDetail' = 'ModuleDetail'
}


export enum ESideBarTab {
  setting = 'setting',
  input = 'input',
  logic = 'logic',
  chat = 'chat',
  test = 'test',
  History = 'History',
  faqbot = 'faqbot'
}

export enum ENgxsStogareKey {
  /*https://stackoverflow.com/questions/53839884/how-to-change-the-default-state-key-for-storage-plugin*/
  IMI_BOT_STORAGE_KEY = '@@STATE'
}