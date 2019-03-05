import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ELogType, LoggingService} from '../../../../../../logging.service';
import {MatSlideToggleChange} from '@angular/material';

@Component({
  selector: 'app-ui-switch',
  templateUrl: './ui-switch-wrapper.component.html',
  styleUrls: ['./ui-switch-wrapper.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: UiSwitchWrapperComponent,
    multi: true
  }]
})
export class UiSwitchWrapperComponent implements OnInit, ControlValueAccessor {
  isSwitchOn = false;
  isDisabled = false;
  onChanges: Function;
  constructor() {
  }

  valueChanged(matSlideToggleChange: MatSlideToggleChange) {
    let isOn = matSlideToggleChange.checked;
    try {
      this.onChanges(isOn);
    } catch (e) {
      LoggingService.log(e, ELogType.error);
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(isSwitchOn: boolean): void {
    this.isSwitchOn = !!isSwitchOn;
  }

  ngOnInit() {
  }

  registerOnChange(fn: any): void {
    this.onChanges = fn;
  }

  registerOnTouched(fn: any): void {

  }


}
