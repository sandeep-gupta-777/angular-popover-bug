import {ChangeDetectorRef, Component, EventEmitter, Input, NgZone, OnDestroy, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {MlIntentsSmartTable} from '../ml-model/ml-intents/ml-intents-smart-table';
import {IBot} from '../../interfaces/IBot';
import {IEntitiesItem, IIntentsItem} from '../../interfaces/mlBots';
import {MlIntentsSmartTableModal} from '../ml-intents/ml-intents-smart-table-modal';
import {intentMock} from '../ml-intents/intent-mock';
import {ConstantsService} from '../../../constants.service';
import {DatePipe} from '@angular/common';
import {Popover} from '../../../popover/popover.service';
import {EMarkerAttributes, IEntityMarker, IIntent} from '../../../typings/intents';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {InsidePopoverComponent} from '../../../popover/inside-popover/inside-popover.component';
import {UtilityService} from '../../../utility.service';
import {ServerService} from '../../../server.service';
import {IHeaderData} from '../../../../interfaces/header-data';
import {ActivatedRoute} from '@angular/router';
import {ErrorStateMatcher} from '@angular/material';
import {debounceTime} from 'rxjs/operators';
import {MlService} from '../ml-model/ml.service';
import {EventService} from '../../../event.service';
import {DomService} from '../../../dom.service';
import {EAllActions} from '../../../typings/enum';
import {FormsService} from '../../../forms.service';
import {IMLResponse} from '../../../typings/reply';
import {MlReplyService} from '../ml-reply/ml-reply.service';

export class ConfirmValidParentMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {

    return control.invalid && control.touched;
  }
}

@Component({
  selector: 'app-ml-intents-detail',
  templateUrl: './ml-intents-detail.component.html',
  styleUrls: ['./ml-intents-detail.component.scss']
})
export class MlIntentsDetailComponent implements OnInit, OnDestroy {
  ConfirmValidParentMatcher = ConfirmValidParentMatcher;
  currentPage = 1;
  pageSize = 10;
  isReloading = false;
  form: FormGroup;
  isEntityValid = true;
  totalIntentsLength = 10;
  myEAllActions = EAllActions;
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
  tempMarkingWord = 'xxxxxxxxxxxxx1123';

  @Input() set selectedIntent(val: IIntent) {
    this._selectedIntent = val;
    this.form && this.form.patchValue(val);
  }

  @Output() saveOrUpdateIntent$ = new EventEmitter<IIntent>();
  @Output() deleteIntent$ = new EventEmitter<IIntent>();
  @Output() saveAndTrain$ = new EventEmitter<IIntent>();
  @Output() showCreateNewIntentModel$ = new EventEmitter();
  keys;
  mlResponse: IMLResponse;

  constructor(
    private constantsService: ConstantsService,
    private datePipe: DatePipe,
    private popper: Popover,
    private mlReplyService: MlReplyService,
    private formBuilder: FormBuilder,
    private serverService: ServerService,
    private utilityService: UtilityService,
    private changeDetectorRef: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
    private _ngZone: NgZone
  ) {
  }

  @ViewChild('tpl') tpl: TemplateRef<any>;
  intent_id: string;

  ngOnDestroy(): void {

    document.removeEventListener('mouseup', this.y);
    document.removeEventListener('keydown', this.y);
    document.removeEventListener('mouseup', this.y);
    document.removeEventListener('mouseup', this.copySelectedTextCaller);
    document.removeEventListener('keydown', this.copySelectedTextCaller);
  }

  y;

