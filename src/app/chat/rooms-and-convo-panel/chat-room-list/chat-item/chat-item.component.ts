import {Component, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Select, Store} from '@ngxs/store';
import {EChatFrame, IChatSessionState, IRoomData} from '../../../../../interfaces/chat-session-state';
import {ChangeFrameAction, SetConsumerDetail, SetCurrentBotDetails, SetCurrentRoomID, SetCurrentUId} from '../../../ngxs/chat.action';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss']
})
export class ChatItemComponent implements OnInit {

  @Input() room: IRoomData;
  @Input() currentUid:string;
  @Input() currentRoomId:number;
  @Select() chatsessionstate$: Observable<IChatSessionState>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.chatsessionstate$.subscribe((chatSessionState)=>{
      this.currentRoomId =  chatSessionState.currentRoomId;
    });
  }

  openChatRoom() {
    this.store.dispatch([
      new SetCurrentRoomID({id: this.room.id}),
      new SetCurrentUId({uid: this.room.uid}),
      // new SetCurrentBotDetails({bot_id:this.room.bot_id}),
      new ChangeFrameAction({frameEnabled: EChatFrame.CHAT_BOX})]);
  }
}
