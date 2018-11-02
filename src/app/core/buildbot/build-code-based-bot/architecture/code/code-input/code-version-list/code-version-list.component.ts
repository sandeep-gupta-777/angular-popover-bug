import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-code-version-list',
  templateUrl: './code-version-list.component.html',
  styleUrls: ['./code-version-list.component.scss']
})
export class CodeVersionListComponent implements OnInit {

  @Input() selectedVersion;
  @Input() activeVersion;
  @Input() bot;
  showVersionList =false;
  constructor() { }

  ngOnInit() {
  }

}
