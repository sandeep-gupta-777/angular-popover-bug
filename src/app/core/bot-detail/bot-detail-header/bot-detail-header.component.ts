import {Component, Input, OnInit} from '@angular/core';
import {IBot} from '../../interfaces/IBot';

@ Component({
  selector: 'app-bot-detail-header',
  templateUrl: './bot-detail-header.component.html',
  styleUrls: ['./bot-detail-header.component.scss']
})
export class BotDetailHeaderComponent implements OnInit {

  @Input() bot:IBot;
  myObject =Object;
  constructor() { }

  ngOnInit() {
  }

}
