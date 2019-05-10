import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ResetBuildBotToDefault, SaveNewBotInfo_CodeBased, SaveNewBotInfo_PipelineBased} from './ngxs/buildbot.action';
import {IBot} from '../interfaces/IBot';
import {IBotCreationState} from './ngxs/buildbot.state';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ServerService} from '../../server.service';
import {ConstantsService} from '../../constants.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {EBotType, UtilityService} from '../../utility.service';
import {AddNewBotInAllBotList, SetAllBotListAction} from '../view-bots/ngxs/view-bot.action';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BotConfigService} from './build-code-based-bot/bot-config/bot-config.service';
import {CODE_BASED_DEFAULT_ICON, PIPELINE_DEFAULT_ICON} from "../../asset.service";

import {MatDialog} from '@angular/material';
import { SideBarService } from 'src/app/side-bar.service';
@Component({
  selector: 'app-buildbot-wrapper',
  templateUrl: './buildbot-wrapper.component.html',
  styleUrls: ['./buildbot-wrapper.component.scss']
})
export class BuildbotWrapperComponent implements OnInit {

  @Select() botcreationstate$: Observable<IBotCreationState>;
  @Select(state => state.botlist.codeBasedBotList) codeBasedBotList$: Observable<IBot[]>;
  formValidNumber = -1;
  bot: IBot = {};
  bot_type: string = EBotType.chatbot;
  formGroup: FormGroup;
  dialogRefWrapper = {ref:null};
  @Output() datachanged$ = new EventEmitter();
  activeTab = 0;
  headings = [
    'Bot Profile',
    'Bot Management',
    'Security and privacy'
  ];
  heading = this.headings[0];
  descriptions = [
    'Complete the bot details to go to the next space',
    'Complete the bot details to go to the next space',
    'Compliance with regulations and data protection',
    'Provide the neccesary details to complete bot creation'
  ];
  description = this.descriptions[0];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private serverService: ServerService,
    private utilityService: UtilityService,
    private constantsService: ConstantsService,
    private formBuilder: FormBuilder,
    private store: Store,
    private botConfigService: BotConfigService,
    private matDialog: MatDialog
  ) {
  }

  logoErrorObj = [
    {name: 'imageExnError', description: 'Invalid Extension'},
    {name: 'imageHttpsError', description: 'Only Https urls allowed'}];

  stageValidObj: object = {
    0: false,
    1: false,
    2: false,
  };

  myObject = Object;
  myEBotType = EBotType;
  basicInfoForm: FormGroup;
  dataManagementForm: FormGroup;
  securityForm: FormGroup;
  faqbotBuildForm: FormGroup;
  ngOnInit() {
    this.bot_type = this.activatedRoute.snapshot.queryParamMap.get('bot_type') || this.bot_type;
    if(this.bot_type === EBotType.faqbot){      
      this.description = this.descriptions[3];
    }
    this.faqbotBuildForm = this.botConfigService.getFaqbotBuildForm(this.bot);
    this.basicInfoForm = this.botConfigService.getBasicInfoForm(this.bot);
    this.dataManagementForm = this.botConfigService.getDataManagementForm(this.bot);
    this.securityForm = this.botConfigService.getSecurityForm(this.bot);
    SideBarService.init(this);
    this.stageValidObj = {
      0:this.basicInfoForm.valid,
      1:this.dataManagementForm.valid,
      2:this.securityForm.valid
    };


    this.basicInfoForm.valueChanges.subscribe(()=>this.stageValidObj[0] = this.basicInfoForm.valid);
    this.dataManagementForm.valueChanges.subscribe(()=>this.stageValidObj[1] = this.dataManagementForm.valid);
    this.securityForm.valueChanges.subscribe(()=>this.stageValidObj[2] = this.securityForm.valid);
    this.faqbotBuildForm.valueChanges.subscribe(()=>this.stageValidObj[0] = this.faqbotBuildForm.valid);

    if (this.bot_type === EBotType.intelligent) {
      this.stageValidObj = {0: false};
    }
    if(this.bot_type === EBotType.faqbot){      
      this.stageValidObj = {0:this.faqbotBuildForm.valid};
    }
  }

  loading = false;


  createBot() {

    this.loading = true;
    let combinedForm = this.bot_type === EBotType.chatbot? [this.basicInfoForm, this.dataManagementForm, this.securityForm]: this.bot_type === EBotType.faqbot? [this.faqbotBuildForm]:[this.basicInfoForm];
    const bot = UtilityService.getCombinedBotData(combinedForm);
    const url = this.constantsService.getCreateNewBot();
    bot.bot_type = this.bot_type;
    if (!this.bot.logo) {
      this.bot.logo = 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png';
    }
    this.serverService.makePostReq({url: url, body: bot})
      .subscribe((createdBot: IBot) => {
        this.store.dispatch([
          new AddNewBotInAllBotList({bot: createdBot}),
          new ResetBuildBotToDefault()
        ]).subscribe(() => {
          this.router.navigate([`/core/botdetail/${this.bot_type}/${createdBot.id}`]);
        });
        this.utilityService.showSuccessToaster('Bot Created');
        this.loading = false;
      }, () => {
        this.loading = false;
      });
  }


  datachanged(data: IBot) {
    const bot_type = this.activatedRoute.snapshot.queryParamMap.get('bot_type');
    if (bot_type === EBotType.chatbot) {
      this.store.dispatch([
        new SaveNewBotInfo_CodeBased({data: data})
      ]);
    } else {
      this.store.dispatch([
        new SaveNewBotInfo_PipelineBased({data: data})
      ]);
    }
  }

  removeDataAndNavigateToDashboard() {
    this.store.dispatch([
      new ResetBuildBotToDefault()
    ]);
    this.router.navigate(['']);
  }


  selectedIndexChange(activeTab: number) {
    this.activeTab = activeTab;
    this.heading = this.headings[activeTab];
    this.description = this.descriptions[activeTab];
    
    
  }

  updateBot(bot: IBot) {
    this.bot = {...this.bot, ...bot};
  }

  nextStep(activeTab: number) {
    if (activeTab > Object.keys(this.stageValidObj).length - 1) {
      let invalidIndex = Object.keys(this.stageValidObj).findIndex((key) => !this.stageValidObj[key]);
      if (invalidIndex === -1) {
        this.createBot();
      } else {
        this.activeTab = invalidIndex;
      }
    } else {
      this.activeTab = activeTab;
    }
  }

  enterKeyHandler() {
    if (this.stageValidObj[this.activeTab]) {
      this.nextStep(this.activeTab + 1);
    }
  }

  goBack(){
    // console.log(this.basicInfoForm.untouched , this.dataManagementForm.untouched , this.securityForm.untouched);
    if(this.loading) return;
    console.log(SideBarService.buildbotWrapperComponent);

    console.log(SideBarService.buildbotData_init);
    if(SideBarService.isBuildBotDirty()){
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

  putBuildBotFinalData(){
    return {
      basicInfoForm : this.basicInfoForm.value,
      dataManagementForm : this.dataManagementForm.value,
      securityForm : this.securityForm.value,
      faqbotBuildForm : this.faqbotBuildForm.value
    }
  }

  updateFormValidNumber(formValidNumber, isValid: boolean) {
    this.stageValidObj[formValidNumber] = isValid;
  }
}
