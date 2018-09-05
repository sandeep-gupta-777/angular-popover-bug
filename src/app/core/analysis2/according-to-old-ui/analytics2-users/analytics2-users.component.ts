import { Component, OnInit } from '@angular/core';
import {ConstantsService} from '../../../../constants.service';
import {Observable} from 'rxjs';
import {UtilityService} from '../../../../utility.service';
import {EAnalysis2TypesEnum} from '../../../../../interfaces/Analytics2/analysis2-types';
import {Select, Store} from '@ngxs/store';
import {ActivatedRoute, Router} from '@angular/router';
import {AnalysisStateReducer2, IAnalysis2State} from '../../ngxs/analysis.state';
import {SetAnalysis2HeaderData} from '../../ngxs/analysis.action';

@Component({
  selector: 'app-analytics2-users',
  templateUrl: './analytics2-users.component.html',
  styleUrls: ['./analytics2-users.component.scss']
})
export class Analytics2UsersComponent implements OnInit {
  // @Select() analysisstate2$: Observable<IAnalysis2State>;
  @Select(AnalysisStateReducer2.getAnalytics2GraphData) analytics2GraphData$: Observable<IAnalysis2State>;
  myEAnalysis2TypesEnum = EAnalysis2TypesEnum;
  activeTab: string = EAnalysis2TypesEnum.userAcquisition;
  highchartData: any[];
  chartValue:any;
  //   = [{
  //   name: 'Maximum',
  //   data: [4, 5, 8, 12, 10, 6, 22, 3]
  // }, {
  //   name: 'Average',
  //   data: [2, 2.5, 6.2, 4.4, 8, 4, 12.4, 1.3]
  // }, {
  //   name: 'Minimum',
  //   data: [1, 2, 1, 2, 1, 2, 1, 1]
  // }];
  series_Messages: any[] = [{
    name: 'Triggered',
    data: [5, 3, 4, 7, 2]
  }];
  series_ChannelWiseSessions: any[];
  series_ChannelWiseUsers: any[];
  series_Time: any[];
  series_Users: any[] = [{
    name: 'Triggered',
    data: [5, 3, 4, 7, 2]
  }];

  constructor(
    public constantsService: ConstantsService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private store: Store,
    private utilityService:UtilityService
  ) {
  }

  tabClicked(activeTab: string) {
    this.activeTab = activeTab;
    // this.route.ac/
    if(this.activeTab){
      this.store.dispatch(new SetAnalysis2HeaderData({
        analysisHeaderData:{type:this.activeTab}
      }));
    }
  }

  ngOnInit() {
    // // alert();
    // this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('activeTab') || EAnalysis2TypesEnum.userAcquisition;
    // this.tabClicked(this.activeTab);
    // // this.analysisstate2$
    // this.analytics2GraphData$
    //   // .debounceTime(1000)/*TODO: this is a fix; because can't stop listing to header*/
    //   .subscribe((value)=>{
    //     //
    //     // this.series_Sessions = this.utilityService.convert(value.userAcquisition,"labels","Date") ;
    //     // this.chartValue
    //     //   = this.utilityService.appendChartValueAndSeries(this.series_Sessions,this.constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT);
    //     try{
    //       // this.highchartData = this.utilityService.convert(value[this.activeTab],"labels","Date");
    //       // if(this.activeTab === this.myEAnalysis2TypesEnum.totalRooms){labelType = "Time"}
    //       this.highchartData = <any>this.utilityService.convert_xAxisText(value[this.activeTab],"labels") ;
    //       this.chartValue
    //         = this.utilityService.appendChartValueAndSeries(this.highchartData,this.constantsService.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT);
    //     }catch (e) {
    //       console.log(e);
    //     }
    //   })

    this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('activeTab') || this.activeTab;
    this.tabClicked(this.activeTab);
    this.analytics2GraphData$
      .subscribe((value: IAnalysis2State)=>{
        try{
          let granularity =  value.analysisHeaderData.granularity;
          let granularity_ms:number = this.utilityService.convertGranularityStrToMs(granularity);

          this.chartValue =
            <any>this.utilityService.convertDateTime(
              value[this.activeTab],
              "labels",
              new Date(value.analysisHeaderData.startdate).getTime(),
              granularity_ms) ;
        }catch (e) {
          console.log(e);
        }

      })
  }



}
