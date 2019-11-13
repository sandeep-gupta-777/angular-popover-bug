import {Component, Input, OnInit} from '@angular/core';
import {IBot} from '../../interfaces/IBot';
import {ArticleHistorySmartTable} from './article-history-smart-table';
import {ConstantsService} from 'src/app/constants.service';
import {ServerService} from 'src/app/server.service';
import {IAllCorpusResult, ICorpus} from '../../interfaces/faqbots';
import {IHeaderData} from 'src/interfaces/header-data';
import {DatePipe} from '@angular/common';
import {EBotType, UtilityService} from 'src/app/utility.service';
import {map} from 'rxjs/operators';
import {MatDialog} from '@angular/material';
import {ModalConfirmComponent} from '../../../modal-confirm/modal-confirm.component';
import {ActivatedRoute, Router} from '@angular/router';
import {
  ChangeFrameAction,
  SetCurrentBotDetailsAndResetChatStateIfBotMismatch,
  ToggleChatWindow
} from '../../../chat/ngxs/chat.action';
import {EChatFrame} from '../../../../interfaces/chat-session-state';
import {EventService} from '../../../event.service';
import {Store} from '@ngxs/store';
import {CategoryIdToNamePipe} from '../bot-articles/category-id-to-name.pipe';

@Component({
  selector: 'app-bot-article-history',
  templateUrl: './bot-article-history.component.html',
  styleUrls: ['./bot-article-history.component.scss']
})
export class BotArticleHistoryComponent implements OnInit {
  public dialogRefWrapper = {ref: null};
  @Input() bot: IBot;
  corpusList: ICorpus[];
  currentPage = 1;
  pageSize = 10;
  isReloading = false;
  totalHistoryLength;
  ArticleHistorySmartTableObj: ArticleHistorySmartTable;

  constructor(
    private constantsService: ConstantsService,
    private serverService: ServerService,
    private datePipe: DatePipe,
    private utilityService: UtilityService,
    private matDialog: MatDialog,
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private categoryIdToNamePipe: CategoryIdToNamePipe,
  ) {
  }

  ngOnInit() {

    this.getAllCorpus$()
      .subscribe();
  }

  getAllCorpus$() {
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
    this.isReloading = true;
    let url;
    if (this.bot.bot_type === EBotType.faqbot){
      url = this.constantsService.getAllCorpusForFAQBot(this.pageSize, this.pageSize * (this.currentPage - 1));
    }
    if (this.bot.bot_type === EBotType.mlbot){
      url = this.constantsService.getAllCorpusForMLBot(this.pageSize, this.pageSize * (this.currentPage - 1));
    }
    return this.serverService.makeGetReq<IAllCorpusResult>({url, headerData})
      .pipe(
        map((Result) => {
          this.isReloading = false;
          this.totalHistoryLength = Result.meta.total_count;
          this.corpusList = Result.objects;
          this.ArticleHistorySmartTableObj = new ArticleHistorySmartTable(this.corpusList, this.getTableDataMetaDict(), {datePipe: this.datePipe});
          this.ArticleHistorySmartTableObj.initializeTableData(this.corpusList);
        })
      );
  }

  getTableDataMetaDict(): any {
    return this.constantsService.SMART_TABLE_ARTICLE_HISTORY_TEMPLATE;
  }

  tableClickHandler($event: Event) {
    $event.stopPropagation();
    const {index, action, corpus_id} = this.getClickedActionDetails($event.target as HTMLElement);
    if (!index || !action || !corpus_id) {
      return;
    }

    // alert(`index is ${index}, action is ${action}, corpus_id is ${corpus_id}`);
    if (action === 'makelive') {

    // //alert(`index is ${index}, action is ${action}, corpus_id is ${corpus_id}`);

      this.makeCorpusLive(corpus_id);
    }
    if (action === 'edit') {
      this.editCorpus(corpus_id);
    }
    if (action === 'preview') {
      this.previewCorpus(corpus_id);
    }
    if (action === 'download') {
      this.downloadCorpus(corpus_id);
    }
  }

  getClickedActionDetails(htmlEl: HTMLElement) {
    const dataCy = htmlEl.getAttribute('data-cy');
    if (!dataCy || !dataCy.includes('dropdown')) {
      return {
        index: null,
        action: null,
      };
    }
    const dataCySplit = dataCy.split('_');
    return {
      corpus_id: parseInt(dataCySplit['3'], 10),
      index: dataCySplit['2'],
      action: dataCySplit['1']
    };
  }

