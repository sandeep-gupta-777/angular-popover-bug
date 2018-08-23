import {Component, OnInit} from '@angular/core';
import {ConstantsService} from '../../constants.service';
import {ServerService} from '../../server.service';
import {
  IReportList,
  IReportHistory,
  IReportTypeItem,
  ISmartTableReportDataItem,
  ISmartTableReportHisoryDataItem
} from '../../../interfaces/report';
import {ObjectArrayCrudService} from '../../object-array-crud.service';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ViewBotStateModel} from '../view-bots/ngxs/view-bot.state';
import {IBot} from '../interfaces/IBot';
import {SmartTableSettingsService} from '../../smart-table-settings.service';
import {Router} from '@angular/router';
import {TempVariableService} from '../../temp-variable.service';
import {IHeaderData} from '../../../interfaces/header-data';
import {SetCurrentEditedReportAction} from './ngxs/reports.action';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  reportSmartTableData: ISmartTableReportDataItem[] = [];
  reportHistorySmartTableData: ISmartTableReportHisoryDataItem[] = [];
  SMART_TABLE_REPORTS_SETTING;
  SMART_TABLE_REPORT_HISORY_SETTING;

  @Select() botlist$: Observable<ViewBotStateModel>;

  constructor(
    private constantsService: ConstantsService,
    private serverService: ServerService,
    private objectArrayCrudService: ObjectArrayCrudService,
    private smartTableSettingsService: SmartTableSettingsService,
    private tempVariableService: TempVariableService,
    private router: Router,
    private store: Store,
  ) {
  }

  activeTab: string = 'configure';

  ngOnInit() {
    let reportUrl = this.constantsService.getReportUrl(1, 10);
    let reportHistoryUrl = this.constantsService.getReportHistoryUrl(1, 10);
    let reportTypeUrl = this.constantsService.geReportTypesUrl();
    this.serverService.makeGetReq<{meta:any, objects:IReportTypeItem[]}>({url: reportTypeUrl})
      .subscribe((reportTypes) => {
        this.serverService.makeGetReq<IReportList>({url: reportUrl})
          .subscribe((reports) => {

            /*Making reportItem$ data*/
            reports.objects.forEach(report => {
              this.botlist$.subscribe((value) => {
                let listOfAllBots = value.allBotList;
                // debugger;
                this.reportSmartTableData.push({
                  ...report,
                  bot: this.objectArrayCrudService.getObjectItemByKeyValuePair(listOfAllBots, {id: report.bot_id}).name,
                  id: report.id,
                  name: this.objectArrayCrudService.getObjectItemByKeyValuePair(reportTypes.objects, {id: report.reporttype_id}).name,
                  frequency: report.frequency,
                  last_jobId: report.last_job_id,
                  nextreportgenerated: (new Date(report.nextreportgenerated).toDateString()),
                  isactive: report.isactive
                });
                this.reportSmartTableData = [
                  ...this.reportSmartTableData
                ];
              });
            });
          });;

        this.serverService.makeGetReq<IReportHistory>({url: reportHistoryUrl})
          .subscribe((reportHistory: IReportHistory) => {
            /*Making reportItem$ history data*/
            reportHistory.objects.forEach((reportHistoryItem) => {
              this.botlist$.subscribe((botList) => {
                let listOfAllBots = [...botList.codeBasedBotList, ...botList.pipelineBasedBotList];
                this.reportHistorySmartTableData.push({
                  bot: this.objectArrayCrudService.getObjectItemByKeyValuePair(listOfAllBots, {id: reportHistoryItem.botId}).name,
                  name: this.objectArrayCrudService.getObjectItemByKeyValuePair(reportTypes.objects, {id: reportHistoryItem.reporttypeId}).name,
                  created_at: reportHistoryItem.created_at
                });

                this.reportHistorySmartTableData = [...this.reportHistorySmartTableData];

              });
            });
          });
      });
    this.SMART_TABLE_REPORTS_SETTING = this.smartTableSettingsService.SMART_TABLE_REPORTS_SETTING;
    this.SMART_TABLE_REPORT_HISORY_SETTING = this.smartTableSettingsService.SMART_TABLE_REPORTS_HISTORY_SETTING;
  }

  tabClicked(activeTab: string) {
    this.activeTab = activeTab;
  }

  goToReportEditComponent(eventData: any) {
    // debugger;
    this.store.dispatch(new SetCurrentEditedReportAction({reportItem:eventData.data}));
    this.tempVariableService.reportRowClicked = eventData.data;
    this.router.navigate(['/core', 'reports', 'edit', eventData.data.id]);
  }

}
