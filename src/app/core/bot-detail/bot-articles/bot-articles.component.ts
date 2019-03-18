import { Component, OnInit, Input } from '@angular/core';
import { ConstantsService } from 'src/app/constants.service';
import { ServerService } from 'src/app/server.service';
import { IHeaderData } from 'src/interfaces/header-data';
import { IBot } from '../../interfaces/IBot';

@Component({
  selector: 'app-bot-articles',
  templateUrl: './bot-articles.component.html',
  styleUrls: ['./bot-articles.component.scss']
})
export class BotArticlesComponent implements OnInit {

  constructor(
    private constantsService:ConstantsService,
    private serverService : ServerService
  ) { }
  @Input() bot :IBot;
  corpus;
  myObject = Object;
  ngOnInit() {
    let headerData: IHeaderData = {
        'bot-access-token': this.bot.bot_access_token
      };
    let getCorpusForFAQBot = this.constantsService.getCorpusForFAQBot(this.bot.corpus.id);
    this.serverService.makeGetReq<any>({url: getCorpusForFAQBot, headerData})
    .subscribe((val)=>{
      this.corpus = val
    })
  }

}
