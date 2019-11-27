import {Injectable} from '@angular/core';
//  import {PipelineComponent} from './core/buildbot/build-code-based-bot/architecture/pipeline/pipeline.component';
//  import {KnowledgeBasePresentationComponent} from './core/buildbot/build-code-based-bot/architecture/knowledge-base/knowledge-base-presentation/knowledge-base-presentation.component';
import {EBotType, UtilityService} from './utility.service';
//  import {IPipelineItem} from '../interfaces/ai-module';
//  import {BotConfigComponent} from './core/buildbot/build-code-based-bot/bot-config/bot-config.component';
//  import {BotTestingComponent} from './core/bot-detail/bot-testing/bot-testing.component';
import {FormGroup, NgForm} from '@angular/forms';
import {ESideBarTab} from './typings/enum';

//  import { BuildbotWrapperComponent } from './core/buildbot/buildbot-wrapper.component';

@Injectable()
export class SideBarService {
  static activeTab: ESideBarTab;

  private static botConfigComponent; // : BotConfigComponent;
  private static botConfigComponent_init;

  private static knowledgeBasePresentationComponent; // : KnowledgeBasePresentationComponent;
  private static kbPrezInit_Data;

  private static pipelineComponent; // : PipelineComponent;
  private static pipelineData_init; // : IPipelineItem[];

  private static botTestingComponent; // : BotTestingComponent;
  private static botTestingData_init: any[];

  public static buildbotWrapperComponent; // : BuildbotWrapperComponent;
  public static buildbotData_init;

  static init(component) {

    console.info('init');
    if (component.tag === 'PipelineComponent') {
      SideBarService.pipelineInit(component);
    }

    if (component.tag === 'BotConfigComponent') {
      SideBarService.botConfigInit(component);
    }

    if (component.tag === 'BotTestingComponent') {
      //  setTimeout(()=>SideBarService.botTestingInit(<BotTestingComponent>component),0);
      SideBarService.botTestingInit(component);
    }

    if (component.tag === 'KnowledgeBasePresentationComponent') {
      /*KnowledgeBasePresentationComponent is initialized manually from within KnowledgeBasePresentationComponent*/
    }

    if (component.tag === 'BuildbotWrapperComponent') {
      SideBarService.buildBotInit(component);
    }
  }


  /*BotConfig*/
  static botConfigInit(botConfigComponent) {
    SideBarService.botConfigComponent = botConfigComponent;
    //  let combinedForm = [botConfigComponent.basicInfoForm, botConfigComponent.dataManagementForm, botConfigComponent.securityForm, botConfigComponent.integrationForm];
    SideBarService.botConfigComponent_init = this.createBasicInfoData();
    SideBarService.activeTab = ESideBarTab.setting;
  }

  static createBasicInfoFinalData() {
    return SideBarService.createBasicInfoData();
  }

  private static createBasicInfoData() {

    const botConfigComponent = SideBarService.botConfigComponent;
    let combinedForm: (FormGroup | NgForm)[];
    if (botConfigComponent.bot_type === EBotType.chatbot) {
      combinedForm = [botConfigComponent.basicInfoForm, botConfigComponent.dataManagementForm, botConfigComponent.securityForm, botConfigComponent.integrationForm];
    } else if (botConfigComponent.bot_type === EBotType.faqbot) {
      combinedForm = [botConfigComponent.basicInfoForm, botConfigComponent.dataManagementForm, botConfigComponent.securityForm, botConfigComponent.faqHandoverANdInterfaceForm, botConfigComponent.integrationForm];
    } else {
      combinedForm = [botConfigComponent.basicInfoForm];
    }
    return combinedForm.reduce((aggr, current) => {
      const val = (current && current.value) || {};
      return {
        ...aggr,
        ...val
      };
    }, {});
  }

  static isBotConfigDirty(): boolean {

    console.info('init', 'isBotConfigDirty');
    if (!SideBarService.botConfigComponent) {
      return false;
    }
    const botConfig_final = this.createBasicInfoData();
    const x = !UtilityService.deepCompare(SideBarService.botConfigComponent_init, botConfig_final);
    return x;
  }


  /*KNOWLEDGE BASE*/

  static knowledgeBaseInit(kbPrezComponent) {

    SideBarService.knowledgeBasePresentationComponent = kbPrezComponent;
    SideBarService.kbPrezInit_Data = UtilityService.cloneObj(kbPrezComponent.createOutPutData());
  }

