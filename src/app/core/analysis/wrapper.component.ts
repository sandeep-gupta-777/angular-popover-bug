import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IBot} from '../interfaces/IBot';
import {ViewBotStateModel} from '../view-bots/ngxs/view-bot.state';
import {ConstantsService} from '../../constants.service';
import {ServerService} from '../../server.service';
import {IOverviewInfoPostBody, IOverviewInfoResponse} from '../../../interfaces/Analytics2/overview-info';
import {UtilityService} from '../../utility.service';
import {st} from '@angular/core/src/render3';
import {SetOverViewInfo} from './ngxs/analysis.action';
import {IAnalysisState} from './ngxs/analysis.state';
import {NgForm} from '@angular/forms';
import {BsDatepickerConfig} from 'ngx-bootstrap';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  @Select() botlist$: Observable<ViewBotStateModel>;
  @Select() analysisstate$: Observable<IAnalysisState>;
  @ViewChild('form') f: NgForm;

  start_date = new Date();
  end_date = new Date();
  granularity: string = 'hour';
  botList: IBot[];
  channelList = this.constantService.CHANNEL_LIST;
  timePeriodList = this.constantService.TIME_GRANULARITY_LIST;
  selectedBot: IBot = null;
  selectedTime: { name: string, displayName: string } = {displayName: 'Monthly', name: '30'};
  selectedChannel: { name: string, displayName: string } = {displayName: 'All Channels', name: 'all'};
  datePickerConfig: Partial<BsDatepickerConfig> = this.constantService.DATE_PICKER_CONFIG;

  constructor(
    private constantService: ConstantsService,
    private serverService: ServerService,
    private utilityService: UtilityService,
    private store: Store,
  ) {
  }

  ngOnInit() {
    this.f.form.patchValue({botId:'hour'});
    this.botlist$.subscribe((value) => {
      if (value && value.codeBasedBotList) {
        this.botList = value && [...value.codeBasedBotList, ...value.pipelineBasedBotList];
        this.selectedBot = this.botList[0];
      }
      if (!this.botList) {
        this.serverService.getNSetBotList()
          .subscribe(() => {
          });
      }
    });


  //   this.analysisstate$.subscribe((value) => {
  //     if (!value || !value.overviewinfo) return;
  //     if (value.overviewinfo.selectedChannel) this.selectedChannel = value.overviewinfo.selectedChannel;
  //     // if (value.overviewinfo.selectedTime) this.selectedTime = value.overviewinfo.selectedTime;
  //     this.selectedBot = value.overviewinfo.selectedBot;
  //   });
  //
  //   this.f.valueChanges.subscribe((value) => {
  //     this.overviewInfoChanged(value);
  //   });
  // }
  //
  // granularityChanged(time: { name: string, displayName: string }) {
  //   this.selectedTime = time;
  //   this.granularity = time.name;
  //   this.f.form.updateValueAndValidity();
  // }
  //
  // overviewInfoChanged(formData: IOverviewInfoPostBody) {
  //   let overviewInfo: IOverviewInfoPostBody = {
  //     bot_id: "",//comperror: this.selectedBot && this.selectedBot._id,
  //     platform: this.selectedChannel && this.selectedChannel.name,
  //     start_date: this.utilityService.convertDateObjectStringToDDMMYY(formData.start_date),
  //     end_date: this.utilityService.convertDateObjectStringToDDMMYY(formData.end_date),
  //     granularity: this.granularity,
  //     /**/
  //     selectedTime: this.selectedTime,
  //     selectedBot: this.selectedBot,
  //     selectedChannel: this.selectedChannel
  //   };
  //
  //   this.store.dispatch([
  //     new SetOverViewInfo({overviewInfo: overviewInfo})
  //   ]);
  }

}
