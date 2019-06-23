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
    private utilityService: UtilityService
  ) { }
  @Input() bot: IBot;
  corpusList : ICorpus[];
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
          return corpus.description != 'Default corpus';
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

  editCorpus(corpus_id: number) {

  }
  previewCorpus(corpus_id: number) {
    // sandeep_preview
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
      this.utilityService.downloadArrayAsCSV(csvFormat, {});
    
  }

}
