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
  editorCodeObjRef:{text:string} = {text:""};
  @ViewChild('f') codeEditor:ElementRef;
  constructor() { }
  @Input() set text(editorCodeObj:{text:string}){
    debugger;
    if(!editorCodeObj) return;
    this.editorCodeObjRef = editorCodeObj;
    // if(this._text===editorCodeObj.text) return;
    this._text = editorCodeObj.text;
    this.editor && this.editor.setValue(editorCodeObj.text);
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
      this.editorCodeObjRef.text = editor.getValue();
      this.textChangedEvent.emit(editor.getValue())
    });
    this._text && this.editor.setValue(this._text);
  }

  options:any = {maxLines: 20, printMargin: false};

  // onChange1(code) {
  //   this.editorCodeObjRef
  //   this.textChangedEvent.emit(code);
  // }

}
