import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef
} from '@angular/core';
import {DomService} from '../../../dom.service';
import {EMarkerAttributes, IEntityMarker, IIntent} from '../../../typings/intents';
import {MlService} from '../ml-model/ml.service';
import {UtilityService} from '../../../utility.service';
import {IEntitiesItem} from '../../interfaces/mlBots';
import {InsidePopoverComponent} from '../../../popover/inside-popover/inside-popover.component';
import {Popover} from '../../../popover/popover.service';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {EventService} from '../../../event.service';

@Directive({
  selector: '[appEntityMarking]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: EntityMarkingDirective,
    multi: true
  },
  ]
})
export class EntityMarkingDirective implements ControlValueAccessor, OnDestroy {
  strToCopy;
  tempMarkingWord = 'xxxxxxxxxxxxx1123';
  copySelectedTextCaller;

  constructor(
    private el: ElementRef,
    private utilityService: UtilityService,
    private popper: Popover,
  ) {
    debugger;
    this.makeEditable(true);
    EventService.appEntityMarkingUpdate$.subscribe(() => {
      if (this.changeFn) {
        this.changeFn(this.getMarkerData([this.el.nativeElement]));
      }
    });
  }

  @Input() defaultColor: string;
  @Input() utter: string;
  @Input() entityList: IEntitiesItem[];
  @Input() index: number;
  @Input() intent: IIntent;
  @Input() tpl: TemplateRef<any>;
  @Input('appHighlight') highlightColor: string;
  @Output() showCreateNewIntentModel$ = new EventEmitter();

  @HostListener('mouseout', ['$event'])
  @HostListener('mouseup', ['$event'])
  onMouseUp($event) {
    debugger;
    this.textSelected($event, this.tpl, this.index, this.utter);
  }

  @HostListener('click', ['$event']) onClick($event) {
    this.show2($event.target, this.tpl, this.index, null, null, null);
  }

  @HostListener('keydown', ['$event']) keyDownHandler($event) {
    this.entityTextChangedHandler($event);
    this.changeFn(this.getMarkerData([this.el.nativeElement]));
  }

  // tslint:disable-next-line:member-ordering
  copySelectedText = ((e) => {
    if (e.which === 67 && e.ctrlKey) {
      const str = window.getSelection().toString() || this.strToCopy;
      if (str) {
        this.utilityService.copyToClipboard(str);
      }
      this.strToCopy = null;
    }
  });

  getUtteranceNode() {
    return this.el.nativeElement;
  }

  makeEditable(enable: boolean) {
    if (enable) {
      this.el.nativeElement.setAttribute('contenteditable', 'true');
    } else {
      this.el.nativeElement.removeAttribute('contenteditable');
    }
  }

