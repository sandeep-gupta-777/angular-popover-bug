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
})
export class BotDetailWrapperComponent implements OnInit {

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
