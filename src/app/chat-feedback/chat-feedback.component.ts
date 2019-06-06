import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EChatFeedback, IChatFeedback} from '../chat/chat-wrapper.component';

@Component({
  selector: 'app-chat-feedback',
  template: `
    <div class="chat-feedback-wrapper">
      <div id="test1" class="chat-feedback" data-cy="chat-upvote" (click)="chatFeedbackClicked(true)" *ngIf="feedback!==myEChatFeedback.NEGATIVE">
        <mat-icon
          [ngStyle]="{'color': feedback === myEChatFeedback.POSITIVE? '#34bc6e':'#bebebe'}"
          class="chat-feedback__icon user-feedback__icon--up">thumb_up</mat-icon>
        <span>Upvote</span>
      </div>
      <div id="test2" class="chat-feedback" data-cy="chat-downvote" (click)="chatFeedbackClicked(false)" *ngIf="feedback!==myEChatFeedback.POSITIVE">
        <mat-icon
          [ngStyle]="{'color': feedback === myEChatFeedback.NEGATIVE? '#b14250':'#bebebe'}"
          class="chat-feedback__icon user-feedback__icon--down">thumb_down</mat-icon>
        <span>Downvote</span>
      </div>
    </div>
  `,
  styleUrls: ['./chat-feedback.component.scss']
})
export class ChatFeedbackComponent {

  @Input() feedback: EChatFeedback;
  @Output() chatMessageFeedback$ = new EventEmitter();
  myEChatFeedback = EChatFeedback;

  /*
  * chatFeedbackClicked: feedback can't be changed once given
  * */
  chatFeedbackClicked(isFeedbackPositive: boolean) {
    if (this.feedback == null) {
      this.chatMessageFeedback$.emit(isFeedbackPositive);
    }
  }
}
