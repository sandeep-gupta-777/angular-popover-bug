
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
  @Input() botId:number;
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

  ngOnInit() {
    /*todo: why is this here and not in parent?*/
    if(!this.botId){/*only for new bots*/
      this.formGroup.get('name').valueChanges.subscribe((value) => {
        if(value){
          const uniqueName = value.replace(/\s/g, "");
          this.formGroup.get('bot_unique_name').patchValue(uniqueName);
        }else {
          this.formGroup.get('bot_unique_name').patchValue("");
        }
      });
    }
  }

  log(formGroup){
    console.log(formGroup);
  }
}


