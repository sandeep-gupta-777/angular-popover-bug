import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  @Input() overlayOrigin;
  @Input() overlayClass:string;
  @Input() showOverlay: boolean;
  @Output() backdropClick$ = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  test(){
    alert()
  }

}
