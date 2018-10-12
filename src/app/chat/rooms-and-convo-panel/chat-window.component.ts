import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {EBotMessageMediaType, EChatFrame, IMessageData, IRoomData} from '../../../interfaces/chat-session-state';
import {LoggingService} from '../../logging.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

  @Input() _messageDataArray:IMessageData[];
  botIsThinkingMessageDataArray:IMessageData[] = [
    {
      sourceType:'bot',
      messageMediatype:EBotMessageMediaType.bot_thinking,
      time:null
    }
  ]
  @Input() selectedAvatar;
  @Input() room:IRoomData;
  @Input() showBotIsThinking:boolean=false;
  @Input() set messageDataArray(value){

    this._messageDataArray = value;
    setTimeout(()=>this.scrollToBottom(),0);
  }
  @Output() sendMessageByHuman$ = new EventEmitter();
  messageByHuman:string;
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  myEChatFrame = EChatFrame;

  constructor() { }
  ngOnInit() {
  }
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) {
      LoggingService.error(err);
    }
  }
  sendMessageByHuman(message){
    this.sendMessageByHuman$.emit({messageByHuman:message, room:this.room});
    this.messageByHuman ="";
  }

}
