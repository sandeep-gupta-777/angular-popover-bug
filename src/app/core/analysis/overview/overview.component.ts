import { Component, OnInit } from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ServerService} from '../../../server.service';
import {IAnalysisState} from '../ngxs/analysis.state';
import {IOverviewInfoPostBody, IOverviewInfoResponse} from '../../../../interfaces/Analytics2/overview-info';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @Select() analysisstate$: Observable<IAnalysisState>;
  result$:Observable<IOverviewInfoResponse>;
  constructor(private serverService:ServerService) { }

  ngOnInit() {
    this.analysisstate$.subscribe((value)=>{
      this.result$ = this.serverService.getOverviewInfo<IOverviewInfoResponse>(value.overviewinfo)
    })
  }

}

