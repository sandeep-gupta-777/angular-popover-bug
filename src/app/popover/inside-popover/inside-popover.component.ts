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
  data = {
    entity_type: '',
    entity_id: '-1',
    index: -1,
    start: -1,
    origin: null
  };
  form: FormGroup;
  isNew = false;
  origin: HTMLElement;
  showCreateNewIntentModel$: EventEmitter<any>;
  @Output() entityMarker$ = new EventEmitter();

  constructor(private popoverRef: PopoverRef, private formBuilder: FormBuilder, private changeDetectorRef: ChangeDetectorRef) {
    this.entityList = this.popoverRef.data.entityList;
    this.showCreateNewIntentModel$ = this.popoverRef.data.showCreateNewIntentModel$;
    this.data = this.popoverRef.data.data || this.data;
    this.isNew = this.popoverRef.data.isNew;
    this.origin = this.data.origin;
  }

  marker;

  ngOnInit(): void {

    EventService.entityListUpdated$.subscribe(({entityList, new_entity}) => {
      debugger;
      this.entityList = [...entityList];
      if (new_entity) {
        this.form.patchValue({entity_id: new_entity.entity_id});
        this.entityMarkerHandler();
      }
    });

    this.form = this.formBuilder.group({
      type: 'custom',
      entity_id: [this.data.entity_id, [
        function (control: AbstractControl) {
          if (!control.value || control.value > -1) {
            return null;
          }
          return {
            error: true
          };
        }]
      ],
    });

    this.form.valueChanges.subscribe((formData) => {

      this.origin.style.backgroundColor = this.getColorByEntity(formData.entity_id);
    });
  }

  getColorByEntity(entity_id: string) {
    return this.entityList.find(e => e.entity_id === entity_id).color;
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
