import {Component, EventEmitter, Input, IterableDiffers, OnChanges, OnInit, Output} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss']
})
export class SmartTableComponent implements OnInit {

  @Input() set data(value) {
    if (!value) return;
    this._data = value;
    // this.totalPageCount = Math.ceil((this.totalRecords) / this.recordsPerPage);
    this.source.load(this._data);
    this.source.refresh();
  };

  totalRows;
@Input() showRefreshButton:boolean = false;

  _data: any = [{}];
  iterableDiffer;
  @Input() settings: any;
  @Output() rowClicked$ = new EventEmitter();
  @Output() refreshData$ = new EventEmitter();
  @Output() performSearchInDB$ = new EventEmitter();
  @Output() pageChanged$ = new EventEmitter();
  source: LocalDataSource = new LocalDataSource();
  // @Input() totalRecords: number = 10;
  x;

  @Input() showSearchInDbButton:boolean = false;
  @Input() set totalRecords(value) {

    this.x = value;
    // this.source.load(this._data);
    this.totalPageCount = Math.ceil(value / this.recordsPerPage);
    let start = 1;
    let end = Math.min(this.totalPageCount, 5);
    this.createPaginationArray(start, end);
  }

  paginationArr = [];
  @Input() currentPage: number = 1;
  @Input() recordsPerPage: number = 10;
  totalPageCount;
  math = Math;
  @Output() customActionEvents = new EventEmitter();

  constructor(private _iterableDiffers: IterableDiffers) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  ngOnInit() {

    console.log(this.x);
    this.source.load(this._data);
    // this.totalPageCount = Math.ceil((this.totalRecords) / this.recordsPerPage);
    // let start = 1;
    // let end = Math.min(this.totalPageCount, 5);
    // this.createPaginationArray(start, end);
  }

  ngDoCheck() {
    // let changes = this.iterableDiffer.diff(this._data);
    // if (changes) {
    //   ;
    //   this.source.load(this._data);
    //   console.log('Changes in data detected!');
    //   this.source.refresh();
    // }
    this.totalRows = this.source != null ? this.source.count() : 0;

  }

  performSearchInDB() {
    if (this.totalRows === 0) {
      let inputs = document.querySelectorAll('.ng2-smart-filter input');
      let inputsCount = document.querySelectorAll('.ng2-smart-filter input').length;
      let obj = {};
      for (let i = 0; i < inputs.length; ++i) {
        let input$: any = inputs[i];
        obj[input$.placeholder] = input$.value;
      }
      this.performSearchInDB$.emit(obj);
    }
  }

  onUserRowSelect(event): void {
    console.log('row clicked');
    this.rowClicked$.emit(event);
  }

  goToNextPage() {
    if (this.currentPage < this.totalPageCount)
      this.goToPage(Math.min(this.totalPageCount, this.currentPage + 1));
  }

  goToPrevPage() {
    if (this.currentPage >= 2)
      this.goToPage(Math.max(0, this.currentPage - 1));
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
    console.log($event);
  }


  // settings = {
  //   columns: {
  //     _id: {//
  //       title: 'ID'
  //     },
  //     name: {//
  //       title: 'Name'
  //     },
  //     phone: {//
  //       title: 'Phone'
  //     },
  //     facebookId: {//
  //       title: 'Facebook Id'
  //     },
  //     skypeId: {//
  //       title: 'Skype Id'
  //     },
  //     botId: {
  //       title: 'U Id'
  //     },
  //     email: {//
  //       title: 'Email'
  //     },
  //     created_at: {//
  //       title: 'Created At'
  //     },
  //
  //   },
  //   // hideSubHeader: true
  //   actions: {
  //     add: false,
  //     edit: false,
  //     delete: false
  //   }
  // };

}
