import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IBot} from '../../interfaces/IBot';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IBotConfig} from '../../../../interfaces/bot-creation';
import {IBotCreationState} from '../ngxs/buildbot.state';
import { ServerService } from '../../../server.service';
import { UtilityService } from '../../../utility.service';
import { IOverviewInfoResponse } from '../../../../interfaces/Analytics2/overview-info';
import { BotSessionsComponent } from '../../bot-detail/bot-sessions/bot-sessions.component';
import {ConstantsService} from '../../../constants.service';
import {SaveNewBotInfo_CodeBased} from '../ngxs/buildbot.action';

@Component({
  selector: 'app-build-code-based-bot',
  templateUrl: './build-code-based-bot.component.html',
  styleUrls: ['./build-code-based-bot.component.scss']
})
export class BuildCodeBasedBotComponent implements OnInit {

  @Select() botcreationstate$: Observable<IBotCreationState>;
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
      if(!value || !value.codeBased) return;
      this.bot = value.codeBased;
    });

    this.selectedSideBarTab = this.activatedRoute.snapshot.queryParamMap.get('build-tab')||'pipeline';

  }

  tabClicked(activeTab:string){
    this.activeTab = activeTab;
    console.log(this.activeTab);
  }

  tabChanged(tab: string) {
    this.selectedTab = tab;
  }
  createBot(){
    let url = this.constantsService.getCreateNewBot();
    this.serverService.makePostReq({url:url, body:this.bot})
      .subscribe((value)=>{
        console.log();
        // ;
      })
  }
  datachanged(data:Partial<IBot>){
    // ;
    this.store.dispatch([
      new SaveNewBotInfo_CodeBased({data:data})
    ]);
  }

}
