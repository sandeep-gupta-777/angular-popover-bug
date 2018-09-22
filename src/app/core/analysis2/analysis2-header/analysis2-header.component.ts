import {AfterViewInit, Component, Input, NgZone, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BotConfigComponent} from '../../buildbot/build-code-based-bot/bot-config/bot-config.component';
import {IBot} from '../../interfaces/IBot';
import {Observable, Subscription} from 'rxjs';
import {NgForm} from '@angular/forms';
import {ConstantsService} from '../../../constants.service';
import {BsDatepickerConfig} from 'ngx-bootstrap';
import {Select, Store} from '@ngxs/store';
import {
  SetAnalysis2HeaderData,
  SetOverviewInfoData,
  SetChannelWiseFlowsPerSession,
  SetUserAcquisition,
  SetTotalMessages,
  SetAverageRoomTime,
  SetUserLoyalty,
  SetChannelWiseAverageSessionTime,
  SetTotalFlows,
  SetFlowsPerRoom,
  SetTotalRooms,
  SetRoomDuration,
  SetChannelWiseSessions,
  SetChannelWiseUsers,
  ResetAnalytics2GraphData, SetUsagetrackingInfo, Topgenerationtemplates
} from '../ngxs/analysis.action';
import {IOverviewInfoResponse} from '../../../../interfaces/Analytics2/overview-info';
import {ServerService} from '../../../server.service';
import {UtilityService} from '../../../utility.service';
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
import {query} from '@angular/animations';

@Component({
  selector: 'app-analysis2-header',
  templateUrl: './analysis2-header.component.html',
  styleUrls: ['./analysis2-header.component.scss']
})
export class Analysis2HeaderComponent implements OnInit, AfterViewInit, OnDestroy {

  _allbotList: IBot[];
  formChangesSub:Subscription;
  storeSub:Subscription;
  loggeduserSub:Subscription;
  analytics2HeaderDataSub:Subscription;
  makeGetReqSub:Subscription;

  @Input() set allbotList(_allbotList: IBot[]) {
    this._allbotList =_allbotList;
    if(this.f && _allbotList)
    this.f.form.patchValue({botId: this._allbotList[0].id, platform: this.channelList[0].name});
  }

  granularityList = [
    'hour', 'day', 'month', 'year'
  ];
  @ViewChild('form') f: NgForm;
  @Select(AnalysisStateReducer2.getAnalytics2HeaderData) analytics2HeaderData$: Observable<IAnalysis2HeaderData>;
  @Select() loggeduser$: Observable<{ user: IUser }>;
  startdate = new Date(new Date().setDate(new Date().getDate() - 30));
  enddate = new Date();
  granularity = 'day';
  datePickerConfig: Partial<BsDatepickerConfig> = this.constantsService.DATE_PICKER_CONFIG;
  channelList = this.constantsService.CHANNEL_LIST;
  loggeduser: IAuthState;
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
      .debounceTime(1000)
      .subscribe((formData) => {
        if(this.utilityService.areTwoJSObjectSame(this.formData, formData)) return;
        this.formData = formData;
        if (!this.f.valid) return;
        let selectedBot: IBot = this._allbotList.find((bot) => bot.id === Number(this.f.value.botId));
        // this.route.navigate(["." ], {queryParams:{granularity:this.f.value.granularity} , relativeTo: this.activatedRoute});
        let analysisHeaderData: IAnalysis2HeaderData = {
          'bot-access-token': selectedBot.bot_access_token,
          platform: 'web',
          ...formData
        };
        this.store.dispatch([new ResetAnalytics2GraphData()])
          .subscribe(() => {
            this.store.dispatch([
              new SetAnalysis2HeaderData({analysisHeaderData})
            ]);
          });
      });

    /*
    *Whenever the header data changes, make get request for analytics data
    * and when analytics data arrives, save in store again its "type"
    * */
    this.loggeduserSub = this.loggeduser$.subscribe((loggeduser) => {
      this.loggeduser = loggeduser;
    });

