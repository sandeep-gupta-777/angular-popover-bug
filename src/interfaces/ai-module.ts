// export interface IAIModule {
//   $$hashKey?: string,
//   contextual?: boolean,
//   default?: boolean
//   id?: string,
//   inputParams?: { wit_access_token?: string },
//   displayValues?: { wit_access_token?: string, filetype?: string, extra_info?: string, future?: string },
//   library?: string,
//   module?: string,
//   type?: string
//
// }

export interface IPipelineItem {
  "contextual": boolean,
  "created_at": string,
  "default": boolean,
  "display_values": {},
  "id": number,
  "input_params": {},
  "library": string,
  "module": string,
  "resource_uri": string,
  "unique_name": string,
  "updated_at": string,
}


// {
//   "contextual": false,
//   "created_at": "2018-07-17T10:47:10.965000",
//   "default": false,
//   "display_values": {},
//   "id": 1,
//   "input_params": {},
//   "library": "spacy",
//   "module": "ner",
//   "resource_uri": "/api/v1/pipelinemodule/1/",
//   "unique_name": "Spacy NER",
//   "updated_at": "2018-07-17T10:47:10.965000"
// }
