import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../core/view-bots/create-bot-dialog/create-bot-dialog.component';

@Component({
  selector: 'app-modal-wrapper',
  templateUrl: './modal-wrapper.component.html',
})
export class ModalWrapperComponent {

  @Output() actionItemClicked$ = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

}
