import {Component, OnInit} from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';
import {BrowserDomAdapter} from '@angular/platform-browser/src/browser/browser_adapter';
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

  constructor(private router: Router) {
  }

  isFullScreenPreview: boolean;
  progressVal: number = 0;
  showProgressbar: boolean = false;
  dom: BrowserDomAdapter;
  editor: any;

  ngOnInit() {
    this.app$.subscribe((app) => {
      // this.showProgressbar = app.progressbar.show;
      this.progressVal = app.progressbar.value;
      if(this.progressVal===100){
        setTimeout(()=>{this.showProgressbar=false},1000)
      }else {
        this.showProgressbar=true;
      }
    });
    setInterval(() => {
      if (this.progressVal < 80)
        ++this.progressVal;
    }, 200);
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.isFullScreenPreview = data.state.root.firstChild.data.isFullScreenPreview;
        ;
      }
    });
  }

}
