import {AfterViewInit, Component, EventEmitter, Input, IterableDiffers, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
// import {LocalDataSource} from 'ng2-smart-table';
import {Observable} from 'rxjs';
import {LoggingService} from '../logging.service';
import {MatTableDataSource} from '@angular/material';
import {FormControl, NgForm} from '@angular/forms';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss']
})
export class SmartTableComponent implements OnInit, AfterViewInit {


  filterTableData(tableData, formData){
    let searchDataClone =this.removeEmptyKeyValues(formData);
    return tableData.filter((rowDataObj) => {
      let shouldInclude = true;
      for (let searchKey in searchDataClone) {
        if (this.isValidValue(rowDataObj[searchKey])) {
          shouldInclude = shouldInclude  &&
            // (rowDataObj[searchKey]['value'].toString().includes(searchDataClone[searchKey]) ||
            rowDataObj[searchKey]['searchValue'].toString().includes(searchDataClone[searchKey]);
        }else {
          shouldInclude = false;
          break;
        }
      }
      return shouldInclude;
    });
  }

  ngAfterViewInit(): void {
    this.tableForm.valueChanges.subscribe((formData) => {
      // this.dataSource = new MatTableDataSource(val);
      try {
        let searchDataClone = this.filterTableData(this.tableData,{...formData});
        this.dataSource = new MatTableDataSource(searchDataClone);
      } catch (e) {
        console.log(e);
      }
    });
  }
  log(x){
    console.log(x);
  }

  removeEmptyKeyValues(valClone){
    for (let key in valClone){
      if(!valClone[key]){
        delete  valClone[key];
      }
    }
    return valClone;
  }

  isValidValue(val){
    return val!=="" && val!==undefined && val!==null;
  }
  createDisplayKeyOriginalKeyDict(dataValue){
    let obj = {};

    Object.keys(dataValue[0]).forEach((displayKey)=>{
      obj[displayKey] = dataValue[0][displayKey]['originalKey']
    });
    return obj;
  }

  replaceDisplayKeyByOriginalKey(searchFormData){
    let obj = {};
    for(let displayKey in searchFormData){
      obj[this.displayKeyOriginalKeyDict[displayKey]] = searchFormData[displayKey];
    }
    return obj;
  }

