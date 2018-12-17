
import {debounceTime} from 'rxjs/operators';
import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IBot} from '../../../../interfaces/IBot';
import {IBasicInfo, ISaveDataManagment} from '../../../../../../interfaces/bot-creation';
import {SaveDataManagment} from '../../../ngxs/buildbot.action';
import {Store} from '@ngxs/store';
import {UtilityService} from '../../../../../utility.service';
import {ConstantsService, EAllActions} from '../../../../../constants.service';
import {PermissionService} from '../../../../../permission.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-data-manage-form',
  templateUrl: './data-manage-form.component.html',
  styleUrls: ['../basic-info-form/basic-info-form.component.scss']

})
export class DataManageFormComponent implements OnInit {

  _bot: Partial<IBot> = {};
  myEAllActions = EAllActions;
  formGroup: FormGroup;

  @Input() set bot(_bot: IBot) {
    if (_bot) {
      this._bot = _bot;
      this.formGroup && this.formGroup.patchValue(this._bot);
    }
  }

  @Output() datachanged$ = new EventEmitter<Partial<IBot>>();

  formData: any;

  constructor(
    private store: Store,
    public constantsService: ConstantsService,
    public permissionService: PermissionService,
    public formBuilder: FormBuilder,
    private utilityService: UtilityService) {
  }
  advanced_data_protection;

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      data_persistence_period: [this._bot.data_persistence_period, Validators.required],
      consent_message: [this._bot.consent_message],
      advanced_data_protection: [this._bot.advanced_data_protection],
      allow_anonymization: [this._bot.allow_anonymization],
      blanket_consent: [this._bot.blanket_consent],
      room_close_callback: [this._bot.room_close_callback],
    });


    this.formGroup.valueChanges.pipe(debounceTime(200)).subscribe((data: ISaveDataManagment) => {
      if (this.utilityService.areTwoJSObjectSame(this.formData, data)) { return; }
      this.formData = data;
      this.datachanged$.emit({...data, form_validation_data_management: this.formGroup.valid});
    });
  }

}
