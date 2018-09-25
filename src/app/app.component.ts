import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router, RoutesRecognized} from '@angular/router';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IAppState} from './ngxs/app.state';

declare var CodeMirror: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @Select() app$: Observable<IAppState>;
  @ViewChild('carousel') carousel:ElementRef;
  constructor(private router: Router) {
  }

  isFullScreenPreview: boolean;
  enterprise_unique_name: string;
  bot_unique_name: string;
  progressVal: number = 0;
  showProgressbar: boolean = false;
  editor: any;
  currentIntervalRef;

  ngOnInit() {
    this.app$.subscribe((app) => {

      if (app.progressbar.loading) {
        this.showProgressbar = true;
        this.currentIntervalRef && clearInterval(this.currentIntervalRef);
        this.progressVal = app.progressbar.value;
        // this.progressVal = 0;
        this.currentIntervalRef = setInterval(() => {
          if (this.progressVal < 80)
            ++this.progressVal;
          else {
            this.progressVal = this.progressVal + 0.2;
          }
        }, 200);
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


    // this.router.events.subscribe((data) => {
    //   if (data instanceof RoutesRecognized) {
    //     this.isFullScreenPreview = data.state.root.firstChild.data.isFullScreenPreview;
    //     ;
    //   }
    // });
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {

        this.isFullScreenPreview = data.state.root.firstChild.data.isFullScreenPreview;
        this.bot_unique_name = data.state.root.firstChild.queryParamMap.get('bot_unique_name');
        this.enterprise_unique_name = data.state.root.firstChild.queryParamMap.get('enterprise_unique_name');
      }
    });
  }

}
