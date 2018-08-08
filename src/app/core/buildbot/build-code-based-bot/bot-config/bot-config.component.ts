import {Component, Input, OnInit} from '@angular/core';
import {IBot} from '../../../interfaces/IBot';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-bot-config',
  templateUrl: './bot-config.component.html',
  styleUrls: ['./bot-config.component.scss']
})
export class BotConfigComponent implements OnInit {

  @Input() bot:IBot;
  activeTab:string = "basic";
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activeTab  =  this.activatedRoute.snapshot.queryParamMap.get('config') ||  'basic';
  }

  tabClicked(activeTab:string){
    this.activeTab = activeTab;
    console.log(this.activeTab);
  }

}
