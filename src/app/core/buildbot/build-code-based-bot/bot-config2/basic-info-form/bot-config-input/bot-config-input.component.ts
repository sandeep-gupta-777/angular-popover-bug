import {Component, Injector, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';
import {UiSwitchWrapperComponent} from '../ui-switch/ui-switch-wrapper.component';

@Component({
  selector: 'app-bot-config-input',
  templateUrl: './bot-config-input.component.html',
  styleUrls: ['./bot-config-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: BotConfigInputComponent,
    multi: true
  }]
})
export class BotConfigInputComponent implements OnInit,ControlValueAccessor {
  value;
  @Input() displayName:string
  @Input() placeholder:string
  isDisabled = false;
  onChanges:Function;
  ngControl:NgControl;
  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.ngControl = this.injector && this.injector.get(NgControl);
  }
  valueChanged(isOn:boolean){
    this.onChanges(isOn);
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(value: boolean): void {
    this.value = value;
  }


  registerOnChange(fn: any): void {
    this.onChanges = fn;
  }

  registerOnTouched(fn: any): void {

  }

}
