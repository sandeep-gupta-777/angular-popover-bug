import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ISessionMessageItem, ISessionMessage, ISessionItem} from '../../../../../interfaces/sessions';
import {ConstantsService} from '../../../../constants.service';
import {ServerService} from '../../../../server.service';
import {IBot} from '../../../interfaces/IBot';
import {Observable} from 'rxjs';

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
    ;

  };

  _session: ISessionItem;

  @Input() bot: IBot;
  @Input() finalDfState: {};
  @Input() sessionDataStore: {};
  @Output() selectNextRow = new EventEmitter();
  @Output() selectPrevRow = new EventEmitter();
  @Input() showPrevButton:boolean =false;
  @Input() pageNumberOfCurrentRowSelected:number;
  @Input() indexOfCurrentRowSelected:number;
  sessionMessageData$: Observable<ISessionMessage>;
  sessionMessageData: ISessionMessageItem[];
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
    });
    this.tabClicked(this.activeTab);
  }

  /*todo: shitty name, change it*/
  changeTransactionId(txnId) {
    /*This data will show under Manager Bot*/
    let messageDataForGiveTxnId = this.sessionMessageData.find((message) => {
      return message.transaction_id === txnId;
    });
    this.managerPanelData = {
      'generatedDf': messageDataForGiveTxnId.generated_df,
      'generatedMsg': messageDataForGiveTxnId.generated_msg, /*bot message*/
      'message': messageDataForGiveTxnId.message, /*user message*/
    };
    this.activeBotPanelData = messageDataForGiveTxnId.message_store;
    // this.dataStorePanelData = this.sessionData.dataStore;
    // this.finalDFPanelData = this.sessionData.dfState;
    this.tabClicked(this.activeTab);

  }

  tabClicked(active: string) {
    // debugger;
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

}
