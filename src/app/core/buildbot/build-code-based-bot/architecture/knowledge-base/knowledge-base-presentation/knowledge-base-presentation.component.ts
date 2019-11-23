import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ICustomNerItem} from '../../../../../../../interfaces/custom-ners';
import {NgForm} from '@angular/forms';
import {UtilityService} from '../../../../../../utility.service';
import {ConstantsService, ERouteNames} from '../../../../../../constants.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {LoggingService} from '../../../../../../logging.service';
import {ModalImplementer} from '../../../../../../modal-implementer';
import {MatDialog} from '@angular/material';
import {EventService} from '../../../../../../event.service';
import {ModalConfirmComponent} from '../../../../../../modal-confirm/modal-confirm.component';
import {SideBarService} from '../../../../../../side-bar.service';
import {EAllActions} from '../../../../../../typings/enum';
import {PermissionService} from '../../../../../../permission.service';

@Component({
  selector: 'app-knowledge-base-presentation',
  templateUrl: './knowledge-base-presentation.component.html',
  styleUrls: ['./knowledge-base-presentation.component.scss']
})

export class KnowledgeBasePresentationComponent extends ModalImplementer implements OnInit, AfterViewInit {
  _selectedRowData: ICustomNerItem = {};
  process_raw_text = false;
  is_sensitive = false;
  ignore_punctuation = false;
  myEAllActions = EAllActions;
  myERouteNames = ERouteNames;
  disableAll = this.permissionService.isTabAccessDenied(EAllActions['Update Bot Knowledge base']);


  // @ViewChild(HandsontableComponent)handsontableComponent: HandsontableComponent;
  @Input() set selectedRowData(value: ICustomNerItem) {
    if (!value) {
      return;
    }
    this._selectedRowData = value;
    this.key = value.key;
    if (value.ner_type) {
      this.ner_type = value.ner_type;
    }
    this.conflict_policy = value.conflict_policy || this.conflict_policy;
    this.process_raw_text = !!value.process_raw_text;
    this.is_sensitive = !!value.is_sensitive;
    this.ignore_punctuation = !!value.ignore_punctuation;

    // this.codeTextInputToCodeEditor = value.values && value.values.join(',');
    // this.codeTextInputToCodeEditorObj.text = value.values && value.values.join(',');
    if (value.ner_type === 'regex') {
      this.codeTextInputToCodeEditorObj.text = value.values && value.values[0];
    } else {
      this.codeTextInputToCodeEditorObj.text = value.values && JSON.stringify(value.values);
    }

    this.codeTextOutPutFromCodeEditor = this.codeTextInputToCodeEditorObj.text;

    this.codeTextInputToCodeEditorObj = {...this.codeTextInputToCodeEditorObj};
    try {
      this.handontable_colHeaders = Object.keys(value.values[0]);
    } catch (e) {
      LoggingService.error(e);
    }
    // for (let index = 0; index < this.handontable_colHeaders.length; index++) {
    // this.handontable_column[index] = {
    //   data: index, type: 'text'
    // }
    // }

    this.handontable_column = this.handontable_colHeaders;
  }

  @Input() handsontableData = ['', '', ''];
  @Output() updateOrSaveConcept$ = new EventEmitter();
  @Output() deleteNer$ = new EventEmitter();
  @Output() showTable$ = new EventEmitter();
  @Output() refreshTable$ = new EventEmitter();
  @ViewChild('form') form: NgForm;
  ner_id: string;
  key: string;
  routeName: string;
  ner_type = 'double_match';
  conflict_policy = 'override';
  codeTextInputToCodeEditor: string;
  codeTextInputToCodeEditorObj: { text: string } = {text: ''};
  codeTextOutPutFromCodeEditor: string;
  // handontable_column = this.constantsService.HANDSON_TABLE_KNOWLEDGE_BASE_columns;
  handontable_colHeaders = this.constantsService.HANDSON_TABLE_KNOWLEDGE_BASE_colHeaders;
  // readonly HANDSON_TABLE_KNOWLEDGE_BASE_colHeaders = ['', '', '',"","",'','','',''];
  handontable_column = [];
  // readonly HANDSON_TABLE_KNOWLEDGE_BASE_columns = [
  //   {data: 0, type: 'text'},
  //   {data: 1, type: 'text'},
  //   {data: 2, type: 'text'},
  //   {data: 3, type: 'text'},
  //   {data: 4, type: 'text'},
  //   {data: 5, type: 'text'}
  // ];
  constructor(
    public utilityService: UtilityService,
    public constantsService: ConstantsService,
    private activatedRoute: ActivatedRoute,
    private permissionService: PermissionService,
    public matDialog: MatDialog
  ) {
    super(utilityService, matDialog);
  }

  ngOnInit() {
    this.routeName = this.activatedRoute.snapshot.data['routeName'];
    this.activatedRoute.queryParamMap.subscribe((queryParamMap: ParamMap) => {
      this.ner_id = (<any>queryParamMap).params['ner_id'];
    });
  }

