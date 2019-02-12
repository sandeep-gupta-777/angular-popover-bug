import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-integration-item',
  templateUrl: './integration-item.component.html',
  styleUrls: ['./integration-item.component.scss']
})
export class IntegrationItemComponent implements OnInit {

  constructor() { }
  @Input()  orgName: string;
  @Input()  formFields: string[];
  isActive: boolean;

  ngOnInit() {
  }
  onChange($event) {
    this.isActive  = $event;
  }

}
