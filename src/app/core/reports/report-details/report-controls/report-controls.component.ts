import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ViewBotStateModel} from '../../../view-bots/ngxs/view-bot.state';
import {IBot} from '../../../interfaces/IBot';
import {IBasicInfo} from '../../../../../interfaces/bot-creation';
import {SaveNewBotInfo_CodeBased} from '../../../buildbot/ngxs/buildbot.action';
import {IReportItem} from '../../../../../interfaces/report';
import {SetReportFormAction} from '../../ngxs/reports.action';
import {NgForm} from '@angular/forms';
import {UtilityService} from '../../../../utility.service';
import {TempVariableService} from '../../../../temp-variable.service';
import {ServerService} from '../../../../server.service';
import {ConstantsService} from '../../../../constants.service';
import {ActivatedRoute} from '@angular/router';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-report-controls',
  templateUrl: './report-controls.component.html',
  styleUrls: ['./report-controls.component.scss']
})
export class ReportControlsComponent implements OnInit {

  @Select() botlist$: Observable<ViewBotStateModel>;
  datePickerConfig: Partial<BsDatepickerConfig>;
  @ViewChild('form') f: NgForm;
  botlist: IBot[] = [];
  selectedBot: IBot;
  reportItem: IReportItem;
  filetype = 'pdf';
  // @Input()
  reportFormData: IReportItem;
  servervalue;
  deliveryMode:string = 'email';
  // start_date = new Date();

  constructor(
    private store: Store,
    private utilityService: UtilityService,
    private tempVariableService: TempVariableService,
    private serverService: ServerService,
    private activatedRoute: ActivatedRoute,
    private constantsService: ConstantsService,
  ) {
    this.datePickerConfig = Object.assign({},{
      'containerClass':'theme-dark-blue',
      'dateInputFormat':'DD/MM/YYYY',
    });
  }

  ngOnInit() {

    let _id = this.activatedRoute.snapshot.paramMap.get('_id');

    this.botlist$.subscribe((value: ViewBotStateModel) => {
      this.botlist = [...value.codeBasedBotList, ...value.pipelineBasedBotList];
      setTimeout(() => {


        // this.reportFormData.startdate = this.utilityService.convertDateObjectStringToDDMMYY(new Date(this.reportFormData.startdate));
        // if (this.reportFormData) this.f.f.patchValue(this.reportFormData);
        //
        if (_id && _id !== 'new') {
          let url = this.constantsService.getReportsEditInfo(_id);
          this.serverService.makeGetReq<IReportItem>({url})
            .subscribe((value: any) => {
              this.servervalue = value;
              /*TODO: VERY BAD FIX; USE REACTIVE FORM INSTEAD*/
              value.delivery = value.delivery[0];;
              if (value) this.f.form.patchValue(value);
              // this.f.f.patchValue({startdate:value.startdate});
              // this.f.f.patchValue({startdate:value.startdate});//This will only accept mmddyyyy format...
            });
          // } else if(_id==='new') {
          //   this.reportFormData.startdate = this.utilityService.convertDateObjectStringToDDMMYY(new Date(this.reportFormData.startdate));
          //   if (this.reportFormData && !_id) this.f.f.patchValue(this.reportFormData);
        }
      }, 0);
    });


    this.f.valueChanges.debounceTime(1000).subscribe((data: any) => {
      // if (!this.f.dirty) return;
      /*TODO: VERY BAD FIX; USE REACTIVE FORM INSTEAD*/
      data.delivery = [data.delivery];
      data = {
        ...this.servervalue,
        ...data
      };
      this.reportFormData = data;

      /*if its not a new subscription, dont store in store*/
      // if(_id==='new') this.store.dispatch(new SetReportFormAction({reportItem: data}));
    });
  }

  selectedBotChanged(bot){

  }

  click() {
  }
}
