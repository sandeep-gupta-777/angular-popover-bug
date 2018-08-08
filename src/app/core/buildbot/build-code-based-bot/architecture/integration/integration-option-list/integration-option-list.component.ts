import {AfterContentInit, AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngxs/store';
import {IBot, IBotVersionResult} from '../../../../../interfaces/IBot';
import {IIntegrationOption} from '../../../../../../../interfaces/integration-option';
import {SaveIntegrationInfo} from '../../../../ngxs/buildbot.action';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-integration-option-list',
  templateUrl: './integration-option-list.component.html',
  styleUrls: ['./integration-option-list.component.scss']
})
export class IntegrationOptionListComponent implements OnInit, AfterViewInit {

  isActive:boolean;
  enable = false;
  formValue/*:IIntegrationOption*/;
  @Input() bot:IBot;
  @ViewChild("form") f:NgForm;
  constructor(private store:Store) {}
  ngOnInit() {
    // debugger;
    // this.formValue = <any>this.bot.channels || {};//comperror:
  }

  onChange($event){
    this.isActive  = $event;
  }

  click(){
    console.log(this.f.value);
  }

  ngAfterViewInit(): void {
    let formData = this.formValue ={
      ...this.bot.integrations.ccsp_details,
      ...this.bot.integrations.channels,
      ...this.bot.integrations.fulfillment_provider_details
    };
    // debugger;
    // this.f.form.patchValue(formData);
    this.f.valueChanges.debounceTime(1000).subscribe((data:IIntegrationOption) => {
      console.log("hello");
      if(!this.f.dirty) return;
      this.store.dispatch(new SaveIntegrationInfo({data:{channels:data}}));
    });
  }

}
