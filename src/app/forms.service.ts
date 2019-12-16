import {Injectable} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';


@Injectable()
export class FormsService {
  static MAX_NUMBER_GENERAL = 100;
  static MIN_NUMBER_GENERAL = 0;
  static MAX_LENGTH_GENERAL = 0;
  static MIN_LENGTH_GENERAL = 0;
  static isValueAVar(value) {
    const str = value && value.trim();
    if (str.startsWith('$')) {
      return true;
    }
  }

  static lengthValidator(min, max) {
    return (formControl) => {

      const url: string = (formControl.value && formControl.value.trim() || '');
      if (FormsService.isValueAVar(url)) {
        return null;
      }
      if (url.length > max) {
        return {'error': {message: `Max ${max} chars are allowed`}};
      }
      if (url.length < min) {
        if (url.length === 0) {
          return {'error': {message: `Required`}};
        }
        return {'error': {message: `Min ${min} chars are allowed`}};
      }
      return null;
    };
  }

  static startWithAlphabetValidator() {
    return (formControl: FormControl) => {
      const url: string = formControl.value || '';
      if (FormsService.isValueAVar(url)) {
        return null;
      }
      const pattern = /^[a-z].*/i;
      return pattern.test(url) ? null : {'error': {message: 'Should start with alphabet'}};
    };
  }

  static alphanumericValidators() {
    return (formControl: FormControl) => {
      const url: string = (formControl.value && formControl.value.trim() || '');
      if (!url) {
        return null;
      }
      if (FormsService.isValueAVar(url)) {
        return null;
      }
      const pattern = /^[0-9a-z]+$/;
      return pattern.test(url) ? null : {'error': {message: 'Only alphanumeric chars allowed'}};
    };
  }

  static numberValidator(config: { max: number, min: number }) {
    return (formControl: FormControl) => {
      debugger;
      const url: number = (formControl.value || null);
      if (typeof url !== 'number') {
        return {'error': {message: 'Only number is allowed'}};
      }
      if (!url) {
        return null;
      }
      if (url > config.max) {
        return {'error': {message: `Max allowed value is ${config.max}`}};
      }
      if (url < config.min) {
        return {'error': {message: `Min allowed value is ${config.min}`}};
      }
      return null;
    };
  }

  static imageUrlHavingValidExtnErrorV2(formControl: FormControl) {
    const url: string = formControl.value;
    if (FormsService.isValueAVar(url)) {
      return null;
    }
    const pattern = /\.(gif|jpg|jpeg|tiff|png|svg)$/i;
    return pattern.test(url) ? null : {'error': {message: 'Only gif, jpg, jpeg, tiff, png, svg are allowed for images'}};
  }

  static audioUrlHavingValidExtnError(formControl: FormControl) {
    const url: string = formControl.value;
    if (FormsService.isValueAVar(url)) {
      return null;
    }
    const pattern = /\.(mp3|ogg)$/i;
    return pattern.test(url) ? null : {'error': {message: 'Only mp3, ogg are allowed for audios'}};
  }

  static videoUrlHavingValidExtnError(formControl: FormControl) {
    const url: string = formControl.value;
    if (FormsService.isValueAVar(url)) {
      return null;
    }
    const pattern = /\.(mp4|ogg|webm)$/i;
    return pattern.test(url) ? null : {'error': {message: 'Only mp4, ogg, webm are allowed for videos'}};
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

  pushFormControlItemInFormArray(formArray: FormArray, formBuilder: FormBuilder, item: any) {
    formArray.push(formBuilder.control(item));
  }

  pushFormGroupItemInFormArray(formArray: FormArray, formBuilder: FormBuilder, item: any) {
    formArray.push(formBuilder.group(item));
  }

}
