import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
declare var CodeMirror: any;

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {

  editor;
  _text;
  @ViewChild('f') codeEditor:ElementRef;
  constructor() { }
  @Input() set text(value){
    if(this._text===value) return;
    this._text = value;
    this.editor && this.editor.setValue(value);
  }
  @Output() textChangedEvent:EventEmitter<string> = new EventEmitter<string>();
  ngOnInit() {
    let editor = this.codeEditor.nativeElement;
    this.editor = new CodeMirror.fromTextArea(editor, {
      lineNumbers: true,
      mode: "python",
      theme:'cobalt',
      rtlMoveVisually:false,
      direction: "ltr",
      moveInputWithCursor:false
    });
    this.editor.on('change', editor => {
      this.textChangedEvent.emit(editor.getValue())
    });

    this.text && this.editor.setValue(this.text);
  }

  options:any = {maxLines: 20, printMargin: false};

  onChange1(code) {
    this.textChangedEvent.emit(code);
  }

}
