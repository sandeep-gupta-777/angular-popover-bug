import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BotConfigComponent} from '../../buildbot/build-code-based-bot/bot-config/bot-config.component';
import {IBot} from '../../interfaces/IBot';
import {Observable, Subscription} from 'rxjs';
import {NgForm} from '@angular/forms';
import {ConstantsService} from '../../../constants.service';

import {Select, Store} from '@ngxs/store';
import {
  SetAnalysis2HeaderData,
  SetOverviewInfoData,
  SetChannelWiseFlowsPerSession,
  SetUserAcquisition,
  SetTotalMessages,
  SetUserLoyalty,
  SetChannelWiseAverageSessionTime,
  SetTotalFlows,
  SetFlowsPerRoom,
  SetTotalRooms,
  SetRoomDuration,
  SetChannelWiseSessions,
  SetChannelWiseUsers,
  ResetAnalytics2GraphData, SetUsagetrackingInfo,  ResetAnalytics2HeaderData, TotalSessions, SetSessionsperuser, SetMessagespersession, SetTimepersession, SetTotalTimeOfRooms, SetTopgenerationtemplates
} from '../ngxs/analysis.action';
import {IOverviewInfoResponse} from '../../../../interfaces/Analytics2/overview-info';
import {ServerService} from '../../../server.service';
import {EBotType, UtilityService} from '../../../utility.service';
import {IUser} from '../../interfaces/user';
import {AnalysisStateReducer2} from '../ngxs/analysis.state';
import {EAnalysis2TypesEnum} from '../../../../interfaces/Analytics2/analysis2-types';
import {IAnalysis2HeaderData} from '../../../../interfaces/Analytics2/analytics2-header';
import {IAuthState} from '../../../auth/ngxs/auth.state';
import {IChannelWiseFlowsPerSessionResponseBody} from '../../../../interfaces/Analytics2/volume-sessions';
import {IUserAcquisitionResponseBody} from '../../../../interfaces/Analytics2/volume-users';
import {ITotalMessagesResponseBody} from '../../../../interfaces/Analytics2/volume-messages';
import {IAverageRoomTimeResponseBody} from '../../../../interfaces/Analytics2/volume-time';
import {IUserLoyaltyResponseBody} from '../../../../interfaces/Analytics2/engagement-userLoyalty';
import {IChannelWiseAverageSessionTimeResponseBody} from '../../../../interfaces/Analytics2/engagement-averageSessionTime';
import {ITotalFlowsResponseBody} from '../../../../interfaces/Analytics2/performance-flows';
import {IFlowsPerRoomResponseBody} from '../../../../interfaces/Analytics2/performance-flowsPerRoom';
import {ITotalRoomsResponseBody} from '../../../../interfaces/Analytics2/performance-totalRooms';
import {IRoomDurationResponseBody} from '../../../../interfaces/Analytics2/performance-roomDuration';
import {IChannelWiseSessionsResponseBody} from '../../../../interfaces/Analytics2/engagement-channelWiseSessions';
import {IChannelWiseUsersResponseBody} from '../../../../interfaces/Analytics2/engagement-channelWiseUsers';
import {ActivatedRoute, Router} from '@angular/router';
import {ELogType, LoggingService} from '../../../logging.service';
import {debounceTime, take} from 'rxjs/operators';

@Component({
  selector: 'app-analysis2-header',
  templateUrl: './analysis2-header.component.html',
  styleUrls: ['./analysis2-header.component.scss']
})
export class Analysis2HeaderComponent implements OnInit, AfterViewInit, OnDestroy {

  _allbotList: IBot[];
  codebasedBotList: IBot[] = [];
  // selectedBot: IBot;
  formChangesSub: Subscription;
  storeSub: Subscription;
  loggeduserSub: Subscription;
  analytics2HeaderDataSub: Subscription;
  makeGetReqSub: Subscription;
  maxDate = new Date();

