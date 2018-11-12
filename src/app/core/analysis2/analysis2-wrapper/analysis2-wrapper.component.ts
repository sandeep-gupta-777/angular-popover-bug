import { Component, OnInit } from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ViewBotStateModel} from '../../view-bots/ngxs/view-bot.state';
import {IBot} from '../../interfaces/IBot';

@Component({
  selector: 'app-analysis2-wrapper',
  templateUrl: './analysis2-wrapper.component.html',
  styleUrls: ['./analysis2-wrapper.component.scss']
})
export class Analysis2WrapperComponent implements OnInit {

  /*TODO: rename it to allBotList OR store all bots into store*/
  @Select() botlist$: Observable<ViewBotStateModel>;
  allBotList$: Observable<IBot[]>;
  constructor() { }

  ngOnInit() {
    this.allBotList$ = this.botlist$.map(value => value.allBotList);
  }

}
