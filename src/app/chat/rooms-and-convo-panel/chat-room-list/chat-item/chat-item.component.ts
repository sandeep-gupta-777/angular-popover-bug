import {Component, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Select, Store} from '@ngxs/store';
import {EChatFrame, IRoomData} from '../../../../../interfaces/chat-session-state';
import {ChangeFrameAction, SetCurrentBotID, SetCurrentRoomID} from '../../../ngxs/chat.action';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss']
})
export class ChatItemComponent implements OnInit {

  @Input() room: IRoomData;

  constructor(private store: Store) {
  }

  ngOnInit() {
  }

  openChatRoom() {
    this.store.dispatch([
      new SetCurrentRoomID({id: this.room.id}),
      new SetCurrentBotID({bot_id:this.room.bot_id}),
      new ChangeFrameAction({frameEnabled: EChatFrame.CHAT_BOX})]);
  }
}
