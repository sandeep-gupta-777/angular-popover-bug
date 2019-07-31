import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {ConstantsService} from '../constants.service';
import {ActivatedRoute} from '@angular/router';
import {ELogType, LoggingService} from '../logging.service';
import {EventService} from '../event.service';
import {UtilityService} from '../utility.service';
// import * as Handsontable from 'handsontable';
declare var Handsontable: any;

@Component({
  selector: 'app-handsontable',
  templateUrl: './handsontable.component.html',
  styleUrls: ['./handsontable.component.scss'],
  // host: {
    // https://stackoverflow.com/questions/34636661/how-do-i-change-the-body-class-via-a-typescript-class-angular2
    // '[class.d-flex-column-last-child-flex-grow-1]': 'true',
    // '[class]': '"d-flex-column-last-child-flex-grow-1"'
  // }
})
export class HandsontableComponent implements OnInit, AfterViewInit {
  /* https://github.com/angular/angular.io/issues/1763*/
  @HostBinding('class') hostClass = 'd-flex-column-last-child-flex-grow-1';
  public data: any[];

  renderHandsontable = true;
  @Input() height: string;
  @Input() width: string;
  @Input() colHeaders: string[];
  @Input() expectedCSVHeaders: string[];
  @Input() columns: any[];
  @Input() setting = {};
  @Output() rowChanged$ = new EventEmitter();
  @Output() csvUploaded$ = new EventEmitter();
  @Output() afterTabledataChange$ = new EventEmitter();
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


  _data: string[][] = [['blank', '', '']];

  public options: any;

  constructor(
    private constantsService: ConstantsService,
    private activatedRoute: ActivatedRoute,
    public eventService: EventService,
    private utilityService: UtilityService,
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
      setTimeout(() => {
        this.setHeightAndWidthofHost();
        setTimeout(() => {
          this.hot.getInstance().render();
          setTimeout(() => {
            this.setHeightAndWidthofHost();
            this.hot.getInstance().render();
          }, 1000);
        }, 200);
      });
    });

  }

  setHeightAndWidthofHost() {
    // console.log(this.elementRef.nativeElement.clientHeight);
    this.height = (this.elementRef.nativeElement.clientHeight - 70) + 'px'; // -70 is to compensate for input
    // console.log(this.elementRef.nativeElement.clientWidth);
    this.width = this.elementRef.nativeElement.clientWidth + 'px';
  }

  ngAfterViewInit(): void {
    console.log(this);

    this.setHeightAndWidthofHost();

    /*when the app is reloaded we want to rerander handsontable*/
    this.eventService.rerenderHandsonTable$.emit();

    setTimeout(() => {
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
        licenseKey: 'non-commercial-and-evaluation',
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
        // afterChange: ()=>{
        //   /*TODO: implement this properly*/
        //   this.rowChanged$.emit();
        // },
        afterRemoveRow: () => {
          this.rowChanged$.emit();
        },
        afterCreateRow: () => {
          this.rowChanged$.emit();
        },
        afterChange: (data) => {

          this.afterTabledataChange$.emit(data);
          this.rowChanged$.emit();
          // data of form [[row, prop, oldValue, newValue]]
          // if(data && data[1] <= 1 ){
          //   this.debouncer.next();
          // }
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

      (Handsontable.dom).addEvent(searchField, 'keyup', function (event) {
        const search = hot.getPlugin('search');
        const queryResult = search.query(this.value);
        LoggingService.log(queryResult);
        hot.render();
      });
    }, 100);
  }

  async openFile(inputEl) {

    try {
      const filePath = inputEl.value;
      if (!filePath || !filePath.endsWith('.csv')) {
        this.utilityService.showErrorToaster('Error: File is not CSV');
        return;
      }

      let data: string = await this.utilityService.readInputFileAsText(inputEl);
      if (!data) {
        return;
      }
      data = data.trim();
      const value = UtilityService.convertCsvTextToArray(data);
      this._data = value;
      let filteredTableData: string[][] = this._data;
      if (!value || !value.length || value.length === 0) {
        throw new Error('some error parsing file');
      }

      // if(!this.expectedCSVHeaders && location.search.includes('build=testing')){
      //   this.expectedCSVHeaders = ['Message', 'Expected Template'];
      // }

      // this.expectedCSVHeaders = ['DateTime'];//todo: remove this
      if (this.expectedCSVHeaders) {
        /*check if this.expectedCSVHeaders is same as headers in csv*/
        const commonHeadersIndex: number[] = [];
        this._data[0].forEach((header, index) => {
          if (this.expectedCSVHeaders.find(csvHeader => csvHeader.trim() === header.trim())) {
            commonHeadersIndex.push(index);
          }
        });

        /*remove headers*/
        this._data.splice(0, 1);

        filteredTableData = [];
        this._data.forEach((row: string[]) => {
          const x = row.filter((el, index) => {
            return commonHeadersIndex.find((commonIndex) => commonIndex === index) != null;
          });
          if (Array.isArray(x) && x.length > 0) {
            filteredTableData.push(x);
          }
        });

      }

      if (value && value.length > 0 && filteredTableData.length === 0) {
        this.utilityService.showErrorToaster('Could not find any useful data in file. Make sure CSV headers are correct.');
        return;
      }
      if (value && value.length > 0 && this.hot) {
        this.hot.getInstance().loadData(filteredTableData);
        this.hot.getInstance().render();
        setTimeout(() => {
          this.csvUploaded$.emit(filteredTableData);
        });
      }
    } catch (e) {
      LoggingService.log(e, ELogType.error);
      this.utilityService.showErrorToaster('Either empty or unparsable file');
    }
  }

  exportToCsv() {
    const csvData = JSON.parse(JSON.stringify(this._data));

    console.log(csvData);
    if (this.expectedCSVHeaders) {
      csvData.unshift(this.expectedCSVHeaders);
    }
    this.utilityService.downloadArrayAsCSV(csvData, [], 'test_data.csv');
  }

  log() {
    console.log(this);
  }
}
