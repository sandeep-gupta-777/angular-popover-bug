import {Component, OnInit} from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';
import {ServerService} from '../server.service';
import {EventService} from '../event.service';
import {LoadJsService} from './load-js.service';
import {SocketService} from '../socket.service';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IAuthState} from '../auth/ngxs/auth.state';
import {switchMap, take, takeUntil} from 'rxjs/operators';
import {ViewBotStateModel} from './view-bots/ngxs/view-bot.state';
import {UtilityService} from '../utility.service';
import {IBot} from './interfaces/IBot';

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
  @Select() loggeduser$: Observable<IAuthState>;
  @Select() botlist$: Observable<ViewBotStateModel>;
  botList: IBot[];

  constructor(
    private router: Router,
    private serverService: ServerService,
    private socketService: SocketService,
    private utilityService: UtilityService
  ) {
    LoadJsService.load();
  }

  ngOnInit() {
    this.serverService.compareDeployDates(); // TODO: after refactor
    this.initializeProgressBarSubscription(); // todo: after refactor
    this.isBotDetail = location.pathname && location.pathname.includes('/core/botdetail/');
    this.isBuildBot = location.pathname && location.pathname.includes('/core/buildbot');
    this.router.events.subscribe((data) => {
      this.isBotDetail = location.pathname && location.pathname.includes('/core/botdetail/');
      this.isBuildBot = location.pathname && location.pathname.includes('/core/buildbot');
      if (data instanceof RoutesRecognized) {
        this.isFullScreenPreview = data.state.root.firstChild.data.isFullScreenPreview;

      }
    });
    this.botlist$.subscribe(val => {
      this.botList = val.allBotList;
    });
    this.initializeSocketNow();


    SocketService.train$.subscribe((payload) => {
      const trainedInBot: IBot = this.botList.find(bot => {
        return payload.bot_id === bot.id;
      });
      if (trainedInBot) {
        this.utilityService.showSuccessToaster(`${trainedInBot.name} bot successfully trained`);
      }

    });

  }

  initializeSocketNow() {
    this.socketService.initializeSocketNow();
  }

  initializeProgressBarSubscription() {
    EventService.progressBar$.subscribe(({loading, value}) => {

      if (loading) {/*if loading = true, slowly increase progressbar*/
        this.showProgressbar = true;
        if (this.currentIntervalRef) {
          clearInterval(this.currentIntervalRef);
        }
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
          if (this.currentIntervalRef) {
            clearInterval(this.currentIntervalRef);
          }
          setTimeout(() => {
            this.showProgressbar = false;
          }, 500);
        }, 0);
      }
    });
  }

}