  async openDeleteModal() {
    // this.modalRef = this.modalService.show(template);

    await this.utilityService.openDialog({
      dialogRefWrapper: this.dialogRefWrapper,
      classStr: 'danger-modal-header-border',
      data: {
        actionButtonText: 'Delete',
        message: 'This action cannot be undone. Are you sure you wish to delete?',
        title: `Delete Concept?`,
        isActionButtonDanger: true,
        inputDescription: null,
        closeButtonText: 'Keep editing'
      },
      dialog: this.matDialog,
      component: ModalConfirmComponent
    }).then((data) => {

      if (data) {
        this.deleteNer$.emit(this.ner_id);
      }
    });
    // this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);

    // this.openDangerModal(template);
  }

  async openFile(inputEl) {

    this.codeTextInputToCodeEditorObj.text = await this.utilityService.readInputFileAsText(inputEl);
    this.codeTextInputToCodeEditorObj = {...this.codeTextInputToCodeEditorObj};
  }

  textChanged(codeText) {
    this.codeTextOutPutFromCodeEditor = codeText;
  }

  updateOrSaveConcept() {

    const outputData = this.createOutPutData();
    const ner_type = outputData.ner_type;
    const codeTextOutPutFromCodeEditor = outputData.codeTextOutPutFromCodeEditor;
    if (this.ner_type === 'regex') {
      if (!codeTextOutPutFromCodeEditor) {
        this.utilityService.showErrorToaster(`Syntax is not valid. ${this.ner_type} only accepts String`);
        return;
      }
    } else if (ner_type !== 'database') {

      if (!codeTextOutPutFromCodeEditor) {
        this.utilityService.showErrorToaster(`Invalid syntax. ${this.ner_type} only accepts arrays`);
        return;
      }

      try {
        outputData.codeTextOutPutFromCodeEditor = eval(codeTextOutPutFromCodeEditor);
      } catch (e) {
        LoggingService.log(e);
        this.utilityService.showErrorToaster('Syntax is not valid. Must be an an Array literal');
        return;
      }

    }
    this.updateOrSaveConcept$.emit(outputData);
  }


  createOutPutData() {
    let codeTextFromEditor;
    if (this.ner_type === 'regex') {
      // if (!this.codeTextOutPutFromCodeEditor) {
      //   this.utilityService.showErrorToaster(`Syntax is not valid. ${this.ner_type} only accepts String`);
      //   return;
      // }
      codeTextFromEditor = [this.codeTextOutPutFromCodeEditor];
    } else if (this.ner_type !== 'database') {
      try {

        // if (!this.codeTextOutPutFromCodeEditor) {
        //   this.utilityService.showErrorToaster(`Syntax is not valid. ${this.ner_type} only accespts Array literal`);
        //   return;
        // }
        // codeTextFromEditor = JSON.parse(this.codeTextOutPutFromCodeEditor);
        codeTextFromEditor = this.codeTextOutPutFromCodeEditor;
      } catch (e) {
        // codeTextFromEditor = this.codeTextOutPutFromCodeEditor;
        LoggingService.log(e);
        try {
          codeTextFromEditor = eval(this.codeTextOutPutFromCodeEditor);
        } catch (e) {
          LoggingService.log(e);
          this.utilityService.showErrorToaster('Syntax is not valid. Must be an an Array literal');
          return;
        }
      }
    }
    const tableData = this.handsontableData.filter((array: any) => {
      return !!array.find(element => (element !== null) && (element !== undefined) && (element !== ''));
    });
    const outputData = {
      mode: this.ner_id ? 'Update' : 'Create',
      key: this.key || '',
      ner_type: this.ner_type,
      conflict_policy: this.conflict_policy,
      codeTextOutPutFromCodeEditor: codeTextFromEditor || '',
      handsontableData: tableData,
      //   ...this.handsontableComponent.getHotTableData(),
      process_raw_text: this.process_raw_text,
      is_sensitive: this.is_sensitive,
      ignore_punctuation: this.ignore_punctuation
    };
    const ner_id_str = this.activatedRoute.snapshot.queryParamMap.get('ner_id');
    if (ner_id_str) {
      outputData['id'] = Number(ner_id_str);
    }
    return outputData;
  }

  click() {
    LoggingService.log(this.form.value);
  }

  handsOnTableDataHasAtleastTwoRows() {

    return this.handsontableData && this.handsontableData.length > 2;
  }


  async goBack() {

    const isDirty: boolean = SideBarService.isKnowledgeBaseDirty();
    if (isDirty) {
      const data = await this.utilityService.openCloseWithoutSavingModal(this.dialogRefWrapper, this.matDialog);
      if (data) {
        // this.showTable$.emit();
        // this._selectedRowData = {};
        // EventService.createConceptFullScreen$.emit(false);
        // SideBarService.resetKB();
        this.goBackWithoutModal();
      }
    } else {
      // this.showTable$.emit();
      // this._selectedRowData = {};
      // EventService.createConceptFullScreen$.emit(false);
      // SideBarService.resetKB();
      this.goBackWithoutModal();
    }
  }

  goBackWithoutModal() {
    EventService.kbRefresh$.emit();
    this.showTable$.emit();
    this._selectedRowData = {};
    EventService.createConceptFullScreen$.emit(false);
    SideBarService.resetKB();

  }

  ngAfterViewInit(): void {
    this.initialiseSideBarService();
  }

  initialiseSideBarService() {
    setTimeout(() => {
      SideBarService.knowledgeBaseInit(this);
    });
  }


}
