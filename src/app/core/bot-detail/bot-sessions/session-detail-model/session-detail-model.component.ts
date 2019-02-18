import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ISessionMessageItem, ISessionMessage, ISessionItem} from '../../../../../interfaces/sessions';
import {ConstantsService} from '../../../../constants.service';
import {ServerService} from '../../../../server.service';
import {IBot} from '../../../interfaces/IBot';
import {Observable} from 'rxjs';

import {element} from 'protractor';
import {UtilityService} from '../../../../utility.service';
import { ViewBotStateModel } from '../../../view-bots/ngxs/view-bot.state';
import { Select } from '@ngxs/store';
import { IHeaderData } from '../../../../../interfaces/header-data';
import { IMessageData } from '../../../../../interfaces/chat-session-state';
import {LoggingService} from '../../../../logging.service';

@Component({
  selector: 'app-session-detail-model',
  templateUrl: './session-detail-model.component.html',
  styleUrls: ['./session-detail-model.component.scss']
})
export class SessionDetailModelComponent implements OnInit {

  @Input() set session(_session) {

    this._session = _session;
    if (_session && _session.id) {
      setTimeout(() => {
          this.loadSessionMessagesById(_session.id);
        }
      );
    }
  }

  _session: ISessionItem;
  searchEnterPressedCount = 0;
  @Input() bot: IBot;
  @Input() finalDfState: any;
  @Input() sessionDataStore: any;
  @Output() selectNextRow = new EventEmitter();
  @Output() selectPrevRow = new EventEmitter();
  @Output() closeModel$ = new EventEmitter();
  @Input() showPrevButton = false;
  @Input() pageNumberOfCurrentRowSelected: number;
  @Input() indexOfCurrentRowSelected: number;
  @Select() botlist$: Observable<ViewBotStateModel>;
  allBotList: IBot[];
  sessionMessageData$: Observable<ISessionMessage>;
  @Output() refreshSession$ = new EventEmitter();
  sessionMessageData: ISessionMessageItem[];
  sessionMessageDataCopy: ISessionMessageItem[];
  transactionIdSelectedInModel: string;
  messageSearchKeyword = '';
  activeTab = 'manager_bot';  // = 'manager_bot' | 'active_bot'|'final_df'|'datastore';
  codeText;
  totalMessagesCount: number;
  url: string;
  managerPanelData: {
    'generatedDf': {},
    'generatedMsg': Array<any>, /*bot message*/
    'message': { 'text': string }[], /*user message*/
    'messageStore': {}
  };
  activeBotPanelData;
  // finalDFPanelData;
  // dataStorePanelData;

  constructor(
    private constantsService: ConstantsService,
    private utilityService: UtilityService,
    private serverService: ServerService
  ) {
  }


  ngOnInit() {
    this.botlist$.subscribe((value) => {
      this.allBotList = value.allBotList;
    });
    // this.loadSessionMessagesById(this._session.id);
  }

  showSpinIcon = false;

  updateModal(id){
    this.loadSessionMessagesById(id);
    this.refreshSession$.emit(id);
  }
  loadSessionMessagesById(id) {
    this.showSpinIcon = true;
    this.url = this.constantsService.getSessionsMessageUrl(id);
    this.sessionMessageData$ = this.serverService.makeGetReq<ISessionMessage>({
      url: this.url,
      headerData: {'bot-access-token': this.bot.bot_access_token}
    });
    this.sessionMessageData$.subscribe((value) => {

      if (!value) { return; }
      this.totalMessagesCount = value.meta.total_count;
      this.sessionMessageData = value.objects;
      /*==========here for NLP==============*/
      this.sessionMessageDataCopy = [...this.sessionMessageData];
      this.showSpinIcon = false;
    });

    this.tabClicked(this.activeTab);
  }

  nlp:object = {};
  transactionIdChangedInModel(txnId) {


    this.transactionIdSelectedInModel = txnId;
    /*This data will show under Manager Bot*/
    const messageDataForGiveTxnId = this.sessionMessageData.find((message) => {
      return message.transaction_id === txnId;
    });
    const botMessageDataForGiveTxnId = this.sessionMessageData.find((message) => {
      return (message.transaction_id === txnId && message.user_type === 'bot' ) ;
    });
    // this.sessionMessageDataCopy = [...this.sessionMessageData];
    this.sessionMessageDataCopy = this.sessionMessageData;
    this.managerPanelData = {
      'generatedDf': messageDataForGiveTxnId.generated_df,
      'generatedMsg': messageDataForGiveTxnId.generated_msg, /*bot message*/
      'message': messageDataForGiveTxnId.message, /*user message*/
      'messageStore': botMessageDataForGiveTxnId.message_store
    };
    const activeBotId = botMessageDataForGiveTxnId.message_store.activeBotId;
    const activeBotRoomId = botMessageDataForGiveTxnId.message_store.activeBotRoomId;
    this.activeBotPanelData = botMessageDataForGiveTxnId.message_store;
    let humanMessageDataForGiveTxnId = this.sessionMessageData.find((message) => {
      return (message.transaction_id === txnId && message.user_type === "human" ) ;
    });
    this.nlp = humanMessageDataForGiveTxnId.nlp;
    this.tabClicked(this.activeTab);
    if (activeBotId) {
      const activeBotAccessTokenId = this.allBotList.find(bot => bot.id === activeBotId).bot_access_token;
      const headerData: IHeaderData = {
        'bot-access-token': activeBotAccessTokenId
      };
      const surl = this.constantsService.getSessionsByIdUrl(activeBotRoomId);
      this.serverService.makeGetReq({url : surl, headerData})
      .subscribe((newSession: ISessionItem) => {
        const murl = this.constantsService.getSessionsMessageUrl(newSession.id);
        this.serverService.makeGetReq({url : surl, headerData})
        .subscribe((value: ISessionMessage) => {
          const activeBotMessage = value.objects.find(message => message.transaction_id === this.transactionIdSelectedInModel);
          this.activeBotPanelData = {
            'generatedDf': activeBotMessage.generated_df,
            'generatedMsg': activeBotMessage.generated_msg, /*bot message*/
            'message': activeBotMessage.message,
          };
        });
      });
    }
    // this.tabClicked(this.activeTab);

  }

