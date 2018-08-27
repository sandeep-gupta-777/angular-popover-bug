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

@Component({
  selector: 'app-integration-option-list',
  templateUrl: './integration-option-list.component.html',
  styleUrls: ['./integration-option-list.component.scss']
})
export class IntegrationOptionListComponent implements OnInit, AfterViewInit {

  isActive: boolean;
  enable = false;
  formValue: IIntegrationOption;
  formValueFinal: IIntegrationOption;
  @Input() bot: IBot;
  @ViewChild('form') f: NgForm;
  @ViewChild('form_new') f_new: NgForm;
  @Select() botcreationstate$: Observable<IBotCreationState>;
  @Output() datachanged$ = new EventEmitter();
  @Select() app$: Observable<IAppState>;
  myObject = Object;
  routeParent;
  masterIntegrationList: IIntegrationMasterListItem[];
  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private constantsService: ConstantsService
  ) {
  }

  ngOnInit() {
    this.app$.subscribe((value)=>{
      this.masterIntegrationList = value.masterIntegrationList;
    });

    this.routeParent = this.activatedRoute.snapshot.data;
    if (this.bot) {
      this.formValue = this.bot.integrations;
    } else if (this.routeParent['buildBot']) {
      this.botcreationstate$.subscribe((botCreationState: IBotCreationState) => {
        this.formValue = botCreationState.codeBased.integrations;
      });
    }

    // this.formValueFinal = this.constantsService.integrationOptionListTemplate;
    // this.formValueFinal =  this.bot.integrations;
    this.formValueFinal =  {
      channels:{
        ...this.constantsService.integrationOptionListTemplate.channels,
        ...this.formValue.channels
      },
      ccsp_details:{
        ...this.constantsService.integrationOptionListTemplate.ccsp_details,
        ...this.formValue.ccsp_details
      },
      fulfillment_provider_details:{
        ...this.constantsService.integrationOptionListTemplate.fulfillment_provider_details,
        ...this.formValue.fulfillment_provider_details
      }
    };



  }
  getLogo(key){
    let matchedMasterIntegration = this.masterIntegrationList.find((masterIntegrationItem)=>{
      return masterIntegrationItem.key===key;
    });
    return matchedMasterIntegration.icon;

  }

  onChange($event) {
    this.isActive = $event;
  }

  click() {
    // console.log(this.formValue);
  }
  test = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.f_new.form.patchValue(this.formValueFinal);
    });

    this.f_new.valueChanges.debounceTime(1000).subscribe((integrationInfo: IIntegrationOption) => {
      if (!this.f_new.dirty) return;
      this.datachanged$.emit({integrations: integrationInfo});
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

  onSwitchChange(obj){
    obj.enabled = !obj.enabled;
  }


  click1(){
    console.log(this.f_new.value);
    console.log(this.formValueFinal);
  }

}
