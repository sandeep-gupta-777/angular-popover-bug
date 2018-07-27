import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {ServerService} from '../../../server.service';
import {Observable} from 'rxjs';
import {ITestcases} from '../../../../interfaces/testcases';
import {ConstantsService} from '../../../constants.service';
import {IConsumer} from '../../../../interfaces/consumer';

@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.scss']
})
export class ConsumersComponent implements OnInit {

  @Input() id: string;
  consumers$: Observable<IConsumer>;
  smartTableSettings_Consumers;

  constructor(private serverService: ServerService, private constantsService: ConstantsService, private store: Store) {
  }

  ngOnInit() {
    let url = this.constantsService.getBotConsumerUrl(this.id,1,10);
    this.consumers$ = this.serverService.makeGetReq<IConsumer>({url})
      .map((value)=>{
        return {
          ...value,
          results: value.results.map((result)=>{
          return {...result, created_at: new Date(result.created_at).toLocaleDateString()};
        })
        };
      });
    this.smartTableSettings_Consumers = this.constantsService.SMART_TABLE_CONSUMER_SETTING;
  }


}
