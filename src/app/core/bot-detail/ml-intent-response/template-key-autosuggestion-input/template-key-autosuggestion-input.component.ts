import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {IBot} from '../../../interfaces/IBot';
import {MlReplyService} from '../../ml-reply/ml-reply.service';
import {UtilityService} from '../../../../utility.service';
import {MatDialog} from '@angular/material';
import {map, startWith, tap} from 'rxjs/operators';
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
  @Input() fc: FormControl;
  @Input() bot: IBot;
  @Input() loading: boolean;
  @Input() placeholderText: string;
  _keys = [];
  @Output() createTemplateKey$ = new EventEmitter();
  @Output() valueUpdated$ = new EventEmitter();

  @Input() set keys(val: string[]) {
    this._keys = val;
    this.fc.patchValue(this.fc.value);
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
    this.filteredOptions = this.fc.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value)),
      );
    this.fc.valueChanges.subscribe((val) => {
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

  async showModalForTemplateKey() {

    const data = await this.showCreateOrEditTemplateKeyModel();
    if (data) {
      this.createTemplateKey$.emit({data, modalRefWrapper: this.modalRefWrapper, fc: this.fc});
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
      template_key: ['', [this.templateKeyExistsValidator(), FormsService.startWithAlphanumericValidator(), FormsService.lengthValidator({max: FormsService.MIN_LENGTH_DESCRIPTION})]],
      text_response: ['', [FormsService.startWithAlphanumericValidator(), FormsService.lengthValidator({max: FormsService.MIN_LENGTH_DESCRIPTION})]],
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
