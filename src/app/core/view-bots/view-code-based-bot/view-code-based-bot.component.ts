import {Component, OnDestroy, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {IBot} from '../../interfaces/IBot';
import {ViewBotStateReducer} from '../ngxs/view-bot.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-view-code-based-bot',
  templateUrl: './view-code-based-bot.component.html',
  styleUrls: ['./view-code-based-bot.component.scss']
})
export class ViewCodeBasedBotComponent implements OnInit, OnDestroy {

  @Select(ViewBotStateReducer.getCodeBased)  codeBasedBotList$ : Observable<IBot>;
  constructor(private store: Store) {
  }

  ngOnInit(){
    this.codeBasedBotList$.subscribe((value)=>{
    });
  }

  ngOnDestroy(): void {
  }

}
