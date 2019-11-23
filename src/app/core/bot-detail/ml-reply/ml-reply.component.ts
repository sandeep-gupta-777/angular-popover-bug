import {Component, Input, OnInit} from '@angular/core';
import {IBot} from '../../interfaces/IBot';
import {MlReplyService} from './ml-reply.service';
import {ConstantsService} from '../../../constants.service';
import {ServerService} from '../../../server.service';
import {IMLResponse} from '../../../typings/reply';
import {UtilityService} from '../../../utility.service';
import {MatTabChangeEvent} from '@angular/material/typings/tabs';
import {EventService} from '../../../event.service';
import {EAllActions} from '../../../typings/enum';
import {IHeaderData} from '../../../../interfaces/header-data';
import {MatDialog} from '@angular/material';
import {MyToasterService} from '../../../my-toaster.service';
import {ModalConfirmComponent} from '../../../modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-ml-reply',
  templateUrl: './ml-reply.component.html',
  styleUrls: ['./ml-reply.component.scss']
})
export class MlReplyComponent implements OnInit {

  templateKeyDict = {};
  @Input() bot: IBot;
  showLoading = true;
  workFlowObj = {text: ''};
  myEAllActions = EAllActions;
  corpusMiniObj;
  dialogRefWrapper = {ref: null};

  constructor(
    private mlReplyService: MlReplyService,
    private utilityService: UtilityService,
    private constantsService: ConstantsService,
    private serverService: ServerService,
    private matDialog: MatDialog,
    private myToasterService: MyToasterService
  ) {
  }

  mlResponse: IMLResponse;

  ngOnInit() {
    this.showLoading = true;
    this.getResponseTemplates();
    this.getAndSetMlCorpusMiniData();
  }

  getResponseTemplates() {
    this.mlReplyService.getResponseTemplates(this.bot)
      .subscribe((value: IMLResponse) => {
        this.showLoading = false;
        this.mlResponse = UtilityService.cloneObj(value);
        this.initTemplateDict(UtilityService.cloneObj(this.mlResponse));
      });
  }

  getAndSetMlCorpusMiniData() {
    let url = this.constantsService.getMLDefaultCorpusMiniData();

    // let url = this.constantsService.getMLDefaultCorpus();
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
    this.serverService.makeGetReq({url, headerData}).subscribe((val) => {
      this.corpusMiniObj = val;
    });
  }

  makeLive() {
    this.mlReplyService.makeResponseLive(this.bot, {comment: 'test'})
      .subscribe((test) => {
        this.myToasterService.showSuccessToaster('Made live successfully');
        this.getResponseTemplates();
        this.dialogRefWrapper.ref.close();
      });
  }

  makeBothCorpusLive() {
    this.makeLiveCorpus();
    this.makeLive();
  }

  openMakeLiveCorpusModal(template) {

    if (this.corpusMiniObj['state'] === 'trained') {
      this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
    } else {
      this.makeLive();
    }
  }

  makeLiveCorpus() {

    const url = this.constantsService.makeMLCorpusLiveUrl();
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
    const body = {'corpus_id': this.corpusMiniObj.id};
    this.serverService.makePostReq({url, body, headerData})
      .subscribe(() => {
        this.getAndSetMlCorpusMiniData();
        this.dialogRefWrapper.ref.close();
      });
  }

  updateResponse() {

    const newTemplates = {};
    Object.keys(this.templateKeyDict).forEach((templateKey) => {
      newTemplates[templateKey] = {
        ...this.mlResponse.templates[templateKey],
        response: this.templateKeyDict[templateKey]
      };
    });
    this.mlResponse.templates = newTemplates;
    this.mlResponse.workflow.logic = this.workFlowObj.text;
    this.mlReplyService.updateResponseTemplates(this.bot, this.mlResponse, this.mlResponse.id)
      .subscribe((value: IMLResponse) => {

        this.getResponseTemplates();
        Object.keys(value.templates)
          .forEach((key) => {
            this.templateKeyDict[key] = value.templates[key].response;
          });
        this.templateKeyDict = {...this.templateKeyDict};
        this.utilityService.showSuccessToaster('Response Updated Successfully');
      });
  }

  async loadFromLive() {

    const data = await this.utilityService.openDialog({
      dialog: this.matDialog,
      component: ModalConfirmComponent,
      data: {
        title: `Discard draft version?`,
        message: 'Current saved version will be discarded to load the live version again for editing. Do you wish to continue?',
        actionButtonText: 'Confirm',
        isActionButtonDanger: true,
      },
      dialogRefWrapper: this.dialogRefWrapper,
      classStr: 'danger-modal-header-border'
    });
    if (!data) {
      return;
    }

    this.mlReplyService.loadFromLive(this.bot)
      .subscribe((value: IMLResponse) => {
        this.mlResponse = UtilityService.cloneObj(value);
        this.initTemplateDict(UtilityService.cloneObj(this.mlResponse));
        this.getResponseTemplates();
      });
  }

  initTemplateDict(value: IMLResponse) {
    this.workFlowObj = {text: value.workflow && value.workflow.logic};
    this.templateKeyDict = {};
    Object.keys(value.templates)
      .forEach((key) => {
        this.templateKeyDict[key] = value.templates[key].response;
      });
    this.templateKeyDict = {...this.templateKeyDict};
  }


  tabChanged(tabData: MatTabChangeEvent) {
    if (tabData.index === 1) {
      this.utilityService.refreshCodeEditor$.emit();
    }
  }

  log(x) {

  }

}
