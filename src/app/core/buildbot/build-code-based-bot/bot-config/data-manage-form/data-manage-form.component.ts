import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IBot} from '../../../../interfaces/IBot';
import {IBasicInfo} from '../../../../../../interfaces/bot-creation';
import {SaveBasicInfo} from '../../../ngxs/buildbot.action';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-data-manage-form',
  templateUrl: './data-manage-form.component.html',
  styleUrls: ['../basic-info-form/basic-info-form.component.scss']

})
export class DataManageFormComponent implements OnInit {

  @Input() bot:IBot;
  @ViewChild('form') f:HTMLFormElement;
  constructor(private store:Store) {}


  ngOnInit() {
  }
  //
  ngAfterViewInit(): void {
    console.log(this.bot);
    this.f.valueChanges.debounceTime(1000).subscribe((data:IBasicInfo) => {
      console.log(this.f);
      if(!this.f.dirty) return;
      this.store.dispatch(new SaveBasicInfo({data}));
    });
  }

}
