import {ChangeDetectorRef, Component, EventEmitter, Input, NgZone, OnInit, Output, TemplateRef} from '@angular/core';
import {MlIntentsSmartTable} from '../ml-model/ml-intents/ml-intents-smart-table';
import {IBot} from '../../interfaces/IBot';
import {IEntitiesItem, IIntentsItem} from '../../interfaces/mlBots';
import {MlIntentsSmartTableModal} from '../ml-intents/ml-intents-smart-table-modal';
import {intentMock} from '../ml-intents/intent-mock';
import {ConstantsService} from '../../../constants.service';
import {DatePipe} from '@angular/common';
import {Popover} from '../../../popover/popover.service';
import {IEntityMarker, IIntent} from '../../../typings/intents';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {InsidePopoverComponent} from '../../../popover/inside-popover/inside-popover.component';
import {UtilityService} from '../../../utility.service';
import {ServerService} from '../../../server.service';
import {IHeaderData} from '../../../../interfaces/header-data';
import {ActivatedRoute} from '@angular/router';
import {ErrorStateMatcher} from '@angular/material';

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
export class MlIntentsDetailComponent implements OnInit {
  ConfirmValidParentMatcher = ConfirmValidParentMatcher;
  currentPage = 1;
  pageSize = 10;
  isReloading = false;
  form: FormGroup;
  isEntityValid = true;
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
  tempMarkingWord = 'xxxxxxxxxxxxx1123';

  @Input() set selectedIntent(val: IIntent) {
    this._selectedIntent = val;
    this.form && this.form.patchValue(val);
  }

  @Output() saveOrUpdateIntent$ = new EventEmitter<IIntent>();
  @Output() deleteIntent$ = new EventEmitter<IIntent>();
  @Output() saveAndTrain$ = new EventEmitter<IIntent>();
  @Output() showCreateNewIntentModel$ = new EventEmitter();

  constructor(
    private constantsService: ConstantsService,
    private datePipe: DatePipe,
    private popper: Popover,
    private formBuilder: FormBuilder,
    private serverService: ServerService,
    private utilityService: UtilityService,
    private changeDetectorRef: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
    private _ngZone: NgZone
  ) {
  }


  intent_id: string;