  ngOnInit() {
    this.getResponseTemplates();
    this.inputChanged$.pipe(debounceTime(100)).subscribe((event: any) => {
      if (event.target.textContent.includes(this.tempMarkingWord)) {
        return;
      }
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          try {
            this.correctMarkerPosition(this.selectedIntentBackup);
          } catch (e) {
            console.log(e);
          }
        });
      });
    });

    this.y = ($event) => {
      try {
        $event.stopPropagation();
        let target = window.getSelection().getRangeAt(0).endContainer.parentNode as HTMLElement;
        while (target !== null && !target.classList.contains('utter')) {
          target = target.parentElement;
        }
        if (!target.classList.contains('utter')) {
          return;
        }
        const event = {target};
        const index = Array.from(document.getElementsByClassName('utter')).findIndex(item => item === event.target);
        this.textSelected(event, this.tpl, index, this._selectedIntent.utterances[index].utterance);
      } catch (e) {
        document.removeEventListener('mouseup', this.copySelectedTextCaller);
        document.removeEventListener('keydown', this.copySelectedTextCaller);
      }
    };
    document.addEventListener('mouseup', this.y);
    // document.removeEventListener('mouseup', this.y);
    EventService.entityListUpdated$.subscribe(({entityList}) => {
      this.entityList = entityList;
      MlService.entityList = entityList;
    });
    this.intent_id = this.activatedRoute.snapshot.queryParams['intent_id'];
    this.sessionsSmartTableDataModal = this.tableDataFactory();
    this.sessionsSmartTableDataModal.refreshData(this.intents);
    this.form = this.formBuilder.group({
      name: ['', [FormsService.startWithAlphanumericValidator(), FormsService.lengthValidator({min: 1, max: 64})]],
      template_key: ['', [/*FormsService.startWithAlphanumericValidator(),*/ FormsService.lengthValidator({min: 1, max: 64})]],
      reset_state: false
    });
    this.form && this._selectedIntent && this.form.patchValue(this._selectedIntent);
  }

  updateResponse({data, modalRefWrapper, fc}) {
    const newTemplates = {
      [data.template_key]: {
        'logic': '',
        'response': [
          {
            'include': [
              'web'
            ],
            'text': [
              data.text_response
            ]
          }
        ],
        'response_type': 'rich'
      }
    };

    this.mlResponse.templates = {
      ...this.mlResponse.templates,
      ...newTemplates
    };
    this.mlReplyService.updateResponseTemplates(this.bot, this.mlResponse, this.mlResponse.id)
      .subscribe((value: IMLResponse) => {
        this.keys.push(data.template_key);
        fc.patchValue(data.template_key);
        modalRefWrapper.ref.close();
        this.utilityService.showSuccessToaster('Template key created');
        this.getResponseTemplates();
      });
  }

  getResponseTemplates() {

    this.mlReplyService.getResponseTemplates(this.bot)
      .subscribe((value: IMLResponse) => {
        this.keys = Object.keys(value.templates);
        this.mlResponse = value;
      });
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

  getPositionMarker($marker: HTMLElement) {
    if (!$marker) {
      return null;
    }
    const position = $marker.getAttribute(EMarkerAttributes.data_position);
    if (!position) {
      return null;
    }
    return {
      start: position.split('-')[1],
      end: position.split('-')[2],
      id: $marker.getAttribute(EMarkerAttributes.data_id),
      bg: $marker.style.backgroundColor
    };
  }

  /**
   * removeCrossover
   * doesnt destroy selection
   * */
  removeCrossover(target: HTMLElement) {

    let entities = [];
    let contentContainer;
    while (!target.classList.contains('utter')) {
      target = target.parentElement;
    }
    contentContainer = target;
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const startContainer = selection.getRangeAt(0).startContainer.parentNode as HTMLElement;
      const endContainer = selection.getRangeAt(0).endContainer.parentNode as HTMLElement;

      if (startContainer != contentContainer) {
        // startContainer.classList.remove('bg-red');
        const positions = this.getPositionMarker(startContainer);
        positions && entities.push(positions);
      }
      if (endContainer != contentContainer) {
        // endContainer.classList.remove('bg-red');
        const positions = this.getPositionMarker(endContainer);
        positions && entities.push(positions);
      }

      if (selection.toString().length === contentContainer.textContent.length) {
        entities = [];
        Array.from(contentContainer.getElementsByClassName('bg-red')).forEach(($marker: HTMLElement) => {
          const positions = this.getPositionMarker($marker);
          positions && entities.push(positions);
        });
      }
    }
    return entities;
  }

  selectedIntentBackup;

  copySelectedText = ((e) => {
    if (e.which === 67 && e.ctrlKey) {
      const str = window.getSelection().toString() || this.strToCopy;
      if (str) {
        this.utilityService.copyToClipboard(str);
      }
      this.strToCopy = null;
    }
  });
  strToCopy;
  copySelectedTextCaller;

  utterTextContentBackup = '';

  textSelected(e, tpl, index, utterance: string) {
    const selectedTarget = this.getFocusedElement() as HTMLElement;
    const container = document.querySelector('.utter-wrapper');
    if (!DomService.isDescendant(container, selectedTarget)) {
      return;
    }
    const utterInnerHTML = this.getUtteranceByIndex(index).innerHTML;
    this.utterTextContentBackup = this.getUtteranceByIndex(index).textContent;
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    this.strToCopy = window.getSelection().toString();
    if (this.strToCopy) {
      this.copySelectedTextCaller = this.copySelectedText.bind(this);
    }
    document.removeEventListener('keydown', this.copySelectedTextCaller);
    document.addEventListener('keydown', this.copySelectedTextCaller);
    const target = e.target as HTMLElement;
    if (target.classList.contains('bg-red') && (window.getSelection().toString() === target.textContent)) {
      return;
    }

    let selection;
    if (window.getSelection) {
      selection = window.getSelection();
    } else if ((<any>document).selection) {
      selection = (<any>document).selection.createRange();
    }

    if (!selection.toString() || !selection.toString().trim()) {
      return;
    }
    const selectionStr = selection.toString();
    const positionsToBeRemoved: any[] = this.removeCrossover(target);
    positionsToBeRemoved.forEach((value) => {
      const wrapper = document.getElementsByClassName('utter')[index];
      let x = wrapper.querySelector(`[${EMarkerAttributes.data_position}="entity-${value.start}-${value.end}"]`) as HTMLElement;
      if (!x) {
        x = document.getElementsByClassName('utter')[index].querySelector(`[${EMarkerAttributes.data_id}="${value.id}"]`);
      }
      x.classList.remove('bg-red');
      this.setBgColor(x, 'transparent');
    });

    this.correctMarkerPosition();
    const {start, end} = this.replaceSelectedText(utterance.endsWith(selectionStr));
    const utter = this.getUtteranceByIndex(index);
    const markerDataInUtter = this.getMarkerData([utter]);
    utter.innerHTML = MlService.replaceX(this.utterTextContentBackup, markerDataInUtter[0].entities, this.entityList);
    const x = document.getElementsByClassName('utter')[index].querySelector(`[${EMarkerAttributes.data_position}="entity-${start}-${end}"]`);
    this.show2(x, tpl, index, positionsToBeRemoved, true, utterInnerHTML);
  }

  // removeAllMarkersBetweenRange(start, end, index) {
  //   this._selectedIntent.utterances[index].entities.filter((marker) => {
  //     if (marker.start <= start && marker.end <= marker.end) {
  //       return false;
  //     }
  //     return true;
  //   });
  // }

  getPositionOfStr(str, subStr) {
    const start = str.indexOf(subStr);
    const end = start + subStr.length;
    return {
      start, end
    };
  }


  getUtteranceByIndex(index: number) {
    return document.getElementsByClassName('utter')[index];
  }


  createSelection(index, start, end) {
    /*https://stackoverflow.com/questions/17675056/set-selection-by-range-in-javascript*/
    const node = this.getUtteranceByIndex(index).firstChild;
    const range = document.createRange();
    range.setStart(node, 0);
    range.setEnd(node, 4);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  replaceSelectedText(isEnd) {
    let start = 0, end = 0;
    const random = Date.now();
    const selectionStr = window.getSelection().toString();
    if (window.getSelection().toString() === '') {
      return;
    }

    document.execCommand('insertHTML', false,
      `<span class="bg-red"
                ${EMarkerAttributes.data_position}="entity-${start}-${end}"
                ${EMarkerAttributes.data_entity_id}="${-1}"
                ${EMarkerAttributes.data_id}="${random}">${this.tempMarkingWord}<span> <span></span>`);

    const x = document.querySelector(`[${EMarkerAttributes.data_id}="${random}"]`);
    let parent = x.parentElement;
    while (parent !== null && !parent.classList.contains('utter')) {
      parent = parent.parentElement;
    }
    start = parent.textContent.split(this.tempMarkingWord)[0].length;
    end = start + selectionStr.replace(/\s*$/, '').length;
    x.setAttribute(EMarkerAttributes.data_position, `entity-${start}-${end}`);
    x.textContent = selectionStr;
    return {
      start, end
    };
  }

  markerInputEditable = true;

  show(origin: HTMLElement, content: TemplateRef<any>, index, positionsToBeRemoved = [], isNew, utterInnerHTML) {
    const position = origin.getAttribute(EMarkerAttributes.data_position);
    const value = origin.textContent;
    const start = Number(position.split('-')[1]);
    const end = Number(position.split('-')[2]);
    const entity_id = UtilityService.getDataAttribute(origin, EMarkerAttributes.data_entity_id);
    this.markerInputEditable = false;
    const ref = this.popper.open<{ entityList: IEntitiesItem[], selectedIntent: IIntent, data: any, showCreateNewIntentModel$: EventEmitter<any> }>({
      content: InsidePopoverComponent,
      origin,
      width: '200px',
      data: <any>{
        entityList: this.entityList,
        selectedIntent: this._selectedIntent,
        data: {start, index, end, value, entity_id, origin},
        isNew,
        showCreateNewIntentModel$: this.showCreateNewIntentModel$
      }
    });


    ref.afterClosed$.subscribe((res: any) => {
      document.removeEventListener('keydown', this.copySelectedTextCaller);
      this.markerInputEditable = true;
      const entityMarker: IEntityMarker = res.data && res.data.marker;
      const action: string = res.data && res.data.action;

      /*popup closed without submit*/
      if (!entityMarker || entityMarker.entity_id === '-1') {
        this.getUtteranceByIndex(index).innerHTML = utterInnerHTML;
        return;
      }

      const markerIndex = this._selectedIntent.entities.findIndex(e => e.entity_id === entityMarker.entity_id);

      /*remove existing marking*/
      if (action === 'remove') {
        UtilityService.removeDataAttributes(origin, [EMarkerAttributes.data_id, EMarkerAttributes.data_entity_id]);
        UtilityService.removeClass(origin, ['bg-red']);
        this.setBgColor(origin, 'transparent');
        return;
      }

      const color = this.getColorByEntity(entityMarker.entity_id);
      UtilityService.setDataAttribute(origin, EMarkerAttributes.data_entity_id, entityMarker.entity_id);
      origin.style.backgroundColor = color;


      const utter = this.getUtteranceByIndex(index);
      const markerDataInUtter = this.getMarkerData([utter]);
      // this.correctMarkerPosition(this.selectedIntentBackup);
      utter.innerHTML = MlService.replaceX(this.utterTextContentBackup, markerDataInUtter[0].entities, this.entityList);

      /*new marker with existing entity*/
      if (markerIndex !== -1) {
        this._selectedIntent.utterances[index].entities[markerIndex] = entityMarker;
      } else {/*new marker with new entity*/
        /*add into the list*/
        const markedEntity = this.entityList.find((e) => e.entity_id === entityMarker.entity_id);
        const {entity_id} = markedEntity;
        this._selectedIntent.entities.unshift(<any>{
          counter: 3,
          required: false,
          template_key: 'fallback', entity_id
        });
      }
    });

  }


  getMarkerById(id) {
    return document.querySelector(`[${EMarkerAttributes.data_id}="${id}"]`);
  }


  addMarkerClassById({id, bg}) {
    const marker = this.getMarkerById(id) as HTMLElement;
    if (!marker.classList.contains('bg-red')) {
      marker.classList.add('bg-red');
      marker.style.backgroundColor = bg;
    }
  }

  getColorByEntity(entity_id: string) {
    return this.entityList.find(e => e.entity_id === entity_id).color;
  }


  show2(target, tpl, index, positionsToBeRemoved, isNew, innerHTML) {
    innerHTML = innerHTML || this.getUtteranceByIndex(index).innerHTML;
    if (target.classList.contains('bg-red')) {
      this.show(target, tpl, index, positionsToBeRemoved, isNew, innerHTML);
    }
  }

  focusAtTheEndofMarking(target) {
    setTimeout(() => {
      const endSpace = /\s$/;
      const startSpace = /^\s/;
      if (endSpace.test(target.textContent)) {
        target.insertAdjacentHTML('afterend', `<span>&nbsp;</span><span contenteditable="true" id="100">&nbsp;</span>`);
      }
      else if (startSpace.test(target.textContent)) {
        target.insertAdjacentHTML('beforebegin', `<span>&nbsp;</span><span contenteditable="true" id="100">&nbsp;</span>`);
      }
      else {
        return;
      }

      DomService.focusOnContentEditable(document.getElementById('100'));
      target.textContent = target.textContent.trim();
    });
  }

  entityTextChangedHandler($event) {
    const target = this.getFocusedElement() as HTMLElement;
    if (target.nodeName === 'SPAN' && target.classList.contains('bg-red')) {
      if ((<any>event).keyCode === 32) {
        // $event.preventDefault();
        this.focusAtTheEndofMarking(target);
        return;
      }
      const position = UtilityService.getDataAttribute(target, EMarkerAttributes.data_position);
      const start = Number(position.split('-')[1]);
      const end = start + target.textContent.length - 1;
      UtilityService.setDataAttribute(target, EMarkerAttributes.data_position, `entity-${start}-${end}`);
    } else if ($event.target.textContent.trim() === '') {
      const cloneNode = $event.target.cloneNode();
      $event.target.replaceWith(cloneNode);
      setTimeout(() => {
        DomService.focusOnContentEditable(cloneNode);
      });
    }
  }

  getFocusedElement() {
    const node = getSelection().getRangeAt(0).commonAncestorContainer;
    let x = node.nodeType === 1 ? node : node.parentElement;
    return x;
  }

  showEntityMarkingLoader = false;

  addNewUtterance(utteranceForm: NgForm) {
    const utterance = utteranceForm.value.questionText;
    const url = this.constantsService.entityMarkingUrl();

    const body = {
      'utterance': utterance,
      'entities_priority': this._selectedIntent.entities.map((e) => {
        const {
          entity_id,
          required,
          template_key,
          counter,
        } = e;
        return {
          entity_id,
          required,
          template_key: template_key || 'fallback',
          counter: counter || 3,
        };
      })
    };
    const header: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot)
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
        const newEntities = this.entityList.filter(e => res.entities_found.find(found => found.entity_id === e.entity_id));
        newEntities.forEach((e) => {
          if (!this._selectedIntent.entities.find(se => se.entity_id === e.entity_id)) {

            let {
              entity_id,
              template_key,
              required,
              counter
            } = e;
            required = required || false;
            template_key = template_key || '';
            this._selectedIntent.entities.unshift(<any>{
              entity_id,
              required,
              template_key: template_key || 'fallback',
              counter: counter || 3,
            });
          }
        });
      });

  }


  getMarkerDataForUtter() {

  }


  getMarkerData($utters) {
    const entity = [];
    $utters.forEach(($utter, row) => {

      const $markings = Array.from($utter.getElementsByClassName('bg-red'));
      const markings = [];
      $markings.forEach(($marking: HTMLElement, col) => {
        const entity_id = UtilityService.getDataAttribute($marking, EMarkerAttributes.data_entity_id);
        const position = UtilityService.getDataAttribute($marking, EMarkerAttributes.data_position);
        const start = Number(position.split('-')[1]);
        const end = Number(position.split('-')[2]);
        if ($marking.textContent) {
          markings.push({
            entity_id,
            start,
            end,
            type: 'custom',
            value: $marking.textContent
          });
        }
      });
      entity.push({entities: markings, utterance: $utter.textContent});
    });

    return entity;
  }

  showError = false;

  saveAndTrain() {
    if (!this.form.valid) {
      this.markFormGroupTouched(this.form);
      this.showError = true;
      return;
    }
    this.updateEntityMarkingDataFromView();
    this.saveAndTrain$.emit({
      ...this._selectedIntent,
      name: this.form.value.name,
      ...this.form.value
    });
  }

  updateEntityMarkingDataFromView() {
    const $utters = Array.from(document.getElementsByClassName('utter'));
    this._selectedIntent.utterances = this.getMarkerData($utters);
  }

  markFormGroupTouched(formGroup: FormGroup) {
    FormsService.markFormGroupTouched(formGroup);
  }

  saveOrUpdateIntent() {
    if (!this.form.valid || (this._selectedIntent.utterances && this._selectedIntent.utterances.length === 0)) {
      this.markFormGroupTouched(this.form);
      this.showError = true;
      return;
    }
    this.correctMarkerPosition();
    this.updateEntityMarkingDataFromView();
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
    // const {name, ...rest} = this.form.value;

    this._selectedIntent = this._selectedIntent || {};
    this._selectedIntent.entities = this._selectedIntent.entities || [];
    this._selectedIntent.entities.unshift(<any>{'counter': 3, required: false, entity_id, template_key: 'fallback'});
    this._selectedIntent.entities = UtilityService.cloneObj(this._selectedIntent.entities);
    this._selectedIntent = {...this._selectedIntent};
    this.changeDetectorRef.detectChanges();
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

  removeUtterance(index: number) {
    this._selectedIntent.utterances.splice(index, 1);
  }

  test(k, index) {
    this._selectedIntent.utterances[index].utterance = k.target.textContent;
  }

  preventTypingInMarkers(event) {

    // if (event.target.classList.contains('bg-red')) {
    // event.stopPropagation();
    // event.preventDefault();
    // }
  }

  getPositionByMarkerNode(marker: HTMLElement) {
    let parent = marker.parentElement;
    const markerTempText = 'xxxxxxxxxxxxxx';
    const markerOriginalText = marker.textContent;
    while (parent !== null && !parent.classList.contains('utter')) {
      parent = parent.parentElement;
    }
    marker.textContent = markerTempText;
    const start = parent.textContent.split(markerTempText)[0].length;
    const end = start + markerOriginalText.length;
    marker.textContent = markerOriginalText;
    return {
      start,
      end,
      value: markerOriginalText
    };
  }

  updateUtteranceText(intent?) {
    intent = intent || this._selectedIntent;
    intent.utterances.forEach((value, index, array) => {
      value.utterance = document.getElementsByClassName('utter')[index].textContent;
    });
  }

  correctMarkerPosition(intent?) {
    let x: any = document.querySelectorAll('.utter');
    x = Array.from(x);

    x.forEach((utterWrapper, index) => {
      let markers: any = utterWrapper.querySelectorAll('.bg-red');
      markers = Array.from(markers);
      // intent.utterances[index].entities = intent.utterances[index].entities.sort((a, b) => {
      //   return -1 * (-a.start + b.start);
      // });

      markers.forEach(($marker: HTMLElement, markerCount) => {
        const position = $marker.getAttribute(EMarkerAttributes.data_position);
        const pre_start = Number(position.split('-')[1]);
        const pre_end = Number(position.split('-')[2]);
        const {start, end, value} = this.getPositionByMarkerNode($marker);
        // intent.utterances.forEach((value, index, array) => {
        //   value.utterance = document.getElementsByClassName('utter')[index].textContent;
        // });

        // intent.utterances[index].entities[markerCount] = {
        //   ...intent.utterances[index].entities[markerCount],
        //   start: start,
        //   end,
        //   value
        // };
        // intent.utterances[index].entities = intent.utterances[index].entities.map((marker) => {
        //   if (marker.start == pre_start || marker.start == pre_end) {
        //     return {
        //       ...marker,
        //       start,
        //       end,
        //       value
        //     };
        //   }
        //   return marker;
        // });
        $marker.setAttribute(EMarkerAttributes.data_position, `entity-${start}-${end}`);
      });
    });
  }

  inputChanged$ = new EventEmitter();

  x(event) {
    // this.inputChanged$.emit(event);
  }

  setBgColor($el: HTMLElement, color: string | 'transparent') {
    $el.style.backgroundColor = color;
  }


}
