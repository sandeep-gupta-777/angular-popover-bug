import {AfterViewInit, Component, EventEmitter, OnInit, TemplateRef} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Popover} from './popover/popover.service';
import {InsidePopoverComponent} from './popover/inside-popover/inside-popover.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
  loading;
  message;

  constructor(
              private popper: Popover

              ) {
  }

  ngOnInit() {

  }

  show(origin: HTMLElement) {
    const ref = this.popper.open<any>({
      content: InsidePopoverComponent,
      origin,
      width: '200px'
    });
  }

  ngAfterViewInit() {
  }
}
