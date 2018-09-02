import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ConstantsService} from '../constants.service';
// import * as Handsontable from 'handsontable';
declare var Handsontable: any;

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
  @ViewChild('handsontable_search_field') hotTableSearchField: ElementRef;
  HandsontableComponent = this;
  @Input() set testData(value) {
    this._data = value;
    if (value && value.length>0 && this.hot) {
      this.hot.getInstance().loadData(value);
      this.hot.getInstance().render();
    }
  };


  hot: any;
  _data: [string[]] = [["blank","",""]];

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
    let searchField = this.hotTableSearchField.nativeElement;
    let hot = this.hot = new Handsontable(this.hotTableComponentTest.nativeElement, {
      data: this._data   ,
      rowHeaders: true,
      ...this.options,
      colHeaders: this.colHeaders,
      contextMenu: true,
      search: true
    });

    (<any>Handsontable.dom).addEvent(searchField, 'keyup', function (event) {
      let search = hot.getPlugin('search');
      let queryResult = (<any>search).query(this.value);

      console.log(queryResult);
      hot.render();
    });
  }
}
