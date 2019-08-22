import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ISessionItem, ISessionMessage, ISessionMessageItem} from '../../../../../interfaces/sessions';
import {ConstantsService} from '../../../../constants.service';
import {ServerService} from '../../../../server.service';
import {IBot} from '../../../interfaces/IBot';
import {Observable} from 'rxjs';
import {UtilityService} from '../../../../utility.service';
import {ViewBotStateModel} from '../../../view-bots/ngxs/view-bot.state';
import {Select} from '@ngxs/store';
import {IHeaderData} from '../../../../../interfaces/header-data';
import {LoggingService} from '../../../../logging.service';

@Component({
  selector: 'app-session-detail-model',
  templateUrl: './session-detail-model.component.html',
  styleUrls: ['./session-detail-model.component.scss']
})
export class SessionDetailModelComponent implements OnInit {
  scrollDown = true;
  @Input() set session(_session) {

    this._session = _session;
    if (_session && _session.id) {
      setTimeout(() => {
          this.loadSessionMessagesById(_session.id);
        }
      );
    }
  }
  searchCache = {};
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
  nlp: object = {};

  sessionMessageData$: Observable<ISessionMessage>;
  @Output() refreshSession$ = new EventEmitter();
  sessionMessageData: ISessionMessageItem[];
  sessionMessageDataCopy: ISessionMessageItem[];
  transactionIdSelectedInModel: string;
  messageSearchKeyword = '';
  activeTab = 'manager_bot';  // = 'manager_bot' | 'active_bot'|'final_df'|'datastore';
  codeText;
  showSpinIcon = false;

