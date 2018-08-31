import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ISessionMessageItem, ISessionMessage, ISessionItem} from '../../../../../interfaces/sessions';
import {ConstantsService} from '../../../../constants.service';
import {ServerService} from '../../../../server.service';
import {IBot} from '../../../interfaces/IBot';
import {Observable} from 'rxjs';
import {st} from '@angular/core/src/render3';
import {element} from 'protractor';
import {UtilityService} from '../../../../utility.service';

@Component({
  selector: 'app-session-detail-model',
  templateUrl: './session-detail-model.component.html',
  styleUrls: ['./session-detail-model.component.scss']
})
export class SessionDetailModelComponent implements OnInit {

  @Input() set session(_session) {
    this._session = _session;
    if (_session && _session.id)
      setTimeout(() => {
          this.loadSessionById(_session.id);
        }
      );
  };

  _session: ISessionItem;
  searchEnterPressedCount = 0;
  @Input() bot: IBot;
  @Input() finalDfState: {};
  @Input() sessionDataStore: {};
  @Output() selectNextRow = new EventEmitter();
  @Output() selectPrevRow = new EventEmitter();
  @Input() showPrevButton: boolean = false;
  @Input() pageNumberOfCurrentRowSelected: number;
  @Input() indexOfCurrentRowSelected: number;
  sessionMessageData$: Observable<ISessionMessage>;
  sessionMessageData: ISessionMessageItem[];
  sessionMessageDataCopy: ISessionMessageItem[];
  transactionIdSelectedInModel:string;
  messageSearchKeyword: string = '';
  activeTab: string = 'manager_bot';  // = 'manager_bot' | 'active_bot'|'final_df'|'datastore';
  codeText;
  totalMessagesCount: number;
  url: string;
  managerPanelData: {
    'generatedDf': {},
    'generatedMsg': Array<any>, /*bot message*/
    'message': { 'text': string }[], /*user message*/

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

    // this.loadSessionById(this._session.id);
  }

  loadSessionById(id) {
    this.url = this.constantsService.getSessionsMessageUrl(id);
    this.sessionMessageData$ = this.serverService.makeGetReq<ISessionMessage>({
      url: this.url,
      headerData: {'bot-access-token': this.bot.bot_access_token}
    });
    this.sessionMessageData$.subscribe((value) => {
      if (!value) return;
      this.totalMessagesCount = value.meta.total_count;
      this.sessionMessageData = value.objects;
      this.sessionMessageDataCopy = [...this.sessionMessageData];
    });
    this.tabClicked(this.activeTab);
  }


  transactionIdChangedInModel(txnId) {
    this.transactionIdSelectedInModel = txnId;
    /*This data will show under Manager Bot*/
    let messageDataForGiveTxnId = this.sessionMessageData.find((message) => {
      return message.transaction_id === txnId;
    });
    this.sessionMessageDataCopy = [...this.sessionMessageData];
    this.managerPanelData = {
      'generatedDf': messageDataForGiveTxnId.generated_df,
      'generatedMsg': messageDataForGiveTxnId.generated_msg, /*bot message*/
      'message': messageDataForGiveTxnId.message, /*user message*/
    };
    this.activeBotPanelData = messageDataForGiveTxnId.message_store;
    this.tabClicked(this.activeTab);

  }

  tabClicked(active: string) {
    // ;
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
    }
  }

  selectNextPreviousRow() {

  }

  scroll(txnId):boolean {
    let ele = document.getElementsByClassName(txnId)[0];
    console.log(ele);
    if(!ele && this.searchEnterPressedCount>0){
      this.utilityService.showSuccessToaster("Reached end of list");
    }
    if(ele){
      ele.scrollIntoView();
      return true
    }
    return false;
  }

  goToNextSearchResult(messageSearchKeyword){
    ++this.searchEnterPressedCount;
    if(this.searchEnterPressedCount<0) this.searchEnterPressedCount=0;
    let elementDataToScroll = this.findElementDataBySearchKeyWord(messageSearchKeyword, this.searchEnterPressedCount);
    if(!elementDataToScroll) {
      --this.searchEnterPressedCount;
      return;
    }
    let txnId = elementDataToScroll.transaction_id;
    if(elementDataToScroll ){
      let didScrollOccur = this.scroll(txnId);
      if(!didScrollOccur)--this.searchEnterPressedCount;
      this.transactionIdChangedInModel(txnId);
    }
  }

  goToPreviousSearchResult(messageSearchKeyword){
    debugger;
    --this.searchEnterPressedCount;
    let elementDataToScroll = this.findElementDataBySearchKeyWord(messageSearchKeyword, this.searchEnterPressedCount);
    if(!elementDataToScroll) {
      --this.searchEnterPressedCount;
      return;
    }
    if(this.searchEnterPressedCount<0) this.searchEnterPressedCount=0;
    if(elementDataToScroll ){
      let didScrollOccur = this.scroll(elementDataToScroll.transaction_id);
      this.transactionIdChangedInModel(elementDataToScroll.transaction_id);
    }
  }

  performSearch(messageSearchKeyword) {
    this.searchEnterPressedCount = 0;
    this.messageSearchKeyword = messageSearchKeyword = messageSearchKeyword.trim();
    if (messageSearchKeyword === '') return;
    this.sessionMessageDataCopy = [...this.sessionMessageData];
    /*find transaction id of first matched text*/
    let elementDataToScroll = this.findElementDataBySearchKeyWord(messageSearchKeyword, 0);
    elementDataToScroll && this.scroll(elementDataToScroll.transaction_id);
  }

  findElementDataBySearchKeyWord(messageSearchKeyword, index){
    let elementsDataToScroll = this.sessionMessageData.filter((objItem: ISessionMessageItem) => {
      /*find if messageSearchKeyword exists in message or message[0].text as substring */
      return objItem.message
        && objItem.message.includes(messageSearchKeyword)
        || objItem.message
        && objItem.message[0].text
        && objItem.message[0].text.includes(messageSearchKeyword);
    });
    return elementsDataToScroll[index]
  }

}
