import {AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Select, Selector, Store} from '@ngxs/store';
import {IBot, IBotVersionResult} from '../../../../../interfaces/IBot';
import {IIntegrationMasterListItem, IIntegrationOption} from '../../../../../../../interfaces/integration-option';
import {SaveNewBotInfo_CodeBased, SaveIntegrationInfo} from '../../../../ngxs/buildbot.action';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ConstantsService} from '../../../../../../constants.service';
import {Observable} from 'rxjs';
import {IBotCreationState} from '../../../../ngxs/buildbot.state';
import {IAppState} from '../../../../../../ngxs/app.state';
import {EFormValidationErrors, UtilityService} from '../../../../../../utility.service';
import {LoggingService} from '../../../../../../logging.service';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-integration-option-list',
  templateUrl: './integration-option-list.component.html',
  styleUrls: ['./integration-option-list.component.scss'],
  host: {
    '[style.display]': '\'block\'',
    '[style.height.percent]': '100',
    '[style.overflow]': 'scroll',
  }
})
export class IntegrationOptionListComponent implements OnInit, AfterViewInit {

  test: boolean;
  isActive: boolean;
  enable = false;
  formValue: IIntegrationOption;
  formValueFinal: IIntegrationOption;
  formDataClone = {};
  @Input() _bot: IBot;
  @Input() bot: IBot;
  // @Input() set bot(bot: IBot) {
  //   this.bot = bot;
  //   this.generateIntegrationFormValue();
  // }
  @ViewChild('form') f: NgForm;
  @ViewChild('form_new') f_new: NgForm;
  @ViewChild('test') test_new: NgForm;
  @Select() botcreationstate$: Observable<IBotCreationState>;
  @Output() datachanged$ = new EventEmitter();
  @Output() form$ = new EventEmitter();
  @Output() formDirty$ = new EventEmitter<Boolean>();
  @Select() app$: Observable<IAppState>;
  myObject = Object;
  routeParent;
  masterIntegrationList: IIntegrationMasterListItem[];
  masterIntegrationListSerialized = [];
  integration_types: string[];

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private constantsService: ConstantsService,
    private utilityService: UtilityService
  ) {
  }

  ngOnInit() {

    this._bot = this.bot; //todo: we need to one...remove bot
    this.app$.subscribe((value) => {
      this.masterIntegrationList = value.masterIntegrationList;
      if(!value.masterIntegrationList){
        return;
      }
      this.integration_types =  Array.from(new Set(this.masterIntegrationList.map(item => item.integration_type)));
    });
    this.routeParent = this.activatedRoute.snapshot.data;
    this.generateIntegrationFormValue();
  }

  generateIntegrationFormValue() {
    if (!this.masterIntegrationList) { return; }
    this.masterIntegrationList.forEach((integrationItem) => {
      const integration_type_key = integrationItem.integration_type;
      const integration_name_key = integrationItem.key;
      const tempObj = {};
      tempObj[integration_name_key] = integrationItem.inputs.reduce((aggregate, value: { 'display_text': string, 'param_name': string }) => {
        const obj = {};
        obj[value.param_name] = '';
        return {...aggregate, ...obj};
      }, {enabled: false});
      if (this.masterIntegrationListSerialized[integration_type_key]) {
        this.masterIntegrationListSerialized[integration_type_key] = {
          ...this.masterIntegrationListSerialized[integration_type_key],
          ...tempObj
        };
      } else {
        this.masterIntegrationListSerialized[integration_type_key] = {...tempObj};
      }
    });
    this.formValue = UtilityService.cloneObj(this._bot.integrations);
    this.formValue =
      this.formValueFinal = {
        channels: {
          ...this.masterIntegrationListSerialized['channels'],
          ...this.formValue.channels
        },
        ccsp_details: {
          ...this.masterIntegrationListSerialized['ccsp_details'],
          ...this.formValue.ccsp_details
        },
        fulfillment_provider_details: {
          ...this.masterIntegrationListSerialized['fulfillment_provider_details'],
          ...this.formValue.fulfillment_provider_details
        }
      };
    this.formValue = {...this.formValue};

    this.f_new.form.patchValue(this.formValue);
    /*TODO: this should not be requiredClass to form but removing it doesnt patch
    * the form when reset is clicked in bot header. Not sure why.
    * */
  }

  getLogo(key) {
    const matchedMasterIntegration = this.masterIntegrationList.find((masterIntegrationItem) => {
      return masterIntegrationItem.key === key;
    });
    return matchedMasterIntegration.icon;

  }

  onChange($event) {
    this.isActive = $event;
  }

  click() {
    LoggingService.log(this.formValue);
    LoggingService.log(this.f_new.value);
    this.f_new.form.patchValue(this.formValue);
    // LoggingService.log(this.test_new.form.patchValue({enabled:true}));
  }

  // test = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.f_new.form.patchValue(this.formValueFinal);
      this.form$.emit(this.f_new);
    });

    try {
      const fragment = this.activatedRoute.snapshot.fragment;
      document.getElementById(fragment).scrollIntoView();
    } catch (e) {
      console.log(e);
    }

    this.f_new.valueChanges.pipe(debounceTime(200)).subscribe((integrationInfo: IIntegrationOption) => {
      // if (!this.f_new.dirty) return;

      if (this.utilityService.areTwoJSObjectSame(this.formDataClone, this.f_new.value)) {return; }
      const formValidityObj =  {};
      this.formDataClone  = this.utilityService.createDeepClone(this.f_new.value);
      formValidityObj[EFormValidationErrors.form_validation_integration] = this.f_new && this.f_new.valid;


      this.datachanged$.emit({integrations: integrationInfo, ...formValidityObj});
      this.formDirty$.emit(this.f_new.dirty);

      // if (this.routeParent['buildBot'])
      //   this.store.dispatch([
      //     new SaveBasicInfo({data: {integrations: integrationInfo}})
      //   ]);
    });

    // this.f_new.valueChanges.subscribe((value)=>{
    //   ;
    //   // if(value)
    //     this.formValueFinal = value;
    // })
  }

  onSwitchChange(obj) {
    obj.enabled = !obj.enabled;
  }


  click1() {
    LoggingService.log(this.f_new.value);
    LoggingService.log(this.formValueFinal);
  }

}
