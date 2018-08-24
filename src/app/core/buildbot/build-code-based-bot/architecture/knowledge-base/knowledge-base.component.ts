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
  settings;
  codeTextOutPutFromCodeEditor: string;
  codeTextInputToCodeEditor: string;
  showTable = true;
  /*new concept*/
  key;
  nerType;
  conflict_policy;
  modalRef: BsModalRef;
  handontable_column;
  handontable_colHeaders;
  handontableData = [];
  selectedRowData: ICustomNerItem;

  /*TODO: use model instead of ngif;else*/
  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private utilityService: UtilityService,
    private store: Store) {

  }

  ngOnInit() {
    this.settings = this.constantsService.SMART_TABLE_KNOWLEDGEBASE_SETTING;
    this.handontable_colHeaders = this.constantsService.HANDSON_TABLE_KNOWLEDGE_BASE_colHeaders;
    this.handontable_column = this.constantsService.HANDSON_TABLE_KNOWLEDGE_BASE_columns;
    if (this.bot) {
      /*this block should not run in case this compoment is called by parent component: view-customner.component*/
      let url = this.constantsService.getCustomBotNER(this.bot.id);
      let headerData: IHeaderData = {'bot-access-token': this.bot.bot_access_token};
      this.serverService.makeGetReq({url, headerData})
        .subscribe((value: { objects: [ICustomNerItem] }) => {
          this.data = value.objects;
          // ;
        });
    }
    this.loggeduser$.subscribe((value) => this.loggeduser = value);
  }

  textChanged(codeText){
    this.codeTextOutPutFromCodeEditor = codeText;
  }

  updateOrSaveConcept() {

    let body:ICustomNerItem;
    // ;
    if (this.nerType === 'single_match' || this.nerType === 'double_match' || this.nerType === 'with_metadata') {
      body = {values: this.codeTextOutPutFromCodeEditor.split(',')};
    } else if (this.nerType === 'database') {
      // body =
      /*TODO: implement for databse*/
    }

    if(this.bot){
      this.data.push(this.f.value);
      console.log(this.data);
      let headerData: IHeaderData = {'bot-access-token': this.bot.bot_access_token};
      if (this.selectedRowData && this.selectedRowData.id) {
        /*update customner*/
        let url = this.constantsService.updateCustomBotNER(this.selectedRowData.id);
        this.serverService.makePutReq({url, body: body, headerData})
          .subscribe((value) => {
            console.log(value);
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
          'ner_type': this.nerType,
          // "process_raw_text": false,
          'type': 'bot',
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
    }else {
      this.data.push(this.f.value);
      if (this.selectedRowData && this.selectedRowData.id) {
        /*update customner*/
        let url = this.constantsService.updateEnterpriseNer(this.selectedRowData.id);
        this.serverService.makePutReq({url, body: body})
          .subscribe((value) => {
            console.log(value);
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
          'ner_type': this.nerType,
          // "process_raw_text": false,
          'type': 'bot',
          'updated_at': new Date().toISOString(),
          // "updated_by": 0,
          // "values"?: any[]
        };
        let url = this.constantsService.createNewCustomBotNER();
        this.serverService.makePostReq({url, body: body})
          .subscribe((value) => {
            console.log(value);
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
    this.selectedRowData = $event.data;
    this.showTable = false;
    this.codeTextInputToCodeEditor = this.selectedRowData.values && this.selectedRowData.values.join();
    this.nerType = this.selectedRowData.ner_type;
    this.key = this.selectedRowData.key;
    this.conflict_policy = this.selectedRowData.conflict_policy;
    // this.handontableData = data.values;

    if (this.nerType === 'database') {
      let arr: { key: string, payload: string, title: string }[] = this.selectedRowData.values;
      this.handontableData = arr.map((value) => {
        return [value.key, value.payload, value.title];
      });
      this.codeTextInputToCodeEditor = null;
      console.log(arr);
    } else {
      this.handontableData = null;
    }
  }

  reinitialise() {
    /*reinitialize class variable*/
    this.nerType = 'single_match';
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
