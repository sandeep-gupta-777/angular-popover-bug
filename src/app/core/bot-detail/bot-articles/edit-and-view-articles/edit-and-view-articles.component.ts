import { Component, OnInit, Input } from '@angular/core';
import { ConstantsService } from 'src/app/constants.service';
import { ServerService } from 'src/app/server.service';
import { UtilityService } from 'src/app/utility.service';
import { IBot } from 'src/app/core/interfaces/IBot';
import { IHeaderData } from 'src/interfaces/header-data';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-and-view-articles',
  templateUrl: './edit-and-view-articles.component.html',
  styleUrls: ['./edit-and-view-articles.component.scss']
})
export class EditAndViewArticlesComponent implements OnInit {

  constructor(
    private constantsService:ConstantsService,
    private serverService : ServerService,
    private utilityService : UtilityService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }
  @Input() bot :IBot;
  @Input() articleData;
  @Input() category_mapping;
  article_id : number;

  ngOnInit() {
    this.activatedRoute.queryParamMap
      .subscribe((value) => {
        if (value.get('article_id')) {
          this.article_id = Number(value.get('article_id'));
          if(this.article_id){

          }
          // ner_id && this.sdasdasdasd(ner_id);
          // this.showTable = !ner_id;
          // this.selectedRowData = this._custumNerDataForSmartTable.find((custumNerData)=>{
          //   return custumNerData.roomId === ner_id
          // });
          // if(this.selectedRowData)this.prepareData(this.selectedRowData);
        }
      });
    let headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
  // let getSectionForFAQBotById = this.constantsService.getCorpusForFAQBot(this.bot.corpus.id);
  
  // this.serverService.makeGetReq<any>({url: getCorpusForFAQBot, headerData})
  // .subscribe((val)=>{
  //   this.corpus = val;
  //   this.loaded = true;
  //   let formObj = {};
  //   val.category_mapping.forEach((categorie)=>{
  //     formObj[categorie.category_id] = [false];
  //   })
  //   this.articleFilterForm = this.formBuilder.group(
  //     formObj
  //     );
  // })
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
  deleteQustionWithId(index: number){
    if (index > -1) {
      this.articleData.questions.splice(index, 1);
    }
  }
  addNewQuestion(){
    this.articleData.questions.push("");
  }

}
