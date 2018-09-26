import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ISessionItem, ISessionMessageItem} from '../../../../../../interfaces/sessions';
import {ITxnSessionMessagesItem} from '../../../../../serialize-session-message.pipe';
import {UtilityService} from '../../../../../utility.service';

@Component({
  selector: 'app-session-message',
  templateUrl: './session-message.component.html',
  styleUrls: ['./session-message.component.scss']
})
export class SessionMessageComponent implements OnInit {

  // @Input() sessionMessageData: ISessionMessageItem;
   _txnConversationItems: ITxnSessionMessagesItem;
  @Input()  set txnConversationItems (txnConversationItemsValue: ITxnSessionMessagesItem){

    this._txnConversationItems = txnConversationItemsValue;
  }
  @Output() messageClickedEvent$: EventEmitter<string> = new EventEmitter();
  myArray = Array;
  sessionMessageItems: ISessionMessageItem[];
  txnId:string;
  myObject = Object;
  txnId_highlighting:string;
  constructor(public utilityService:UtilityService) { }

  ngOnInit() {

    this.sessionMessageItems = this._txnConversationItems.convoList;
    console.clear()
    console.log(this.sessionMessageItems);
    this.txnId = this._txnConversationItems.transaction_id;
    this.txnId_highlighting = this._txnConversationItems.transaction_id_highlighting || this.txnId;
    // this.sessionMessageData.user_type;
  }

}
