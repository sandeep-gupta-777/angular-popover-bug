import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IMessageData} from '../../../interfaces/chat-session-state';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

  @Input() _messageDataArray:IMessageData[];
  @Input() selectedAvatar;
  @Input() set messageDataArray(value){
    this._messageDataArray = value;
    console.log('scrolling');
    setTimeout(()=>this.scrollToBottom(),0);
  }
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  constructor() { }
  ngOnInit() {
  }
  scrollToBottom(): void {
    try {
      console.log(this.myScrollContainer);
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

}
