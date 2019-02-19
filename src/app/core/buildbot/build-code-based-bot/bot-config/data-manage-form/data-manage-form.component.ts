import {debounceTime} from 'rxjs/operators';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBot} from '../../../../interfaces/IBot';
import {ISaveDataManagment} from '../../../../../../interfaces/bot-creation';
import {Select, Store} from '@ngxs/store';
import {EBotType, UtilityService} from '../../../../../utility.service';
import {ConstantsService, EAllActions} from '../../../../../constants.service';
import {PermissionService} from '../../../../../permission.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {ViewBotStateModel} from '../../../../view-bots/ngxs/view-bot.state';
import {distinctUntilChanged, map, skip, takeWhile} from 'rxjs/internal/operators';
import {LoggingService} from '../../../../../logging.service';

@Component({
  selector: 'app-data-manage-form',
  templateUrl: './data-manage-form.component.html',
  styleUrls: ['../basic-info-form/basic-info-form.component.scss']

})
export class DataManageFormComponent implements OnInit {

  _bot: Partial<IBot> = {};
  myEBotType =  EBotType;
  myEAllActions = EAllActions;
  formGroup: FormGroup;
  @Output() dataValid$ = new EventEmitter();
  @Select() botlist$: Observable<ViewBotStateModel>;

  @Input() set bot(_bot: IBot) {
    if (_bot) {
      this._bot = _bot;
      this.formGroup && this.formGroup.patchValue(this._bot);
      try {
        this.formGroup.patchValue(this._bot);
        const formArray = this.formGroup.get('child_bots') as FormArray;
        formArray.controls.splice(0);

        this.initializeChildBotFormArray();
      } catch (e) {
        LoggingService.error(e);
      }
    }
  }

  @Output() datachanged$ = new EventEmitter<Partial<IBot>>();

  formData: any;
  codebasedBotList: IBot[];

  constructor(
    private store: Store,
    public constantsService: ConstantsService,
    public permissionService: PermissionService,
    public formBuilder: FormBuilder,
    private utilityService: UtilityService) {
  }

  advanced_data_protection;

  ngOnInit() {

    this.botlist$
      .pipe(
        takeWhile((botlist)=>{
          return botlist && !!botlist.allBotList;
        }),
        map((botlist) => {
        return botlist.allBotList.filter((bot) => bot.bot_type === EBotType.chatbot);
      }))
      .subscribe((codebasedBotList) => {
        this.codebasedBotList = codebasedBotList;
      });

    this.formGroup = this.formBuilder.group({
      // data_persistence_period: [this._bot.data_persistence_period, Validators.required],
      // bot_unique_name: [this._bot.bot_unique_name, Validators.required],
      consent_message: [this._bot.consent_message],
      advanced_data_protection: [this._bot.advanced_data_protection],
      allow_anonymization: [this._bot.allow_anonymization],
      blanket_consent: [this._bot.blanket_consent],
      room_persistence_time: [this._bot.room_persistence_time, Validators.required],
      room_close_callback: [this._bot.room_close_callback],
      allow_feedback: [this._bot.allow_feedback],
      transactions_per_pricing_unit: [this._bot.transactions_per_pricing_unit],
      is_manager: [this._bot.is_manager || false],
      child_bots: this.formBuilder.array([])
    });


    this.formGroup.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged((value1, value2)=> {

        let x = JSON.stringify(value1) === JSON.stringify(value2);
        return x;
      }),
      skip(1),
    ).subscribe((data: ISaveDataManagment) => {

      if (this.utilityService.areTwoJSObjectSame(this.formData, data)) {
        return;
      }
      // alert();
      setTimeout(()=>this.dataValid$.emit(this.formGroup.valid));
      this.formData = data;
      this.datachanged$.emit({...data, form_validation_data_management: this.formGroup.valid});
    });
  }

  pushChildBot(childBotId): void {
    const formArray = this.formGroup.get('child_bots') as FormArray;
    // formArray.push(this.formBuilder.control(childBotid));
    this.utilityService.pushFormControlItemInFormArray(formArray, this.formBuilder, childBotId);
  }

  removeChildBot(childBotId): void {
    const formArray = this.formGroup.get('child_bots') as FormArray;
    const formControlIndex = this.utilityService.findFormControlIndexInFormArrayByValue(formArray, childBotId);
    LoggingService.log(`removing bot at index ${formControlIndex}`);
    if (formControlIndex != undefined) { formArray.removeAt(formControlIndex); }
  }

  isBotIdPresentInChildBotList(childBotId): boolean {
    const childBots: number[] = this.formGroup.get('child_bots').value || [];
    const indexOfMatchingChildBot: number = childBots.findIndex((botId) => botId === childBotId);
    return indexOfMatchingChildBot !== -1;
  }

  initializeChildBotFormArray() {
    if (this._bot.child_bots && this._bot.child_bots.length > 0) {
      this._bot.child_bots.forEach((childBotId) => {
        this.pushChildBot(childBotId);
      });
    }
  }

}