  ngOnInit() {
    this.intent_id = this.activatedRoute.snapshot.queryParams['intent_id'];
    this.sessionsSmartTableDataModal = this.tableDataFactory();
    this.sessionsSmartTableDataModal.refreshData(this.intents);
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      template_key: ['', Validators.required],
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

  getPositionMarker($marker: HTMLElement) {
    if (!$marker) {
      return null;
    }
    const position = $marker.getAttribute('data-position');
    if (!position) {
      return null;
    }
    return {
      start: position.split('-')[1],
      end: position.split('-')[2],
      id: $marker.getAttribute('data-id')
    }

  }

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
      console.log(1);
    }
    return entities;
  }

  selectedIntentBackup;

  copySelectedText = ((strToCopy, e) => {
    if (e.which === 67 && e.ctrlKey) {
      this.utilityService.copyToClipboard(window.getSelection().toString() || strToCopy);
    }
  });

  copySelectedTextCaller;

  textSelected(e, tpl, index, utterance: string) {
    const strToCopy = window.getSelection().toString();
    this.copySelectedTextCaller = this.copySelectedText.bind(this, strToCopy);
    document.addEventListener('keydown', this.copySelectedTextCaller);
    if (!this.selectedIntentBackup) {
      this.selectedIntentBackup = UtilityService.cloneObj(this._selectedIntent);
    }
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

    const selectionStr = selection.toString();
    setTimeout(() => {
      const positionsToBeRemoved: any[] = this.removeCrossover(target);
      // this.correctMarkerPosition();
      this.updateUtteranceText(this._selectedIntent);
      debugger;
      this._selectedIntent.utterances[index].entities = this._selectedIntent.utterances[index].entities.filter((marker) => {
        return !positionsToBeRemoved.find((position) => {
          return (marker.start == position.start && marker.end == position.end);
        });
      });
      positionsToBeRemoved.forEach((value) => {
        const wrapper = document.getElementsByClassName('utter')[index];
        let x = wrapper.querySelector(`[data-position="entity-${value.start}-${value.end}"]`) as HTMLElement;
        if (!x) {
          x = document.getElementsByClassName('utter')[index].querySelector(`[data-id="${value.id}"]`);
        }
        x.classList.remove('bg-red');
        x.style.backgroundColor = 'transparent';
      });

      this._selectedIntent.utterances[index].utterance = document.getElementsByClassName('utter')[index].textContent;
      this.correctMarkerPosition();
      const {start, end} = this.replaceSelectedText(selectionStr, utterance.endsWith(selectionStr));
      this.removeAllMarkersBetweenRange(start, end, index);
      this._selectedIntent.utterances[index].entities.push({start, end, entity_id: '-1', type: 'custom'});
      this._selectedIntent = UtilityService.cloneObj(this._selectedIntent);
      setTimeout(() => {
        const x = document.getElementsByClassName('utter')[index].querySelector(`[data-position="entity-${start}-${end}"]`);
        this.show2(x, tpl, index, positionsToBeRemoved, true);
      });
    }, 0);

  }

  removeAllMarkersBetweenRange(start, end, index) {
    this._selectedIntent.utterances[index].entities.filter((marker) => {
      if (marker.start <= start && marker.end <= marker.end) {
        return false;
      }
      return true;
    });
  }

  getPositionOfStr(str, subStr) {
    const start = str.indexOf(subStr);
    const end = start + subStr.length;
    return {
      start, end
    };
  }

  replaceSelectedText(selectionStr, isEnd) {
    let start = 0, end = 0;
    const random = Date.now();
    if (selectionStr === '') {
      return;
    }

    document.execCommand('insertHTML', false,
      `<span class="bg-red bg-red2 bg-red1" data-position="entity-${start}-${end}" data-id="${random}">${this.tempMarkingWord}<span> <span></span>`);

    const x = document.querySelector(`[data-id="${random}"]`);
    let parent = x.parentElement;
    while (parent !== null && !parent.classList.contains('utter')) {
      parent = parent.parentElement;
    }
    start = parent.textContent.split(this.tempMarkingWord)[0].length;
    end = start + selectionStr.replace(/\s*$/, '').length;
    x.setAttribute('data-position', `entity-${start}-${end}`);
    x.textContent = selectionStr;
    x.classList.remove('bg-red');
    // x.parentElement.removeChild(x);
    return {
      start, end
    };
  }

  markerInputEditable = true;

  show(origin: HTMLElement, content: TemplateRef<any>, index, positionsToBeRemoved = [], isNew) {
    const position = origin.getAttribute('data-position');
    const value = origin.textContent;
    const start = Number(position.split('-')[1]);
    const end = Number(position.split('-')[2]);
    this.markerInputEditable = false;
    const ref = this.popper.open<{ entityList: IEntitiesItem[], selectedIntent: IIntent, data: any, showCreateNewIntentModel$: EventEmitter<any> }>({
      content: InsidePopoverComponent,
      origin,
      width: '200px',
      data: <any>{
        entityList: this.entityList,
        selectedIntent: this._selectedIntent,
        data: {start, index, end, value},
        isNew,
        showCreateNewIntentModel$: this.showCreateNewIntentModel$
      }
    });


    ref.afterClosed$.subscribe((res: any) => {
      document.removeEventListener('keydown', this.copySelectedTextCaller);
      const markerIndexToBeRemoved = this._selectedIntent.utterances[index].entities.findIndex((entity: IEntityMarker) => {
        return entity.entity_id === '-1';
      });
      if (markerIndexToBeRemoved !== -1) {
        this._selectedIntent.utterances[index].entities.splice(markerIndexToBeRemoved, 1);
      }
      this.markerInputEditable = true;
      const entityMarker: IEntityMarker = res.data && res.data.marker;
      const action: string = res.data && res.data.action;
      if (!entityMarker) {
        debugger;
        if (this.selectedIntentBackup) {
          this._selectedIntent = this.selectedIntentBackup;
        }
        this.updateUtteranceText();
        this._selectedIntent = UtilityService.cloneObj(this._selectedIntent);
        return;
      }
      const markerIndex = this._selectedIntent.utterances[index].entities.findIndex((entity: IEntityMarker) => {
        return entity.start === Number(start);
      });
      if (markerIndex !== -1) {
        this._selectedIntent.utterances[index].entities[markerIndex] = entityMarker;
        const color = this.getColorByEntity(entityMarker.entity_id);

        origin.style.backgroundColor = color;
        if (action === 'remove') {
          this._selectedIntent.utterances[index].entities.splice(markerIndex, 1);
          this.correctMarkerPosition();
          this._selectedIntent = UtilityService.cloneObj(this._selectedIntent);
          return;
        }
      } else {

        this.correctMarkerPosition();
        console.dir(this._selectedIntent.utterances[index].entities);
        this._selectedIntent.utterances[index].utterance = document.getElementsByClassName('utter')[index].textContent;
        this._selectedIntent.utterances[index].entities = this._selectedIntent.utterances[index].entities.filter((marker) => {
          // if ((marker.start <= start && start <= marker.end) || (marker.start <= end && end <= marker.end)) {
          //   return false;
          // }
          if ((start <= marker.start && marker.end <= end) || (marker.start <= start && end <= marker.end)) {
            return false;
          }
          return true;
        });
        this._selectedIntent.utterances[index].entities.push(entityMarker);
        const color = this.getColorByEntity(entityMarker.entity_id);
        origin.style.backgroundColor = color;
        this._selectedIntent.utterances[index].entities = this._selectedIntent.utterances[index].entities.filter((marker) => {
          return !positionsToBeRemoved.find((position) => {
            return (marker.start == position.start && marker.end == position.end);
          });
        });
      }

      if (!this._selectedIntent.entities.find(e => e.entity_id === entityMarker.entity_id)) {

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

  getColorByEntity(entity_id: string) {
    return this.entityList.find(e => e.entity_id === entity_id).color;
  }


  show2(target, tpl, index, positionsToBeRemoved, isNew) {
    if (target.classList.contains('bg-red')) {
      this.show(target, tpl, index, positionsToBeRemoved, isNew);
    }
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

  saveAndTrain() {
    this.correctMarkerPosition(this._selectedIntent);
    this.updateUtteranceText(this._selectedIntent);
    this.saveAndTrain$.emit({
      ...this._selectedIntent,
      name: this.form.value.name,
      ...this.form.value
    });
  }

  saveOrUpdateIntent() {
    this.correctMarkerPosition(this._selectedIntent);
    this.updateUtteranceText(this._selectedIntent);
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

  updateUtteranceText(intent) {
    intent = intent || this._selectedIntent;
    intent.utterances.forEach((value, index, array) => {
      value.utterance = document.getElementsByClassName('utter')[index].textContent;
    });
  }

  correctMarkerPosition(intent) {
    intent = intent || this._selectedIntent;
    let x: any = document.querySelectorAll('[contenteditable=true]');
    x = Array.from(x);

    x.forEach((utterWrapper, index) => {
      let markers: any = utterWrapper.querySelectorAll('.bg-red');
      markers = Array.from(markers);
      intent.utterances[index].entities = intent.utterances[index].entities.sort((a, b) => {
        return -1 * (-a.start + b.start);
      });

      markers.forEach(($marker: HTMLElement, markerCount) => {
        const position = $marker.getAttribute('data-position');
        const pre_start = Number(position.split('-')[1]);
        const pre_end = Number(position.split('-')[2]);
        const {start, end, value} = this.getPositionByMarkerNode($marker);
        // intent.utterances.forEach((value, index, array) => {
        //   value.utterance = document.getElementsByClassName('utter')[index].textContent;
        // });

        intent.utterances[index].entities[markerCount] = {
          ...intent.utterances[index].entities[markerCount],
          start: start,
          end,
          value
        };
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
        $marker.setAttribute('data-position', `entity-${start}-${end}`);
      });
    });
  }

  x(event) {
    if (event.target.textContent.includes(this.tempMarkingWord)) {
      return;
    }
    this._ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.selectedIntentBackup = UtilityService.cloneObj(this._selectedIntent);
        this.correctMarkerPosition(this.selectedIntentBackup);
        this.updateUtteranceText(this.selectedIntentBackup);
      });
    });
  }

}
