import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../../../constants.service';
import { ActivatedRoute } from '@angular/router';
import { EAnalysis2TypesEnum } from '../../../../interfaces/Analytics2/analysis2-types';
import { IAnalysis2State } from '../ngxs/analysis.state';
import { Observable } from '../../../../../node_modules/rxjs';
import { Select, Store } from '../../../../../node_modules/@ngxs/store';
import { SetAnalysis2HeaderData } from '../ngxs/analysis.action';
import { UtilityService } from '../../../utility.service';

@Component({
  selector: 'app-analysis2-performance',
  templateUrl: './analysis2-performance.component.html',
  styleUrls: ['./analysis2-performance.component.scss']
})
export class Analysis2PerformanceComponent implements OnInit {
  @Select() analysisstate2$: Observable<IAnalysis2State>;
  activeTab = 'topgenerationtemplates';
  chartValue: any;
  chartValue1: any;
  chartValue2: any;
  constructor(
    public constantsService: ConstantsService,
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private u: UtilityService
  ) { }

  tabClicked(activeTab: string) {
    this.activeTab = activeTab;
    if (this.activeTab === 'topgenerationtemplates') {
      this.store.dispatch(new SetAnalysis2HeaderData({
        analysisHeaderData: { type: EAnalysis2TypesEnum.topgenerationtemplates }
      }));
    }

    if (this.activeTab === 'totalFlows') {
      this.store.dispatch(new SetAnalysis2HeaderData({
        analysisHeaderData: { type: EAnalysis2TypesEnum.totalFlows }
      }));
    }
    if (this.activeTab === 'flows_per_room') {
      this.store.dispatch(new SetAnalysis2HeaderData({
        analysisHeaderData: { type: EAnalysis2TypesEnum.flowsPerRoom }
      }));
    }
    if (this.activeTab === 'totalSessions') {
      this.store.dispatch(new SetAnalysis2HeaderData({
        analysisHeaderData: { type: EAnalysis2TypesEnum.totalSessions }
      }));
    }
    if (this.activeTab === 'room_duration') {
      this.store.dispatch(new SetAnalysis2HeaderData({
        analysisHeaderData: { type: EAnalysis2TypesEnum.roomDuration }
      }));
    }

  }

  ngOnInit() {
    this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('activeTab') || this.activeTab;
    this.tabClicked(this.activeTab);

    this.analysisstate2$
      .subscribe((value: IAnalysis2State) => {
        try {

          const granularity:string = value.analysisHeaderData.granularity;
          const granularity_ms: number = this.u.convertGranularityStrToMs(granularity);

          this.chartValue =
            <any>this.u.convert_xAxisText(
              value[this.activeTab],
              'labels'
            );
          this.chartValue1 =
            <any>this.u.convertDateTimeGraph(
              value[this.activeTab],
              'labels',
              new Date(value.analysisHeaderData.startdate).getTime(),
              granularity);

          this.chartValue2 =
            <any>this.u.convertDateTimeTwoBarGraph(
              value[this.activeTab],
              'labels',
              new Date(value.analysisHeaderData.startdate).getTime(),
              granularity_ms
            );

        } catch (e) {
          // LoggingService.error(e);
        }
      });
  }

}
