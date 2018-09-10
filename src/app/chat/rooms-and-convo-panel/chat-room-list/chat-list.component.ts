import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Select} from '@ngxs/store';
import {IChatSessionState} from '../../../../interfaces/chat-session-state';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  constructor() {
  }

  @Select() chatsessionstate$: Observable<IChatSessionState>;
  @Output() navigateEvent: EventEmitter<string> = new EventEmitter();
  @Output() createCustomRoom$: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }

  navigate(frame) {
    this.navigateEvent.emit(frame);
  }
}
