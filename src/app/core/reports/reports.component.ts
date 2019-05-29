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
import {forkJoin, Observable, Subscription} from 'rxjs';
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
import {MaterialTableImplementer} from '../../material-table-implementer';
import {catchError, finalize, switchMap, tap} from 'rxjs/internal/operators';
import {ConsumerSmartTableModal} from '../bot-detail/consumers/consumer-smart-table-modal';
import {ReportSmartTableModal} from './report-smart-table';
import {ReportHistorySmartTable} from './report-history-smart-table';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  providers: [TempVariableService]
})
export class ReportsComponent extends MaterialTableImplementer implements OnInit {
  tableData;
  tableData_report;
  tableData_history;
  currentPage_reports = 1;
  currentPage_reportsHistory = 1;
  error_message;
  isLoading: boolean;

  reportTableFactory() {
    return new ReportSmartTableModal(this.tableData_report,
      this.constantsService.SMART_TABLE_REPORT_TABLE_DATA_META_DICT_TEMPLATE,);
  }

  reportHistoryTableFactory() {
    return new ReportHistorySmartTable(this.tableData_history,
      this.constantsService.SMART_TABLE_REPORT_HISTORY_TABLE_DATA_META_DICT_TEMPLATE);
  }

  getTableDataMetaDict_report(): any {
    return this.constantsService.SMART_TABLE_REPORT_TABLE_DATA_META_DICT_TEMPLATE;
  }

  initializeTableData_report(data: any, tableDataMetaDict: any): void {
    this.tableData_report = this.transformDataForMaterialTable(data, this.getTableDataMetaDict_report());

    this.tableData_report = this.tableData_report.map((sessionsDataForTableItem) => {
      let additonalColumns: any = {};
      additonalColumns['Active'] = sessionsDataForTableItem['Active'];
      let isActive = additonalColumns['Active'].value;
      additonalColumns['Active'].value = `<div class="d-flex align-items-center">
<i style="font-size: 8px" class="fa fa-circle mr-1 ${isActive ? 'dot-free' : 'dot-paid'}" ></i><span>${isActive ? 'Active' : 'Inactive'}</span>
</div>`;
      return {...sessionsDataForTableItem, ...additonalColumns};
    });
  }

  getTableDataMetaDict_reportHistory(): any {
    return this.constantsService.SMART_TABLE_REPORT_HISTORY_TABLE_DATA_META_DICT_TEMPLATE;
  }

