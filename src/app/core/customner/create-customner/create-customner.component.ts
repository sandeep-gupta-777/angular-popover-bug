import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-customner',
  templateUrl: './create-customner.component.html',
  styleUrls: ['./create-customner.component.scss']
})
export class CreateCustomnerComponent implements OnInit {

  constructor() { }
  conceptType = 'single';
  ngOnInit() {
  }

  conceptTypeChanged(newConceptType: string) {
    this.conceptType = newConceptType;
  }

}
