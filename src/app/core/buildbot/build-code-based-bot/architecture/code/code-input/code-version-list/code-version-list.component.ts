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
  @Input() changedFields;
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
  constructor() { }

  ngOnInit() {
    EventService.disableSaveButton_codeInput$.subscribe((disableSave)=>{
      this.disableSave = disableSave;
    });
  }

}
