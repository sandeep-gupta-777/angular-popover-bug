import {Component, Input, OnInit} from '@angular/core';
import {UiSwitchWrapperComponent} from '../basic-info-form/ui-switch/ui-switch-wrapper.component';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-is-manager-form-control',
  templateUrl: './is-manager-form-control.component.html',
  styleUrls: ['./is-manager-form-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: IsManagerFormControlComponent,
    multi: true
  }]
})
export class IsManagerFormControlComponent implements OnInit,ControlValueAccessor {

  value;
  isDisabled = false;
  onChanges:Function;
  constructor() {}

  valueChanged(isOn:boolean){
    this.onChanges(isOn);
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(value: boolean): void {
    this.value = value;
  }

  ngOnInit() {
  }

  registerOnChange(fn: any): void {
    this.onChanges = fn;
  }

  registerOnTouched(fn: any): void {
  }

}
