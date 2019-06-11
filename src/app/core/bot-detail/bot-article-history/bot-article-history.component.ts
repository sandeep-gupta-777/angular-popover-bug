import { Component, OnInit, Input } from '@angular/core';
import { IBot } from '../../interfaces/IBot';
import { ArticleHistorySmartTable } from './article-history-smart-table';
import { ConstantsService } from 'src/app/constants.service';
import { ServerService } from 'src/app/server.service';
import { ICorpus, IAllCorpusResult } from '../../interfaces/faqbots';
import { IHeaderData } from 'src/interfaces/header-data';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-bot-article-history',
  templateUrl: './bot-article-history.component.html',
  styleUrls: ['./bot-article-history.component.scss']
})
export class BotArticleHistoryComponent implements OnInit {

  constructor(
    private constantsService : ConstantsService,
    private serverService : ServerService,
    private datePipe : DatePipe
  ) { }
  @Input() bot:IBot;
  ArticleHistorySmartTableObj:ArticleHistorySmartTable;
  ngOnInit() {
    let headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    let url = this.constantsService.getAllCorpusForFAQBot();
    this.serverService.makeGetReq<IAllCorpusResult>({url,headerData})
      .subscribe((Result:IAllCorpusResult)=>{
        let corpusList : ICorpus[]= Result.objects;
        this.ArticleHistorySmartTableObj = new ArticleHistorySmartTable(corpusList,this.getTableDataMetaDict(),{datePipe:this.datePipe});
        this.ArticleHistorySmartTableObj.initializeTableData(corpusList);
        debugger;
      })
  }
  getTableDataMetaDict(): any {
    return this.constantsService.SMART_TABLE_ARTICLE_HISTORY_TEMPLATE;
  }

}
