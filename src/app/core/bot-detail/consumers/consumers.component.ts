import {Component, Input, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {ServerService} from '../../../server.service';
import {Observable} from 'rxjs';
import {ConstantsService} from '../../../constants.service';
import {IConsumerItem, IConsumerResultsFromServer} from '../../../../interfaces/consumer';
import {IBot} from '../../interfaces/IBot';
import {ViewBotStateModel} from '../../view-bots/ngxs/view-bot.state';
import {ActivatedRoute, Router} from '@angular/router';
import {IHeaderData} from '../../../../interfaces/header-data';
import {PermissionService} from '../../../permission.service';
import {ESplashScreens} from '../../../splash-screen/splash-screen.component';
import {UtilityService} from '../../../utility.service';
import {MatDialog} from '@angular/material';
import {ModalConfirmComponent} from 'src/app/modal-confirm/modal-confirm.component';
import {BotSessionSmartTableModal} from '../bot-sessions/bot-session-smart-table-modal';
import {ConsumerSmartTableModal} from './consumer-smart-table-modal';
import {EAllActions} from '../../../typings/enum';
import {ESortDir} from '../../../smart-table/smart-table.component';

@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.scss']
})
export class ConsumersComponent implements OnInit {

  myESortDir = ESortDir;
  dialogRefWrapper = {ref: null};
  @Select() botlist$: Observable<ViewBotStateModel>;
  @Input() id: string;
  @Input() bot: IBot;
  bot_id: number;
  totalRecords: number;
  myESplashScreens = ESplashScreens;
  showLoader = false;
  isDeCryptAuditAccessDenied = false;
  consumerItems: IConsumerItem[];
  consumersDecrypted: IConsumerItem;
  isFullscreen: false;
  consumerItemToBeDecrypted: IConsumerItem;
  // decryptReason: string;
  tableData;
  sessionsSmartTableDataModal: ConsumerSmartTableModal;

  constructor(
    private serverService: ServerService,
    public constantsService: ConstantsService,
    private router: Router,
    private permissionService: PermissionService,
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog,
    private utilityService: UtilityService,
    private store: Store) {
  }

  tableDataFactory() {
    return new ConsumerSmartTableModal(this.consumerItems,
      this.constantsService.SMART_TABLE_CONSUMER_TABLE_DATA_META_DICT_TEMPLATE,
      {constantsService: this.constantsService, bot: this.bot});
  }

  ngOnInit() {
    this.sessionsSmartTableDataModal = this.tableDataFactory();
    this.isDeCryptAuditAccessDenied = this.permissionService.isTabAccessDenied(EAllActions['Create Decrypt Audit']);
    this.bot_id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.isFullscreen = this.activatedRoute.snapshot.data['isFullscreen'];
    this.botlist$.subscribe((viewBotState) => {
      this.bot = viewBotState.allBotList.find(bot => bot.id === this.bot_id);
    });
    this.loadConsumerData();
  }

  pageChanged({page}) {
    this.loadConsumerData(10, (page - 1) * 10);
  }

  showSplashScreen = false;

  loadConsumerData(limit: number = 10, offset: number = 0) {

    this.showLoader = true;
    this.showSplashScreen = false;
    const url = this.constantsService.getBotConsumerUrl(limit, offset);
    this.serverService
      .makeGetReq<IConsumerResultsFromServer>({url, headerData: {'bot-access-token': ServerService.getBotTokenById(this.bot.id)}})
      .subscribe((value) => {
        this.showLoader = false;
        this.totalRecords = value.meta.total_count;
        if (this.totalRecords === 0) {
          this.showSplashScreen = true;
        }
        this.consumerItems = value.objects;
        this.sessionsSmartTableDataModal.refreshData(value.objects);
      });
  }


  customActionEventsTriggeredInSessionsTable(data: { action: string, data: IConsumerItem, source: any }) {

    if (data.action === 'decrypt') {
      this.consumerItemToBeDecrypted = data.data;
      this.utilityService.openDialog({
        dialogRefWrapper: this.dialogRefWrapper,
        classStr: 'danger-modal-header-border',
        data: {
          actionButtonText: `Decrypt`,
          message: 'Use the decryption key to decrypt this consumer',
          title: `Decrypt consumer`,
          isActionButtonDanger: false,
          inputDescription: 'Key'
        },
        dialog: this.matDialog,
        component: ModalConfirmComponent
      }).then((data_temp) => {
        if (data_temp) {
          // this.decryptSubmit()
          this.decryptSubmit(data_temp);
        }
      });
    }
  }


  decryptSubmit(decryptKey) {


    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
    const body = {
      'consumer_id': this.consumerItemToBeDecrypted.id,
      'decrypt_audit_type': 'consumer',
      'message': decryptKey
    };
    const url = this.constantsService.getDecryptUrl();
    this.serverService.makePostReq({headerData, body, url})
      .subscribe(() => {
        decryptKey = '';
        //
        const url_temp = this.constantsService.getBotConsumerByIdUrl(this.consumerItemToBeDecrypted.id);
        this.serverService
          .makeGetReq<IConsumerItem>({url: url_temp, headerData: {'bot-access-token': ServerService.getBotTokenById(this.bot.id)}})
          .subscribe((value: { objects: IConsumerItem[] }) => {
            this.consumersDecrypted = value.objects[0];
            const index = this.consumerItems.findIndex((value_temp) => value_temp.id === this.consumerItemToBeDecrypted.id);
            this.consumerItems[index] = this.consumersDecrypted;
            this.sessionsSmartTableDataModal.refreshData(this.consumerItems);
          });
      });

  }

  performSearchInDbForConsumer(data) {

    if (!data.id) {
      if (data.page) {
        this.loadConsumerData(10, (data.page - 1) * 10);
      }
      return;
    }
    const url = this.constantsService.getBotConsumerByIdUrl(data['id']);
    this.serverService
      .makeGetReq<IConsumerItem>({url, headerData: {'bot-access-token': ServerService.getBotTokenById(this.bot.id)}})
      .subscribe(({objects, meta}) => {
        this.totalRecords = meta.total_count;
        this.sessionsSmartTableDataModal.refreshData(objects);
      });
  }


}
