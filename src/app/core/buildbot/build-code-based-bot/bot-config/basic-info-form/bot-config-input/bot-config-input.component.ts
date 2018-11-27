import {Component, Injector, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from '@angular/forms';
import {UiSwitchWrapperComponent} from '../ui-switch/ui-switch-wrapper.component';
import {ObjectKeyMap} from '@ngxs/store/src/internals';
import {LoggingService} from '../../../../../../logging.service';

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
  @Input() displayName:string;
  @Input() placeholder:string;
  @Input() errors:{name:string, description:string}[] = [];
  @Input() requiredClass;/*todo: hack improve it*/
  myObject = Object;
  isDisabled = false;
  onChanges:Function;
  ngControl:NgControl;
  constructor(private injector: Injector) {
    console.log(this.ngControl);
  }

  ngOnInit() {
    this.ngControl = this.injector && this.injector.get(NgControl);
  }
  valueChanged(isOn:boolean){
    LoggingService.log(this.ngControl.errors);

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
