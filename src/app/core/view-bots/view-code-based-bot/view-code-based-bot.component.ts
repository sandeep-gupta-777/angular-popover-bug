import {Component, OnDestroy, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {IBot} from '../../interfaces/IBot';
import {ViewBotStateModel, ViewBotStateReducer} from '../ngxs/view-bot.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-view-code-based-bot',
  templateUrl: './view-code-based-bot.component.html',
  styleUrls: ['./view-code-based-bot.component.scss']
})
export class ViewCodeBasedBotComponent implements OnInit, OnDestroy {

  @Select() botlist$: Observable<ViewBotStateModel>;
  codeBasedBotList$: Observable<IBot[]>;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.codeBasedBotList$ = this.botlist$
      .do((value)=>{;return value})
      .map((value) => value.allBotList && value.allBotList.filter((bot) => bot.bot_type === 'chatbot'));
  }

  ngOnDestroy(): void {
  }

}
