import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBot} from '../../../interfaces/IBot';
import {ActivatedRoute} from '@angular/router';
import {LoggingService} from '../../../../logging.service';
import {EBotType, UtilityService} from '../../../../utility.service';
import {EAllActions} from '../../../../constants.service';
import {EventService} from '../../../../event.service';
import {BotConfigService} from './bot-config.service';
import {FormControl, FormGroup, FormGroupDirective, NgForm} from '@angular/forms';
import {combineLatest} from 'rxjs';
import {ServerService} from '../../../../server.service';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material';

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

  @Input() bot: IBot;
  selectedTabIndex = 0;
  activeTab = 'basic';
  myEAllActions = EAllActions;
  @Output() datachanged$ = new EventEmitter();
  basicInfoForm: FormGroup;
  dataManagementForm: FormGroup;
  securityForm: FormGroup;
  integrationForm: NgForm;
  myEBotType = EBotType;
  bot_type;
  id;
  formDirty = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private utilityService: UtilityService,
    private botConfigService: BotConfigService,
    private serverService: ServerService,
  ) {
  }

  integrationFormInit(integrationForm: NgForm) {
    this.integrationForm = integrationForm;
  }


  ngOnInit() {
    this.basicInfoForm = this.botConfigService.getBasicInfoForm(this.bot);
    this.dataManagementForm = this.botConfigService.getDataManagementForm(this.bot);
    this.securityForm = this.botConfigService.getSecurityForm(this.bot);

    this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('config') || 'basic';
    this.bot_type = this.activatedRoute.snapshot.queryParamMap.get('bot_type') || this.activatedRoute.snapshot.data['bot_type'];
    this.id = this.activatedRoute.snapshot.queryParamMap.get('id');
  }

  tabClicked(activeTab: string) {
    this.activeTab = activeTab;
    LoggingService.log(this.activeTab);
  }

  /*
  * updateBotHandler: combine the data from various forms and update the bot
  * */
  updateBotHandler() {
    /**/
    let invalidFormIndex = this.getInvalidForm();
    if (invalidFormIndex >= 0) {

      this.selectedTabIndex = invalidFormIndex;
      this.showFormInvalidError(invalidFormIndex);
      return;
    }

    let combinedForms = [this.basicInfoForm, this.dataManagementForm, this.securityForm];
    combinedForms = combinedForms.filter(form => form);
    let bot = UtilityService.getCombinedBotData(combinedForms);
    if (this.integrationForm && this.integrationForm.value) {
      bot.integrations = this.integrationForm.value;
    }
    bot.id = this.bot.id;
    this.serverService.updateBot(bot);
  }

  getInvalidForm() {
    let combinedForms = [this.basicInfoForm, this.dataManagementForm, this.securityForm, this.integrationForm];
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
    } else if (index === 3) {
      this.utilityService.showErrorToaster('Integration form is not valid');
      return;
    }
  }

}
