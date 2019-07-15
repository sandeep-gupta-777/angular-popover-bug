import {Component, OnInit} from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationStart, Router} from "@angular/router";
import {MessagingService} from "../messaging.service";

declare var CodeMirror: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  loading;
  message;
  constructor(private router: Router, private messagingService: MessagingService) {
  }

  ngOnInit() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('assets/js/firebase-messaging-sw.js')
        .then((registration) =>{
          console.log('Registration successful, scope is:', registration.scope);
          const userId = 'user001asdasdasd';
          this.messagingService.requestPermission(userId);
          this.messagingService.receiveMessage();
          this.message = this.messagingService.currentMessage
        }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
      });
    }
//
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
