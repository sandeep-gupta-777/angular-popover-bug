import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {EBotType} from '../../../../../../../../utility.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../../../../../../../view-bots/create-bot-dialog/create-bot-dialog.component';

@Component({
  selector: 'app-gentemplate-edit-key',
  templateUrl: './gentemplate-edit-key.component.html',
  styleUrls: ['./gentemplate-edit-key.component.scss']
})
export class GentemplateEditKeyComponent implements OnInit {

  templateKeyDict;
  myEBotType = EBotType;
  old_key;
  newTemplateKey;
  templateKeyCreationError;
  @Output() actionItemClicked$ = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit(): void {
    this.templateKeyDict = this.data['_templateKeyDict'];
    this.old_key = this.data['old_key'];
    this.newTemplateKey = this.old_key;
  }

  editTemplateKey() {
    const new_key = this.newTemplateKey;
    const doesNewKeyAlreadyExistsInTemplateKeyDict = Object.keys(this.templateKeyDict).find(key => new_key === key);
    if (doesNewKeyAlreadyExistsInTemplateKeyDict) {
      this.templateKeyCreationError = 'Template Key name already exists';
      return;
    } else if (!new_key.trim()) {
      this.templateKeyCreationError = 'Template Key can\'t be empty';
      return;
    }
    this.dialogRef.close(new_key);
  }

}
