import {catchError, map, tap} from 'rxjs/operators';
import {Injectable, isDevMode} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, throwError, throwError as _throw} from 'rxjs';
import {ConstantsService} from './constants.service';
import {Select, Store} from '@ngxs/store';
import {IUser} from './core/interfaces/user';
import {IHeaderData} from '../interfaces/header-data';
import {IOverviewInfoResponse} from '../interfaces/Analytics2/overview-info';

import {UtilityService} from './utility.service';
import {SaveVersionInfoInBot, SetAllBotListAction, UpdateBotInfoByIdInBotInBotList} from './core/view-bots/ngxs/view-bot.action';
import {IBot, IBotResult, IBotVersionResult} from './core/interfaces/IBot';
import {Router} from '@angular/router';
import {
  SetAutoLogoutTime,
  SetBackendURlRoot,
  SetMasterIntegrationsList,
  SetMasterProfilePermissions,
  SetPipelineItemsV2
} from './ngxs/app.action';
import {IIntegrationMasterListItem} from '../interfaces/integration-option';
import {ICustomNerItem} from '../interfaces/custom-ners';


import {IConsumerDetails} from './chat/ngxs/chat.state';
import {IMessageData, IRoomData} from '../interfaces/chat-session-state';
import {
  AddMessagesToRoomByRoomId,
  ChangeBotIsThinkingDisplayByRoomId,
  SetCurrentBotDetailsAndResetChatStateIfBotMismatch
} from './chat/ngxs/chat.action';
import {IGeneratedMessageItem} from '../interfaces/send-api-request-payload';
import {IProfilePermission} from '../interfaces/profile-action-permission';
import {EHttpVerbs, PermissionService} from './permission.service';
import {LoggingService} from './logging.service';
import {EventService} from './event.service';
import {IPipelineItemV2} from './core/buildbot/build-code-based-bot/architecture/pipeline/pipeline.component';
import {IAppState} from './ngxs/app.state';
import {take} from 'rxjs/internal/operators';
import {IRoleInfo} from '../interfaces/role-info';

