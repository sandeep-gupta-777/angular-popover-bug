import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBot} from '../../core/interfaces/IBot';
import {ViewBotStateModel} from '../../core/view-bots/ngxs/view-bot.state';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {EChatFrame, IChatSessionState} from '../../../interfaces/chat-session-state';
import {UtilityService} from '../../utility.service';

@Component({
  selector: 'app-bot-welcome',
  templateUrl: './bot-welcome.component.html',
  styleUrls: ['./bot-welcome.component.scss']
})
export class BotWelcomeComponent implements OnInit {

  @Select() botlist$: Observable<ViewBotStateModel>;
  @Select() chatsessionstate$: Observable<IChatSessionState>;
  @Output() startnewchat$ = new EventEmitter();
  myEChatFrame = EChatFrame;

  @Input() currentBot: IBot;

  constructor(private utilityService: UtilityService) {
  }

  @Output() navigateEvent: EventEmitter<string> = new EventEmitter();
  @Input() bot_id: number;

  ngOnInit() {
    // this.chatsessionstate$.subscribe((chatSessionState: IChatSessionState) => {
    //   this.bot_id = chatSessionState.currentBotDetails && chatSessionState.currentBotDetails.roomId;
    //   if (!this.bot_id) return;
    //   this.botlist$.subscribe((value) => {
    //     this.bot = value.allBotList.find(value => value.roomId === this.bot_id);
    //   });
    // });
  }

  startNewChat() {
    this.startnewchat$.emit({
      consumerDetails: {uid: this.utilityService.createRandomUid()},
      bot: this.currentBot
    });
  }

  navigate(frame) {
    this.navigateEvent.emit(frame);
  }

}