  textSelected(e, tpl, index, utterance: string) {
    // const selectedTarget = this.getFocusedElement() as HTMLElement;
    // const container = document.querySelector('.utter-wrapper');
    // if (!DomService.isDescendant(container, selectedTarget)) {
    //   return;
    // }
    const utterInnerHTML = this.getUtteranceNode().innerHTML;
    this.utter = this.getUtteranceNode().textContent;
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
      const wrapper = this.getUtteranceNode();
      // tslint:disable-next-line:no-shadowed-variable
      let x = wrapper.querySelector(`[${EMarkerAttributes.data_position}="entity-${value.start}-${value.end}"]`) as HTMLElement;
      if (!x) {
        x = document.getElementsByClassName('utter')[index].querySelector(`[${EMarkerAttributes.data_id}="${value.id}"]`);
      }
      x.classList.remove('bg-red');
      this.setBgColor(x, 'transparent');
    });

    this.correctMarkerPosition();
    const {start, end} = this.replaceSelectedText(utterance.endsWith(selectionStr));
    const utter = this.getUtteranceNode();
    const markerDataInUtter = this.getMarkerData([utter]);
    utter.innerHTML = MlService.replaceX(this.utter, markerDataInUtter[0].entities, this.entityList);
    const x = this.getUtteranceNode().querySelector(`[${EMarkerAttributes.data_position}="entity-${start}-${end}"]`);
    this.show2(x, tpl, index, positionsToBeRemoved, true, utterInnerHTML);
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

  focusAtTheEndofMarking(target) {
    setTimeout(() => {
      const endSpace = /\s$/;
      const startSpace = /^\s/;
      if (endSpace.test(target.textContent)) {
        target.insertAdjacentHTML('afterend', `<span>&nbsp;</span><span contenteditable="true" id="100">&nbsp;</span>`);
      } else if (startSpace.test(target.textContent)) {
        target.insertAdjacentHTML('beforebegin', `<span>&nbsp;</span><span contenteditable="true" id="100">&nbsp;</span>`);
      } else {
        return;
      }

      DomService.focusOnContentEditable(document.getElementById('100'));
      target.textContent = target.textContent.trim();
    });
  }

  removeCrossover(target: HTMLElement) {
    debugger;
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

      // tslint:disable-next-line:triple-equals
      if (startContainer != contentContainer) {
        // startContainer.classList.remove('bg-red');
        const positions = this.getPositionMarker(startContainer);
        positions && entities.push(positions);
      }
      // tslint:disable-next-line:triple-equals
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

  getFocusedElement() {
    const node = getSelection().getRangeAt(0).commonAncestorContainer;
    const x = node.nodeType === 1 ? node : node.parentElement;
    return x;
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
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

  setBgColor($el: HTMLElement, color: string | 'transparent') {
    $el.style.backgroundColor = color;
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

  show2(target, tpl, index, positionsToBeRemoved, isNew, innerHTML) {
    innerHTML = innerHTML || this.getUtteranceNode().innerHTML;
    if (target.classList.contains('bg-red')) {
      this.show(target, tpl, index, positionsToBeRemoved, isNew, innerHTML);
    }
  }

  show(origin: HTMLElement, content: TemplateRef<any>, index, positionsToBeRemoved = [], isNew, utterInnerHTML) {
    const position = origin.getAttribute(EMarkerAttributes.data_position);
    const value = origin.textContent;
    const start = Number(position.split('-')[1]);
    const end = Number(position.split('-')[2]);
    const entity_id = UtilityService.getDataAttribute(origin, EMarkerAttributes.data_entity_id);
    this.makeEditable(false);
    const ref = this.popper.open<{ entityList: IEntitiesItem[], selectedIntent: IIntent, data: any, showCreateNewIntentModel$: EventEmitter<any> }>({
      content: InsidePopoverComponent,
      origin,
      width: '200px',
      data: <any>{
        entityList: this.entityList,
        selectedIntent: this.intent,
        data: {start, index, end, value, entity_id, origin},
        isNew,
        showCreateNewIntentModel$: this.showCreateNewIntentModel$
      }
    });


    ref.afterClosed$.subscribe((res: any) => {
      document.removeEventListener('keydown', this.copySelectedTextCaller);
      this.makeEditable(true);
      const entityMarker: IEntityMarker = res.data && res.data.marker;
      const action: string = res.data && res.data.action;

      /*popup closed without submit*/
      if (!entityMarker || entityMarker.entity_id === '-1') {
        this.getUtteranceNode().innerHTML = utterInnerHTML;
        return;
      }

      const markerIndex = this.intent.entities.findIndex(e => e.entity_id === entityMarker.entity_id);

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


      const utter = this.getUtteranceNode();
      const markerDataInUtter = this.getMarkerData([utter]);
      // this.correctMarkerPosition(this.selectedIntentBackup);
      utter.innerHTML = MlService.replaceX(this.utter, markerDataInUtter[0].entities, this.entityList);

      /*new marker with existing entity*/
      if (markerIndex !== -1) {
        this.intent.utterances[index].entities[markerIndex] = entityMarker;
      } else {/*new marker with new entity*/
        /*add into the list*/
        const markedEntity = this.entityList.find((e) => e.entity_id === entityMarker.entity_id);
        // tslint:disable-next-line:no-shadowed-variable
        const {entity_id} = markedEntity;
        this.intent.entities.unshift(<any>{
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

  writeValue(obj: any): void {
    if (this.el) {
      if (typeof obj === 'object') {
        this.utter = obj && obj[0].utterance;
      } else {
        this.utter = this.utter || 'this is test';
      }
      this.el.nativeElement.innerHTML =
        MlService.replaceX(this.utter, obj[0].entities, this.entityList);
    }
  }

  changeFn: Function;

  registerOnChange(fn: any): void {
    debugger;
    this.changeFn = fn;
  }

  registerOnTouched(fn: any): void {
    debugger;
  }

  setDisabledState?(isDisabled: boolean): void {
    debugger;
  }

  ngOnDestroy(): void {
    this.changeFn(this.getMarkerData([this.el.nativeElement]));
  }

}
