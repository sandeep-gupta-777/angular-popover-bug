import {Component, Input, OnInit} from '@angular/core';
import {getAdvancedData, getBasicData} from '../data';
import {ConstantsService} from '../constants.service';

@Component({
  selector: 'app-handsontable',
  templateUrl: './handsontable.component.html',
  styleUrls: ['./handsontable.component.scss']
})
export class HandsontableComponent implements OnInit {

  public data: any[];
  @Input() testData:[string,string][];
  @Input() colHeaders: string[];
  @Input() columns: any[];
  public options: any;

  constructor(private constantsService:ConstantsService) {
    // this.testData = getAdvancedData();
    // this.colHeaders = ['Key', 'Title', 'Payload'];
    // this.columns = [
    //   {data: 0, type: 'text'},
    //   {data: 1, type: 'text'},
    //   {data: 2, type: 'text'},
    // ];
    this.options = {
      // height: 396,
      rowHeaders: true,
      stretchH: 'all',
      columnSorting: true,
      colWidths: 100,
      contextMenu: true,
      className: 'htCenter htMiddle',
      readOnly: true,
      autoRowSize: true,
      height: 320,
    };
  }

  ngOnInit(): void {
  }

}
