import {Injectable} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {isNullOrUndefined, isUndefined} from 'util';


@Injectable()
export class FormsService {
  static MAX_LENGTH_GENERAL = 64;
  static MIN_LENGTH_GENERAL = 0;
  static MIN_LENGTH_DESCRIPTION = 0;
  static MAX_LENGTH_DESCRIPTION = 400;
  static MAX_NUMBER_GENERAL = 400;
  static MIN_NUMBER_GENERAL = 0;

  static isValueAVar(value) {
    const str = value && value.trim();
    if (str.startsWith('$')) {
      return true;
    }
  }

  static lengthValidator(config: { min?: number, max?: number }) {
    const {max, min} = config;
    return (formControl) => {
      let val: any = formControl.value == null || '';
      val = (formControl.value && formControl.value.toString().trim() || '');
      if (!isNullOrUndefined(max) && val.length > max) {
        return {'error': {message: `Maximum ${max} characters allowed`}};
      }
      if (!isNullOrUndefined(min) && val.length < min) {
        if (val.length === 0) {
          return {'error': {message: `Required`}};
        }
        return {'error': {message: `Minimum ${min} characters allowed`}};
      }
      return null;
    };
  }

  static startWithHttpsValidator() {
    return (formControl: FormControl) => {
      const val: string = formControl.value || '';
      if (!val) {
        return null;
      }
      // if (FormsService.isValueAVar(val)) {
      //   return null;
      // }
      return val.startsWith('https://') ? null : {'error': {message: 'Please provide a url which starts with https'}};
    };
  }

  static endsWithImageExtensionValidator() {
    return (formControl: FormControl) => {
      const url: string = formControl.value;
      if (this.isValueAVar(url)) {
        return null;
      }
      const pattern = /\.(gif|jpg|jpeg|tiff|png|svg)$/i;
      return pattern.test(url) ? null : {'error': {message: 'Only gif, jpg, jpeg, tiff, png, svg are allowed for images'}};
    };
  }

  static startWithAlphanumericValidator() {
    return (formControl: FormControl) => {
      const val: string = formControl.value || '';
      if (!val) {
        return null;
      }
      // if (FormsService.isValueAVar(val)) {
      //   return null;
      // }

      const pattern = /^[a-zA-Z1-9].*/i;
      return pattern.test(val) ? null : {'error': {message: 'First letter should be alphanumeric'}};
    };
  }

  static alphanumericValidators() {
    return (formControl: FormControl) => {
      const val: string = (formControl.value && formControl.value.trim() || '');
      if (!val) {
        return null;
      }
      // if (FormsService.isValueAVar(val)) {
      //   return null;
      // }
      const pattern = /^[0-9a-zA-Z]+$/;
      return pattern.test(val) ? null : {'error': {message: 'Only alphanumeric chars allowed'}};
    };
  }

  static startWithAlphabetValidators() {
    return (formControl: FormControl) => {
      const val: string = (formControl.value && formControl.value.trim() || '');
      if (!val) {
        return null;
      }
      const pattern = /^[a-zA-Z].*/i;
      return pattern.test(val) ? null : {'error': {message: 'First letter should be alphabet'}};
    };
  }

  static emailValidators() {
    return (formControl: FormControl) => {
      const val: string = (formControl.value && formControl.value.trim() || '');
      if (!val) {
        return null;
      }
      // if (FormsService.isValueAVar(val)) {
      //   return null;
      // }
      const pattern = /\S+@\S+\.\S+/;
      return pattern.test(val) ? null : {'error': {message: 'Invalid email format'}};
    };
  }

  static numberValidator(config?: { max?: number, min?: number, intOnly?: boolean }) {
    if (!config) {
      config = {max: null, min: null, intOnly: true};
    }
    config = {
      min: config.min,
      max: config.max,
      intOnly: (config.intOnly === undefined || config.intOnly === null) ? true : config.intOnly
    };
    return (formControl: FormControl) => {
      debugger;
      const val: string | number = (isNullOrUndefined(formControl.value) ? null : formControl.value);
      if (val === null || val === undefined || val === '') {
        return null;
      }
      if (typeof val !== 'number') {
        return {'error': {message: 'Only numbers are allowed'}};
      }
      if (config.intOnly) {
        if (!Number.isInteger(val)) {
          return {'error': {message: 'Only integers are allowed'}};
        }
      }
      if (!isNullOrUndefined(config.max) && val > config.max) {
        return {'error': {message: `Must be less than  ${config.max}`}};
      }
      if (!isNullOrUndefined(config.min) && val < config.min) {
        return {'error': {message: `Must be greater than ${config.min}`}};
      }
      return null;
    };
  }

  static imageUrlHavingValidExtnErrorV2() {
    return (formControl: FormControl) => {
      const val: string = formControl.value;
      if (!val) {
        return null;
      }
      // if (FormsService.isValueAVar(val)) {
      //   return null;
      // }
      const pattern = /\.(gif|jpg|jpeg|tiff|png|svg)$/i;
      return pattern.test(val) ? null : {'error': {message: 'Only gif, jpg, jpeg, tiff, png, svg are allowed for images'}};
    };
  }

  static audioUrlHavingValidExtnError(formControl: FormControl) {
    const val: string = formControl.value;
    if (FormsService.isValueAVar(val)) {
      return null;
    }
    const pattern = /\.(mp3|ogg)$/i;
    return pattern.test(val) ? null : {'error': {message: 'Only mp3, ogg are allowed for audios'}};
  }

  static videoUrlHavingValidExtnError(formControl: FormControl) {
    const val: string = formControl.value;
    if (FormsService.isValueAVar(val)) {
      return null;
    }
    const pattern = /\.(mp4|ogg|webm)$/i;
    return pattern.test(val) ? null : {'error': {message: 'Only mp4, ogg, webm are allowed for videos'}};
  }

  static isManagerValidator(formGroup: FormGroup) {
    const formValue = formGroup.value;
    const is_manager = formValue['is_manager'];
    const child_bots = formValue['child_bots'];
    /*if is_manager = true, child_bots should have at least one value*/
    return (!is_manager || is_manager && (child_bots.length > 0)) ? null : {'isManagerError': true};
  }

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  getCodeInputForm() {
    this.formBuilder.group({
      df_template: [''],
      df_rules: [''],
      generation_rules: [''],
      generation_templates: [''],
      workflow: [''],
      is_ui_view: '',
    });
    return this.formBuilder.group({
      df_template: [''],
      df_rules: [''],
      generation_rules: [''],
      generation_templates: [''],
      workflow: [''],
      is_ui_view: '',
    });
  }

  static markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        FormsService.markFormGroupTouched(control);
      }
    });
  }

  pushFormControlItemInFormArray(formArray: FormArray, formBuilder: FormBuilder, item: any) {
    formArray.push(formBuilder.control(item));
  }

  pushFormGroupItemInFormArray(formArray: FormArray, formBuilder: FormBuilder, item: any) {
    formArray.push(formBuilder.group(item));
  }

}
