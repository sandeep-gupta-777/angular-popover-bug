import { Component, OnInit } from '@angular/core';
import {ConstantsService} from '../../../../constants.service';
import {Observable} from 'rxjs';
import {UtilityService} from '../../../../utility.service';
import {EAnalysis2TypesEnum} from '../../../../../interfaces/Analytics2/analysis2-types';
import {Select, Store} from '@ngxs/store';
import {ActivatedRoute} from '@angular/router';
import {IAnalysis2State} from '../../ngxs/analysis.state';
import {SetAnalysis2HeaderData} from '../../ngxs/analysis.action';

@Component({
  selector: 'app-analytics2-users',
  templateUrl: './analytics2-users.component.html',
  styleUrls: ['./analytics2-users.component.scss']
})
export class Analytics2UsersComponent implements OnInit {
  @Select() analysisstate2$: Observable<IAnalysis2State>;
  myEAnalysis2TypesEnum = EAnalysis2TypesEnum;
  activeTab: string = EAnalysis2TypesEnum.userAcquisition;
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
    if(this.activeTab){
      this.store.dispatch(new SetAnalysis2HeaderData({
        analysisHeaderData:{type:this.activeTab}
      }));
    }
  }

  ngOnInit() {
    this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('activeTab') || EAnalysis2TypesEnum.userAcquisition;
    this.tabClicked(this.activeTab);
    this.analysisstate2$
      .subscribe((value)=>{
        this.series_Sessions = this.u.convert(value.userAcquisition,"labels","Date") ;
      })
  }



}
