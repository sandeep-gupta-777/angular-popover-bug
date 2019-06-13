import { Component, OnInit, Input } from '@angular/core';
import { IBot } from 'src/app/core/interfaces/IBot';
import { ICorpus } from 'src/app/core/interfaces/faqbots';
import { IHeaderData } from 'src/interfaces/header-data';
import { ServerService } from 'src/app/server.service';
import { ConstantsService } from 'src/app/constants.service';
import { map } from 'rxjs/operators';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-faq-search-box',
  templateUrl: './faq-search-box.component.html',
  styleUrls: ['./faq-search-box.component.scss']
})
export class FaqSearchBoxComponent implements OnInit {

  constructor(
    private serverService:ServerService,
    private constantsService:ConstantsService
  ) { }
  @Input() bot : IBot;
  corpus : ICorpus;
  searchAricleString:string;
  input_foused:boolean = false;
  ngOnInit() {
    this.getCorpusAndSetArticleFilterForm$().subscribe();
    EventService.faqHeaderSearchBarReloadData.subscribe((value)=>{
      if(value){
        this.corpus = value;
      }
    })
  }
  getCorpusAndSetArticleFilterForm$() {
    let headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    let getCorpusForFAQBot = this.constantsService.getDraftCorpusForFAQBot();
    return this.serverService.makeGetReq<any>({ url: getCorpusForFAQBot, headerData })
      .pipe(
        map((val) => {
          this.corpus = val;
        })
      )
  }
}
