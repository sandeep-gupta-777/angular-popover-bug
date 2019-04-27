import {AfterViewInit, Component, EventEmitter, Input, IterableDiffers, OnInit, Output, ViewChild} from '@angular/core';
import {IAvatar, IAvatarList} from '../../../../../../interfaces/bot-creation';
import {ObjectArrayCrudService} from '../../../../../object-array-crud.service';
import {IBot} from '../../../../interfaces/IBot';
import {Store} from '@ngxs/store';
import {FormArray, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {EFormValidationErrors, UtilityService} from '../../../../../utility.service';
import {debounceTime} from 'rxjs/operators';
import {EAllActions} from "../../../../../typings/enum";

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

  ngOnInit() {

    this.formGroup = this.formBuilder.group({
      avatars: this.formBuilder.array([])
    });

    /*Why?: form_validation_avator key doesnt exists in botcreation state in the beginning*/


    this.formArray = this.formGroup.get('avatars') as FormArray;
    this.initializeFormArray();


    /*This line is here because this.basicInfoForm.valueChanges is not being triggered automatically initially*/
    const avatarValidationObj = {};
    avatarValidationObj[EFormValidationErrors.form_validation_avator] = this.formGroup.valid && this._bot.avatars && this._bot.avatars.length > 0;
    this.datachanged$.emit({...this.formGroup.value, ...avatarValidationObj});

    this.formGroup.valueChanges.pipe(debounceTime(200)).subscribe((data: any) => {

      if (this.utilityService.areTwoJSObjectSame(this.formData, data)) {
        return;
      }
      this.formData = this.formGroup.value;
      const avatarValidationObj = {};
      avatarValidationObj[EFormValidationErrors.form_validation_avator] = this.formGroup.valid && data.avatars && data.avatars.length > 0;
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
        imageUrl: ['', Validators.required],
        name: ['', Validators.required],
        id: 0
      };
    } else {
      newAvator = {
        imageUrl: [this.utilityService.getRandomAvatorUrl(), Validators.required],
        name: ['StarBot' + Math.floor(Math.random() * 100), Validators.required],
        id: 0
      };
    }
    //
    this.utilityService.pushFormGroupItemInFormArray(this.formArray, this.formBuilder, newAvator);
  }

  deleteAvator(index: number) {
    this.formArray.removeAt(index);
  }

  log() {
    console.log(this.formGroup);
  }
}