declare var IMI: any;
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  @Select() loggeduser$: Observable<{ user: IUser }>;
  @Select() app$: Observable<IAppState>;
  public X_AXIS_TOKEN: string = null;
  roleName:string;
  public AUTH_TOKEN: string = null;
  private isLoggedIn = false;
  roleInfo:IRoleInfo;

  constructor(
    private httpClient: HttpClient,
    private utilityService: UtilityService,
    private store: Store,
    private router: Router,
    private permissionService: PermissionService,
    private constantsService: ConstantsService) {
    this.loggeduser$.subscribe((value) => {
      if (!value || !value.user) {
        return;
      }
      this.AUTH_TOKEN = value.user.auth_token && value.user.auth_token;
      this.X_AXIS_TOKEN = value.user.user_access_token && value.user.user_access_token;
      this.roleName = value.user.role.name;
      this.app$.pipe(take(1)).subscribe((appState)=>{
        if(!this.roleInfo && appState.roleInfoArr)
        this.roleInfo = appState.roleInfoArr.find((role)=>{
          return role.name === value.user.role.name
        });
      })
    });

    this.app$.subscribe((appState)=>{/*todo: code repetition: this code should run after logged value has been set*/
      if(this.roleName)
      if(appState.roleInfoArr)
        this.roleInfo = appState.roleInfoArr.find((role)=>{
          return role.name === this.roleName;
        });
    })


  }

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

    if (headerData) {
      for (const key in headerData) {
        /*don't set header data for undefined values*/
        headerData[key] && (headers = headers.set(key, headerData[key]));
      }
    }
    return headers;
  }

  showErrorMessageForErrorTrue({error, message}) {
    this.utilityService.showErrorToaster(message);
  }

  makeGetReq<T>(reqObj: { url: string, headerData?: any, noValidateUser?: boolean }): Observable<any> {
    const isApiAccessDenied = this.permissionService.isApiAccessDenied(reqObj.url, EHttpVerbs.GET);
    if (!reqObj.noValidateUser && isApiAccessDenied) {
      console.log(`api access not allowed:${reqObj.url}`);
      // return throwError(`api access not allowed:${reqObj.url}`);
      return of(null);
    }
    const headers = this.createHeaders(reqObj.headerData);

    this.changeProgressBar(true, 0);
    return this.httpClient.get<T>(reqObj.url, {headers: headers}).pipe(
      map((value: any) => {
        if (value && value.error) {
          this.showErrorMessageForErrorTrue(value);
          return throwError(value);
        } else {
          return value;
        }
      }),
      tap((value) => {
        this.changeProgressBar(false, 100);
        this.increaseAutoLogoutTime();
      }),
      catchError((e: any, caught: Observable<T>) => {
        return this.handleErrorFromServer(e);
      }),);
  }

  handleErrorFromServer(e) {

    if(e.error && (e.error.error === true)){
      this.showErrorMessageForErrorTrue(e.error);
    }else {
      this.showErrorMessageForErrorTrue({error: true, message:"Some error occurred"});
    }
    // let arg = (e.error && e.error.error) ? e.error : e;
    // this.showErrorMessageForErrorTrue(arg);
    this.changeProgressBar(false, 100);
    if (isDevMode()) {
      LoggingService.error(e);
      // this.utilityService.showErrorToaster(e);
    }
    return _throw(e);
  }

  makeGetReqToDownloadFiles(reqObj: { url: string, headerData?: any, noValidateUser?: boolean }) {
    this.checkApiAccess(reqObj, EHttpVerbs.GET);
    const headers = this.createHeaders(reqObj.headerData);

    this.changeProgressBar(true, 0);
    return this.httpClient.get(reqObj.url, {headers: headers, responseType: 'text'}).pipe(
      map((value: any) => {
        return this.checkForErrorTrue(value);
      }),
      tap((value) => {
        this.changeProgressBar(false, 100);
        this.increaseAutoLogoutTime();
      }),
      catchError((e: any) => {
        return this.handleErrorFromServer(e);
      }),);
  }

  checkApiAccess(reqObj, verb:EHttpVerbs){
    const isApiAccessDenied = this.permissionService.isApiAccessDenied(reqObj.url, verb);
    if (!reqObj.noValidateUser && isApiAccessDenied) {
      console.log(`api access not allowed:${reqObj.url}`);
      return throwError(`api access not allowed:${reqObj.url}`);
    }
  }

  makeDeleteReq<T>(reqObj: { url: string, headerData?: any, noValidateUser?: boolean }): Observable<any> {
    this.checkApiAccess(reqObj, EHttpVerbs.DELETE);
    const headers = this.createHeaders(reqObj.headerData);
    this.changeProgressBar(true, 0);
    return this.httpClient.delete<T>(reqObj.url, {headers: headers}).pipe(
      map((value: any) => {
        return this.checkForErrorTrue(value);
      }),
      tap((value) => {
        this.changeProgressBar(false, 100);
        this.increaseAutoLogoutTime();
      }),
      catchError((e: any, caught: Observable<T>) => {
        return this.handleErrorFromServer(e);
      }),);
  }

  makePostReq<T>(reqObj: { url: string, body: any, headerData?: any, dontShowProgressBar?: boolean, noValidateUser?: boolean }): Observable<any> {
    this.checkApiAccess(reqObj, EHttpVerbs.POST);
    const headers = this.createHeaders(reqObj.headerData);
    if (!reqObj.dontShowProgressBar) {
      this.changeProgressBar(true, 0);
    }
    return this.httpClient.post<T>(reqObj.url, reqObj.body, {headers: headers}).pipe(
      map((value: any) => {
        return this.checkForErrorTrue(value);
      }),
      tap((value) => {
        this.increaseAutoLogoutTime();
        if (!reqObj.dontShowProgressBar) {
          this.changeProgressBar(false, 100);
        }
      }),
      catchError((e: any, caught: Observable<T>) => {
        return this.handleErrorFromServer(e);
      }),);
  }

  makePutReq<T>(reqObj: { url: string, body: any, headerData?: IHeaderData }): Observable<any> {

    this.checkApiAccess(reqObj, EHttpVerbs.PUT);
    const headers = this.createHeaders(reqObj.headerData);
    this.changeProgressBar(true, 0);

    return this.httpClient.put<T>(reqObj.url, JSON.stringify(reqObj.body), {headers: headers}).pipe(
      map((value: any) => {
        return this.checkForErrorTrue(value);
      }),
      tap((value) => {
        this.increaseAutoLogoutTime();
        this.changeProgressBar(false, 100);
      }),
      catchError((e: any, caught: Observable<T>) => {
        return this.handleErrorFromServer(e);
      }));
  }


  checkForErrorTrue(value){
    if (value && value.error === true) {
      throw new Error(value.message);
    } else {
      return value;
    }
  }

  fetchSpecificBotFromServerAndUpdateBotList(bot) {
    const getBotByTokenUrl = this.constantsService.getSpecificBotByBotTokenUrl();
    const headerData: IHeaderData = {
      'bot-access-token': bot.bot_access_token
    };
    return this.makeGetReq<{ objects: IBot[] }>({url: getBotByTokenUrl, headerData}).pipe(
      map((val) => {

        const bot: IBot = val.objects.find((bot) => {

          return bot.id === bot.id;
        });
        return this.store.dispatch([
          new UpdateBotInfoByIdInBotInBotList({data: bot, botId: bot.id})
        ]);
      }));
  }

  getOverviewInfo<T>(body: any): Observable<IOverviewInfoResponse> {
    const url = this.constantsService.getOverViewInfoUrl();
    return this.makePostReq<IOverviewInfoResponse>({url, body});
  }

  increaseAutoLogoutTime() {
    const autoLogoutInterval = (this.roleInfo && this.roleInfo.session_expiry_time*1000) || 3600 * 1000; //3600*1000
    if(!this.roleInfo){
      // console.log("increaseAutoLogoutTime: ROLE IS NOT FOUND=====================")
    }
    this.store.dispatch([
      new SetAutoLogoutTime({time: (Date.now() + autoLogoutInterval)})
    ]);
  }

  getNSetBotList(noValidateUser?) {
    const url = this.constantsService.getBotListUrl();
    const headerData: IHeaderData = {'content-type': 'application/json'};
    return this.makeGetReq<IBotResult>({url, headerData, noValidateUser}).pipe(
      tap((botResult) => {
        // let codeBasedBotList: IBot[] = [];
        // let pipelineBasedBotList: IBot[] = [];

        // botResult.objects.forEach((bot) => {
        //   bot.bot_type !== 'genbot' ? codeBasedBotList.push(bot) : pipelineBasedBotList.push(bot);
        // });
        this.store.dispatch(new SetAllBotListAction({botList: botResult.objects}));
        // this.store.dispatch(new SetPipeLineBasedBotListAction({botList: pipelineBasedBotList}));
        // this.store.dispatch(new SetCodeBasedBotListAction({botList: codeBasedBotList}));
      }));

  }

  getNSetChatPreviewBot(bot_unique_name: string, enterprise_unique_name: string) {
    // if (!this.currentBot || (this.currentBot && this.currentBot.bot_unique_name !== this.bot_unique_name)) {
    //   let enterprise_unique_name = this.activatedRoute.snapshot.queryParams['enterprise_unique_name'];//testingbot
    //   if (!this.bot_unique_name) return;
    const url = this.constantsService.getNSetChatPreviewBotUrl(bot_unique_name, enterprise_unique_name);
    this.makeGetReq({url, noValidateUser: true})
      .subscribe((bot: IBot) => {
        // this.user_first_name = bot.enterprise_name;
        // this.enterprise_logo = bot.enterprise_logo;
        // this.user_email =bot.enterprise_name;
        debugger
        this.store.dispatch([
          new SetCurrentBotDetailsAndResetChatStateIfBotMismatch({bot}),
          // new SetEnterpriseInfoAction({enterpriseInfo:{logo:bot.logo}})
          // new ToggleChatWindow({open:true})
        ]);
      });
  }


  getNSetPipelineModuleV2() {

    const url = this.constantsService.getPipelineModuleV2();
    return this.makeGetReq<{ meta: any, objects: IPipelineItemV2[] }>({url})
      .pipe(tap((value) => {
        if(value){
          this.store.dispatch([
            new SetPipelineItemsV2({
              data: value.objects
            })
          ]);
        }
      }));
  }

  getNSetIntegrationList() {
    const url = this.constantsService.getMasterIntegrationsList();
    return this.makeGetReq<{ meta: any, objects: IIntegrationMasterListItem[] }>({url}).pipe(
      tap((value) => {
        // this.store.dispatch(new SetPipeLineBasedBotListAction({botList: pipelineBasedBotList}));
        // this.store.dispatch(new SetCodeBasedBotListAction({botList: codeBasedBotList}));
      }))
      .pipe(map((value) => {
        this.store.dispatch([
          new SetMasterIntegrationsList({
            masterIntegrationList: value.objects
          })
        ]);
      }));
  }

  changeProgressBar(loading: boolean, value: number) {
    // this.store.dispatch([
    //   new SetProgressValue({
    //     progressbar: {
    //       loading: loading,
    //       value: value
    //     }
    //   }
    //   )
    // ]);
    // this.
    EventService.progressBar$.emit({loading: loading, value: value});

  }

  updateOrSaveCustomNer(selectedOrNewRowData: ICustomNerItem, bot?: IBot) {
    let body: ICustomNerItem;
    const headerData: IHeaderData = {'bot-access-token': bot && bot.bot_access_token};
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

    const url = this.constantsService.getAllVersionsByBotId();
    // let botId = this.bot.id;
    this.makeGetReq<IBotVersionResult>({url, headerData: {'bot-access-token': bot_access_token}})
      .subscribe((botVersionResult) => {
        botVersionResult.objects.forEach((version) => {
          version.changed_fields = {
            'df_template': false,
            'df_rules': false,
            'generation_rules': false,
            'generation_template': false,
            'workflows': false
          };
          version.validation = {
            'df_template': {error: false},
            'df_rules': {error: false},
            'generation_rules': {error: false},
            'generation_templates': {error: false},
            'workflow': {error: false},
          };
        });

        this.store.dispatch([
          new SaveVersionInfoInBot({data: botVersionResult.objects, botId: botId})
        ]);
      });
  }


  messaging;

  currentPreviewBot: IBot;
  currentRoomId: number;

  initializeIMIConnect(previewBot: IBot, currentRoomId: number) {
    if (this.currentRoomId === currentRoomId && this.currentPreviewBot === previewBot) {
      return;
    } else {
      try {
        IMI.IMIconnect.shutdown();
      } catch (e) {
        LoggingService.error(e);
      }

    }
    this.currentRoomId = currentRoomId;
    this.currentPreviewBot = previewBot;

    // this.currentPreviewBot = previewBot;
    /*TODO: make initialization happen only once*/
    let imiConnectIntegrationDetails;
    try {
      imiConnectIntegrationDetails = previewBot.integrations.fulfillment_provider_details.imiconnect;
      if (!imiConnectIntegrationDetails.enabled || !imiConnectIntegrationDetails.send_via_connect) {
        LoggingService.log('this is not an imiconnect bot...');
        return;
      }
    } catch (e) {
      LoggingService.log('this is not an imiconnect bot');
      return;
    }
    const appId = imiConnectIntegrationDetails.appId; //'GS23064017';
    const appSecret = imiConnectIntegrationDetails.appSecret; //'uZi6B5Zg';
    // var streamName = "bot";
    const serviceKey = imiConnectIntegrationDetails.serviceKey; //'3b8f6470-5e56-11e8-bf0b-0213261164bb';//'f6e50f7b-2bfd-11e8-bf0b-0213261164bb';
    const userId = currentRoomId + '_hellothisissandeep1231312';

    const config = new IMI.ICConfig(appId, appSecret);
    const messaging = IMI.ICMessaging.getInstance();

    console.info('========initializing connection with imiconnect with following details');
    LoggingService.log(
      'appId= ' + appId + '\n' +
      'appSecret= ' + appSecret + '\n' +
      'serviceKey= ' + serviceKey + '\n' +
      'userId= ' + userId + '\n');


    const prepareMessage = (messageObj) => {
      console.info('============================message from IMICONNECT Has been recieved============================', messageObj);
      const generatedMessagesStr = messageObj.message;
      let generatedMessages: IGeneratedMessageItem[];
      try {
        generatedMessages = JSON.parse(generatedMessagesStr);
      } catch (e) {
        console.error('Unable to parse json from IMIConnect callback', generatedMessagesStr);
        console.error('Assuming its a string');
        generatedMessages = [{text: generatedMessagesStr, bot_message_id: null}];
      }
      const serializedMessages: IMessageData[] = this.utilityService.serializeGeneratedMessagesToPreviewMessages(generatedMessages, null);
      this.store.dispatch([
        new AddMessagesToRoomByRoomId({
          id: currentRoomId,
          messageList: serializedMessages
        }),
        new ChangeBotIsThinkingDisplayByRoomId({roomId: currentRoomId, shouldShowBotIsThinking: false}),
        // new SetCurrentRoomID({id: 123456789.room.id})
      ]);
    };

    const msgCallBack = {//messaging.setICMessagingReceiver(msgCallBack);
      onConnectionStatusChanged: function (statuscode) {
        LoggingService.log('msgCallBack,onConnectionStatusChanged', statuscode);
        let statusMessage = null;
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
          const callback = {
            onFailure: function (err) {
              LoggingService.log('failed to get topics:');

              //handleFailure(err);
            }
          };
          messaging.setMessageAsRead(message.getTransactionId(), callback);
        }
      }
    };


    messaging.setICMessagingReceiver(msgCallBack);
    const deviceId = IMI.ICDeviceProfile.getDefaultDeviceId();
    IMI.IMIconnect.startup(config);
    IMI.IMIconnect.registerListener(
      {
        onFailure: function () {
          LoggingService.log('token got expired...');
        }
      });


    const regcallback = {
      onSuccess: function (msg) {

        try {
          messaging.connect();
          LoggingService.log('onSuccess: reg');
        } catch (ex) {
          LoggingService.log(ex);
        }

      },
      onFailure: function (err) {
        LoggingService.log('Registration failed');

      }
    };
    const deviceProfile = new IMI.ICDeviceProfile(deviceId, userId);
    LoggingService.log('IMI.IMIconnect.isRegistered()' + IMI.IMIconnect.isRegistered());
    IMI.IMIconnect.register(deviceProfile, regcallback);


    // //send message
    //     var pubcallback = {
    //       onSuccess: function () {
    //         LoggingService.log("message sent");
    //
    //       },
    //       onFailure: function (errormsg) {
    //         LoggingService.log("failed to send message");
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


  getNSetConfigData$() {
    return this.makeGetReq({url: '/static/config.json', noValidateUser: true})
      .pipe(tap(((value: { 'backend_url': string, 'version': string }) => {
        this.store.dispatch([
          new SetBackendURlRoot({url: value.backend_url})
        ]);
      })));
  }

  currentRoom: IRoomData;

  sendHumanMessageViaImiConnect(currentRoom, currentBot: IBot, messageByHuman: string) {

    let streamName: string; //'gsureg';
    try {
      streamName = currentBot.integrations.fulfillment_provider_details.imiconnect.streamName;
    } catch (e) {
      LoggingService.log(e);
    }
    // this.currentRoom = currentRoom;
    //send message
    const pubcallback = {
      onSuccess: function () {
        LoggingService.log('message sent');

      },
      onFailure: function (errormsg) {
        LoggingService.log('failed to send message');
      }

    };

    const message = new IMI.ICMessage();
    message.setMessage(messageByHuman);

    const thread = new IMI.ICThread();
    thread.setId('bot');
    thread.setTitle('bot');
    thread.setStreamName(streamName);

    message.setThread(thread);
    this.messaging.publishMessage(message, pubcallback);
  }


  startANewChatUsingSendApi(startNewChatData: { consumerDetails: IConsumerDetails, bot: IBot }) {
    const url = this.constantsService.getStartNewChatLoginUrl();
    const headerData: IHeaderData = {
      'bot-access-token': startNewChatData.bot.bot_access_token,
      'auth-token': null,
      'user-access-token': null,
      'content-type': 'application/json'
    };
    const body /*: ISendApiRequestPayload */ = {
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

  getNSetMasterPermissionsList() {

    const allActionsUrl = this.constantsService.getAllActionsUrl();
    return this.makeGetReq<{ meta: any, objects: IProfilePermission[] }>({url: allActionsUrl}).pipe(
      map((value: { objects: IProfilePermission[] }) => {
        this.store.dispatch([
          new SetMasterProfilePermissions({masterProfilePermissions: value.objects})
        ]);
        // this.constantsService.setPermissionsDeniedMap(value.objects)
      }));
  }

}
