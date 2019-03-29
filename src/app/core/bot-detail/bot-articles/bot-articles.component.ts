import { Component, OnInit, Input } from '@angular/core';
import { ConstantsService } from 'src/app/constants.service';
import { ServerService } from 'src/app/server.service';
import { IHeaderData } from 'src/interfaces/header-data';
import { IBot } from '../../interfaces/IBot';
import { FormGroup, NgForm } from '@angular/forms';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-bot-articles',
  templateUrl: './bot-articles.component.html',
  styleUrls: ['./bot-articles.component.scss']
})
export class BotArticlesComponent implements OnInit {

  constructor(
    private constantsService:ConstantsService,
    private serverService : ServerService,
    private utilityService : UtilityService
  ) { }
  @Input() bot :IBot;
  corpus;
  myObject = Object;
  sort_articals_by: string = 'updated_at';
  filter_categorie_search:string = "";
  filter_categorie_id_list:string[];
  ngOnInit() {
    let headerData: IHeaderData = {
        'bot-access-token': this.bot.bot_access_token
      };
    let getCorpusForFAQBot = this.constantsService.getCorpusForFAQBot(this.bot.corpus.id);
    this.serverService.makeGetReq<any>({url: getCorpusForFAQBot, headerData})
    .subscribe((val)=>{
      this.corpus = val;
    })
  }
  makeFilterList(filter_categorie_map){
    this.filter_categorie_id_list = [];
    for(let i of Object.keys(filter_categorie_map)){
      if(filter_categorie_map[i]){
        this.filter_categorie_id_list.push(i)
      }
    }
  }
  removeFilterItemById(categorie_id , filter_categorie_form : NgForm){
    filter_categorie_form.form.patchValue({[categorie_id]:false});
    this.makeFilterList(filter_categorie_form.value);
  }
  exportArticalToCsv(){
    let csvFormat = this.corpus.sections.map(element => {
      return {
        Answer : element.answers[0].text[0],
        Questions : element.questions.toString()
      }
    });
    this.utilityService.downloadArrayAsCSV(csvFormat,{});
  }
  
}
