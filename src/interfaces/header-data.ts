export interface IHeaderData {
  'auth-token'?: string,
  'content-length'?: string,
  'content-type'?: string,
  'cookie'?: string,
  'origin'?: string,
  'referer'?: string,
  'user-agent'?: string,
  'user-access-token'?: string,
  'api-key'?:string
  'bot-access-token'?:string,

}

export interface IAnalyticsHeaderData {
  startdate:string,
  enddate:string,
  platform:string,
  type:string,
  'auth-token': string,
  'bot-access-token':string,
  "user-access-token":string
}

