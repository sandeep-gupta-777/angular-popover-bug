import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IEntitiesItem} from '../../interfaces/mlBots';
import {IEntityMarker, IIntent} from '../../../typings/intents';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-ml-intent-utterance',
  templateUrl: './ml-intent-utterance.component.html',
  styleUrls: ['./ml-intent-utterance.component.scss']
})
export class MlIntentUtteranceComponent implements OnInit, AfterViewInit {

  @Input() selectedIntent: IIntent;
  @Input() entityList: IEntitiesItem[];
  @Output() linkEntity$ = new EventEmitter();
  @Output() removeEntity$ = new EventEmitter();
  @Output() formValidity$ = new EventEmitter();
  @ViewChild('entityForm') f: NgForm;

  constructor() {
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

    console.log(entityList);
  }

  trackBy(index) {
    debugger;
    return index + (this.selectedIntent && this.selectedIntent.entities && this.selectedIntent.entities.length);
  }

}
