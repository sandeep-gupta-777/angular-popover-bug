import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Select, Store} from '@ngxs/store';
import {EBotType, UtilityService} from '../../../../utility.service';
import {PermissionService} from '../../../../permission.service';
import {ActivatedRoute} from '@angular/router';
import {IBot} from '../../../interfaces/IBot';
import {Observable} from 'rxjs';
import {IAppState} from '../../../../ngxs/app.state';
import {IIntegrationMasterListItem} from '../../../../../interfaces/integration-option';
import {FormsService} from '../../../../forms.service';

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
      /* TODO: implement takeWhile*/
      this.masterIntegrationList = value.masterIntegrationList;
      if (!value.masterIntegrationList) {
        return;
      }
      this.integration_types = Array.from(new Set(this.masterIntegrationList.map(item => item.integration_type)));
    });
  }

  getFaqbotBuildForm(bot: IBot) {
    this.faqbotBuildForm = this.formBuilder.group({
      name: [bot.name, [FormsService.startWithAlphanumericValidator(), FormsService.lengthValidator({min: 1, max: 64})]],
      bot_unique_name: [bot.bot_unique_name, [FormsService.lengthValidator({min: 1, max: 64}), FormsService.startWithAlphanumericValidator()].reverse()],
      allow_agent_handover: [bot.allow_agent_handover],
      allow_feedback: [bot.allow_feedback],
      language: [bot.language || 'en'],
      logo: [bot.logo || 'https://s3.eu-west-1.amazonaws.com/imibot-production/assets/mlbot-icon.svg',
        [FormsService.lengthValidator({
          min: 1
        }), FormsService.imageUrlHavingValidExtnErrorV2(), FormsService.startWithHttpsValidator()]],
    }, {validator: this.utilityService.isManagerValidator});
    return this.faqbotBuildForm;
  }

  getMlbotBuildForm(bot: IBot) {
    this.faqbotBuildForm = this.formBuilder.group({
      name: [bot.name, [FormsService.startWithAlphanumericValidator(), FormsService.lengthValidator({min: 1, max: 64})]],
      bot_unique_name: [bot.bot_unique_name, [FormsService.lengthValidator({min: 1, max: 64}), FormsService.startWithAlphanumericValidator()].reverse()],
      allow_feedback: [bot.allow_feedback],
      language: [bot.language || 'en'],
      logo: [bot.logo || 'https://s3.eu-west-1.amazonaws.com/imibot-production/assets/mlbot-icon.svg', [Validators.required, this.utilityService.imageUrlHavingValidExtnError, this.utilityService.imageUrlHttpsError]]
    }, {validator: this.utilityService.isManagerValidator});
    return this.faqbotBuildForm;
  }

  getFaqHandoverANdInterfaceForm(bot: any) {

    const agent_handover_setting: any = bot.agent_handover_setting;
    const fallback_count: any = agent_handover_setting && agent_handover_setting.fallback_count;
    const partial_match_count: any = agent_handover_setting && agent_handover_setting.partial_match_count;
    const consecutive_count: any = agent_handover_setting && agent_handover_setting.consecutive_count;
    const metaDataInnit = {
      threshold_diff_score: [bot.bot_metadata.threshold_diff_score, [FormsService.numberValidator({intOnly: false, min: 0.00005, max: 0.99995})]],
      threshold_min_score: [bot.bot_metadata.threshold_min_score, [FormsService.numberValidator({intOnly: false, min: 0.00005, max: 0.99995})]],
      n_results: [bot.bot_metadata.n_results, [FormsService.numberValidator({intOnly: true, min: 1, max: 50})]]
    };
    this.faqHandoverANdInterfaceForm = this.formBuilder.group({
      bot_metadata: this.formBuilder.group(metaDataInnit),
      agent_handover_setting: this.formBuilder.group({
        consecutive_count: this.formBuilder.group({
          'enabled': [consecutive_count && consecutive_count.enabled],
          'value': [consecutive_count && consecutive_count.value, [FormsService.numberValidator({intOnly: true, max: 10, min: 1})]]
        }),
        fallback_count: this.formBuilder.group({
          'enabled': [fallback_count && fallback_count.enabled],
          'value': [fallback_count && fallback_count.value, [FormsService.numberValidator({intOnly: true, max: 10, min: 1})]]
        }),
        partial_match_count: this.formBuilder.group({
          'enabled': [partial_match_count && partial_match_count.enabled],
          'value': [partial_match_count && partial_match_count.value, [FormsService.numberValidator({intOnly: true, max: 10, min: 1})]]
        })
      })
    });
    return this.faqHandoverANdInterfaceForm;
  }

  getBasicInfoForm(bot: IBot) {
    let logo = 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png';
    if (bot.bot_type === EBotType.intelligent) {
      logo = 'https://s3-eu-west-1.amazonaw s.com/imibot-production/integrations/v2/pipeline-bot-icon.png';
    }
    if (bot.bot_type === EBotType.router) {
      logo = 'https://cdn.zeplin.io/5c34452abb7a224bba47af50/assets/F4AB8C86-E2CD-4A3A-A4DB-AD109535E302.svg';
    }
    this.basicInfoForm = this.formBuilder.group({
      name: [bot.name, [FormsService.startWithAlphanumericValidator(), FormsService.lengthValidator({min: 1, max: 64})]],
      bot_unique_name: [bot.bot_unique_name, [FormsService.startWithAlphanumericValidator(), FormsService.lengthValidator({
        min: 1
      })]],
      description: [bot.description, [FormsService.startWithAlphanumericValidator(), FormsService.lengthValidator({
        min: 0,
        max: 2000
      })]],
      logo: [bot.logo || logo, [FormsService.lengthValidator({
        min: 1,
        max: 100000000
      }), FormsService.imageUrlHavingValidExtnErrorV2(), FormsService.startWithHttpsValidator()]],
      first_message: [bot.first_message, [FormsService.startWithAlphanumericValidator(), FormsService.lengthValidator({
        min: 0,
        max: 2000
      })]],
      language: [bot.language || 'en'],
      error_message: [bot.error_message, [FormsService.startWithAlphanumericValidator(), FormsService.lengthValidator({
        min: 0,
        max: 2000
      })]],
    }, {validator: this.utilityService.isManagerValidator});

    return this.basicInfoForm;
  }


  getDataManagementForm(bot: IBot) {

    const bot_disabled_settings = bot.bot_disabled_settings;
    return this.formBuilder.group({
      room_persistence_time: [bot.room_persistence_time || 240, [FormsService.numberValidator({min: 1, max: 3000}), FormsService.lengthValidator({min: 1})]],
      room_close_callback: [bot.room_close_callback],
      allow_feedback: [bot.allow_feedback],
      transactions_per_pricing_unit: [bot.transactions_per_pricing_unit || 30, [FormsService.numberValidator({max: 50000, min: 1})]],
      is_manager: [bot.is_manager || false],
      child_bots: [bot.child_bots],
      bot_disabled_settings: this.formBuilder.group({
        'bot_disabled': bot_disabled_settings && bot_disabled_settings.bot_disabled || false,
        'disabled_message': [bot_disabled_settings && bot_disabled_settings.disabled_message || 'Hey, this bot has been disabled', [FormsService.startWithAlphanumericValidator(),
          FormsService.lengthValidator({max: 2000})]],
        'agent_handover': bot_disabled_settings && bot_disabled_settings.agent_handover || false
      })
    }, {
      validator: function checkPasswords(group: FormGroup) { // here we have the 'passwords' group
        const is_manager = group.controls.is_manager.value;
        const child_bot_control_val = group.controls.child_bots.value;
        const child_bots_count = Array.isArray(child_bot_control_val) && child_bot_control_val.length;

        if (is_manager && (!child_bots_count || child_bots_count === 0)) {
          return {'Child bots required': true};
        }
        if (!is_manager && bot.bot_type === EBotType.router && (!child_bots_count || child_bots_count === 0)) {
          return {'Child bots required': true};
        }
        return null;
      }
    });
  }

  getSecurityForm(bot: IBot = {}) {
    return this.formBuilder.group({
      data_persistence_period: [bot.data_persistence_period || 30, [FormsService.numberValidator({min: 1, max: 360})]],
      advanced_data_protection: [bot.advanced_data_protection || false],
      consent_message: [bot.consent_message, [FormsService.startWithAlphanumericValidator(), FormsService.lengthValidator({
        min: 1,
        max: 2000
      })]],
      blanket_consent: [bot.blanket_consent],
      allow_anonymization: [bot.allow_anonymization]
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
    const x = this.integration_types.reduce((aggr_temp, integration_type) => {
      const types: string[] = this.getTypesForIntegrationType(integration_type);
      const modalGroups = types.map((type: string) => {
        const integrationItems: IIntegrationMasterListItem[] = this.getIntegrationItemForType(type);
        return integrationItems.reduce((aggr, integrationItem) => {
          const inputs = Object.keys(integrationItem).reduce((aggr_temp1, key) => {
            return {
              ...aggr_temp1,
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
        ...aggr_temp,
        [integration_type]: this.formBuilder.array(modalGroups)
      };
    }, {});

    const y = this.formBuilder.group(x);
    console.log(y);
    return y;

  }
}
