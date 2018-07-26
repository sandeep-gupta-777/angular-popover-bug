import {Component, OnInit} from '@angular/core';
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

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  @Select() botlist$: Observable<ViewBotStateModel>;
  @Select() analysisstate$: Observable<IAnalysisState>;
  overviewInfo$: Observable<IOverviewInfoResponse>;
  start_date: string;
  end_date: string;
  bot_id: string;
  botList: IBot[];
  channelList = [
    {name: 'all', displayName: 'All channels'},
    {name: 'facebook', displayName: 'Facebook'},
    {name: 'web', displayName: 'WebChat'},
    {name: 'alexa', displayName: 'Alexa'}];
  timePeriodList = [
    {name: '7', displayName: 'Weekly'},
    {name: '30', displayName: 'Monthly'},
    {name: '15', displayName: 'Bi-Monthly'},
    {name: '365', displayName: 'Yearly'}
  ];
  selectedBot: IBot = null;
  selectedTime: {name: string, displayName: string} = {displayName:'Monthly',name:"30"};
  selectedChannel: {name: string, displayName: string} = {displayName:'All Channels', name:'all'};

  constructor(
    private constantService: ConstantsService,
    private serverService: ServerService,
    private utilityService: UtilityService,
    private store: Store
  ) {}

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
    })
  }

  botSelected(bot) {
    this.selectedBot = bot;
    console.log(this.selectedBot);
    this.overviewInfoChanged();
  }

  channelSelected(channel) {
    this.selectedChannel = channel;
    this.overviewInfoChanged();
  }

  timePeriodSelected(time:{name: string, displayName: string}) {
    this.end_date= this.utilityService.getPriorDate(0);
    this.start_date = this.utilityService.getPriorDate(Number(time.name));
    this.selectedTime = time;
    this.overviewInfoChanged();
  }

  overviewInfoChanged() {
    let overviewInfo:IOverviewInfoPostBody = {
      bot_id: this.selectedBot._id,
      platform: this.selectedChannel.name,
      start_date: this.start_date,
      end_date: this.end_date,
      selectedTime:this.selectedTime,
      selectedBot:this.selectedBot,
      selectedChannel:this.selectedChannel
    };

    this.store.dispatch([
      new SetOverViewInfo({overviewInfo: overviewInfo})
    ]);
  }

}
