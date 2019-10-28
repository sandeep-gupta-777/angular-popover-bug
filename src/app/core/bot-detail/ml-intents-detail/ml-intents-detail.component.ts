import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {MlIntentsSmartTable} from '../ml-model/ml-intents/ml-intents-smart-table';
import {IBot} from '../../interfaces/IBot';
import {IEntitiesItem, IIntentsItem} from '../../interfaces/mlBots';
import {MlIntentsSmartTableModal} from '../ml-intents/ml-intents-smart-table-modal';
import {intentMock} from '../ml-intents/intent-mock';
import {ConstantsService} from '../../../constants.service';
import {DatePipe} from '@angular/common';
import {Popover} from '../../../popover/popover.service';
import {IEntityMarker, IIntent} from '../../../typings/intents';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {InsidePopoverComponent} from '../../../popover/inside-popover/inside-popover.component';
import {UtilityService} from '../../../utility.service';
import {ServerService} from '../../../server.service';
import {IHeaderData} from '../../../../interfaces/header-data';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-ml-intents-detail',
  templateUrl: './ml-intents-detail.component.html',
  styleUrls: ['./ml-intents-detail.component.scss']
})
export class MlIntentsDetailComponent implements OnInit {

  currentPage = 1;
  pageSize = 10;
  isReloading = false;
  form: FormGroup;
  totalIntentsLength = 10;
  mlIntentsSmartTableObj: MlIntentsSmartTable;
  @Input() bot: IBot;
  _intentData: IIntentsItem[];
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
    this.currentPage = val.page;
    if (this._intentData) {
      const sliceData = this._intentData.slice((this.currentPage - 1) * 10, (this.currentPage) * 10);
      this.mlIntentsSmartTableObj = new MlIntentsSmartTable(sliceData, this.getTableDataMetaDict(), {datePipe: this.datePipe});
      this.mlIntentsSmartTableObj.initializeTableData(sliceData);
    }
  }

  @Input() entityList: IEntitiesItem[];
  sessionsSmartTableDataModal: MlIntentsSmartTableModal;
  intents = intentMock.objects;
  @Input() view: 'table' | 'detail' = 'table';
  _selectedIntent: IIntent;
  @Input() set selectedIntent(val: IIntent) {
    this._selectedIntent = val;
    this.form && this.form.patchValue(val);
  }

  @Output() saveOrUpdateIntent$ = new EventEmitter<IIntent>();
  @Output() saveAndTrain$ = new EventEmitter<IIntent>();
  @Output() showCreateNewIntentModel$ = new EventEmitter();

  constructor(
    private constantsService: ConstantsService,
    private datePipe: DatePipe,
    private popper: Popover,
    private formBuilder: FormBuilder,
    private serverService: ServerService,
    private changeDetectorRef: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute
  ) {
  }


  intent_id: string;

  ngOnInit() {
    this.intent_id = this.activatedRoute.snapshot.queryParams['intent_id'];
    this.sessionsSmartTableDataModal = this.tableDataFactory();
    this.sessionsSmartTableDataModal.refreshData(this.intents);
    this.form = this.formBuilder.group({
      name: '',
      template_key: '',
      reset_state: false
    });
    this.form && this._selectedIntent && this.form.patchValue(this._selectedIntent);

  }

  tableDataFactory() {
    const tableDataModel = new MlIntentsSmartTableModal(this.intents,
      this.constantsService.SMART_TABLE_INTENT_TABLE_DATA_META_DICT_TEMPLATE,
      {constantsService: this.constantsService, bot: this.bot});
    return tableDataModel;
  }

  intentClickedHandler(intentTableRowData) {

    this.view = 'detail';
    this._selectedIntent = intentTableRowData.data;
    this.viewChanged$.emit(this.view);
  }

  @Output() viewChanged$ = new EventEmitter();
  @Output() selectedIntentChanged$ = new EventEmitter();

  textSelected(e, tpl, index, utterance: string) {

    const target = e.target as HTMLElement;
    if (target.classList.contains('bg-red') && (window.getSelection().toString() === target.textContent)) {
      return;
    }
    var selection;

    if (window.getSelection) {
      selection = window.getSelection();
    } else if ((<any>document).selection) {
      selection = (<any>document).selection.createRange();
    }

    if (!selection.toString() || !selection.toString().trim()) {
      return;
    }

    // selection.toString() !== '' && alert('"' + selection.toString() + '" was selected at ' + e.pageX + '/' + e.pageY);
    // const start = utterance.indexOf(selection.toString());
    const {start, end} = this.getPositionOfStr(utterance, selection.toString());
    const markers = this._selectedIntent.utterances[index].entities.filter((entity) => {
      if ((entity.start <= start && start <= entity.end) || (entity.start <= end && end <= entity.end)) {

        let oldMarker = document.querySelector(`[data-position="entity-${entity.start}-${entity.end}"]`);
        console.log(oldMarker);
        // setTimeout(() => {
        //   oldMarker.outerHTML = oldMarker.textContent;
        // });
        return false;
      }
      return true;
    });

    // this._selectedIntent.utterances[index].entities = markers;
    // markers.push({
    //   start,
    //   end,
    //   entity_id: '',
    //   type: ''
    // });
    const selectionStr = selection.toString();
    // this._selectedIntent = JSON.parse(JSON.stringify(this._selectedIntent));


    setTimeout(() => {
      const random = this.replaceSelectedText(selectionStr, start, end);
      const $selection = e.target as HTMLElement;
      const x = $selection.querySelector(`[data-id="${random}"]`);
      this.show2(x, tpl, index);
    },);

  }

  getPositionOfStr(str, subStr) {
    const start = str.indexOf(subStr);
    const end = start + subStr.length;
    return {
      start, end
    };
  }

  replaceSelectedText(selectionStr, start, end) {
    const random = Date.now();
    const obj = {
      'cmd': 'insertHTML',
      'val': '&lt;h3&gt;Life is great!&lt;/h3&gt;',
      'icon': 'code',
      'desc': 'Inserts an HTML string at the insertion point (deletes selection). Requires a valid HTML string to be passed in as a value argument. (Not supported by Internet Explorer.)'
    };

    // var selection = document.selection.createRange();
    if (selectionStr === '') {
      return;
    }
    document.execCommand(obj.cmd, false, `<span class="bg-red bg-red2 bg-red1" data-position="entity-${start}-${end}" data-id="${random}">${selectionStr}<span>`);
    return random;
  }

  show(origin: HTMLElement, content: TemplateRef<any>, index) {
    const position = origin.getAttribute('data-position');
    const value = origin.textContent;
    const start = Number(position.split('-')[1]);
    const end = Number(position.split('-')[2]);
    const ref = this.popper.open<{ entityList: IEntitiesItem[], selectedIntent: IIntent, data: any, showCreateNewIntentModel$: EventEmitter<any> }>({
      content: InsidePopoverComponent,
      origin,
      width: '200px',
      data: {
        entityList: this.entityList,
        selectedIntent: this._selectedIntent,
        data: {start, index, end, value},
        showCreateNewIntentModel$: this.showCreateNewIntentModel$
      }
    });


    ref.afterClosed$.subscribe((res: any) => {

      const entityMarker: IEntityMarker = res.data && res.data.marker;
      const action: string = res.data && res.data.action;
      if (!entityMarker) {
        this._selectedIntent = UtilityService.cloneObj(this._selectedIntent);
        return;
      }
      const markerIndex = this._selectedIntent.utterances[index].entities.findIndex((entity: any) => {
        return entity.start === Number(start);
      });
      if (markerIndex !== -1) {
        this._selectedIntent.utterances[index].entities[markerIndex] = entityMarker;
        const color = this.getColorByEntity(entityMarker.entity_id);
        origin.style.backgroundColor = color;
        if (action === 'remove') {
          this._selectedIntent.utterances[index].entities.splice(markerIndex, 1);
          this._selectedIntent = UtilityService.cloneObj(this._selectedIntent);
          debugger;
          return;
        }
      } else {
        this._selectedIntent.utterances[index].entities.push(entityMarker);
        const color = this.getColorByEntity(entityMarker.entity_id);
        origin.style.backgroundColor = color;
      }

      if (!this._selectedIntent.entities.find(e => e.entity_id === entityMarker.entity_id)) {
        const markedEntity = this.entityList.find((e) => e.entity_id === entityMarker.entity_id);
        this._selectedIntent.entities.push(markedEntity);
      }

    });

  }

  getColorByEntity(entity_id: string) {
    return this.entityList.find(e => e.entity_id === entity_id).color;
  }


  show2(target, tpl, index) {
    if (target.classList.contains('bg-red')) {
      this.show(target, tpl, index);
    }
  }

  showEntityMarkingLoader = false;

  addNewUtterance(utteranceForm: NgForm) {
    const utterance = utteranceForm.value.questionText;
    if (!this._selectedIntent) {
      this._selectedIntent = {};
    }
    if (!Array.isArray(this._selectedIntent.utterances)) {
      this._selectedIntent.utterances = [];
    }
    const url = this.constantsService.entityMarkingUrl();
    const body = {
      'utterance': utterance,
      'entities_priority': this.entityList.map((e) => {
        const {
          entity_id,
          required,
          template_key,
          counter,
        } = e;
        return {
          entity_id,
          required,
          template_key,
          counter,
        };
      })
    };
    const header: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
    this.showEntityMarkingLoader = true;
    this.serverService.makePostReq(({url, body, headerData: header}))
      .subscribe((res: { entities_found: IEntityMarker[] }) => {
        this.showEntityMarkingLoader = false;
        utteranceForm.reset();
        this._selectedIntent.utterances.unshift({
          utterance: utterance,
          entities: res.entities_found
        });
      });

  }

  saveAndTrain() {
    this.saveAndTrain$.emit({
      ...this._selectedIntent,
      name: this.form.value.name,
    });
  }

  saveOrUpdateIntent() {

    this.saveOrUpdateIntent$.emit({
      'entities': [],
      'utterances': [
        {
          'entities': [],
          'utterance': 'Default utterance. Without it api throws error.'
        }
      ],
      ...this._selectedIntent,
      name: this.form.value.name,
      ...this.form.value
    });
  }

  linkEntityHandler(entity: IEntitiesItem) {

    const {
      counter,
      entity_id,
      required,
      template_key
    } = entity;
    const {name, ...rest} = this.form.value;
    this._selectedIntent = this._selectedIntent || {};
    this._selectedIntent.entities = this._selectedIntent.entities || [];
    this._selectedIntent.entities.push(<any>{'counter': 3, required: true, entity_id, ...rest});
  }

  removeEntityHandler(entityToRemove: IEntitiesItem) {
    this._selectedIntent.entities = this._selectedIntent.entities.filter((entity) => {
      return entity.entity_id !== entityToRemove.entity_id;
    });

    this._selectedIntent.utterances = this._selectedIntent.utterances.map((item) => {
      return {
        ...item,
        entities: item.entities.filter(e => e.entity_id !== entityToRemove.entity_id)
      };
    });
    this._selectedIntent = JSON.parse(JSON.stringify(this._selectedIntent));
  }


  trackByIndex(index) {
    return index;
  }

  log(x) {
    console.log(x);
  }

}
