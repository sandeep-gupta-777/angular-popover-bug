import {Component, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Select, Store} from '@ngxs/store';
import {EChatFrame, IRoomData} from '../../../../../interfaces/chat-session-state';
import {ChangeFrameAction, SetCurrentBotID, SetCurrentRoomID, SetCurrentUId} from '../../../ngxs/chat.action';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss']
})
export class ChatItemComponent implements OnInit {

  @Input() room: IRoomData;
  @Input() currentUid:string;

  constructor(private store: Store) {
  }

  ngOnInit() {
  }

  openChatRoom() {
    // debugger;
    this.store.dispatch([
      new SetCurrentUId({uid: this.room.uid}),
      new SetCurrentBotID({bot_id:this.room.bot_id}),
      new ChangeFrameAction({frameEnabled: EChatFrame.CHAT_BOX})]);
  }
}
