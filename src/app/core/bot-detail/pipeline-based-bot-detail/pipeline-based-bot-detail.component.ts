import {Component, OnInit, ViewChild} from '@angular/core';
import {UpdateBotInfoByIdInBotInBotList} from '../../view-bots/ngxs/view-bot.action';
import {IBot} from '../../interfaces/IBot';
import {UtilityService} from '../../../utility.service';
import {BotSessionsComponent} from '../bot-sessions/bot-sessions.component';
import {ServerService} from '../../../server.service';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IOverviewInfoResponse} from '../../../../interfaces/Analytics2/overview-info';
import {ActivatedRoute, Router} from '@angular/router';
import {ViewBotStateModel} from '../../view-bots/ngxs/view-bot.state';
import {EAllActions} from '../../../constants.service';

@Component({
  selector: 'app-pipeline-based-bot-detail',
  templateUrl: './pipeline-based-bot-detail.component.html',
  styleUrls: ['./pipeline-based-bot-detail.component.scss']
})
export class PipelineBasedBotDetailComponent implements OnInit {
myEAllActions = EAllActions

  @Select() botlist$: Observable<ViewBotStateModel>;
  isArchitectureFullScreen = false;
  @ViewChild(BotSessionsComponent) sessionChild: BotSessionsComponent;
  selectedTab = "architecture";
  bot$: Observable<IBot>;
  bot: IBot;
  bot_id: number;
  showConfig:boolean =false;
  overviewInfo$: Observable<IOverviewInfoResponse>;
  selectedChannel: string = 'all';
  start_date: string;
  end_date: string;
  selectedChannelDisplayName: string;
  selectedDurationDisplayName: string = 'Monthly';
  selectedSideBarTab: string = 'pipeline';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private serverService: ServerService,
    private store: Store,
    private utilityService: UtilityService) {
  }

  ngOnInit() {
    let isArchitectureFullScreen = this.activatedRoute.snapshot.queryParamMap.get('isArchitectureFullScreen');
    this.isArchitectureFullScreen = isArchitectureFullScreen==='true';
    let showConfigStr = this.activatedRoute.snapshot.queryParamMap.get('show-config');
    this.showConfig = showConfigStr === 'true';
    this.bot_id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    /*TODO: replace this code by writing proper selector*/
    this.selectedTab = this.activatedRoute.snapshot.queryParamMap.get('build') || "architecture";
    this.botlist$.subscribe((botlist) => {
      this.bot = botlist.allBotList.find((bot) => {
        return bot.id === this.bot_id;//
      })
    });

    this.selectedSideBarTab = this.activatedRoute.snapshot.queryParamMap.get('build-tab')||'pipeline';

    this.start_date = this.utilityService.getPriorDate(0);
    this.end_date = this.utilityService.getPriorDate(30);
    this.getOverviewInfo();
    this.activatedRoute.queryParams.subscribe((queryParams)=>{
      this.isArchitectureFullScreen= queryParams['isArchitectureFullScreen']==='true'
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
    this.store.dispatch([
      new UpdateBotInfoByIdInBotInBotList({data, botId:this.bot_id})
    ]);
  }

  refreshBotDetails(){
    this.serverService.fetchSpecificBotFromServerAndUpdateBotList(this.bot)
      .subscribe((bot)=>console.log('bot fetched', bot));
    this.serverService.getAllVersionOfBotFromServerAndStoreInBotInBotList(this.bot.id, this.bot.bot_access_token);
  }

  togglePanel(){
    /*TODO: this code is repeated in code-based-bot-detail.component.ts, put it in a service*/
    this.showConfig = !this.showConfig;
    // this.router.navigate(['.'], {queryParams:{'show-config':this.showConfig}});
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        ...this.activatedRoute.snapshot.queryParams,
        'show-config': this.showConfig
      }
    });
  }

}
