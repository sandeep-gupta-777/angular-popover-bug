import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EChatFeedback} from '../chat/chat-wrapper.component';

@Component({
  selector: 'app-chat-feedback',
  template: `    
    <div class="chat-feedback cursor-pointer">
      <div (click)="chatMessageFeedback$.emit(true)">
        <i class="fa" [ngClass]="{'fa-thumbs-up': feedback === myEChatFeedback.POSITIVE, 'fa-thumbs-o-up': feedback !== myEChatFeedback.POSITIVE}"></i>
        <span>Upvote</span>
      </div>
      <div (click)="chatMessageFeedback$.emit(false)">
        <i class="fa" [ngClass]="{'fa-thumbs-down': feedback === myEChatFeedback.NEGATIVE, 'fa-thumbs-o-down': feedback !== myEChatFeedback.NEGATIVE}"></i>
        <span>Downvote</span>
      </div>
    </div>
  `,
  styleUrls: ['./chat-feedback.component.scss']
})
export class ChatFeedbackComponent{
  @Input() feedback;
  @Output() chatMessageFeedback$ = new EventEmitter();
  myEChatFeedback = EChatFeedback;
}
