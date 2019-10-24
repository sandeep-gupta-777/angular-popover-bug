import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PopoverRef} from '../popover-ref';
import {IEntitiesItem} from '../../core/interfaces/mlBots';
import {IIntent} from '../../typings/intents';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  templateUrl: './inside-popover.component.html',
  styleUrls: ['./inside-popover.component.css']
})
export class InsidePopoverComponent implements OnInit {
  entityList: IEntitiesItem[];
  selectedIntent: IIntent;
  data = {
    entity_type: '',
    entity_id: '',
    index: -1,
    start: -1,
  };
  form: FormGroup;

  @Output() entityMarker$ = new EventEmitter();

  constructor(private popoverRef: PopoverRef, private formBuilder: FormBuilder) {
    this.entityList = this.popoverRef.data.entityList;
    this.selectedIntent = this.popoverRef.data.selectedIntent;
    this.data = this.popoverRef.data.data || this.data;
  }

  marker;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      type: 'custom',
      entity_id: '',
    });

    const marker = this.selectedIntent.utterances[this.data.index].entities.find((entity: any) => {
      return entity.start === Number(this.data.start);
    });
    if (marker) {
      this.marker = marker;
      this.form.patchValue(marker);
    }
  }

  close(data) {
    this.popoverRef.close(data);
  }

  entityMarkerHandler() {
    const {index, ...rest} = this.data;
    this.close({...(this.marker || {}), ...rest, ...this.form.value});
  }

}
