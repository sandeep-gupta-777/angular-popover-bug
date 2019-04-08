import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artical-header',
  templateUrl: './artical-header.component.html',
  styleUrls: ['./artical-header.component.scss']
})
export class ArticalHeaderComponent implements OnInit {

  constructor() { }
  @Input() corpus;
  ngOnInit() {
  }

}
