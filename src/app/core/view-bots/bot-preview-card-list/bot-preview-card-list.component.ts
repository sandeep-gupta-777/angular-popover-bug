import {Component, Input, OnInit} from '@angular/core';
import {IBot} from '../../interfaces/IBot';
import {Store} from '@ngxs/store';
import {ESplashScreens} from '../../../splash-screen/splash-screen.component';
import {ConstantsService, EAllActions} from '../../../constants.service';
import {PermissionService} from '../../../permission.service';
import {EBotType} from '../../../utility.service';

@Component({
  selector: 'app-bot-preview-card-list',
  templateUrl: './bot-preview-card-list.component.html',
  styleUrls: ['./bot-preview-card-list.component.scss']
})
export class BotPreviewCardListComponent implements OnInit {

  myEBotType = EBotType;
  isCreateBotAccessDenied:boolean = true;
  @Input() botType;
  myESplashScreens = ESplashScreens;
  @Input() botList:IBot[];
  constructor(private store: Store, private isTabAccessDenied:PermissionService) {
  }

  ngOnInit() {
    this.isCreateBotAccessDenied = this.isTabAccessDenied.isRouteAccessDenied(EAllActions['Create Bots']);
  }

}
