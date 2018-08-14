import { Component, OnInit } from '@angular/core';
import {ConstantsService} from '../../../constants.service';
import {ActivatedRoute} from '@angular/router';
import { EAnalysis2TypesEnum } from '../../../../interfaces/Analytics2/analysis2-types';
import { SetAnalysis2HeaderData, SetUserAcquisition } from '../ngxs/analysis.action';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IAnalysis2State } from '../ngxs/analysis.state';
import { IChannelWiseFlowsPerSessionResponseBody, IChannelWiseFlowsPerSessionItem } from '../../../../interfaces/Analytics2/volume-sessions';
import { UtilityService } from '../../../utility.service';

@Component({
  selector: 'app-analysis2-volume',
  templateUrl: './analysis2-volume.component.html',
  styleUrls: ['./analysis2-volume.component.scss']
})
export class Analysis2VolumeComponent implements OnInit {
  @Select() analysisstate2$: Observable<IAnalysis2State>;
  data$: Observable<IChannelWiseFlowsPerSessionItem[]>;
  activeTab: string = 'Sessions';
  series_Sessions: {name:string, data:number[]}[] = [{
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
  series_Users: any[] = [{
    name: 'Triggered',
    data: [5, 3, 4, 7, 2]
  }];
  series_Time: any[];

  constructor(
    public constantsService: ConstantsService,
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private u:UtilityService
  ) {
  }

  tabClicked(activeTab: string) {
    this.activeTab = activeTab;
    if(this.activeTab==='Sessions'){
    this.store.dispatch(new SetAnalysis2HeaderData({
      analysisHeaderData:{type:EAnalysis2TypesEnum.channelWiseFlowsPerSession}
    }));
  }
  if(this.activeTab === 'Users'){
    this.store.dispatch(new SetAnalysis2HeaderData({
      analysisHeaderData:{type:EAnalysis2TypesEnum.userAcquisition}
    }));
  }
  if(this.activeTab === 'Messages'){
    this.store.dispatch(new SetAnalysis2HeaderData({
      analysisHeaderData:{type:EAnalysis2TypesEnum.totalMessages}
    }));
  }
  }

  ngOnInit() {
    this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('vol') || 'Sessions';
      debugger; 

      this.analysisstate2$
      .subscribe((value)=>{
        debugger;
        let x  = this.u.convert(value.channelWiseFlowsPerSession,"labels","Sessions") ;
        this.series_Sessions = x;
        let y  = this.u.convert(value.userAcquisition,"labels","Users") ;
        this.series_Users = y;
        let z  = this.u.convert(value.totalMessages,"labels","Messages") ;
        this.series_Messages = z;
      })

      

      // this.analysisstate2$
      // .subscribe((value)=>{
      //   debugger;
      // let y  = this.u.convert(value.channelWiseFlowsPerSession,"labels") ;
      //   this.series_Sessions = y;
      //   
      // })

      // .map((analysisState) => {
      //   debugger;
      // let x =  this.u.convert(analysisState.channelWiseFlowsPerSession,"labels") ;
      // });
  }


}
