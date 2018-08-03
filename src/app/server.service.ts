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
import {IBot, IBotResult} from './core/interfaces/IBot';
import { ActivatedRoute, Router } from '../../node_modules/@angular/router';

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
    private router : Router,
    private constantsService:ConstantsService) {
    this.loggeduser$.subscribe((value)=>{
      if(!value || !value.user) return;
      this.AUTH_TOKEN =  value.user.auth_token && value.user.auth_token;
      this.X_AXIS_TOKEN = value.user.user_access_token && value.user.user_access_token;
    })
  };



  createHeaders(headerData?:any):HttpHeaders{
    let headers = new HttpHeaders();
    let tokenData = {};
    if(this.X_AXIS_TOKEN)
      tokenData = {"user-access-token": this.X_AXIS_TOKEN};
    if(this.AUTH_TOKEN)
      tokenData = {...tokenData, "auth-token": this.AUTH_TOKEN};
      if(this.router.url.toString() === "/auth/login"){
        tokenData = {"Content-Type":"application/json"};
      
      }
    /*expanding header data*/
    headerData = {
      // "cross-domain": "true",
      // "api-key": "54asdkj1209nksnda",
      ...tokenData,
      ...headerData,
      // crossOrigin : true,
      // "auth-token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NzcsInJvbGUiOiJhdXRoIn0.diYtz23k19lqMGg5cqDKvSK4wO-TUPOMITN80plfU40",
      // "user-access-token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoidXNlciIsImlkIjoxfQ.ycXXJUTse-L_kpe0_RMk-DIgZkSL-57in4d9pqalO8c",
      "Content-Type":"application/json"
    };

    if(headerData)
    for(let key in headerData){{
      headers = headers.set(key, headerData[key]);; ``
    }}
    // headers = headers.set("content-type","application/x-www-form-urlencoded");
    return headers;
  }

  makeGetReq<T>(reqObj: {url:string, headerData?:any}): Observable<T>{
    let headers = this.createHeaders(reqObj.headerData);
    console.log('making get request');
    return this.httpClient.get<T>(reqObj.url, {headers: headers});
  }
  makePostReq<T>(reqObj: {url:string, body:any, headerData?:any}): Observable<T>{
    let headers = this.createHeaders(reqObj.headerData);
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
    return this.makeGetReq<IBotResult>({url, headerData})
      .do((botResult) => {
        
        let codeBasedBotList: IBot[] = [];
        let pipelineBasedBotList: IBot[] = [];

        botResult.objects.forEach((bot) => {
          bot.bot_type !== 'intelligent' ? codeBasedBotList.push(bot) : pipelineBasedBotList.push(bot);
        });
        this.store.dispatch(new SetPipeLineBasedBotListAction({botList: pipelineBasedBotList}));
        this.store.dispatch(new SetCodeBasedBotListAction({botList: codeBasedBotList}));
      });
  }
}
