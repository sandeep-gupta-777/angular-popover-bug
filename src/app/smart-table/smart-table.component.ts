import {AfterViewInit, Component, EventEmitter, Input, IterableDiffers, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
// import {LocalDataSource} from 'ng2-smart-table';
import {Observable} from 'rxjs';
import {LoggingService} from '../logging.service';
import {MatTableDataSource} from '@angular/material';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {debounce, debounceTime, distinctUntilChanged, map, tap} from 'rxjs/internal/operators';
import {UtilityService} from '../utility.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';

export enum ESortDir {
  ASC,
  DES,
}


@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss']
})
export class SmartTableComponent implements OnInit, AfterViewInit {

  @Output() dataValue$ = new EventEmitter();
  formDirty = false;

  tableFormTouched = false;/*because this.tableForm.touched is showing weird behaviour; only works when console is opened*/
  ngAfterViewInit(): void {
    this.tableForm &&
    this.tableForm.valueChanges.pipe(
      map((obj) => this.removeEmptyKeyValues(UtilityService.cloneObj(obj))),
      tap((obj) => {
        this.formDirty = Object.keys(obj).length > 0;
      }),
      distinctUntilChanged((obj1, obj2) => {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
      }),
    ).subscribe((formData) => {
      this.formData = formData;

      /*if at any moment, filter data is empty => perform search in db*/
      // if (this.tableForm.touched && Object.keys(formData).length === 0) {
      if (this.tableForm.dirty && Object.keys(formData).length === 0) {
        this.performSearch({page: 1});
      }

      // if (!this.tableForm.touched) {
      //   console.log('inside value changes', this.tableForm.touched, this.tableForm);
      // }
      let searchDataClone = this.filterTableData(this.tableData, {...formData});
      this.dataSource = new MatTableDataSource(searchDataClone);

    });
  }

  log(x) {
    console.log(x);
    // alert();
  }

  removeEmptyKeyValues(valClone) {
    for (let key in valClone) {
      if (!valClone[key]) {
        delete valClone[key];
      }
    }
    return valClone;
  }

  isValidValue(val) {
    return val !== '' && val !== undefined && val !== null;
  }

  createDisplayKeyOriginalKeyDict(dataValue) {
    let obj = {};

    Object.keys(dataValue[0]).forEach((displayKey) => {
      obj[displayKey] = dataValue[0][displayKey]['originalKey'];
    });
    return obj;
  }

  replaceDisplayKeyByOriginalKey(searchFormData) {
    let obj = {};
    for (let displayKey in searchFormData) {
      obj[this.displayKeyOriginalKeyDict[displayKey]] = searchFormData[displayKey];
    }
    return obj;
  }

  enterPressedOnFilters() {
    this.performSearch({page: 1});
  }

