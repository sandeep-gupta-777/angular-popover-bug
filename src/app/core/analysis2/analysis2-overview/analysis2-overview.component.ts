import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IOverviewInfoResponse} from '../../../../interfaces/overview-info';
import {IAnalysisState} from '../../analysis/ngxs/analysis.state';
import {Select} from '@ngxs/store';
import {ServerService} from '../../../server.service';

@Component({
  selector: 'app-analysis2-overview',
  templateUrl: './analysis2-overview.component.html',
  styleUrls: ['./analysis2-overview.component.scss']
})
export class Analysis2OverviewComponent implements OnInit {

  @Select() analysisstate2$: Observable<IAnalysisState>;
  result$:Observable<IOverviewInfoResponse>;
  constructor(private serverService:ServerService) { }

  ngOnInit() {
    this.analysisstate2$.subscribe((value)=>{
      this.result$ = this.serverService.getOverviewInfo<IOverviewInfoResponse>(value.overviewinfo)
      this.result$.subscribe((value)=>{
        console.log(value);
      });
    })
  }

}
