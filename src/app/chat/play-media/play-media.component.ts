import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-play-media',
  templateUrl: './play-media.component.html',
})
export class PlayMediaComponent implements OnInit {

  @Input() message: any;
  @Input() direction: 'left' | 'right' = 'right';

  constructor() {
  }

  ngOnInit() {
  }

}
