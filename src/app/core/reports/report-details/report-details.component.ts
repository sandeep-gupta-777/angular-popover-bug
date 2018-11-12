import {Component, OnInit, ViewChild, TemplateRef} from '@angular/core';
import {ReportControlsComponent} from './report-controls/report-controls.component';
import {Select, Selector} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ReportStateModel} from '../ngxs/reports.state';
import {IReportItem} from '../../../../interfaces/report';
// import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {ActivatedRoute, Router} from '@angular/router';
import {ServerService} from '../../../server.service';
import {ConstantsService} from '../../../constants.service';
// import * as moment from 'moment';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {IHeaderData} from '../../../../interfaces/header-data';
import {ViewBotStateModel} from '../../view-bots/ngxs/view-bot.state';
import {IBot} from '../../interfaces/IBot';
import {UtilityService} from '../../../utility.service';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent implements OnInit {

  @ViewChild(ReportControlsComponent) reportControlsComponent: ReportControlsComponent;
  @Select() reportItem$: Observable<ReportStateModel>;
  @Select() botlist$: Observable<ViewBotStateModel>;
  allBotList: IBot[];
  reportFormData: IReportItem;
  report_id: number;
  modalRef: BsModalRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private utilityService: UtilityService,
    private router: Router,
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private modalService: BsModalService
  ) {
  }

  ngOnInit() {
    this.report_id = Number(this.activatedRoute.snapshot.paramMap.get('_id'));
    this.botlist$.subscribe((botListState) => {
      this.allBotList = botListState.allBotList;
    });
    // this.reportItem$.subscribe((value)=>{
    //   this.reportFormData = value.formData;
    // })
  }
  showReportDeleteModel(unsubscribeTemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(unsubscribeTemplate, {class: 'center-modal'});
  }
  deleteReport() {
    const deleteReportUrl = this.constantsService.getReportDeleteUrl(this.report_id);
    this.serverService.makeDeleteReq({url: deleteReportUrl})
      .subscribe(() => {
        this.utilityService.showSuccessToaster('Report deleted');
        this.modalRef.hide();
        this.router.navigate(['/core/reports']);
      });
  }

  updateReport(subscribeTemplate: TemplateRef<any>, unsubscribeTemplate: TemplateRef<any>) {
    //
    this.reportFormData = JSON.parse(JSON.stringify(this.reportControlsComponent.getReportControlFormData()));
    // let timeNow = (new Date()).toString();
    const _id_str = this.activatedRoute.snapshot.paramMap.get('_id');
    this.reportFormData.id = _id_str ? Number(_id_str) : null;
    this.reportFormData.startdate = (new Date(this.reportFormData.startdate)).getTime();

    this.reportFormData.delivery = <any>[{
      ...this.reportFormData.delivery['sftp'],
      delivery_type: 'sftp'
    },
      {
        ...this.reportFormData.delivery['email'],
        delivery_type: 'email'
      }
    ];

    this.reportFormData.updated_at = new Date().toISOString();
    let url;

    this.report_id ?
      url = this.constantsService.getSaveReportsEditInfo(this.reportFormData.id)
      : url = this.constantsService.getCreateReportUrl();
    const body = {...this.reportFormData};
    delete body.created_at;
    delete body.updated_at;
    delete body.botName;
    // delete body.id;
    // body.isactive = true;
    body.reporttype_id = 1;
    body.bot_id = Number(body.bot_id);
    // delete body.delivery;
    // delete body.startdate;/*TODO: temporary; since date is not working*/
    if (body.id) {
      //
      this.serverService.makePutReq({url, body})
        .subscribe((value: IReportItem) => {
          if (value.isactive) {
          this.modalRef = this.modalService.show(subscribeTemplate, {class: 'modal-md'});
          } else {
            this.modalRef = this.modalService.show(unsubscribeTemplate, {class: 'modal-md'});
          }
        });
    } else {
      delete body.id;
      const report_bot: IBot = this.allBotList.find((bot) => bot.id == body.bot_id);
      const headerData: IHeaderData = {'bot-access-token': report_bot.bot_access_token};
      this.serverService.makePostReq({url, body, headerData})
        .subscribe((value: IReportItem) => {
          this.router.navigate([`core/reports/edit/${value.id}`]);
          this.modalRef = this.modalService.show(subscribeTemplate, {class: 'modal-md'});
        });
    }

  }

}
