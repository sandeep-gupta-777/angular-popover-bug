import { Component, OnInit, Input } from '@angular/core';
import { IBot } from '../../interfaces/IBot';
import { ArticleHistorySmartTable } from './article-history-smart-table';
import { ConstantsService } from 'src/app/constants.service';
import { ServerService } from 'src/app/server.service';
import { ICorpus, IAllCorpusResult } from '../../interfaces/faqbots';
import { IHeaderData } from 'src/interfaces/header-data';
import { DatePipe } from '@angular/common';
import { UtilityService } from 'src/app/utility.service';
import { map } from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {ModalConfirmComponent} from '../../../modal-confirm/modal-confirm.component';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {
  ChangeFrameAction,
  SetCurrentBotDetailsAndResetChatStateIfBotMismatch,
  ToggleChatWindow
} from "../../../chat/ngxs/chat.action";
import {EChatFrame} from "../../../../interfaces/chat-session-state";
import {EventService} from "../../../event.service";
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-bot-article-history',
  templateUrl: './bot-article-history.component.html',
  styleUrls: ['./bot-article-history.component.scss']
})
export class BotArticleHistoryComponent implements OnInit {

  constructor(
    private constantsService: ConstantsService,
    private serverService: ServerService,
    private datePipe: DatePipe,
    private utilityService: UtilityService,
    private matDialog :MatDialog,
    private store :Store,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) { }
  @Input() bot: IBot;
  corpusList : ICorpus[];
  currentPage: number = 1;
  ArticleHistorySmartTableObj: ArticleHistorySmartTable;
  ngOnInit() {
    this.getAllCorpus$()
      .subscribe()
  }
  getAllCorpus$(){
    let headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    let url = this.constantsService.getAllCorpusForFAQBot();
    return this.serverService.makeGetReq<IAllCorpusResult>({ url, headerData })
      .pipe(
        map((Result) => {
        this.corpusList= Result.objects;
        this.corpusList = this.corpusList.filter((corpus)=>{
          return corpus.description != 'cloned' &&  corpus.description != 'saved';
        })
        this.ArticleHistorySmartTableObj = new ArticleHistorySmartTable(this.corpusList, this.getTableDataMetaDict(), { datePipe: this.datePipe });
        this.ArticleHistorySmartTableObj.initializeTableData(this.corpusList);
        debugger;
      })
      )
  }

  getTableDataMetaDict(): any {
    return this.constantsService.SMART_TABLE_ARTICLE_HISTORY_TEMPLATE;
  }

  tableClickHandler($event: Event) {
    $event.stopPropagation();
    let { index, action, corpus_id } = this.getClickedActionDetails($event.target as HTMLElement);
    if (!index || !action || !corpus_id) return;
    debugger;
    // alert(`index is ${index}, action is ${action}, corpus_id is ${corpus_id}`);
    if (action == 'makelive') {
      this.makeCorpusLive(corpus_id);
    }
    if (action == 'edit') {
      this.editCorpus(corpus_id);
    }
    if (action == 'preview') {
      this.previewCorpus(corpus_id);
    }
    if (action == 'download') {
      this.downloadCorpus(corpus_id);
    }
  }

  getClickedActionDetails(htmlEl: HTMLElement) {
    let dataCy = htmlEl.getAttribute('data-cy');
    if (!dataCy || !dataCy.includes('dropdown')) {
      return {
        index: null,
        action: null,
      }
    }
    let dataCySplit = dataCy.split('_');
    return {
      corpus_id: parseInt(dataCySplit['3']),
      index: dataCySplit['2'],
      action: dataCySplit['1']
    }
  }

  makeCorpusLive(corpus_id: number) {
    const headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    let body = {
      'corpus_id': corpus_id
    }
    let url = this.constantsService.makeCorpusLiveUrl()
    this.serverService.makePostReq<any>({ headerData, body, url })
      .subscribe(val => {
        this.utilityService.showSuccessToaster(val.message);
        this.getAllCorpus$()
          .subscribe()
      });
  }
  public dialogRefWrapper = {ref:null};
  editCorpus(corpus_id: number) {
    this.utilityService.openDialog({
      dialogRefWrapper: this.dialogRefWrapper,
      classStr:'primary-modal-header-border',
      data:{
        actionButtonText:"Continue",
        message: "All your untrained changes will be lost and this knowledge base will be the new draft for editing. Do you wish to continue?",
        title:`Edit knowledge base`,
        isActionButtonDanger:false,
        inputDescription: null,
        closeButtonText: "Cancel"
      },
      dialog: this.matDialog,
      component:ModalConfirmComponent
    }).then((data)=>{

      if(data){
        // debugger;

        const headerData: IHeaderData = {
          'bot-access-token': this.bot.bot_access_token
        };
        let body = {
          'parent_corpus': corpus_id
        }
        let url = this.constantsService.putCorpus();
        this.serverService.makePostReq({url,body,headerData})
          .subscribe((val)=>{
            this.utilityService.showSuccessToaster("Knowledge base can be edited now");
            this.router.navigate(['.'], {
              queryParams: {build:'articles',isArticle:null,section_id:null},
              relativeTo: this.activatedRoute,
              queryParamsHandling: 'merge'
            })
          })
      }
    })
  }
  previewCorpus(corpus_id: number) {
    let corpus = this.corpusList.find(corpus => corpus_id === corpus.id);
    let {model_version_id, model_id} = corpus;
    this.previewBot({model_version_id, model_id});
  }
  //todo: code repetition : sandeep
  previewBot(corpusDetails:any) {
    // this.router.navigate(['', {outlets: {preview: 'preview'}}]);
    this.store.dispatch([
      new SetCurrentBotDetailsAndResetChatStateIfBotMismatch({
        bot: {...this.bot, ...corpusDetails}
      }),
      new ToggleChatWindow({open: true}),
      new ChangeFrameAction({frameEnabled: EChatFrame.CHAT_BOX})
    ]);

    /*TODO: integrate this with store*/
    EventService.startANewChat$.emit({bot: {...this.bot, ...corpusDetails}, consumerDetails: {uid: this.utilityService.createRandomUid()},
    });
  }

  downloadCorpus(corpus_id: number) {
      let toDownlodeSection = this.corpusList.find((corpus)=>{
        return corpus.id == corpus_id;
      }).sections;

      let csvFormat = toDownlodeSection.map(element => {
        return {
          Answer: element.answers[0].text[0],
          Questions: element.questions.toString()
        }
      });
      this.utilityService.downloadArrayAsCSV(csvFormat, {}, 'shoaib.csv');

  }

  goToPage(val){
    this.currentPage= val.page;
  }

}
