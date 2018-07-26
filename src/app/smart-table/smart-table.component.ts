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
}
