import {Component, EventEmitter, Input, IterableDiffers, OnInit, Output} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss']
})
export class SmartTableComponent implements OnInit {

  @Input() set data(value){
    this._data = value;
      this.source.load(this._data);
      this.source.refresh();
  };
  _data:any;
  iterableDiffer;
  @Input() settings:any;
  @Output() rowClicked$ = new EventEmitter();
  @Output() pageChanged$ = new EventEmitter();
  source: LocalDataSource = new LocalDataSource();
  @Input() totalRecords:number = 10;
  paginationArr=[];
  currentPage:number = 1;
  recordsPerPage:number=5;
  totalPageCount;
  math = Math;
  constructor(private _iterableDiffers: IterableDiffers) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  ngOnInit() {
    this.source.load(this._data);
    let start = 1;
    this.totalPageCount = Math.ceil(this.totalRecords/this.recordsPerPage);
    let end = Math.min(this.totalPageCount,5);
    this.createPaginationArray(start,end);


  }

  ngDoCheck() {
    // let changes = this.iterableDiffer.diff(this._data);
    // if (changes) {
    //   debugger;
    //   this.source.load(this._data);
    //   console.log('Changes in data detected!');
    //   this.source.refresh();
    // }
  }

  onUserRowSelect(event): void {
    console.log("row clicked");
    this.rowClicked$.emit(event);
  }
  goToPage(currentPage){


    this.currentPage = currentPage;
    this.totalPageCount = Math.ceil(this.totalRecords/this.recordsPerPage);
    let start, end;
    if(currentPage<=3){
      start = 1;
      end = Math.min(this.totalPageCount,5);
    }else if(currentPage >= this.totalPageCount -2) {
      end = this.totalPageCount;
      start = Math.max(this.currentPage -2, 0);
    }else{
      start = this.currentPage - 2;
      end = this.currentPage + 2;
    }
    this.createPaginationArray(start,end);
    this.pageChanged$.emit(currentPage);
    // this.source.setPage(currentPage);
  }

  createPaginationArray(start,end){
    this.paginationArr.length = 0;
    for(let i = start; i <= end ;++i){
      this.paginationArr.push(i);
    }
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

  settings1 = {
    columns: {
      id: {
        title: 'ID',
        filter: false,
      },
      name: {
        title: 'Full Name',
        filter: false,
      },
      username: {
        title: 'User Name',
        filter: false,
      },
      email: {
        title: 'Email',
        filter: false,
      },
    },
  };

  data1 = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
    },
    {
      id: 11,
      name: 'Nicholas DuBuque',
      username: 'Nicholas.Stanton',
      email: 'Rey.Padberg@rosamond.biz',
    },
  ];
}
