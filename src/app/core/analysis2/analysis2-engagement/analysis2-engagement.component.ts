import {Component, OnInit} from '@angular/core';
import {ConstantsService} from '../../../constants.service';
import {ActivatedRoute} from '@angular/router';
import { Observable } from '../../../../../node_modules/rxjs';
import { IAnalysis2State } from '../ngxs/analysis.state';
import { Select, Store } from '../../../../../node_modules/@ngxs/store';
import { UtilityService } from '../../../utility.service';
import { SetUserLoyalty, SetAnalysis2HeaderData, SetChannelWiseSessions } from '../ngxs/analysis.action';
import { EAnalysis2TypesEnum } from '../../../../interfaces/Analytics2/analysis2-types';

@Component({
  selector: 'app-analysis2-engagement',
  templateUrl: './analysis2-engagement.component.html',
  styleUrls: ['./analysis2-engagement.component.scss']
})
export class Analysis2EngagementComponent implements OnInit {
  @Select() analysisstate2$: Observable<IAnalysis2State>;


  activeTab = 'sessionsperuser';
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

    if (this.activeTab === 'sessionsperuser') {
      this.store.dispatch(new SetAnalysis2HeaderData({
        analysisHeaderData: {type: EAnalysis2TypesEnum.sessionsperuser}
      }));
    }
    if (this.activeTab === 'messagespersession') {
      this.store.dispatch(new SetAnalysis2HeaderData({
        analysisHeaderData: {type: EAnalysis2TypesEnum.messagespersession}
      }));
    }
    if (this.activeTab === 'timepersession') {
      this.store.dispatch(new SetAnalysis2HeaderData({
        analysisHeaderData: {type: EAnalysis2TypesEnum.timepersession}
      }));
    }

  }

  ngOnInit() {
    this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('activeTab') || this.activeTab;
    this.tabClicked(this.activeTab);

    this.analysisstate2$
      .subscribe((value: IAnalysis2State) => {
        try {

          const granularity =  value.analysisHeaderData.granularity;
          const granularity_ms: number = this.u.convertGranularityStrToMs(granularity);

          this.chartValue =
            <any>this.u.convertDateTimeGraph(
              value[this.activeTab],
              'labels',
              new Date(value.analysisHeaderData.startdate).getTime(),
              granularity) ;

        } catch (e) {
          // LoggingService.error(e);
        }

      });
  }
//

}