  performSearch(){
    let searchFormData = this.tableForm.value;
    this.removeEmptyKeyValues(searchFormData);
    let obj = this.replaceDisplayKeyByOriginalKey(searchFormData);
    this.performSearchInDB$.emit(obj);

  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource;// = new MatTableDataSource(ELEMENT_DATA);

  tableData;
  displayKeyOriginalKeyDict:any = {};


  @Input() set data(dataValue:any[]) {
    this._data = dataValue;
    this.dataSource = new MatTableDataSource(dataValue);
    this.displayedColumns = Object.keys(dataValue[0]).filter((key)=>{
      return dataValue[0][key].hasOwnProperty("value") && dataValue[0][key].hasOwnProperty("type")
    });

    this.tableData = dataValue;

    this.displayKeyOriginalKeyDict = this.createDisplayKeyOriginalKeyDict(dataValue);
    if (!dataValue) {
      return;
    }

    try {
      let formData = this.tableForm && this.tableForm.value;
      if(formData){
        let searchDataClone = this.filterTableData(dataValue,{...formData});
        this.dataSource = new MatTableDataSource(searchDataClone);
      }
    } catch (e) {
      console.log(e);
    }
    this._data = dataValue;
    // this.source.load(this._data);
    // this.source.refresh();
  }

  totalRows;
  @Input() showRefreshButton = false;

  _data: any = [{}];
  iterableDiffer;

  // @Input() settings: any;
  @Input() set settings(value: { 'columns': any, 'actions': any, 'pager': any, 'rowClassFunction': any }) {
    // this.displayedColumns = Object.keys(value.columns);
  };

  @Output() rowClicked$ = new EventEmitter();
  @Output() refreshData$ = new EventEmitter();
  @Output() performSearchInDB$ = new EventEmitter();
  @Output() pageChanged$ = new EventEmitter();
  // source: LocalDataSource = new LocalDataSource();
  // @Input() totalRecords: number = 10;
  x;

  @ViewChild('tableForm') tableForm: NgForm;
  @Input() showSearchInDbButton = false;

  @Input() set totalRecords(value) {

    debugger;
    this.x = value;
    // this.source.load(this._data);
    this.totalPageCount = Math.ceil(value / this.recordsPerPage);
    const start = 1;
    const end = Math.min(this.totalPageCount, 5);
    this.createPaginationArray(start, end);
  }

  paginationArr = [];
  @Input() currentPage = 1;
  @Input() recordsPerPage = 10;
  @Output() customActionEvents = new EventEmitter();
  totalPageCount;
  math = Math;

  constructor(private _iterableDiffers: IterableDiffers) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  positionFilter = new FormControl();
  nameFilter = new FormControl();

  // filteredValues = {
  //   position: '', name: '', weight: '',
  //   symbol: '', topFilter: false
  // };

  filteredValues = {};

  actionIconClicked (session, action :any, event){
    this.customActionEvents.emit({ data:session, action});
    event.stopPropagation();
  }

  ngOnInit() {

    LoggingService.log(this.x);
    // this.source.load(this._data);


    // /*material table starts*/
    // this.positionFilter.valueChanges.subscribe((positionFilterValue) => {
    //   this.filteredValues['position'] = positionFilterValue;
    //   this.dataSource.filter = JSON.stringify(this.filteredValues);
    //   this.filteredValues['topFilter'] = false;
    // });
    //
    // this.nameFilter.valueChanges.subscribe((nameFilterValue) => {
    //   this.filteredValues['name'] = nameFilterValue;
    //   this.dataSource.filter = JSON.stringify(this.filteredValues);
    //   this.filteredValues['topFilter'] = false;
    //
    // });

    this.dataSource.filterPredicate = this.customFilterPredicate();
    /*material table ends*/
  }

  ngDoCheck() {
    // let changes = this.iterableDiffer.diff(this._data);
    // if (changes) {
    //   ;
    //   this.source.load(this._data);
    //   LoggingService.log('Changes in data detected!');
    //   this.source.refresh();
    // }
    // this.totalRows = this.source != null ? this.source.count() : 0;

  }

  performSearchInDB() {
    if (this.totalRows === 0) {
      const inputs = document.querySelectorAll('.ng2-smart-filter input');
      const inputsCount = document.querySelectorAll('.ng2-smart-filter input').length;
      const obj = {};
      for (let i = 0; i < inputs.length; ++i) {
        const input$: any = inputs[i];
        obj[input$.placeholder] = input$.value;
      }
      this.performSearchInDB$.emit(obj);
    }
  }

  onUserRowSelect(event): void {
    LoggingService.log('row clicked');
    this.rowClicked$.emit(event);
  }

  goToNextPage() {
    if (this.currentPage < this.totalPageCount) {
      this.goToPage(Math.min(this.totalPageCount, this.currentPage + 1));
    }
  }

  goToPrevPage() {
    if (this.currentPage >= 2) {
      this.goToPage(Math.max(0, this.currentPage - 1));
    }
  }

  goToPage(currentPage) {

    this.currentPage = currentPage;
    // this.totalPageCount = Math.ceil(this.totalRecords / this.recordsPerPage);
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
    this.pageChanged$.emit(currentPage);
    // this.source.setPage(currentPage);
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

  // numFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   this.dataSource.filterPredicate = (data: any, fitlerString: string) => {

  //       return data.position == filterValue;
  //   };
  //   this.dataSource.filter = filterValue;
  // }

  customFilterPredicate() {
    const myFilterPredicate = function (data: PeriodicElement, filter: string): boolean {

      let searchString = JSON.parse(filter);
      // let nameFound = data.name.toString().trim().toLowerCase().indexOf(searchString.name.toLowerCase()) !== -1;
      // let positionFound = data.position.toString().trim().indexOf(searchString.position) !== -1;
      // if (searchString.topFilter) {
      //   return nameFound || positionFound;
      // } else {
      //   return nameFound && positionFound;
      // }
      return true;
    };
    return myFilterPredicate;
  }

  selectRow(row) {
    console.log(row);
    this.rowClicked$.emit({data: row.originalSessionData});
  }

// material table ends

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  symbol1: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 999, name: 'test', weight: 1.0079,
    symbol: 'H',
    symbol1: 'MatBadgeModuleMatBadgeModul'
  },
  {
    position: 0, name: '999', weight: 1.0079,
    symbol: 'H',
    symbol1: 'H'
  },
  {
    position: 1, name: 'Hydrogen', weight: 1.0079,
    symbol: 'H',
    symbol1: 'H'
  },
  {
    position: 2, name: 'Helium', weight: 4.0026,
    symbol: 'He',
    symbol1: 'He'
  },
  {
    position: 3, name: 'Lithium', weight: 6.941,
    symbol: 'Li',
    symbol1: 'Li'
  },
  {
    position: 4, name: 'Beryllium', weight: 9.0122,
    symbol: 'Be',
    symbol1: 'Be'
  },
  {
    position: 5, name: 'Boron', weight: 10.811,
    symbol: 'B',
    symbol1: 'B'
  },
  {
    position: 6, name: 'Carbon', weight: 12.0107,
    symbol: 'C',
    symbol1: 'C'
  },
  {
    position: 7, name: 'Nitrogen', weight: 14.0067,
    symbol: 'N',
    symbol1: 'N'
  },
  {
    position: 8, name: 'Oxygen', weight: 15.9994,
    symbol: 'O',
    symbol1: 'O'
  },
  {
    position: 9, name: 'Fluorine', weight: 18.9984,
    symbol: 'F',
    symbol1: 'F'
  },
  {
    position: 10, name: 'Neon', weight: 20.1797,
    symbol: 'Ne',
    symbol1: 'Ne'
  },
];
