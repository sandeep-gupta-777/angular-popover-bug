import { Component, OnInit } from '@angular/core';
import {ConstantsService} from '../../../constants.service';
import {ChartSettingService} from '../../../chart-setting.service';
import {ServerService} from '../../../server.service';
import {Observable} from 'rxjs';
import {IAnalysisState} from '../ngxs/analysis.state';
import {Select} from '@ngxs/store';
import {IOverviewInfoPostBody} from '../../../../interfaces/overview-info';
import {IAverageRoomTimeItem, ITotalFlowsItem, ITotalSessions} from '../../../../interfaces/analytics/sessions';
import {IChannelWiseUsersItem} from '../../../../interfaces/analytics/channel';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.scss']
})
export class PlatformsComponent implements OnInit {

  channelWiseUsers
  channelWiseSessions
  channelWiseFlowsPerSession
  channelWiseAverageSessionTime
  @Select() analysisstate$: Observable<IAnalysisState>;
  constructor(
    private constantsService:ConstantsService,
    private serverService:ServerService,
    private chartSettingService:ChartSettingService,
  ) { }

  ngOnInit() {
    this.analysisstate$.subscribe((value: IAnalysisState)=>{
      let channelWiseUsersUrl  = this.constantsService.getChannelWiseUsersUrl();
      let channelWiseSessionsUrl  = this.constantsService.getChannelWiseSessionsUrl();
      let channelWiseFlowsPerSessionUrl  = this.constantsService.getChannelWiseFlowsPerSessionUrl();
      let channelWiseAverageSessionTimeUrl  = this.constantsService.getChannelWiseAverageSessionTimeUrl();

      let body:IOverviewInfoPostBody = {
        ... value.overviewinfo
      };
      this.serverService.makePostReq<IChannelWiseUsersItem[]>({url:channelWiseUsersUrl, body})
        .subscribe((response)=>{
          this.channelWiseUsers = this.chartSettingService.createSeriesDataFromArray(response,'labels');
          console.log(response);
        });
      this.serverService.makePostReq<IChannelWiseUsersItem[]>({url:channelWiseSessionsUrl, body})
        .subscribe((response)=>{
          this.channelWiseSessions = this.chartSettingService.createSeriesDataFromArray(response,'labels');
          console.log(response);
        });
      this.serverService.makePostReq<IChannelWiseUsersItem[]>({url:channelWiseFlowsPerSessionUrl, body})
        .subscribe((response)=>{
          this.channelWiseFlowsPerSession = this.chartSettingService.createSeriesDataFromArray(response,'labels');
          console.log(response);
        });
      this.serverService.makePostReq<IChannelWiseUsersItem[]>({url:channelWiseAverageSessionTimeUrl, body})
        .subscribe((response)=>{
          console.log(response);
          this.channelWiseAverageSessionTime = this.chartSettingService.createSeriesDataFromArray(response,'labels');
        });
    })

  }

}
