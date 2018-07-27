import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IBot} from '../interfaces/IBot';
import {ViewBotStateModel} from '../view-bots/ngxs/view-bot.state';
import {ConstantsService} from '../../constants.service';
import {ServerService} from '../../server.service';
import {IOverviewInfoPostBody, IOverviewInfoResponse} from '../../../interfaces/overview-info';
import {UtilityService} from '../../utility.service';
import {st} from '@angular/core/src/render3';
import {SetOverViewInfo} from './ngxs/analysis.action';
import {IAnalysisState} from './ngxs/analysis.state';
import {NgForm} from '@angular/forms';
import {BsDatepickerConfig} from 'ngx-bootstrap';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  @Select() botlist$: Observable<ViewBotStateModel>;
  @Select() analysisstate$: Observable<IAnalysisState>;
  @ViewChild("f") form: NgForm;
  overviewInfo$: Observable<IOverviewInfoResponse>;
  datePickerConfig: Partial<BsDatepickerConfig>;

  start_date: string = "";
  end_date: string = "";
  granularity: string;
  bot_id: string;
  botList: IBot[];
  channelList = [
    {name: 'all', displayName: 'All channels'},
    {name: 'facebook', displayName: 'Facebook'},
    {name: 'web', displayName: 'WebChat'},
    {name: 'alexa', displayName: 'Alexa'}];
  timePeriodList = [
    {name: 'hour', displayName: 'Hour'},
    {name: 'day', displayName: 'Day'},
    {name: 'week', displayName: 'Week'},
    {name: 'month', displayName: 'Month'},
    {name: 'year', displayName: 'Year'}
  ];
  selectedBot: IBot = null;
  selectedTime: {name: string, displayName: string} = {displayName:'Monthly',name:"30"};
  selectedChannel: {name: string, displayName: string} = {displayName:'All Channels', name:'all'};

  constructor(
    private constantService: ConstantsService,
    private serverService: ServerService,
    private utilityService: UtilityService,
    private store: Store,
  ) {
    this.datePickerConfig = Object.assign({},{
      'containerClass':'theme-dark-blue',
      'dateInputFormat':'DD/MM/YYYY',
    });
  }

  ngOnInit() {
    this.botlist$.subscribe((value) => {
      if(value && value.codeBasedBotList){
        this.botList = value && [...value.codeBasedBotList, ...value.pipelineBasedBotList];
        this.botSelected(this.botList[0]);
      }
      if(!this.botList){
        this.serverService.getNSetBotList()
          .subscribe(()=>{
            console.log("bot list is set in store");
          })
      }
      setTimeout(()=>{
          this.botSelected(this.botList[0]);
      },0);
    });
    this.analysisstate$.subscribe((value)=>{
      if(!value || !value.overviewinfo) return;
      if(value.overviewinfo.selectedChannel) this.selectedChannel= value.overviewinfo.selectedChannel;
      if(value.overviewinfo.selectedTime) this.selectedTime  = value.overviewinfo.selectedTime;
      this.selectedBot =value.overviewinfo.selectedBot;
    });

    this.form.valueChanges.subscribe((value)=>{
      console.log(value);
      this.overviewInfoChanged(value);
    })
  }

  botSelected(bot) {

    this.selectedBot = bot;
    // this.overviewInfoChanged();
    this.form.form.updateValueAndValidity();
  }

  channelSelected(channel) {
    this.selectedChannel = channel;
    // this.overviewInfoChanged();
    this.form.form.updateValueAndValidity();
  }

  // timePeriodSelected(time:{name: string, displayName: string}) {
  //   // this.end_date= this.utilityService.getPriorDate(0);
  //   // this.start_date = this.utilityService.getPriorDate(Number(time.name));
  //   this.granularity = time.name;
  //   this.selectedTime = time;
  //   this.form.form.updateValueAndValidity();
  //   // this.overviewInfoChanged();;
  // }
  granularityChanged(time:{name: string, displayName: string}) {
    this.selectedTime = time;
    this.granularity = time.name;
    this.form.form.updateValueAndValidity();
  }

  // dateRangeChanged(data){
  //   setTimeout(()=>{
  //     console.log(this.end_date);
  //   });
  //   // this.overviewInfoChanged();
  // }

  overviewInfoChanged(formData: IOverviewInfoPostBody) {
    let overviewInfo:IOverviewInfoPostBody = {
      bot_id: this.selectedBot._id,
      platform: this.selectedChannel.name,
      start_date: this.utilityService.convertDateObjectStringToDDMMYY(formData.start_date),
      end_date: this.utilityService.convertDateObjectStringToDDMMYY(formData.end_date),
      granularity:this.granularity,
      /**/
      selectedTime:this.selectedTime,
      selectedBot:this.selectedBot,
      selectedChannel:this.selectedChannel
    };

    this.store.dispatch([
      new SetOverViewInfo({overviewInfo: overviewInfo})
    ]);
  }

}
