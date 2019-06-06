import {AfterViewInit, Component, ElementRef, isDevMode, OnInit, ViewChild} from '@angular/core';
declare var CodeMirror: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit() {
    // console.info('App bootstrap success!');
  }

}
