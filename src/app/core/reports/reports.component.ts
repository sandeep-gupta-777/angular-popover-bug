import {Component, OnDestroy, OnInit} from '@angular/core';
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
import {Observable, Subscription} from 'rxjs';
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
import {ELogType, LoggingService} from '../../logging.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit, OnDestroy {

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
  botlist$_sub:Subscription;

  ngOnInit() {
    this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('activeTab') || this.activeTab;
    let reportTypeUrl = this.constantsService.geReportTypesUrl();
    this.serverService.makeGetReq<{ meta: any, objects: IReportTypeItem[] }>({url: reportTypeUrl})
      .subscribe((reportTypes) => {
        this.reportTypes = reportTypes;
        this.loadReports(10, 0);
        this.loadReportHistory(10, 0);

      });
  }

  loadReportHistory(limit: number, offset: number) {

    let order_by = -1;
    let reportHistoryUrl = this.constantsService.getReportHistoryUrl(limit, offset, order_by );
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
    this.reportHistorySmartTableData = [];
    this.loadReportHistory(10,(page-1)*10 );
  }
  customActionEventsTriggeredInSessionsTable(smartTableCustomEventData: { action: string, data: IReportHistoryItem, source: any }){

    let url = this.constantsService.getDownloadReportHistoryByIdUrl(smartTableCustomEventData.data.id);
    this.serverService.makeGetReqToDownloadFiles({url})
      .subscribe((value:any)=>{

        /*To download the blob: https://stackoverflow.com/questions/19327749/javascript-blob-filename-without-link*/
         var fileName = "report_history_for_bot_id_"+smartTableCustomEventData.data.bot_id + ".csv";
        this.utilityService.downloadText(value,fileName);
        // var saveData = (function () {
        //   var a:any = document.createElement("a");
        //   document.body.appendChild(a);
        //   a.style = "display: none";
        //   return function (data, fileName) {
        //     var blob = new Blob([value], {type: "octet/stream"}),
        //       url = window.URL.createObjectURL(blob);
        //     a.href = url;
        //     a.download = fileName;
        //     a.click();
        //     window.URL.revokeObjectURL(url);
        //   };
        // }());
        //
        // // var data = { x: 42, s: "hello, world", d: new Date() },
        //
        // saveData(null, fileName);
        // LoggingService.log(value);
        // this.utilityService.downloadArrayAsCSV(value, "asdsad");
      });
  }

  loadReports(limit: number, offset: number) {
    let reportUrl = this.constantsService.getReportUrl(limit, offset);
    this.serverService.makeGetReq<IReportList>({url: reportUrl})
      .subscribe((results) => {
        this.totalReportRecords = results.meta.total_count;
        /*Making reportItem$ data*/
        results.objects.forEach(report => {
          this.botlist$_sub = this.botlist$.subscribe((value) => {
            let listOfAllBots = value.allBotList;
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
              LoggingService.error(e);
              // this.utilityService.showErrorToaster(`Can't show the report for botid: ${report.bot_id}. This bot is either deleted or your access maybe been revoked.`,5 );
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
    this.loadReports(10,(page-1)*10);
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

  ngOnDestroy(): void {
    this.botlist$_sub && this.botlist$_sub.unsubscribe();
  }

}
