import { Component, OnInit, Input, Output,EventEmitter, ViewChild } from '@angular/core';
import { ICurationItem } from 'src/app/core/interfaces/faqbots';
import {IBot} from '../../../interfaces/IBot';
import {UtilityService} from '../../../../utility.service';
import {ModalConfirmComponent} from '../../../../modal-confirm/modal-confirm.component';
import {ServerService} from '../../../../server.service';
import {ConstantsService} from '../../../../constants.service';
import {IHeaderData} from '../../../../../interfaces/header-data';
import {MatDialog} from '@angular/material';
import {map} from 'rxjs/internal/operators';
import { ESplashScreens } from 'src/app/splash-screen/splash-screen.component';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {TempVariableService} from "../../../../temp-variable.service";

@Component({
  selector: 'app-curation-issues-list',
  templateUrl: './curation-issues-list.component.html',
  styleUrls: ['./curation-issues-list.component.scss']
})
export class CurationIssuesListComponent implements OnInit {

  constructor(
    private utilityService:UtilityService,
    private constantsService : ConstantsService,
    private serverService : ServerService,
    private matDialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) { }
  @Input() curationItemList:ICurationItem[];
  @Input() isMorePresent:boolean;
  @Input() bot: IBot;
  @Output() loadMoreNext = new EventEmitter();
  @Output() ignoreCurationIssueById = new EventEmitter();
  @Output() addQueryToArticleByIds = new EventEmitter();
  @Input() reloadingMore : boolean;
  @Input() liveBotUpdatedAt: number;
  @ViewChild('issuesSelectedListForm')  SelectedListForm : NgForm;
  IssuesSelectedSet = [];
  articleSearchMode : boolean = false;
  dialogRefWrapper = { ref: null };
  @Input() corpusState :string;
  myESplashScreens = ESplashScreens;
  selectedArticleToAddCuration : number;
  @Input() totallength:number;
  ngOnInit() {
    
    this.SelectedListForm.form.valueChanges
      .subscribe((val)=>{
        let temArray = new Set();
        let keys = Object.keys(val);     
        for(let i of keys){
          if(val[i] == true){
            temArray.add(parseInt(i));
          }
        }
        this.IssuesSelectedSet = Array.from(temArray);
      })
  }
  load10More(){

    this.loadMoreNext.emit();
  }
  ignoreIt(curationIds){
    this.ignoreCurationIssueById.emit(curationIds);
  }
  addQueryToArticle(body){
    this.addQueryToArticleByIds.emit(body);
  }
  openTrainModal() {
    this.utilityService.openDialog({
      dialogRefWrapper: this.dialogRefWrapper,
      classStr: 'danger-modal-header-border',
      data: {
        actionButtonText: `Continue`,
        message: 'Leave a comment about why you are training the bot so that it can be tracked in the bot’s history.',
        title: `Train knowledge base`,
        isActionButtonDanger: false,
        inputDescription: "Comment"
      },
      dialog: this.matDialog,
      component: ModalConfirmComponent
    }).then((data) => {
      if (data) {
        // this.decryptSubmit()

        this.trainCorpus(data);
      }
    })
  }


  trainCorpus$(description) {
    const headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };

    let body = {
      'bot_id': this.bot.id,
      'description': description
    }

    let url = this.constantsService.corpusTrainUrl()
    return this.serverService.makePostReq<any>({ headerData, body, url });
  }

  trainCorpus(data){
    this.trainCorpus$(data).subscribe((val)=>{
      this.utilityService.showSuccessToaster(val.message);
    });
  }



  // added multi to curation
  ignoreMultiQuery(){
    this.ignoreCurationIssueById.emit(this.IssuesSelectedSet);
  }
  clickedOnArticle(section_id){
    if(section_id){
      this.selectedArticleToAddCuration = section_id;
    }
  }
  addMultiIssueToNewArticle(){
    let user_message_list =  this.curationItemList.filter((item) => {
      return !!(this.IssuesSelectedSet.find(c_id => {return c_id == item.id} ))
    }).map(a => a.user_message);
    user_message_list  = Array.from(new Set(user_message_list));
    TempVariableService.firstQuestionListForNewArticle = user_message_list;
    TempVariableService.curationIds = this.IssuesSelectedSet;
    this.router.navigate(['.'], {
      queryParams: { build:'articles' ,section_id:null},
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'merge'
  })
  }
  addMultiIssueToThisArticle(){
    this.addQueryToArticleByIds.emit(
      {
        section_id: this.selectedArticleToAddCuration,
        curationItemId: this.IssuesSelectedSet,
      }
    )
    this.articleSearchMode = false;
    this.selectedArticleToAddCuration = null;
  }
}