import {AfterViewInit, Component, Input, NgZone, OnInit, ViewChild} from '@angular/core';
import {BotConfigComponent} from '../../buildbot/build-code-based-bot/bot-config/bot-config.component';
import {IBot} from '../../interfaces/IBot';
import {ViewBotStateModel} from '../../view-bots/ngxs/view-bot.state';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';
import {ConstantsService} from '../../../constants.service';
import {BsDatepickerConfig} from 'ngx-bootstrap';
import {Select, Store} from '@ngxs/store';
import {SetAnalysis2HeaderData, SetOverviewInfoData, SetChannelWiseFlowsPerSession, SetUserAcquisition, SetTotalMessages, SetAverageRoomTime, SetUserLoyalty, SetChannelWiseAverageSessionTime} from '../ngxs/analysis.action';
import {IAnalysisState} from '../../analysis/ngxs/analysis.state';
import {IOverviewInfoPostBody, IOverviewInfoResponse} from '../../../../interfaces/Analytics2/overview-info';
import {ServerService} from '../../../server.service';
import {UtilityService} from '../../../utility.service';
import {IUser} from '../../interfaces/user';
import {AnalysisStateReducer2, IAnalysis2State} from '../ngxs/analysis.state';
import {EAnalysis2TypesEnum} from '../../../../interfaces/Analytics2/analysis2-types';
import {SetOverViewInfo} from '../../analysis/ngxs/analysis.action';
import {IAnalysis2HeaderData} from '../../../../interfaces/Analytics2/analytics2-header';
import {IAuthState} from '../../../auth/ngxs/auth.state';
import { IChannelWiseFlowsPerSessionResponseBody } from '../../../../interfaces/Analytics2/volume-sessions';
import { IUserAcquisitionResponseBody } from '../../../../interfaces/Analytics2/volume-users';
import { ITotalMessagesResponseBody } from '../../../../interfaces/Analytics2/volume-messages';
import { IAverageRoomTimeItem, IAverageRoomTimeResponseBody } from '../../../../interfaces/Analytics2/volume-time';
import { IUserLoyaltyResponseBody } from '../../../../interfaces/Analytics2/engagement-userLoyalty';
import { IChannelWiseAverageSessionTimeResponseBody } from '../../../../interfaces/Analytics2/engagement-averageSessionTime';

@Component({
  selector: 'app-analysis2-header',
  templateUrl: './analysis2-header.component.html',
  styleUrls: ['./analysis2-header.component.scss']
})
export class Analysis2HeaderComponent implements OnInit, AfterViewInit {

  @Input() allbotList: IBot[];
  @ViewChild('form') f: NgForm;
  @Select(AnalysisStateReducer2.getAnalytics2HeaderData) analytics2HeaderData$: Observable<IAnalysis2HeaderData>;
  @Select() loggeduser$: Observable<{ user: IUser }>;
  startdate = new Date();
  enddate = new Date();
  datePickerConfig: Partial<BsDatepickerConfig> = this.constantsService.DATE_PICKER_CONFIG;
  channelList = this.constantsService.CHANNEL_LIST;
  loggeduser: IAuthState;

  constructor(
    private store: Store,
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private utilityService: UtilityService
  ) {
  }

  ngOnInit() {

    /*
    * form contains the header data, Whenever form changes,
    * update the header data in store
    * */
    this.f.form.valueChanges
      .debounceTime(1000)
      .subscribe((formData) => {
        if (!this.f.valid) return;
        let selectedBot: IBot = this.allbotList.find((bot) => bot.id === Number(this.f.value.botId));
        let analysisHeaderData: IAnalysis2HeaderData = {
          'bot-access-token': selectedBot.bot_access_token,
          platform: 'web',
          ...formData
        };
        this.store.dispatch([
          new SetAnalysis2HeaderData({analysisHeaderData})
        ]);
      });

    /*
    *Whenever the header data changes, make get request for analytics data
    * and when analytics data arrives, save in store again its "type"
    * */
    this.loggeduser$.subscribe((loggeduser) => {
      this.loggeduser = loggeduser;
    });

    this.analytics2HeaderData$.subscribe((analytics2HeaderData) => {
      /*TODO: for some reason, angular form validation is not working. This is a hack*/
      if (!this.f.valid || Object.keys(this.f.value).length !== 4) return;
      try {
        let url = this.constantsService.getAnalyticsUrl();
        let headerData: IAnalysis2HeaderData = {
          ...analytics2HeaderData,
          'auth-token': this.loggeduser.user.auth_token,
          'user-access-token': this.loggeduser.user.user_access_token,
          startdate: this.utilityService.convertDateObjectStringToDDMMYY(analytics2HeaderData.startdate),
          enddate: this.utilityService.convertDateObjectStringToDDMMYY(analytics2HeaderData.enddate),
        };
        if (!this.utilityService.areAllValesDefined(headerData)) return;
        this.serverService.makeGetReq({url, headerData})
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
            
          });
      } catch (e) {
        this.utilityService.showErrorToaster(e);
      }
    });

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.f.form.patchValue({botId: this.allbotList[0].id, platform: this.channelList[0].name});
    }, 0);
  }
}
