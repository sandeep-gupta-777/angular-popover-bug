import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ISessionItem, ISessionMessageItem} from '../../../../../../interfaces/sessions';

@Component({
  selector: 'app-session-message',
  templateUrl: './session-message.component.html',
  styleUrls: ['./session-message.component.scss']
})
export class SessionMessageComponent implements OnInit {

  @Input() sessionMessageData: ISessionMessageItem;
  @Output() messageClickedEvent$: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.sessionMessageData.user_type;
  }

}
