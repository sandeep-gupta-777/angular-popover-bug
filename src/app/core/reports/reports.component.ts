import {Component, OnInit} from '@angular/core';
import {ConstantsService} from '../../constants.service';
import {ServerService} from '../../server.service';
import {
  IReportList,
  IReportHistory,
  IReportTypeItem,
  ISmartTableReportDataItem,
  ISmartTableReportHisoryDataItem, IReportHistoryItem
} from '../../../interfaces/report';
import {ObjectArrayCrudService} from '../../object-array-crud.service';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ViewBotStateModel} from '../view-bots/ngxs/view-bot.state';
import {IBot} from '../interfaces/IBot';
import {SmartTableSettingsService} from '../../smart-table-settings.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TempVariableService} from '../../temp-variable.service';
import {IHeaderData} from '../../../interfaces/header-data';
import {SetCurrentEditedReportAction} from './ngxs/reports.action';
import {DatePipe} from '@angular/common';
import {ISessionItem} from '../../../interfaces/sessions';
import {UtilityService} from '../../utility.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  reportSmartTableData: ISmartTableReportDataItem[] = [];
  reportHistorySmartTableData: ISmartTableReportHisoryDataItem[] = [];
  SMART_TABLE_REPORTS_SETTING = this.smartTableSettingsService.SMART_TABLE_REPORTS_SETTING;
  SMART_TABLE_REPORT_HISTORY_SETTING = this.smartTableSettingsService.SMART_TABLE_REPORTS_HISTORY_SETTING;

  @Select() botlist$: Observable<ViewBotStateModel>;

  constructor(
    private constantsService: ConstantsService,
    private serverService: ServerService,
    private objectArrayCrudService: ObjectArrayCrudService,
    private smartTableSettingsService: SmartTableSettingsService,
    private tempVariableService: TempVariableService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private utilityService: UtilityService,
    private store: Store,
  ) {
  }

  activeTab: string = 'configure';
  totalReportRecords: number;
  totalHistoryReportRecords: number;
  reportTypes;

  ngOnInit() {
    this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('activeTab') || this.activeTab;
    let reportTypeUrl = this.constantsService.geReportTypesUrl();
    this.serverService.makeGetReq<{ meta: any, objects: IReportTypeItem[] }>({url: reportTypeUrl})
      .subscribe((reportTypes) => {
        this.reportTypes = reportTypes;
        this.loadReports(1, 10);
        this.loadReportHistory(1, 10);

      });
  }

  loadReportHistory(page: number, pageSize: number) {

    let reportHistoryUrl = this.constantsService.getReportHistoryUrl(page, pageSize);
    this.serverService.makeGetReq<IReportHistory>({url: reportHistoryUrl})
      .subscribe((reportHistory: IReportHistory) => {
        this.totalHistoryReportRecords = reportHistory.meta.total_count;
        /*Making reportItem$ history data*/
        reportHistory.objects.forEach((reportHistoryItem:IReportHistoryItem) => {
          this.botlist$.subscribe((botList) => {
            let listOfAllBots = botList.allBotList;
            this.reportHistorySmartTableData.push({
              ...reportHistoryItem,
              bot: this.objectArrayCrudService.getObjectItemByKeyValuePair(listOfAllBots, {id: reportHistoryItem.bot_id}).name,
              name: this.objectArrayCrudService.getObjectItemByKeyValuePair(this.reportTypes.objects, {id: reportHistoryItem.reporttype_id}).name,
              created_at: reportHistoryItem.created_at
            });
            this.reportHistorySmartTableData = [...this.reportHistorySmartTableData];

          });
        });
      });
  }

  reportHistoryTablePageChanged(page){
    this.reportSmartTableData = [];
    this.loadReportHistory(page,10);
  }
  customActionEventsTriggeredInSessionsTable(data: { action: string, data: IReportHistoryItem, source: any }){

    let url = this.constantsService.getDownloadReportHistoryByIdUrl(data.data.id);
    this.serverService.makeGetReq({url})
      .subscribe((value:IReportHistory)=>{

        console.log(value);
        // this.utilityService.downloadArrayAsCSV(value, "asdsad");
      });
  }

  loadReports(page: number, pageSize: number) {
    let reportUrl = this.constantsService.getReportUrl(page, pageSize);
    this.serverService.makeGetReq<IReportList>({url: reportUrl})
      .subscribe((results) => {
        this.totalReportRecords = results.meta.total_count;
        /*Making reportItem$ data*/
        results.objects.forEach(report => {
          this.botlist$.subscribe((value) => {
            let listOfAllBots = value.allBotList;
            // ;
            try {
              this.reportSmartTableData.push({
                ...report,
                bot: this.objectArrayCrudService.getObjectItemByKeyValuePair(listOfAllBots, {id: report.bot_id}).name,
                id: report.id,
                name: this.objectArrayCrudService.getObjectItemByKeyValuePair(this.reportTypes.objects, {id: report.reporttype_id}).name,
                frequency: report.frequency,
                last_jobId: report.last_job_id,
                nextreportgenerated: (new Date(report.nextreportgenerated).toDateString()),
                isactive: report.isactive
              });
            } catch (e) {
              console.log(e);
            }
            this.reportSmartTableData = [
              ...this.reportSmartTableData
            ];
          });
        });
      });
    ;
  }

  reportTablePageChanged(page) {
    this.reportSmartTableData = [];
    this.loadReports(1, 10);
  }

  tabClicked(activeTab: string) {
    this.activeTab = activeTab;
  }

  goToReportEditComponent(eventData: any) {
    // ;
    this.store.dispatch(new SetCurrentEditedReportAction({reportItem: eventData.data}));
    this.tempVariableService.reportRowClicked = eventData.data;
    this.router.navigate(['/core', 'reports', 'edit', eventData.data.id]);
  }

  navigateTocreateNewReport() {
    this.router.navigate(['core', 'reports', 'create']);
  }

}
