import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-code-gentemplate',
  templateUrl: './code-gentemplate.component.html',
  styleUrls: ['./code-gentemplate.component.scss']
})
export class CodeGentemplateComponent implements OnInit {

  constructor() { }
  @Input() intentCode: object;
  @Input() myIndex: number;
  @Output() deleteTemplate: EventEmitter<string> = new EventEmitter<string>();
  @Output() moveTempUp: EventEmitter<string> = new EventEmitter<string>();
  @Output() moveTempDown: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectionChanged: EventEmitter<string> = new EventEmitter<string>();

  selected: boolean;
  delete(i) {
    this.deleteTemplate.emit(i);
  }
  moveUp(i) {
    this.moveTempUp.emit(i);
  }
  moveDown(i) {
    this.moveTempDown.emit(i);
  }
  onSelected(b) {
    this.selectionChanged.emit(JSON.stringify({
      select: b,
      index: this.myIndex
    }));
  }
  ngOnInit() {
  }

  codeEditorTextCHanged(data){
    this.intentCode = Object.assign(this.intentCode, JSON.parse(data));
  }

}
