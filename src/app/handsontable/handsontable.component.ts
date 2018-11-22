import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {ConstantsService} from '../constants.service';
import {ActivatedRoute} from '@angular/router';
import {LoggingService} from '../logging.service';
import {EventService} from '../event.service';
// import * as Handsontable from 'handsontable';
declare var Handsontable: any;

@Component({
  selector: 'app-handsontable',
  templateUrl: './handsontable.component.html',
  styleUrls: ['./handsontable.component.scss'],
  host: {
    //https://stackoverflow.com/questions/34636661/how-do-i-change-the-body-class-via-a-typescript-class-angular2
    '[class.d-flex-column-last-child-flex-grow-1]': 'true'
  }
})
export class HandsontableComponent implements OnInit, AfterViewInit {

  public data: any[];

  renderHandsontable = true;
  @Input() height: string;
  @Input() width: string;

  @Input() colHeaders: string[];
  @Input() columns: any[];
  @Input() setting = {};
  @Output() rowChanged$ = new EventEmitter();
  @ViewChild('handsontable') hotTableComponentTest: ElementRef;
  @ViewChild('handsontable_search_field') hotTableSearchField: ElementRef;
  hot: any;

  // HandsontableComponent = this;
  @Input() set testData(value) {
    this._data = value;
    if (value && value.length > 0 && this.hot) {
      this.hot.getInstance().loadData(value);
      this.hot.getInstance().render();
    }
  }


  _data: [string[]] = [['blank', '', '']];

  public options: any;

  constructor(
    private constantsService: ConstantsService,
    private activatedRoute: ActivatedRoute,
    public eventService: EventService,
    private elementRef: ElementRef
  ) {
    this.options = {
      rowHeaders: true,
      colHeaders: true,
      stretchH: 'all',
      minRows: 5
    };
  }

  ngOnInit(): void {
    this.eventService.rerenderHandsonTable$.subscribe(() => {
      setTimeout(()=>{
        this.setHeightAndWidthofHost();
        setTimeout(() => {
          this.hot.getInstance().render();
          setTimeout(() => {
            this.setHeightAndWidthofHost();
            this.hot.getInstance().render();
          },1000);
        },200);
      })
    });
  }

  setHeightAndWidthofHost() {
    console.log(this.elementRef.nativeElement.clientHeight);
    this.height = this.elementRef.nativeElement.clientHeight + 'px';
    console.log(this.elementRef.nativeElement.clientWidth);
    this.width = this.elementRef.nativeElement.clientWidth + 'px';
  }

  ngAfterViewInit(): void {

    this.setHeightAndWidthofHost();

    /*when the app is reloaded we want to rerander handsontable*/
    this.eventService.rerenderHandsonTable$.emit();

    debugger;
    setTimeout(() => {
      const routeName = this.activatedRoute.snapshot.data['routeName'];

      const searchField = this.hotTableSearchField.nativeElement;
      let colObject = {};
      if (this.colHeaders && this.columns) {
        colObject = {
          colHeaders: this.colHeaders,
          columns: this.columns,
        };
      }
      const hot = this.hot = new Handsontable(this.hotTableComponentTest.nativeElement, {
        data: this._data,
        // rowHeaders: true,
        ...this.options,
        // colHeaders: this.columns,
        ...colObject,
        contextMenu: true,
        modifyColWidth: function (width, col) {
          if (width > 200) {
            return 100;
          }
        },
        wordWrap: true,
        // autoRowSize: true,
        search: true,
        afterRemoveRow: () => {
          this.rowChanged$.emit();
        },
        afterCreateRow: () => {
          this.rowChanged$.emit();
        },
        ...this.setting,

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
        const search = hot.getPlugin('search');
        const queryResult = (<any>search).query(this.value);

        LoggingService.log(queryResult);
        hot.render();
      });
    }, 100);
  }
}
