import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { IBot } from 'src/app/core/interfaces/IBot';
import { ICorpus } from 'src/app/core/interfaces/faqbots';
import { IHeaderData } from 'src/interfaces/header-data';
import { ServerService } from 'src/app/server.service';
import { ConstantsService } from 'src/app/constants.service';
import { map } from 'rxjs/operators';
import { EventService } from 'src/app/event.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faq-search-box',
  templateUrl: './faq-search-box.component.html',
  styleUrls: ['./faq-search-box.component.scss']
})
export class FaqSearchBoxComponent implements OnInit {

  constructor(
    private serverService:ServerService,
    private constantsService:ConstantsService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { }
  @Input() bot : IBot;
  @Output() clickedOnArticle = new EventEmitter();
  @Input() inCuration:boolean;
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
  navigateToArticleById(body){

    this.input_foused = false
    if(this.inCuration){
      this.clickedOnArticle.emit(body.section_id);
      this.searchAricleString = body.question.replace('<strong>', "").replace('</strong>', "");
    }
    if(!this.inCuration){
      this.router.navigate(['.'], {
        queryParams: {build:'articles',isArticle:true,section_id:body.section_id},
        relativeTo: this.activatedRoute,
        queryParamsHandling: 'merge'
      })
    }

  }
  getCorpusAndSetArticleFilterForm$() {
    let headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
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
