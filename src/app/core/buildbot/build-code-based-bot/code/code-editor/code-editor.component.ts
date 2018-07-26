import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
// import "brace/theme/chrome";
// import "brace/mode/yaml";


@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {

  constructor() { }
  @Input() text:string = "hi";
  @Output() textChangedEvent:EventEmitter<string> = new EventEmitter<string>();
  ngOnInit() {}

  options:any = {maxLines: 20, printMargin: false};

  onChange(code) {
    this.textChangedEvent.emit(code);
  }

}
