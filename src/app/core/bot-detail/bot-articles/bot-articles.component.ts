import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { ConstantsService } from 'src/app/constants.service';
import { ServerService } from 'src/app/server.service';
import { IHeaderData } from 'src/interfaces/header-data';
import { IBot } from '../../interfaces/IBot';
import { FormGroup, NgForm, FormBuilder } from '@angular/forms';
import { UtilityService } from 'src/app/utility.service';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-bot-articles',
  templateUrl: './bot-articles.component.html',
  styleUrls: ['./bot-articles.component.scss']
})
export class BotArticlesComponent implements OnInit {

  constructor(
    private constantsService: ConstantsService,
    private serverService: ServerService,
    private utilityService: UtilityService,
    private formBuilder: FormBuilder,
    private matDialog: MatDialog,
  ) { }
  @Input() bot: IBot;
  corpus;
  loaded: boolean = false;
  showEditAndViewArtical: boolean = false;
  myObject = Object;
  articleFilterForm: FormGroup;
  filter_categorie_id_list: string[];
  selectedArticle;
  dialogRefWrapper = {ref: null};
  searchCategorie = "";

  ngOnInit() {
    this.getCorpusAndSetArticleFilterForm$()
      .subscribe()
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
          this.loaded = true;
          let formObj = {};
          val.category_mapping.forEach((categorie) => {
            formObj[categorie.category_id] = [false];
          })
          this.articleFilterForm = this.formBuilder.group(
            formObj
          );
        })
      )
  }
  
  getCorpusAndSetArticleFilterForm() {
    this.getCorpusAndSetArticleFilterForm$()
      .subscribe()
  }
  

  makeFilterList(form: FormGroup) {
    this.articleFilterForm = form
    this.filter_categorie_id_list = [];
    for (let i of Object.keys(form.value)) {
      if (form.value[i]) {
        this.filter_categorie_id_list.push(i)
      }
    }
  }
  removeFilterItemById(categorie_id) {
    this.articleFilterForm.patchValue({ [categorie_id]: false });
    this.makeFilterList(this.articleFilterForm);
  }
  exportArticalToCsv() {
    let csvFormat = this.corpus.sections.map(element => {
      return {
        Answer: element.answers[0].text[0],
        Questions: element.questions.toString()
      }
    });
    this.utilityService.downloadArrayAsCSV(csvFormat, {});
  }
  openArticleEditAndView(article: number) {
    // add qurey parems
    this.showEditAndViewArtical = true;
    this.selectedArticle = article;
  }
  openCategoryModifyModal(template :TemplateRef<any>){

      this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
      // setTimeout(() => {
  
      //   this.modifyBotRole = this.selectedUserModify.enterprises[0].role_id;
      //   this.isSelectedRoleAdmin = this.modifyBotRole == 2 ? true : false;
      //   let formlist = this.modifyBotList.value;
      //   for (let key of this.selectedUserModify.enterprises[0].bots) {
      //     formlist[key] = true;
      //   }
      //   this.modifyBotList.form.patchValue(formlist);
      // }, 0);
  
  }

  // edit and view artical functions

  updateArticle$(articleData) {
    const headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };

    let body = {
      "section_id": articleData.section_id,
      "questions": articleData.questions,
      "answers": articleData.answers,
      "category_id": articleData.category_id

    }

    let url = this.constantsService.updateArticelUrl()
    return this.serverService.makePostReq<any>({ headerData, body, url })
  }

  updateArticle(articleData){
    this.updateArticle$(articleData)
    .subscribe((value)=>{
      if(value){
        this.getCorpusAndSetArticleFilterForm()
        // this.saveAndTrain.emit();
      }
     
    })
  }
  trainCorpus$(){
    const headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };

    let body = {
      'bot_id': this.bot.id
    }

    let url = this.constantsService.corpusTrainUrl()
    return this.serverService.makePostReq<any>({ headerData, body, url });
      
  }

  trainBotAndGetCorpus() {
    this.trainCorpus$()
      .subscribe((value) => {
        if (value) {
          this.getCorpusAndSetArticleFilterForm$()
          .subscribe()
        }
      })
  }

  trainAndUpdate(articleData){
    this.updateArticle$(articleData)
    .subscribe((value)=>{
      if(value){
        this.trainBotAndGetCorpus();
        // this.getCorpusAndSetArticleFilterForm()
        // this.saveAndTrain.emit();

      }
     
    })
  }

}
