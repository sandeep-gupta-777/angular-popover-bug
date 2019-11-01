import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {BotSessionSmartTableModal} from '../bot-sessions/bot-session-smart-table-modal';
import {MlIntentsSmartTableModal} from './ml-intents-smart-table-modal';
import {ConstantsService} from '../../../constants.service';
import {IBot} from '../../interfaces/IBot';
import {intentMock} from './intent-mock';
import {IIntent} from '../../../typings/intents';
import {Popover} from '../../../popover/popover.service';
import {DatePipe} from '@angular/common';
import {MlIntentsSmartTable} from '../ml-model/ml-intents/ml-intents-smart-table';
import {IEntitiesItem, IIntentsItem} from '../../interfaces/mlBots';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ml-intents',
  templateUrl: './ml-intents.component.html',
  styleUrls: ['./ml-intents.component.scss']
})
export class MlIntentsComponent implements OnInit {

  currentPage = 1;
  pageSize = 10;
  isReloading = false;
  totalIntentsLength = 10;
  mlIntentsSmartTableObj: MlIntentsSmartTable;
  @Input() bot: IBot;
  _intentData: IIntentsItem[];
  _entitiesList: IEntitiesItem[];
  @Input() set entitiesList(value: IEntitiesItem[]) {
    this._entitiesList = value;
  }



  @Input() set intentData(value: IIntentsItem[]) {
    if (value) {
      this.currentPage = 1;
      this.totalIntentsLength = value.length;
      this._intentData = value;
      const sliceData = this._intentData.slice((this.currentPage - 1) * 10, (this.currentPage) * 10);
      this.mlIntentsSmartTableObj = new MlIntentsSmartTable(sliceData, this.getTableDataMetaDict(), {datePipe: this.datePipe});
      this.mlIntentsSmartTableObj.initializeTableData(sliceData);
    }
  }

  getTableDataMetaDict(): any {
    return this.constantsService.SMART_TABLE_ML_INTENTS_TEMPLATE;
  }

  goToPage(val) {
    debugger;
    this.currentPage = val.page;
    if (this._intentData) {
      const sliceData = this._intentData.slice((this.currentPage - 1) * 10, (this.currentPage) * 10);
      this.mlIntentsSmartTableObj = new MlIntentsSmartTable(sliceData, this.getTableDataMetaDict(), {datePipe: this.datePipe});
      this.mlIntentsSmartTableObj.initializeTableData(sliceData);
    }
    this.goToPage$.emit(val.page);
  }

  sessionsSmartTableDataModal: MlIntentsSmartTableModal;
  intents = intentMock.objects;
  @Input() view: 'table' | 'detail' = 'table';
  selectedIntent: any;

  constructor(
    private constantsService: ConstantsService,
    private datePipe: DatePipe,
    private popper: Popover,
    private router: Router,
  ) {
  }

  ngOnInit() {

    this.sessionsSmartTableDataModal = this.tableDataFactory();
    this.sessionsSmartTableDataModal.refreshData(this.intents);
  }

  tableDataFactory() {
    const tableDataModel = new MlIntentsSmartTableModal(this.intents,
      this.constantsService.SMART_TABLE_INTENT_TABLE_DATA_META_DICT_TEMPLATE,
      {constantsService: this.constantsService, bot: this.bot});
    return tableDataModel;
  }

  intentClickedHandler(intentTableRowData) {
    this.view = 'detail';
    this.selectedIntent = intentTableRowData.data;
    this.viewChanged$.emit(this.view);
    this.selectedIntentChanged$.emit(this.selectedIntent);
    // this.router.navigate([`core/botdetail/mlbot/${this.bot.id}`], {
    //   queryParams: {
    //     intent_id: intentTableRowData.data.intent_id,
    //     build: 'ml_model'
    //   }
    // });
  }

  @Output() viewChanged$ = new EventEmitter();
  @Output() goToPage$ = new EventEmitter();
  @Output() selectedIntentChanged$ = new EventEmitter();
//adas
  // textSelected(e, tpl, utterance: string) {
  //   const target = e.target as HTMLElement;
  //   if (target.classList.contains('bg-red')) {
  //     return;
  //   }
  //   var selection;
  //
  //   if (window.getSelection) {
  //     selection = window.getSelection();
  //   } else if ((<any>document).selection) {
  //     selection = (<any>document).selection.createRange();
  //   }
  //
  //   const start = utterance.indexOf(selection.toString());
  //   const end =  start + selection.toString().length;
  //
  //   // selection.toString() !== '' && alert('"' + selection.toString() + '" was selected at ' + e.pageX + '/' + e.pageY);
  //   const random = this.replaceSelectedText(selection, start, end);
  //   const $selection = e.target as HTMLElement;
  //   let x = $selection.querySelector(`[data-id="${random}"]`);
  //   this.show2(x, tpl);
  //
  // }
  //
  // replaceSelectedText(selection, start, end) {
  //   const random = Date.now();
  //   const obj = {
  //     'cmd': 'insertHTML',
  //     'val': '&lt;h3&gt;Life is great!&lt;/h3&gt;',
  //     'icon': 'code',
  //     'desc': 'Inserts an HTML string at the insertion point (deletes selection). Requires a valid HTML string to be passed in as a value argument. (Not supported by Internet Explorer.)'
  //   };
  //
  //   // var selection = document.selection.createRange();
  //   if (selection === '') {
  //     return;
  //   }
  //
  //   document.execCommand(obj.cmd, false, `<span class="bg-red bg-red2 bg-red1" data-position="entity-${start}-${end}" data-id="${random}">${selection.toString()}<span>`);
  //   console.log('asdasd');
  //   // alert();
  //   return random;
  // }
  //
  // show(origin, content: TemplateRef<any>) {
  //   console.log('opening wrt', origin);
  //   const ref = this.popper.open<{ skills: number[] }>({
  //     // content,
  //     content: 'Hello world2!',
  //     // content: InsidePopoverComponent,
  //     origin,//: document.querySelector('#test11'),
  //     width: '200px',
  //     data: {
  //       skills: [1, 2, 3]
  //     }
  //   });
  //
  //   ref.afterClosed$.subscribe(res => {
  //     console.log(res);
  //   });
  //
  // }
  //
  //
  // show2(target, tpl) {
  //   if (target.classList.contains('bg-red')) {
  //     this.show(target, tpl);
  //   }
  // }


}
