import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {IBot} from '../../../../interfaces/IBot';
import {ServerService} from '../../../../../server.service';
import {ConstantsService} from '../../../../../constants.service';
import {UtilityService} from '../../../../../utility.service';
import {IHeaderData} from '../../../../../../interfaces/header-data';
import {ICustomNerItem} from '../../../../../../interfaces/custom-ners';
import {NgForm} from '@angular/forms';
import {ICustomners} from '../../../../../../interfaces/bot-creation';
import {Observable} from 'rxjs';
import {IUser} from '../../../../interfaces/user';

@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.scss']
})
export class KnowledgeBaseComponent implements OnInit {

  @Input() bot: IBot;
  @ViewChild('form') f: NgForm;
  @Select() loggeduser$: Observable<{ user: IUser }>;
  @Input() data = [];
  @Output() pageChanged$ = new EventEmitter();
  @Output() updateOrSaveParentNers$ = new EventEmitter();
  loggeduser: { user: IUser };
  settings = this.constantsService.SMART_TABLE_KNOWLEDGEBASE_SETTING;
  codeTextOutPutFromCodeEditor: string;
  codeTextInputToCodeEditor: string;
  showTable = true;
  key;
  ner_type;
  conflict_policy;
  modalRef: BsModalRef;
  handontable_column = this.constantsService.HANDSON_TABLE_KNOWLEDGE_BASE_columns;
  handontable_colHeaders = this.constantsService.HANDSON_TABLE_KNOWLEDGE_BASE_colHeaders;
  handontableData = [["","",""]];
  selectedRowData: ICustomNerItem;

  /*TODO: use model instead of ngif;else*/
  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private utilityService: UtilityService,
    private store: Store) {

  }

  ngOnInit() {
    // this.handontable_colHeaders = this.constantsService.HANDSON_TABLE_KNOWLEDGE_BASE_colHeaders;
    // this.handontable_column = this.constantsService.HANDSON_TABLE_KNOWLEDGE_BASE_columns;
    if (this.bot) {
      /*this block should not run in case this component is called by parent component: view-customner.component*/
      let url = this.constantsService.getCustomBotNER(this.bot.id);
      let headerData: IHeaderData = {'bot-access-token': this.bot.bot_access_token};
      this.serverService.makeGetReq({url, headerData})
        .subscribe((value: { objects: [ICustomNerItem] }) => {
          this.data = value.objects;
        });
    }
    this.loggeduser$.subscribe((value) => this.loggeduser = value);
  }

  textChanged(codeText) {
    this.codeTextOutPutFromCodeEditor = codeText;
  }

  updateOrSaveConcept() {
    debugger;
    let body: ICustomNerItem;
    if (this.ner_type === 'single_match' || this.ner_type === 'double_match' || this.ner_type === 'with_metadata' || this.ner_type === 'regex') {
      body = {values: this.codeTextOutPutFromCodeEditor.split(',')};
    } else if (this.ner_type === 'database') {
      let handontableDataClone = JSON.parse(JSON.stringify(this.handontableData));
      let column_headers = handontableDataClone[0];
      handontableDataClone.shift();
      let handsontableDataSerialized = handontableDataClone.map((row) => {
        let obj = {};
        row.forEach((str, index) => {
          let key = column_headers[index];
          obj[key] = str;
        });
        return obj;
      });

      body = {"column_headers": column_headers,values: handsontableDataSerialized};
    }

    if (this.selectedRowData && this.selectedRowData.id) {/*if there is not id, this means we are creating new customner*/
      Object.assign(this.selectedRowData, body);
    }

    if (this.bot) {
      this.data.push(this.f.value);
      console.log(this.data);
      let headerData: IHeaderData = {'bot-access-token': this.bot.bot_access_token};
      if (this.selectedRowData && this.selectedRowData.id) {
        /*update customner*/
        let url = this.constantsService.updateCustomBotNER(this.selectedRowData.id);
        this.serverService.makePutReq({url, body: body, headerData})
          .subscribe((value) => {
            console.log(value);
            this.utilityService.showSuccessToaster("Successfully saved");
          });
      } else {
        /*create a new customner*/
        body = {
          ...body,
          'bot_id': this.bot.id,
          // "column_headers": any[],
          'column_nermap': {},
          'conflict_policy': this.conflict_policy,
          /*change date format*/
          // 'created_at': new Date().toISOString(),
          // 'created_by': this.loggeduser.user.id,
          'enterprise_id': this.loggeduser.user.enterprise_id,
          'key': this.key,
          'ner_type': this.ner_type,
          // "process_raw_text": false,
          'type': 'enterprise',
          // 'updated_at': new Date().toISOString(),
          // "updated_by": 0,
          // "values"?: any[]
        };
        let url = this.constantsService.createNewCustomBotNER();
        this.serverService.makePostReq({url, body: body, headerData})
          .subscribe((value) => {
            console.log(value);
          });
      }
    } else {
      ;
      this.data.push(this.f.value);//?????what is this line doing
      if (this.selectedRowData && this.selectedRowData.id) {
        /*update customner*/
        let url = this.constantsService.updateEnterpriseNer(this.selectedRowData.id);
        this.serverService.makePutReq({url, body: body})
          .subscribe((value) => {
            this.utilityService.showSuccessToaster("Successfully saved");
          });
      } else {
        /*create a new customner*/
        body = {
          ...body,
          // 'bot_id': this.bot.id,
          // "column_headers": any[],
          'column_nermap': {},
          'conflict_policy': this.conflict_policy,
          /*change date format*/
          'created_at': new Date().toISOString(),
          'created_by': this.loggeduser.user.id,
          'enterprise_id': this.loggeduser.user.enterprise_id,
          'key': this.key,
          'ner_type': this.ner_type,
          // "process_raw_text": false,
          'type': 'enterprise',
          'updated_at': new Date().toISOString(),
          // "updated_by": 0,
          // "values"?: any[]
        };
        let url = this.constantsService.createNewCustomBotNER();
        this.serverService.makePostReq({url, body: body})
          .subscribe((value) => {
            console.log(value);
            // this.handontableData.push(body);
          });
      }
    }
  }

  async openFile(inputEl) {
    this.codeTextInputToCodeEditor = await this.utilityService.readInputFileAsText(inputEl);
  }

  rowClicked($event) {
    // this.f.form.disabled(true);
    // ;

    ;
    this.selectedRowData = $event.data;
    this.showTable = false;
    this.codeTextInputToCodeEditor = this.selectedRowData.values && this.selectedRowData.values.join();
    this.ner_type = this.selectedRowData.ner_type;
    this.key = this.selectedRowData.key;
    this.conflict_policy = this.selectedRowData.conflict_policy;
    // this.handontableData = data.values;

    if (this.ner_type === 'database') {
      // let arr: { key: string, payload: string, title: string }[] = this.selectedRowData.values;
      let valueKeys = this.selectedRowData.column_headers;

      this.handontableData = this.selectedRowData.values.map((value) => {
        return valueKeys.map((valueKey) => {
          return value[valueKey];
        });
      });
      this.handontableData.unshift(valueKeys);
      // this.codeTextInputToCodeEditor = null;
      // console.log(arr);
    } else {
      this.handontableData = null;
    }
  }

  reinitialise() {
    /*reinitialize class variable*/
    this.ner_type = 'single_match';
    this.key = '';
    this.conflict_policy = 'override';
    this.codeTextInputToCodeEditor = '';
    this.selectedRowData = {};

    /*show create ner stuff*/
    this.showTable = false;
  }

  pageChanged(pageNumber) {
    this.pageChanged$.emit(pageNumber);
  }


}
