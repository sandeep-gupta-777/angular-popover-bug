import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-play-media',
  templateUrl: './play-media.component.html',
  styleUrls: ['./play-media.component.scss']
})
export class PlayMediaComponent implements OnInit {

  @Input() message:any
  constructor() { }

  ngOnInit() {
  }

}
