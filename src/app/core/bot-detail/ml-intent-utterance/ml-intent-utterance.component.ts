import {
  AfterViewInit, ChangeDetectorRef,
  Component, DoCheck,
  ElementRef,
  EventEmitter,
  Input, IterableDiffers,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {IEntitiesItem} from '../../interfaces/mlBots';
import {IEntityMarker, IIntent} from '../../../typings/intents';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {IBot} from '../../interfaces/IBot';
import {FormArray, FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {UtilityService} from '../../../utility.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-ml-intent-utterance',
  templateUrl: './ml-intent-utterance.component.html',
  styleUrls: ['./ml-intent-utterance.component.scss']
})
export class MlIntentUtteranceComponent implements OnInit, DoCheck {
  _selectedIntent: IIntent;

  @Input() set selectedIntent(val: IIntent) {
    this._selectedIntent = val;
  }

  _entityList: any[] = [];
  @Input() set entityList(value) {
    this._entityList = value;
  }

  @Input() entityForm: FormGroup;
  @Input() bot: IBot;
  @Output() linkEntity$ = new EventEmitter();
  @Output() removeEntity$ = new EventEmitter();
  @Output() formValidity$ = new EventEmitter();
  @Output() updateResponse$ = new EventEmitter();
  @ViewChild('entityForm') f: NgForm;
  @Input() keys;

  form: FormGroup;
  iterableDiffer;

  constructor(private formBuilder: FormBuilder, private iterableDiffers: IterableDiffers, private changeDetectorRef: ChangeDetectorRef) {
    this.iterableDiffer = iterableDiffers.find([]).create(null);
  }

  ngOnInit() {
  }

  pushEntityFormArray(data) {
    const fa = (this.entityForm.get('entities') as FormArray);
    fa.push(this.formBuilder.group({
      ...data,
      required: data.required || false,
      retries: data.retries || 3,
      template_key: data.template_key || 'fallback',
      entity_id: data.entity_id || 'no_entity_id',
      uuid: UtilityService.generateUUid(),
    }));
  }


  sub: Subscription;

  createForm() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    if (!this.entityForm) {
      return;
    }
    const fa = this.entityForm.get('entities') as FormArray;
    this._selectedIntent.entities.forEach((item) => {
      if (!fa.value.find(e => e.entity_id === item.entity_id)) {
        this.pushEntityFormArray(item);
      }
    });
    this.entityForm.patchValue(this.entityForm.value);/*to trigger change detection*/
  }


  linkEntityHandler(entity) {
    this.linkEntity$.emit(entity);
    this._selectedIntent = {...this._selectedIntent};
  }

  change(e) {
    if (!e.require) {
      // e.template_key = '';
      // e.counter = 0;
    }
  }


  removeEntityHandler(e, index) {
    (this.entityForm.get('entities') as FormArray).removeAt(index);
    this.removeEntity$.emit(e);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      const fa = this.entityForm.get('entities') as FormArray;
      const fg1 = fa.at(event.previousIndex);
      fa.removeAt(event.previousIndex);
      fa.insert(event.currentIndex, fg1);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  log(val) {
    console.log(val);
  }

  trackBy(index, val) {
    return index + val.uuid;
  }

  x = (index: number) => {
    const fg = (this.entityForm.get('entities') as FormArray).at(index);
    const val = fg.value.counter;
    if (val > 10) {
      fg.patchValue({counter: 10});
    } else if (val < -1) {
      fg.patchValue({counter: 0});
    }
  };

  valueUpdatedHandler(e, $event) {
    e.template_key = $event;
  }

  ngDoCheck() {
    const changes = this.iterableDiffer.diff(this._selectedIntent.entities);
    if (changes) {
      this.createForm();
    }
  }
}
