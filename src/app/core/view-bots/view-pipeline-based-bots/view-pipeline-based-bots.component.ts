import { Component, OnInit, OnDestroy } from '@angular/core';
import {Select} from '@ngxs/store';
import {ViewBotStateReducer} from '../ngxs/view-bot.state';
import {Observable} from 'rxjs';
import {IBot} from '../../interfaces/IBot';

@Component({
  selector: 'app-view-pipeline-based-bots',
  templateUrl: './view-pipeline-based-bots.component.html',
  styleUrls: ['./view-pipeline-based-bots.component.scss']
})
export class ViewPipelineBasedBotsComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    console.log('pipelineBasedBotList');
  }

  @Select(ViewBotStateReducer.getPipelineBased)  pipelineBasedBotList$ : Observable<IBot>;
  constructor() { }

  ngOnInit() {
    console.log('pipelineBasedBotList');
    this.pipelineBasedBotList$.subscribe((value)=>{
      console.log(value)
    });
  }

}
