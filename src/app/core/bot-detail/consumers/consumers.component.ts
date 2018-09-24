import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ServerService } from '../../../server.service';
import { Observable } from 'rxjs';
import { ConstantsService } from '../../../constants.service';
import { IConsumerResults, IConsumerResultsFromServer } from '../../../../interfaces/consumer';
import { IBot } from '../../interfaces/IBot';
import { ViewBotStateModel } from '../../view-bots/ngxs/view-bot.state';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ISessionItem } from '../../../../interfaces/sessions';
import { IHeaderData } from '../../../../interfaces/header-data';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

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
  consumerTableData: IConsumerResults[];
  consumersDecrypted: IConsumerResults ;//IConsumerItem
  smartTableSettings_Consumers = this.constantsService.SMART_TABLE_CONSUMER_SETTING;
  isFullscreen: false;
  consumerItemToBeDecrypted: IConsumerResults;
  decryptReason: string;
  modalRef: BsModalRef;
  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService,
    private store: Store) {
  }

  reloadData() {
    this.loadConsumerData();
  }

  ngOnInit() {
    this.bot_id =
      Number(this.activatedRoute.snapshot.paramMap.get('id'));

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
      this.serverService
        .makeGetReq<IConsumerResultsFromServer>({ url, headerData: { 'bot-access-token': this.bot.bot_access_token } })
        .map((value) => {
          this.totalRecords = value.meta.total_count;
          return {
            ...value,
            objects: value.objects.map((result) => {
              let modified_update_at = (new Date(result.updated_at)).toDateString();
              return { ...result, updated_at: modified_update_at };
            })
          };
        }).subscribe((value)=>{
          this.consumerTableData = value.objects;
        });
  }


  goFullScreen() {
    this.router.navigate([`core/botdetail/${this.bot_id}/consumer`])
    // http://localhost:4200/core/botdetail/27/consumer
  }
  customActionEventsTriggeredInSessionsTable(data: { action: string, data: IConsumerResults, source: any }, Primarytemplat) {


    if (data.action === 'decrypt') {
      /*use dcrypt api*/

      this.consumerItemToBeDecrypted = data.data;
      this.openCreateBotModal(Primarytemplat);

    }
  }
  decryptSubmit() {

    let headerData: IHeaderData = {
      "bot-access-token": this.bot.bot_access_token
    };
    let body = { "consumer_id": this.consumerItemToBeDecrypted.id, "decrypt_audit_type": "consumer", "message": this.decryptReason };
    let url = this.constantsService.getDecryptUrl();
    this.serverService.makePostReq({ headerData, body, url })
      .subscribe(() => {

        let url = this.constantsService.getBotConsumerByIdUrl(this.consumerItemToBeDecrypted.id);
          this.serverService
            .makeGetReq<IConsumerResults>({ url, headerData: { 'bot-access-token': this.bot.bot_access_token } })
            .map((result) => {
              let modified_update_at = (new Date(result.updated_at)).toDateString();
              return { ...result, updated_at: modified_update_at };
            })
            .subscribe((value) => {

              this.consumersDecrypted = value;

              let index = this.consumerTableData.findIndex((value)=>value.id === this.consumerItemToBeDecrypted.id)
              this.consumerTableData[index] = this.consumersDecrypted;
              this.consumerTableData = [...this.consumerTableData];
            });
      })

  }
  performSearchInDbForConsumer(data){
    ;
    let url = this.constantsService.getBotConsumerByIdUrl(data["ID"]);
    this.serverService
      .makeGetReq<IConsumerResults>({ url, headerData: { 'bot-access-token': this.bot.bot_access_token } })
      .subscribe((consumer: IConsumerResults) => {
        this.consumerTableData.push(consumer);
        this.consumerTableData = [...this.consumerTableData];
      });
  }

  openCreateBotModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }

}
