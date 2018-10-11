import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IBot} from '../../../../interfaces/IBot';
import {IBasicInfo} from '../../../../../../interfaces/bot-creation';
import {SaveNewBotInfo_CodeBased} from '../../../ngxs/buildbot.action';
import {Store} from '@ngxs/store';
import {UtilityService} from '../../../../../utility.service';
import {EAllActions} from '../../../../../constants.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-additional-info-form',
  templateUrl: './additional-info-form.component.html',
  styleUrls: ['../basic-info-form/basic-info-form.component.scss']

})
export class AdditionalInfoFormComponent implements OnInit {

  _bot: Partial<IBot> = {};
  myEAllActions = EAllActions;
  formGroup: FormGroup;

  @Input() set bot(_bot: IBot) {
    if (_bot) {
      this._bot = _bot;
      this.formGroup && this.formGroup.patchValue(_bot);
    }
  }

  @Output() datachanged$ = new EventEmitter<Partial<IBot>>();

  formData: any;

  constructor(
    private store: Store,
    private utilityService: UtilityService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      heading: [this._bot.heading],
      transactions_per_pricing_unit: [this._bot.transactions_per_pricing_unit],
      error_message: [this._bot.error_message],
      first_message: [this._bot.first_message],
    });
    this.formGroup.valueChanges.debounceTime(200).subscribe((data: IBasicInfo) => {
      if (this.utilityService.areTwoJSObjectSame(this.formData, data)) return;
      this.formData = data;
      this.datachanged$.emit(data);
    });

  }

  click(){}
}
