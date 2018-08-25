import {Component, OnInit, ViewChild, TemplateRef} from '@angular/core';
import {ReportControlsComponent} from './report-controls/report-controls.component';
import {Select, Selector} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ReportStateModel} from '../ngxs/reports.state';
import {IReportItem} from '../../../../interfaces/report';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {ActivatedRoute, Router} from '@angular/router';
import {ServerService} from '../../../server.service';
import {ConstantsService} from '../../../constants.service';
import * as moment from 'moment';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent implements OnInit {

  @ViewChild(ReportControlsComponent) reportControlsComponent: ReportControlsComponent;
  @Select() reportItem$: Observable<ReportStateModel>;
  reportFormData: IReportItem;

  modalRef: BsModalRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private modalService: BsModalService
  ) {
  }

  ngOnInit() {
    // this.reportItem$.subscribe((value)=>{
    //   this.reportFormData = value.formData;
    // })
  }

  submitSubscriptionForm(template: TemplateRef<any>) {
    debugger;
    this.reportFormData = this.reportControlsComponent.reportFormData;
    let timeNow = (new Date()).toString();
    this.reportFormData.id = Number(this.activatedRoute.snapshot.paramMap.get('_id'));
    this.reportFormData.startdate = (new Date(this.reportFormData.startdate)).toISOString();
    // if(!this.reportFormData._id) {
    //   /*create uuid*/
    //   this.reportFormData.created_at = timeNow;
    // }
    // this.reportFormData.updated_at = timeNow;
    // console.log(this.reportFormData);
    this.reportFormData.delivery = <any>[{
        ...this.reportFormData.delivery['sftp'],
      delivery_type: 'sftp'
      }
    ];

    this.reportFormData.updated_at = new Date().toISOString();
    let url = this.constantsService.getSaveReportsEditInfo(this.reportFormData.id);
    let body = this.reportFormData;
    this.serverService.makePutReq({url, body})
      .subscribe((value) => {
        this.modalRef = this.modalService.show(template, {class: 'modal-md'});
      });
    //opening model with sucss messsage

  }

}
