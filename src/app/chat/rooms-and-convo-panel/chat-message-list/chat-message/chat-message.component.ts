import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EBotMessageMediaType, IMessageData} from '../../../../../interfaces/chat-session-state';
import {ActivatedRoute, Router, RoutesRecognized} from '@angular/router';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  myEBotMessageMediaType = EBotMessageMediaType;
  @Input()selectedAvatar;
  @Input() messageData: IMessageData = {
    text: 'this is a test',
    time: Date.now(),
    sourceType: 'bot',
    messageMediatype: null
  };
  isFullScreenPreview = false;
  @Output() sendMessageToBotServer$ = new EventEmitter();
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    // LoggingService.log(this.messageData);
    this.isFullScreenPreview = location.pathname === '/preview'; //this.activatedRoute.snapshot.data['isFullScreenPreview'];
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.isFullScreenPreview = data.state.root.firstChild.data.isFullScreenPreview;
      }
    });
  }

}
