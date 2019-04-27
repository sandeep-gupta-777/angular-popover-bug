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

@Component({
  selector: 'app-data-manage-form',
  templateUrl: './data-manage-form.component.html',
  styleUrls: ['../basic-info-form/basic-info-form.component.scss']

})
export class DataManageFormComponent implements OnInit {

  _bot: Partial<IBot> = {};
  myEBotType =  EBotType;
  myEAllActions = EAllActions;
  @Input() formGroup: FormGroup;
  @Output() dataValid$ = new EventEmitter();
  @Select() botlist$: Observable<ViewBotStateModel>;
  @Input() formData: any;
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
  }


}
