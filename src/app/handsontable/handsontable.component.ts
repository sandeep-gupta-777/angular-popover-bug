import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
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
  @Input() expectedCSVHeaders: string[];
  @Input() columns: any[];
  @Input() setting = {};
  @Output() rowChanged$ = new EventEmitter();
  @Output() csvUploaded$ = new EventEmitter();
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
    console.log(this.elementRef.nativeElement.clientHeight);
    this.height = (this.elementRef.nativeElement.clientHeight - 30) + 'px';//-30 is to compensate for input
    console.log(this.elementRef.nativeElement.clientWidth);
    this.width = this.elementRef.nativeElement.clientWidth + 'px';
  }

  ngAfterViewInit(): void {

    this.setHeightAndWidthofHost();

    /*when the app is reloaded we want to rerander handsontable*/
    this.eventService.rerenderHandsonTable$.emit();

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

  async openFile(inputEl) {
    try {
      let filePath = inputEl.value;
      if(!filePath || !filePath.endsWith('.csv')){
        this.utilityService.showErrorToaster('Error: File is not CSV');
        return;
      }
      debugger;
      let data:string = await this.utilityService.readInputFileAsText(inputEl);
      if(!data) return;
      data = data.trim();
      let value = UtilityService.convertCsvTextToArray(data);
          // this.testData(data1);
      this._data = value;
      let filteredTableData: string[][] = this._data;
      if (!value || !value.length || value.length == 0) {
        throw 'some error parsing file';
      }
      // this.expectedCSVHeaders = ['DateTime'];//todo: remove this
      if (this.expectedCSVHeaders) {
        /*check if this.expectedCSVHeaders is same as headers in csv*/
        let commonHeadersIndex: number[] = [];
        this._data[0].forEach((header,index) => {
          if(this.expectedCSVHeaders.find(csvHeader => csvHeader === header)){
            commonHeadersIndex.push(index)
          }
        });

        /*remove headers*/
        this._data.splice(0,1);

        filteredTableData = this._data.map((row:string[])=>{
          return row.filter((el,index)=>{
            return commonHeadersIndex.find((commonIndex) => commonIndex === index) != null;
          });
        });

      }

      if(value && value.length > 0 && filteredTableData.length === 0){
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
    const csvData = this._data;
    // const csvColumn = [1, 2, 3];
    this.utilityService.downloadArrayAsCSV(csvData, this.expectedCSVHeaders ? this.expectedCSVHeaders : []);
  }
}
