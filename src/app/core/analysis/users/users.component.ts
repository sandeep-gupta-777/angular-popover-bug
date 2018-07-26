import { Component, OnInit } from '@angular/core';
import {ConstantsService} from '../../../constants.service';
import {ServerService} from '../../../server.service';
import {IUserAcquisition} from '../../../../interfaces/analytics/user-aquasition';
import {IOverviewInfoPostBody} from '../../../../interfaces/overview-info';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IAnalysisState} from '../ngxs/analysis.state';
import {ChartService} from 'angular-highcharts/chart.service';
import {ChartSettingService} from '../../../chart-setting.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  data;
  data$;
  constructor(
    private constantsService:ConstantsService,
    private serverService:ServerService,
    private chartSettingService:ChartSettingService,

  ) { }
  @Select() analysisstate$: Observable<IAnalysisState>;
  ngOnInit() {
    this.analysisstate$.subscribe((value: IAnalysisState)=>{
      let url  = this.constantsService.getUserAcquisitionUrl();
      let body:IOverviewInfoPostBody = {
        ... value.overviewinfo
      };
      this.data$ = this.serverService.makePostReq({url, body})
        .map((x:any[])=>{
          this.data = this.chartSettingService.createSeriesDataFromArray(x,'labels');
          return this.data;
        });
    })

  }

  getUserAquasition(){

  }

}
