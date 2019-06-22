import {AfterViewInit, Component, ElementRef, isDevMode, OnInit, ViewChild} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationStart, Route, Router} from "@angular/router";
declare var CodeMirror: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  loading;
  constructor(private router: Router){}
  ngOnInit() {
    // console.info('App bootstrap success!');
  }

  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if(event instanceof NavigationStart) {
          this.loading = true;
        }
        else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.loading = false;
        }
      });
  }

}
