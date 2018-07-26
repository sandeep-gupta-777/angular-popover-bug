import {Component, OnInit, ViewChild} from '@angular/core';
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

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent implements OnInit {

  @ViewChild(ReportControlsComponent)reportControlsComponent:ReportControlsComponent;
  @Select() reportItem$:Observable<ReportStateModel>;
  reportFormData:IReportItem;
  constructor(
    private activatedRoute:ActivatedRoute,
    private serverService:ServerService,
    private constantsService:ConstantsService,
  ) { }

  ngOnInit() {
    // this.reportItem$.subscribe((value)=>{
    //   this.reportFormData = value.formData;
    // })
  }

  submitSubscriptionForm(){
    this.reportFormData = this.reportControlsComponent.reportFormData;
    let timeNow = (new Date()).toString();
    this.reportFormData._id = this.activatedRoute.snapshot.paramMap.get("_id");
    let tempDate = moment(new Date()).format('YYYY-MM-DD h:mm:ss.mmmmmm');
    // if(!this.reportFormData._id) {
    //   /*create uuid*/
    //   this.reportFormData.created_at = timeNow;
    // }
    // this.reportFormData.updated_at = timeNow;
    // console.log(this.reportFormData);

    this.reportFormData.updated_at = tempDate;
    let url = this.constantsService.getSaveReportsEditInfo(this.reportFormData._id);
    let body = this.reportFormData;
    console.log(body);
    this.serverService.makePutReq({url,body})
      .subscribe((value)=>{
        console.log(value);
      });
  }

}
