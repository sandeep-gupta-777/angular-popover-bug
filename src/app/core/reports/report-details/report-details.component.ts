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
import {IHeaderData} from '../../../../interfaces/header-data';
import {ViewBotStateModel} from '../../view-bots/ngxs/view-bot.state';
import {IBot} from '../../interfaces/IBot';
import {UtilityService} from '../../../utility.service';
import {ModalImplementer} from '../../../modal-implementer';
import {MatDialog} from '@angular/material';
import { ModalConfirmComponent } from 'src/app/modal-confirm/modal-confirm.component';
import {EventService} from '../../../event.service';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent extends ModalImplementer implements OnInit {

  @ViewChild(ReportControlsComponent) reportControlsComponent: ReportControlsComponent;
  @Select() reportItem$: Observable<ReportStateModel>;
  @Select() botlist$: Observable<ViewBotStateModel>;
  allBotList: IBot[];
  reportFormData: IReportItem;
  report_id: number;

  myEventService = EventService;

  constructor(
    private activatedRoute: ActivatedRoute,
    public utilityService: UtilityService,
    public matDialog: MatDialog,
    private router: Router,
    private serverService: ServerService,
    private constantsService: ConstantsService,
  ) {
    super(utilityService, matDialog);
  }

  ngOnInit() {
    this.report_id = Number(this.activatedRoute.snapshot.paramMap.get('_id'));
    this.botlist$.subscribe((botListState) => {
      this.allBotList = botListState.allBotList;
    });
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  async showReportDeleteModel() {

      await this.utilityService.openDialog({
        dialogRefWrapper: this.dialogRefWrapper,
        classStr: 'danger-modal-header-border',
        data: {
          actionButtonText: "Delete",
          message: "This will delete the report and all it’s instances from history will also be removed. Are you sure you want to delete it?",
          title: `Delete Report?`,
          isActionButtonDanger: true,
          inputDescription: null
        },
        dialog: this.matDialog,
        component: ModalConfirmComponent
      }).then((data) => {

        if (data) {
          this.deleteReport();
        }
      })
  }

  deleteReport() {
    const deleteReportUrl = this.constantsService.getReportDeleteUrl(this.report_id);
    this.serverService.makeDeleteReq({url: deleteReportUrl})
      .subscribe(() => {
        this.utilityService.showSuccessToaster('Report deleted');
        this.dialogRefWrapper.ref.close();
        this.router.navigate(['/core/reports']);
      });
  }

  removeTrailingColons(str:string){
    return str.replace(/(^;)|(;$)/g, "")
  }

  getRecipientsArr(reportFormData){
    try {
      let recipientsStrColonDelimited = this.removeTrailingColons(reportFormData.delivery['email'].recipients);
      return recipientsStrColonDelimited.split(';').filter((str:string)=>{
        return str.trim().replace(';',"");
      })
    }catch (e) {
      console.error(e);
    }
  }

  updateReport(subscribeTemplate: TemplateRef<any>, unsubscribeTemplate: TemplateRef<any>) {

    this.reportFormData = JSON.parse(JSON.stringify(this.reportControlsComponent.getReportControlFormData()));
    // let timeNow = (new Date()).toString();
    const _id_str = this.activatedRoute.snapshot.paramMap.get('_id');
    this.reportFormData.id = _id_str ? Number(_id_str) : null;
    this.reportFormData.startdate = (new Date(this.reportFormData.startdate)).getTime();


    this.reportFormData.delivery = <any>[{
      ...this.reportFormData.delivery['sftp'],
      delivery_type: 'sftp',
      enabled:this.reportFormData.delivery['sftp'].enabled||false,
    },
      {
        ...this.reportFormData.delivery['email'],
        delivery_type: 'email',
        enabled:this.reportFormData.delivery['email'].enabled||false,
        recipients:  this.getRecipientsArr(this.reportFormData)||[]
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
            // this.modalRef = this.modalService.show(subscribeTemplate, {class: 'modal-md'});
            this.openPrimaryModal(subscribeTemplate);
          } else {
            // this.modalRef = this.modalService.show(unsubscribeTemplate, {class: 'modal-md'});
            this.openDangerModal(unsubscribeTemplate);
          }
        });
    } else {
      delete body.id;
      const report_bot: IBot = this.allBotList.find((bot) => bot.id == body.bot_id);
      const headerData: IHeaderData = {'bot-access-token': report_bot.bot_access_token};
      this.serverService.makePostReq({url, body, headerData})
        .subscribe((value: IReportItem) => {
          this.router.navigate([`core/reports/edit/${value.id}`]);
          // this.modalRef = this.modalService.show(subscribeTemplate, {class: 'modal-md'});
          this.openPrimaryModal(subscribeTemplate);
        });
    }

  }

}
