import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {EBotMessageMediaType, EChatFrame, IMessageData, IRoomData} from '../../../interfaces/chat-session-state';
import {LoggingService} from '../../logging.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ServerService} from '../../server.service';
import {ConstantsService} from '../../constants.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  messageByHuman: string;
  @Output() chatMessageFeedback$ = new EventEmitter();
  botIsThinkingMessageDataArray: IMessageData[] = [{
    sourceType: 'bot',
    messageMediatype: EBotMessageMediaType.bot_thinking,
    time: null,
    bot_message_id: null,
  }];
  @Input() _messageDataArray: IMessageData[];
  @Input() selectedAvatar;
  @Input() room: IRoomData;
  @Input() showBotIsThinking = false;

  @Input() set messageDataArray(value) {
    this._messageDataArray = value;
    setTimeout(() => this.scrollToBottom(), 0);
  }

  @Output() sendMessageByHuman$ = new EventEmitter();
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  myEChatFrame = EChatFrame;

  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
  ) {
  }

  ngOnInit() {
  }

  feedback(messageData: IMessageData, isLiked: boolean) {
    let body = {
      'bot_message_id': messageData.bot_message_id,
      'feedback': isLiked ? 'POSITIVE' : 'NEGATIVE'
    };
    this.chatMessageFeedback$.emit(body);
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      LoggingService.error(err);
    }
  }

  sendMessageByHuman(message) {
    this.sendMessageByHuman$.emit({messageByHuman: message, room: this.room});
    this.messageByHuman = '';
  }

}
