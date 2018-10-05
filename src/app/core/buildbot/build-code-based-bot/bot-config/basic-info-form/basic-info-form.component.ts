import {AfterContentChecked, AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IBot} from '../../../../interfaces/IBot';
import 'rxjs/add/operator/debounceTime';
import {Store, Select} from '@ngxs/store';
import {SaveNewBotInfo_CodeBased} from '../../../ngxs/buildbot.action';
import {IBasicInfo} from '../../../../../../interfaces/bot-creation';
import {Observable} from 'rxjs';
import {ViewBotStateModel} from '../../../../view-bots/ngxs/view-bot.state';
import {NgForm} from '@angular/forms';
import {UtilityService} from '../../../../../utility.service';
import {ConstantsService, ETabNames} from '../../../../../constants.service';
import {ActivatedRoute} from '@angular/router';
import {EBotType} from '../../../../view-bots/view-bots.component';

@Component({
  selector: 'app-basic-info-form',
  templateUrl: './basic-info-form.component.html',
  styleUrls: ['./basic-info-form.component.scss']
})
export class BasicInfoFormComponent implements OnInit, AfterViewInit {
  @Select() botlist$: Observable<ViewBotStateModel>;
  allbotList$: Observable<IBot[]>;
  allbotList: IBot[];
  codebasedBotList: IBot[];
  _bot: Partial<IBot> = {};
  childBotlength:number =0;
  _default_logo = 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png';
  _default_room_persistence_time: number = 240;

  @Input() set bot(_bot: IBot) {
    if (this.f && _bot) {
      //
      this._bot = _bot;
      this.childBotlength = this._bot.child_bots && this._bot.child_bots.length;
      if (!this._bot.logo) this._bot.logo = this._default_logo;
      if (!this._bot.room_persistence_time) this._bot.room_persistence_time = this._default_room_persistence_time;
      this.f.form.patchValue(this._bot);
    }
  }

  @Output() datachanged$ = new EventEmitter<Partial<IBot>>();
  @ViewChild('form') f: NgForm;
  isManager: boolean = false;
  bot_type;
  formData: Partial<IBot>;
  myETabNames = ETabNames;
  myEBotType = EBotType;
  constructor(private store: Store,
              private utilityService: UtilityService,
              public constantsService: ConstantsService,
              public activatedRoute: ActivatedRoute
  ) {
  }


  ngOnInit() {
    this.bot_type  =  this.activatedRoute.snapshot.queryParamMap.get('bot_type')|| this.activatedRoute.snapshot.data['bot_type'];

    try {
      this.isManager = this._bot.child_bots.length !== 0;
    } catch (e) {
      this.isManager = false;
    }
    // try {
    //   this.isManager = this._bot.child_bots.length !== 0;
    // } catch (e) {
    //   this.isManager = false;
    // }
    this.botlist$.subscribe((botlist) => {

      this.allbotList = botlist.allBotList;
      this.codebasedBotList = botlist.allBotList.filter((bot)=>bot.bot_type === EBotType.chatbot);
    });

  }

  ngAfterViewInit(): void {
    if (this._bot) setTimeout(() => {
      this.f.form.patchValue(this._bot);
    }, 0);
    if (this.f) {
      setTimeout(() => {
          this.emitFormValidationEvent();
        }
        , 100);
    }

    this.f.valueChanges.debounceTime(200).subscribe((data: Partial<IBot>) => {
      if (this.utilityService.areTwoJSObjectSame(this.formData, data)) return;
      if (!this.f.dirty) return;
      this.formData = data; /*this.formData is used for compareTwoJavaObjects, no other purpose*/
      if(this.bot_type === EBotType.chatbot && this._bot.child_bots && this._bot.child_bots.length<1 && this.isManager){
        /*TODO: ui-switch is not working on so many levels, fix it*/
        this.datachanged$.emit({...this.formData, form_validation_basic_info: false});
        return;
      }
      this.datachanged$.emit({...this.formData, form_validation_basic_info: this.f.valid});
    });
  }

  addChildBot(childBot): void {
    if (!this._bot.child_bots) {
      this._bot.child_bots = [];
    }
    this._bot.child_bots.push(childBot.id);
    this.childBotlength =this._bot.child_bots.length;
    console.log(this.f);
    this.emitFormValidationEvent();
  }

  removeChildBot(childBotId): void {
    for (let i = 0; i < this._bot.child_bots.length; i++) {
      if (this._bot.child_bots[i] === childBotId) {
        this._bot.child_bots.splice(i, 1);
      }
    }
    console.log(this.f);
    this.childBotlength =this._bot.child_bots.length;
    this.emitFormValidationEvent();
  }

  emitFormValidationEvent(){
    if(this.bot_type===EBotType.chatbot && this._bot.is_manager && this._bot.child_bots.length<1){
      setTimeout(()=>{this.datachanged$.emit({form_validation_basic_info: false});},0);
      return;
    }
    setTimeout(()=>{this.datachanged$.emit({form_validation_basic_info: this.f.valid});},0)
  }
  isManagerToggleChanged(toggleValue:boolean){
    // this._bot.isMa
    this.isManager = toggleValue;
    setTimeout(()=>{this.emitFormValidationEvent()},0);
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


