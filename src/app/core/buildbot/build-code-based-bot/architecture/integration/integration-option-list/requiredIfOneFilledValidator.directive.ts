import { Component, VERSION, ViewChild, Directive, forwardRef } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[ngModelGroup][requiredIfOneFilledValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => RequiredIfOneFilledValidator),
    multi: true
  }]
})
export class RequiredIfOneFilledValidator implements Validator {
  validate(group: AbstractControl): ValidationErrors | null {
    const controls = (group as FormGroup).controls;
    let formData = group.value;
    if(formData.enabled){
      for(let key in formData) {
        if(!formData[key])return { required: true };
      }
    }
    return null;
    // const controlNames = Object.keys(controls);
    // controlNames.shift();//enabled is not counted
    // const filledCount = controlNames.filter(name => !!controls[name].value).length
    //
    // return filledCount > 0 && filledCount < controlNames.length ? { required: true } : null;
  }
}
