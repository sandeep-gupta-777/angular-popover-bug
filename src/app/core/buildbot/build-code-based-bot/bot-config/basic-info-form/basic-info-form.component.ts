import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IBot} from '../../../../interfaces/IBot';
import 'rxjs/add/operator/debounceTime';
import {Store, Select} from '@ngxs/store';
import {SaveNewBotInfo_CodeBased} from '../../../ngxs/buildbot.action';
import {IBasicInfo} from '../../../../../../interfaces/bot-creation';
import {Observable} from 'rxjs';
import {ViewBotStateModel} from '../../../../view-bots/ngxs/view-bot.state';
import {NgForm} from '@angular/forms';
import {UtilityService} from '../../../../../utility.service';

@Component({
  selector: 'app-basic-info-form',
  templateUrl: './basic-info-form.component.html',
  styleUrls: ['./basic-info-form.component.scss']
})
export class BasicInfoFormComponent implements OnInit, AfterViewInit {
  @Select() botlist$: Observable<ViewBotStateModel>;
  allbotList$: Observable<IBot[]>;
  allbotList: IBot[];
  _bot: Partial<IBot> = {};
  _default_logo = 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png';
  _default_room_persistence_time: number = 240;

  @Input() set bot(_bot: IBot) {
    if (this.f && _bot) {
      this._bot = _bot;
      if (!this._bot.logo) this._bot.logo = this._default_logo;
      if (!this._bot.room_persistence_time) this._bot.room_persistence_time = this._default_room_persistence_time;
      this.f.form.patchValue(this._bot);
    }
  }

  @Output() datachanged$ = new EventEmitter<Partial<IBot>>();
  @ViewChild('form') f: NgForm;
  isManager: boolean = false;

  formData: Partial<IBot>;

  constructor(private store: Store, private utilityService: UtilityService) {
  }


  ngOnInit() {
    try {
      this.isManager = this._bot.child_bots.length !== 0;
    } catch (e) {
      this.isManager = false;
    }
    this.botlist$.subscribe((botlist) => {

      this.allbotList = botlist.allBotList;
    });

  }

  ngAfterViewInit(): void {
    if (this._bot) setTimeout(() => {
      this.f.form.patchValue(this._bot);
    }, 0);
    this.f.valueChanges.debounceTime(1000).subscribe((data: Partial<IBot>) => {
      if (this.utilityService.compareTwoJavaObjects(this.formData, data)) return;
      if (!this.f.dirty) return;
      this.formData = data;
      /*this.formData is used for compareTwoJavaObjects, no other purpose*/
      this.datachanged$.emit({...this.formData, form_validation_basic_info: this.f.valid});
    });
  }

  addChildBot(childBot): void {
    if (!this._bot.child_bots) {
      this._bot.child_bots = [];
    }
    this._bot.child_bots.push(childBot.id);
  }

  removeChildBot(childBotId): void {
    for (let i = 0; i < this._bot.child_bots.length; i++) {
      if (this._bot.child_bots[i] === childBotId) {
        this._bot.child_bots.splice(i, 1);
      }
    }
  }

  wannaDisable(childBotId): boolean {
    if (!this._bot || !this._bot.child_bots || !this._bot.child_bots.length) return false;
    for (let i = 0; i < this._bot.child_bots.length; i++) {
      if (this._bot.child_bots[i] === childBotId) {
        return true;
      }
    }
    return false;
  }

  click() {
    console.log(this.f);
  }
}


