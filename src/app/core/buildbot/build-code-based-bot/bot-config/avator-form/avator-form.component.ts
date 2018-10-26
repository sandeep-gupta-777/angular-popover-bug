import {AfterViewInit, Component, EventEmitter, Input, IterableDiffers, OnInit, Output, ViewChild} from '@angular/core';
import {IAvatar, IAvatarList} from '../../../../../../interfaces/bot-creation';
import {ObjectArrayCrudService} from '../../../../../object-array-crud.service';
import {IBot} from '../../../../interfaces/IBot';
import {Store} from '@ngxs/store';
import {SaveAvatorInfo} from '../../../ngxs/buildbot.action';
import {FormArray, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {EFormValidationErrors, UtilityService} from '../../../../../utility.service';
import {EAllActions} from '../../../../../constants.service';
import {LoggingService} from '../../../../../logging.service';

@Component({
  selector: 'app-avator-form',
  templateUrl: './avator-form.component.html',
  styleUrls: ['./avator-form.component.scss']
})
export class AvatorFormComponent implements OnInit {

  _bot: IBot;
  myEAllActions = EAllActions;
  formData;

  @Input() set bot(_bot: IBot) {

    this._bot = _bot;
    if (this.formArray) {
      this.formArray.controls.splice(0);
      this.initializeFormArray();
    }
  }

  @ViewChild('form') f: NgForm;
  @Output() datachanged$ = new EventEmitter<Partial<IBot>>();
  iterableDiffer;
  formGroup: FormGroup;
  formArray: FormArray;

  constructor(
    private _iterableDiffers: IterableDiffers,
    private store: Store,
    private formBuilder: FormBuilder,
    private utilityService: UtilityService) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  newAvator: IAvatar = {
    imageUrl: '',
    name: '',
    id: 0
  };

  avatorList: IAvatar[] = [];

  ngOnInit() {
    this.avatorList = this._bot.avatars;
    this.formGroup = this.formBuilder.group({
      avatars: this.formBuilder.array([])
    });
    this.formArray = this.formGroup.get('avatars') as FormArray;
    this.initializeFormArray();
    LoggingService.log(this.formArray);

    this.formGroup.valueChanges.debounceTime(200).subscribe((data: any) => {
      if (this.utilityService.areTwoJSObjectSame(this.formData, data)) return;
      this.formData = this.formGroup.value;
      let avatarValidationObj = {};
      avatarValidationObj[EFormValidationErrors.form_validation_avator] = this.formGroup.valid;
      this.datachanged$.emit({...this.formGroup.value, ...avatarValidationObj});
    });
  }

  initializeFormArray() {
    this._bot.avatars && this._bot.avatars.forEach((avatar) => {
      this.formArray.push(this.formBuilder.group({
        'name': [avatar.name, Validators.required],
        'imageUrl': [avatar.imageUrl, Validators.required],
      }));
    });
  }

  createPrebuiltAvatarRow(empty?: boolean) {

    let newAvator;
    if (empty) {
      newAvator = {
        imageUrl: '',
        name: '',
        id: 0
      };
    }
    else {
      newAvator = {
        imageUrl: this.utilityService.getRandomAvatorUrl(),
        name: 'StarBot' + Math.floor(Math.random() * 100),
        id: 0
      };
    }

    this.utilityService.pushFormGroupItemInFormArray(this.formArray, this.formBuilder, newAvator);
  }

  deleteAvator(index: number) {
    this.avatorList.splice(index, 1);
    this.formArray.removeAt(index);
  }
}
