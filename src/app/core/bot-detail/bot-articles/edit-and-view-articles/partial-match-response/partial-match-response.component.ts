import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-partial-match-response',
  templateUrl: './partial-match-response.component.html',
  styleUrls: ['./partial-match-response.component.scss']
})
export class PartialMatchResponseComponent implements OnInit {

  constructor() { }
  @Input() textContent;
  ngOnInit() {
  }

}
