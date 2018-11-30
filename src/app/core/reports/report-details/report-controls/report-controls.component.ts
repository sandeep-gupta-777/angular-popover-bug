import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ViewBotStateModel} from '../../../view-bots/ngxs/view-bot.state';
import {IBot} from '../../../interfaces/IBot';
import {IReportItem} from '../../../../../interfaces/report';
import {NgForm} from '@angular/forms';
import {EBotType, UtilityService} from '../../../../utility.service';
import {TempVariableService} from '../../../../temp-variable.service';
import {ServerService} from '../../../../server.service';
import {ConstantsService} from '../../../../constants.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ELogType, LoggingService} from '../../../../logging.service';
import {debounceTime} from 'rxjs/operators';
import {DebugBase} from '../../../../debug-base';
import {EventService} from '../../../../event.service';

declare var $: any;

@Component({
  selector: 'app-report-controls',
  templateUrl: './report-controls.component.html',
  styleUrls: ['./report-controls.component.scss']
})
export class ReportControlsComponent implements OnInit, AfterViewInit, OnDestroy {
  start_time;
  isactive = false;
  @Select() botlist$: Observable<ViewBotStateModel>;
  datePickerConfig: any;
  @ViewChild('form') f: NgForm;
  botlist: IBot[] = [];
  selectedBot: IBot;
  codebasedBotList: IBot[];
  today = new Date();
  reportItem: IReportItem;
  filetype = 'csv';
  // @Input()
  reportFormData: IReportItem;
  servervalue;
  deliveryMode = 'sftp';
  startdate = new Date();
// test = false;
  // start_date = new Date();
  isSftpReportEnabled = false;
  report_id;
  constructor(
    private store: Store,
    private utilityService: UtilityService,
    private tempVariableService: TempVariableService,
    private serverService: ServerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private constantsService: ConstantsService,
  ) {
    this.datePickerConfig = Object.assign({}, {
      'containerClass': 'theme-dark-blue',
      'dateInputFormat': 'DD/MM/YYYY',
    });
  }

  ngAfterViewInit() {
    $(document).ready(function() {
      $('input.time-input1').timepicker({defaultTime: '9', scrollbar: true, timeFormat: 'HH:mm'});
    });

    if (this.activatedRoute.snapshot.data['name'] === 'create_report') {
      setTimeout(() => {
        this.f.form.patchValue({bot_id: this.botlist[0].id, frequency: 'daily'});
      }, 0);
    }
  }

  botlistSub;
  ngOnInit() {

    LoggingService.log(this);
    console.log(this);

    this.activatedRoute.queryParamMap.subscribe((queryParams: any) => {
      this.deliveryMode = queryParams.params['deliveryMode'] || this.deliveryMode;
    });

    const _id = this.report_id = this.activatedRoute.snapshot.paramMap.get('_id');

    this.botlistSub = this.botlist$.subscribe((value: ViewBotStateModel) => {
      this.botlist = [...value.allBotList];
      this.codebasedBotList = this.botlist.filter((bot) => bot.bot_type === EBotType.chatbot);

      setTimeout(() => {
        if (_id && _id !== 'new') {
          const url = this.constantsService.getReportsEditInfo(_id);
          this.serverService.makeGetReq<IReportItem>({url})
            .subscribe((value: IReportItem) => {
              try {

                let email:any = value.delivery.find((item: any) => item.delivery_type === 'email');
                email.recipients = email.recipients.join(';');
                const formDataSerialized = {
                  ...value,
                  delivery: {
                    sftp: value.delivery.find((item: any) => item.delivery_type === 'sftp'),
                    email:email
                  }
                };
                // delete value.startdate;
                if (value) { this.f.form.patchValue(formDataSerialized); }
                this.startdate = new Date(value.startdate);
                // let start_time:string  = (<any>document).getElementById("start_time").value;
                let hh: string = new Date(value.startdate).getHours().toString();
                let mm: string = new Date(value.startdate).getMinutes().toString();
                if (mm.length === 1) { mm = '0' + mm; }
                if (hh.length === 1) { hh = '0' + hh; }
                (<any>document).getElementById('start_time').value = hh + ':' + mm;
              } catch (e) {
                LoggingService.error(e);
              }
              // this.f.f.patchValue({startdate:value.startdate});
              // this.f.f.patchValue({startdate:value.startdate});//This will only accept mmddyyyy format...
            });
          // } else if(_id==='new') {
          //   this.reportFormData.startdate = this.utilityService.convertDateObjectStringToDDMMYY(new Date(this.reportFormData.startdate));
          //   if (this.reportFormData && !_id) this.f.f.patchValue(this.reportFormData);
        }
      }, 0);
    });


    this.f.valueChanges.pipe(debounceTime(1000)).subscribe((data: any) => {
      // if (!this.f.dirty) return;

      /*TODO: VERY BAD FIX; USE REACTIVE FORM INSTEAD*/
      // data.delivery = [data.delivery];


      data = {
        ...this.servervalue,
        ...data
      };
      this.reportFormData = {...data};

      /*if its not a new subscription, dont store in store*/
      // if(_id==='new') this.store.dispatch(new SetReportFormAction({reportItem: data}));
    });
  }

  selectedBotChanged(bot) {

  }

  getReportControlFormData() {/*to be called by parent*/

    this.reportFormData.botName = this.botlist.find((bot) => bot.id == this.reportFormData.bot_id).name;
    this.reportFormData = {...this.reportFormData};
    const start_time: string  = (<any>document).getElementById('start_time').value;
    const start_time_arr =  start_time.split(':');
    const hh = Number(start_time_arr[0]);
    const mm = Number(start_time_arr[1]);
    if (!this.reportFormData.filetype) {
      this.reportFormData.filetype = 'csv';
    }

    this.reportFormData.startdate
      = new Date(this.reportFormData.startdate).setHours(hh, mm, 0, 0);


    return this.reportFormData;
  }

  click() {
  }
  privateKey;
  async openFile(inputEl) {

    try {
      this.privateKey = await this.utilityService.readInputFileAsText(inputEl);
    } catch (e) {
      LoggingService.log(e, ELogType.error);
    }
  }

  navigate(deliveryMode) {
    this.router.navigate([], {queryParams: {deliveryMode}});
    // deliveryMode='email'
  }

  ngOnDestroy(): void {
    EventService.unsubscribeInComponent(this);
  }

}
