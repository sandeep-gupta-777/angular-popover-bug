import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {getAdvancedData, getBasicData} from '../data';
import {ConstantsService} from '../constants.service';
// import {HotTableComponent} from 'ng2-handsontable';
import * as Handsontable from 'handsontable';
import set = Reflect.set;

@Component({
  selector: 'app-handsontable',
  templateUrl: './handsontable.component.html',
  styleUrls: ['./handsontable.component.scss']
})
export class HandsontableComponent implements OnInit, AfterViewInit {

  public data: any[];

  @Input() colHeaders: string[];
  @Input() columns: any[];
  @ViewChild('handsontable') hotTableComponentTest: ElementRef;
  @Input() set testData(value) {
    if (value && value.length>0 && this.hot) {
      this.hot.getInstance().loadData(value);
      this.hot.getInstance().render();
    }
  };


  hot: any;
  _data: [string[]] = [["","",""]];

  public options: any;

  constructor(private constantsService: ConstantsService) {
    this.options = {
      rowHeaders: true,
      colHeaders: true,
      stretchH: 'all',
      minRows: 5
    };
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.hot = new Handsontable(this.hotTableComponentTest.nativeElement, {
      data: this._data   ,
      rowHeaders: true,
      ...this.options,
      colHeaders: this.colHeaders
    });
  }
}
