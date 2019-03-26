import {Injectable} from '@angular/core';
import {
  IBot,
  IBotVersionData,
  IBotVersionResult,
  ICodeVersionValidation,
  IValidationTabItem
} from "../../../../../interfaces/IBot";
import {SaveVersionInfoInBot} from "../../../../../view-bots/ngxs/view-bot.action";
import {ConstantsService} from "../../../../../../constants.service";
import {ServerService} from "../../../../../../server.service";
import {Observable} from "rxjs";
import {IHeaderData} from "../../../../../../../interfaces/header-data";
import {ModalConfirmComponent} from "../../../../../../modal-confirm/modal-confirm.component";
import {UtilityService} from "../../../../../../utility.service";
import {EBotVersionTabs, IVersionDiff, IVersionErrorsMap} from "../../../../../../../interfaces/code-input";
import {SetErrorMap} from "./ngxs/code-input.action";
import {map} from "rxjs/operators";

declare var zip;
declare var JSZip;
declare var saveAs;

@Injectable({
  providedIn: 'root'
})
export class CodeInputService {

  constructor(
    private constantsService: ConstantsService,
    private utilityService: UtilityService,
    private serverService: ServerService,
  ) {
  }

  static dialogRefWrapper;
  static forkVersionTemplate;
  static matDialog;

  static init(dialogRefWrapper, forkVersionTemplate, matDialog) {
    this.dialogRefWrapper = dialogRefWrapper;
    this.forkVersionTemplate = forkVersionTemplate;
    CodeInputService.matDialog = matDialog;
  }

  getAllVersions(botId, bot_access_token): Observable<IBotVersionResult> {

    const url = this.constantsService.getAllVersionsByBotId();
    // let botId = this.bot.roomId;
    return this.serverService.makeGetReq<IBotVersionResult>({url, headerData: {'bot-access-token': bot_access_token}})
    // .subscribe((botVersionResult) => {
    // botVersionResult.objects.forEach((Versions) => {
    //   Versions.changed_fields = {
    //     'df_template': false,
    //     'df_rules': false,
    //     'generation_rules': false,
    //     'generation_template': false,
    //     'workflows': false
    //   };
    //   Versions.validation = {
    //     'df_template': {error: false},
    //     'df_rules': {error: false},
    //     'generation_rules': {error: false},
    //     'generation_templates': {error: false},
    //     'workflow': {error: false},
    //   };
    // });

    // this.store.dispatch([
    //   new SaveVersionInfoInBot({data: botVersionResult.objects, botId: botId})
    // ]);
    // });
  }

  static createChannelList(bot: IBot) {
    let channelList = [], channelListClone = [];
    try {
      if (bot.integrations && bot.integrations.channels) {
        channelList = Object.keys(bot.integrations.channels)
          .map((integrationKey) => {
            return {
              name: integrationKey,
              displayName: integrationKey
            };
          })
          .filter((enabledIntegrations) => bot.integrations.channels[enabledIntegrations.name].enabled);
        channelListClone = [...channelList];
        if (channelListClone.length > 0) {
          channelListClone.unshift({name: 'all', displayName: 'All'});
        }
      }
      return channelListClone;

      // this.selectedChannelOfGenTemplate = {name: 'all', displayName: 'All'};
      // this.channelNameList = this.channelList.map(channel => {
      //   return channel.name;
      // }).filter(e => e !== 'all');

    } catch (e) {
      console.error(e);
    }
  }


  saveVersion(bot: IBot, version: IBotVersionData) {
    const headerData: IHeaderData = {
      'bot-access-token': bot.bot_access_token
    };
    const url = this.constantsService.getSaveVersionByBotId(bot.id);
    return this.serverService.makePutReq({url, body: version, headerData})
  }

  createNewVersion(bot: IBot, version: IBotVersionData) {
    const headerData: IHeaderData = {
      'bot-access-token': bot.bot_access_token
    };
    const url = this.constantsService.getCreateNewVersionByBotId(bot.id);
    return this.serverService.makePostReq({url, body: version, headerData})
  }

  validateCode$(bot: IBot, version: IBotVersionData) {
    const headerData: IHeaderData = {
      'bot-access-token': bot.bot_access_token
    };
    const codeValidationUrl = this.constantsService.codeValidationUrl();
    return this.serverService.makePostReq<any>({headerData, body: version, url: codeValidationUrl})
  }


  showForkDialog() {
    return this.utilityService.openDialog({
      dialogRefWrapper: CodeInputService.dialogRefWrapper,
      classStr: 'danger-modal-header-border',
      data: {
        actionButtonText: "Fork an inactive Versions",
        message: 'The current active versions has error which need to be rectified before saving the versions.You can resolve the errors in the active versions to save it right now.You can fork this versions to an inactive versions with these errors and you can save it, inactive versions can be saved with errors.',
        title: 'Version save failed',
        isActionButtonDanger: true
      },
      dialog: CodeInputService.matDialog,
      component: ModalConfirmComponent
    })
  }

  showSaveWithErrorDialog() {
    return this.utilityService.openDialog({
      dialogRefWrapper: CodeInputService.dialogRefWrapper,
      classStr: 'danger-modal-header-border',
      data: {
        actionButtonText: "Save with errors",
        message: "Errors are found in the versions, do you want to save the versions? This versions cannot be activated with errors.",
        title: `Save version with errors`,
        isActionButtonDanger: true,
        inputDescription: null,
        closeButtonText: "Keep editing"
      },
      dialog: CodeInputService.matDialog,
      component: ModalConfirmComponent
    })
  }