    this.analytics2HeaderDataSub = this.analytics2HeaderData$.subscribe((analytics2HeaderData) => {
      /*move this code to dedicated service*/
      try {
        this.f.form.patchValue(analytics2HeaderData);
        let url = this.constantsService.getAnalyticsUrl();
        let headerData: IAnalysis2HeaderData = {
          ...analytics2HeaderData,
          'auth-token': this.loggeduser.user.auth_token,
          'user-access-token': this.loggeduser.user.user_access_token,
          startdate: this.utilityService.convertDateObjectStringToDDMMYY(analytics2HeaderData.startdate),
          enddate: this.utilityService.convertDateObjectStringToDDMMYY(analytics2HeaderData.enddate),
        };

        if (!this.utilityService.areAllValesDefined(headerData)) return;
        this.store.dispatch([new ResetAnalytics2GraphData()])
          .subscribe(() => {
            let isHeaderValid = this.isHeaderValid(analytics2HeaderData.startdate, analytics2HeaderData.enddate, analytics2HeaderData.granularity);
            if (!isHeaderValid) return;
            this.store.dispatch([new ResetAnalytics2GraphData()]);
            // this.makeGetReqSub && this.makeGetReqSub.unsubscribe();//todo: better use .
            this.makeGetReqSub = this.serverService.makeGetReq({url, headerData})
              .take(1)
              .subscribe((response: any) => {
                if (headerData.type === EAnalysis2TypesEnum.overviewinfo) {
                  let responseCopy: IOverviewInfoResponse = response;
                  this.store.dispatch(new SetOverviewInfoData({data: responseCopy.objects[0].output}));
                }
                if (headerData.type === EAnalysis2TypesEnum.channelWiseFlowsPerSession) {
                  let responseCopy: IChannelWiseFlowsPerSessionResponseBody = response;
                  this.store.dispatch(new SetChannelWiseFlowsPerSession({data: responseCopy.objects[0].output.channelWiseFlowsPerSession}));
                }
                if (headerData.type === EAnalysis2TypesEnum.userAcquisition) {
                  let responseCopy: IUserAcquisitionResponseBody = response;
                  this.store.dispatch(new SetUserAcquisition({data: responseCopy.objects[0].output.userAcquisition}));
                }
                if (headerData.type === EAnalysis2TypesEnum.totalMessages) {
                  let responseCopy: ITotalMessagesResponseBody = response;
                  this.store.dispatch(new SetTotalMessages({data: responseCopy.objects[0].output.messagesinfo}));
                }
                if (headerData.type === EAnalysis2TypesEnum.averageRoomTime) {
                  ;
                  let responseCopy: IAverageRoomTimeResponseBody = response;
                  this.store.dispatch(new SetAverageRoomTime({data: responseCopy.objects[0].output.averageRoomTime}));
                }
                if (headerData.type === EAnalysis2TypesEnum.userLoyalty) {
                  let responseCopy: IUserLoyaltyResponseBody = response;
                  this.store.dispatch(new SetUserLoyalty({data: responseCopy.objects[0].output.userLoyalty}));
                }
                if (headerData.type === EAnalysis2TypesEnum.channelWiseAverageSessionTime) {
                  let responseCopy: IChannelWiseAverageSessionTimeResponseBody = response;
                  this.store.dispatch(new SetChannelWiseAverageSessionTime({data: responseCopy.objects[0].output.channelWiseAverageSessionTime}));
                }
                if (headerData.type === EAnalysis2TypesEnum.totalFlows) {
                  let responseCopy: ITotalFlowsResponseBody = response;
                  this.store.dispatch(new SetTotalFlows({data: responseCopy.objects[0].output.totalFlows}));
                }
                if (headerData.type === EAnalysis2TypesEnum.totalFlows) {
                  let responseCopy: ITotalFlowsResponseBody = response;
                  this.store.dispatch(new SetTotalFlows({data: responseCopy.objects[0].output.totalFlows}));
                }

                if (headerData.type === EAnalysis2TypesEnum.flowsPerRoom) {
                  let responseCopy: IFlowsPerRoomResponseBody = response;
                  this.store.dispatch(new SetFlowsPerRoom({data: responseCopy.objects[0].output.flowsPerRoom}));
                }

                if (headerData.type === EAnalysis2TypesEnum.totalRooms) {
                  let responseCopy: ITotalRoomsResponseBody = response;
                  this.store.dispatch(new SetTotalRooms({data: responseCopy.objects[0].output.totalRooms}));
                }

                if (headerData.type === EAnalysis2TypesEnum.roomDuration) {
                  let responseCopy: IRoomDurationResponseBody = response;
                  this.store.dispatch(new SetRoomDuration({data: responseCopy.objects[0].output.roomDuration}));
                }

                if (headerData.type === EAnalysis2TypesEnum.channelWiseSessions) {
                  let responseCopy: IChannelWiseSessionsResponseBody = response;
                  this.store.dispatch(new SetChannelWiseSessions({data: responseCopy.objects[0].output.channelWiseSessions}));
                }

                if (headerData.type === EAnalysis2TypesEnum.channelWiseUsers) {
                  let responseCopy: IChannelWiseUsersResponseBody = response;
                  this.store.dispatch(new SetChannelWiseUsers({data: responseCopy.objects[0].output.channelWiseUsers}));
                }

                if (headerData.type === EAnalysis2TypesEnum.usagetracking) {
                  let responseCopy: IChannelWiseUsersResponseBody = response;
                  this.store.dispatch(new SetUsagetrackingInfo({data: responseCopy.objects[0].output[EAnalysis2TypesEnum.usagetracking]}));
                }
                if (headerData.type === EAnalysis2TypesEnum.topgenerationtemplates) {
                  let responseCopy: IChannelWiseUsersResponseBody = response;
                  this.store.dispatch(new Topgenerationtemplates({data: responseCopy.objects[0].output[EAnalysis2TypesEnum.topgenerationtemplates]}));
                }
              });
          });

      } catch (e) {
        console.log(e);
        // this.utilityService.showErrorToaster(e);
      }
    });

  }

  isHeaderValid(startDate, endDate, granularity) {
    var startDate: any = new Date(startDate);
    var endDate: any = new Date(endDate);
    var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
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
      if(this._allbotList)
      this.f.form.patchValue({botId: this._allbotList[0].id, platform: this.channelList[0].name});
    }, 0);
  }

  click1() {
    console.log(this.f);
  }

  ngOnDestroy(): void {
    this.analytics2HeaderDataSub && this.analytics2HeaderDataSub.unsubscribe();
    this.loggeduser && this.loggeduserSub.unsubscribe();
    this.formChangesSub && this.formChangesSub.unsubscribe();
    this.makeGetReqSub && this.makeGetReqSub.unsubscribe();
  }
}
