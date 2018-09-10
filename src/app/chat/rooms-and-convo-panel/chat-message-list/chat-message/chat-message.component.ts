import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EBotMessageMediaType, IMessageData} from '../../../../../interfaces/chat-session-state';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  myEBotMessageMediaType = EBotMessageMediaType
  @Input()selectedAvatar;
  @Input() messageData:IMessageData = {
    text:'this is a test',
    time:"10:20PM",
    sourceType:"bot",
    messageMediatype:null
  };
  @Output() sendMessageToBotServer$ = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }

}
