import {Injectable} from '@angular/core';
import {FormArray, FormBuilder} from '@angular/forms';


@Injectable()
export class FormsService {

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  getCodeInputForm() {
    const codeInputForm = this.formBuilder.group({
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