  @Input() set allbotList(_allbotList: IBot[]) {
    if (!_allbotList) {
      return;
    }
    this._allbotList = _allbotList;
    this.codebasedBotList = this._allbotList.filter((bot) => bot.bot_type === EBotType.chatbot);
    if (this.f && _allbotList && _allbotList.length > 0) {
      this.f.form.patchValue({botId: this._allbotList[0].id, platform: this.channelList[0].name});
    }
  }

  granularityList = [
    {value:'hour', displayValue: 'Hourly'},
    {value:'day', displayValue: 'Daily'},
    {value:'month', displayValue: 'Monthly'},
    {value:'year', displayValue: 'Yearly'}
  ];
  //startdate = new Date(new Date().setDate(new Date().getDate() - 30));
  //   enddate = new Date();
  date = {
    begin: new Date(new Date().setDate(new Date().getDate() - 30)),
    end: new Date()
  };

  @ViewChild('form') f: NgForm;
  @Select(AnalysisStateReducer2.getAnalytics2HeaderData) analytics2HeaderData$: Observable<IAnalysis2HeaderData>;
  @Select() loggeduser$: Observable<{ user: IUser }>;
  startdate = new Date(new Date().setDate(new Date().getDate() - 30));
  enddate = new Date();
  granularity = 'day';
  datePickerConfig: Partial<any> = this.constantsService.DATE_PICKER_CONFIG;
  channelList = this.constantsService.CHANNEL_LIST;
  loggeduser: IAuthState;
  analytics2HeaderData;
  errorMessage: string = null;

  constructor(
    private store: Store,
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private utilityService: UtilityService
  ) {
  }

  formData;

