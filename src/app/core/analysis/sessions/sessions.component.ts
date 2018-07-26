import { Component, OnInit } from '@angular/core';
import {IOverviewInfoPostBody} from '../../../../interfaces/overview-info';
import {Observable} from 'rxjs';
import {ConstantsService} from '../../../constants.service';
import {IAnalysisState} from '../ngxs/analysis.state';
import {IUserAcquisition} from '../../../../interfaces/analytics/user-aquasition';
import {Select} from '@ngxs/store';
import {ServerService} from '../../../server.service';
import {IAverageRoomTimeItem, ITotalFlowsItem, ITotalSessions} from '../../../../interfaces/analytics/sessions';
import {ChartSettingService} from '../../../chart-setting.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  constructor(
    private constantsService:ConstantsService,
    private serverService:ServerService,
    private chartSettingService:ChartSettingService,
  ) { }

  @Select() analysisstate$: Observable<IAnalysisState>;
  averageRoomTimeData;
  totalFlowsData;
  totalSessions: ITotalSessions = {};
  totalSessionsData;

  ngOnInit() {
    this.analysisstate$.subscribe((value: IAnalysisState)=>{
      let averageRoomTimeUrl  = this.constantsService.getAverageRoomTimeUrl();
      let totalFlowsUrl  = this.constantsService.getTotalFlowsUrl();
      let totalSessionsUrl  = this.constantsService.getTotalSessionsUrl();
      let body:IOverviewInfoPostBody = {
        ... value.overviewinfo
      };
      this.serverService.makePostReq<IAverageRoomTimeItem[]>({url:averageRoomTimeUrl, body})
        .subscribe((response)=>{
          this.averageRoomTimeData = this.chartSettingService.createSeriesDataFromArray(response,'labels');
          console.log(response);
        });
      this.serverService.makePostReq<ITotalFlowsItem[]>({url:totalFlowsUrl, body})
        .subscribe((response)=>{
          this.totalFlowsData = this.chartSettingService.createSeriesDataFromArray(response,'labels');
          console.log(response);
        });
      this.serverService.makePostReq<ITotalSessions>({url:totalSessionsUrl, body})
        .subscribe((response)=>{
          this.totalSessions = response;
          this.totalSessionsData  = this.chartSettingService.createSeriesDataFromArray(response.messagesinfo,'labels');
        });
    })
  }
}
