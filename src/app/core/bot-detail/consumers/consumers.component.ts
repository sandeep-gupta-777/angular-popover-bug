import {Component, Input, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {ServerService} from '../../../server.service';
import {Observable} from 'rxjs';
import {ConstantsService} from '../../../constants.service';
import {IConsumerResults} from '../../../../interfaces/consumer';
import {IBot} from '../../interfaces/IBot';
import {ViewBotStateModel} from '../../view-bots/ngxs/view-bot.state';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.scss']
})
export class ConsumersComponent implements OnInit {

  @Input() id: string;
  @Input() bot: IBot;
  bot_id: number;
  totalRecords: number;
  @Select() botlist$: Observable<ViewBotStateModel>;
  consumers$: Observable<IConsumerResults>;
  smartTableSettings_Consumers = this.constantsService.SMART_TABLE_CONSUMER_SETTING;
  isFullscreen:false;
  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store) {
  }

  reloadData() {
    this.loadConsumerData();
  }

  ngOnInit() {
    this.bot_id =
      Number(this.activatedRoute.snapshot.paramMap.get('id'));
    debugger;
    this.isFullscreen = this.activatedRoute.snapshot.data['isFullscreen'];
    this.botlist$.subscribe((viewBotState) => {
      this.bot = viewBotState.allBotList.find(bot => bot.id === this.bot_id);
    });
    this.loadConsumerData();
  }

  pageChanged(selectedPage: number) {
    this.loadConsumerData(10, (selectedPage - 1) * 10);
  }

  loadConsumerData(limit: number = 10, offset: number = 0) {
    let url = this.constantsService.getBotConsumerUrl(limit, offset);
    this.consumers$ =
      this.serverService
        .makeGetReq<IConsumerResults>({url, headerData: {'bot-access-token': this.bot.bot_access_token}})
        .map((value) => {
          this.totalRecords = value.meta.total_count;
          return {
            ...value,
            objects: value.objects.map((result) => {
              let modified_update_at = (new Date(result.updated_at)).toDateString();
              return {...result, updated_at: modified_update_at};
            })
          };
        });
  }

  goFullScreen(){
    this.router.navigate([`core/botdetail/${this.bot_id}/consumer`])
    // http://localhost:4200/core/botdetail/27/consumer
  }


}
