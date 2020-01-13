import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {IBot} from '../../../interfaces/IBot';
import {MlReplyService} from '../../ml-reply/ml-reply.service';
import {UtilityService} from '../../../../utility.service';
import {MatDialog} from '@angular/material';
import {debounceTime, map, startWith, tap} from 'rxjs/operators';
import {FormsService} from '../../../../forms.service';
import {ModalConfirmV2Component} from '../../../../modal-confirm-v2/modal-confirm-v2.component';

@Component({
  selector: 'app-template-key-autosuggestion-input',
  templateUrl: './template-key-autosuggestion-input.component.html',
  styleUrls: ['./template-key-autosuggestion-input.component.scss']
})
export class TemplateKeyAutosuggestionInputComponent implements OnInit {

  modalRefWrapper = {ref: null};
  @ViewChild('templateRef') templateRef: TemplateRef<any>;
  _fc: FormControl;
  @Input() set fc(val: FormControl) {
    this._fc = val;
  }

  REMOVE_ME = '                            ___________';

  @Input() maxlengthValue: string;
  @Input() bot: IBot;
  @Input() loading: boolean;
  @Input() placeholderText: string;
  _keys = [];
  @Output() createTemplateKey$ = new EventEmitter();
  @Output() valueUpdated$ = new EventEmitter();

  @Input() set keys(val: string[]) {
    this._keys = val;
    this._fc && this._fc.patchValue(this._fc.value);
  }

  filteredOptions;

  constructor(
    private mlReplyService: MlReplyService,
    private utilityService: UtilityService,
    private matDialog: MatDialog,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {

    this.filteredOptions = this._fc.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value)),
      );
    this._fc.valueChanges.pipe(debounceTime(50)).subscribe((val: string) => {
      if (val.endsWith(this.REMOVE_ME)) {
        this._fc.patchValue(val.replace(this.REMOVE_ME, ''));
      }
      this.valueUpdated$.emit(val);
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value && value.toLowerCase && value.toLowerCase();
    if (!this._keys) {
      return [];
    }
    return this._keys.filter(option => option && option.toLowerCase().includes(filterValue));
  }

  async showModalForTemplateKey(event?) {
    if ((event && this._fc.value.endsWith(this.REMOVE_ME)) || !event) {
      const data = await this.showCreateOrEditTemplateKeyModel();
      if (data) {
        this.createTemplateKey$.emit({data, modalRefWrapper: this.modalRefWrapper, fc: this._fc});
      }
    }
  }


  templateKeyExistsValidator() {
    return (formControl: FormControl) => {
      if (!formControl.value || !formControl.value.trim || !formControl.value.trim()) {
        return {
          error: {message: 'Required'}
        };
      }
      if (this._keys.find((key) => key === formControl.value)) {
        return {
          error: {message: 'Template key already exists'}
        };
      }
    };
  }

  formGroupTemplateKeyCreation: FormGroup;

  showCreateOrEditTemplateKeyModel() {
    const dialogRefWrapper = this.modalRefWrapper;
    const title = 'Create a new template key';
    //  this.modalRef = this.modalService.show(template, {class: 'modal-md'});
    this.formGroupTemplateKeyCreation = this.formBuilder.group({
      template_key: ['', [this.templateKeyExistsValidator(), FormsService.startWithAlphanumericValidator(), FormsService.lengthValidator({max: 64})]],
      text_response: ['', [FormsService.startWithAlphanumericValidator(), FormsService.lengthValidator({max: 2000})]],
    });
    return new Promise((resolve, reject) => {
      this.utilityService.openDialog({
        dialogRefWrapper: dialogRefWrapper,
        classStr: 'primary-modal-header-border',
        data: {
          actionButtonText: `Create`,
          message: null,
          title: 'Create a new template key',
          description: 'Please ensure that the template key name is unique',
          formGroup: this.formGroupTemplateKeyCreation,
          templateRef: this.templateRef,
          isActionButtonDanger: false,
          preCloseFn: () => {
            FormsService.markFormGroupTouched(this.formGroupTemplateKeyCreation);
            if (this.formGroupTemplateKeyCreation.valid) {
              resolve(this.formGroupTemplateKeyCreation.value);
            }
          }
        },
        dialog: this.matDialog,
        component: ModalConfirmV2Component
      });
    });
  }

  ignoreEnter($event) {
    $event.preventDefault();
  }
}
