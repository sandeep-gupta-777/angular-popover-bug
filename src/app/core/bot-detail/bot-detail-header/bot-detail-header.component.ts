import {Component, Input, OnInit} from '@angular/core';
import {IBot} from '../../interfaces/IBot';
import {ServerService} from '../../../server.service';
import {Store} from '@ngxs/store';
import {ConstantsService} from '../../../constants.service';
import {IHeaderData} from '../../../../interfaces/header-data';

@ Component({
  selector: 'app-bot-detail-header',
  templateUrl: './bot-detail-header.component.html',
  styleUrls: ['./bot-detail-header.component.scss']
})
export class BotDetailHeaderComponent implements OnInit {

  @Input() bot:IBot;
  myObject =Object;
  constructor(
    private store:Store,
    private serverService:ServerService,
    private constantsService:ConstantsService) { }

  ngOnInit() {
  }

  updateBot(){
    let url = this.constantsService.updateBotUrl(this.bot.id);
    let headerData:IHeaderData = {
      "bot-access-token":this.bot.bot_access_token
    };
    let body = this.constantsService.updateBotSerializer(this.bot)
    this.serverService.makePutReq({url,body, headerData})
      .subscribe((value)=>{
        console.log(value);
      });
  }

}
