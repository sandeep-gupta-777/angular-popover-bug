import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BotSessionsComponent} from '../../bot-detail/bot-sessions/bot-sessions.component';
import {SaveNewBotInfo_CodeBased, SaveNewBotInfo_PipelineBased} from '../ngxs/buildbot.action';
import {Select, Store} from '@ngxs/store';
import {IBot} from '../../interfaces/IBot';
import {UtilityService} from '../../../utility.service';
import {ServerService} from '../../../server.service';
import {Observable} from 'rxjs';
import {IBotCreationState} from '../ngxs/buildbot.state';
import {IOverviewInfoResponse} from '../../../../interfaces/Analytics2/overview-info';
import {ConstantsService} from '../../../constants.service';

@Component({
  selector: 'app-build-pipeline-based-bot',
  templateUrl: './build-pipeline-based-bot.component.html',
  styleUrls: ['./build-pipeline-based-bot.component.scss']
})
export class BuildPipelineBasedBotComponent implements OnInit {

  @Select() botcreationstate$: Observable<IBotCreationState>;
  // @Select(state => state.botlist.codeBasedBotList) codeBasedBotList$: Observable<IBot[]>;
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
    private utilityService: UtilityService,
    private constantsService: ConstantsService,
    private store:Store

  ) { }
  activeTab:string = 'basic';
  @Input() bot = {};

  ngOnInit() {
    // ;
    this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('tab') || 'basic'; //todo: not a robust code
    this.botcreationstate$.subscribe((value)=>{
      // LoggingService.log('test');
      if(!value || !value.pipeLineBased) return;
      this.bot = value.pipeLineBased;
    });

    this.selectedSideBarTab = this.activatedRoute.snapshot.queryParamMap.get('build-tab')||'pipeline';

  }

  tabClicked(activeTab:string){
    this.activeTab = activeTab;
  }

  tabChanged(tab: string) {
    this.selectedTab = tab;
  }
  createBot(){
    let url = this.constantsService.getCreateNewBot();
    this.serverService.makePostReq({url:url, body:this.bot})
      .subscribe((value)=>{
      })
  }
  datachanged(data:IBot){
    // ;
    this.store.dispatch([
      new SaveNewBotInfo_PipelineBased({data:data})
    ]);
  }

}
