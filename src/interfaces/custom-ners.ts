export interface ICustomNerItem {
  'bot_id'?: number; // 1,
  'column_headers'?: any[];
  'column_nermap'?: {}; // {},
  'conflict_policy'?: string; // "override",
  'created_at'?: string; // "2018-07-31T10?:19?:59.597000",
  'created_by'?: number; // 0,
  'enterprise_id'?: number; // 14,
  'id'?: number; // 17,
  'key'?: string; // "city1",
  'ner_type'?: string; // "double_match",
  'process_raw_text'?: false;
  'is_sensitive'?: false;
  'ignore_punctuation'?: false;
  'resource_uri'?: string; // "/api/v1/customner/17/",
  'type'?: string; // "bot",
  'updated_at'?: string; // "2018-07-31T10?:19?:59.597000",
  'updated_by'?: number; // 0,
  'values'?: any|any[];

  /*custom fields*/
  highlight?: boolean;
}
//
