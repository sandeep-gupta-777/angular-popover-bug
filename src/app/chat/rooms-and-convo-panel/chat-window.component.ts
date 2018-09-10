import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {EChatFrame, IMessageData, IRoomData} from '../../../interfaces/chat-session-state';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

  @Input() _messageDataArray:IMessageData[];
  @Input() selectedAvatar;
  @Input() room:IRoomData;
  @Input() set messageDataArray(value){
    this._messageDataArray = value;
    console.log('scrolling');
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
      console.log(this.myScrollContainer);
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }
  sendMessageByHuman(message){
    debugger;
    this.sendMessageByHuman$.emit({messageByHuman:message, room:this.room});
    this.messageByHuman ="";
  }

}
