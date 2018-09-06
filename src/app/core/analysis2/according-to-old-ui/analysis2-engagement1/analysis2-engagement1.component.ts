import {Component, OnInit} from '@angular/core';
import {ConstantsService} from '../../../../constants.service';
import {ActivatedRoute} from '@angular/router';
import {Select, Store} from '@ngxs/store';
import {AnalysisStateReducer2, IAnalysis2State} from '../../ngxs/analysis.state';
import {EAnalysis2TypesEnum} from '../../../../../interfaces/Analytics2/analysis2-types';
import {Observable} from 'rxjs';
import {UtilityService} from '../../../../utility.service';
import {SetAnalysis2HeaderData} from '../../ngxs/analysis.action';
import {IAnalysis2HeaderData} from '../../../../../interfaces/Analytics2/analytics2-header';

@Component({
  selector: 'app-analysis2-engagement1',
  templateUrl: './analysis2-engagement1.component.html',
  styleUrls: ['./analysis2-engagement1.component.scss']
})
export class Analysis2Engagement1Component implements OnInit {


  // @Select() analysisstate2$: Observable<IAnalysis2State>;
  @Select(AnalysisStateReducer2.getAnalytics2GraphData) analytics2GraphData$: Observable<IAnalysis2State>;
  myEAnalysis2TypesEnum = EAnalysis2TypesEnum;
  activeTab: string = EAnalysis2TypesEnum.userLoyalty;
  highchartData: any;
  chartValue;
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
    private store: Store,
    private utilityService: UtilityService
  ) {
  }

  tabClicked(activeTab: string) {
    this.activeTab = activeTab;
    if (this.activeTab) {
      this.store.dispatch(new SetAnalysis2HeaderData({
        analysisHeaderData: {type: this.activeTab}
      }));
    }
  }

  ngOnInit() {
    this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('activeTab') || this.activeTab;
    this.tabClicked(this.activeTab);
    this.analytics2GraphData$
      .subscribe((value: IAnalysis2State)=>{
        try{
          let granularity =  value.analysisHeaderData.granularity;
          let granularity_ms:number = this.utilityService.convertGranularityStrToMs(granularity);

          this.chartValue =
            <any>this.utilityService.convertDateTimeGraph(
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
