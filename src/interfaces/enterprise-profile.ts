import {IEnterpriseUser} from '../app/core/interfaces/enterprise-users';

export interface IEnterpriseProfileInfo {
  'id': string;
  'created_at': string;
    'enterprise_unique_name': string;//
  'logo': string;//
  'name': string;//
  'updated_at': string;
  'updated_by': number;//


  //new fields
  'created_by': number;//
  'tier_group': number;//
  'log_retention_period': string;//
  'secret_key': string;//

  //not in new
  'phone': string;
  'enterpriseusers': IEnterpriseUser[];
  'tier': string;
  'websiteUrl': string;
  'email': string;
  'industry': string;
  'service_key':any[];
}

const x = {
  // 'created_at': '2018-07-26',
  // 'created_by': 0,
  // 'enterprise_unique_name': 'manjulaanalytics',
  // 'roomId': 14,
  // 'log_retention_period': 'PT180D',
  // 'logo': 'https://media.glassdoor.com/sqll/402111/imimobile-squarelogo-1517496212047.png',
  // 'name': 'Manjula Analytics Enterprise update',
  // 'resource_uri': '/api/v1/enterprise/14/',
  // 'secret_key': 'AQICAHgG1Vy07brAUrCzGdDJQou9EPS1GuvCAahPyedc99fRewGIt5tVDSFBfOZTT9xVAzjAAAAAbTBrBgkqhkiG9w0BBwagXjBcAgEAMFcGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMfJZ7TAOyLMLy/YrMAgEQgCrYjse+pn9bXVFRPVTEoagtiRmAWxiEZuwaEglWDGACgYwZStVlmfw7K4U=',
  // 'tier_group': 1,
  'updated_at': '2018-08-16',
  'updated_by': 0
};
