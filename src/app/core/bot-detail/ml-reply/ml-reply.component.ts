import {Component, Input, OnInit} from '@angular/core';
import {IBot} from '../../interfaces/IBot';
import {MlReplyService} from './ml-reply.service';
import {ConstantsService} from '../../../constants.service';
import {ServerService} from '../../../server.service';
import {IMLResponse} from '../../../typings/reply';
import {UtilityService} from '../../../utility.service';
import {MatTabChangeEvent} from '@angular/material/typings/tabs';
import {EventService} from '../../../event.service';
import {EAllActions} from "../../../typings/enum";

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
  constructor(
    private mlReplyService: MlReplyService,
    private utilityService: UtilityService,
  ) {
  }

  mlResponse: IMLResponse;

  ngOnInit() {
    this.showLoading = true;
    this.getResponseTemplates();
  }

  getResponseTemplates(){
    this.mlReplyService.getResponseTemplates(this.bot)
      .subscribe((value: IMLResponse) => {
        this.showLoading = false;
        this.mlResponse = UtilityService.cloneObj(value);
        this.initTemplateDict(UtilityService.cloneObj(this.mlResponse));
      });
  }


  makeLive() {
    this.mlReplyService.makeResponseLive(this.bot, {comment: 'test'})
      .subscribe((test) => {
        this.utilityService.showSuccessToaster('Bot successfully made live');
        this.getResponseTemplates();
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

  loadFromLive() {

    this.mlReplyService.loadFromLive(this.bot)
      .subscribe((value: IMLResponse) => {
        this.mlResponse = UtilityService.cloneObj(value);
        this.initTemplateDict(UtilityService.cloneObj(this.mlResponse));
        this.getResponseTemplates();
      });
  }

  initTemplateDict(value: IMLResponse) {
    this.workFlowObj = {text: value.workflow && value.workflow.logic};
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

  log(x){

  }

}
