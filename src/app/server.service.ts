import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConstantsService} from './constants.service';
import {Select, Selector, Store} from '@ngxs/store';
import {IUser} from './core/interfaces/user';
import {IHeaderData} from '../interfaces/header-data';
import {IOverviewInfoResponse, IOverviewInfoPostBody} from '../interfaces/Analytics2/overview-info';
import {_throw} from 'rxjs/observable/throw';
import 'rxjs/add/operator/do';
import {ToastrService} from 'ngx-toastr';
import {UtilityService} from './utility.service';
import {SetCodeBasedBotListAction, SetPipeLineBasedBotListAction} from './core/view-bots/ngxs/view-bot.action';
import {IBot, IBotResult} from './core/interfaces/IBot';
import {ActivatedRoute, Router} from '../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  @Select() loggeduser$: Observable<{ user: IUser }>;
  private X_AXIS_TOKEN: string = null;
  private AUTH_TOKEN: string = null;
  private isLoggedIn: boolean = false;


  constructor(
    private httpClient: HttpClient,
    private utilityService: UtilityService,
    private store: Store,
    private router: Router,
    private constantsService: ConstantsService) {
    this.loggeduser$.subscribe((value) => {
      if (!value || !value.user) return;
      this.AUTH_TOKEN = value.user.auth_token && value.user.auth_token;
      this.X_AXIS_TOKEN = value.user.user_access_token && value.user.user_access_token;
    });
  };

  removeTokens(){
    this.X_AXIS_TOKEN = null;
    this.AUTH_TOKEN = null;
  }

  createHeaders(headerData?: any): HttpHeaders {
    let headers = new HttpHeaders();
    let tokenData = {};
    tokenData = {'user-access-token': this.X_AXIS_TOKEN};
    tokenData = {...tokenData, 'auth-token': this.AUTH_TOKEN};
    tokenData = {...tokenData, 'Content-Type': 'application/json'};

    headerData = {
      ...tokenData,
      ...headerData,
    };

    if (headerData)
      for (let key in headerData) {
        /*don't set header data for undefined values*/
        headerData[key] && (headers = headers.set(key, headerData[key]));
      }
    return headers;
  }

  makeGetReq<T>(reqObj: { url: string, headerData?: any }): Observable<T> {
    let headers = this.createHeaders(reqObj.headerData);
    return this.httpClient.get<T>(reqObj.url, {headers: headers})
      .catch((e: any, caught: Observable<T>) => {
        console.log(e);
        console.log(caught);
        this.utilityService.showErrorToaster(e);
        return _throw('error');
      });
  }

  makePostReq<T>(reqObj: { url: string, body: any, headerData?: any }): Observable<T> {
    let headers = this.createHeaders(reqObj.headerData);
    return this.httpClient.post<T>(reqObj.url, reqObj.body, {headers: headers})
      .catch((e: any, caught: Observable<T>) => {
        console.log(e);
        console.log(caught);
        this.utilityService.showErrorToaster(e);
        return _throw('error');
      });
  }

  makePutReq<T>(reqObj: { url: string, body: any, headerData?: IHeaderData }): Observable<T> {
    let headers = this.createHeaders(reqObj.headerData);
    console.log('making post request');
    return this.httpClient.put<T>(reqObj.url, JSON.stringify(reqObj.body), {headers: headers})
      .catch((e: any, caught: Observable<T>) => {
        console.log(e);
        console.log(caught);
        this.utilityService.showErrorToaster(e);
        return _throw('error');
      });
  }

  getOverviewInfo<T>(body: any): Observable<IOverviewInfoResponse> {
    console.log('getting overview info');
    let url = this.constantsService.getOverViewInfoUrl();
    return this.makePostReq<IOverviewInfoResponse>({url, body});
  }

  getNSetBotList() {
    let url = this.constantsService.getPipelinebasedBotListUrl();
    let headerData: IHeaderData = {'content-type': 'application/json'};
    return this.makeGetReq<IBotResult>({url, headerData})
      .do((botResult) => {
        let codeBasedBotList: IBot[] = [];
        let pipelineBasedBotList: IBot[] = [];

        botResult.objects.forEach((bot) => {
          bot.bot_type !== 'genbot' ? codeBasedBotList.push(bot) : pipelineBasedBotList.push(bot);
        });
        this.store.dispatch(new SetPipeLineBasedBotListAction({botList: pipelineBasedBotList}));
        this.store.dispatch(new SetCodeBasedBotListAction({botList: codeBasedBotList}));
      });
  }
}
