import {Component, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Select, Store} from '@ngxs/store';
import {EChatFrame, IChatSessionState, IRoomData} from '../../../../../interfaces/chat-session-state';
import {ChangeFrameAction, SetConsumerDetail, SetCurrentBotDetailsAndResetChatStateIfBotMismatch, SetCurrentRoomID, SetCurrentUId} from '../../../ngxs/chat.action';
import {IConsumerDetails} from '../../../ngxs/chat.state';
import {IBot} from '../../../../core/interfaces/IBot';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss']
})
export class ChatItemComponent implements OnInit {

  myObject = Object;
  @Input() room: IRoomData;
  @Input() currentUid: string;
  @Input() bot: IBot;
  @Input() currentRoomId: number;
  showOverlay: boolean;
  @Select() chatsessionstate$: Observable<IChatSessionState>;
  customConsumerDetails: IConsumerDetails;
  constructor(private store: Store) {
  }

  ngOnInit() {
    this.chatsessionstate$.subscribe((chatSessionState) => {
      this.currentRoomId =  chatSessionState.currentRoomId;
      this.customConsumerDetails = chatSessionState.rooms.find((room) => room.id === this.currentRoomId).consumerDetails;
    });
  }

  openChatRoom() {
    this.store.dispatch([
      new SetCurrentRoomID({id: this.room.id}),
      new SetCurrentUId({uid: this.room.uid}),
      // new SetCurrentBotDetails({bot_id:this.room.bot_id}),
      new ChangeFrameAction({frameEnabled: EChatFrame.CHAT_BOX})]);
  }

  toggleOverlay(showOverlay, event) {
    setTimeout(() => {
      this.showOverlay = !this.showOverlay;
    });

    event.stopPropagation();
  }
}
