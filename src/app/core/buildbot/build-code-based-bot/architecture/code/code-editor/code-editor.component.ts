import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {UtilityService} from '../../../../../../utility.service';
import {ActivatedRoute} from '@angular/router';

declare var CodeMirror: any;

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
  host: {
    '[class.d-flex-column-last-child-flex-grow-1]': 'true'
  }
})
export class CodeEditorComponent implements OnInit, AfterViewInit {

  editor;
  _text;
  editorCodeObjRef: { text: string } = {text: ''};
  @Output() validateClick = new EventEmitter();
  @ViewChild('f') codeEditor: ElementRef;
  @Input() doShowUploadDownloadButton = true;
  @Input() doShowValidationsIcon = false;

  constructor(
    private utilityService: UtilityService,
    private activatedRoute: ActivatedRoute) {
  }

  @Input() set text(editorCodeObj: { text: string }) {

    if (!editorCodeObj) {
      return;
    }
    this.editorCodeObjRef = editorCodeObj;
    // if(this._text===editorCodeObj.text) return;
    this._text = editorCodeObj.text;

    this.editor && this.editor.setValue(editorCodeObj.text);

    setTimeout(() => {
      /*https://github.com/codemirror/CodeMirror/issues/2469*/
      this.editor && this.editor.refresh();
    }, 0);
    this.editor && this.editor.setSize('100%', '100%');
  }

  @Output() textChangedEvent: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {

    this.utilityService.refreshCodeEditor$.subscribe(() => {
      this.editor && this.editor.refresh();
    });

    const editor = this.codeEditor.nativeElement;
    this.editor = new CodeMirror.fromTextArea(editor, {
      lineNumbers: true,
      lineWrapping: true,
      mode: 'python',
      theme: 'cobalt',
      rtlMoveVisually: false,
      direction: 'ltr',
      moveInputWithCursor: false,

      extraKeys: {
        'Ctrl-Q': function (cm) {
          cm.foldCode(cm.getCursor());
        },
        "Ctrl-Space": "autocomplete",
      },
      foldGutter: true,
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter']
    });
    this.editor.on('keydown', editor => {
      setTimeout(() => {
        this.editorCodeObjRef.text = editor.getValue();
        this.textChangedEvent.emit(editor.getValue());
      });
    });
    this._text && this.editor.setValue(this._text);
    setTimeout(() => {
      /*https://github.com/codemirror/CodeMirror/issues/2469*/
      this.editor && this.editor.refresh();
    }, 0);
  }

  downloadCodeText() {
    let fileName = 'code.txt';
    const codeTab = this.activatedRoute.snapshot.queryParamMap.get('code-tab');
    const buildTab = this.activatedRoute.snapshot.queryParamMap.get('build-tab');
    const botId = this.activatedRoute.snapshot.params['id'];
    if (buildTab === 'code' && codeTab && botId) {
      fileName = `${codeTab} for bot id ${botId}.py`;
    }

    const nerId = this.activatedRoute.snapshot.queryParamMap.get('ner_id');
    if (buildTab === 'knowledge' && botId && nerId) {
      fileName = `code for nerid ${nerId} for bot id ${botId}.py`;
    }
    this.utilityService.downloadText(this.editorCodeObjRef.text, fileName);
  }

  validateCodeTest() {
    this.validateClick.emit(this.editorCodeObjRef.text);
  }

  ngAfterViewInit() {
    this.editor && this.editor.setSize('100%', '100%'); //TODO: codemirror is exceeding its parent width by 30px
    this.editor && this.editor.refresh();
  }

  async openFile(inputEl) {
    const codeText = await this.utilityService.readInputFileAsText(inputEl);
    this.editor && this.editor.setValue(codeText);
  }


  options: any = {maxLines: 20, printMargin: false};

  // onChange1(code) {
  //   this.editorCodeObjRef
  //   this.textChangedEvent.emit(code);
  // }

}
