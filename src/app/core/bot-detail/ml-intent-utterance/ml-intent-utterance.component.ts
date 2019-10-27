import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IEntitiesItem} from '../../interfaces/mlBots';
import {IEntityMarker, IIntent} from '../../../typings/intents';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-ml-intent-utterance',
  templateUrl: './ml-intent-utterance.component.html',
  styleUrls: ['./ml-intent-utterance.component.scss']
})
export class MlIntentUtteranceComponent implements OnInit {

  @Input() selectedIntent: IIntent;
  @Input() entityList: IEntitiesItem[];
  @Output() linkEntity$ = new EventEmitter();
  @Output() removeEntity$ = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  linkEntityHandler(entity) {
    this.linkEntity$.emit(entity);
    this.selectedIntent = {...this.selectedIntent};
  }

  change(e) {
    if (!e.require) {
      e.template_key = '';
      e.counter = 0;
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

}
