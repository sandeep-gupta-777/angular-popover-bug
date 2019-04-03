import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EAllActions} from '../../../../../../../constants.service';
import {EventService} from '../../../../../../../event.service';

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
  constructor() { }

  ngOnInit() {
    this.selectedVersionComment = this.selectedVersion.comment
    EventService.disableSaveButton_codeInput$.subscribe((disableSave)=>{
      this.disableSave = disableSave;
    });
  }
  ngOnChanges() {

    this.selectedVersionComment = this.selectedVersion.comment
    // You can also use categoryId.previousValue and 
    // categoryId.firstChange for comparing old and new values

}

}
