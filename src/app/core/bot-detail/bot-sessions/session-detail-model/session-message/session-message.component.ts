import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ISessionItem, ISessionMessageItem} from '../../../../../../interfaces/sessions';
import {ITxnSessionMessagesItem} from '../../../../../serialize-session-message.pipe';
import {UtilityService} from '../../../../../utility.service';
import {LoggingService} from '../../../../../logging.service';
import {EChatFeedback} from '../../../../../chat/chat-wrapper.component';
import { IBot } from 'src/app/core/interfaces/IBot';
import {ConstantsService} from "../../../../../constants.service";
import {ServerService} from "../../../../../server.service";

@Component({
  selector: 'app-session-message',
  templateUrl: './session-message.component.html',
  styleUrls: ['./session-message.component.scss']
})
export class SessionMessageComponent implements OnInit {

  // @Input() sessionMessageData: ISessionMessageItem;
   _txnConversationItems: ITxnSessionMessagesItem;
  myEChatFeedback = EChatFeedback;
  @Input()  set txnConversationItems (txnConversationItemsValue: ITxnSessionMessagesItem) {

    this._txnConversationItems = txnConversationItemsValue;
  }
  @Input() bot:IBot;
  @Output() messageClickedEvent$: EventEmitter<string> = new EventEmitter();
  myArray = Array;
  sessionMessageItems: ISessionMessageItem[];
  txnId: string;
  myObject = Object;
  txnId_highlighting: string;
  hasError:boolean = false;
  hasAgentHandover:boolean=false;
  inCuration:boolean=false;
  bot_message_id:number;
  constructor(
    public utilityService: UtilityService,
    public constantsService: ConstantsService,
    public serverService: ServerService
    ) { }

  copyMessageClicked(dataValue){
    this.utilityService.copyToClipboard(dataValue);
  }
  ngOnInit() {

    this.sessionMessageItems = this._txnConversationItems.convoList;
    LoggingService.log(this.sessionMessageItems);

    this.txnId = this._txnConversationItems.transaction_id;
    this.txnId_highlighting = this._txnConversationItems.transaction_id_highlighting || this.txnId;
    this.sessionMessageItems.forEach(sessionMessage => {
      if(sessionMessage.user_type == 'human'){
        debugger;
        this.hasError = this.hasError || sessionMessage.error;
        this.bot_message_id = sessionMessage.id;
      }
      if(sessionMessage.user_type == 'bot'){
        this.hasAgentHandover = this.hasAgentHandover || sessionMessage.message_store.sendtoagent;
        this.inCuration = this.inCuration || (!!sessionMessage.curation_state);
        this.bot_message_id = sessionMessage.id;
      }
    });
    // this.sessionMessageData.user_type;
  }
  addMessageToCuration(){
    const headerData = {
      'bot-access-token': this.bot.bot_access_token
    };
    let body = {
      'bot_message_id': this.bot_message_id
    }
    let url = this.constantsService.addMessageToCurationFromSession()
    this.serverService.makePostReq<any>({ headerData, body, url })
      .subscribe(val => {
        this.utilityService.showSuccessToaster("Flagged for curation");
        this.inCuration = true;
      });
  }
  
}
