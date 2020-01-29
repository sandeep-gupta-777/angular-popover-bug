import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ISessionMessageItem} from '../../../../../../interfaces/sessions';
import {ITxnSessionMessagesItem} from '../../../../../serialize-session-message.pipe';
import {EBotType, UtilityService} from '../../../../../utility.service';
import {LoggingService} from '../../../../../logging.service';
import {EChatFeedback} from '../../../../../chat/chat-wrapper.component';
import {IBot} from 'src/app/core/interfaces/IBot';
import {ConstantsService} from '../../../../../constants.service';
import {ServerService} from '../../../../../server.service';

@Component({
  selector: 'app-session-message',
  templateUrl: './session-message.component.html',
  styleUrls: ['./session-message.component.scss']
})
export class SessionMessageComponent implements OnInit {

  // @Input() sessionMessageData: ISessionMessageItem;
  _txnConversationItems: ITxnSessionMessagesItem;
  myEChatFeedback = EChatFeedback;

  @Input() set txnConversationItems(txnConversationItemsValue: ITxnSessionMessagesItem) {
    this._txnConversationItems = txnConversationItemsValue;
    this.sessionMessageItems = this._txnConversationItems.convoList;
    this.sessionMessageItems.forEach(sessionMessage => {
      if (sessionMessage.user_type === 'human') {
        this.hasError = this.hasError || sessionMessage.error;
        this.bot_message_id = sessionMessage.id;
      }
      if (sessionMessage.user_type === 'bot') {
        this.hasAgentHandover = this.hasAgentHandover || sessionMessage.message_store.sendtoagent;
        this.inCuration = this.inCuration || (!!sessionMessage.curation_state);
        this.bot_message_id = sessionMessage.id;
        this.isFirstMessage = this.getSectionId(sessionMessage) === 'botFirstMessage';
      }
    });
  }

  @Input() bot: IBot;
  @Output() messageClickedEvent$: EventEmitter<string> = new EventEmitter();
  myArray = Array;
  sessionMessageItems: ISessionMessageItem[];
  txnId: string;
  myObject = Object;
  txnId_highlighting: string;
  hasError = false;
  hasAgentHandover = false;
  inCuration = false;
  bot_message_id: number;
  isFirstMessage = false;
  myEBotType = EBotType;
  constructor(
    public utilityService: UtilityService,
    public constantsService: ConstantsService,
    public serverService: ServerService
  ) {
  }

  copyMessageClicked(dataValue) {
    this.utilityService.copyToClipboard(dataValue);
  }

  ngOnInit() {

    this.sessionMessageItems = this._txnConversationItems.convoList;
    LoggingService.log(this.sessionMessageItems);
    //
    this.txnId = this._txnConversationItems.transaction_id;
    this.txnId_highlighting = this._txnConversationItems.transaction_id_highlighting || this.txnId;
    // this.sessionMessageItems.forEach(sessionMessage => {
    //   if (sessionMessage.user_type === 'human') {
    //     this.hasError = this.hasError || sessionMessage.error;
    //     this.bot_message_id = sessionMessage.id;
    //   }
    //   if (sessionMessage.user_type === 'bot') {
    //     this.hasAgentHandover = this.hasAgentHandover || sessionMessage.message_store.sendtoagent;
    //     this.inCuration = this.inCuration || (!!sessionMessage.curation_state);
    //     this.bot_message_id = sessionMessage.id;
    //     this.isFirstMessage = this.getSectionId(sessionMessage) === 'first_message';
    //   }
    // });
    // this.sessionMessageData.user_type;
  }

  getSectionId(sessionMessage) {
    return sessionMessage &&
      sessionMessage.message_store &&
      sessionMessage.message_store.templateKey;
  }

  addMessageToCuration(event) {
    const headerData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot)
    };
    const body = {
      'bot_message_id': this.bot_message_id
    };
    let url;
    if(this.bot.bot_type === EBotType.faqbot) url = this.constantsService.addMessageToCurationFromSession();
    else url = this.constantsService.addMessageToMlCurationFromSession();

    this.serverService.makePostReq<any>({headerData, body, url})
      .subscribe(val => {
        this.utilityService.showSuccessToaster('Flagged for curation');
        this.inCuration = true;
        event.stopPropagation();
      });
  }

}
