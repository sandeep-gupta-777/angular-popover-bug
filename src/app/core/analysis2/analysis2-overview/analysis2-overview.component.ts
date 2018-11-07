import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IOverviewInfo} from '../../../../interfaces/Analytics2/overview-info';
import {Select, Store} from '@ngxs/store';
import {ServerService} from '../../../server.service';
import {ConstantsService} from '../../../constants.service';
import {UtilityService} from '../../../utility.service';
import {IAnalysis2State} from '../ngxs/analysis.state';
import {SetAnalysis2HeaderData} from '../ngxs/analysis.action';
import {EAnalysis2TypesEnum} from '../../../../interfaces/Analytics2/analysis2-types';

@Component({
  selector: 'app-analysis2-overview',
  templateUrl: './analysis2-overview.component.html',
  styleUrls: ['./analysis2-overview.component.scss']
})
export class Analysis2OverviewComponent implements OnInit {

  @Select() analysisstate2$: Observable<IAnalysis2State>;
  data: Partial<IOverviewInfo>;
  data$: Observable<IOverviewInfo>;

  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private utilityService: UtilityService,
    private store: Store,
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new SetAnalysis2HeaderData({
      analysisHeaderData: {type: EAnalysis2TypesEnum.overviewinfo}
    }));
    this.data$ = this.analysisstate2$.map((analysisState) => {
      return analysisState.overviewInfo;
    });
  }

}
