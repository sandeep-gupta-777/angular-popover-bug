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
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {ViewBotStateModel} from '../view-bots/ngxs/view-bot.state';
import {IBot} from '../interfaces/IBot';
import {SmartTableSettingsService} from '../../smart-table-settings.service';
import {Router} from '@angular/router';
import {TempVariableService} from '../../temp-variable.service';
import {IHeaderData} from '../../../interfaces/header-data';

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
    private constantsService:ConstantsService,
    private serverService:ServerService,
    private objectArrayCrudService:ObjectArrayCrudService,
    private smartTableSettingsService:SmartTableSettingsService,
    private tempVariableService:TempVariableService,
    private router:Router,

  ){ }

  activeTab: string = 'configure';

  ngOnInit() {
    let reportUrl = this.constantsService.getReportUrl(1,10);
    let reportHistoryUrl = this.constantsService.getReportHistoryUrl(1,10);
    let reportTypeUrl = this.constantsService.geReportTypesUrl();
    this.serverService.makeGetReq<IReportTypeItem[]>({url:reportTypeUrl})
      .subscribe((reportTypes)=>{
        this.serverService.makeGetReq<IReportList>({url:reportUrl})
          .subscribe((reports)=>{

            /*Making reportItem$ data*/
            reports.results.forEach(report => {
              this.botlist$.subscribe((value)=>{
                let listOfAllBots = [...value.codeBasedBotList, ...value.pipelineBasedBotList];
                this.reportSmartTableData.push({
                  ...report,
                  bot: this.objectArrayCrudService.getObjectItemByKeyValuePair(listOfAllBots, {_id:report.botId}).name,
                  _id:report._id,
                  name: this.objectArrayCrudService.getObjectItemByKeyValuePair(reportTypes, {_id:report.reporttypeId}).name,
                  frequency: report.frequency,
                  last_jobId: report.last_jobId,
                  nextreportgenerated: report.nextreportgenerated,
                  isactive: report.isactive
                })
              });
            });
          });

        this.serverService.makeGetReq<IReportHistory>({url:reportHistoryUrl})
          .subscribe((reportHistory:IReportHistory)=>{
            /*Making reportItem$ history data*/
            reportHistory.results.forEach((reportHistoryItem)=>{
              this.botlist$.subscribe((botList)=>{
                let listOfAllBots = [...botList.codeBasedBotList, ...botList.pipelineBasedBotList];
                this.reportHistorySmartTableData.push({
                  bot: this.objectArrayCrudService.getObjectItemByKeyValuePair(listOfAllBots, {_id:reportHistoryItem.botId}).name,
                  name: this.objectArrayCrudService.getObjectItemByKeyValuePair(reportTypes, {_id:reportHistoryItem.reporttypeId}).name,
                  created_at:reportHistoryItem.created_at
                })

              })
            });
          })
      });
    this.SMART_TABLE_REPORTS_SETTING = this.smartTableSettingsService.SMART_TABLE_REPORTS_SETTING;
    this.SMART_TABLE_REPORT_HISORY_SETTING = this.smartTableSettingsService.SMART_TABLE_REPORTS_HISTORY_SETTING;
  }

  tabClicked(activeTab: string) {
    this.activeTab =activeTab;
  }

  goToReportEditComponent(eventData:any){
    this.tempVariableService.reportRowClicked = eventData.data;
    this.router.navigate(['/core','reports', 'edit',eventData.data._id]);
  }

}
