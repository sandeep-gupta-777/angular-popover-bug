import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-bot-welcome',
  templateUrl: './bot-welcome.component.html',
  styleUrls: ['./bot-welcome.component.scss']
})
export class BotWelcomeComponent implements OnInit {

  constructor() { }
  @Output() navigateEvent:EventEmitter<string> =new EventEmitter();
  ngOnInit() {
  }

  navigate(frame){
    this.navigateEvent.emit(frame);
  }

}
