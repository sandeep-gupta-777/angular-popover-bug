import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Select} from '@ngxs/store';
import {IChatSessionState, IRoomData} from '../../../../interfaces/chat-session-state';
import {IBot} from '../../../core/interfaces/IBot';
import {ViewBotStateModel} from '../../../core/view-bots/ngxs/view-bot.state';
import {IConsumerDetails} from '../../ngxs/chat.state';
import {UtilityService} from '../../../utility.service';
import {SortService} from '../../../sort.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  constructor() {
  }

  @Input() currentBot: IBot;
  bot_id;
  @Select() botlist$: Observable<ViewBotStateModel>;
  @Select() chatsessionstate$: Observable<IChatSessionState>;
  @Output() navigateEvent: EventEmitter<string> = new EventEmitter();
  @Output() createCustomRoom$ = new EventEmitter();
  @Output() createNewRoom$ = new EventEmitter();
  chatsessionstate: IChatSessionState;
  rooms: IRoomData[];

  ngOnInit() {

    this.chatsessionstate$.subscribe((chatSessionState: IChatSessionState) => {
      if (!chatSessionState || !chatSessionState.rooms) { return; }
      this.chatsessionstate = chatSessionState;
      chatSessionState.rooms.sort(SortService.sortMessageList);
      const x = this.rooms = chatSessionState.rooms;
      this.rooms = [...this.rooms];
    });
  }

  createCustomRoom() {
    this.createCustomRoom$.emit();
  }
  startNewRoom() {
    const details: {consumerDetails: IConsumerDetails, bot: IBot} =  {
      consumerDetails: {
        uid: UtilityService.generateUUid()
      },
      bot: this.currentBot
    };
    this.createNewRoom$.emit(details);
  }

  navigate(frame) {
    this.navigateEvent.emit(frame);
  }
}
