import {Component, IterableDiffers, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {ViewBotStateModel, ViewBotStateReducer} from '../../view-bots/ngxs/view-bot.state';
import {Observable} from 'rxjs';
import {IBot} from '../../interfaces/IBot';
import {ActivatedRoute, Route, Router} from '@angular/router';

import {IOverviewInfoResponse} from '../../../../interfaces/Analytics2/overview-info';
import {ServerService} from '../../../server.service';
import {EBotType, UtilityService} from '../../../utility.service';
import {BotSessionsComponent} from '../bot-sessions/bot-sessions.component';
import {UpdateBotInfoByIdInBotInBotList, SaveVersionInfoInBot} from '../../view-bots/ngxs/view-bot.action';
import {ConstantsService, ERoleName, EAllActions} from '../../../constants.service';
import {IHeaderData} from '../../../../interfaces/header-data';
import {IUser} from '../../interfaces/user';
import {IAuthState} from '../../../auth/ngxs/auth.state';
import {LoggingService} from '../../../logging.service';
import {EventService} from '../../../event.service';
import {SideBarService} from '../../../side-bar.service';
import {PipelineComponent} from '../../buildbot/build-code-based-bot/architecture/pipeline/pipeline.component';
import { MatDialog } from '@angular/material';

export enum ESideBarTab {
  setting = 'setting',
  input = 'input',
  logic = 'logic',
  chat = 'chat',
  test = 'test',
}

export enum EBotDetailTabs {
  pipeline,
  custom_ner,
  sessions,
  consumer
}

@Component({
  selector: 'app-code-based-bot-detail',
  templateUrl: './code-based-bot-detail.component.html',
  styleUrls: ['./code-based-bot-detail.component.scss']
})
export class CodeBasedBotDetailComponent implements OnInit, OnChanges {

  @ViewChild(PipelineComponent) PipelineComponent: PipelineComponent;
  myEAllActions = EAllActions;
  myEBotType = EBotType;
  myESideBarTab = ESideBarTab;
  mySideBarService = SideBarService;
  isArchitectureFullScreen = false;
  @Select() botlist$: Observable<ViewBotStateModel>;
  @ViewChild(BotSessionsComponent) sessionChild: BotSessionsComponent;
  @Select() loggeduser$: Observable<{ user: IUser }>;
  sideBarTab1:ESideBarTab = ESideBarTab.setting;
  logicTabClicked = false;
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
  noSuchBotMessage = '';
  iterableDiffer;
  MyESideBarTab = ESideBarTab;
  dialogRefWrapper = {ref:null};
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private serverService: ServerService,
    private store: Store,
    private matDialog: MatDialog,
    private _iterableDiffers: IterableDiffers,
    private constantsService: ConstantsService,
    public eventService: EventService,
    public utilityService: UtilityService) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  goFullScreen;
  botConfigData;
  dirtySideBarTabs={
      [ESideBarTab.setting]:false,
      [ESideBarTab.input]:false,
      [ESideBarTab.logic]:false,
      [ESideBarTab.chat]:false,
      [ESideBarTab.test]:false,
  };


  changePipelineDirtyStatus(pipeline:boolean, kb:boolean){
    this.dirtySideBarTabs[ESideBarTab.input] = pipeline || kb;
  }
  pipeline:boolean;
  kb:boolean;
  KB_DATA;

  ngOnInit() {

    EventService
      .createConceptFullScreen$
      .subscribe((goFullScreen) => {
        this.goFullScreen = goFullScreen;
      });

      EventService.knowledgeBaseData$.subscribe((isKbDirty:boolean)=>{
        this.kb =  isKbDirty;

        this.changePipelineDirtyStatus(this.pipeline, this.kb)
      });

    EventService.botDataDirty$.subscribe((value)=>{

      this.dirtySideBarTabs = {...this.dirtySideBarTabs, ...value};
    });


    // this.loggeduser$.take(1).subscribe((loggedUserState:IAuthState)=>{
    const roleName = this.constantsService.loggedUser.role.name;
    this.showConfig = roleName !== ERoleName.Admin; //if its admin don't expand bot config by default
    if (roleName === ERoleName.Admin || roleName === ERoleName['Bot Developer']) {
      this.sideBarTab1 = ESideBarTab.setting;
    }

    const isArchitectureFullScreen = this.activatedRoute.snapshot.queryParamMap.get('isArchitectureFullScreen');
    this.isArchitectureFullScreen = isArchitectureFullScreen === 'true';
    const showConfigStr = this.activatedRoute.snapshot.queryParamMap.get('show-config');
    if (showConfigStr) {
      this.showConfig = showConfigStr === 'true'; //(showConfigStr === 'true' || showConfigStr == undefined);;
    }
    this.bot_id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    /*TODO: replace this code by writing proper selector*/
    this.sideBarTab1 = <ESideBarTab>(this.activatedRoute.snapshot.queryParamMap.get('build') || this.sideBarTab1);
    if(this.sideBarTab1 === ESideBarTab.logic){
      this.logicTabClicked = true;
    }
    /*this.bot$ = */
    this.botlist$.subscribe((botListState) => {

      console.log(this.bot);
      if (botListState.allBotList) {

        this.bot = botListState.allBotList.find((bot) => {
          return bot.id === this.bot_id;
        });
        if (!this.bot) {
          this.noSuchBotMessage = 'No such _bot exists in your account';
        }
      }
      this.bot = {...this.bot};
      console.log(this.bot);
      LoggingService.log('Bot Opened' + this.bot);
      return this.bot;
    });
    this.selectedSideBarTab = this.activatedRoute.snapshot.queryParamMap.get('tab') || this.selectedSideBarTab;

    this.start_date = this.utilityService.getPriorDate(0);
    this.end_date = this.utilityService.getPriorDate(30);
    this.getOverviewInfo();
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.sideBarTab1 = queryParams['build'] || this.sideBarTab1;
      this.isArchitectureFullScreen = queryParams['isArchitectureFullScreen'] === 'true';
    });
  }





  refreshCodeEditor() {
    /*codemirror needs to be refreshed after being visible; otherwise its content wont show*/
    setTimeout(() => {
      this.utilityService.refreshCodeEditor$.emit();
    },300);
  }

  refreshBotDetails() {
    this.serverService.fetchSpecificBotFromServerAndUpdateBotList(this.bot)
      .subscribe(() => {
        this.serverService.getAllVersionOfBotFromServerAndStoreInBotInBotList(this.bot.id, this.bot.bot_access_token);
      });
    // this.serverService.getAllVersionOfBotFromServerAndStoreInBotInBotList(this.bot.roomId, this.bot.bot_access_token);


    // let getBotByTokenUrl = this.constantsService.getSpecificBotByBotTokenUrl();
    // let headerData: IHeaderData = {
    //   'bot-access-token': this.bot.bot_access_token
    // };
    // this.serverService.makeGetReq<{ objects: IBot[] }>({url: getBotByTokenUrl, headerData})
    //   .subscribe((val) => {
    //
    //     let bot: IBot = val.objects.find((bot) => {
    //
    //       return bot.roomId === this.bot.roomId;
    //     });
    //     this.store.dispatch([
    //       new UpdateBotInfoByIdInBotInBotList({data: bot, botId: this.bot.roomId})
    //     ]);
    //   });
  }

  selectedChannelChanged(channel: string, name: string) {
    this.selectedChannelDisplayName = name;
    this.selectedChannel = channel;
    this.getOverviewInfo();
  }

  sideBarTabChanged(sideBarTabChanged: ESideBarTab) {
    if(sideBarTabChanged === ESideBarTab.logic){
      setTimeout(()=>{
        this.logicTabClicked = true;
        this.refreshCodeEditor();
      },0)
    }
    if(sideBarTabChanged != this.sideBarTab1){
      if(SideBarService.isTabDirty(this.sideBarTab1)){
        this.utilityService.openCloseWithoutSavingModal(this.dialogRefWrapper,this.matDialog)
        .then((data)=>{
          if(data){
            SideBarService.reset();
            this.goFullScreen = false;
            this.sideBarTab1 = sideBarTabChanged;
            // core/botdetail/chatbot/398
            this.router.navigate([`core/botdetail/${this.bot.bot_type}/`, this.bot.id], {queryParams: {'build': sideBarTabChanged}});
          }
        })
      }
      else{
        SideBarService.reset();
        this.goFullScreen = false;
        this.sideBarTab1 = sideBarTabChanged;
        // core/botdetail/chatbot/398
        this.router.navigate([`core/botdetail/${this.bot.bot_type}/`, this.bot.id], {queryParams: {'build': sideBarTabChanged}});
      }
    }

    // if(SideBarService.isTabDirty(this.sideBarTab1) && !confirm("Data is dirty. Continue?")){
    //   return;
    // }
    // SideBarService.reset();
    // this.goFullScreen = false;
    // this.sideBarTab1 = sideBarTabChanged;
    // // core/botdetail/chatbot/398
    // this.router.navigate(['core/botdetail/chatbot/', this.bot.id], {queryParams: {'build': sideBarTabChanged}});
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

  tabChanged(tab: ESideBarTab) {
    this.sideBarTab1 = tab;
  }


  pipelineDataChangeHandler({pipelines}) {
    let bot = {pipelines};
    let isDirty = !UtilityService.isObjectSubSet(this.bot, bot);
    this.dirtySideBarTabs[ESideBarTab.input] = isDirty;
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

  spinReloadSessionTableSpinner = false;

  reloadSessionsHandler() {
    this.spinReloadSessionTableSpinner = true;
    setTimeout(() => this.spinReloadSessionTableSpinner = false, 2000);
    this.eventService.reloadSessionTable$.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }




  botConfigDataChangeHandler(basicInfoData:IBot , tabName){
    let isDirty = !UtilityService.isObjectSubSet(this.bot, basicInfoData);
    this.dirtySideBarTabs[ESideBarTab.setting] = isDirty;
  }

  goBackToDashboard(){
    debugger;
    if(SideBarService.isTabDirty(SideBarService.activeTab)){
      this.utilityService.openCloseWithoutSavingModal(this.dialogRefWrapper, this.matDialog)
      .then((data)=>{
        if(data){
          this.router.navigate(['/']);
        }
      })
      
    }
    else{
      this.router.navigate(['/']);
    }
    
  }


}
