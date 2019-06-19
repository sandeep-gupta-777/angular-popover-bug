import {debounceTime} from 'rxjs/operators';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBot} from '../../../../interfaces/IBot';
import {ISaveDataManagment} from '../../../../../../interfaces/bot-creation';
import {Select, Store} from '@ngxs/store';
import {EBotType, UtilityService} from '../../../../../utility.service';
import {ConstantsService, } from '../../../../../constants.service';
import {PermissionService} from '../../../../../permission.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {ViewBotStateModel} from '../../../../view-bots/ngxs/view-bot.state';
import {distinctUntilChanged, map, skip, takeWhile} from 'rxjs/internal/operators';
import {LoggingService} from '../../../../../logging.service';
import {EAllActions} from "../../../../../typings/enum";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-manage-form',
  templateUrl: './data-manage-form.component.html',
  styleUrls: ['../basic-info-form/basic-info-form.component.scss']

})
export class DataManageFormComponent implements OnInit {

  _bot: Partial<IBot> = {};
  myEBotType =  EBotType;
  myEAllActions = EAllActions;
  bot_type;
  @Input() formGroup: FormGroup;
  @Output() dataValid$ = new EventEmitter();
  @Output() disableBot$ = new EventEmitter();
  @Select() botlist$: Observable<ViewBotStateModel>;
  @Input() formData: any;
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
        takeWhile((botlist)=>{
          return botlist && !!botlist.allBotList;
        }),
        map((botlist) => {
        return botlist.allBotList.filter((bot) => bot.bot_type === EBotType.chatbot);
      }))
      .subscribe((codebasedBotList) => {
        this.codebasedBotList = codebasedBotList;
      });
  }


}
