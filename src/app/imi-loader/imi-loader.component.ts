import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-imi-loader',
  templateUrl: './imi-loader.component.html',
  styleUrls: ['./imi-loader.component.scss']
})
export class ImiLoaderComponent implements OnInit {

  @Input() customTemplate = false;
  constructor() { }

  ngOnInit() {
  }

}
