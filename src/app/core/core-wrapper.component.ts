import {Component, OnInit} from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';
import {IProfilePermission} from '../../interfaces/profile-action-permission';
import {SetMasterProfilePermissions} from '../ngxs/app.action';
import {ServerService} from '../server.service';
import {ConstantsService} from '../constants.service';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-core-wrapper',
  templateUrl: './core-wrapper.component.html',
  styleUrls: ['./core-wrapper.component.scss']
})
export class CoreWrapperComponent implements OnInit {

  isFullScreenPreview: boolean;
  isBotDetail: boolean;

  constructor(
    private router: Router,
    private serverService: ServerService,
    private store: Store,
    private constantsService: ConstantsService
  ) {
  }

  ngOnInit() {
    this.isBotDetail = location.pathname && location.pathname.includes('/core/botdetail/');
    this.router.events.subscribe((data) => {
      this.isBotDetail = location.pathname && location.pathname.includes('/core/botdetail/');
      if (data instanceof RoutesRecognized) {
        this.isFullScreenPreview = data.state.root.firstChild.data.isFullScreenPreview;

      }
    });
  }

}
