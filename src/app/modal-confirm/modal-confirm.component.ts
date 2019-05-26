import {Component, EventEmitter, Inject, OnInit, Output, ViewChild} from '@angular/core';
import {EBotType} from '../utility.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../core/view-bots/create-bot-dialog/create-bot-dialog.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent{

  dataCopy:any;
  inputData:string = "";
  @Output() actionItemClicked$ = new EventEmitter();
  // @ViewChild('inputForm') Form: NgForm;
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.dataCopy = this.data;
  }


  closeDialog(data:any){

    this.dialogRef.close(data);
  }

  // ngOnDestroy(){
  //     alert();
  // }

}
