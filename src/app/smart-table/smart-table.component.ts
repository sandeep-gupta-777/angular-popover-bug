import {Component, EventEmitter, Input, IterableDiffers, OnInit, Output} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss']
})
export class SmartTableComponent implements OnInit {

  @Input() data:any;
  iterableDiffer;
  @Input() settings:any;
  @Output() rowClicked$ = new EventEmitter();
  source: LocalDataSource = new LocalDataSource();
  constructor(private _iterableDiffers: IterableDiffers) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  ngOnInit() {
    this.source.load(this.data);
  }

  ngDoCheck() {
    let changes = this.iterableDiffer.diff(this.data);
    if (changes) {
      console.log('Changes in data detected!');
      this.source.refresh();
    }
  }

  onUserRowSelect(event): void {
    console.log("row clicked");
    this.rowClicked$.emit(event);
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
