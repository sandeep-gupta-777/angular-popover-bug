import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {ConstantsService} from './constants.service';
import {Select, Selector, Store} from '@ngxs/store';
import {IUser} from './core/interfaces/user';
import {IHeaderData} from '../interfaces/header-data';
import {IOverviewInfoResponse, IOverviewInfoPostBody} from '../interfaces/Analytics2/overview-info';
import {_throw} from 'rxjs/observable/throw';
import 'rxjs/add/operator/do';
import {UtilityService} from './utility.service';
import {
  SaveVersionInfoInBot,
  SetAllBotListAction,
  SetCodeBasedBotListAction,
  SetPipeLineBasedBotListAction,
  UpdateBotInfoByIdInBotInBotList
} from './core/view-bots/ngxs/view-bot.action';
import {IBot, IBotResult, IBotVersionResult} from './core/interfaces/IBot';
import {ActivatedRoute, Router} from '@angular/router';
import {SetAutoLogoutTime, SetMasterIntegrationsList, SetProgressValue} from './ngxs/app.action';
import {IIntegrationMasterListItem, IIntegrationOption} from '../interfaces/integration-option';
import {ICustomNerItem} from '../interfaces/custom-ners';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import {IConsumerDetails} from './chat/ngxs/chat.state';
import {EBotMessageMediaType, EChatFrame, IRoomData} from '../interfaces/chat-session-state';
import {
  AddMessagesToRoomByRoomId,
  AddNewRoom,
  ChangeFrameAction,
  ResetChatState,
  SetCurrentBotDetailsAndResetChatStateIfBotMismatch,
  SetCurrentRoomID, ToggleChatWindow
} from './chat/ngxs/chat.action';
import {b} from '@angular/core/src/render3';

