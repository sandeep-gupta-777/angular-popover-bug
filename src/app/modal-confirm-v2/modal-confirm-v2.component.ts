import {Component, EventEmitter, Inject, OnInit, Output, TemplateRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../core/view-bots/create-bot-dialog/create-bot-dialog.component';

@Component({
  selector: 'app-modal-confirm-v2',
  templateUrl: './modal-confirm-v2.component.html',
  styleUrls: ['./modal-confirm-v2.component.scss']
})
export class ModalConfirmV2Component implements OnInit {
    ngOnInit(): void {
        // throw new Error("Method not implemented.");
    }

  templateRef: TemplateRef<any>;

  dataCopy: any;
  inputData = '';
  formGroup: FormGroup;
  @Output() actionItemClicked$ = new EventEmitter();
  preCloseFn: Function;
  // @ViewChild('inputForm') Form: NgForm;
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.dataCopy = this.data;
    this.formGroup = (<any>this.data).formGroup;
    this.preCloseFn = (<any>this.data).preCloseFn;
    this.templateRef = (<any>this.data).templateRef;
  }


  closeDialog(data: any) {
    this.dialogRef.close(data);
  }

  showError = false;

  attemptToClose() {

    this.preCloseFn();
  }

}
