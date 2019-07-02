import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
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

  ) { }
  @Input() curationItemList:ICurationItem[];
  @Input() isMorePresent:boolean;
  @Input() bot: IBot;
  @Output() loadMoreNext = new EventEmitter();
  @Output() ignoreCurationIssueById = new EventEmitter();
  @Output() addQueryToArticleByIds = new EventEmitter();
  dialogRefWrapper = { ref: null };
  corpusState :string;
  myESplashScreens = ESplashScreens;
  @Input() totallength:number;
  ngOnInit() {
    this.getCorpus$().subscribe()
  }
  load10More(){

    this.loadMoreNext.emit();
  }
  ignoreIt(curationId){
    this.ignoreCurationIssueById.emit(curationId);
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

  getCorpus$() {
    let headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    let getCorpusForFAQBot = this.constantsService.getDraftCorpusForFAQBot();

    return this.serverService.makeGetReq<any>({ url: getCorpusForFAQBot, headerData })
      .pipe(
        map((val) => {
          this.corpusState = val.state;
          var j = val.state.charAt(0).toUpperCase();
          this.corpusState = j + val.state.substr(1).toLowerCase();
        })
      )
  }
}
