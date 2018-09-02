import { Component, OnInit } from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';

@Component({
  selector: 'app-core-wrapper',
  templateUrl: './core-wrapper.component.html',
  styleUrls: ['./core-wrapper.component.scss']
})
export class CoreWrapperComponent implements OnInit {

  isFullScreenPreview: boolean;
  constructor(private router: Router) { }

  ngOnInit() {

    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.isFullScreenPreview = data.state.root.firstChild.data.isFullScreenPreview;
      }
    });
  }

}
