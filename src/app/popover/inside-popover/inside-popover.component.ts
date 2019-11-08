import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PopoverRef} from '../popover-ref';
import {IEntitiesItem} from '../../core/interfaces/mlBots';
import {IIntent} from '../../typings/intents';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../event.service';

@Component({
  templateUrl: './inside-popover.component.html',
  styleUrls: ['./inside-popover.component.css']
})
export class InsidePopoverComponent implements OnInit {
  entityList: IEntitiesItem[];
  selectedIntent: IIntent;
  data = {
    entity_type: '',
    entity_id: '-1',
    index: -1,
    start: -1,
  };
  form: FormGroup;
  isNew = false;
  showCreateNewIntentModel$: EventEmitter<any>;
  @Output() entityMarker$ = new EventEmitter();

  constructor(private popoverRef: PopoverRef, private formBuilder: FormBuilder, private changeDetectorRef: ChangeDetectorRef) {
    this.entityList = this.popoverRef.data.entityList;
    this.selectedIntent = this.popoverRef.data.selectedIntent;
    this.showCreateNewIntentModel$ = this.popoverRef.data.showCreateNewIntentModel$;
    this.data = this.popoverRef.data.data || this.data;
    this.isNew = this.popoverRef.data.isNew;
  }

  marker;

  ngOnInit(): void {

    EventService.entityListUpdated$.subscribe(list => {
      this.entityList = [...list];
    });

    this.form = this.formBuilder.group({
      type: 'custom',
      entity_id: ['', [
        function (control: AbstractControl) {
          debugger;
          if (!control.value || control.value > -1) {
            return null;
          }
          return {
            error: true
          };
        }]
      ],
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
    this.close({marker: {...(this.marker || {}), ...rest, ...this.form.value}, action: 'add'});
  }

  removeMarkerHandler() {
    const {index, ...rest} = this.data;
    this.close({marker: {...(this.marker || {}), ...rest, ...this.form.value}, action: 'remove'});
  }

  log(x) {
    console.log(x);
  }

}
