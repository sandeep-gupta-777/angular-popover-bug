import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBot} from '../../../interfaces/IBot';
import {ActivatedRoute} from '@angular/router';
import {LoggingService} from '../../../../logging.service';
import {EBotType, UtilityService} from '../../../../utility.service';
import {EventService} from '../../../../event.service';
import {BotConfigService} from './bot-config.service';
import {FormControl, FormGroup, FormGroupDirective, NgForm} from '@angular/forms';
import {ServerService} from '../../../../server.service';
import {ErrorStateMatcher} from '@angular/material';
import {Observable, Subscription} from 'rxjs';
import {EAllActions, ERoleName} from '../../../../typings/enum';
import {ELoadingStatus} from '../../../../button-wrapper/button-wrapper.component';
import {IUser} from '../../../interfaces/user';
import {Select} from '@ngxs/store';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher1 implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid);
  }
}

@Component({
  selector: 'app-bot-config',
  templateUrl: './bot-config.component.html',
  styleUrls: ['./bot-config.component.scss'],
  providers: [
    {provide: ErrorStateMatcher, useClass: MyErrorStateMatcher1}
  ]
})
export class BotConfigComponent implements OnInit {
  tag = 'BotConfigComponent';
  @Input() bot: IBot;
  selectedTabIndex = 0;
  activeTab = 'basic';
  myEAllActions = EAllActions;
  @Output() datachanged$ = new EventEmitter();
  @Output() botData$ = new EventEmitter();
  basicInfoForm: FormGroup;
  dataManagementForm: FormGroup;
  securityForm: FormGroup;
  faqHandoverANdInterfaceForm : FormGroup;
  integrationForm: NgForm;
  myEBotType = EBotType;
  intigrationFormSubcription : Subscription;
  bot_type;
  id;
  disableAgentToggleBAD = false;//todo: shoiab, remove it in prod
  formDirty = false;
  role :ERoleName;
  shouldDisableForm = false;
  @Output() initDone$ = new EventEmitter<BotConfigComponent>();
  @Select() loggeduser$: Observable<{ user: IUser }>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private utilityService: UtilityService,
    private botConfigService: BotConfigService,
    private serverService: ServerService,
  ) {
  }

  integrationFormInit(integrationForm: NgForm) {
    this.integrationForm = integrationForm;
    this.integrationForm.valueChanges.subscribe(()=>this.emitBotDirtyEvent(true));
    this.initDone$.emit(this);
  }

  emitBotDirtyEvent(isDirty){
    // EventService.botDataDirty$.emit({[ESideBarTab.setting]:isDirty});

    this.botData$.emit(this.createBotData());

  }


  ngOnInit() {
    this.bot_type = this.activatedRoute.snapshot.queryParamMap.get('bot_type') || this.activatedRoute.snapshot.data['bot_type'];

    EventService.botUpdatedInServer$.subscribe(()=>{
      this.initDone$.emit(this);
    });

    this.basicInfoForm = this.botConfigService.getBasicInfoForm(this.bot);
    this.dataManagementForm = this.botConfigService.getDataManagementForm(this.bot);
    this.securityForm = this.botConfigService.getSecurityForm(this.bot);
    this.faqHandoverANdInterfaceForm = this.botConfigService.getFaqHandoverANdInterfaceForm(this.bot);
    this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('config') || 'basic';
    this.id = this.activatedRoute.snapshot.queryParamMap.get('id');

    this.basicInfoForm.valueChanges.subscribe(()=>this.emitBotDirtyEvent(true));
    this.dataManagementForm.valueChanges.subscribe(()=>this.emitBotDirtyEvent(true));
    this.securityForm.valueChanges.subscribe(()=>this.emitBotDirtyEvent(true));
    this.faqHandoverANdInterfaceForm.valueChanges.subscribe(()=>this.emitBotDirtyEvent(true));

    this.loggeduser$.subscribe((loggedUserState)=>{
      if(loggedUserState && loggedUserState.user && loggedUserState.user.role){
        this.role = loggedUserState.user.role.name as ERoleName;
        if(this.role === ERoleName.Tester || this.role === ERoleName.Analyst ){
          this.basicInfoForm.disable();
          this.dataManagementForm.disable();
          this.securityForm.disable();
          this.faqHandoverANdInterfaceForm.disable();
          this.disableAgentToggleBAD = true;
          debugger;
        }
      }
    })

    if(this.bot_type === EBotType.intelligent){
      /**
       * for type = chatbot, wait for integration form to init
       * */
      this.initDone$.emit(this);
    }
  }
  ngOnDestroy(){
    this.botData$.emit(this.bot);
  }
  tabClicked(activeTab: string) {
    this.activeTab = activeTab;
    LoggingService.log(this.activeTab);
    if(this.intigrationFormSubcription) this.intigrationFormSubcription.unsubscribe();
  }


  createBotData(){
    let combinedForms = [this.basicInfoForm, this.dataManagementForm, this.securityForm, this.faqHandoverANdInterfaceForm ];
    combinedForms = combinedForms.filter(form => form);
    let bot = UtilityService.getCombinedBotData(combinedForms);
    if (this.integrationForm && this.integrationForm.value) {
      bot.integrations = this.integrationForm.value;
    }
    return bot;
  }

  updateBotLoading = ELoadingStatus.default;
  updateBotTooltipText="";
  /*
  * updateBotHandler: combine the data from various forms and update the bot
  * */
  updateBotHandler() {
    let invalidFormIndex = this.getInvalidForm();
    if (invalidFormIndex >= 0) {
      this.selectedTabIndex = invalidFormIndex;
      this.showFormInvalidError(invalidFormIndex);
      this.updateBotTooltipText = "test";
      return;
    }
    let bot = this.createBotData();
    bot.id = this.bot.id;
    bot.bot_access_token = this.bot.bot_access_token;
    this.updateBotLoading = ELoadingStatus.loading;
    this.serverService.updateBot(bot).subscribe(()=>{
      this.updateBotLoading = ELoadingStatus.success;
      this.emitBotDirtyEvent(false);
    },()=>{
      this.updateBotLoading = ELoadingStatus.error;
    });
  }

  getInvalidForm() {
    let combinedForms;
    if(this.bot.bot_type == EBotType.faqbot){
      combinedForms = [this.basicInfoForm, this.dataManagementForm, this.securityForm,this.faqHandoverANdInterfaceForm, this.integrationForm ];
    }
    else{
      combinedForms = [this.basicInfoForm, this.dataManagementForm, this.securityForm, this.integrationForm ];
    }
    return combinedForms.filter(form=>!!form).findIndex((form) => {
      return form.invalid;
    });
  }

  showFormInvalidError(index) {
    if (index === 0) {
      this.utilityService.showErrorToaster('Basic info form is not valid');
      return;
    } else if (index === 1) {
      this.utilityService.showErrorToaster('Data management form is not valid');
      return;
    } else if (index === 2) {
      this.utilityService.showErrorToaster('Security form is not valid');
      return;
    } else if (index === 4) {
      this.utilityService.showErrorToaster('Integration form is not valid');
      return;
    }else if (index === 3 && this.bot.bot_type == EBotType.chatbot){
      this.utilityService.showErrorToaster('Integration form is not valid');
      return;
    }else if (index === 3 && this.bot.bot_type == EBotType.faqbot){
      this.utilityService.showErrorToaster('Handover and inference form is not valid');
      return;
    }
  }

}
