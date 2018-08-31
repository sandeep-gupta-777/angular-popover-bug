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
  @Input() txnConversationItems: ITxnSessionMessagesItem;
  @Output() messageClickedEvent$: EventEmitter<string> = new EventEmitter();
  sessionMessageItems: ISessionMessageItem[];
  constructor(public utilityService:UtilityService) { }

  ngOnInit() {
    this.sessionMessageItems = this.txnConversationItems.convoList;
    // this.sessionMessageData.user_type;
  }

}
