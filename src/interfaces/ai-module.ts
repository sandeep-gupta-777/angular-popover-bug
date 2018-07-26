export interface IAIModule {
  $$hashKey?: string,
  contextual?: boolean,
  default?: boolean,
  id?: string,
  inputParams?: { wit_access_token?: string },
  displayValues?: { wit_access_token?: string, filetype?: string, extra_info?: string, future?: string },
  library?: string,
  module?: string,
  type?: string

}
