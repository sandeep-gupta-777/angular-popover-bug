import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
// import {LocalDataSource} from 'ng2-smart-table';
import {LoggingService} from '../logging.service';
import {MatTableDataSource} from '@angular/material';
import {NgForm} from '@angular/forms';
import {distinctUntilChanged, map, tap} from 'rxjs/internal/operators';
import {UtilityService} from '../utility.service';

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
  paginationArr = [];
  totalPageCount;
  math = Math;
  formData;
  formDirty = false;
  myESortDir = ESortDir;
  @Input() noResultsMessage = 'No results';
  @Input() currentPage = 1;
  @Input() recordsPerPage = 10;
  @Input() settings;
  @Input() sortedCol;
  @Input() sortDir = ESortDir.ASC;
  @Output() dataValue$ = new EventEmitter();
  @Output() customActionEvents = new EventEmitter();
  @Input() showRefreshButton = false;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource; // = new MatTableDataSource(ELEMENT_DATA);

  tableData;
  displayKeyOriginalKeyDict: any = {};

  isTableEmpty;

  @Input() set data(dataValue: any[]) {
    this.isTableEmpty = true; /*initialize*/
    if (!dataValue) {
      return;
    }

    dataValue.forEach((value, index, array) => {
      Object.keys(value).forEach((key) => {
        if (key === 'originalSessionData') {
          return;
        }
        const cell = value[key];
        if (!cell.skipXssValidation) {
          cell.value = UtilityService.sanitizeHTML(cell.value);
        }
      });
    });

    this._data = dataValue;
    this.dataSource = new MatTableDataSource(dataValue);
    if (dataValue.length === 0) {
      return;
    }
    this.isTableEmpty = false;
    this.displayedColumns = Object.keys(dataValue[0]).filter((key) => {
      return dataValue[0][key].hasOwnProperty('value') && dataValue[0][key].hasOwnProperty('type');
    });


    this.tableData = dataValue;


    setTimeout(() => {
      if (this.sortedCol && this.sortDir !== undefined) {
        this.sort(this.sortedCol, this.sortDir);
      }
    });
    this.displayKeyOriginalKeyDict = this.createDisplayKeyOriginalKeyDict(dataValue);

    try {
      const formData = this.tableForm && this.tableForm.value;
      if (formData) {
        const searchDataClone = this.filterTableData(dataValue, {...formData});
        this.dataSource = new MatTableDataSource(searchDataClone);
      }
    } catch (e) {
      console.log(e);
    }
    this._data = dataValue;
  }

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

  tableFormTouched = false; /*because this.tableForm.touched is showing weird behaviour; only works when console is opened*/
  ngAfterViewInit(): void {
    if (this.tableForm) {
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

        const searchDataClone = this.filterTableData(this.tableData, {...formData});
        this.dataSource = new MatTableDataSource(searchDataClone);

      });
    }
  }

  log(x) {
    console.log(x);
    // alert();
  }

  removeEmptyKeyValues(valClone) {
    for (const key in valClone) {
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
    const obj = {};

    Object.keys(dataValue[0]).forEach((displayKey) => {
      obj[displayKey] = dataValue[0][displayKey]['originalKey'];
    });
    return obj;
  }

  replaceDisplayKeyByOriginalKey(searchFormData) {
    const obj = {};
    // for (const displayKey in searchFormData) {
    //   obj[this.displayKeyOriginalKeyDict[displayKey]] = searchFormData[displayKey];
    // }
    if (searchFormData) {
      Object.keys(searchFormData).forEach((key) => {
        obj[this.displayKeyOriginalKeyDict[key]] = searchFormData[key];
      });
    }
    return obj;
  }

  enterPressedOnFilters() {
    this.performSearch({page: 1});
  }

  performSearch(filterObj: object = {}) {

    const formData = this.replaceDisplayKeyByOriginalKey(this.formData);
    const page = (<any>filterObj).page;
    if (page) {
      this.currentPage = page;
    }
    this.performSearchInDB$.emit({...formData, page: this.currentPage || 1, ...filterObj});

  }


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

    const currentPage: number = pageData.pageIndex + 1; /*angular paginator starts from zero*/

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

    this.pageChanged$.emit({page: currentPage}); // TODO: this is just for report and knowledge base...remove it later
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
    const filter = {
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

    const searchDataClone = this.removeEmptyKeyValues(formData);
    return tableData.filter((rowDataObj) => {
      let shouldInclude = true;
      for (const searchKey of Object.keys(searchDataClone)) {
        const x = this.isValidValue(rowDataObj[searchKey]) && rowDataObj[searchKey]['search'];
        if (x) {
          shouldInclude = shouldInclude &&
            rowDataObj[searchKey]['searchValue'].toString().toLowerCase().toString().includes(searchDataClone[searchKey].toLowerCase());
        } else if (rowDataObj[searchKey]['dateRange'] === true) {

          const filterDateRangeObj: { begin: Date, end: Date } = formData[searchKey];
          const startTimeStamp: number = new Date(filterDateRangeObj.begin).getTime();
          const endTimeStamp: number = (this.addADayToDate(new Date(filterDateRangeObj.end))).getTime();
          const cellValueTimeStamp = new Date(rowDataObj[searchKey].value).getTime();
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

  sort(key, sorDirection: ESortDir) {
    debugger
    this.sortedCol = key;
    this.sortDir = sorDirection;
    // this.sortDirAsc = sorDirection === ESortDir.DES? -1:1;

    const tableData = this.tableData;

    this.tableData =
      tableData.sort((row1, row2) => {
        let originalKey1, originalValue1;
        originalKey1 = row1[key]['originalKey'];
        originalValue1 = row1.originalSessionData[originalKey1];

        let originalKey2, originalValue2;
        originalKey2 = row2[key]['originalKey'];
        originalValue2 = row2.originalSessionData[originalKey2];

        let sortAsc: number;

        if (typeof originalKey1 === 'number' && 'number' === typeof originalValue2) {
          return sortAsc * (sorDirection === ESortDir.ASC ? 1 : -1);
        } else {
          sortAsc = originalValue1.toString().toLowerCase() > originalValue2.toString().toLowerCase() ? 1 : -1;
        }
        return sortAsc * (sorDirection === ESortDir.ASC ? 1 : -1);
      });
    // console.log(tableData);
    this.dataSource = new MatTableDataSource(tableData);
    // this.sortDir = sorDirection;
    // this.tableData = [...tableData];
  }


  handleDataValueClicked(event) {

    const dataValue = event.target.getAttribute('data-value');
    if (dataValue) {
      this.dataValue$.emit(dataValue);
    }
  }


  refreshData() {
    this.refreshData$.emit({...this.formData, page: this.currentPage});
  }


}

