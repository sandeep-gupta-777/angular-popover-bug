import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ESplashScreens} from "../../../../splash-screen/splash-screen.component";
import {IBot} from "../../../interfaces/IBot";
import {ConstantsService} from "../../../../constants.service";
import {ServerService} from "../../../../server.service";
import {UtilityService} from "../../../../utility.service";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {IHeaderData} from "../../../../../interfaces/header-data";
import {ELoadingStatus} from "../../../../button-wrapper/button-wrapper.component";

interface IQnAItem {answer:string,question:string,category:string};

@Component({
  selector: 'app-faq-import-from-link',
  templateUrl: './faq-import-from-link.component.html',
  styleUrls: ['./faq-import-from-link.component.scss']
})
export class FaqImportFromLinkComponent implements OnInit {

  constructor(
    private constantsService : ConstantsService,
    private serverService : ServerService,
    private utilityService : UtilityService,
    private formBuilder : FormBuilder
  ) { }
  myESplashScreens = ESplashScreens;
  @Input() bot : IBot;
  FAQListForm : FormGroup;
  @Output() goBackToArticlePageEvent = new EventEmitter();
  @Output() newFaqUpdated = new EventEmitter();
  extractURL = "";
  selectedCount = 0;
  uploadingData = ELoadingStatus.default;
  ngOnInit() {
  }
  goBackToArticlePage(){
    this.goBackToArticlePageEvent.emit();
    this.extractURL = "";
    this.FAQListForm.reset();
  }
  getFaqsList(){
    this.uploadingData = ELoadingStatus.loading;
    const url = this.constantsService.getFaqFromURL();
    let body = {
      // https://experience.imiconnect.io/faqs/
      "url": this.extractURL.trim(),
      "access_token": "gAAAAABd54JjdQJuW4NCIQopW_uPmVi5Yl8hiF-et3CEflvABusLeHa9KsmONFa7XlVrFKcsPoB726W0_Q6Dur7Md4LR47UQF5XZhol64TpkW9WYpdiIBTA="
    };
    debugger;
    this.serverService.makePostReq({url:url, body:body})
      .subscribe((value : IQnAItem[]) => {
        let FAQformList = [];
        for(let i = 0 ; i<value.length ; i++) {
          let f = this.formBuilder.group({
            'answer': value[i].answer,
            'question': value[i].question,
            'category': value[i].category,
            'selected': false,
          });
          f.get('selected').valueChanges.subscribe((val)=>{
            debugger;
            if(val)this.selectedCount++;
            if(!val) this.selectedCount--;
          })
          FAQformList.push(f);
        }
          this.FAQListForm = this.formBuilder.group({
            'QustionNAnswer':this.formBuilder.array(FAQformList)
          });
          this.uploadingData = ELoadingStatus.success;
      },(error)=>{
        if(error.error){
          this.utilityService.showErrorToaster("Error Found");
        }
        this.uploadingData = ELoadingStatus.error;
        })
  }

  selectAllQnA(e){
    for(let singleQnA of (this.FAQListForm.get('QustionNAnswer')  as FormArray ).controls){
      if(singleQnA.get('selected').value != !!e.target.checked){
        singleQnA.get('selected').patchValue(!!e.target.checked);
      }

    }
  }
  exportToArticle(){
    if(this.selectedCount == 0){
      this.utilityService.showErrorToaster("No QnA selected");
    }
    let list = this.FAQListForm.value;
    list = list.QustionNAnswer;
    list = list.filter((qnA)=>{return qnA.selected});
    let listInAPIFromat = [];
    for(let QnA of list){
      let obj = {
        category_name : 'unassigned',
        questions : [QnA.question],
        answers : [{'text': [QnA.answer],'include' : ['web']}]
      }
      listInAPIFromat.push(obj);
    }
    this.makePostRequestToExport(listInAPIFromat);
  }
  makePostRequestToExport(data){
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
    const body = {
      'sections': data
    };
    const url = this.constantsService.putCorpus();
    this.serverService.makePostReq<any>({headerData, body, url})
      .subscribe((val)=>{
        this.newFaqUpdated.emit();
        this.goBackToArticlePage();
      })
  }
}
