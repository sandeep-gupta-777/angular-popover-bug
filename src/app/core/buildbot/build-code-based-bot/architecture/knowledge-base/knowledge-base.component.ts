import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {IBot} from '../../../../interfaces/IBot';
import {ServerService} from '../../../../../server.service';
import {ConstantsService, EAllActions, ERouteNames} from '../../../../../constants.service';
import {UtilityService} from '../../../../../utility.service';
import {IHeaderData} from '../../../../../../interfaces/header-data';
import {ICustomNerItem} from '../../../../../../interfaces/custom-ners';
import {NgForm} from '@angular/forms';
import {ICustomners} from '../../../../../../interfaces/bot-creation';
import {Observable} from 'rxjs';
import {IUser} from '../../../../interfaces/user';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ESplashScreens} from '../../../../../splash-screen/splash-screen.component';
import {MaterialTableImplementer} from '../../../../../material-table-implementer';

@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.scss']
})
export class KnowledgeBaseComponent extends MaterialTableImplementer implements OnInit {

  // @Input() bot: IBot;

  myESplashScreens = ESplashScreens;
  @ViewChild('form') f1: NgForm;
  myEAllActions = EAllActions;
  myERouteNames = ERouteNames;
  routeName: string;
  @Select() loggeduser$: Observable<{ user: IUser }>;
  @Input() recordsPerPage = 10;

  // @Input() _custumNerDataForSmartTable = [];
  _custumNerDataForSmartTable: any[] = [];
  @Input() set custumNerDataForSmartTable(value: ICustomNerItem[]) {


    this._custumNerDataForSmartTable = value;
    setTimeout(()=>{
      this.initializeTableData(value, this.getTableDataMetaDict());
    });

    const ner_id = this.activatedRoute.snapshot.queryParamMap.get('ner_id');
    ner_id && this.updateSelectedRowDataByNer_Id(Number(ner_id));
  }

  @Output() pageChanged$ = new EventEmitter(); //
  @Output() updateOrSaveParentNers$ = new EventEmitter(); //
  @Output() deleteNer$ = new EventEmitter(); //deleteNer$.emit()
  @Input() currentPageNumber = 1;
  @Input() totalRecords = 10;
  loggeduser: { user: IUser };
  codeTextOutPutFromCodeEditor: string;
  codeTextInputToCodeEditor: string;
  showTable = true;
  key1;
  ner_type1;
  conflict_policy1;
  type: string;
  handontable_column = this.constantsService.HANDSON_TABLE_KNOWLEDGE_BASE_columns;
  handontable_colHeaders = this.constantsService.HANDSON_TABLE_KNOWLEDGE_BASE_colHeaders;

  handontableData = [['', '', '']];
  selectedRowData: ICustomNerItem;

  @Input() tableDataMetaDict;

