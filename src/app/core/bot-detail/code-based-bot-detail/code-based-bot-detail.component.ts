import { Component, OnInit, ViewChild } from '@angular/core';
import { Select } from '@ngxs/store';
import { ViewBotStateReducer } from '../../view-bots/ngxs/view-bot.state';
import { Observable } from 'rxjs';
import { IBot } from '../../interfaces/IBot';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { IOverviewInfoResponse } from '../../../../interfaces/overview-info';
import { ServerService } from '../../../server.service';
import { UtilityService } from '../../../utility.service';
import { BotSessionsComponent } from '../bot-sessions/bot-sessions.component';

@Component({
  selector: 'app-code-based-bot-detail',
  templateUrl: './code-based-bot-detail.component.html',
  styleUrls: ['./code-based-bot-detail.component.scss']
})
export class CodeBasedBotDetailComponent implements OnInit {

  @Select(state => state.botlist.codeBasedBotList) codeBasedBotList$: Observable<IBot[]>;
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
    private utilityService: UtilityService) {
  }

  ngOnInit() {
    this.bot_id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    /*TODO: replace this code by writing proper selector*/
    this.selectedTab = this.activatedRoute.snapshot.queryParamMap.get('build') || "architecture";
    this.bot$ = this.codeBasedBotList$.map((codeBasedBotList: IBot[]) => {
      return codeBasedBotList.find((bot) => {
        return bot.id === this.bot_id;//
      });
      // console.log("view detailed bot", bot[0]);
      // return bot[0];
    });

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

}