  static getVersion(versions: IBotVersionData[], versionId: number) {
    return versions.find((BotVersion) => {
      return versionId === BotVersion.id;
    });
  }

  static getUpdatedFields(oldUpdatedFields: IVersionDiff, newUpdatedFields: IVersionDiff): IVersionDiff {
    let x = {

      'df_template': oldUpdatedFields['df_template'] || newUpdatedFields['df_template'],
      'df_rules': oldUpdatedFields['df_rules'] || newUpdatedFields['df_rules'],
      'generation_rules': oldUpdatedFields['generation_rules'] || newUpdatedFields['generation_rules'],
      'generation_templates': oldUpdatedFields['generation_templates'] || newUpdatedFields['generation_templates'],
      'workflow': oldUpdatedFields['workflow'] || newUpdatedFields['workflow'],
    };

    return x

  }

  static getActiveTabNameByTabCount(tabCount: number): EBotVersionTabs {
    return EBotVersionTabs[Object.keys(EBotVersionTabs)[tabCount]]
  }


  static calculateDiff(version1, version2): IVersionDiff {
    let x = {
      'df_template': version1['df_template'] !== version2['df_template'],
      'df_rules': version1['df_rules'] !== version2['df_rules'],
      'generation_rules': version1['generation_rules'] !== version2['generation_rules'],
      'generation_templates': version1['generation_templates'] !== version2['generation_templates'],
      'workflow': version1['workflow'] !== version2['workflow'],
    };

    return x;
  }

  static initializeVersionDiff() {
    return {
      'df_template': false,
      'df_rules': false,
      'generation_rules': false,
      'generation_templates': false,
      'workflow': false,
    };
  }

  static initializeValidationItem(): ICodeVersionValidation {
    return {
      'df_rules': null,
      'df_template': null,
      'generation_rules': null,
      'generation_templates': null,
      'workflow': null,
    }
  }


  static getChangedFields(version_local: IBotVersionData, version_store: IBotVersionData) {
    return {
      df_template: version_local['df_template'] !== version_store['df_template'],
      df_rules: version_local['df_rules'] !== version_store['df_rules'],
      generation_rules: version_local['generation_rules'] !== version_store['generation_rules'],
      generation_templates: version_local['generation_templates'] !== version_store['generation_templates'],
      workflow: version_local['workflow'] !== version_store['workflow'],
    }
  }

  static validationPassed(validation) {
    let isFailed = (validation.df_template && validation.df_template.error) ||
      (validation.df_rules && validation.df_rules.error) ||
      (validation.workflow && validation.workflow.error) ||
      (validation.generation_rules && validation.generation_rules.error) ||
      (validation.generation_templates && validation.generation_templates.error)
    return !isFailed;
  }

  static downloadZip(bot: IBot, version: IBotVersionData) {
    var zip = new JSZip();
    this.addFileToZip(zip, 'df_template.py', version.df_template);
    this.addFileToZip(zip, 'df_rules.py', version.df_rules);
    this.addFileToZip(zip, 'generation_rules.py', version.generation_rules);
    this.addFileToZip(zip, 'generation_templates.py', version.generation_templates);
    this.addFileToZip(zip, 'workflow.py', version.workflow);
    // var img = zip.folder("images");
    // img.file("smile.gif", imgData, {base64: true});
    zip.generateAsync({type: 'blob'})
      .then((content) => {
        // see FileSaver.js
        saveAs(content, `${bot.bot_unique_name}_codeV${version.version}`);
      });
  }

  static addFileToZip(zip: any, name: string, text: string) {
    zip.file(name, text);
  }

  openPrimaryModal(IntentModal) {/*TODO: move it to modal service*/
    return this.utilityService.openDialog({
      dialog: CodeInputService.matDialog,
      component: IntentModal,
      data: null,
      dialogRefWrapper: CodeInputService.dialogRefWrapper,
      classStr: 'primary-modal-header-border'
    });
  }

  openForkNewVersionModal() {
    this.openPrimaryModal(CodeInputService.forkVersionTemplate);
  }


  validateCodeTest(bot: IBot, code: string, activeTab: EBotVersionTabs) {

    const headerData: IHeaderData = {
      'bot-access-token': bot.bot_access_token
    };
    const body = {};
    body[activeTab] = code;

    const codeValidationUrl = this.constantsService.codeValidationUrl();

    return this.serverService.makePostReq<any>({headerData, body, url: codeValidationUrl})

  }

  activateVersion(bot: IBot, active_version_id) {
    return this.serverService.updateBot({id: bot.id, active_version_id, bot_access_token: bot.bot_access_token})
      // .pipe(map(
      //   () => {
      //   },
      //   (error: { error: ICodeVersionValidation }) => {
      //     /*
      //        // this means there is an error in code validation
      //       let validation = CodeInputService.initializeValidationItem();
      //       validation  = {
      //         ...validation,
      //         ...error.error
      //       };
      //       this.store.dispatch(new SetErrorMap({id: active_version_id, validation: validation}))
      //       */
      //   }
      // ));
  }

  // static getSelectedVersion(bot:IBot, Versions:IBotVersionData[]){
  //   if (!Versions) {
  //     // Versions= activeVersion; /**Assuming there will always be an active Versions*/
  //     return Versions.find((Versions)=>Versions.id === bot.active_version_id)
  //   } else {
  //     /*updating selected versions_st*/
  //     versions_st= CodeInputService.getVersion(versions_st, versions_st.id);
  //   }
  // }
}
