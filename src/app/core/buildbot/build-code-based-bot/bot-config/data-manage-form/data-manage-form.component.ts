import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBot} from '../../../../interfaces/IBot';
import {Select, Store} from '@ngxs/store';
import {EBotType, UtilityService} from '../../../../../utility.service';
import {ConstantsService, } from '../../../../../constants.service';
import {PermissionService} from '../../../../../permission.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {ViewBotStateModel} from '../../../../view-bots/ngxs/view-bot.state';
import {map, takeWhile} from 'rxjs/internal/operators';
import {EAllActions} from '../../../../../typings/enum';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-data-manage-form',
  templateUrl: './data-manage-form.component.html',
  styleUrls: ['../basic-info-form/basic-info-form.component.scss']

})
export class DataManageFormComponent implements OnInit {

  myEBotType = EBotType;
  myEAllActions = EAllActions;
  bot_type;
  @Input() formGroup: FormGroup;
  @Output() dataValid$ = new EventEmitter();
  @Output() disableBot$ = new EventEmitter();
  @Select() botlist$: Observable<ViewBotStateModel>;
  @Input() formData: any;
  @Input() isBuildBot: any = false;
  codebasedBotList: IBot[];

  constructor(
    private store: Store,
    public constantsService: ConstantsService,
    public permissionService: PermissionService,
    public formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    private utilityService: UtilityService) {
  }

  advanced_data_protection;

  ngOnInit() {
    this.bot_type = this.activatedRoute.snapshot.data.bot_type || this.activatedRoute.snapshot.queryParamMap.get('bot_type');

    this.botlist$
      .pipe(
        takeWhile((botlist) => {
          return botlist && !!botlist.allBotList;
        }),
        map((botlist) => {
          return botlist.allBotList.filter((bot) => bot.bot_type != EBotType.intelligent);
        }))
      .subscribe((codebasedBotList) => {
        this.codebasedBotList = codebasedBotList;
      });

    this.manageBotDisableReadOnlyStatus();
  }

  manageBotDisableReadOnlyStatus() {
    const bot_disabled_settingsFG = this.formGroup.get('bot_disabled_settings');
    bot_disabled_settingsFG
      .get('bot_disabled')
      .valueChanges.subscribe((bot_disabled) => {
      this.toggleReadOnlyStatusForBotDisabledSection(!bot_disabled);
    });
    this.toggleReadOnlyStatusForBotDisabledSection(!bot_disabled_settingsFG.get('bot_disabled').value);
  }

  toggleReadOnlyStatusForBotDisabledSection(shouldMakeReadOnly: boolean) {
    const bot_disabled_settingsFG = this.formGroup.get('bot_disabled_settings');
    if (shouldMakeReadOnly) {
      bot_disabled_settingsFG.get('disabled_message').disable();
      bot_disabled_settingsFG.get('agent_handover').disable();
    } else {
      bot_disabled_settingsFG.get('disabled_message').enable();
      bot_disabled_settingsFG.get('agent_handover').enable();
    }
  }


}
