import {Component, Input, OnInit} from '@angular/core';
import {IBot} from '../../interfaces/IBot';
import {Store} from '@ngxs/store';
import {EBotType} from '../view-bots.component';
import {ESplashScreens} from '../../../splash-screen/splash-screen.component';

@Component({
  selector: 'app-bot-preview-card-list',
  templateUrl: './bot-preview-card-list.component.html',
  styleUrls: ['./bot-preview-card-list.component.scss']
})
export class BotPreviewCardListComponent implements OnInit {

  myEBotType = EBotType;
  @Input() botType;
  myESplashScreens = ESplashScreens;
  @Input() codeBasedBotList:IBot[];
  constructor(private store: Store) {
  }

  ngOnInit() {
  }

}