declare var IMI: any;
declare var $: any;

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

  removeTokens() {
    this.X_AXIS_TOKEN = null;
    this.AUTH_TOKEN = null;
  }

  createHeaders(headerData?: any): HttpHeaders {
    let headers = new HttpHeaders();
    let tokenData: IHeaderData = {};
    tokenData = {'user-access-token': this.X_AXIS_TOKEN};
    tokenData = {...tokenData, 'auth-token': this.AUTH_TOKEN};
    tokenData = {...tokenData, 'content-type': 'application/json'};

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

  showErrorMessageForErrorTrue(errorObj: { 'error': true, 'message': string, 'transaction_id': string }) {
    this.utilityService.showErrorToaster(errorObj.message);
  }

  makeGetReq<T>(reqObj: { url: string, headerData?: any, noValidateUser?: boolean }): Observable<T> {
    if (!reqObj.noValidateUser && this.constantsService.isApiAccessDenied(reqObj.url)) {
      return throwError('api access not allowed');
    }
    let headers = this.createHeaders(reqObj.headerData);

    this.changeProgressBar(true, 0);
    return this.httpClient.get<T>(reqObj.url, {headers: headers})
    // .pipe((
    //   mergeMap((value:T) => value.error ? throwError(value) : of(value))
    // ))
      .map((value: any) => {
        if (value && value.error) {
          this.showErrorMessageForErrorTrue(value);
          return throwError(value);
        } else {
          return value;
        }
      })
      .do((value) => {
        this.changeProgressBar(false, 100);
        this.IncreaseAutoLogoutTime();
      })
      .catch((e: any, caught: Observable<T>) => {
        console.log(e);
        this.changeProgressBar(false, 100);

        this.utilityService.showErrorToaster(e);
        return _throw('error');
      });
  }

  makeGetReqToDownloadFiles(reqObj: { url: string, headerData?: any }) {
    let headers = this.createHeaders(reqObj.headerData);

    this.changeProgressBar(true, 0);
    return this.httpClient.get(reqObj.url, {headers: headers, responseType: 'text'})
      .do((value) => {
        this.changeProgressBar(false, 100);
        this.IncreaseAutoLogoutTime();
      })
      .catch((e: any) => {
        console.log(e);
        this.changeProgressBar(false, 100);

        this.utilityService.showErrorToaster(e);
        return _throw('error');
      });
  }

  makeDeleteReq<T>(reqObj: { url: string, headerData?: any }): Observable<T> {
    let headers = this.createHeaders(reqObj.headerData);

    this.changeProgressBar(true, 0);
    return this.httpClient.delete<T>(reqObj.url, {headers: headers})
      .do((value) => {
        this.changeProgressBar(false, 100);
        this.IncreaseAutoLogoutTime();
      })
      .catch((e: any, caught: Observable<T>) => {
        console.log(e);
        this.changeProgressBar(false, 100);

        this.utilityService.showErrorToaster(e);
        return _throw('error');
      });
  }

  makePostReq<T>(reqObj: { url: string, body: any, headerData?: any, dontShowProgressBar?: boolean }): Observable<T> {
    let headers = this.createHeaders(reqObj.headerData);
    if (!reqObj.dontShowProgressBar) {
      this.changeProgressBar(true, 0);
    }
    return this.httpClient.post<T>(reqObj.url, reqObj.body, {headers: headers})
      .map((value: any) => {
        if (value && value.error) {
          this.showErrorMessageForErrorTrue(value);
          return throwError(value);
        } else {
          return value;
        }
      })
      .do((value) => {
        this.IncreaseAutoLogoutTime();
        if (!reqObj.dontShowProgressBar)
          this.changeProgressBar(false, 100);
      })
      .catch((e: any, caught: Observable<T>) => {
        console.log(e);
        this.changeProgressBar(false, 100);
        this.utilityService.showErrorToaster(e);
        return _throw('error');
      });
  }

  makePutReq<T>(reqObj: { url: string, body: any, headerData?: IHeaderData }): Observable<T> {
    let headers = this.createHeaders(reqObj.headerData);
    this.changeProgressBar(true, 0);

    return this.httpClient.put<T>(reqObj.url, JSON.stringify(reqObj.body), {headers: headers})
      .do((value) => {
        this.IncreaseAutoLogoutTime();
        this.changeProgressBar(false, 100);
      })
      .catch((e: any, caught: Observable<T>) => {
        this.utilityService.showErrorToaster(e);
        this.changeProgressBar(false, 100);
        return _throw('error');
      });
  }


  fetchSpecificBotFromServerAndUpdateBotList(bot) {
    let getBotByTokenUrl = this.constantsService.getSpecificBotByBotTokenUrl();
    let headerData: IHeaderData = {
      'bot-access-token': bot.bot_access_token
    };
    this.makeGetReq<{ objects: IBot[] }>({url: getBotByTokenUrl, headerData})
      .subscribe((val) => {

        let bot: IBot = val.objects.find((bot) => {

          return bot.id === bot.id;
        });
        this.store.dispatch([
          new UpdateBotInfoByIdInBotInBotList({data: bot, botId: bot.id})
        ]);
      });
  }

  getOverviewInfo<T>(body: any): Observable<IOverviewInfoResponse> {
    let url = this.constantsService.getOverViewInfoUrl();
    return this.makePostReq<IOverviewInfoResponse>({url, body});
  }

  IncreaseAutoLogoutTime() {
    let autoLogoutInterval = 3600 * 1000;
    this.store.dispatch([
      new SetAutoLogoutTime({time: Date.now() + autoLogoutInterval})
    ]);
  }

  getNSetBotList(noValidateUser?) {
    let url = this.constantsService.getBotListUrl();
    let headerData: IHeaderData = {'content-type': 'application/json'};
    return this.makeGetReq<IBotResult>({url, headerData, noValidateUser})
      .do((botResult) => {
        // let codeBasedBotList: IBot[] = [];
        // let pipelineBasedBotList: IBot[] = [];

        // botResult.objects.forEach((bot) => {
        //   bot.bot_type !== 'genbot' ? codeBasedBotList.push(bot) : pipelineBasedBotList.push(bot);
        // });
        this.store.dispatch(new SetAllBotListAction({botList: botResult.objects}));
        // this.store.dispatch(new SetPipeLineBasedBotListAction({botList: pipelineBasedBotList}));
        // this.store.dispatch(new SetCodeBasedBotListAction({botList: codeBasedBotList}));
      });

  }

  getNSetChatPreviewBot(bot_unique_name: string, enterprise_unique_name: string) {
    // if (!this.currentBot || (this.currentBot && this.currentBot.bot_unique_name !== this.bot_unique_name)) {
    //   let enterprise_unique_name = this.activatedRoute.snapshot.queryParams['enterprise_unique_name'];//testingbot
    //   if (!this.bot_unique_name) return;
    let url = this.constantsService.getNSetChatPreviewBotUrl(bot_unique_name, enterprise_unique_name);
    this.makeGetReq({url, noValidateUser: true})
      .subscribe((bot: IBot) => {
        // this.user_first_name = bot.enterprise_name;
        // this.enterprise_logo = bot.enterprise_logo;
        // this.user_email =bot.enterprise_name;
        this.store.dispatch([
          new SetCurrentBotDetailsAndResetChatStateIfBotMismatch({bot}),
          // new ToggleChatWindow({open:true})
        ]);
      });
  }


  getNSetIntegrationList() {
    let url = this.constantsService.getMasterIntegrationsList();
    return this.makeGetReq<{ meta: any, objects: IIntegrationMasterListItem[] }>({url})
      .do((value) => {
        // this.store.dispatch(new SetPipeLineBasedBotListAction({botList: pipelineBasedBotList}));
        // this.store.dispatch(new SetCodeBasedBotListAction({botList: codeBasedBotList}));
      })
      .subscribe((value) => {
        this.store.dispatch([
          new SetMasterIntegrationsList({
            masterIntegrationList: value.objects
          })
        ]);
      });
  }

  changeProgressBar(loading: boolean, value: number) {
    this.store.dispatch([
      new SetProgressValue({
          progressbar: {
            loading: loading,
            value: value
          }
        }
      )
    ]);

  }

  updateOrSaveCustomNer(selectedOrNewRowData: ICustomNerItem, bot?: IBot) {
    let body: ICustomNerItem;
    let headerData: IHeaderData = {'bot-access-token': bot && bot.bot_access_token};
    let url, methodStr;
    if (selectedOrNewRowData && selectedOrNewRowData.id) {/*update customner*/
      url = this.constantsService.updateOrDeleteCustomBotNER(selectedOrNewRowData.id);
      methodStr = 'makePutReq';
      body = {
        values: selectedOrNewRowData.values,
        column_headers: selectedOrNewRowData.column_headers,
        ...selectedOrNewRowData
      };
    } else {/*create a new customner*/
      url = this.constantsService.createNewCustomBotNER();
      methodStr = 'makePostReq';
      body = selectedOrNewRowData;
    }
    return this[methodStr]({url, body, headerData});
  }

  deleteNer(ner_id: number, bot?: IBot) {
    let body: ICustomNerItem;
    let url, headerData: IHeaderData;
    if (bot) {
      url = this.constantsService.updateOrDeleteCustomBotNER(ner_id);
      headerData = {
        'bot-access-token': (bot && bot.bot_access_token) || null
      };
    } else {
      url = this.constantsService.updateOrDeleteEnterpriseNer(ner_id);
    }
    return this.makeDeleteReq({url, headerData});
  }

  getAllVersionOfBotFromServerAndStoreInBotInBotList(botId, bot_access_token) {
    let url = this.constantsService.getAllVersionsByBotId();
    // let botId = this.bot.id;
    this.makeGetReq<IBotVersionResult>({url, headerData: {'bot-access-token': bot_access_token}})
      .subscribe((botVersionResult) => {
        this.store.dispatch([
          new SaveVersionInfoInBot({data: botVersionResult.objects, botId: botId})
        ]);
      });
  }


  messaging;

  initializeIMIConnect() {
    var appId = 'IM20051444';
    var appSecret = 'aD69OwcY';
    // var streamName = "bot";
    var serviceKey = 'f6e50f7b-2bfd-11e8-bf0b-0213261164bb';
    var userId = '123456789sadasd';

    var config = new IMI.ICConfig(appId, appSecret);
    var messaging = IMI.ICMessaging.getInstance();


    let prepareMessage = (messageObj) => {
      this.store.dispatch([
        new AddMessagesToRoomByRoomId({
          id: this.currentRoom.id,
          messageList: [{
            sourceType: 'bot',
            time: '10:10AM',
            messageMediatype: EBotMessageMediaType.text,
            'text': messageObj.message,
          }]
        }),
        // new ChangeFrameAction({frameEnabled: EChatFrame.CHAT_BOX}),
        // new SetCurrentRoomID({id: 123456789.room.id})
      ]);
    };

    var msgCallBack = {//messaging.setICMessagingReceiver(msgCallBack);
      onConnectionStatusChanged: function (statuscode) {
        var statusMessage = null;
        if (statuscode == 2) {
          statusMessage = 'Connected';
        } else if (statuscode == 6) {
          statusMessage = 'Error while connecting';
        } else {
          statusMessage = 'Not Connected';
        }

      },
      onMessageReceived: function (message) {


        prepareMessage(message);

        if (message.getType() === IMI.ICMessageType.Message) {
          var callback = {
            onFailure: function (err) {
              console.log('failed to get topics:');

              //handleFailure(err);
            }
          };
          messaging.setMessageAsRead(message.getTransactionId(), callback);
        }
      }
    };


    messaging.setICMessagingReceiver(msgCallBack);
    var deviceId = IMI.ICDeviceProfile.getDefaultDeviceId();
    IMI.IMIconnect.startup(config);
    IMI.IMIconnect.registerListener(
      {
        onFailure: function () {
          console.log('token got expired...');
        }
      });


    var regcallback = {
      onSuccess: function (msg) {

        try {
          messaging.connect();
          console.log('onSuccess: reg');
        } catch (ex) {
          console.log(ex);
        }

      },
      onFailure: function (err) {
        console.log('Registration failed');

      }
    };
    var deviceProfile = new IMI.ICDeviceProfile(deviceId, userId);
    console.log('IMI.IMIconnect.isRegistered()' + IMI.IMIconnect.isRegistered());
    IMI.IMIconnect.register(deviceProfile, regcallback);


// //send message
//     var pubcallback = {
//       onSuccess: function () {
//         console.log("message sent");
//
//       },
//       onFailure: function (errormsg) {
//         console.log("failed to send message");
//       }
//
//     };
//
//     var message = new IMI.ICMessage();
//     message.setMessage("Hello this is sample message");
//
//     var thread = new IMI.ICThread();
//     thread.setId("bot");
//     thread.setTitle("bot");
//     thread.setStreamName(streamName);
//
//     message.setThread(thread);
//     messaging.publishMessage(message, pubcallback);

    this.messaging = messaging;
  }

  currentRoom: IRoomData;

  sendHumanMessageViaImiConnect(currentRoom, messageByHuman: string) {

    var streamName = 'bot';
    this.currentRoom = currentRoom;
//send message
    var pubcallback = {
      onSuccess: function () {
        console.log('message sent');

      },
      onFailure: function (errormsg) {
        console.log('failed to send message');
      }

    };

    var message = new IMI.ICMessage();
    message.setMessage(messageByHuman);

    var thread = new IMI.ICThread();
    thread.setId('bot');
    thread.setTitle('bot');
    thread.setStreamName(streamName);

    message.setThread(thread);
    this.messaging.publishMessage(message, pubcallback);
  }


  startANewChatUsingSendApi(startNewChatData: { consumerDetails: IConsumerDetails, bot: IBot }) {
    let url = this.constantsService.getStartNewChatLoginUrl();
    let headerData: IHeaderData = {
      'bot-access-token': startNewChatData.bot.bot_access_token,
      'auth-token': null,
      'user-access-token': null,
      'content-type': 'application/json'
    };
    let body /*: ISendApiRequestPayload */ = {
      'type': 'bot',
      'msg': 'hi',
      'platform': 'web',
      // 'consumer': {
      //   'uid': this.current_uid,
      // },
      'consumer': startNewChatData.consumerDetails
    };

    return this.makePostReq({url, body, headerData});
  }

}
