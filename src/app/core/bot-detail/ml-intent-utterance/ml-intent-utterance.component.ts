import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IEntitiesItem} from '../../interfaces/mlBots';
import {IEntityMarker, IIntent} from '../../../typings/intents';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {IBot} from '../../interfaces/IBot';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-ml-intent-utterance',
  templateUrl: './ml-intent-utterance.component.html',
  styleUrls: ['./ml-intent-utterance.component.scss']
})
export class MlIntentUtteranceComponent implements OnInit, AfterViewInit {

  @Input() selectedIntent: IIntent;
  @Input() entityList: IEntitiesItem[];
  @Input() bot: IBot;
  @Output() linkEntity$ = new EventEmitter();
  @Output() removeEntity$ = new EventEmitter();
  @Output() formValidity$ = new EventEmitter();
  @Output() updateResponse$ = new EventEmitter();
  @ViewChild('entityForm') f: NgForm;
  @Input() keys;


  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.f.valueChanges.subscribe(() => {
      this.formValidity$.emit(this.f.valid);
    });
  }

  linkEntityHandler(entity) {
    this.linkEntity$.emit(entity);
    this.selectedIntent = {...this.selectedIntent};
  }

  change(e) {
    if (!e.require) {
      // e.template_key = '';
      // e.counter = 0;
    }
  }


  removeEntityHandler(e: IEntityMarker) {
    this.removeEntity$.emit(e);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  log(entityList) {
    debugger;
    console.log(entityList);
  }

  trackBy(index) {
    return index + (this.selectedIntent && this.selectedIntent.entities && this.selectedIntent.entities.length);
  }

  retry_message: string;
  x = function ($input: any) {

    if (Number($input.value) == NaN) {
      $input.value = 0;
    }
    if ($input.value > 100) {
      $input.value = 100;
    } else if ($input.value < -1) {
      $input.value = 0;
    }
  };
}
