import {Injectable} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Select, Store} from '@ngxs/store';
import {UtilityService, EBotType} from '../../../../utility.service';
import {ConstantsService} from '../../../../constants.service';
import {PermissionService} from '../../../../permission.service';
import {ActivatedRoute} from '@angular/router';
import {IBot} from '../../../interfaces/IBot';
import {Observable} from 'rxjs';
import {IAppState} from '../../../../ngxs/app.state';
import {IIntegrationMasterListItem} from '../../../../../interfaces/integration-option';

@Injectable()
export class BotConfigService {

  basicInfoForm: FormGroup;
  faqbotBuildForm: FormGroup;
  faqHandoverANdInterfaceForm: FormGroup;
  masterIntegrationList: IIntegrationMasterListItem[];
  @Select() app$: Observable<IAppState>;
  integration_types: string[];
  myEBotType = EBotType;
  constructor(private store: Store,
              private utilityService: UtilityService,
              public permissionService: PermissionService,
              public activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder
  ) {


    this.app$.subscribe((value) => {
      /*TODO: implement takeWhile*/
      this.masterIntegrationList = value.masterIntegrationList;
      if (!value.masterIntegrationList) {
        return;
      }
      this.integration_types = Array.from(new Set(this.masterIntegrationList.map(item => item.integration_type)));
    });
  }
  getFaqbotBuildForm(bot: IBot){
    this.faqbotBuildForm = this.formBuilder.group({
      name: [bot.name, Validators.required],
      bot_unique_name: [bot.bot_unique_name, Validators.required],
      allow_agent_handover: [bot.allow_agent_handover],
      allow_feedback: [bot.allow_feedback],
      logo: [bot.logo || 'https://s3.eu-west-1.amazonaws.com/imibot-production/assets/search-bot-icon.svg', [Validators.required, this.utilityService.imageUrlHavingValidExtnError, this.utilityService.imageUrlHttpsError]],
    },{validator: this.utilityService.isManagerValidator});
    return this.faqbotBuildForm;
  }
  getFaqHandoverANdInterfaceForm(bot: any){

    let agent_handover_setting:any = bot.agent_handover_setting;
    let fallback_count :any =  agent_handover_setting && agent_handover_setting.fallback_count;
    let partial_match_count:any=  agent_handover_setting &&  agent_handover_setting.partial_match_count;
    let consecutive_count:any = agent_handover_setting && agent_handover_setting.consecutive_count;
    this.faqHandoverANdInterfaceForm = this.formBuilder.group({
      bot_metadata: this.formBuilder.group(bot.bot_metadata),
      agent_handover_setting: this.formBuilder.group({
        consecutive_count: this.formBuilder.group({
          "enabled":[consecutive_count && consecutive_count.enabled ],
          "value":[{value:consecutive_count && consecutive_count.value}, Validators.required]
        }),
        fallback_count: this.formBuilder.group({
          "enabled":[fallback_count && fallback_count.enabled ],
          "value":[{value:fallback_count && fallback_count.value}, Validators.required]
        }),
        partial_match_count: this.formBuilder.group({
          "enabled":[partial_match_count && partial_match_count.enabled ],
          "value":[{value:partial_match_count && partial_match_count.value}, Validators.required]
        }),
      })
    });
    return this.faqHandoverANdInterfaceForm;
  }
  getBasicInfoForm(bot: IBot) {

      this.basicInfoForm = this.formBuilder.group({
        name: [bot.name, Validators.required],
        bot_unique_name: [bot.bot_unique_name, Validators.required],
        description: [bot.description],
        logo: [bot.logo || 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png', [Validators.required, this.utilityService.imageUrlHavingValidExtnError, this.utilityService.imageUrlHttpsError]],
        first_message: [bot.first_message],
        error_message: [bot.error_message],
      }, {validator: this.utilityService.isManagerValidator});


    return this.basicInfoForm;
  }


  

  getDataManagementForm(bot: IBot) {
    return this.formBuilder.group({
      // consent_message: [bot.consent_message],
      // advanced_data_protection: [bot.advanced_data_protection],
      // allow_anonymization: [bot.allow_anonymization],
      // blanket_consent: [bot.blanket_consent],
      room_persistence_time: [bot.room_persistence_time || 240, Validators.required],
      room_close_callback: [bot.room_close_callback],
      allow_feedback: [bot.allow_feedback],
      transactions_per_pricing_unit: [bot.transactions_per_pricing_unit || 30],
      is_manager: [bot.is_manager || false],
      child_bots: [bot.child_bots],
    },{validator: function checkPasswords(group: FormGroup) { // here we have the 'passwords' group
      let is_manager = group.controls.is_manager.value;
      let child_bot_control_val = group.controls.child_bots.value;
      let child_bots_count = Array.isArray(child_bot_control_val) && child_bot_control_val.length;

      if(is_manager && (!child_bots_count || child_bots_count ===0)){
        return { "Child bots required": true }
      }

      return null;
    } });
  }

  getSecurityForm(bot: IBot = {}) {
    return this.formBuilder.group({
      data_persistence_period: [bot.data_persistence_period || 30, Validators.required],
      // heading: [bot.heading],
      advanced_data_protection: [bot.advanced_data_protection||false],//new FormControl({value: bot.advanced_data_protection}, Validators.required),
      // transactions_per_pricing_unit: [bot.transactions_per_pricing_unit],
      // error_message: [bot.error_message],
      consent_message: [bot.consent_message],
      blanket_consent: [bot.blanket_consent],
      allow_anonymization: [bot.allow_anonymization],
      // first_message: [bot.first_message],
      // room_close_callback: [bot.room_close_callback],
      // allow_feedback: [bot.allow_feedback],
    });
  }


  getTypesForIntegrationType(integration_type: any, args?: any): any {
    const types: string[] = this.masterIntegrationList
      .filter((masterIntegrationItem) => masterIntegrationItem.integration_type === integration_type)
      .map((masterIntegrationItem) => masterIntegrationItem.type);

    return this.utilityService.deDupPrimitiveArray(types);

  }

  getIntegrationItemForType(type: string): any {
    const integrationItems = this.masterIntegrationList
      .filter((masterIntegrationItem) => masterIntegrationItem.type === type);
    // .map(masterIntegrationItem => masterIntegrationItem.key);
    return integrationItems;
  }

  getIntegrationForm(bot: IBot) {
    /*nested form example: https://stackblitz.com/github/Josh-Hicks/NBA-team-app*/
    let formGroup = this.formBuilder.group({});
    let integrations = bot.integrations;

    let x = this.integration_types.reduce((aggr, integration_type) => {
      let types: string[] = this.getTypesForIntegrationType(integration_type);
      let modalGroups = types.map((type: string) => {
        let integrationItems: IIntegrationMasterListItem[] = this.getIntegrationItemForType(type);
        return integrationItems.reduce((aggr, integrationItem) => {
          let inputs = Object.keys(integrationItem).reduce((aggr, key) => {
            return {
              ...aggr,
              [key]: [integrationItems[key]]
            };
          }, {});
          return {
            ...aggr,
            [integration_type]: this.formBuilder.group(inputs)
          };
        }, {});
      });

      return {
        ...aggr,
        [integration_type]: this.formBuilder.array(modalGroups)
      };
    }, {});

    let y = this.formBuilder.group(x);
    console.log(y);
    return y;

  }
}
