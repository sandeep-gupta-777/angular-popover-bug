import {Component, Input, OnInit} from '@angular/core';
import {ISessionMessageItem} from '../../../../../interfaces/sessions';

@Component({
  selector: 'app-session-detail-model',
  templateUrl: './session-detail-model.component.html',
  styleUrls: ['./session-detail-model.component.scss']
})
export class SessionDetailModelComponent implements OnInit {

  @Input() sessionData: ISessionMessageItem[];
  activeTab: string = 'manager_bot';  // = 'manager_bot' | 'active_bot'|'final_df'|'datastore';
  codeText;
  managerPanelData: {
    'generatedDf': {},
    'generatedMsg': { 'text': string }[], /*bot message*/
    'message': string, /*user message*/

  };
  activeBotPanelData;
  finalDFPanelData;
  dataStorePanelData;

  constructor() {
  }

  ngOnInit() {
    this.tabClicked(this.activeTab);
  }

  /*todo: shitty name, change it*/
  changeTransactionId(txnId) {
    /*This data will show under Manager Bot*/
    let messageDataForGiveTxnId = this.sessionData.find((message) => {
      return message.transaction_id === txnId;
    });
    // this.managerPanelData = {
    //   // 'generatedDf': messageDataForGiveTxnId.generatedDf,
    //   // 'generatedMsg': messageDataForGiveTxnId.generatedMsg, /*bot message*/
    //   'message': messageDataForGiveTxnId.message, /*user message*/
    // };
    // this.activeBotPanelData = messageDataForGiveTxnId.messageStore;
    // this.dataStorePanelData = this.sessionData.dataStore;
    // this.finalDFPanelData = this.sessionData.dfState;
    this.tabClicked(this.activeTab)

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
        this.codeText = this.finalDFPanelData;
        break;
      }
      case 'datastore': {
        this.codeText = this.dataStorePanelData;
        break;
      }
    }
  }

}
