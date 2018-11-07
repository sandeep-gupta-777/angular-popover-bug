import { Component, OnInit, OnDestroy } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {ViewBotStateModel, ViewBotStateReducer} from '../ngxs/view-bot.state';
import {Observable} from 'rxjs';
import {IBot} from '../../interfaces/IBot';
import {EBotType} from '../view-bots.component';
import {ESplashScreens} from '../../../splash-screen/splash-screen.component';

@Component({
  selector: 'app-view-pipeline-based-bots',
  templateUrl: './view-pipeline-based-bots.component.html',
  styleUrls: ['./view-pipeline-based-bots.component.scss']
})
export class ViewPipelineBasedBotsComponent implements OnInit {
  myESplashScreens = ESplashScreens;
  @Select() botlist$: Observable<ViewBotStateModel>;
  pipelineBasedBotList$: Observable<IBot[]>;
  pipelineBasedBotList: IBot[];

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.botlist$
      .do((value) => value)
      .map((value) => value.allBotList && value.allBotList.filter((bot) => bot.bot_type === EBotType.intelligent))
      .subscribe((value) => this.pipelineBasedBotList = value);
  }

}