  makeCorpusLive(corpus_id: number) {
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
    const body = {
      'corpus_id': corpus_id
    };
    let url;
    if (this.bot.bot_type === EBotType.faqbot){
      url = this.constantsService.makeCorpusLiveUrl();
    }
    if (this.bot.bot_type === EBotType.mlbot){
      url = this.constantsService.makeMLCorpusLiveUrl();
    }

    this.serverService.makePostReq<any>({headerData, body, url})
      .subscribe(val => {
        this.utilityService.showSuccessToaster(val.message);
        this.getAllCorpus$()
          .subscribe();
      });
  }

  editCorpus(corpus_id: number) {
    this.utilityService.openDialog({
      dialogRefWrapper: this.dialogRefWrapper,
      classStr: 'primary-modal-header-border',
      data: {
        actionButtonText: 'Continue',
        message: 'All your untrained changes will be lost and this knowledge base will be the new draft for editing. Do you wish to continue?',
        title: `Edit knowledge base`,
        isActionButtonDanger: false,
        inputDescription: null,
        closeButtonText: 'Cancel'
      },
      dialog: this.matDialog,
      component: ModalConfirmComponent
    }).then((data) => {

      if (data) {
        //

        const headerData: IHeaderData = {
          'bot-access-token': ServerService.getBotTokenById(this.bot.id)
        };
        const body = {
          'parent_corpus': corpus_id
        };
        let url;
        if (this.bot.bot_type === EBotType.faqbot){
          url = this.constantsService.putCorpus();
        }
        if (this.bot.bot_type === EBotType.mlbot){
          url = this.constantsService.putMlCorpus();
        }
        this.serverService.makePostReq({url, body, headerData})
          .subscribe((val) => {
            if (this.bot.bot_type === EBotType.faqbot){
              this.utilityService.showSuccessToaster('Knowledge base can be edited now');
              this.router.navigate(['.'], {
                queryParams: {build: 'articles', isArticle: null, section_id: null},
                relativeTo: this.activatedRoute,
                queryParamsHandling: 'merge'
              });
            }
            if (this.bot.bot_type === EBotType.mlbot){
              this.utilityService.showSuccessToaster('Machine learning model can be edited now');
              this.router.navigate(['.'], {
                queryParams: {build: 'ml_model'},
                relativeTo: this.activatedRoute,
                queryParamsHandling: 'merge'
              });
            }

          });
      }
    });
  }

  previewCorpus(corpus_id: number) {
    const corpus = this.corpusList.find(corpus_item => corpus_id === corpus_item.id);
    const {model_version_id, model_id} = corpus;
    this.previewBot({model_version_id, model_id});
  }

  // todo: code repetition : sandeep
  previewBot(corpusDetails: any) {
    // this.router.navigate(['', {outlets: {preview: 'preview'}}]);
    this.store.dispatch([
      new SetCurrentBotDetailsAndResetChatStateIfBotMismatch({
        bot: {...this.bot, ...corpusDetails}
      }),
      new ToggleChatWindow({open: true}),
      new ChangeFrameAction({frameEnabled: EChatFrame.CHAT_BOX})
    ]);



    /*TODO: integrate this with store*/
    EventService.startANewChat({
      bot: {...this.bot, ...corpusDetails}, consumerDetails: {uid: this.utilityService.createRandomUid()},
    });
  }

  downloadCorpus(corpus_id: number) {
    const toDownlodeSection = this.corpusList.find((corpus) => {
      return corpus.id === corpus_id;
    }).sections;

    const toDownlodeCategoryMapping = this.corpusList.find((corpus) => {
      return corpus.id === corpus_id;
    }).category_mapping;

    const csvFormat = toDownlodeSection.map(element => {
      return {
        'Category': this.categoryIdToNamePipe.transform(element.category_id, toDownlodeCategoryMapping),
        'First questions': element.questions[0].replace(',', ' '),
        'Answer': element.answers[0].text ? element.answers[0].text[0].replace(',', ' ') : '',
        'Variants': element.questions.toString(),
      };
    });
    // console.log(csvFormat);
    this.utilityService.downloadArrayAsCSV(csvFormat, {}, `Corpus_id_${corpus_id}.csv`,false);

  }

  goToPage(val) {
    this.currentPage = val.page;
    this.getAllCorpus$()
      .subscribe();
  }

}
