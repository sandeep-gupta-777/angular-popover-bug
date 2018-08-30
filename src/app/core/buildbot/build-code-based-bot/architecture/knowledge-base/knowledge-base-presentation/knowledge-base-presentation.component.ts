import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ICustomNerItem} from '../../../../../../../interfaces/custom-ners';
import {NgForm} from '@angular/forms';
import {UtilityService} from '../../../../../../utility.service';
import {ConstantsService} from '../../../../../../constants.service';

@Component({
  selector: 'app-knowledge-base-presentation',
  templateUrl: './knowledge-base-presentation.component.html',
  styleUrls: ['./knowledge-base-presentation.component.scss']
})
export class KnowledgeBasePresentationComponent implements OnInit {
  _selectedRowData:ICustomNerItem = {};
  @Input() set selectedRowData(value:ICustomNerItem){
    if(!value) return;
    ;
    this._selectedRowData = value;
    this.key = value.key ;
    this.ner_type = value.ner_type;
    this.conflict_policy = value.conflict_policy ;
    this.codeTextInputToCodeEditor = value.values && value.values.join(',');
  }
  @Input() handsontableData = ["", "", ""];
  @Output() updateOrSaveConcept$ = new EventEmitter();
  @Output() showTable$ = new EventEmitter();
  @ViewChild('form') form:NgForm;
  key:string;
  ner_type:string;
  conflict_policy:string;
  codeTextInputToCodeEditor: string;
  codeTextOutPutFromCodeEditor: string;
  handontable_column = this.constantsService.HANDSON_TABLE_KNOWLEDGE_BASE_columns;
  handontable_colHeaders = this.constantsService.HANDSON_TABLE_KNOWLEDGE_BASE_colHeaders;

  constructor(
    private utilityService: UtilityService,
    private constantsService: ConstantsService,
  ) {}

  ngOnInit() {
  }
  async openFile(inputEl) {
    this.codeTextInputToCodeEditor = await this.utilityService.readInputFileAsText(inputEl);
  }

  textChanged(codeText) {
    this.codeTextOutPutFromCodeEditor = codeText;
  }

  updateOrSaveConcept(){
    ;
    let outputData = {
      key:this.key,
      ner_type:this.ner_type,
      conflict_policy:this.conflict_policy,
      codeTextOutPutFromCodeEditor:this.codeTextOutPutFromCodeEditor,
      handsontableData:this.handsontableData
    };
    this.updateOrSaveConcept$.emit(outputData)
  }

}
