import {Component, OnInit} from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';
import {IProfilePermission} from '../../interfaces/profile-action-permission';
import {SetMasterProfilePermissions} from '../ngxs/app.action';
import {ServerService} from '../server.service';
import {ConstantsService} from '../constants.service';
import {Store} from '@ngxs/store';
import {EventService} from "../event.service";
import {LoggingService} from "../logging.service";
import {LoadJsService} from "./load-js.service";

@Component({
  selector: 'app-core-wrapper',
  templateUrl: './core-wrapper.component.html',
  styleUrls: ['./core-wrapper.component.scss']
})
export class CoreWrapperComponent implements OnInit {

  isFullScreenPreview: boolean;
  isBotDetail: boolean;
  isBuildBot: boolean;
  progressVal = 0;
  showProgressbar = false;
  currentIntervalRef;

  constructor(
    private router: Router,
    private serverService: ServerService,
  ) {
      LoadJsService.load();
  }

  ngOnInit() {
    this.serverService.compareDeployDates();//TODO: after refactor
    this.initializeProgressBarSubscription();//todo: after refactor
    this.isBotDetail = location.pathname && location.pathname.includes('/core/botdetail/');
    this.isBuildBot = location.pathname && location.pathname.includes('/core/buildbot');
    this.router.events.subscribe((data) => {
      this.isBotDetail = location.pathname && location.pathname.includes('/core/botdetail/');
      this.isBuildBot = location.pathname && location.pathname.includes('/core/buildbot');
      if (data instanceof RoutesRecognized) {
        this.isFullScreenPreview = data.state.root.firstChild.data.isFullScreenPreview;

      }
    });
  }


  initializeProgressBarSubscription() {
    EventService.progressBar$.subscribe(({loading, value}) => {

      if (loading) {/*if loading = true, slowly increase progressbar*/
        this.showProgressbar = true;
        this.currentIntervalRef && clearInterval(this.currentIntervalRef);
        this.progressVal = value;
        // this.progressVal = 0;
        this.currentIntervalRef = setInterval(() => {
          // LoggingService.log('setInterval');
          if (this.progressVal < 80) {
            ++this.progressVal;
          } else {
            this.progressVal = this.progressVal + 0.2;
          }
        }, 300);
      } else {
        setTimeout(() => {
          this.progressVal = 100;
          this.currentIntervalRef && clearInterval(this.currentIntervalRef);
          setTimeout(() => {
            this.showProgressbar = false;
          }, 500);
        }, 0);
      }
    });
  }

}
