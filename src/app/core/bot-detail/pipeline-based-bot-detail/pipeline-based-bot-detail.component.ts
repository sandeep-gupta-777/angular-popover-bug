import {Component, OnInit, ViewChild} from '@angular/core';
import {SaveInfoInBotInBotList} from '../../view-bots/ngxs/view-bot.action';
import {IBot} from '../../interfaces/IBot';
import {UtilityService} from '../../../utility.service';
import {BotSessionsComponent} from '../bot-sessions/bot-sessions.component';
import {ServerService} from '../../../server.service';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IOverviewInfoResponse} from '../../../../interfaces/overview-info';
import {ActivatedRoute} from '@angular/router';
import {ViewBotStateModel} from '../../view-bots/ngxs/view-bot.state';

@Component({
  selector: 'app-pipeline-based-bot-detail',
  templateUrl: './pipeline-based-bot-detail.component.html',
  styleUrls: ['./pipeline-based-bot-detail.component.scss']
})
export class PipelineBasedBotDetailComponent implements OnInit {


  @Select() botlist$: Observable<ViewBotStateModel>;
  @ViewChild(BotSessionsComponent) sessionChild: BotSessionsComponent;
  selectedTab = "architecture";
  bot$: Observable<IBot>;
  bot_id: number;
  showConfig:boolean =true;
  overviewInfo$: Observable<IOverviewInfoResponse>;
  selectedChannel: string = 'all';
  start_date: string;
  end_date: string;
  selectedChannelDisplayName: string;
  selectedDurationDisplayName: string = 'Monthly';
  selectedSideBarTab: string = 'pipeline';

  constructor(
    private activatedRoute: ActivatedRoute,
    private serverService: ServerService,
    private store: Store,
    private utilityService: UtilityService) {
  }

  ngOnInit() {
    // debugger;
    this.bot_id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    /*TODO: replace this code by writing proper selector*/
    this.selectedTab = this.activatedRoute.snapshot.queryParamMap.get('build') || "architecture";
    this.bot$ = this.botlist$.map((botlist) => {
      return botlist.allBotList.find((bot) => {
        return bot.id === this.bot_id;//
      });
      // console.log("view detailed bot", bot[0]);
      // return bot[0];
    });
    this.selectedSideBarTab = this.activatedRoute.snapshot.queryParamMap.get('build-tab')||'pipeline';

    this.start_date = this.utilityService.getPriorDate(0);
    this.end_date = this.utilityService.getPriorDate(30);
    this.getOverviewInfo();
  }

  selectedChannelChanged(channel: string, name: string) {
    this.selectedChannelDisplayName = name;
    this.selectedChannel = channel;
    this.getOverviewInfo();
  }

  selectedDurationChanged(priordays: number, name: string) {
    this.selectedDurationDisplayName = name;
    this.start_date = this.utilityService.getPriorDate(0);
    this.end_date = this.utilityService.getPriorDate(priordays);
    this.getOverviewInfo();
  }

  getOverviewInfo() {
    /*TODO: improve below by adding all the fields*/
    this.overviewInfo$ = this.serverService.getOverviewInfo({
      bot_id: this.bot_id,
      platform: this.selectedChannel,
      start_date: this.start_date,
      end_date: this.end_date
    });
  }

  refreshSession() {
    this.sessionChild.refreshSession();
  }

  tabChanged(tab: string) {
    this.selectedTab = tab;
  }

  datachanged(data:IBot){
    // debugger;
    this.store.dispatch([
      new SaveInfoInBotInBotList({data, botId:this.bot_id})
    ]);
    console.log(event);
  }


}
