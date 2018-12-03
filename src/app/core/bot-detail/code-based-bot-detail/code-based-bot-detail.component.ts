import {Component, OnInit, ViewChild} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {ViewBotStateModel, ViewBotStateReducer} from '../../view-bots/ngxs/view-bot.state';
import {Observable} from 'rxjs';
import {IBot} from '../../interfaces/IBot';
import {ActivatedRoute, Route, Router} from '@angular/router';

import {IOverviewInfoResponse} from '../../../../interfaces/Analytics2/overview-info';
import {ServerService} from '../../../server.service';
import {UtilityService} from '../../../utility.service';
import {BotSessionsComponent} from '../bot-sessions/bot-sessions.component';
import {UpdateBotInfoByIdInBotInBotList, SaveVersionInfoInBot} from '../../view-bots/ngxs/view-bot.action';
import {ConstantsService, ERoleName, EAllActions} from '../../../constants.service';
import {IHeaderData} from '../../../../interfaces/header-data';
import {IUser} from '../../interfaces/user';
import {IAuthState} from '../../../auth/ngxs/auth.state';
import {LoggingService} from '../../../logging.service';
import {EventService} from '../../../event.service';

export enum EArchitectureTabs {
  pipeline,

}

@Component({
  selector: 'app-code-based-bot-detail',
  templateUrl: './code-based-bot-detail.component.html',
  styleUrls: ['./code-based-bot-detail.component.scss']
})
export class CodeBasedBotDetailComponent implements OnInit {

  myEAllActions = EAllActions;
  isArchitectureFullScreen = false;
  @Select() botlist$: Observable<ViewBotStateModel>;
  @ViewChild(BotSessionsComponent) sessionChild: BotSessionsComponent;
  @Select() loggeduser$: Observable<{ user: IUser }>;
  selectedTab = 'architecture';
  bot$: Observable<IBot>;
  bot_id: number;
  showConfig = true;
  overviewInfo$: Observable<IOverviewInfoResponse>;
  selectedChannel = 'all';
  start_date: string;
  isAdmin = false;
  end_date: string;
  selectedChannelDisplayName: string;
  selectedDurationDisplayName = 'Monthly';
  selectedSideBarTab = 'pipeline';
  bot: IBot;
  showLoader = false;
  noSuchBotMessage="";

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private serverService: ServerService,
    private store: Store,
    private constantsService: ConstantsService,
    public eventService: EventService,
    private utilityService: UtilityService) {
  }

  ngOnInit() {
    // this.loggeduser$.take(1).subscribe((loggedUserState:IAuthState)=>{
      const roleName = this.constantsService.loggedUser.role.name;
      this.showConfig = roleName !== ERoleName.Admin; //if its admin don't expand bot config by default
      if (roleName === ERoleName.Admin || roleName === ERoleName['Bot Developer']) {
        this.selectedTab = 'architecture';
      } else if (roleName === ERoleName.Tester) {
        this.selectedTab = 'testing';
      } else {
        this.selectedTab = 'sessions';
      }
    // });

    const isArchitectureFullScreen = this.activatedRoute.snapshot.queryParamMap.get('isArchitectureFullScreen');
    this.isArchitectureFullScreen = isArchitectureFullScreen === 'true';
    const showConfigStr = this.activatedRoute.snapshot.queryParamMap.get('show-config');
    if (showConfigStr) {
      this.showConfig = showConfigStr === 'true'; //(showConfigStr === 'true' || showConfigStr == undefined);;
    }
    this.bot_id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    /*TODO: replace this code by writing proper selector*/
    this.selectedTab = this.activatedRoute.snapshot.queryParamMap.get('build') || this.selectedTab;
    /*this.bot$ = */
    this.botlist$.subscribe((botListState) => {
      if (botListState.allBotList) {
        debugger;
        this.bot = botListState.allBotList.find((bot) => {
          return bot.id === this.bot_id;
        });
        if(!this.bot){
          this.noSuchBotMessage = "No such bot exists in your account";
        }
      }
      LoggingService.log('Bot Opened' + this.bot);
      return this.bot;
    });
    this.selectedSideBarTab = this.activatedRoute.snapshot.queryParamMap.get('build-tab') || this.selectedSideBarTab;

    this.start_date = this.utilityService.getPriorDate(0);
    this.end_date = this.utilityService.getPriorDate(30);
    this.getOverviewInfo();
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.isArchitectureFullScreen = queryParams['isArchitectureFullScreen'] === 'true';
    });
  }


  refreshCodeEditor() {
    /*codemirror needs to be refreshed after being visible; otherwise its content wont show*/
    setTimeout(() => this.utilityService.refreshCodeEditor$.emit());
  }

  refreshBotDetails() {
    this.serverService.fetchSpecificBotFromServerAndUpdateBotList(this.bot)
      .subscribe(() => {
        this.serverService.getAllVersionOfBotFromServerAndStoreInBotInBotList(this.bot.id, this.bot.bot_access_token);
      });
    // this.serverService.getAllVersionOfBotFromServerAndStoreInBotInBotList(this.bot.id, this.bot.bot_access_token);


    // let getBotByTokenUrl = this.constantsService.getSpecificBotByBotTokenUrl();
    // let headerData: IHeaderData = {
    //   'bot-access-token': this.bot.bot_access_token
    // };
    // this.serverService.makeGetReq<{ objects: IBot[] }>({url: getBotByTokenUrl, headerData})
    //   .subscribe((val) => {
    //
    //     let bot: IBot = val.objects.find((bot) => {
    //
    //       return bot.id === this.bot.id;
    //     });
    //     this.store.dispatch([
    //       new UpdateBotInfoByIdInBotInBotList({data: bot, botId: this.bot.id})
    //     ]);
    //   });
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
    // this.overviewInfo$ = this.serverService.getOverviewInfo({
    //   bot_id: this.bot_id,
    //   platform: this.selectedChannel,
    //   start_date: this.start_date,
    //   end_date: this.end_date
    // });
  }

  refreshSession() {
    this.sessionChild.refreshSession();
  }

  tabChanged(tab: string) {
    this.selectedTab = tab;
  }

  datachanged(data: IBot) {
    this.store.dispatch([
      new UpdateBotInfoByIdInBotInBotList({data, botId: this.bot_id})
    ]);
  }

  togglePanel() {
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
