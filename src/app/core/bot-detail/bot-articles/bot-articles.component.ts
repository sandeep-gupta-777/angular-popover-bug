import { Component, OnInit, Input, TemplateRef, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { ConstantsService } from 'src/app/constants.service';
import { ServerService } from 'src/app/server.service';
import { IHeaderData } from 'src/interfaces/header-data';
import { IBot } from '../../interfaces/IBot';
import { FormGroup, NgForm, FormBuilder } from '@angular/forms';
import { UtilityService } from 'src/app/utility.service';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { ICorpus, IArticleItem, ICategoryMappingItem } from '../../interfaces/faqbots';
import { ModalConfirmComponent } from 'src/app/modal-confirm/modal-confirm.component';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ChatService } from 'src/app/chat.service';
import { Observable } from 'rxjs';
import { IEnterpriseProfileInfo } from 'src/interfaces/enterprise-profile';
import { Select } from '@ngxs/store';
import { RouteHelperService } from 'src/app/route-helper.service';
import { EAllActions } from 'src/app/typings/enum';
import { EventService } from 'src/app/event.service';
import { TempVariableService } from '../../../temp-variable.service';
import downloadCsv from 'download-csv';
import { CategoryIdToNamePipe } from './category-id-to-name.pipe';
import { ELoadingStatus } from 'src/app/button-wrapper/button-wrapper.component';
@Component({
  selector: 'app-bot-articles',
  templateUrl: './bot-articles.component.html',
  styleUrls: ['./bot-articles.component.scss']
})
export class BotArticlesComponent implements OnInit, AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    if (RouteHelperService.getQueryParams(this.activatedRoute, "openPreview")) {
      this.chatService.openPreviewFormService(this.bot, this.enterprise_unique_name);
    }


  }

  constructor(
    private constantsService: ConstantsService,
    private serverService: ServerService,
    private utilityService: UtilityService,
    private formBuilder: FormBuilder,
    private matDialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private chatService: ChatService,
    private categoryIdToNamePipe: CategoryIdToNamePipe
  ) { }
  @Input() bot: IBot;
  corpus: ICorpus;
  loaded: boolean = false;
  showEditAndViewArtical: boolean = false;
  myObject = Object;
  articleFilterForm: FormGroup;
  filter_categorie_id_list: string[];
  selectedArticle: IArticleItem;
  dialogRefWrapper = { ref: null };
  searchCategorie = "";
  categoryMappingClone: ICategoryMappingItem[];
  showCreateNewCategoryInput = false;
  currentPageOfArtcle;
  enterprise_unique_name;
  myEAllActions = EAllActions;
  @ViewChild('Uplodeform') Uplodeform: NgForm;
  @Select() loggeduserenterpriseinfo$: Observable<IEnterpriseProfileInfo>;
  ngOnInit() {
    if (TempVariableService.firstQuestionListForNewArticle) {
      this.openArticleCreate();
      this.selectedArticle.questions = TempVariableService.firstQuestionListForNewArticle;
      TempVariableService.firstQuestionListForNewArticle = null;
    }
    this.getCorpusAndSetArticleFilterForm$()
      .subscribe(() => {
        let section_id = this.activatedRoute.snapshot.queryParamMap.get('section_id');
        section_id && this.navigateToSection(section_id);
      })
    this.loggeduserenterpriseinfo$.subscribe((enterpriseProfileInfo) => {
      this.enterprise_unique_name = enterpriseProfileInfo.enterprise_unique_name;
    });
    this.activatedRoute.queryParams.subscribe(
      (params: Params) => {

        if (params.section_id) {

          this.navigateToSection(params.section_id);
        }
      })
  }

  navigateToSection(section_id) {
    if (this.corpus) {
      let goingArticle = this.corpus.sections.find((section) => {
        return section.section_id == section_id;
      })
      this.openArticleEditAndView(goingArticle);
    }
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
          this.categoryMappingClone = this.utilityService.createDeepClone(val.category_mapping);
          val.category_mapping.forEach((categorie) => {
            formObj[categorie.category_id] = [false];
          })
          this.articleFilterForm = this.formBuilder.group(
            formObj
          );
          EventService.faqHeaderSearchBarReloadData.emit(val);
        })
      )
  }

  getCorpusAndSetArticleFilterForm() {
    this.getCorpusAndSetArticleFilterForm$()
      .subscribe()
  }


  makeFilterList(form: FormGroup) {

    // this.currentPageOfArtcle = 1;
    this.currentPageOfArtcle = new Number(0);
    this.articleFilterForm = form;
    this.filter_categorie_id_list = [];
    for (let i of Object.keys(form.value)) {
      if (form.value[i]) {
        this.filter_categorie_id_list.push(i)
      }
    }
  }
  goBackToArticalList() {

    this.getCorpusAndSetArticleFilterForm();
    this.showEditAndViewArtical = false;
    this.router.navigate(['.'], {
      queryParams: { isArticle: false, section_id: null },
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'merge'
    })
  }
  removeFilterItemById(categorie_id) {
    this.currentPageOfArtcle = 0;
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
  openArticleEditAndView(article: IArticleItem) {
    // add qurey parems
    this.router.navigate(['.'], {
      queryParams: { isArticle: true },
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'merge'
    })
    this.showEditAndViewArtical = true;
    this.selectedArticle = article;
  }
  openArticleCreate() {
    let article = {
      'answers': [{ "text": [""] }],
      'category_id': 'unassigned',
      'questions': [""]
    }
    this.router.navigate(['.'], {
      queryParams: { isArticle: true },
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'merge'
    })
    this.showEditAndViewArtical = true;
    this.selectedArticle = article;
  }
  openCategoryModifyModal(template: TemplateRef<any>) {
    this.searchCategorie = "";
    this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
    setTimeout(() => {
      this.showCreateNewCategoryInput = false;
      this.categoryMappingClone = this.utilityService.createDeepClone(this.corpus.category_mapping);
    }, 0);

  }

  // edit and view artical functions
  // update artical
  updateArticle$(articleData: IArticleItem) {
    const headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    let create = !articleData.section_id;

    let body = {
      'questions': articleData.questions,
      'answers': articleData.answers,
      'category_id': articleData.category_id

    }
    let url;

    if (!create) {
      body['section_id'] = articleData.section_id;
      url = this.constantsService.updateArticelUrl();
      // this.articleUpdatedToasterMessage="Article succesfully saved";
    }
    else {
      if (TempVariableService.curationIds) {
        body["curation_id_list"] = TempVariableService.curationIds;
        url = this.constantsService.addCurationToNewSection();
      } else {
        url = this.constantsService.createArticelUrl();
        // this.articleUpdatedToasterMessage="Article succesfully saved";
      }

    }


    return this.serverService.makePostReq<any>({ headerData, body, url })
  }
  
  

  updateArticle(articleData: IArticleItem) {
    this.updateArticle$(articleData)
    
      .subscribe((value) => {
        if (value) {
          TempVariableService.curationIds = null;
          this.getCorpusAndSetArticleFilterForm$().subscribe((v) => {
            this.utilityService.showSuccessToaster("Article succesfully saved");
            this.showEditAndViewArtical = false;
            this.router.navigate(['.'], {
              queryParams: { isArticle: false, section_id: null },
              relativeTo: this.activatedRoute,
              queryParamsHandling: 'merge'
            })
          })
          // this.saveAndTrain.emit();
        }

      })
  }

  // delete artical
  async openDeleteArticle(article) {
    await this.utilityService.openDialog({
      dialogRefWrapper: this.dialogRefWrapper,
      classStr: 'danger-modal-header-border',
      data: {
        actionButtonText: "Delete article",
        message: `Are you sure you want to delete the selected article? 
          The corpus has to be trained again to preview the change.`,
        title: `Delete article?`,
        isActionButtonDanger: true,
        inputDescription: null,
      },
      dialog: this.matDialog,
      component: ModalConfirmComponent
    }).then((data) => {
      if (data) {
        this.deleteArticle(article);
      }
    })
  }
  deleteArticle(article) {
    const headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };

    let body = {
      "section_id": article.section_id,
      "category_id": article.category_id
    }
    let url = this.constantsService.deleteArticelUrl()
    this.serverService.makePostReq<any>({ headerData, body, url })
      .subscribe(value => {
        if (value) {
          this.getCorpusAndSetArticleFilterForm$()
            .subscribe(v => {
              this.showEditAndViewArtical = false;
              this.router.navigate(['.'], {
                queryParams: { isArticle: false, section_id: null },
                relativeTo: this.activatedRoute,
                queryParamsHandling: 'merge'
              })
            })

        }
      })
  }

  // train stuff
  openTrainModal() {
    this.utilityService.openDialog({
      dialogRefWrapper: this.dialogRefWrapper,
      classStr: 'danger-modal-header-border',
      data: {
        actionButtonText: `Continue`,
        message: 'Leave a comment about why you are training the bot so that it can be tracked in the bot’s history.',
        title: `Train knowledge base`,
        isActionButtonDanger: false,
        inputDescription: "Comment"
      },
      dialog: this.matDialog,
      component: ModalConfirmComponent
    }).then((data) => {
      if (data) {
        // this.decryptSubmit()

        this.trainBotAndGetCorpus(data);
      }
    })
  }


  trainCorpus$(description) {
    const headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };

    let body = {
      'bot_id': this.bot.id,
      'description': description
    }

    let url = this.constantsService.corpusTrainUrl()
    return this.serverService.makePostReq<any>({ headerData, body, url });
  }

  trainBotAndGetCorpus(description) {
    this.trainCorpus$(description)
      .subscribe((value) => {
        if (value) {
          this.getCorpusAndSetArticleFilterForm$()
            .subscribe(() => {
              this.showEditAndViewArtical = false;
              this.router.navigate(['.'], {
                queryParams: { isArticle: false, section_id: null },
                relativeTo: this.activatedRoute,
                queryParamsHandling: 'merge'
              })
            })
        }
      })
  }

  trainAndUpdate(articleData: IArticleItem) {

    this.updateArticle$(articleData)
      .subscribe((value) => {
        if (value) {
          let description;
          if (!articleData.section_id) {
            description = "Created article: " + articleData.questions[0];
          }
          if (articleData.section_id) {
            description = "Updated article: " + articleData.questions[0];
          }

          this.trainBotAndGetCorpus(description);
        }
      })
  }
  // make live stuff

  makeLiveCorpus() {
    const headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };

    let body = {
      'corpus_id': this.corpus.id
    }

    let url = this.constantsService.makeCorpusLiveUrl()
    this.serverService.makePostReq<any>({ headerData, body, url })
      .subscribe(val => {
        this.utilityService.showSuccessToaster(val.message);
        if (this.corpus) {
          this.corpus.state = 'live';
        }
      });
  }

  // category handeling

  categoryUpdate(body) {
    const headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    const url = this.constantsService.updateCategoryUrl();
    this.serverService.makePostReq<any>({ headerData, body, url })
      .subscribe((value) => {

        for (var i in this.corpus.category_mapping) {
          if (this.corpus.category_mapping[i].category_id == value.updated_category.category_id) {
            this.corpus.category_mapping[i] = value.updated_category;
            this.corpus.category_mapping[i] = { ...this.corpus.category_mapping[i] };
            this.corpus.category_mapping = [...this.corpus.category_mapping];
            this.corpus = { ...this.corpus };
            break;
          }
        }
        this.utilityService.showSuccessToaster("Category succesfully updated");
      });
  }
  categoryDelete(body) {
    const headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    const url = this.constantsService.deleteCategoryUrl();
    this.serverService.makePostReq<any>({ headerData, body, url })
      .subscribe((value) => {
        this.getCorpusAndSetArticleFilterForm$()
          .subscribe((v) =>
            this.utilityService.showSuccessToaster("Category succesfully deleted"));
      })
  }
  categoryCreate(body) {

    const headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    const url = this.constantsService.createCategoryUrl();
    this.serverService.makePostReq<any>({ headerData, body, url })
      .subscribe((value) => {
        this.corpus.category_mapping.push(value.new_category);
        this.corpus.category_mapping = [...this.corpus.category_mapping];
        this.corpus = { ...this.corpus };
        this.showCreateNewCategoryInput = false;
        this.categoryMappingClone.push(value.new_category);
        this.categoryMappingClone = [...this.categoryMappingClone];
        this.utilityService.showSuccessToaster("Category succesfully created");
        let formObj = {};
        this.categoryMappingClone.forEach((categorie) => {
          formObj[categorie.category_id] = [false];
        })
        this.articleFilterForm = this.formBuilder.group(
          formObj
        );
      })
  }

  cancelCategoryEditToUnchangedValue() {
    this.categoryMappingClone = this.utilityService.createDeepClone(this.corpus.category_mapping);
  }

  // import and export corpus
  async openCorpusExportModal() {

    await this.utilityService.openDialog({
      dialogRefWrapper: this.dialogRefWrapper,
      classStr: 'primary-modal-header-border',
      data: {
        actionButtonText: "Export",
        message: `Defalut articles for the corpus are non exportable and will need to configured in the articles pages only.Do you wish to export?`,
        title: `Export articles to csv`,
        isActionButtonDanger: false,
        inputDescription: null,
      },
      dialog: this.matDialog,
      component: ModalConfirmComponent
    }).then((data) => {
      if (data) {
        this.exportCorpus();
      }
    })

  }
  exportCorpus() {
    let maxNoOfQuestions = 0;
    const { Parser } = require('json2csv');
    let data = this.corpus.sections
      .map(corpusSection => {
        if (maxNoOfQuestions < corpusSection.questions.length && corpusSection.category_id != 'default_articles') {
          maxNoOfQuestions = corpusSection.questions.length
        }
        if(corpusSection.category_id != 'default_articles'){
          return {
            Answer: corpusSection.answers[0].text[0],
            Category: this.categoryIdToNamePipe.transform(corpusSection.category_id, this.categoryMappingClone),
            ...this.getVarientsObjFromQuestionArray(corpusSection.questions)
          }
        }
      })
    data = data.filter(d => {return d != null})
    const fields = ['Category', 'Answer'];
    for (let i = 1; i <= maxNoOfQuestions; i++) {
      fields.push(`questions varient ${i}`);
    }
    try {
      const json2csvParser = new Parser({ fields, unwind: 'field2', unwindBlank: true, flatten: true });
      const csv = json2csvParser.parse(data);
      this.utilityService.downloadText(csv, `corpus_${this.corpus.id}.csv`);
      console.log(csv);
    } catch (err) {
      console.error(err);
    }
  }
  getVarientsObjFromQuestionArray(questions) {
    let obj = {};
    let i = 1;
    console.log(questions);
    for (let x of questions) {
      obj[`questions varient ${i}`] = x;
      i = i + 1;
    }
    console.log(obj);
    return obj;
  }

  
  file: Blob;
  errorArticleMustHaveCategory  : boolean = false;
  errorArticleMustHaveAnswer  : boolean = false;
  errorArticleMustHaveOneQuestion  : boolean = false;
  errorArticleMustNotHaveDefaultArticle  : boolean = false;
  errorArticleMustHaveFirstColumnAsCategoryAndSecondAsAnswer : boolean = false;
  uploadingData =  ELoadingStatus.default;
  openCorpusImportModal(template: TemplateRef<any>) {
    this.errorArticleMustHaveCategory=false; 
    this.errorArticleMustHaveAnswer = false; 
    this.errorArticleMustHaveOneQuestion = false; 
    this.errorArticleMustNotHaveDefaultArticle = false;
    this.errorArticleMustHaveFirstColumnAsCategoryAndSecondAsAnswer = false;
    this.uploadingData =  ELoadingStatus.default;
    this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
  }
  fileChanged(e) {
    this.file = e.target.files[0];
    this.errorArticleMustHaveCategory = false;  
    this.errorArticleMustHaveAnswer = false;  
    this.errorArticleMustHaveOneQuestion = false;  
    this.errorArticleMustNotHaveDefaultArticle = false;
    this.errorArticleMustHaveFirstColumnAsCategoryAndSecondAsAnswer = false;
  }
  uploadDocument() {
    this.uploadingData =  ELoadingStatus.loading;
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
      let array = this.csvToArray(fileReader.result);
      console.log(array);
      if(array[0][0].toLowerCase().includes('category') && array[0][1].toLowerCase().includes('answer')){
        this.errorCheckArticleMustHaveCategoryAnmwerOneQuestion(array);
        console.log(array);
        array = this.removeNaN(array);
        console.log(array);
        if( !(this.errorArticleMustHaveCategory || this.errorArticleMustHaveAnswer || this.errorArticleMustHaveOneQuestion || this.errorArticleMustNotHaveDefaultArticle) ){
          let obj = this.ArrayToObject(array);
          this.uploadDocumentToDB(obj);
          console.log(obj);
        }else{
          this.uploadingData =  ELoadingStatus.error;
          this.Uplodeform.form.reset();
        }
      }else{
        this.errorArticleMustHaveFirstColumnAsCategoryAndSecondAsAnswer = true;    
        this.uploadingData =  ELoadingStatus.error;
        this.Uplodeform.form.reset();    
      }
      
      console.log(array);
    }
    if(!this.file){
      this.uploadingData =  ELoadingStatus.error;
    }
    fileReader.readAsText(this.file);
  }
  errorCheckArticleMustHaveCategoryAnmwerOneQuestion(array){
    for(let i  = 0; i< array.length ; i++){
      if(!array[i][0]){
        this.errorArticleMustHaveCategory = true; 
        return;
      } 
      if(!array[i][1]){
        this.errorArticleMustHaveAnswer = true; 
        return;
      } 
      if(!array[i][2]){
        this.errorArticleMustHaveOneQuestion = true; 
        return;
      } 
      debugger;
      if((array[i][0].toLowerCase() == 'default')){
        this.errorArticleMustNotHaveDefaultArticle = true;
        return;
      }
    }
    return;
  }
  uploadDocumentToDB(obj){
    this.serverService.makePostReq
    const headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };

    let body = {
      "sections":obj
    }
    let url = this.constantsService.putCorpus();
    this.serverService.makePostReq<any>({ headerData, body, url })
      .subscribe((val)=>{
        this.utilityService.showSuccessToaster("uploded to corpus")
        this.uploadingData =  ELoadingStatus.success;
        this.getCorpusAndSetArticleFilterForm$().subscribe((v)=>{
          this.dialogRefWrapper.ref.close();
          this.uploadingData =  ELoadingStatus.default;
        });
        this.errorArticleMustHaveCategory=false; 
        this.errorArticleMustHaveAnswer = false; 
        this.errorArticleMustHaveOneQuestion = false;
        this.errorArticleMustHaveFirstColumnAsCategoryAndSecondAsAnswer = false;

        
      },(val)=>{
        this.uploadingData =  ELoadingStatus.error;
      })
  }
  csvToArray(csv) {
    csv = csv.replace(/"/g, "");
    let rows = csv.split("\n");
    rows.pop();
    return rows.map(function (row) {
      return row.split(',');
    });
  }
  removeNaN(array){
    return array.map(function (row) {
      return row.filter(str => { return (str != "" && str.charCodeAt(0) != 13) });
    });
  }
  ArrayToObject(array) {
    array = array.slice(1);
    return array.map(section => {
      return {
        questions: section.slice(2),
        answers: [{ "text": [section[1]] }],
        category_name: section[0]
      }
    })
  }
  closeUploadModal(){
    this.dialogRefWrapper.ref.close();
    this.errorArticleMustHaveCategory=false; 
    this.errorArticleMustHaveAnswer = false; 
    this.errorArticleMustHaveOneQuestion = false; 
    this.errorArticleMustHaveFirstColumnAsCategoryAndSecondAsAnswer = false;
    this.uploadingData =  ELoadingStatus.default;
  }
  ngOnDestroy() {
    TempVariableService.curationIds = null;
  }
}
