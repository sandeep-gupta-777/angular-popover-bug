import {Component, Input, OnInit} from '@angular/core';
import set = Reflect.set;
import {LoggingService} from '../../../logging.service';

@Component({
  selector: 'app-bot-thinking-bubble',
  templateUrl: './bot-thinking-bubble.component.html',
  styleUrls: ['./bot-thinking-bubble.component.scss']
})
export class BotThinkingBubbleComponent implements OnInit {

  constructor() { }
  @Input() selectedAvatar: {
  'id': number,
  'imageUrl': string,
  'name': string
};
  randomNumber = 1;
  ngOnInit() {
    setInterval(() => {
      LoggingService.log('setInterval');
      this.randomNumber = this.randomNumber > 3 ? 1 : this.randomNumber + 1;
    }, 400);
  }

}
