import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IBot} from '../../../../interfaces/IBot';
import {IBasicInfo} from '../../../../../../interfaces/bot-creation';
import {SaveNewBotInfo_CodeBased} from '../../../ngxs/buildbot.action';
import {Store} from '@ngxs/store';
import {UtilityService} from '../../../../../utility.service';
import {EAllActions} from '../../../../../constants.service';

@Component({
  selector: 'app-additional-info-form',
  templateUrl: './additional-info-form.component.html',
  styleUrls: ['../basic-info-form/basic-info-form.component.scss']

})
export class AdditionalInfoFormComponent implements OnInit {

  _bot: Partial<IBot> = {};
  myEAllActions = EAllActions;

  @Input() set bot(_bot: IBot) {
    if (this.f && _bot) {
      this._bot = _bot;
      this.f.form.patchValue(_bot);
    }
  }

  @ViewChild('form') f: HTMLFormElement;
  @Output() datachanged$ = new EventEmitter<Partial<IBot>>();

  formData: any;

  constructor(private store: Store, private utilityService: UtilityService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this._bot);
    this.f.valueChanges.debounceTime(200).subscribe((data: IBasicInfo) => {
      if (this.utilityService.areTwoJSObjectSame(this.formData, data)) return;
      if (!this.f.dirty) return;
      this.formData = data;
      this.datachanged$.emit(data);
    });
  }
  click(){
    console.log(this.f.value);
  }
}
