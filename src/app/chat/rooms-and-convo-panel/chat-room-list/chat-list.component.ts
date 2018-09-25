import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Select} from '@ngxs/store';
import {IChatSessionState} from '../../../../interfaces/chat-session-state';
import {IBot} from '../../../core/interfaces/IBot';
import {ViewBotStateModel} from '../../../core/view-bots/ngxs/view-bot.state';
import {IConsumerDetails} from '../../ngxs/chat.state';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  constructor() {
  }

  @Input() currentBot:IBot;
  bot_id;
  @Select() botlist$: Observable<ViewBotStateModel>;
  @Select() chatsessionstate$: Observable<IChatSessionState>;
  @Output() navigateEvent: EventEmitter<string> = new EventEmitter();
  @Output() createCustomRoom$= new EventEmitter();
  @Output() createNewRoom$ = new EventEmitter();

  ngOnInit() {

    // this.chatsessionstate$.subscribe((chatSessionState: IChatSessionState) => {
    //   this.bot_id = chatSessionState.currentBotDetails && chatSessionState.currentBotDetails.id;
    //   if (!this.bot_id) return;
    //   this.botlist$.subscribe((value) => {
    //     this.currentBot = value.allBotList.find(value => value.id === this.bot_id);
    //   });
    // });
  }

  createCustomRoom(){
    this.createCustomRoom$.emit();
  }
  startNewRoom(){
    let details:{consumerDetails:IConsumerDetails, bot:IBot} =  {
      consumerDetails:{
        uid:Date.now().toString()
      },
      bot:this.currentBot
    };
    this.createNewRoom$.emit(details);
  }

  navigate(frame) {
    this.navigateEvent.emit(frame);
  }
}
