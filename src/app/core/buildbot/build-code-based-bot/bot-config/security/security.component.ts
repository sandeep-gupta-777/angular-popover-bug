import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBot} from '../../../../interfaces/IBot';
import {EAllActions} from '../../../../../constants.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngxs/store';
import {UtilityService} from '../../../../../utility.service';
import {PermissionService} from '../../../../../permission.service';
import {debounceTime, distinctUntilChanged, skip} from 'rxjs/internal/operators';
import {IBasicInfo} from '../../../../../../interfaces/bot-creation';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['../basic-info-form/basic-info-form.component.scss']
})
export class SecurityComponent implements OnInit {
  //
  _bot: Partial<IBot> = {};
  myEAllActions = EAllActions;
  formGroup: FormGroup;
  @Output() dataValid$ = new EventEmitter();

  @Input() set bot(_bot: IBot) {
    if (_bot) {
      this._bot = _bot;
      this.formGroup && this.formGroup.patchValue(_bot);
    }
  }

  @Output() datachanged$ = new EventEmitter<Partial<IBot>>();
  @Output() formDirty$ = new EventEmitter<Boolean>();

  formData: any;

  constructor(
    private store: Store,
    private utilityService: UtilityService,
    public permissionService: PermissionService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      data_persistence_period: [this._bot.data_persistence_period, Validators.required],
      heading: [this._bot.heading],
      advanced_data_protection: [this._bot.advanced_data_protection],
      transactions_per_pricing_unit: [this._bot.transactions_per_pricing_unit],
      error_message: [this._bot.error_message],
      consent_message: [this._bot.consent_message],
      blanket_consent: [this._bot.blanket_consent],
      allow_anonymization: [this._bot.allow_anonymization],
      // first_message: [this._bot.first_message],
      // room_close_callback: [this._bot.room_close_callback],
      // allow_feedback: [this._bot.allow_feedback],
    });
    this.formGroup.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged((value1, value2) => JSON.stringify(value1) === JSON.stringify(value2)),
        skip(1),
      ).subscribe((data: IBasicInfo) => {
      if (this.utilityService.areTwoJSObjectSame(this.formData, data)) {
        return;
      }
      setTimeout(()=>this.dataValid$.emit(this.formGroup.valid));
      this.formData = data;
      this.datachanged$.emit(data);
      this.formDirty$.emit(this.formGroup.dirty);

    });

  }

  click() {
  }

}
