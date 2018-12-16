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
  @Input() activeVersion;
  @Input() bot;
  @Output() changeSelectedVersion$ = new EventEmitter();
  @Output() saveSelectedVersion$ = new EventEmitter();
  @Output() openForkNewVersionModal$ = new EventEmitter();
  showVersionList = false;
  disableSave = true;
  constructor() { }

  ngOnInit() {
    EventService.disableSaveButton_codeInput$.subscribe((disableSave)=>{
      debugger;
      this.disableSave = disableSave;
    });
  }

}