  static isKnowledgeBaseDirty(): boolean {
    if (!SideBarService.knowledgeBasePresentationComponent) {
      return false;
    }

    const kbPrezFinalData = this.createKnowledgeBaseFinalData();
    const x = !UtilityService.deepCompare(SideBarService.kbPrezInit_Data, kbPrezFinalData);
    return x;
  }

  private static createKnowledgeBaseFinalData() {
    return SideBarService.knowledgeBasePresentationComponent.createOutPutData();
  }

  /*PIPELINE*/
  static pipelineInit(pipelineComponent) {
    SideBarService.pipelineComponent = pipelineComponent;
    SideBarService.pipelineData_init = pipelineComponent._bot.pipelines;
    SideBarService.activeTab = ESideBarTab.input;
  }

  private static createPipelineFinalData() {
    return SideBarService.pipelineComponent.pipeLine;
  }

  static isPipelineDirty(): boolean {
    if (!SideBarService.pipelineComponent) {
      return false;
    }
    const pipelineData_final = this.createPipelineFinalData();
    const x = !UtilityService.deepCompare(SideBarService.pipelineData_init, pipelineData_final);
    return x;
  }


  /*TESTING*/


  static isTabDirty(tab: ESideBarTab): boolean {

    if (tab === ESideBarTab.input) {
      const x = this.isKnowledgeBaseDirty() || this.isPipelineDirty();
      return x;
    }
    if (tab === ESideBarTab.setting) {

      const x = this.isBotConfigDirty();
      return x;
    }
    if (tab === ESideBarTab.test) {

      const x = this.isBotTestingDirty();
      return x;
    }

    return false;

  }

  /*Testing*/

  static botTestingInit(component) {
    SideBarService.botTestingComponent = component;

    SideBarService.botTestingData_init = UtilityService.cloneObj(SideBarService.botTestingComponent.testCaseData);
    SideBarService.botTestingData_init = SideBarService.botTestingData_init.map((array) => {
      return array.slice(0, 2);
    });
    SideBarService.activeTab = ESideBarTab.test;
  }

  static createBotTestingFinalData() {

    let x = SideBarService.botTestingComponent.testCaseData.map((array) => {
      return array.slice(0, 2);
    });
    x = x.filter((arr)=>{
      return arr[0] || arr[1]
    })
    return x;
    //  return SideBarService.botTestingComponent.testCaseData;
  }

  static isBotTestingDirty() {
    try {
      const botTestingData_final = this.createBotTestingFinalData();
      return !UtilityService.deepCompare(SideBarService.botTestingData_init, botTestingData_final);
    } catch (e) {
      /*
      * When user move away from testing tab even before it has been initiated, just return dirty = false
      * */
      return false;
    }
  }

  /*buildbot*/

  static buildBotInit(buildBotComponent) {

    SideBarService.buildbotWrapperComponent = buildBotComponent;

    SideBarService.buildbotData_init = UtilityService.cloneObj({
      basicInfoForm: buildBotComponent.basicInfoForm.value,
      dataManagementForm: buildBotComponent.dataManagementForm.value,
      securityForm: buildBotComponent.securityForm.value,
      faqbotBuildForm: buildBotComponent.faqbotBuildForm.value
    });
  }

  static isBuildBotDirty(): boolean {
    if (!SideBarService.buildbotWrapperComponent) {
      return false;
    }

    const buildBotFinalData = this.buildBotFinalData();
    const x = !UtilityService.deepCompare(SideBarService.buildbotData_init, buildBotFinalData);
    return x;
  }

  private static buildBotFinalData() {
    return SideBarService.buildbotWrapperComponent.putBuildBotFinalData();
  }

  constructor() {
  }

  static reset() {
    SideBarService.botConfigComponent_init = null;
    SideBarService.botConfigComponent = null;

    SideBarService.pipelineData_init = null;
    SideBarService.pipelineComponent = null;

    SideBarService.knowledgeBasePresentationComponent = null;
    SideBarService.kbPrezInit_Data = null;

    SideBarService.botTestingComponent = null;
    SideBarService.botTestingData_init = null;

    SideBarService.buildbotWrapperComponent = null;
    SideBarService.buildbotData_init = null;
  }

  static resetKB() {
    SideBarService.knowledgeBasePresentationComponent = null;
    SideBarService.kbPrezInit_Data = null;
  }
}