  ngOnInit() {
    /*
    * form contains the header data, Whenever form changes,
    * update the header data in store
    * */
    this.formChangesSub = this.f.form.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((formData) => {
        if (this.utilityService.areTwoJSObjectSame(this.formData, formData)) {
          return;
        }
        this.formData = formData;
        if (!this.f.valid) return;
        const selectedBot: IBot = this._allbotList.find((bot) => bot.id === Number(this.f.value.botId));
        const analysisHeaderData: any /*: TODO: IAnalysis2HeaderData*/ = {
          'bot-access-token': selectedBot.bot_access_token,
          platform: 'web',
          ...formData,
          startdate: formData && formData.date_range.begin,
          enddate: formData && formData.date_range.end
        };
        this.store.dispatch([new ResetAnalytics2GraphData()])
          .subscribe(() => {
            this.store.dispatch([
              new SetAnalysis2HeaderData({analysisHeaderData})
            ]);
          });
      });
    //
    /*
    *Whenever the header data changes, make get request for analytics data
    * and when analytics data arrives, save in store again its "type"
    * */
    this.loggeduserSub = this.loggeduser$.subscribe((loggeduser) => {
      this.loggeduser = loggeduser;
    });

    this.analytics2HeaderDataSub = this.analytics2HeaderData$.subscribe((analytics2HeaderData:any) => {
      /*move this code to dedicated service*/
      try {
        this.f.form.patchValue(analytics2HeaderData);
        const url = this.constantsService.getAnalyticsUrl();
        const headerData: any/*IAnalysis2HeaderData*/ = {
          ...analytics2HeaderData,
          'auth-token': this.loggeduser.user.auth_token,
          'user-access-token': this.loggeduser.user.user_access_token,
          startdate: this.utilityService.convertDateObjectStringToDDMMYY(analytics2HeaderData.startdate),
          enddate: this.utilityService.convertDateObjectStringToDDMMYY(analytics2HeaderData.enddate),
        };
        //asdas
        if (!this.utilityService.areAllValesDefined(headerData)) {
          return;
        }
        if (this.utilityService.areTwoJSObjectSame(this.analytics2HeaderData, analytics2HeaderData)) {
          return;
        }
        this.store.dispatch([new ResetAnalytics2GraphData()])
          .pipe(debounceTime(1000))
          .subscribe(() => {
            const isHeaderValid = this.isHeaderValid(analytics2HeaderData.startdate, analytics2HeaderData.enddate, analytics2HeaderData.granularity);
            if (!isHeaderValid) {
              return;
            }
            this.analytics2HeaderData = analytics2HeaderData;

            this.store.dispatch([new ResetAnalytics2GraphData()]);
            // this.makeGetReqSub && this.makeGetReqSub.unsubscribe();//todo: better use .
            this.makeGetReqSub = this.serverService.makeGetReq({url, headerData})
              .pipe(take(1))
              .subscribe((response: any) => {
                if (headerData.type === EAnalysis2TypesEnum.overviewinfo) {
                  const responseCopy: IOverviewInfoResponse = response;
                  this.store.dispatch(new SetOverviewInfoData({data: responseCopy.objects[0].output}));
                }
                if (headerData.type === EAnalysis2TypesEnum.channelWiseFlowsPerSession) {
                  const responseCopy: IChannelWiseFlowsPerSessionResponseBody = response;
                  this.store.dispatch(new SetChannelWiseFlowsPerSession({data: responseCopy.objects[0].output.channelWiseFlowsPerSession}));
                }
                if (headerData.type === EAnalysis2TypesEnum.userAcquisition) {
                  const responseCopy: IUserAcquisitionResponseBody = response;
                  this.store.dispatch(new SetUserAcquisition({data: responseCopy.objects[0].output.userAcquisition}));
                }
                if (headerData.type === EAnalysis2TypesEnum.totalMessages) {
                  const responseCopy: ITotalMessagesResponseBody = response;
                  this.store.dispatch(new SetTotalMessages({data: responseCopy.objects[0].output.messagesinfo}));
                }
                if (headerData.type === EAnalysis2TypesEnum.totalTimeOfRooms) {
                  const responseCopy: any = response;
                  this.store.dispatch(new SetTotalTimeOfRooms({data: responseCopy.objects[0].output.totalTimeOfRooms}));
                }
                if (headerData.type === EAnalysis2TypesEnum.userLoyalty) {
                  const responseCopy: IUserLoyaltyResponseBody = response;
                  this.store.dispatch(new SetUserLoyalty({data: responseCopy.objects[0].output.userLoyalty}));
                }
                if (headerData.type === EAnalysis2TypesEnum.channelWiseAverageSessionTime) {
                  const responseCopy: IChannelWiseAverageSessionTimeResponseBody = response;
                  this.store.dispatch(new SetChannelWiseAverageSessionTime({data: responseCopy.objects[0].output.channelWiseAverageSessionTime}));
                }
                
                if (headerData.type === EAnalysis2TypesEnum.totalFlows) {
                  const responseCopy: ITotalFlowsResponseBody = response;
                  this.store.dispatch(new SetTotalFlows({data: responseCopy.objects[0].output.totalFlows}));
                }
                if (headerData.type === EAnalysis2TypesEnum.sessionsperuser) {
                  const responseCopy: any = response;
                  this.store.dispatch(new SetSessionsperuser({data: responseCopy.objects[0].output.sessionsperuser}));
                }
                if (headerData.type === EAnalysis2TypesEnum.messagespersession) {
                  const responseCopy: any = response;
                  this.store.dispatch(new SetMessagespersession({data: responseCopy.objects[0].output.messagespersession}));
                }
                if (headerData.type === EAnalysis2TypesEnum.timepersession) {
                  const responseCopy: any = response;
                  this.store.dispatch(new SetTimepersession({data: responseCopy.objects[0].output.timepersession}));
                }
                if (headerData.type === EAnalysis2TypesEnum.flowsPerRoom) {
                  const responseCopy: IFlowsPerRoomResponseBody = response;
                  this.store.dispatch(new SetFlowsPerRoom({data: responseCopy.objects[0].output.flowsPerRoom}));
                }

                if (headerData.type === EAnalysis2TypesEnum.totalRooms) {
                  const responseCopy: ITotalRoomsResponseBody = response;
                  this.store.dispatch(new SetTotalRooms({data: responseCopy.objects[0].output.totalRooms}));
                }

                if (headerData.type === EAnalysis2TypesEnum.roomDuration) {
                  const responseCopy: IRoomDurationResponseBody = response;
                  this.store.dispatch(new SetRoomDuration({data: responseCopy.objects[0].output.roomDuration}));
                }

                if (headerData.type === EAnalysis2TypesEnum.channelWiseSessions) {
                  const responseCopy: IChannelWiseSessionsResponseBody = response;
                  this.store.dispatch(new SetChannelWiseSessions({data: responseCopy.objects[0].output.channelWiseSessions}));
                }

                if (headerData.type === EAnalysis2TypesEnum.channelWiseUsers) {
                  const responseCopy: IChannelWiseUsersResponseBody = response;
                  this.store.dispatch(new SetChannelWiseUsers({data: responseCopy.objects[0].output.channelWiseUsers}));
                }

                if (headerData.type === EAnalysis2TypesEnum.usagetracking) {
                  const responseCopy: IChannelWiseUsersResponseBody = response;
                  this.store.dispatch(new SetUsagetrackingInfo({data: responseCopy.objects[0].output[EAnalysis2TypesEnum.usagetracking]}));
                }
                if (headerData.type === EAnalysis2TypesEnum.topgenerationtemplates) {
                  const responseCopy: any = response;
                    
                  this.store.dispatch(new SetTopgenerationtemplates({data: responseCopy.objects[0].output[EAnalysis2TypesEnum.topgenerationtemplates]}));
                }
                if (headerData.type === EAnalysis2TypesEnum.totalSessions) {
                  const responseCopy: IChannelWiseUsersResponseBody = response;
                  this.store.dispatch(new TotalSessions({data: responseCopy.objects[0].output['messagesinfo']}));
                }
              });
          });

      } catch (e) {
        LoggingService.error(e);
        // this.utilityService.showErrorToaster(e);
      }
    });

  }