  totalMessagesCount: number;
  url: string;
  messageTextSearchLength = 0;
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
    debugger;
    this.botlist$.subscribe((value) => {
      this.allBotList = value.allBotList;
    });
    // this.loadSessionMessagesById(this._session.roomId);
  }

  channelNameToImg(channel: string) {
    if(channel){
      const iconObj = this.constantsService.getIntegrationIconForChannelName(channel);
      return iconObj && iconObj.icon;
    }

  }

  updateModal(id) {
    this.loadSessionMessagesById(id);
    this.refreshSession$.emit(id);
  }

  loadSessionMessagesById(id) {
    this.showSpinIcon = true;
    this.url = this.constantsService.getSessionsMessageUrl(id);
    this.sessionMessageData$ = this.serverService.makeGetReq<ISessionMessage>({
      url: this.url,
      headerData: {'bot-access-token': ServerService.getBotTokenById(this.bot.id)}
    });
    this.sessionMessageData$.subscribe((value) => {

      if (!value) {
        return;
      }
      this.totalMessagesCount = value.meta.total_count;
      this.sessionMessageData = value.objects;
      /*==========here for NLP==============*/
      this.sessionMessageDataCopy = [...this.sessionMessageData];
      this.showSpinIcon = false;
    });

    this.tabClicked(this.activeTab);
  }

  transactionIdChangedInModel(txnId) {


    this.transactionIdSelectedInModel = txnId;
    /*This data will show under Manager Bot*/
    const messageDataForGiveTxnId = this.sessionMessageData.find((message) => {
      return message.transaction_id === txnId;
    });
    const botMessageDataForGiveTxnId = this.sessionMessageData.find((message) => {
      return (message.transaction_id === txnId && message.user_type === 'bot');
    });
    // this.sessionMessageDataCopy = [...this.sessionMessageData];
    this.sessionMessageDataCopy = this.sessionMessageData;
    this.managerPanelData = {
      'generatedDf': messageDataForGiveTxnId.generated_df,
      'generatedMsg': messageDataForGiveTxnId.generated_msg, /*bot message*/
      'message': messageDataForGiveTxnId.message, /*user message*/
      'messageStore': botMessageDataForGiveTxnId && botMessageDataForGiveTxnId.message_store
    };
    let activeBotId: any;
    let activeBotRoomId: any;
    if (botMessageDataForGiveTxnId) {
      activeBotId = botMessageDataForGiveTxnId.message_store.activeBotId;
      activeBotRoomId = botMessageDataForGiveTxnId.message_store.activeBotRoomId;
      this.activeBotPanelData = botMessageDataForGiveTxnId.message_store;
    }

    const humanMessageDataForGiveTxnId = this.sessionMessageData.find((message) => {
      return (message.transaction_id === txnId && message.user_type === 'human');
    });
    this.nlp = humanMessageDataForGiveTxnId && humanMessageDataForGiveTxnId.nlp;
    this.tabClicked(this.activeTab);
    if (activeBotId) {
      const activeBotAccessTokenId = this.allBotList.find(bot => bot.id === activeBotId).bot_access_token;
      const headerData: IHeaderData = {
        'bot-access-token': activeBotAccessTokenId
      };
      const surl = this.constantsService.getSessionsByIdUrl(activeBotRoomId);
      this.serverService.makeGetReq({url: surl, headerData})
        .subscribe((newSession: ISessionItem) => {
          this.serverService.makeGetReq({url: surl, headerData})
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


    // if (this.searchEnterPressedCount !== 0) {
    //   ++this.searchEnterPressedCount;
    // }
    if (this.searchEnterPressedCount < 0) {
      this.searchEnterPressedCount = 0;
    }
    const elementDataToScroll = this.findElementDataBySearchKeyWord(messageSearchKeyword, this.searchEnterPressedCount + 1);
    if (!elementDataToScroll) {
      return;
    } else {
      ++this.searchEnterPressedCount;
    }
    const txnId = elementDataToScroll.transaction_id;
    if (elementDataToScroll) {
      const didScrollOccur = this.scroll(txnId);
      if (!didScrollOccur) {
        --this.searchEnterPressedCount;
      }
      this.transactionIdChangedInModel(txnId);
    }
    // if (this.searchEnterPressedCount === 0) {
    //   ++this.searchEnterPressedCount;
    // }
  }

  goToPreviousSearchResult(messageSearchKeyword) {

    const elementDataToScroll = this.findElementDataBySearchKeyWord(messageSearchKeyword, this.searchEnterPressedCount - 1);
    if (!elementDataToScroll) {
      return;
    } else {
      --this.searchEnterPressedCount;
    }
    if (this.searchEnterPressedCount < 0) {
      this.searchEnterPressedCount = 0;
    }
    if (elementDataToScroll) {
      this.transactionIdChangedInModel(elementDataToScroll.transaction_id);
    }
  }

  async scrollToFirstKeywordMatch(messageSearchKeyword) {

    await new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 500);
    });

    this.searchEnterPressedCount = -1;
    this.messageSearchKeyword = messageSearchKeyword = messageSearchKeyword.trim();
    if (messageSearchKeyword === '') {
      return;
    }
    this.sessionMessageDataCopy = [...this.sessionMessageData];
    /*find transaction roomId of first matched text*/
    const elementDataToScroll = this.findElementDataBySearchKeyWord(messageSearchKeyword, 0);
    // setTimeout(()=>{
    const didScrollOccur = elementDataToScroll && this.scroll(elementDataToScroll.transaction_id);
    if (didScrollOccur) {
      this.transactionIdChangedInModel(elementDataToScroll.transaction_id);
      ++this.searchEnterPressedCount;
      console.log(`messageSearchKeyword: ${messageSearchKeyword}, searchEnterPressedCount ${this.searchEnterPressedCount} `);
    }
    // },0);
  }


  findElementDataBySearchKeyWord(messageSearchKeyword, index) {
    if (Array.isArray(this.searchCache[messageSearchKeyword])) {
      return this.searchCache[messageSearchKeyword][index];
    }

    const elementsDataToScroll = this.sessionMessageData.filter((objItem: ISessionMessageItem) => {
      /*find if messageSearchKeyword exists in message or message[0].text as substring */
      LoggingService.log(this.messageSearchKeyword);
      let isMatch;
      try {
        /*searching for txn roomId match*/
        isMatch = objItem.transaction_id.toUpperCase().includes(messageSearchKeyword.toUpperCase());
        if (isMatch) {
          return isMatch;
        }
      } catch (e) {
      }

      if (objItem.user_type === 'human') {
        try {
          /*searching for human message match*/
          isMatch = objItem.message.toUpperCase().includes(messageSearchKeyword.toUpperCase());
          if (isMatch) {
            return isMatch;
          }
        } catch (e) {
        }
      } else {
        try {
          /*searching for bot messages match*/
          for (const msg of objItem.message) {
            isMatch = msg.text.toUpperCase().includes(messageSearchKeyword.toUpperCase());
            if (isMatch) {
              return isMatch;
            }
          }
        } catch (e) {
        }


        try {
          /*searching for bot generated_msg match*/
          for (const msg of objItem.generated_msg) {
            isMatch = msg.text.toUpperCase().includes(messageSearchKeyword.toUpperCase());
            if (isMatch) {
              return isMatch;
            }
          }
        } catch (e) {
        }

        try {
          if (objItem.message && objItem.message[0] && objItem.message[0].quick_reply) {
            /*looking into the media items*/
            const media: any[] = objItem.message[0].quick_reply.quick_replies;
            const isMatch_temp: boolean = media.find((el: { title: string }) => {
              if (el.title) {
                const target = el.title;
                return !!this.utilityService.doesStringIncludesSubstring(target, messageSearchKeyword);
                // if(isMatch){
                //   return isMatch;
                // }
              }
            });
            if (isMatch_temp) {
              return isMatch_temp;
            }

            try {
              const target = objItem.message[0].quick_reply.text;
              const isMatch_temp1 = this.utilityService.doesStringIncludesSubstring(target, messageSearchKeyword);
              if (isMatch_temp1) {
                return isMatch_temp1;
              }
            } catch (e) {
            }
          }
        } catch (e) {
        }

        try {
          if (objItem.message && Array.isArray(objItem.message[1] && objItem.message[1].media)) {
            /*looking into the media items*/
            const media: any[] = objItem.message[1].media;

            const isMatch_temp = media.find((el: { buttons: { title: string }[], title: string }) => {
              let found = false;
              if (el.title) {
                const target = el.title;
                found = !!this.utilityService.doesStringIncludesSubstring(target, messageSearchKeyword);

              }

              if (el.buttons[0].title) {
                const target = el.buttons[0].title;
                found = found || !!this.utilityService.doesStringIncludesSubstring(target, messageSearchKeyword);

              }
              return found;
            });
            if (isMatch_temp) {
              return isMatch_temp;
            }
          }
        } catch (e) {
        }

      }


    });
    this.messageTextSearchLength = elementsDataToScroll.length;
    this.searchCache[messageSearchKeyword] = elementsDataToScroll;
    return elementsDataToScroll[index];
  }


  scrollMessageList() {
    let transactionsCount: number;
    transactionsCount = this.scrollDown ? this.sessionMessageDataCopy.length - 1 : 0;
    const lastTransactionId = this.sessionMessageDataCopy[transactionsCount].transaction_id;
    this.scroll(lastTransactionId);
    this.scrollDown = !this.scrollDown;
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

}

