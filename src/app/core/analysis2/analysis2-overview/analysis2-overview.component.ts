import {map} from 'rxjs/operators';
import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IOverviewInfo} from '../../../../interfaces/Analytics2/overview-info';
import {Select, Store} from '@ngxs/store';
import {ServerService} from '../../../server.service';
import {ConstantsService} from '../../../constants.service';
import {UtilityService} from '../../../utility.service';
import {IAnalysis2State} from '../ngxs/analysis.state';
import {SetAnalysis2HeaderData} from '../ngxs/analysis.action';
import {EAnalysis2TypesEnum} from '../../../../interfaces/Analytics2/analysis2-types';
import {BreakpointService} from '../../breakpoint.service';
import {BreakpointObserver} from '@angular/cdk/layout';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-analysis2-overview',
  templateUrl: './analysis2-overview.component.html',
  styleUrls: ['./analysis2-overview.component.scss']
})
export class Analysis2OverviewComponent implements OnInit, AfterViewInit {

  @Select() analysisstate2$: Observable<IAnalysis2State>;
  data: Partial<IOverviewInfo>;
  data$: Observable<IOverviewInfo>;
  errorInHeader: boolean;
  chartValue = {
    chart: {
      type: 'pie',
      height: 150,
      width: 150,
    },
    title: {
      text: undefined
    },
    plotOptions: {
      pie: {
        innerSize: '60%',
        colors: ['#4A80CD', '#E89654'],
        dataLabels: {
          enabled: false,
        },
        borderWidth: 0,
        borderColor: null,
        states: {
          hover: {
            halo: {
              size: 0,
            },
          },
        },
      }
    },
    series: [{
      name: 'Conversations',
      data: [
        ['Bot handled', 8],
        ['Handed over', 2],
      ]
    }],
    credits: {
      enabled: false
    },
    exporting: {enabled: false}

  };
  chartValue2 = {
    chart: {
      type: 'pie',
      height: 150,
      width: 150,
    },
    title: {
      text: undefined
    },
    plotOptions: {
      pie: {
        innerSize: '60%',
        colors: ['#4a80cd', '#474c7f'],
        dataLabels: {
          enabled: false,
        },
        borderWidth: 0,
        borderColor: null,
        states: {
          hover: {
            halo: {
              size: 0,
            },
          },
        },
      }
    },
    series: [{
      name: 'Messages',
      data: [
        ['Bot messages', 8],
        ['Human messages', 2],
      ]
    }],
    credits: {
      enabled: false
    },
    exporting: {enabled: false}

  };
  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((par) => {
      this.errorInHeader = par.error && par.error === 'true';
    })
    this.store.dispatch(new SetAnalysis2HeaderData({
      analysisHeaderData: {type: EAnalysis2TypesEnum.overviewinfo}
    }));
    this.data$ = this.analysisstate2$.pipe(map((analysisState) => {
      if (analysisState.overviewInfo){
    
          this.chartValue2.series[0].data[0][1] = analysisState.overviewInfo.totalMessages['bot'];
          this.chartValue2.series[0].data[1][1] = analysisState.overviewInfo.totalMessages['human'];
          this.chartValue.series[0].data[0][1] = analysisState.overviewInfo.totalSessions['bot handled'];
          this.chartValue.series[0].data[1][1] = analysisState.overviewInfo.totalSessions['agent handled'];
      }
      return analysisState.overviewInfo;
    }));
  }

  ngAfterViewInit(): void {
    // Highcharts.chart('totalSessionPieChart', {
    //   chart: {
    //     type: 'pie',
    //   },
    //   title: {
    //     text: undefined
    //   },
    //   plotOptions: {
    //     pie: {
    //       innerSize: '60%',
    //       colors: ['#4A80CD', '#E89654'],
    //       dataLabels: {
    //         enabled: false,
    //       },
    //       borderWidth: 0,
    //       borderColor: null,
    //       states: {
    //         hover: {
    //           halo: {
    //             size: 0,
    //           },
    //         },
    //       },
    //     }
    //   },
    //   series: [{
    //     name: 'Conversations',
    //     data: [
    //       ['Bot handled', 8],
    //       ['Handed over', 2],
    //     ]
    //   }],
    //   credits: {
    //     enabled: false
    //   },
    //   exporting: { enabled: false }
    //
    // });
  }

}
