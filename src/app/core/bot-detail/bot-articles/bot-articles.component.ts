import { Component, OnInit, Input } from '@angular/core';
import { ConstantsService } from 'src/app/constants.service';
import { ServerService } from 'src/app/server.service';
import { IHeaderData } from 'src/interfaces/header-data';
import { IBot } from '../../interfaces/IBot';
import { FormGroup, NgForm, FormBuilder } from '@angular/forms';
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
    private utilityService : UtilityService,
    private formBuilder: FormBuilder
  ) { }
  @Input() bot :IBot;
  corpus;
  loaded: boolean = false;
  myObject = Object;
  articleFilterForm: FormGroup;
  filter_categorie_id_list:string[];
  ngOnInit() {
    let headerData: IHeaderData = {
        'bot-access-token': this.bot.bot_access_token
      };
    let getCorpusForFAQBot = this.constantsService.getCorpusForFAQBot(this.bot.corpus.id);
    
    this.serverService.makeGetReq<any>({url: getCorpusForFAQBot, headerData})
    .subscribe((val)=>{
      this.corpus = val;
      this.loaded = true;
      let formObj = {};
      val.category_mapping.forEach((categorie)=>{
        formObj[categorie.category_id] = [false];
      })
      this.articleFilterForm = this.formBuilder.group(
        formObj
        );
    })

    
  }
  makeFilterList(form : FormGroup){
    this.articleFilterForm = form
    this.filter_categorie_id_list = [];
    for(let i of Object.keys(form.value)){
      if(form.value[i]){
        this.filter_categorie_id_list.push(i)
      }
    }
  }
  removeFilterItemById(categorie_id){
    this.articleFilterForm.patchValue({[categorie_id]:false});
    this.makeFilterList(this.articleFilterForm);
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
