import {AfterViewInit, Component, EventEmitter, Input, IterableDiffers, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
// import {LocalDataSource} from 'ng2-smart-table';
import {Observable} from 'rxjs';
import {LoggingService} from '../logging.service';
import {MatTableDataSource} from '@angular/material';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {debounce, debounceTime} from 'rxjs/internal/operators';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss']
})
export class SmartTableComponent implements OnInit, AfterViewInit {

  formDirty = false;
  @Output() dataValue$ = new EventEmitter();
  ngAfterViewInit(): void {
    this.tableForm.valueChanges.pipe(debounceTime(1000)).subscribe((formData) => {
      try {
        let cleanedFilterData = this.removeEmptyKeyValues(formData);
        /*if at any moment, filter data is empty => perform search in db*/
        if(Object.keys(cleanedFilterData).length ===0){
          this.performSearch({page:1});
        }
        let searchDataClone = this.filterTableData(this.tableData, {...formData});
        this.dataSource = new MatTableDataSource(searchDataClone);
      } catch (e) {
        console.log(e);
      }
    });
  }

  log(x) {
    console.log(this._data);
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

  enterPressedOnFilters(){
    if(this.tableForm.touched){
      this.currentPage = 1;
      this.tableForm.form.markAsUntouched();
    }
    let searchFormData = this.tableForm.value;
    this.removeEmptyKeyValues(searchFormData);
    let obj = this.replaceDisplayKeyByOriginalKey(searchFormData);
    this.performSearch({...obj, page: this.currentPage});
  }

  performSearch(filterObj:object) {
    // if(this.tableForm.touched){
    //   this.currentPage = 1;
    //   this.tableForm.form.markAsUntouched();
    // }
    // let searchFormData = this.tableForm.value;
    // this.removeEmptyKeyValues(searchFormData);
    // let obj = this.replaceDisplayKeyByOriginalKey(searchFormData);
    // this.performSearchInDB$.emit({...obj, page: this.currentPage});
    this.performSearchInDB$.emit(filterObj);

  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource;// = new MatTableDataSource(ELEMENT_DATA);

  tableData;
  displayKeyOriginalKeyDict: any = {};


  @Input() set data(dataValue: any[]) {

    if (!dataValue) {
      return;
    }
    this._data = dataValue;
    this.dataSource = new MatTableDataSource(dataValue);
    if(dataValue.length===0){
      return;
    }
    this.displayedColumns = Object.keys(dataValue[0]).filter((key) => {
      return dataValue[0][key].hasOwnProperty('value') && dataValue[0][key].hasOwnProperty('type');
    });

    this.tableData = dataValue;

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

  totalRows;
  @Input() showRefreshButton = false;

  _data: any = [{}];
  iterableDiffer;

  @Output() rowClicked$ = new EventEmitter();
  @Output() refreshData$ = new EventEmitter();
  @Output() performSearchInDB$ = new EventEmitter();
  @Output() pageChanged$ = new EventEmitter();

  @ViewChild('tableForm') tableForm: NgForm;
  @Input() showSearchInDbButton = false;

  @Input() set totalRecords(value) {

    setTimeout(() => {
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

  positionFilter = new FormControl();
  nameFilter = new FormControl();

  // filteredValues = {
  //   position: '', name: '', weight: '',
  //   symbol: '', topFilter: false
  // };

  filteredValues = {};

  actionIconClicked(session, action: any, event) {
    this.customActionEvents.emit({data: session, action});
    event.stopPropagation();
  }

  ngOnInit() {
  }

  // performSearchInDB() {
  //   const inputs = document.querySelectorAll('.ng2-smart-filter input');
  //   const inputsCount = document.querySelectorAll('.ng2-smart-filter input').length;
  //   const obj = {};
  //   for (let i = 0; i < inputs.length; ++i) {
  //     const input$: any = inputs[i];
  //     obj[input$.placeholder] = input$.value;
  //   }
  //   this.performSearchInDB$.emit(obj);
  // }

  onUserRowSelect(event): void {
    LoggingService.log('row clicked');
    this.rowClicked$.emit(event);
  }

  goToNextPage() {
    if (this.currentPage < this.totalPageCount) {
      this.goToPage(Math.min(this.totalPageCount, this.currentPage + 1));
    }
    // this.tableForm.resetForm();
  }

  goToPrevPage() {
    if (this.currentPage >= 2) {
      this.goToPage(Math.max(0, this.currentPage - 1));
    }
    // this.tableForm.resetForm();
  }

  goToPage(currentPage) {

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
    // this.pageChanged$.emit({page: currentPage,  ...this.tableForm.value});
    this.performSearch({page:currentPage});
    // this.tableForm.resetForm();
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
            rowDataObj[searchKey]['searchValue'].toString().includes(searchDataClone[searchKey]);
        } else if (rowDataObj[searchKey]['dateRange'] === true) {
          debugger;
          let filterDateRangeObj: { begin: Date, end: Date } = formData[searchKey];
          let startTimeStamp: number = new Date(filterDateRangeObj.begin).getTime();
          let endTimeStamp: number = (this.addADayToDate(new Date(filterDateRangeObj.end))).getTime();
          let cellValueTimeStamp = new Date(rowDataObj[searchKey].value).getTime();
          shouldInclude = startTimeStamp <= cellValueTimeStamp && endTimeStamp >= cellValueTimeStamp
        } else {
          shouldInclude = false;
        }
      }
      return shouldInclude;
    });
  }

  addADayToDate(date: Date):Date{
    return new Date(date.setDate(date.getDate() + 1))
  }

  sortDirAsc = 1;
  sort(key){

    this.sortDirAsc = this.sortDirAsc * -1;
    let tableData = this.tableData;
    this.tableData =
      tableData.sort((row1, row2)=>{
        let sortAsc:number = row1[key].value > row2[key].value?1:-1;
        return sortAsc * this.sortDirAsc;
    });
    // console.log(tableData);
    this.dataSource = new MatTableDataSource(tableData);
    // this.tableData = [...tableData];
  }


  handleDataValueClicked(event){
    debugger;
    let dataValue =  event.target.getAttribute("data-value");
    if(dataValue){
      this.dataValue$.emit(dataValue);
    }
  }


}

