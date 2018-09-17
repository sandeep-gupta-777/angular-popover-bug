import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ConstantsService} from '../constants.service';
import {ActivatedRoute} from '@angular/router';
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
  @Input() setting = {};
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

  constructor(
    private constantsService: ConstantsService,
    private activatedRoute: ActivatedRoute
  ) {
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
    let routeName = this.activatedRoute.snapshot.data['routeName'];

    let searchField = this.hotTableSearchField.nativeElement;
    let hot = this.hot = new Handsontable(this.hotTableComponentTest.nativeElement, {

      data: this._data   ,
      // rowHeaders: true,
      ...this.options,
      colHeaders: this.colHeaders,
      columns:this.columns,
      contextMenu: true,
      wordWrap: true,
      autoRowSize: true,
      search: true,
      ...this.setting

      /*https://jsfiddle.net/epjettq1/*/
      // allowHtml: true,
      // readOnly: true,
      // colHeaders: data.columns,
      // stretchH: 'all',
      // sortIndicator: true,
      // columnSorting: {
      //   column: 0,
      //   sortOrder: true
      // },
      // disableVisualSelection: true,
      // fixedColumnsLeft: 1,
      // wordWrap: true,
      // autoRowSize: true
    });

    (<any>Handsontable.dom).addEvent(searchField, 'keyup', function (event) {
      let search = hot.getPlugin('search');
      let queryResult = (<any>search).query(this.value);

      console.log(queryResult);
      hot.render();
    });
  }
}
