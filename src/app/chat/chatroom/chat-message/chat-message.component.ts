import {Component, Input, OnInit} from '@angular/core';
import {IMessageData} from '../../../../interfaces/chat-session-state';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  @Input()selectedAvatar;
  @Input() messageData:IMessageData = {
    text:'this is a test',
    time:"10:L20PM",
    type:"bot"
  };
  constructor() { }

  ngOnInit() {
  }

}
