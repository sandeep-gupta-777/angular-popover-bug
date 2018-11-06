import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EAllActions} from '../../../../../../../constants.service';

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
  showVersionList =false;
  constructor() { }

  ngOnInit() {
  }

}
