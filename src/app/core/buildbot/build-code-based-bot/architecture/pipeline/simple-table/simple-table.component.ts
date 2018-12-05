import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit {

  @Input() tableData: {pipeline_modules:any};
  @Output() add$ = new EventEmitter();
  // @Output() add$ = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.tableData;

  }

}
