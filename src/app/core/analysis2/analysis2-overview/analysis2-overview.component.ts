import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IOverviewInfoResponse} from '../../../../interfaces/overview-info';
import {IAnalysisState} from '../../analysis/ngxs/analysis.state';
import {Select} from '@ngxs/store';
import {ServerService} from '../../../server.service';
import {ConstantsService} from '../../../constants.service';
import {IAnalyticsHeaderData, IHeaderData} from '../../../../interfaces/header-data';
import {IUser} from '../../interfaces/user';
import {UtilityService} from '../../../utility.service';

@Component({
  selector: 'app-analysis2-overview',
  templateUrl: './analysis2-overview.component.html',
  styleUrls: ['./analysis2-overview.component.scss']
})
export class Analysis2OverviewComponent implements OnInit {

  @Select() analysisstate2$: Observable<IAnalysisState>;
  @Select() loggeduser$: Observable<{ user: IUser }>;
  result$:Observable<IOverviewInfoResponse>;
  constructor(
    private serverService:ServerService,
    private constantsService:ConstantsService,
    private utilityService:UtilityService,
  ) { }

  ngOnInit() {
    // this.loggeduser$.subscribe((loggeduser)=>{
    //   this.analysisstate2$.subscribe((analysisstate)=>{
    //     try{
    //       let url = this.constantsService.getAnalyticsUrl();
    //       let headerData:IAnalyticsHeaderData = {
    //         startdate:this.utilityService.convertDateObjectStringToDDMMYY(analysisstate.overviewinfo.startdate),
    //         enddate:this.utilityService.convertDateObjectStringToDDMMYY(analysisstate.overviewinfo.enddate),
    //         platform:analysisstate.overviewinfo.platform,
    //         type:"averageRoomTime",
    //         'auth-token': loggeduser.user.auth_token,//'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTE4LCJyb2xlIjoiYXV0aCJ9.6AFhp9k-XLGLcntigbhxrCvPIdj8FiPqlqsQe19mXAY',
    //         'bot-access-token':analysisstate.overviewinfo.selectedBot.bot_access_token,
    //         "user-access-token": loggeduser.user.user_access_token//'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwicm9sZSI6ImJvdCJ9.ZV8O_UJ29UDzc-5od1Yl8xTsOdhDkw9Lo6FuQeK-nKw'
    //       };
    //       this.serverService.makeGetReq({url, headerData})
    //         .subscribe((value)=>{
    //           console.log(value);
    //         })
    //     }catch (e) {
    //       this.utilityService.showErrorToaster(e);
    //     }
    //   })
    // })
  }

}
