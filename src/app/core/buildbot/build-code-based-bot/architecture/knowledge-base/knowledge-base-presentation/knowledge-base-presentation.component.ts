import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ICustomNerItem} from '../../../../../../../interfaces/custom-ners';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
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
import {FormsService} from '../../../../../../forms.service';

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
    let code: string;
    if (value.ner_type === 'regex') {
      code = value.values && value.values[0];
    } else {
      code = value.values && JSON.stringify(value.values);
    }

    if (!this.form) {
      this.form = this.createForm();
    }
    this.codeTextOutPutFromCodeEditor = this.codeTextInputToCodeEditorObj.text;
    this.form.patchValue({...value, code});

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
  form: FormGroup;
  ner_id: string;
  key: string;
  routeName: string;
  ner_type = 'double_match';
  conflict_policy = 'override';
  codeTextInputToCodeEditor: string;
  codeTextInputToCodeEditorObj: { text: string } = {text: ''};
  codeTextOutPutFromCodeEditor: string;
  handontable_colHeaders = this.constantsService.HANDSON_TABLE_KNOWLEDGE_BASE_colHeaders;
  handontable_column = [];

  constructor(
    public utilityService: UtilityService,
    public constantsService: ConstantsService,
    private activatedRoute: ActivatedRoute,
    private permissionService: PermissionService,
    private formBuilder: FormBuilder,
    public matDialog: MatDialog
  ) {
    super(utilityService, matDialog);
  }

  ngOnInit() {
    if (!this.form) {
      this.form = this.createForm();
    }
    this.routeName = this.activatedRoute.snapshot.data['routeName'];
    this.activatedRoute.queryParamMap.subscribe((queryParamMap: ParamMap) => {
      this.ner_id = (<any>queryParamMap).params['ner_id'];
    });
  }

  createForm() {
    return this.formBuilder.group({
      key: ['', [FormsService.startWithAlphanumericValidator(), FormsService.lengthValidator({min: 1, max: 64})]],
      ner_type: ['double_match', []],
      process_raw_text: [false, []],
      is_sensitive: [false, []],
      ignore_punctuation: [false, []],
      conflict_policy: ['override', []],
      code: ['', []],
    });
  }

  async openDeleteModal() {
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

  textChanged(codeText) {
    this.codeTextOutPutFromCodeEditor = codeText;
  }

  updateOrSaveConcept() {

    const outputData = this.createOutPutData();
    const ner_type = this.form.value.ner_type;
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
        let parse = JSON.parse(codeTextOutPutFromCodeEditor);
        if (Array.isArray(parse)) {
          outputData.codeTextOutPutFromCodeEditor = parse;
        } else {
          throw new Error('Code input not an array!');
        }
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
    const codeData = this.form.value.code;
    if (this.ner_type === 'regex') {
      codeTextFromEditor = [codeData];
    } else if (this.ner_type !== 'database') {
      codeTextFromEditor = codeData;
    }
    const tableData = this.handsontableData.filter((array: any) => {
      return !!array.find(element => (element !== null) && (element !== undefined) && (element !== ''));
    });
    const {code, ...formData} = this.form.value;

    const outputData = {
      mode: formData.ner_id ? 'Update' : 'Create',
      ...formData,
      codeTextOutPutFromCodeEditor: codeTextFromEditor || '',
      handsontableData: tableData,
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
