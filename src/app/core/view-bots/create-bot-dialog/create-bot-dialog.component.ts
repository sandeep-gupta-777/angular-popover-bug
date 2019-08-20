import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {EBotType} from '../../../utility.service';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-create-bot-dialog',
  templateUrl: './create-bot-dialog.component.html',
  styleUrls: ['./create-bot-dialog.component.scss']
})
export class CreateBotDialogComponent {

  myEBotType = EBotType;
  @Output() actionItemClicked$ = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<CreateBotDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

}