  /*TODO: use model instead of ngif;else*/
  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private utilityService: UtilityService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store) {
    super();
  }

  getTableDataMetaDict(): any {
    return this.tableDataMetaDict;
  }

  initializeTableData(data: any, tableDataMetaDict: any): void {
    this.tableData = this.transformDataForMaterialTable(data, tableDataMetaDict);
    this.tableData = [...this.tableData];
  }

  updateSelectedRowDataByNer_Id(ner_id: number) {
    this.showTable = !ner_id;
    this.selectedRowData = this._custumNerDataForSmartTable && this._custumNerDataForSmartTable.find((custumNerData) => {
      return custumNerData.id === ner_id;
    });
    if (this.selectedRowData) {
      this.prepareDataForDetailedViewAndChangeParams(this.selectedRowData);
    }
  }

  ngOnInit() {

    this.routeName = this.activatedRoute.snapshot.data['routeName'];

    this.activatedRoute.queryParamMap
      .subscribe((value: ParamMap) => {
        if (value.get('ner_id')) {
          const ner_id = Number(value.get('ner_id'));
          ner_id && this.updateSelectedRowDataByNer_Id(ner_id);
          // this.showTable = !ner_id;
          // this.selectedRowData = this._custumNerDataForSmartTable.find((custumNerData)=>{
          //   return custumNerData.id === ner_id
          // });
          // if(this.selectedRowData)this.prepareData(this.selectedRowData);
        }
      });
    this.currentPageNumber = Number(this.activatedRoute.snapshot.queryParamMap.get('page') || '1');
    // this.handontable_colHeaders = this.constantsService.HANDSON_TABLE_KNOWLEDGE_BASE_colHeaders;
    // this.handontable_column = this.constantsService.HANDSON_TABLE_KNOWLEDGE_BASE_columns;
    // if (this.bot) {
    //   /*this block should not run in case this component is called by parent component: view-customner.component*/
    //   let url = this.constantsService.getCustomBotNER(this.bot.id);
    //   let headerData: IHeaderData = {'bot-access-token': this.bot.bot_access_token};
    //   this.serverService.makeGetReq({url, headerData})
    //     .subscribe((value: { objects: [ICustomNerItem] }) => {
    //       this.custumNerDataForSmartTable = value.objects;
    //     });
    // }
    this.loggeduser$.subscribe((value) => this.loggeduser = value);
  }

  textChanged(codeText) {
    this.codeTextOutPutFromCodeEditor = codeText;
  }

  updateOrSaveConcept(data: { key: string, ner_type: string, conflict_policy: string, codeTextOutPutFromCodeEditor: string, handsontableData: any }) {

    let body: ICustomNerItem = data;
    // this.type = this.bot?'bot':'enterprise';
    if (data.ner_type === 'single_match' || data.ner_type === 'with_metadata' || data.ner_type === 'double_match' || data.ner_type === 'regex') {
      // body = {values: data.codeTextOutPutFromCodeEditor.split(',')};
      body = {values: data.codeTextOutPutFromCodeEditor, ...body};
    } else if (data.ner_type === 'database') {
      const handontableDataClone = JSON.parse(JSON.stringify(data.handsontableData));
      const column_headers = handontableDataClone[0] || ['', '', ''];
      handontableDataClone.shift();
      let handsontableDataSerialized: any[] = handontableDataClone.map((row) => {
        const obj = {};
        let isRow = false;
        row.forEach((str, index) => {
          isRow = isRow || ((str !== null) && (str !== ''));
        });
        if (isRow) {
          row.forEach((str, index) => {
            const key = column_headers[index];
            obj[key] = str;
          });
          return obj;
        } else {
          return;
        }
        // let obj = {};
        // row.forEach((str, index) => {
        //   let key = column_headers[index];
        //   obj[key] = str;
        // });
        // return obj;
      });

      console.log('shoaib sadas', handsontableDataSerialized);
      handsontableDataSerialized = handsontableDataSerialized.filter(function (el) {
        return el != null;
      });

      if(!handsontableDataSerialized || handsontableDataSerialized.length===0){
        this.utilityService.showErrorToaster("There must be atleast two rows in table");
        return;
      }
      body = {'column_headers': column_headers, values: handsontableDataSerialized, ...body};
    }

    let output: ICustomNerItem;
    if (this.selectedRowData && this.selectedRowData.id) {/*if there is not id, this means we are creating new customner*/
      output = Object.assign(this.selectedRowData, body);
    } else {
      const bot_id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      const type = bot_id ? 'bot' : 'enterprise';

      const newRowData: ICustomNerItem = output = {
        'bot_id': bot_id, //this.bot.id,
        // "column_headers": any[],
        'column_nermap': {},
        'conflict_policy': data.conflict_policy,
        /*change date format*/
        // 'created_at': new Date().toISOString(),
        // 'created_by': this.loggeduser.user.id,
        'enterprise_id': this.loggeduser.user.enterprise_id,
        'key': data.key,
        'ner_type': data.ner_type,
        // "process_raw_text": false,
        'type': type,
        // 'updated_at': new Date().toISOString(),
        // "updated_by": 0,
        // "values"?: any[],
        'column_headers': [],
        // "process_raw_text" : false,
        ...body
      };
      // this.custumNerDataForSmartTable.push(newRowData);
    }

    this.updateOrSaveParentNers$.emit(output);

    // if (this.bot) {
    //   // this.custumNerDataForSmartTable.push(data);
    //   LoggingService.log(this.custumNerDataForSmartTable);
    //   let headerData: IHeaderData = {'bot-access-token': this.bot.bot_access_token};
    //   if (this.selectedRowData && this.selectedRowData.id) {
    //     /*update customner*/
    //     let url = this.constantsService.updateCustomBotNER(this.selectedRowData.id);
    //     this.serverService.makePutReq({url, body: body, headerData})
    //       .subscribe((value) => {
    //         LoggingService.log(value);
    //         this.utilityService.showSuccessToaster("Successfully saved");
    //       });
    //   } else {
    //     /*create a new customner*/
    //     body = {
    //       ...body,
    //       'bot_id': this.bot.id,
    //       // "column_headers": any[],
    //       'column_nermap': {},
    //       'conflict_policy': data.conflict_policy,
    //       /*change date format*/
    //       // 'created_at': new Date().toISOString(),
    //       // 'created_by': this.loggeduser.user.id,
    //       'enterprise_id': this.loggeduser.user.enterprise_id,
    //       'key': data.key,
    //       'ner_type': data.ner_type,
    //       // "process_raw_text": false,
    //       'type': this.type,
    //       // 'updated_at': new Date().toISOString(),
    //       // "updated_by": 0,
    //       // "values"?: any[]
    //     };
    //     let url = this.constantsService.createNewCustomBotNER();
    //     this.serverService.makePostReq({url, body: body, headerData})
    //       .subscribe((value) => {
    //         this.utilityService.showSuccessToaster("Successfully saved");
    //       });
    //   }
    // } else {
    //   // this.custumNerDataForSmartTable.push(data);//?????what is this line doing
    //   if (this.selectedRowData && this.selectedRowData.id) {
    //     /*update customner*/
    //     let url = this.constantsService.updateEnterpriseNer(this.selectedRowData.id);
    //     this.serverService.makePutReq({url, body: body})
    //       .subscribe((value) => {
    //         this.utilityService.showSuccessToaster("Successfully saved");
    //       });
    //   } else {
    //     /*create a new customner*/
    //     body = {
    //       ...body,
    //       // 'bot_id': this.bot.id,
    //       // "column_headers": any[],
    //       'column_nermap': {},
    //       'conflict_policy': data.conflict_policy,
    //       /*change date format*/
    //       'created_at': new Date().toISOString(),
    //       'created_by': this.loggeduser.user.id,
    //       'enterprise_id': this.loggeduser.user.enterprise_id,
    //       'key': data.key,
    //       'ner_type': data.ner_type,
    //       // "process_raw_text": false,
    //       'type': this.type,
    //       'updated_at': new Date().toISOString(),
    //       // "updated_by": 0,
    //       // "values"?: any[]
    //     };
    //     this.custumNerDataForSmartTable.push(body)
    //     let url = this.constantsService.createNewCustomBotNER();
    //     this.serverService.makePostReq({url, body: body})
    //       .subscribe((value) => {
    //         this.utilityService.showSuccessToaster("Successfully saved");
    //       });
    //   }
    // }
  }

  async openFile(inputEl) {
    this.codeTextInputToCodeEditor = await this.utilityService.readInputFileAsText(inputEl);
  }

  rowClicked($event) {

    this.selectedRowData = $event.data;
    console.log(this.selectedRowData);
    this.prepareDataForDetailedViewAndChangeParams(this.selectedRowData);
  }

  prepareDataForDetailedViewAndChangeParams(selectedRowData) {
    this.router.navigate(['.'], {
      queryParams: {ner_id: selectedRowData.id},
      queryParamsHandling: 'merge',
      relativeTo: this.activatedRoute
    });
    this.showTable = false;
    this.codeTextInputToCodeEditor = selectedRowData.values && selectedRowData.values;
    if (selectedRowData.ner_type === 'database') {
      // let valueKeys = selectedRowData.column_headers;
      const valueKeys = Object.keys(selectedRowData.values[0]);
      this.handontableData = selectedRowData.values.map((value) => {
        return valueKeys.map((valueKey) => {
          return value[valueKey];
        });
      });
      this.handontableData.unshift(valueKeys);
    } else {
      this.handontableData = null;
    }
  }

  reinitialise() {
    // /*reinitialize class variable*/
    // this.ner_type = 'single_match';
    // this.key = '';
    // this.conflict_policy = 'override';
    // this.codeTextInputToCodeEditor = '';
    this.selectedRowData = {};
    this.handontableData = [['', '', '']];
    /*show create ner stuff*/
    this.showTable = false;
  }

  pageChanged(pageNumber) {
    this.pageChanged$.emit(pageNumber);
  }

  showNerSmartTable() {
    this.showTable = true;
    this.router.navigate(['.'], {
      queryParams: {ner_id: null},
      queryParamsHandling: 'merge',
      relativeTo: this.activatedRoute
    });
  }

  log(selectedRowData) {
    console.log(selectedRowData);
    console.log(this.selectedRowData);
  }

  tableData;

}
