import { Component, OnInit, ViewChild } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {ViewBotStateModel, ViewBotStateReducer} from '../../view-bots/ngxs/view-bot.state';
import { Observable } from 'rxjs';
import { IBot } from '../../interfaces/IBot';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { IOverviewInfoResponse } from '../../../../interfaces/Analytics2/overview-info';
import { ServerService } from '../../../server.service';
import { UtilityService } from '../../../utility.service';
import { BotSessionsComponent } from '../bot-sessions/bot-sessions.component';
import {UpdateBotInfoByIdInBotInBotList, SaveVersionInfoInBot} from '../../view-bots/ngxs/view-bot.action';
import {ConstantsService} from '../../../constants.service';
import {IHeaderData} from '../../../../interfaces/header-data';

@Component({
  selector: 'app-code-based-bot-detail',
  templateUrl: './code-based-bot-detail.component.html',
  styleUrls: ['./code-based-bot-detail.component.scss']
})
export class CodeBasedBotDetailComponent implements OnInit {

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
  bot: IBot;

  constructor(
    private activatedRoute: ActivatedRoute,
    private serverService: ServerService,
    private store: Store,
    private constantsService: ConstantsService,
    private utilityService: UtilityService) {
  }

  ngOnInit() {
    this.bot_id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    /*TODO: replace this code by writing proper selector*/
    this.selectedTab = this.activatedRoute.snapshot.queryParamMap.get('build') || "architecture";
    /*this.bot$ = */
    this.botlist$.subscribe((botListState) => {

      if(botListState.allBotList)
      return this.bot =  botListState.allBotList.find((bot) => {
        return bot.id === this.bot_id;
      });
    })
    this.selectedSideBarTab = this.activatedRoute.snapshot.queryParamMap.get('build-tab')||'pipeline';

    this.start_date = this.utilityService.getPriorDate(0);
    this.end_date = this.utilityService.getPriorDate(30);
    this.getOverviewInfo();
  }

  refreshBotDetails(){
    let getBotById = this.constantsService.getSpecificBotByBotTokenUrl();
    let headerData: IHeaderData  = {
      'bot-access-token': this.bot.bot_access_token
    };
    this.serverService.makeGetReq<{objects:IBot[]}>({url:getBotById, headerData})
      .subscribe((val)=>{
        this.store.dispatch([
          new UpdateBotInfoByIdInBotInBotList({data:val.objects[0], botId:this.bot.id})
        ]);
      })
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
    ;
    this.store.dispatch([
      new UpdateBotInfoByIdInBotInBotList({data, botId:this.bot_id})
    ]);
  }



}
