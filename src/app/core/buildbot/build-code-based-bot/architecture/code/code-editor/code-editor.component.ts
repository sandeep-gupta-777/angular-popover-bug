import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
declare var CodeMirror: any;

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {

  editor;
  _text;
  constructor() { }
  @Input() set text(value){
    debugger;
    this.editor.setValue(value);
  }
  @Output() textChangedEvent:EventEmitter<string> = new EventEmitter<string>();
  ngOnInit() {
    debugger;
    let editor = document.getElementById('code-editor-text-area');
    this.editor = new CodeMirror.fromTextArea(editor, {
      lineNumbers: true,
      mode: "python",
      theme:'cobalt',
    });
    this.editor.on('change', editor => {
      this.textChangedEvent.emit(editor.getValue())
    });
    this.editor.setValue(this.text);
  }

  options:any = {maxLines: 20, printMargin: false};

  onChange1(code) {
    this.textChangedEvent.emit(code);
  }

}