  isHeaderValid(startDate, endDate, granularity) {
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (startDate > endDate) {
      this.errorMessage = 'start date is larger than end date';
      return false;
    }
    if (diffDays > 30 && granularity === 'hour') {
      this.errorMessage = 'Granularity hour is not allowed for time range higher than 1 month';
      return false;
    }
    this.errorMessage = null;
    return true;
  }

  ngAfterViewInit() {

    setTimeout(() => {
      this.f.controls.botId.valueChanges.subscribe((data) => {
        if (!this.f.value.botId) {
          return;
        }
        const selectedBot: IBot = this._allbotList.find((bot) => bot.id === Number(this.f.value.botId));
        if (selectedBot) {
          this.channelList =
            Object.keys(selectedBot.integrations.channels).filter((integrationKey: any) => {
              return selectedBot.integrations.channels[integrationKey].enabled;
            }).map((integrationKey) => {
              return {
                name: integrationKey,
                displayName: integrationKey
              };
            });
          this.channelList.push({
            name: 'web',
            displayName: 'web'
          });
          this.channelList.unshift({name: 'all', displayName: 'All Channels'});

        }
      });

      if (this._allbotList) {
        this.f.form.patchValue({botId: this._allbotList[0].id, platform: this.channelList[0].name});
      }
    }, 0);
  }

  click1() {
    LoggingService.log(this.f);
  }

  ngOnDestroy(): void {
    this.analytics2HeaderDataSub && this.analytics2HeaderDataSub.unsubscribe();
    this.loggeduser && this.loggeduserSub.unsubscribe();
    this.formChangesSub && this.formChangesSub.unsubscribe();
    this.makeGetReqSub && this.makeGetReqSub.unsubscribe();
    this.store.dispatch([new ResetAnalytics2HeaderData(), new ResetAnalytics2GraphData()]);
    // this.store.dispatch([]);
  }
}
