import { Component, OnInit } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {ActivatedRoute} from '@angular/router';
import {ConstantsService} from '../../constants.service';
import {ServerService} from '../../server.service';
import {ViewBotStateModel} from '../view-bots/ngxs/view-bot.state';
import {Observable} from 'rxjs';
import {IBot} from '../interfaces/IBot';
import {IHeaderData} from '../../../interfaces/header-data';
import {UpdateBotInfoByIdInBotInBotList} from '../view-bots/ngxs/view-bot.action';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-bot-detail-wrapper',
  templateUrl: './bot-detail-wrapper.component.html',
  styleUrls: ['./bot-detail-wrapper.component.scss']
})
export class BotDetailWrapperComponent implements OnInit {

  // @Select() botlist$: Observable<ViewBotStateModel>;
  constructor(
    private activatedRoute:ActivatedRoute,
    private constantsService:ConstantsService,
    private serverService:ServerService,
    private store:Store,
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);

    /*
    *THE WHOLE THINGS IS REQUIRED BECAUSE OF CYCLE
    *https://stackoverflow.com/questions/52245779/how-to-avoid-loops-in-ngrx-or-ngxs
    * */
    // let botIdStr = this.activatedRoute.snapshot.firstChild.paramMap.get('id');
    // if(botIdStr){
    //   this.botlist$.pipe(first()).subscribe((viewBotStateModel:ViewBotStateModel)=>{
    //     let bot = viewBotStateModel.allBotList.find(bot=>bot.id === Number(botIdStr));
    //     let url = this.constantsService.getSpecificBotByBotTokenUrl();
    //     let headerData:IHeaderData = {
    //       "bot-access-token": bot.bot_access_token
    //     };
    //     this.serverService.makeGetReq({url, headerData})
    //       .subscribe((value:{objects:IBot[]})=>{
    //
    //           let updatedBot = value.objects[0];
    //           this.store.dispatch([
    //             new UpdateBotInfoByIdInBotInBotList({data:updatedBot, botId:updatedBot.id})
    //           ])
    //       });
    //   })
    // }
  }
}
