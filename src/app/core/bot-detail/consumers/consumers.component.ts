import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {ServerService} from '../../../server.service';
import {Observable} from 'rxjs';
import {ITestcases} from '../../../../interfaces/testcases';
import {ConstantsService} from '../../../constants.service';
import {IConsumer} from '../../../../interfaces/consumer';
import {IBot} from '../../interfaces/IBot';

@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.scss']
})
export class ConsumersComponent implements OnInit {

  @Input() id: string;
  @Input() bot: IBot;
  totalRecords:number;
  consumers$: Observable<IConsumer>;
  smartTableSettings_Consumers = this.constantsService.SMART_TABLE_CONSUMER_SETTING;

  constructor(private serverService: ServerService, private constantsService: ConstantsService, private store: Store) {
  }

  ngOnInit() {
    this.loadConsumerData();
  }

  pageChanged(selectedPage: number) {
    this.loadConsumerData(10, (selectedPage-1) * 10);
  }

  loadConsumerData(limit: number = 10, offset: number = 0) {
    let url = this.constantsService.getBotConsumerUrl(limit, offset);
    this.consumers$ = this.serverService.makeGetReq<IConsumer>({url, headerData: {'bot-access-token': this.bot.bot_access_token}})
      .map((value) => {
        this.totalRecords =  value.meta.total_count;
        return {
          ...value,
          objects: value.objects.map((result) => {
            let modified_update_at = (new Date(result.updated_at)).toDateString();
            return {...result, updated_at: modified_update_at};
          })
        };
      });
  }


}
