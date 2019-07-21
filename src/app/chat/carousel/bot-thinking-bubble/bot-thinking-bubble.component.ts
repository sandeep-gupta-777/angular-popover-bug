import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import set = Reflect.set;
import {LoggingService} from '../../../logging.service';
import {IBot} from '../../../core/interfaces/IBot';

@Component({
  selector: 'app-bot-thinking-bubble',
  templateUrl: './bot-thinking-bubble.component.html',
  styleUrls: ['./bot-thinking-bubble.component.scss']
})
export class BotThinkingBubbleComponent implements OnInit, OnDestroy {

  intervalRef;
  constructor() { }
  @Input() bot: IBot;
  randomNumber = 1;
  ngOnInit() {
    this.intervalRef = setInterval(() => {
      // LoggingService.log('setInterval');
      this.randomNumber = this.randomNumber > 3 ? 1 : this.randomNumber + 1;
    }, 400);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalRef);
  }
}
