import { Component, OnInit, OnDestroy } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {ViewBotStateModel, ViewBotStateReducer} from '../ngxs/view-bot.state';
import {Observable} from 'rxjs';
import {IBot} from '../../interfaces/IBot';
import {EBotType} from '../view-bots.component';

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
  pipelineBasedBotList$: Observable<IBot[]>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.pipelineBasedBotList$ = this.botlist$
      .do((value)=>{return value})
      .map((value) => {
        let x =  value.allBotList && value.allBotList.filter((bot) => bot.bot_type === EBotType.intelligent);
        debugger;
        return x;
      });
  }

}
