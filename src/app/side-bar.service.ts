import {Injectable} from '@angular/core';
import {PipelineComponent} from './core/buildbot/build-code-based-bot/architecture/pipeline/pipeline.component';
import {KnowledgeBasePresentationComponent} from './core/buildbot/build-code-based-bot/architecture/knowledge-base/knowledge-base-presentation/knowledge-base-presentation.component';
import {EBotType, UtilityService} from './utility.service';
import {ESideBarTab} from './core/bot-detail/code-based-bot-detail/code-based-bot-detail.component';
import {KnowledgeBaseWrapperComponent} from './core/buildbot/build-code-based-bot/architecture/knowledge-base-wrapper/knowledge-base-wrapper.component';
import {IPipelineItem} from '../interfaces/ai-module';
import {BotConfigService} from './core/buildbot/build-code-based-bot/bot-config/bot-config.service';
import {BotConfigComponent} from './core/buildbot/build-code-based-bot/bot-config/bot-config.component';
import {BotTestingComponent} from './core/bot-detail/bot-testing/bot-testing.component';
import {FormGroup, NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  private static botConfigComponent: BotConfigComponent;
  private static botConfigComponent_init;

  private static knowledgeBasePresentationComponent: KnowledgeBasePresentationComponent;
  private static kbPrezInit_Data;

  private static pipelineComponent: PipelineComponent;
  private static pipelineData_init: IPipelineItem[];

  private static botTestingComponent: BotTestingComponent;
  private static botTestingData_init: any[];

  static init(component) {

    if (component instanceof PipelineComponent) {
      SideBarService.pipelineInit(component);
    }

    if (component instanceof BotConfigComponent) {
      SideBarService.botConfigInit(<BotConfigComponent>component);
    }

    if (component instanceof BotTestingComponent) {
      // setTimeout(()=>SideBarService.botTestingInit(<BotTestingComponent>component),0);
      SideBarService.botTestingInit(<BotTestingComponent>component);
    }

    if (component instanceof KnowledgeBasePresentationComponent) {
      /*KnowledgeBasePresentationComponent is initialized manually from within KnowledgeBasePresentationComponent*/
    }
  }

  /*BotConfig*/
  static botConfigInit(botConfigComponent: BotConfigComponent) {
    SideBarService.botConfigComponent = botConfigComponent;
    // let combinedForm = [botConfigComponent.basicInfoForm, botConfigComponent.dataManagementForm, botConfigComponent.securityForm, botConfigComponent.integrationForm];
    SideBarService.botConfigComponent_init = this.createBasicInfoData();
  }

  static createBasicInfoFinalData(){
    return SideBarService.createBasicInfoData();
  }

  private static createBasicInfoData() {
    debugger;
    let botConfigComponent = SideBarService.botConfigComponent ;
    let combinedForm: (FormGroup | NgForm)[];
    if(botConfigComponent.bot_type === EBotType.chatbot){
      combinedForm = [botConfigComponent.basicInfoForm, botConfigComponent.dataManagementForm, botConfigComponent.securityForm, botConfigComponent.integrationForm];
    }else {
      combinedForm = [botConfigComponent.basicInfoForm];
    }
    return combinedForm.reduce((aggr, current) => {
      let val = (current && current.value) || {};
      return {
        ...aggr,
        ...val
      };
    }, {});
  }

  static isBotConfigDirty(): boolean {
    if (!SideBarService.botConfigComponent) return false;
    let botConfig_final = this.createBasicInfoData();
    let x = !UtilityService.deepCompare(SideBarService.botConfigComponent_init, botConfig_final);
    return x;
  }


  /*KNOWLEDGE BASE*/

  static knowledgeBaseInit(kbPrezComponent: KnowledgeBasePresentationComponent) {

    SideBarService.knowledgeBasePresentationComponent = kbPrezComponent;
    SideBarService.kbPrezInit_Data = UtilityService.cloneObj(kbPrezComponent.createOutPutData());
  }

  static isKnowledgeBaseDirty(): boolean {
    if (!SideBarService.knowledgeBasePresentationComponent) return false;

    let kbPrezFinalData = this.createKnowledgeBaseFinalData();
    let x = !UtilityService.deepCompare(SideBarService.kbPrezInit_Data, kbPrezFinalData);
    return x;
  }

  private static createKnowledgeBaseFinalData() {
    return SideBarService.knowledgeBasePresentationComponent.createOutPutData();
  }

  /*PIPELINE*/
  static pipelineInit(pipelineComponent: PipelineComponent) {
    SideBarService.pipelineComponent = pipelineComponent;
    SideBarService.pipelineData_init = pipelineComponent._bot.pipelines;
  }

  private static createPipelineFinalData() {
    return SideBarService.pipelineComponent.pipeLine;
  }

  static isPipelineDirty(): boolean {
    if (!SideBarService.pipelineComponent) return false;
    let pipelineData_final = this.createPipelineFinalData();
    let x = !UtilityService.deepCompare(SideBarService.pipelineData_init, pipelineData_final);
    return x;
  }


  /*TESTING*/



  static isTabDirty(tab: ESideBarTab): boolean {

    if (tab === ESideBarTab.input) {
      let x = this.isKnowledgeBaseDirty() || this.isPipelineDirty();
      return x;
    }
    if (tab === ESideBarTab.setting) {

      let x = this.isBotConfigDirty();
      return x;
    }
    if (tab === ESideBarTab.test) {

      let x = this.isBotTestingDirty();
      return x;
    }

    return false;

  }

  /*Testing*/

  static botTestingInit(component: BotTestingComponent){
    SideBarService.botTestingComponent = component;

    SideBarService.botTestingData_init = UtilityService.cloneObj(SideBarService.botTestingComponent.testCaseData);
  }
  static createBotTestingFinalData(){

    return SideBarService.botTestingComponent.testCaseData;
  }

  static isBotTestingDirty(){
    let botTestingData_final = this.createBotTestingFinalData();
    // let botTestingData_initial = SideBarService.botTestingData_init;

    //remove null
    // for (let index = 0; index < botTestingData_initial.length; index++) {
    //   let anyNotNull = false;
    //   botTestingData_initial[index].forEach(element => {
    //     anyNotNull = anyNotNull || !!element;
    //   });
    //   if(!anyNotNull){
    //   delete botTestingData_initial[index]
    //   }
    // }
    let x = !UtilityService.deepCompare(SideBarService.botTestingData_init, botTestingData_final);
    return x;
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

  }
static resetKB(){
    SideBarService.knowledgeBasePresentationComponent = null;
    SideBarService.kbPrezInit_Data = null;
}
}
