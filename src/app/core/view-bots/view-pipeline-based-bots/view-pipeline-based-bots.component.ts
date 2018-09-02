import { Component, OnInit, OnDestroy } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {ViewBotStateModel, ViewBotStateReducer} from '../ngxs/view-bot.state';
import {Observable} from 'rxjs';
import {IBot} from '../../interfaces/IBot';

@Component({
  selector: 'app-view-pipeline-based-bots',
  templateUrl: './view-pipeline-based-bots.component.html',
  styleUrls: ['./view-pipeline-based-bots.component.scss']
})
export class ViewPipelineBasedBotsComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
  }
  //intelligent

  @Select() botlist$: Observable<ViewBotStateModel>;
  codeBasedBotList$: Observable<IBot[]>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.codeBasedBotList$ = this.botlist$
      .do((value)=>{return value})
      .map((value) => value.allBotList && value.allBotList.filter((bot) => bot.bot_type === 'intelligent'));
  }

}
