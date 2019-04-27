import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EAllActions} from '../../../../../../../constants.service';
import {EventService} from '../../../../../../../event.service';
import {MatDialog} from "@angular/material";
import {UtilityService} from "../../../../../../../utility.service";

@Component({
  selector: 'app-code-version-list',
  templateUrl: './code-version-list.component.html',
  styleUrls: ['./code-version-list.component.scss']
})
export class CodeVersionListComponent implements OnInit {

  myEAllActions = EAllActions;
  @Input() selectedVersion;
  @Input() versionDiffs;
  @Input() activeVersion;
  @Input() bot;
  @Input() versions;
  @Output() changeSelectedVersion$ = new EventEmitter();
  @Output() activateVersion$ = new EventEmitter();
  @Output() downloadAll$ = new EventEmitter();
  @Output() saveSelectedVersion$ = new EventEmitter();
  @Output() openForkNewVersionModal$ = new EventEmitter();
  showVersionList = false;
  disableSave = false;
  selectedVersionComment:string;
  dialogRefWrapper = {ref:null};
  constructor(private matDialog:MatDialog, private utilityService:UtilityService) { }

  ngOnInit() {
    this.selectedVersionComment = this.selectedVersion.comment;
    EventService.disableSaveButton_codeInput$.subscribe((disableSave)=>{
      this.disableSave = disableSave;
    });
  }

  confirmActivateVersionModal(){
    this.activateVersion$.emit(this.selectedVersion.id);
    //TODO: implement modal below
    // this.utilityService.confirmActivateVersionModal(this.dialogRefWrapper, this.matDialog)
    //   .then((data)=>{
    //     this.dialogRefWrapper.ref.close();
    //
    //     if(data){
    //       this.activateVersion$.emit(this.selectedVersion.id);
    //     }
    //   })
  }

  ngOnChanges() {

    this.selectedVersionComment = this.selectedVersion.comment
    // You can also use categoryId.previousValue and
    // categoryId.firstChange for comparing old and new values

}

}
