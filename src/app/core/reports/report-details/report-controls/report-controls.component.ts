import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ViewBotStateModel} from '../../../view-bots/ngxs/view-bot.state';
import {IBot} from '../../../interfaces/IBot';
import {IReportItem} from '../../../../../interfaces/report';
import {FormArray, FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {EBotType, UtilityService} from '../../../../utility.service';
import {TempVariableService} from '../../../../temp-variable.service';
import {ServerService} from '../../../../server.service';
import {ConstantsService, ERouteNames} from '../../../../constants.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ELogType, LoggingService} from '../../../../logging.service';
import {debounceTime} from 'rxjs/operators';
import {DebugBase} from '../../../../debug-base';
import {EventService} from '../../../../event.service';
import {FormsService} from '../../../../forms.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';

declare var $: any;

@Component({
  selector: 'app-report-controls',
  templateUrl: './report-controls.component.html',
  styleUrls: ['./report-controls.component.scss'],
  providers: [TempVariableService]
})
export class ReportControlsComponent implements OnInit, AfterViewInit, OnDestroy {
  start_time = '10:00';
  isactive = false;
  @Select() botlist$: Observable<ViewBotStateModel>;
  datePickerConfig: any;
  @ViewChild('form') f: FormGroup;
  botlist: IBot[] = [];
  selectedBot: IBot;
  codebasedBotList: IBot[];
  today = new Date();
  privateKey;
  reportItem: IReportItem;
  filetype = 'csv';
  // @Input()
  reportFormData: IReportItem;
  servervalue;
  deliveryMode = 'sftp';
  startdate = new Date();
  timeRanges = [
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
  ];
// test = false;
  // start_date = new Date();
  isSftpReportEnabled = false;
  report_id;
  botlistSub;

  constructor(
    private store: Store,
    private utilityService: UtilityService,
    private tempVariableService: TempVariableService,
    private serverService: ServerService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private constantsService: ConstantsService,
  ) {
    this.datePickerConfig = Object.assign({}, {
      'containerClass': 'theme-dark-blue',
      'dateInputFormat': 'DD/MM/YYYY',
    });
  }

  ngAfterViewInit() {
    if (this.activatedRoute.snapshot.data['name'] === ERouteNames['Create Reports']) {
      setTimeout(() => {
        this.f.patchValue({bot_id: this.botlist[0].id, frequency: 'daily'});
      }, 0);
    }
  }


  ngOnInit() {
    this.f = this.formBuilder.group({
      bot_id: [''],
      single_match: ['messages'],
      filetype: ['csv'],
      isactive: [true],
      frequency: [''],
      start_time: [''],
      startdate: [new Date()],
      delivery: this.formBuilder.array([
        this.formBuilder.group({
          delivery_type: ['sftp'],
          directory: [''],
          enabled: [false],
          ip: [''],
          password: [''],
          port: [''],
          username: ['', [FormsService.startWithAlphabetValidator(), FormsService.lengthValidator(1, 64)]],
          privatekey: [''],
        }),
        this.formBuilder.group({
          delivery_type: ['email'],
          enabled: false,
          recipients: [[]],
        }),
      ])
    });
    LoggingService.log(this);
    console.log(this);

    this.activatedRoute.queryParamMap.subscribe((queryParams: any) => {
      this.deliveryMode = queryParams.params['deliveryMode'] || this.deliveryMode;
    });

    const _id = this.report_id = this.activatedRoute.snapshot.paramMap.get('_id');

    this.botlistSub = this.botlist$.subscribe((value: ViewBotStateModel) => {
      this.botlist = [...value.allBotList];
      this.codebasedBotList = this.botlist.filter((bot) => bot.bot_type === EBotType.chatbot || bot.bot_type === EBotType.faqbot);

      setTimeout(() => {
        if (_id && _id !== 'new') {
          const url = this.constantsService.getReportsEditInfo(_id);
          this.serverService.makeGetReq<IReportItem>({url})
            .subscribe((value_report: IReportItem) => {
              try {
                this.deliveryMode = value_report.delivery[1].enabled ? 'email' : 'sftp';
                this.router.navigate([], {queryParams: {deliveryMode: this.deliveryMode}});
                let email;
                try {
                  email = value_report.delivery.find((item: any) => item.delivery_type === 'email');
                  email.recipients = email.recipients.join(';');
                } catch (e) {
                  LoggingService.error(e);
                }
                debugger;
                const startdate = new Date(value_report.startdate);
                debugger;
                this.f.patchValue({...value_report, startdate});
                let hh: string = new Date(value_report.startdate).getHours().toString();
                let mm: string = new Date(value_report.startdate).getMinutes().toString();
                if (mm.length === 1) {
                  mm = '0' + mm;
                }
                if (hh.length === 1) {
                  hh = '0' + hh;
                }
                this.start_time = hh + ':' + mm;
              } catch (e) {
                LoggingService.error(e);
              }
            });
        }
      }, 0);
    });


    this.f.valueChanges.pipe(debounceTime(1000)).subscribe((data: any) => {
      EventService.reportFormIsValid.emit(this.f.valid);
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
    debugger;
    const reportFormData = UtilityService.cloneObj(this.f.value);
    reportFormData.botName = this.botlist.find((bot) => bot.id === reportFormData.bot_id).name;
    const start_time_arr = this.start_time.split(':');
    const hh = Number(start_time_arr[0]);
    const mm = Number(start_time_arr[1]);
    if (!reportFormData.filetype) {
      reportFormData.filetype = 'csv';
    }

    reportFormData.startdate = new Date(reportFormData.startdate).setHours(hh, mm, 0, 0);
    reportFormData.delivery[1].recipients = [reportFormData.delivery[1].recipients] as any;
    return reportFormData;
  }

  click() {
  }


  async openFile(inputEl) {
    debugger;
    try {
      const privatekey = await this.utilityService.readInputFileAsText(inputEl);
      (this.f.get('delivery') as FormArray).at(0).patchValue({privatekey: 'privatekey'});
      console.log(this.f.value);
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
