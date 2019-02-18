import {Component, OnInit} from '@angular/core';
import {ConstantsService} from '../../../constants.service';
import {ActivatedRoute} from '@angular/router';
import {EAnalysis2TypesEnum} from '../../../../interfaces/Analytics2/analysis2-types';
import {SetAnalysis2HeaderData} from '../ngxs/analysis.action';
import {Store, Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IAnalysis2State} from '../ngxs/analysis.state';
import {UtilityService} from '../../../utility.service';

@Component({
  selector: 'app-analysis2-volume',
  templateUrl: './analysis2-volume.component.html',
  styleUrls: ['./analysis2-volume.component.scss']
})
export class Analysis2VolumeComponent implements OnInit {
  @Select() analysisstate2$: Observable<IAnalysis2State>;
  // data$: Observable<IChannelWiseFlowsPerSessionItem[]>;
  activeTab = 'userAcquisition';
  chartValue: any;

  constructor(
    public constantsService: ConstantsService,
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private u: UtilityService
  ) {
  }

  tabClicked(activeTab: string) {
    this.activeTab = activeTab;

    if (this.activeTab === 'userAcquisition') {
      this.store.dispatch(new SetAnalysis2HeaderData({
        analysisHeaderData: {type: EAnalysis2TypesEnum.userAcquisition}
      }));
    }
    if (this.activeTab === 'totalMessages') {
      this.store.dispatch(new SetAnalysis2HeaderData({
        analysisHeaderData: {type: EAnalysis2TypesEnum.totalMessages}
      }));
    }
    if (this.activeTab === 'totalTimeOfRooms') {
      this.store.dispatch(new SetAnalysis2HeaderData({
        analysisHeaderData: {type: EAnalysis2TypesEnum.totalTimeOfRooms}
      }));
    }
    //adding new now
    if (this.activeTab === 'totalSessions') {
      this.store.dispatch(new SetAnalysis2HeaderData({
        analysisHeaderData: {type: EAnalysis2TypesEnum.totalSessions}
      }));
    }
  }

  ngOnInit() {
    this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('activeTab') || this.activeTab;
    this.tabClicked(this.activeTab);

    this.analysisstate2$
      .subscribe((value: IAnalysis2State) => {
        try {

          const granularity = value.analysisHeaderData.granularity;
          const granularity_ms: number = this.u.convertGranularityStrToMs(granularity);
          //
          this.chartValue =
            <any>this.u.convertDateTimeGraph(
              value[this.activeTab],
              'labels',
              new Date(value.analysisHeaderData.startdate).getTime(),
              granularity);

        } catch (e) {
          // LoggingService.error(e);
        }
      });

  }


}
