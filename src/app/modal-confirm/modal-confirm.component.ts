import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {EBotType} from '../utility.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../core/view-bots/create-bot-dialog/create-bot-dialog.component';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent{

  @Output() actionItemClicked$ = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    console.log(data);
  }

}
