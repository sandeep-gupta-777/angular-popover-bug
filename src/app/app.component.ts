import {Component, OnInit} from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router:Router){}
  isFullScreenPreview:boolean;
  ngOnInit(){
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        // debugger;
        this.isFullScreenPreview = data.state.root.firstChild.data.isFullScreenPreview;
      }
    });
  }

}
