import { Component, OnInit } from '@angular/core';
import {ConstantsService} from '../../../../constants.service';
import {Observable} from 'rxjs';
import {UtilityService} from '../../../../utility.service';
import {EAnalysis2TypesEnum} from '../../../../../interfaces/Analytics2/analysis2-types';
import {AnalysisStateReducer2, IAnalysis2State} from '../../ngxs/analysis.state';
import {Select, Store} from '@ngxs/store';
import {ActivatedRoute} from '@angular/router';
import {SetAnalysis2HeaderData} from '../../ngxs/analysis.action';
import {ELogType, LoggingService} from '../../../../logging.service';

@Component({
  selector: 'app-analysis2-platform',
  templateUrl: './analysis2-platform.component.html',
  styleUrls: ['./analysis2-platform.component.scss']
})
export class Analysis2PlatformComponent implements OnInit {

  // @Select() analysisstate2$: Observable<IAnalysis2State>;
  @Select(AnalysisStateReducer2.getAnalytics2GraphData) analytics2GraphData$: Observable<IAnalysis2State>;
  chartValue;
  myEAnalysis2TypesEnum = EAnalysis2TypesEnum;
  activeTab: string = EAnalysis2TypesEnum.channelWiseSessions;
  highchartData: any[] = [{
    name: 'Maximum',
    data: [4, 5, 8, 12, 10, 6, 22, 3]
  }, {
    name: 'Average',
    data: [2, 2.5, 6.2, 4.4, 8, 4, 12.4, 1.3]
  }, {
    name: 'Minimum',
    data: [1, 2, 1, 2, 1, 2, 1, 1]
  }];
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
      .subscribe((value: IAnalysis2State) => {
        try {
          const granularity =  value.analysisHeaderData.granularity;
          const granularity_ms: number = this.utilityService.convertGranularityStrToMs(granularity);

          this.chartValue =
            <any>this.utilityService.convertDateTimeGraph(
              value[this.activeTab],
              'labels',
              new Date(value.analysisHeaderData.startdate).getTime(),
              granularity_ms) ;
        } catch (e) {
          LoggingService.error(e);
        }

      });
  }




}
