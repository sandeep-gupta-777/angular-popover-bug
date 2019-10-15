import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {EBotMessageMediaType, EChatFrame, IMessageData, IRoomData} from '../../../interfaces/chat-session-state';
import {LoggingService} from '../../logging.service';
import {ServerService} from '../../server.service';
import {ConstantsService} from '../../constants.service';
import {IBot} from '../../core/interfaces/IBot';
import {data} from "../mock-data";

declare const ImiPreview: any;

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit, AfterViewInit {
  messageByHuman: string;
  @Input() bot: IBot;
  @Input() isFullScreenPreview: boolean;
  @Input() isAnonView: boolean;
  @Output() chatMessageFeedback$ = new EventEmitter();
  botIsThinkingMessageDataArray: IMessageData[] = [{
    sourceType: 'bot',
    messageMediatype: EBotMessageMediaType.bot_thinking,
    time: null,
    bot_message_id: null,
  }];

  _allow_feedback = false;
  @Input() set allow_feedback(val) {
    this._allow_feedback = val;
  }

  @Input() _messageDataArray: IMessageData[];
  @Input() selectedAvatar;
  @Input() room: IRoomData;
  @Input() showBotIsThinking = false;
  imiPreview;
  count = 0;

  @Input() set messageDataArray(value) {
    if (this._messageDataArray) {
      if (value.length < this._messageDataArray.length) {
        this.count = 0;
        this.imiPreview && this.imiPreview.removeAllChatMessages();
        this.imiPreview.setOptions(this.bot, {});
      }
    }
    const arrayToBeRenderer = value.slice(this.count, value.length);
    this._messageDataArray = value;
    setTimeout(() => this.scrollToBottom(), 0);
    if (this.imiPreview) {
      arrayToBeRenderer.forEach((item) => {
        this.imiPreview && this.imiPreview.appendMessageInChatBody([{
          ...item
        }]);
      });
      this.count = value.length;
    }

  }


  ngAfterViewInit(): void {
    const arrayToBeRenderer = this._messageDataArray.slice(this.count, this._messageDataArray.length);
    try {
      this.imiPreview = this.render();
      if (this.imiPreview) {
        arrayToBeRenderer.forEach((item) => {
          this.imiPreview && this.imiPreview.appendMessageInChatBody([{
            ...item
          }]);
        });
        this.count = arrayToBeRenderer.length;
      }
    } catch (e) {
      console.log(e);
    }
  }


  render() {
    const className = '.chat-window-section';
    /*google*/
    if (document.querySelector(className)) {
      const imiPreview = new ImiPreview();
      imiPreview.viewInit(className, false, false);
      imiPreview.setOptions(this.bot, {});
      // imiPreview.appendMessageInChatBody(data.generated_msg);
      // imiPreview.setIntroDetails({description: "dummy description", logo: "dummy logo", title: "dummy title"});
      // imiPreview.appendMessageInChatBody([{
      //   sourceType: 'human',
      //   text: "humanMessage",
      //   time: Date.now()
      // }]);
      return imiPreview;
    }
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
    const body = {
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
    if (message && message.trim()) {
      this.sendMessageByHuman$.emit({messageByHuman: message, room: this.room});
      this.messageByHuman = '';
    }
  }

}