  tabClicked(active: string) {
    this.activeTab = active;
    switch (active) {
      case 'manager_bot': {
        this.codeText = this.managerPanelData;
        break;
      }
      case 'active_bot': {
        this.codeText = this.activeBotPanelData;
        break;
      }
      case 'final_df': {
        this.codeText = this.finalDfState;
        break;
      }
      case 'datastore': {
        this.codeText = this.sessionDataStore;
        break;
      }
      case 'nlp': {
        this.codeText = this.nlp;
        break;
      }
    }
  }

  selectNextPreviousRow() {

  }

  scroll(txnId): boolean {
    const ele = document.getElementsByClassName(txnId)[0];
    LoggingService.log(ele);
    if (!ele && this.searchEnterPressedCount > 0) {
      this.utilityService.showSuccessToaster('Reached end of list');
    }
    if (ele) {
        ele.scrollIntoView();
      return true;
    }
    return false;
  }

  goToNextSearchResult(messageSearchKeyword) {


    if (this.searchEnterPressedCount !== 0) {
      ++this.searchEnterPressedCount;
    }
    if (this.searchEnterPressedCount < 0) { this.searchEnterPressedCount = 0; }
    const elementDataToScroll = this.findElementDataBySearchKeyWord(messageSearchKeyword, this.searchEnterPressedCount);
    if (!elementDataToScroll) {
      --this.searchEnterPressedCount;
      return;
    }
    const txnId = elementDataToScroll.transaction_id;
    if (elementDataToScroll) {
      const didScrollOccur = this.scroll(txnId);
      if (!didScrollOccur) { --this.searchEnterPressedCount; }
      this.transactionIdChangedInModel(txnId);
    }
    if (this.searchEnterPressedCount === 0) {
      ++this.searchEnterPressedCount;
    }
  }

  goToPreviousSearchResult(messageSearchKeyword) {

    --this.searchEnterPressedCount;
    const elementDataToScroll = this.findElementDataBySearchKeyWord(messageSearchKeyword, this.searchEnterPressedCount);
    if (!elementDataToScroll) {
      --this.searchEnterPressedCount;
      return;
    }
    if (this.searchEnterPressedCount < 0) { this.searchEnterPressedCount = 0; }
    if (elementDataToScroll) {
      const didScrollOccur = this.scroll(elementDataToScroll.transaction_id);
      this.transactionIdChangedInModel(elementDataToScroll.transaction_id);
    }
  }

  scrollToFirstKeywordMatch(messageSearchKeyword) {

    this.searchEnterPressedCount = 0;
    this.messageSearchKeyword = messageSearchKeyword = messageSearchKeyword.trim();
    if (messageSearchKeyword === '') { return; }
    this.sessionMessageDataCopy = [...this.sessionMessageData];
    /*find transaction id of first matched text*/
    const elementDataToScroll = this.findElementDataBySearchKeyWord(messageSearchKeyword, 0);
    setTimeout(()=>{
      let didScrollOccur = elementDataToScroll && this.scroll(elementDataToScroll.transaction_id);
      if(didScrollOccur){
        this.transactionIdChangedInModel(elementDataToScroll.transaction_id);
        this.searchEnterPressedCount++;
      }
    },0);
  }


  findElementDataBySearchKeyWord(messageSearchKeyword, index) {

    const elementsDataToScroll = this.sessionMessageData.filter((objItem: ISessionMessageItem) => {
      /*find if messageSearchKeyword exists in message or message[0].text as substring */
      LoggingService.log(this.messageSearchKeyword);
      let isMatch;
      try {
        /*searching for txn id match*/
        isMatch = objItem.transaction_id.toUpperCase().includes(messageSearchKeyword.toUpperCase());
        if (isMatch) { return isMatch; }
      } catch (e) {}

      if(objItem.user_type==='human'){
        try {
          /*searching for human message match*/
          isMatch = objItem.message.toUpperCase().includes(messageSearchKeyword.toUpperCase());
          if (isMatch) { return isMatch; }
        } catch (e) {}
      }else {
        try {
          /*searching for bot messages match*/
          for (const msg of objItem.message) {
            isMatch = msg.text.toUpperCase().includes(messageSearchKeyword.toUpperCase());
            if (isMatch) { return isMatch; }
          }
        } catch (e) {}

        try {
          /*searching for bot generated_msg match*/
          for (const msg of objItem.generated_msg) {
            isMatch = msg.text.toUpperCase().includes(messageSearchKeyword.toUpperCase());
            if (isMatch) { return isMatch; }
          }
        } catch (e) {}
      }


    });
    return elementsDataToScroll[index];
  }

  scrollDown = true;
  scrollMessageList(){
    let transactionsCount: number;
    transactionsCount = this.scrollDown ? this.sessionMessageDataCopy.length - 1 : 0;
    let lastTransactionId = this.sessionMessageDataCopy[transactionsCount].transaction_id;
    let lastElement = document.getElementsByClassName(lastTransactionId);
    this.scroll(lastTransactionId)
    this.scrollDown = !this.scrollDown;
  }

}

