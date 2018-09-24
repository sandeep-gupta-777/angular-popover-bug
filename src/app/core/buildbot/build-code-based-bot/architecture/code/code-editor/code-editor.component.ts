import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {EventService} from '../../../../../../event.service';
import {UtilityService} from '../../../../../../utility.service';
declare var CodeMirror: any;

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
  host: {
    // "[style.display]": "'inline-block'",
    // "[style.height.percent]": "100",
  }
})
export class CodeEditorComponent implements OnInit,AfterViewInit {

  editor;
  _text;
  editorCodeObjRef:{text:string} = {text:""};
  @ViewChild('f') codeEditor:ElementRef;
  constructor(private utilityService:UtilityService) {}
  @Input() set text(editorCodeObj:{text:string}){

    if(!editorCodeObj) return;
    this.editorCodeObjRef = editorCodeObj;
    // if(this._text===editorCodeObj.text) return;
    this._text = editorCodeObj.text;

    this.editor && this.editor.setValue(editorCodeObj.text);

    setTimeout(()=>{
      /*https://github.com/codemirror/CodeMirror/issues/2469*/
      this.editor && this.editor.refresh();
    },0);
    this.editor && this.editor.setSize("100%", "100%");
  }
  @Output() textChangedEvent:EventEmitter<string> = new EventEmitter<string>();
  ngOnInit() {
    let editor = this.codeEditor.nativeElement;
    this.editor = new CodeMirror.fromTextArea(editor, {
      lineNumbers: true,
      lineWrapping: true,
      mode: "python",
      theme:'cobalt',
      rtlMoveVisually:false,
      direction: "ltr",
      moveInputWithCursor:false,
    });
    this.editor.on('change', editor => {
      this.editorCodeObjRef.text = editor.getValue();
      this.textChangedEvent.emit(editor.getValue())
    });
    this._text && this.editor.setValue(this._text);
  }

  downloadCodeText(){
    this.utilityService.downloadText(this.editorCodeObjRef.text,"code.txt");
  }

  ngAfterViewInit(){
    this.editor && this.editor.setSize("100%", "100%");//TODO: codemirror is exceeding its parent width by 30px
    this.editor && this.editor.refresh();
  }

  async openFile(inputEl) {
    let codeText = await this.utilityService.readInputFileAsText(inputEl);
    this.editor && this.editor.setValue(codeText);
  }


  options:any = {maxLines: 20, printMargin: false};

  // onChange1(code) {
  //   this.editorCodeObjRef
  //   this.textChangedEvent.emit(code);
  // }

}
