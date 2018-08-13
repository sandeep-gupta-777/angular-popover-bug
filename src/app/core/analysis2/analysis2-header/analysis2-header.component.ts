import {AfterViewInit, Component, Input, NgZone, OnInit, ViewChild} from '@angular/core';
import {BotConfigComponent} from '../../buildbot/build-code-based-bot/bot-config/bot-config.component';
import {IBot} from '../../interfaces/IBot';
import {ViewBotStateModel} from '../../view-bots/ngxs/view-bot.state';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';
import {ConstantsService} from '../../../constants.service';
import {BsDatepickerConfig} from 'ngx-bootstrap';
import {Select, Store} from '@ngxs/store';
import {SetOverViewInfo2} from '../ngxs/analysis.action';
import {IAnalysisState} from '../../analysis/ngxs/analysis.state';
import {IOverviewInfoPostBody} from '../../../../interfaces/overview-info';
import {IAnalyticsHeaderData} from '../../../../interfaces/header-data';
import {ServerService} from '../../../server.service';
import {UtilityService} from '../../../utility.service';
import {IUser} from '../../interfaces/user';

@Component({
  selector: 'app-analysis2-header',
  templateUrl: './analysis2-header.component.html',
  styleUrls: ['./analysis2-header.component.scss']
})
export class Analysis2HeaderComponent implements OnInit, AfterViewInit {

  @Input() allbotList:IBot[];
  @ViewChild("form") f : NgForm;
  @Select() analysisstate2$: Observable<IAnalysisState>;
  @Select() loggeduser$: Observable<{ user: IUser }>;
  startdate = new Date();
  enddate = new Date();
  datePickerConfig: Partial<BsDatepickerConfig> = this.constantsService.DATE_PICKER_CONFIG;
  channelList = this.constantsService.CHANNEL_LIST;
  constructor(
    private store:Store,
    private serverService:ServerService,
    private constantsService:ConstantsService,
    private utilityService:UtilityService
  ) { }

  ngOnInit() {
    this.f.form.valueChanges
      .debounceTime(1000)
      .subscribe((formData)=>{
        if(!this.f.valid) return;
        let selectedBot:IBot = this.allbotList.find((bot)=>bot.id === Number(this.f.value.botId));
        // debugger;
        let overviewInfo: IOverviewInfoPostBody = {
          selectedBot:selectedBot,
          platform:'web',
          ...formData
        };
        this.store.dispatch([
          new SetOverViewInfo2({overviewInfo})
        ]);
      });
    this.initiateGetAnalyticsDataObservable();
  }

  onAddonClicked( event ){

  }
  ngAfterViewInit(){
    setTimeout(()=>{
      this.f.form.patchValue({botId:this.allbotList[0].id, platform:this.channelList[0].name});
    },0);
  }
  click(){
    console.log(this.f.value);
  }

  initiateGetAnalyticsDataObservable(){
    this.loggeduser$.subscribe((loggeduser)=>{
      this.analysisstate2$.subscribe((analysisstate)=>{
        try{
          let url = this.constantsService.getAnalyticsUrl();
          let headerData:IAnalyticsHeaderData = {
            startdate:this.utilityService.convertDateObjectStringToDDMMYY(analysisstate.overviewinfo.startdate),
            enddate:this.utilityService.convertDateObjectStringToDDMMYY(analysisstate.overviewinfo.enddate),
            platform:analysisstate.overviewinfo.platform,
            type:"averageRoomTime",
            'auth-token': loggeduser.user.auth_token,//'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTE4LCJyb2xlIjoiYXV0aCJ9.6AFhp9k-XLGLcntigbhxrCvPIdj8FiPqlqsQe19mXAY',
            'bot-access-token':analysisstate.overviewinfo.selectedBot.bot_access_token,
            "user-access-token": loggeduser.user.user_access_token//'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwicm9sZSI6ImJvdCJ9.ZV8O_UJ29UDzc-5od1Yl8xTsOdhDkw9Lo6FuQeK-nKw'
          };
          this.serverService.makeGetReq({url, headerData})
            .subscribe((value)=>{
              console.log(value);
            })
        }catch (e) {
          this.utilityService.showErrorToaster(e);
        }
      })
    })

  }

}
