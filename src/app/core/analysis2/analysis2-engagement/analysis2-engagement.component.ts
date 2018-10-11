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


  activeTab: string = 'Sessions';
  series_Sessions: any[] = [{
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
    private u:UtilityService
  ) {
  }

  tabClicked(activeTab: string) {
    this.activeTab = activeTab;
    if(this.activeTab==='Sessions'){
      this.store.dispatch(new SetAnalysis2HeaderData({
        analysisHeaderData:{type:EAnalysis2TypesEnum.userLoyalty}
      }));
    }
    if(this.activeTab==='Time'){
      this.store.dispatch(new SetAnalysis2HeaderData({
        analysisHeaderData:{type:EAnalysis2TypesEnum.channelWiseAverageSessionTime}
      }));
    }
    if(this.activeTab==='channel_Wise_Sessions'){
      this.store.dispatch(new SetAnalysis2HeaderData({
        analysisHeaderData:{type:EAnalysis2TypesEnum.channelWiseSessions}
      }));
    }
    if(this.activeTab==='channel_Wise_Users'){
      this.store.dispatch(new SetAnalysis2HeaderData({
        analysisHeaderData:{type:EAnalysis2TypesEnum.channelWiseUsers}
      }));
    }
    // added now
    if(this.activeTab === 'Users'){
      this.store.dispatch(new SetAnalysis2HeaderData({
        analysisHeaderData:{type:EAnalysis2TypesEnum.userAcquisition}
      }));
    }
  }

  ngOnInit() {
    this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('perf') || 'Users';
    this.analysisstate2$
      .subscribe((value)=>{
        // ;
        if(value.userLoyalty){
          this.series_Sessions  = this.u.convert(value.userLoyalty,"labels","String") ;
        }

        if(value.channelWiseAverageSessionTime){
          this.series_Time  = this.u.convert(value.channelWiseAverageSessionTime,"labels","Date") ;
        }
        
        if(value.channelWiseSessions){
          this.series_ChannelWiseSessions  = this.u.convert(value.channelWiseSessions,"labels","Date") ;
        }

        if(value.channelWiseUsers){
          this.series_ChannelWiseUsers  = this.u.convert(value.channelWiseUsers,"labels","Date") ;
        }
        // added now
        if(value.userAcquisition){
          this.series_Users  = this.u.convert(value.userAcquisition,"labels","Date") ;
        }
      })
  }


}