  initializeTableData_reportHistory(data: any, tableDataMetaDict: any): void {
    this.tableData_history = this.transformDataForMaterialTable(data, this.getTableDataMetaDict_reportHistory());
    this.tableData_history = this.tableData_history.map((sessionsDataForTableItem) => {
      let additonalColumns: any = {};
      /*actions*/
      additonalColumns['Actions'] = sessionsDataForTableItem['Actions'];
      additonalColumns['Actions'].value = [];
      additonalColumns['Actions'].value.push({show: true, name: 'download', class: 'fa fa-download'});
      return {...sessionsDataForTableItem, ...additonalColumns};
    });
  }

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
    super();
  }

  activeTab = 'configure';
  totalReportRecords: number;
  totalHistoryReportRecords: number;
  reportTypes;
  botlist$_sub: Subscription;
  reportTableModal: ReportSmartTableModal;
  reportHistoryTableModal: ReportHistorySmartTable;

  ngOnInit() {
    this.error_message = 'Loading';
    this.reportHistoryLoading = true;
    this.reportsLoading = true;
    this.activeTab = this.activatedRoute.snapshot.queryParamMap.get('activeTab') || this.activeTab;
    const reportTypeUrl = this.constantsService.geReportTypesUrl();
    this.isLoading = true;
    this.reportTableModal = this.reportTableFactory();
    this.reportHistoryTableModal = this.reportHistoryTableFactory();
    this.serverService.makeGetReq<{ meta: any, objects: IReportTypeItem[] }>({url: reportTypeUrl})
      .pipe(tap((reportTypes) => {
          this.reportTypes = reportTypes;
        }),
        switchMap(() => {
          return this.loadReports(10, 0);
        }),
        tap((val: { objects: any[] }) => {
          this.reportsLoading = false;
          this.reportsEmpty = val.objects.length === 0;
        }),
        switchMap(() => {
          return this.loadReportHistory(10, 0);
        }),
        tap((val: IReportHistory) => {
          this.reportsHistoryEmpty = val.objects.length === 0;
        }),
        finalize(() => {
          this.reportsLoading = false;
          this.reportHistoryLoading = false;
        })
      )
      .subscribe(() => {
        this.error_message = '';
      });
  }

  //
  reportsLoading = false;
  reportsEmpty = false;
  reportHistoryLoading = false;
  reportsHistoryEmpty = false;

  loadReportHistory(limit: number, offset: number) {

    let order_by = -1;
    let reportHistoryUrl = this.constantsService.getReportHistoryUrl(limit, offset, order_by);
    return this.serverService.makeGetReq<IReportHistory>({url: reportHistoryUrl})
      .pipe(tap((reportHistory: IReportHistory) => {
        this.totalHistoryReportRecords = reportHistory.meta.total_count;
        this.error_message = '';
        this.reportHistorySmartTableData = [];
        /*Making reportItem$ history data*/
        reportHistory.objects.forEach((reportHistoryItem: IReportHistoryItem) => {
          this.botlist$.subscribe((botList) => {
            let botName: any;
            const listOfAllBots = botList.allBotList;

            try {
              botName = this.objectArrayCrudService.getObjectItemByKeyValuePair(listOfAllBots, {id: reportHistoryItem.bot_id}).name;
            }catch (e) {
              console.log("couldn't find bot")
              botName = "BOT_NOT_FOUND"
            }

            this.reportHistorySmartTableData.push({
              ...reportHistoryItem,
              bot: botName,
              name: this.objectArrayCrudService.getObjectItemByKeyValuePair(this.reportTypes.objects, {id: reportHistoryItem.reporttype_id}).name,
              created_at: reportHistoryItem.created_at
            });
          });
        });
        this.reportHistoryTableModal.refreshData(this.reportHistorySmartTableData);
      }));
  }

  reportHistoryTablePageChanged({page}) {
    this.reportHistoryLoading = true;
    this.currentPage_reportsHistory = page;
    // this.reportHistorySmartTableData = [];
    this.loadReportHistory(10, (page - 1) * 10)
      .subscribe(() => {
        this.reportHistoryLoading = false;
        window.scrollTo({top: 0, behavior: 'smooth'});
      });
  }
  scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
    // const c = document.documentElement.scrollTop || document.body.scrollTop;
    // if (c > 0) {
    //   window.requestAnimationFrame(<any>this.scrollToTop());
    //   window.scrollTo(0, c - c / 8);
    // }
  };

  customActionEventsTriggeredInSessionsTable(smartTableCustomEventData: { action: string, data: IReportHistoryItem, source: any }) {
    const url = this.constantsService.getDownloadReportHistoryByIdUrl(smartTableCustomEventData.data.id);
    debugger;
    this.serverService.makeGetReqToDownloadFiles({url})
      .subscribe((value: any) => {
        /*To download the blob: https://stackoverflow.com/questions/19327749/javascript-blob-filename-without-link*/
        const fileName = 'report_history_for_bot_id_' + smartTableCustomEventData.data.bot_id + '.csv';
        this.utilityService.downloadText(value, fileName);
      });
  }

  loadReports(limit: number, offset: number) {

    this.error_message = 'Loading...';
    const reportUrl = this.constantsService.getReportUrl(limit, offset);
    return this.serverService.makeGetReq<IReportList>({url: reportUrl})
      .pipe(tap((results: { objects: ISmartTableReportDataItem[], meta: any }) => {
        this.error_message = '';
        this.reportSmartTableData = [];
        this.totalReportRecords = results.meta.total_count;
        /*Making reportItem$ data*/
        results.objects.forEach(report => {
          this.botlist$_sub = this.botlist$.subscribe((value) => {
            const listOfAllBots = value.allBotList;
            let botName: string;
            try {
              botName = this.objectArrayCrudService.getObjectItemByKeyValuePair(listOfAllBots, {id: report.bot_id}).name;
            } catch (e) {
              console.error(`No bot found while looking for a report having bot id = ${report.bot_id}. Returning NO_BOT_FOUND instead.`);
              botName = 'NO_BOT_FOUND';
            }

            try {
              this.reportSmartTableData.push({
                ...report,
                bot: botName,
                id: report.id,
                name: this.objectArrayCrudService.getObjectItemByKeyValuePair(this.reportTypes.objects, {id: report.reporttype_id}).name,
                frequency: report.frequency,
                last_jobId: report.last_job_id,
                // lastreportgenerated: (new Date(report.lastreportgenerated).toDateString()),
                // nextreportgenerated: (new Date(report.nextreportgenerated).toDateString()),
                isactive: report.isactive
              });
              // this.initializeTableData_report(this.reportSmartTableData, this.getTableDataMetaDict_report());
            } catch (e) {
              LoggingService.error(e);
              // this.utilityService.showErrorToaster(`Can't show the report for botid: ${report.bot_id}. This bot is either deleted or your access maybe been revoked.`,5 );
            }
            this.reportSmartTableData = [
              ...this.reportSmartTableData
            ];
          });
        });

        // this.initializeTableData_report(this.reportSmartTableData, this.getTableDataMetaDict_report());;
        this.reportTableModal.refreshData(this.reportSmartTableData);
      }));

  }

  reportTablePageChanged({page}) {
    this.reportsLoading = true;
    this.currentPage_reports = page;
    // this.reportSmartTableData = [];
    this.loadReports(10, (page - 1) * 10)
      .subscribe(() => {
        this.reportsLoading = false;
        window.scrollTo({top: 0, behavior: 'smooth'});
      });
  }

  tabClicked(activeTab: string) {
    this.activeTab = activeTab;
  }

  goToReportEditComponent(eventData: any) {
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

  getTableDataMetaDict(): any {
  }

  initializeTableData(data: any, tableDataMetaDict: any): void {
  }

}
