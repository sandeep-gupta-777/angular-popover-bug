import {Directive, forwardRef} from '@angular/core';
import {FormControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {UtilityService} from '../../../../../../../../utility.service';

@Directive({
  selector: '[appUrlValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => UrlValidatorDirective),
    multi: true
  }]
})
export class UrlValidatorDirective implements Validator {
  constructor(private utilityService: UtilityService) {}
  validate(formControl: FormControl): ValidationErrors | null {
    return this.utilityService.imageUrlHavingValidExtnError(formControl)
      || this.utilityService.imageUrlHttpsError(formControl);
  }
}
