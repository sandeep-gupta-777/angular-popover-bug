import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IBot} from '../../../../interfaces/IBot';
import {IBasicInfo, ISaveDataManagment} from '../../../../../../interfaces/bot-creation';
import { SaveDataManagment} from '../../../ngxs/buildbot.action';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-data-manage-form',
  templateUrl: './data-manage-form.component.html',
  styleUrls: ['../basic-info-form/basic-info-form.component.scss']

})
export class DataManageFormComponent implements OnInit {

  @Input() bot:IBot;
  @ViewChild('form') f:HTMLFormElement;
  @Output() datachanged$ = new EventEmitter<Partial<IBot>>();

  constructor(private store:Store) {}


  ngOnInit() {
    // this.bot
    // debugger
  }
  //
  ngAfterViewInit(): void {
    console.log(this.bot);
    this.f.valueChanges.debounceTime(1000).subscribe((data:ISaveDataManagment) => {
      // debugger;
      console.log(this.f);
      if(!this.f.dirty) return;
      // this.store.dispatch(new SaveDataManagment({data}));
      this.datachanged$.emit(data);
    });
  }

}
