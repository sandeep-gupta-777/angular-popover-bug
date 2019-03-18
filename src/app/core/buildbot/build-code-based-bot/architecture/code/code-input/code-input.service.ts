import { Injectable } from '@angular/core';
import {IBot, IBotVersionData, IBotVersionResult} from "../../../../../interfaces/IBot";
import {SaveVersionInfoInBot} from "../../../../../view-bots/ngxs/view-bot.action";
import {ConstantsService} from "../../../../../../constants.service";
import {ServerService} from "../../../../../../server.service";
import {Observable} from "rxjs";
import {IHeaderData} from "../../../../../../../interfaces/header-data";
import {ModalConfirmComponent} from "../../../../../../modal-confirm/modal-confirm.component";
import {UtilityService} from "../../../../../../utility.service";
import {version} from "punycode";
import {MatDialog} from "@angular/material";

declare var zip;
declare var JSZip;
declare var saveAs;

@Injectable({
  providedIn: 'root'
})
export class CodeInputService {

  constructor(
    private constantsService:ConstantsService,
    private utilityService:UtilityService,
    private serverService:ServerService,
    ) { }

    static dialogRefWrapper;
    static forkVersionTemplate;
    static matDialog;

    static init(dialogRefWrapper,forkVersionTemplate, matDialog){
      this.dialogRefWrapper = dialogRefWrapper;
      this.forkVersionTemplate = forkVersionTemplate;
      CodeInputService.matDialog = matDialog;
    }

  getAllVersions(botId, bot_access_token):Observable<IBotVersionResult> {

    const url = this.constantsService.getAllVersionsByBotId();
    // let botId = this.bot.roomId;
    return this.serverService.makeGetReq<IBotVersionResult>({url, headerData: {'bot-access-token': bot_access_token}})
      // .subscribe((botVersionResult) => {
        // botVersionResult.objects.forEach((version) => {
        //   version.changed_fields = {
        //     'df_template': false,
        //     'df_rules': false,
        //     'generation_rules': false,
        //     'generation_template': false,
        //     'workflows': false
        //   };
        //   version.validation = {
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


  saveVersion(bot:IBot,version:IBotVersionData){
    const headerData: IHeaderData = {
      'bot-access-token': bot.bot_access_token
    };
    const url = this.constantsService.getSaveVersionByBotId(bot.id);
    return this.serverService.makePutReq({url, body: version, headerData})
  }

  createNewVersion(bot:IBot,version:IBotVersionData){
    const headerData: IHeaderData = {
      'bot-access-token': bot.bot_access_token
    };
    const url = this.constantsService.getCreateNewVersionByBotId(bot.id);
    return this.serverService.makePostReq({url, body: version, headerData})
  }

  validateCode$(bot:IBot, version:IBotVersionData){
    const headerData: IHeaderData = {
      'bot-access-token': bot.bot_access_token
    };
    const codeValidationUrl = this.constantsService.codeValidationUrl();
    return this.serverService.makePostReq<any>({headerData, body: version, url: codeValidationUrl})
  }


  showForkDialog(){
    return this.utilityService.openDialog({
      dialogRefWrapper: CodeInputService.dialogRefWrapper,
      classStr: 'danger-modal-header-border',
      data: {
        actionButtonText: "Fork an inactive version",
        message: 'The current active version has error which need to be rectified before saving the version.You can resolve the errors in the active version to save it right now.You can fork this version to an inactive version with these errors and you can save it,inactive versions can be saved with errors.',
        title: 'Version save failed',
        isActionButtonDanger: true
      },
      dialog: CodeInputService.matDialog,
      component: ModalConfirmComponent
    })
  }

  showSaveWithErrorDialog(){
    return this.utilityService.openDialog({
      dialogRefWrapper: CodeInputService.dialogRefWrapper,
      classStr: 'danger-modal-header-border',
      data: {
        actionButtonText: "Save with errors",
        message: "Errors are found in the version, do you want to save the version? This version cannot be activated with errors.",
        title: `Save version with errors`,
        isActionButtonDanger: true,
        inputDescription: null,
        closeButtonText: "Keep editing"
      },
      dialog: CodeInputService.matDialog,
      component: ModalConfirmComponent
    })
  }

  static getVersion(versions: IBotVersionData[], versionId:number) {
    return versions.find((BotVersion) => {
      return versionId === BotVersion.id;
    });
  }

  static validationPassed(validation){
    return !validation.df_template.error &&
    !validation.df_rules.error &&
    !validation.workflow.error &&
    !validation.generation_rules.error &&
    !validation.generation_templates.error
  }

  static downloadZip(bot: IBot, version:IBotVersionData){
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

  static getSelectedVersion(bot:IBot, versions:IBotVersionData[]){
    if (!versions) {
      // versions= activeVersion; /**Assuming there will always be an active version*/
      return versions.find((version)=>version.id === bot.active_version_id)
    } else {
      /*updating selected version*/
      versions= CodeInputService.getVersion(versions, versions.id);
    }
  }
}