  performSearch(filterObj: object = {}) {

    let formData = this.replaceDisplayKeyByOriginalKey(this.formData);
    let page = (<any>filterObj).page;
    if (page) this.currentPage = page;
    this.performSearchInDB$.emit({...formData, page: this.currentPage || 1, ...filterObj});

  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource;// = new MatTableDataSource(ELEMENT_DATA);

  tableData;
  displayKeyOriginalKeyDict: any = {};


  @Input() set data(dataValue: any[]) {
    if (!dataValue) {
      return;
    }

    console.log(dataValue);
    this._data = dataValue;
    this.dataSource = new MatTableDataSource(dataValue);
    if (dataValue.length === 0) {
      return;
    }
    this.displayedColumns = Object.keys(dataValue[0]).filter((key) => {
      return dataValue[0][key].hasOwnProperty('value') && dataValue[0][key].hasOwnProperty('type');
    });


    this.tableData = dataValue;
    if (this.sortedCol && this.sortDir) {
      this.sort(this.sortedCol, this.sortDir);
    }
    this.displayKeyOriginalKeyDict = this.createDisplayKeyOriginalKeyDict(dataValue);

    try {
      let formData = this.tableForm && this.tableForm.value;
      if (formData) {
        let searchDataClone = this.filterTableData(dataValue, {...formData});
        this.dataSource = new MatTableDataSource(searchDataClone);
      }
    } catch (e) {
      console.log(e);
    }
    this._data = dataValue;
  }

  @Input() showRefreshButton = false;

  _data: any = [{}];

  @Output() rowClicked$ = new EventEmitter();
  @Output() refreshData$ = new EventEmitter();
  @Output() performSearchInDB$ = new EventEmitter();
  @Output() pageChanged$ = new EventEmitter();

  @ViewChild('tableForm') tableForm: NgForm;
  @Input() showSearchInDbButton = false;
  _totalRecords: number;
  @Input() set totalRecords(value: number) {

    setTimeout(() => {
      this._totalRecords = value;
      this.totalPageCount = Math.ceil(value / this.recordsPerPage);
      const start = 1;
      const end = Math.min(this.totalPageCount, 5);
      this.createPaginationArray(start, end);
    });
  }

  paginationArr = [];
  @Input() currentPage = 1;
  @Input() recordsPerPage = 10;
  @Output() customActionEvents = new EventEmitter();
  totalPageCount;
  @Input() settings;
  math = Math;
  formData;

  actionIconClicked(session, action: any, event) {
    this.customActionEvents.emit({data: session, action});
    event.stopPropagation();
  }

  ngOnInit() {
  }

  onUserRowSelect(event): void {
    LoggingService.log('row clicked');
    this.rowClicked$.emit(event);
  }

  goToNextPage() {
    if (this.currentPage < this.totalPageCount) {
      this.goToPage({pageIndex: Math.min(this.totalPageCount, this.currentPage + 1)});
    }
  }

  goToPrevPage() {
    if (this.currentPage >= 2) {
      this.goToPage({pageIndex: Math.max(0, this.currentPage - 1)});
    }
  }

  goToPage(pageData: { length?: number, pageIndex?: number, pageSize?: number, previousPageIndex?: number }) {

    let currentPage: number = pageData.pageIndex + 1;/*angular paginator starts from zero*/

    this.currentPage = currentPage;
    let start = 0, end = 0;
    if (currentPage <= 3) {
      start = 1;
      end = Math.min(this.totalPageCount, 5);
    } else if (currentPage >= this.totalPageCount - 2) {
      end = this.totalPageCount;
      start = Math.max(this.currentPage - 2, 0);
    } else {
      start = this.currentPage - 2;
      end = this.currentPage + 2;
    }
    this.createPaginationArray(start, end);

    this.pageChanged$.emit({page: currentPage});//TODO: this is just for report and knowledge base...remove it later
    this.performSearch({page: currentPage});
  }

  createPaginationArray(start, end) {
    this.paginationArr.length = 0;
    for (let i = start; i <= end; ++i) {
      this.paginationArr.push(i);
    }
  }

  onCustom($event) {
    LoggingService.log($event);
  }


// material table starts
  applyFilter(filterValue: string) {
    let filter = {
      name: filterValue.trim().toLowerCase(),
      position: filterValue.trim().toLowerCase(),
      topFilter: true
    };
    this.dataSource.filter = JSON.stringify(filter);
  }

  selectRow(row) {
    console.log(row);
    this.rowClicked$.emit({data: row.originalSessionData});
  }

  filterTableData(tableData, formData) {

    let searchDataClone = this.removeEmptyKeyValues(formData);
    return tableData.filter((rowDataObj) => {
      let shouldInclude = true;
      for (let searchKey in searchDataClone) {
        let x = this.isValidValue(rowDataObj[searchKey]) && rowDataObj[searchKey]['search'];
        if (x) {
          shouldInclude = shouldInclude &&
            rowDataObj[searchKey]['searchValue'].toString().toLowerCase().toString().includes(searchDataClone[searchKey].toLowerCase());
        } else if (rowDataObj[searchKey]['dateRange'] === true) {

          let filterDateRangeObj: { begin: Date, end: Date } = formData[searchKey];
          let startTimeStamp: number = new Date(filterDateRangeObj.begin).getTime();
          let endTimeStamp: number = (this.addADayToDate(new Date(filterDateRangeObj.end))).getTime();
          let cellValueTimeStamp = new Date(rowDataObj[searchKey].value).getTime();
          shouldInclude = startTimeStamp <= cellValueTimeStamp && endTimeStamp >= cellValueTimeStamp;
        } else {
          shouldInclude = false;
        }
      }
      return shouldInclude;
    });
  }

  addADayToDate(date: Date): Date {
    return new Date(date.setDate(date.getDate() + 1));
  }

  sortDir = ESortDir.ASC;
  myESortDir = ESortDir;
  sortedCol;

  sort(key, sorDirection: ESortDir) {
    this.sortedCol = key;
    this.sortDir = sorDirection;
    // this.sortDirAsc = sorDirection === ESortDir.DES? -1:1;

    let tableData = this.tableData;
    this.tableData =
      tableData.sort((row1, row2) => {
        let sortAsc: number = row1[key].value > row2[key].value ? 1 : -1;
        return sortAsc * (sorDirection === ESortDir.ASC ? 1 : -1);
      });
    // console.log(tableData);
    this.dataSource = new MatTableDataSource(tableData);
    // this.sortDir = sorDirection;
    // this.tableData = [...tableData];
  }


  handleDataValueClicked(event) {

    let dataValue = event.target.getAttribute('data-value');
    if (dataValue) {
      this.dataValue$.emit(dataValue);
    }
  }


  refreshData() {
    this.refreshData$.emit({...this.formData, page: this.currentPage});
  }


}

