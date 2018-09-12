import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IBot} from '../../../../interfaces/IBot';
import {IBasicInfo, ISaveDataManagment} from '../../../../../../interfaces/bot-creation';
import {SaveDataManagment} from '../../../ngxs/buildbot.action';
import {Store} from '@ngxs/store';
import {UtilityService} from '../../../../../utility.service';
import {ConstantsService, ETabNames} from '../../../../../constants.service';

@Component({
  selector: 'app-data-manage-form',
  templateUrl: './data-manage-form.component.html',
  styleUrls: ['../basic-info-form/basic-info-form.component.scss']

})
export class DataManageFormComponent implements OnInit {

  _bot: Partial<IBot> = {};
  myETabNames = ETabNames;
  @Input() set bot(_bot: IBot) {
    if (this.f && _bot) {
      this._bot = _bot;
      this.f.form.patchValue(this._bot);
    }
  }

  @ViewChild('form') f: HTMLFormElement;
  @Output() datachanged$ = new EventEmitter<Partial<IBot>>();

  formData: any;

  constructor(
    private store: Store,
    public constantsService: ConstantsService,
    private utilityService: UtilityService) {
  }


  ngOnInit() {
    // this.bot
    //
  }

  //
  ngAfterViewInit(): void {
    console.log(this._bot);
    this.f.valueChanges.debounceTime(200).subscribe((data: ISaveDataManagment) => {
      if (this.utilityService.areTwoJSObjectSame(this.formData, data)) return;
      if (!this.f.dirty) return;
      this.formData = data;
      this.datachanged$.emit(data);
    });
  }

  click(){
    console.log(this._bot);
  }

}
