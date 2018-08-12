import {AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Select, Selector, Store} from '@ngxs/store';
import {IBot, IBotVersionResult} from '../../../../../interfaces/IBot';
import {IIntegrationOption} from '../../../../../../../interfaces/integration-option';
import {SaveBasicInfo, SaveIntegrationInfo} from '../../../../ngxs/buildbot.action';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ConstantsService} from '../../../../../../constants.service';
import {Observable} from 'rxjs';
import {IBotCreationState} from '../../../../ngxs/buildbot.state';

@Component({
  selector: 'app-integration-option-list',
  templateUrl: './integration-option-list.component.html',
  styleUrls: ['./integration-option-list.component.scss']
})
export class IntegrationOptionListComponent implements OnInit, AfterViewInit {

  isActive: boolean;
  enable = false;
  formValue: IIntegrationOption;
  @Input() bot: IBot;
  @ViewChild('form') f: NgForm;
  @Select() botcreationstate$: Observable<IBotCreationState>;
  @Output() datachanged$ = new EventEmitter();

  routeParent;

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private constantsService: ConstantsService
  ) {
  }

  ngOnInit() {
    this.routeParent = this.activatedRoute.snapshot.data;
    if (this.bot) {
      this.formValue = this.bot.integrations;
    } else if (this.routeParent['buildBot']) {
      this.botcreationstate$.subscribe((botCreationState: IBotCreationState) => {
        this.formValue = botCreationState.codeBased.integrations;
      });
    }
    this.formValue = {
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
    };;

  }

  onChange($event) {
    this.isActive = $event;
  }

  click() {
    // console.log(this.formValue);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.f.form.patchValue(this.formValue);
    });

    this.f.valueChanges.debounceTime(1000).subscribe((integrationInfo: IIntegrationOption) => {
      // if (!this.f.dirty) return;

      this.datachanged$.emit({integrations: integrationInfo});
      // if (this.routeParent['buildBot'])
      //   this.store.dispatch([
      //     new SaveBasicInfo({data: {integrations: integrationInfo}})
      //   ]);
    });
  }
}
