import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConstantsService} from './constants.service';
import {Select, Selector, Store} from '@ngxs/store';
import {IUser} from './core/interfaces/user';
import {IHeaderData} from '../interfaces/header-data';
import {IOverviewInfoResponse, IOverviewInfoPostBody} from '../interfaces/overview-info';
import {_throw} from 'rxjs/observable/throw';
import 'rxjs/add/operator/do';
import {ToastrService} from 'ngx-toastr';
import {UtilityService} from './utility.service';
import {SetCodeBasedBotListAction, SetPipeLineBasedBotListAction} from './core/view-bots/ngxs/view-bot.action';
import {IBot} from './core/interfaces/IBot';
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  @Select() loggeduser$: Observable<{user:IUser}>;
  private X_AXIS_TOKEN: string = null;
  private AUTH_TOKEN: string = null;
  private isLoggedIn: boolean = false
  constructor(
    private httpClient:HttpClient,
    private utilityService:UtilityService,
    private store:Store,
    private constantsService:ConstantsService) {
    this.loggeduser$.subscribe((value)=>{
      console.log('server constructor')

      if(!value || !value.user) return;
      this.AUTH_TOKEN =  value.user.auth_token && value.user.auth_token;
      this.X_AXIS_TOKEN = value.user.token && value.user.token;
    })
  };



  createHeaders(headerData?:any):HttpHeaders{
    let headers = new HttpHeaders();
    let tokenData = {};
    if(this.X_AXIS_TOKEN)
      tokenData = {"x-access-token": this.X_AXIS_TOKEN};
    if(this.AUTH_TOKEN)
      tokenData = {...tokenData, "auth-token": this.AUTH_TOKEN};

    /*expanding header data*/
    headerData = {
      "cross-domain": "true",
      "api-key": "54asdkj1209nksnda",
      ...tokenData,
      ...headerData,

    };

    if(headerData)
    for(let key in headerData){{
      headers = headers.set(key, headerData[key]);
    }}
    // headers = headers.set("content-type","application/x-www-form-urlencoded");
    return headers;
  }

  makeGetReq<T>(reqObj: {url:string, headerData?:any}): Observable<T>{
    let headers = this.createHeaders();
    console.log('making get request');
    return this.httpClient.get<T>(reqObj.url, {headers: headers});
  }
  makePostReq<T>(reqObj: {url:string, body:any, headerData?:any}): Observable<T>{
    let headers = this.createHeaders(reqObj.headerData);
    console.log(headers);
    // return this.httpClient.post<T>('http://dev.imibot.ai/login', reqObj.body, {headers:headers});
    return this.httpClient.post<T>(reqObj.url, reqObj.body, {headers:headers})
      .catch((e: any, caught:Observable<T>) => {
        console.log(e);
        console.log(caught);
        this.utilityService.showErrorToaster(e);
        return _throw('error');
      });
  }

  makePutReq<T>(reqObj: {url:string, body:any, headerData?:IHeaderData}): Observable<T>{
    let headers = this.createHeaders(reqObj.headerData);
    console.log("making post request");
    return this.httpClient.put<T>(reqObj.url, JSON.stringify(reqObj.body), {headers:headers});
  }

  getOverviewInfo<T>(body:any):Observable<IOverviewInfoResponse>{
    console.log('getting overview info');
    let url = this.constantsService.getOverViewInfoUrl();
    return this.makePostReq<IOverviewInfoResponse>({url, body});
  }

  getNSetBotList(){
    let url = this.constantsService.getPipelinebasedBotListUrl();
    let headerData: IHeaderData = {'content-type': 'application/json'};
    return this.makeGetReq<IBot[]>({url, headerData})
      .do((botList: IBot[]) => {
        let codeBasedBotList: IBot[] = [];
        let pipelineBasedBotList: IBot[] = [];

        botList.forEach((bot) => {
          bot.botType !== 'intelligent' ? codeBasedBotList.push(bot) : pipelineBasedBotList.push(bot);
        });
        this.store.dispatch(new SetPipeLineBasedBotListAction({botList: pipelineBasedBotList}));
        this.store.dispatch(new SetCodeBasedBotListAction({botList: codeBasedBotList}));
      });
  }
}
