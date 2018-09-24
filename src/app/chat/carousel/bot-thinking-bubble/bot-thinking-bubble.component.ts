import { Component, OnInit } from '@angular/core';
import set = Reflect.set;

@Component({
  selector: 'app-bot-thinking-bubble',
  templateUrl: './bot-thinking-bubble.component.html',
  styleUrls: ['./bot-thinking-bubble.component.scss']
})
export class BotThinkingBubbleComponent implements OnInit {

  constructor() { }

  randomNumber = 1;
  ngOnInit() {
    setInterval(()=>{
      this.randomNumber = this.randomNumber>3?1:this.randomNumber+1;
    },400);
  }

}
