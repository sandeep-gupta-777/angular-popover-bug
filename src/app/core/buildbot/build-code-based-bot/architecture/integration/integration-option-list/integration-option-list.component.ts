import {AfterContentInit, AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngxs/store';
import {IBot, IBotVersionResult} from '../../../../../interfaces/IBot';
import {IIntegrationOption} from '../../../../../../../interfaces/integration-option';
import {SaveIntegrationInfo} from '../../../../ngxs/buildbot.action';

@Component({
  selector: 'app-integration-option-list',
  templateUrl: './integration-option-list.component.html',
  styleUrls: ['./integration-option-list.component.scss']
})
export class IntegrationOptionListComponent implements OnInit, AfterViewInit {

  isActive:boolean;
  enable = false;
  formValue:IIntegrationOption;
  @Input() bot:IBot;
  constructor(private store:Store) {}
  ngOnInit() {
    // this.formValue = <any>this.bot.channels || {};//comperror:
  }

  onChange($event){
    this.isActive  = $event;
  }

  @ViewChild("form") f:HTMLFormElement;
  click(){
    console.log(this.f.value);
  }

  ngAfterViewInit(): void {
    this.f.valueChanges.debounceTime(1000).subscribe((data:IIntegrationOption) => {
      console.log("hello");
      if(!this.f.dirty) return;
      this.store.dispatch(new SaveIntegrationInfo({data:{channels:data}}));
    });
  }

}
