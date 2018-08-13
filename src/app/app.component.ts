import {Component, OnInit} from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';
import {BrowserDomAdapter} from '@angular/platform-browser/src/browser/browser_adapter';

declare var CodeMirror: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
  }

  isFullScreenPreview: boolean;
  dom: BrowserDomAdapter;
  editor: any;

  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.isFullScreenPreview = data.state.root.firstChild.data.isFullScreenPreview;;
      }
    });
  }

}
