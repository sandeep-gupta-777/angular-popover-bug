import {EHttpVerb} from "./enums";
import {IHeaderData} from "../../interfaces/header-data";

export interface IApiCollection {
  folder:string,
  apiList:IApi[]
}

export interface IApi {
  id?:number,
  method?: EHttpVerb,
  body?: any,
  headers?:IHeaderData
  url?:any,
  name?:any,
  response?:any,
  response_headers?:IHeaderData,
  response_code?:number,
  loading?:true
}