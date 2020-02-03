import {AfterViewInit, Component, OnInit, TemplateRef} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Popover} from './popover/popover.service';
import {InsidePopoverComponent} from './popover/inside-popover/inside-popover.component';

declare var CodeMirror: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
  loading;
  message;

  constructor(private router: Router,
              private popper: Popover

              ) {
  }

  ngOnInit() {
    console.info('App bootstrap success!');
  }

  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.loading = true;
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.loading = false;
        }
      });
  }
}
