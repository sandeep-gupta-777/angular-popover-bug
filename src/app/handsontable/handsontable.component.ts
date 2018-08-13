import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {getAdvancedData, getBasicData} from '../data';
import {ConstantsService} from '../constants.service';
import {HotTableComponent} from 'ng2-handsontable';
import * as Handsontable from 'handsontable';
import set = Reflect.set;

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
  testCaseData;
  public options: any;
  @ViewChild(HotTableComponent) hotTableComponent: HotTableComponent;

  alert1(data){
    // debugger;
    // alert();
    let x = this.hotTableComponent.getHandsontableInstance();
    // setTimeout(()=>{
    //   console.log(x.getData())
    // },5000);
    x.setCellMeta(0,0, 'readOnly', "true");
  }

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
      readOnly: false,
      autoRowSize: true,
      minRows: 5
    };
  }
  dataset: any[] = [
    {id: 1, name: 'Ted Right', address: 'Wall Street'},
    {id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue'},
    {id: 3, name: 'Joan Well', address: 'Broadway'},
    {id: 4, name: 'Gail Polite', address: 'Bourbon Street'},
    {id: 5, name: 'Michael Fair', address: 'Lombard Street'},
    {id: 6, name: 'Mia Fair', address: 'Rodeo Drive'},
    {id: 7, name: 'Cora Fair', address: 'Sunset Boulevard'},
    {id: 8, name: 'Jack Right', address: 'Michigan Avenue'},
  ];

  ngOnInit(): void {
  }

}
