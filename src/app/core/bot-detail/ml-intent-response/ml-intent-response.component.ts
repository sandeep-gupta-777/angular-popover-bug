import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-ml-intent-response',
  templateUrl: './ml-intent-response.component.html',
  styleUrls: ['./ml-intent-response.component.scss']
})
export class MlIntentResponseComponent implements OnInit {

  @Input() form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
