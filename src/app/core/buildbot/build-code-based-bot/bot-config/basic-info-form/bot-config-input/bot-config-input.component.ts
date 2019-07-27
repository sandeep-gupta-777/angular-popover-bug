import {AfterViewInit, Component, EventEmitter, Injector, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroupDirective, NG_VALUE_ACCESSOR, NgControl, NgForm} from '@angular/forms';
import {UiSwitchWrapperComponent} from '../ui-switch/ui-switch-wrapper.component';
import {LoggingService} from '../../../../../../logging.service';
import {UtilityService} from '../../../../../../utility.service';
import {ErrorStateMatcher} from '@angular/material';


export class ConfirmValidParentMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.invalid && control.touched;
  }
}


@Component({
  selector: 'app-bot-config-input',
  templateUrl: './bot-config-input.component.html',
  styleUrls: ['./bot-config-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: BotConfigInputComponent,
    multi: true
  },
  ]
})
export class BotConfigInputComponent implements OnInit, ControlValueAccessor, AfterViewInit {
  value;
  myConfirmValidParentMatcher = new ConfirmValidParentMatcher();
  @Input() displayName: string;
  @Input() placeholder: string;
  @Input() errors: {name: string, description: string}[] = [];
  @Output() keyDown$ = new EventEmitter();
  myObject = Object;
  @Input() isDisabled = false;
  onChanges: Function;
  ngControl: NgControl;
  @Input() isRequired = false;
  constructor(private injector: Injector) {}
  errorMessage = '';
  // myObject = Object;

  ngOnInit() {
    /*todo: detect required attribute in input here*/
    // this.ngControl = this.injector && this.injector.get(NgControl);
    // this.isRequired  = UtilityService.hasRequiredField(this.ngControl);

  }

  ngAfterViewInit() {
    // this.ngControl.valueChanges.subscribe(() => {

      // this.errorMessage = this.ngControl.hasError()
      // if (this.ngControl.errors) {
      //   this.errorMessage = Object.keys(this.ngControl.errors)[0];
      // } else {
      //   this.errorMessage = '';
      // }
    // });
  }

  keyDown(data) {
    this.keyDown$.emit(data);
  }
  valueChanged(isOn: boolean) {
    LoggingService.log(this.ngControl.errors);
    this.onChanges(isOn);
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = false;
  }

  writeValue(value: boolean): void {
    this.value = value;
  }


  registerOnChange(fn: any): void {
    this.onChanges = fn;
  }

  registerOnTouched(fn: any): void {

  }

  keyPressed($event) {

    this.keyDown$.emit($event);
    setTimeout(() => {
      this.valueChanged(this.value);
    });
  }

  log() {
    console.log(this.ngControl);
  }

}
