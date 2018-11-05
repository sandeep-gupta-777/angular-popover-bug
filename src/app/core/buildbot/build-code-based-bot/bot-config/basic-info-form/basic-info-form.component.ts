import {AfterContentChecked, AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IBot} from '../../../../interfaces/IBot';
import 'rxjs/add/operator/debounceTime';
import {Store, Select} from '@ngxs/store';
import {SaveNewBotInfo_CodeBased} from '../../../ngxs/buildbot.action';
import {IBasicInfo} from '../../../../../../interfaces/bot-creation';
import {Observable} from 'rxjs';
import {ViewBotStateModel} from '../../../../view-bots/ngxs/view-bot.state';
import {ControlValueAccessor, FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {UtilityService} from '../../../../../utility.service';
import {ConstantsService, EAllActions} from '../../../../../constants.service';
import {ActivatedRoute} from '@angular/router';
import {EBotType} from '../../../../view-bots/view-bots.component';
import {PermissionService} from '../../../../../permission.service';
import {ELogType, LoggingService} from '../../../../../logging.service';

@Component({
  selector: 'app-basic-info-form',
  templateUrl: './basic-info-form.component.html',
  styleUrls: ['./basic-info-form.component.scss']
})
export class BasicInfoFormComponent implements OnInit, ControlValueAccessor {
  @Select() botlist$: Observable<ViewBotStateModel>;
  allbotList: IBot[];
  codebasedBotList: IBot[];
  isDisabled: boolean;
  _bot: Partial<IBot> = {};
  // _default_logo = 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png';
  _default_room_persistence_time: number = 240;

  @Input() set bot(_bot: IBot) {
    if (_bot) {
      this._bot = _bot;
      // if (!this._bot.logo) this._bot.logo = this._default_logo;
      if (!this._bot.room_persistence_time) this._bot.room_persistence_time = this._default_room_persistence_time;
      /*TODO: implement eventEmitter instead of always listening to store*/
      try {
        this.formGroup.patchValue(this._bot);
        let formArray = this.formGroup.get('child_bots') as FormArray;
        formArray.controls.splice(0);

        this.initializeChildBotFormArray();
      } catch (e) {
        LoggingService.error(e);
      }
    }
  }

  @Output() datachanged$ = new EventEmitter<Partial<IBot>>();
  bot_type;
  formData: Partial<IBot>;
  myEAllActions = EAllActions;
  myEBotType = EBotType;
  formGroup: FormGroup;
  logoErrorObj = [
    {name: 'imageExnError', description: 'Invalid Extension'},
    {name: 'imageHttpsError', description: 'Only Https urls allowed'}];

  constructor(private store: Store,
              private utilityService: UtilityService,
              public constantsService: ConstantsService,
              public permissionService: PermissionService,
              public activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      name: [this._bot.name, Validators.required],
      description: [this._bot.description, Validators.required],
      logo: [this._bot.logo, [Validators.required, this.utilityService.imageUrlHavingValidExtnError, this.utilityService.imageUrlHttpsError]],
      bot_unique_name: [this._bot.bot_unique_name, Validators.required],
      room_persistence_time: [this._bot.room_persistence_time, Validators.required],
      is_manager: [this._bot.is_manager || false],
      child_bots: this.formBuilder.array([]),
    }, {validator: this.utilityService.isManagerValidator});

    this.initializeChildBotFormArray();
    /*TODO: initialization must be done with initialization of formGroup*/
    this.formGroup.valueChanges.debounceTime(200).subscribe((data: Partial<IBot>) => {
      LoggingService.log(this.formGroup);
      if (this.utilityService.areTwoJSObjectSame(this.formData, data)) return;
      this.formData = data;
      /*this.formData is used for compareTwoJavaObjects, no other purpose*/
      this.datachanged$.emit({...data, form_validation_basic_info: this.formGroup.valid});
    });

    this.bot_type = this.activatedRoute.snapshot.queryParamMap.get('bot_type') || this.activatedRoute.snapshot.data['bot_type'];
    this.botlist$.subscribe((botlist) => {
      if (!botlist) return;
      this.allbotList = botlist.allBotList;
      this.codebasedBotList = this.allbotList && botlist.allBotList.filter((bot) => bot.bot_type === EBotType.chatbot);
    });

  }


  initializeChildBotFormArray() {
    if (this._bot.child_bots && this._bot.child_bots.length > 0) {
      this._bot.child_bots.forEach((childBotId) => {
        this.pushChildBot(childBotId);
      });
    }
  }

  setBotUniqueName(botName: string) {
    let uniqueName = botName.split('').join();
    this.formGroup.patchValue({'Unique Name': uniqueName});
  }

  pushChildBot(childBotId): void {
    let formArray = this.formGroup.get('child_bots') as FormArray;
    // formArray.push(this.formBuilder.control(childBotid));
    this.utilityService.pushFormControlItemInFormArray(formArray, this.formBuilder, childBotId);
  }

  removeChildBot(childBotId): void {
    let formArray = this.formGroup.get('child_bots') as FormArray;
    let formControlIndex = this.utilityService.findFormControlIndexInFormArrayByValue(formArray, childBotId);
    LoggingService.log(`removing bot at index ${formControlIndex}`);
    if (formControlIndex != undefined) formArray.removeAt(formControlIndex);
  }

  emitFormValidationEvent() {
    if (this.bot_type === EBotType.chatbot && this._bot.is_manager && this._bot.child_bots.length < 1) {
      setTimeout(() => {
        this.datachanged$.emit({form_validation_basic_info: false});
      }, 0);
      return;
    }
  }

  isBotIdPresentInChildBotList(childBotId): boolean {
    let childBots: number[] = this.formGroup.get('child_bots').value || [];
    let indexOfMatchingChildBot: number = childBots.findIndex((botId) => botId === childBotId);
    return indexOfMatchingChildBot !== -1;
  }

  click() {
    this.formGroup.get('name').patchValue(Date.now());
    LoggingService.log(this.formGroup);
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  value: IBot;

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(obj: IBot): void {
    this.value = obj;
  }

  nameChangeByUser($event) {
    setTimeout(() => {
      let name = this.formGroup.value.name;
      if (name && !this._bot.id) {
        this.formGroup.patchValue({bot_unique_name: name.trim().split(' ').join("").toLowerCase()});
      }
    }, 1000);
  }
}


