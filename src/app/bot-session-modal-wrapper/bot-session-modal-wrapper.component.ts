import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../core/view-bots/create-bot-dialog/create-bot-dialog.component';

@Component({
  selector: 'app-bot-session-modal-wrapper',
  templateUrl: './bot-session-modal-wrapper.component.html',
  styleUrls: ['./bot-session-modal-wrapper.component.scss']
})
export class BotSessionModalWrapperComponent {

  @Output() actionItemClicked$ = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    console.log(data);
  }

}
