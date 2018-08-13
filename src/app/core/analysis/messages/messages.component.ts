import {Component, OnInit} from '@angular/core';
import {IOverviewInfoPostBody} from '../../../../interfaces/Analytics2/overview-info';
import {Observable} from 'rxjs';
import {ConstantsService} from '../../../constants.service';
import {IAnalysisState} from '../ngxs/analysis.state';
import {IUserAcquisition} from '../../../../interfaces/analytics/user-aquasition';
import {Select} from '@ngxs/store';
import {ServerService} from '../../../server.service';
import {IAnalyticsMessages} from '../../../../interfaces/analytics/messages';
import {ChartSettingService} from '../../../chart-setting.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  totalMessages:IAnalyticsMessages;
  totalMessagesData;
  constructor(
    private constantsService: ConstantsService,
    private serverService: ServerService,
    private chartSettingService:ChartSettingService,
  ) {
  }

  @Select() analysisstate$: Observable<IAnalysisState>;

  ngOnInit() {
    this.analysisstate$.subscribe((value: IAnalysisState) => {
      let totalMessagesUrl = this.constantsService.getTotalMessagesUrl();
      let messagesByTemplateKeyUrl = this.constantsService.getMessagesByTemplateKeyUrl();
      let body_totalMessages: IOverviewInfoPostBody = {
        ...value.overviewinfo
      };
      let body_messagesByTemplateKey = {
        bot_id: value.overviewinfo.selectedBot.id,
        messageStoreKey: 'flag',
        messageStoreValue: true
      };
      this.serverService.makePostReq<IAnalyticsMessages>({url: totalMessagesUrl, body:body_totalMessages})
        .subscribe((x) => {
          this.totalMessages  = x;
          this.totalMessagesData = this.chartSettingService.createSeriesDataFromArray(x.messagesinfo,'labels');
          console.log(x);
        });
      this.serverService.makePostReq<any>({url: messagesByTemplateKeyUrl, body:body_messagesByTemplateKey})
        .subscribe((x) => {
          console.log(x);
        });
    });
  }
}
