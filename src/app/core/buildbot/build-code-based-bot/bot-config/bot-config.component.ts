import {Component, Input, OnInit} from '@angular/core';
import {IBot} from '../../../interfaces/IBot';

@Component({
  selector: 'app-bot-config',
  templateUrl: './bot-config.component.html',
  styleUrls: ['./bot-config.component.scss']
})
export class BotConfigComponent implements OnInit {

  @Input() bot:IBot;
  activeTab:string = "basic";
  constructor() { }

  ngOnInit() {
  }

  tabClicked(activeTab:string){
    this.activeTab = activeTab;
    console.log(this.activeTab);
  }

}
