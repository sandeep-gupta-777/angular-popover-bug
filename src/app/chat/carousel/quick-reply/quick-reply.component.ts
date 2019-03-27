import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EBotMessageMediaType, IMessageData} from '../../../../interfaces/chat-session-state';
import {ActivatedRoute} from '@angular/router';
import {LoggingService} from '../../../logging.service';
import { EChatFeedback } from '../../chat-wrapper.component';

@Component({
  selector: 'app-quick-reply',
  templateUrl: './quick-reply.component.html',
  styleUrls: ['./quick-reply.component.scss']
})
export class QuickReplyComponent implements OnInit {

  @Input() isFullScreenPreview = false;
  @Input() messageData: IMessageData;
  @Input() isParentSessionsModal = false;
  @Input() feedback;
  myEChatFeedback : EChatFeedback;
  myEBotMessageMediaType = EBotMessageMediaType;
  @Output() sendMessageToBotServer$ = new EventEmitter();
  carasolItemShownInOneScreen = 2;
  totalItemsInCarasol: number;

  constructor() {
  }

  ngOnInit(): void {
    LoggingService.log(this.messageData);
  }

}
