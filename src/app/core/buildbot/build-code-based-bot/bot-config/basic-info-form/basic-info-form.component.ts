import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IBot} from '../../../../interfaces/IBot';
import 'rxjs/add/operator/debounceTime';
import {Store} from '@ngxs/store';
import {SaveBasicInfo} from '../../../ngxs/buildbot.action';
import {IBasicInfo} from '../../../../../../interfaces/bot-creation';

@Component({
  selector: 'app-basic-info-form',
  templateUrl: './basic-info-form.component.html',
  styleUrls: ['./basic-info-form.component.scss']
})
export class BasicInfoFormComponent implements OnInit, AfterViewInit {

  @Input() bot:IBot;
  @Output() datachanged$ = new EventEmitter<Partial<IBot>>();
  @ViewChild('form') f:HTMLFormElement;
  constructor(private store:Store) {}


  ngOnInit() {

  }

  ngAfterViewInit(): void {
    console.log(this.bot);
    this.f.valueChanges.debounceTime(1000).subscribe((data:Partial<IBot>) => {
      console.log(this.f);
      if(!this.f.dirty) return;
      // this.store.dispatch(new SaveBasicInfo({data:data}));
      this.datachanged$.emit(data);
    });
  }

}


