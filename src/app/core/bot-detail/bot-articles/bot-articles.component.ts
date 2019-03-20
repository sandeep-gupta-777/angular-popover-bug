import { Component, OnInit, Input } from '@angular/core';
import { ConstantsService } from 'src/app/constants.service';
import { ServerService } from 'src/app/server.service';
import { IHeaderData } from 'src/interfaces/header-data';
import { IBot } from '../../interfaces/IBot';
import { FormGroup } from '@angular/forms';

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
      let session_array = []
      Object.keys(val.sections).forEach(section_id => {
        session_array.push({...this.corpus.sections[section_id],section_id:section_id})
      });
      this.corpus.sections = session_array;
      let category_mapping_array = []
      Object.keys(val.category_mapping).forEach(category_id => {
        category_mapping_array.push({...this.corpus.category_mapping[category_id],category_id:category_id})
      });
      this.corpus.category_mapping = category_mapping_array;
    })
  }
  makeFilterList(filter_categorie_map){
    debugger
    this.filter_categorie_id_list = [];
    for(let i of Object.keys(filter_categorie_map)){
      if(filter_categorie_map[i]){
        this.filter_categorie_id_list.push(i)
      }
    }
  }
}
