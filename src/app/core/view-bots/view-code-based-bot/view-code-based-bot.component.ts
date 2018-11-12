import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {IBot} from '../../interfaces/IBot';
import {ViewBotStateModel, ViewBotStateReducer} from '../ngxs/view-bot.state';
import {Observable} from 'rxjs';
// import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import {ESplashScreens} from '../../../splash-screen/splash-screen.component';
import {EBotType} from '../view-bots.component';
@Component({
  selector: 'app-view-code-based-bot',
  templateUrl: './view-code-based-bot.component.html',
  styleUrls: ['./view-code-based-bot.component.scss']
})
export class ViewCodeBasedBotComponent implements OnInit {

  myEBotType = EBotType;
  @Input() botType;
  myESplashScreens = ESplashScreens;
  @Input() codeBasedBotList: IBot[];
  constructor(private store: Store) {
  }

  ngOnInit() {
  }
}
