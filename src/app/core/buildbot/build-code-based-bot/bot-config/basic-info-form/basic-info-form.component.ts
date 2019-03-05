
import {debounceTime} from 'rxjs/operators';
import {AfterContentChecked, AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IBot} from '../../../../interfaces/IBot';
import {Store, Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ViewBotStateModel} from '../../../../view-bots/ngxs/view-bot.state';
import {ControlValueAccessor, FormArray, FormBuilder, FormControl, FormGroup, NgForm} from '@angular/forms';
import {EBotType, UtilityService} from '../../../../../utility.service';
import {ConstantsService, EAllActions} from '../../../../../constants.service';
import {ActivatedRoute} from '@angular/router';
import {PermissionService} from '../../../../../permission.service';


@Component({
  selector: 'app-basic-info-form',
  templateUrl: './basic-info-form.component.html',
  styleUrls: ['./basic-info-form.component.scss']
})
export class BasicInfoFormComponent implements OnInit {
  _bot: Partial<IBot> = {};
  bot_type;
  formData: Partial<IBot>;
  myEAllActions = EAllActions;
  myEBotType = EBotType;
  @Input() formGroup: FormGroup;
  isDisabled: boolean;
  logoErrorObj = [
    {name: 'imageExnError', description: 'Invalid Extension'},
    {name: 'imageHttpsError', description: 'Only Https urls allowed'}];

  constructor(
              public constantsService: ConstantsService,
              public permissionService: PermissionService,
              public activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {}

  log(formGroup){
    console.log(formGroup);
  }
}


