import {Component, OnInit} from '@angular/core';
import {ConstantsService} from '../../../constants.service';
import {ActivatedRoute} from '@angular/router';
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
  activeTab: string = "sessions";
  series_sessions:any[] = [{
    name: 'Handled by bot',
    data: [5, 3, 4, 7, 2]
  }, {
    name: 'Handled by agent',
    data: [2, 2, 3, 2, 1]
  }, {
    name: 'User abandoned',
    data: [3, 4, 4, 2, 5]
  }];
  series_template:any[] = [{
    name: 'Triggered',
    data: [5, 3, 4, 7, 2]
  }];
  series_flows_per_room:any[]= [{
    name: 'Triggered',
    data: [5, 3, 4, 7, 2]
  }];
  series_room_duration:any[];
  series_flows:any[];
  series_total_rooms:any[];

  constructor(
    public constantsService: ConstantsService,
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private u:UtilityService
    ) {}

  tabClicked(activeTab:string) {
    this.activeTab = activeTab;
    if(this.activeTab==='template'){
      this.store.dispatch(new SetAnalysis2HeaderData({
        analysisHeaderData:{type:EAnalysis2TypesEnum.topgenerationtemplates}
      }));
    }
    ;
    if(this.activeTab==='flows'){
      this.store.dispatch(new SetAnalysis2HeaderData({
        analysisHeaderData:{type:EAnalysis2TypesEnum.totalFlows}
      }));
    }
    if(this.activeTab==='flows_per_room'){
      this.store.dispatch(new SetAnalysis2HeaderData({
        analysisHeaderData:{type:EAnalysis2TypesEnum.flowsPerRoom}
      }));
    }
    if(this.activeTab==='total_rooms'){
      this.store.dispatch(new SetAnalysis2HeaderData({
        analysisHeaderData:{type:EAnalysis2TypesEnum.totalRooms}
      }));
    }
    if(this.activeTab==='room_duration'){
      this.store.dispatch(new SetAnalysis2HeaderData({
        analysisHeaderData:{type:EAnalysis2TypesEnum.roomDuration}
      }));
    }
  }

  ngOnInit() {
    this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('perf') || 'sessions';
    this.analysisstate2$
    .subscribe((value)=>{
      // ;
      if(value.topgenerationtemplates){
        this.series_template  = this.u.convert(value.topgenerationtemplates,"labels","Date") ;
      }
      ;
      if(value.totalFlows){
        this.series_flows  = this.u.convert(value.totalFlows,"labels","Date");
      }
      if(value.flowsPerRoom){
        this.series_flows_per_room  = this.u.convert(value.flowsPerRoom,"labels","Date");
      }
      if(value.totalRooms){
        this.series_total_rooms  = this.u.convert(value.totalRooms,"labels","Date");
      }
      if(value.roomDuration){
        this.series_room_duration  = this.u.convert(value.roomDuration,"labels","String");
      }
    });
  }

}
