import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EBotMessageMediaType, IMessageData} from '../../../../../interfaces/chat-session-state';
import {ActivatedRoute, Router, RoutesRecognized} from '@angular/router';
import {ServerService} from '../../../../server.service';
import {ConstantsService} from '../../../../constants.service';
import {EChatFeedback} from '../../../chat-wrapper.component';
import {UtilityService} from '../../../../utility.service';
import {IBot} from '../../../../core/interfaces/IBot';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  myEChatFeedback = EChatFeedback;
  myEBotMessageMediaType = EBotMessageMediaType;
  isFullScreenPreview = false;
  _allow_feedback = false;
  @Input() isLastMessage: boolean;
  @Input() bot;
  @Input() set allow_feedback(val) {
   this._allow_feedback = val;
  }
  @Input() messageData: IMessageData = {
    text: 'this is a test',
    time: Date.now(),
    sourceType: 'bot',
    messageMediatype: null,
    bot_message_id: null,
  };
  @Output() sendMessageToBotServer$ = new EventEmitter();
  @Output() chatMessageFeedback$ = new EventEmitter();

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.isFullScreenPreview = location.pathname === '/preview'; // this.activatedRoute.snapshot.data['isFullScreenPreview'];
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.isFullScreenPreview = data.state.root.firstChild.data.isFullScreenPreview;
      }
    });
  }

  feedback(isPositive) {
    this.messageData.feedback = isPositive ? EChatFeedback.POSITIVE : EChatFeedback.NEGATIVE;
    this.chatMessageFeedback$.emit(isPositive);
  }
}
