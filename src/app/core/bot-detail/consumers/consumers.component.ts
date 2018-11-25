import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {ServerService} from '../../../server.service';
import {Observable} from 'rxjs';
import {ConstantsService, EAllActions} from '../../../constants.service';
import {IConsumerItem, IConsumerResultsFromServer} from '../../../../interfaces/consumer';
import {IBot} from '../../interfaces/IBot';
import {ViewBotStateModel} from '../../view-bots/ngxs/view-bot.state';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {ISessionItem, ITableColumn} from '../../../../interfaces/sessions';
import {IHeaderData} from '../../../../interfaces/header-data';
import {PermissionService} from '../../../permission.service';
import {ESplashScreens} from '../../../splash-screen/splash-screen.component';
import {map} from 'rxjs/operators';
import {MaterialTableImplementer} from '../../../material-table-implementer';
import {UtilityService} from '../../../utility.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-consumers',
  templateUrl: './consumers.component.html',
  styleUrls: ['./consumers.component.scss']
})
export class ConsumersComponent extends MaterialTableImplementer implements OnInit {

  dialogRefWrapper = {ref:null};
  @Select() botlist$: Observable<ViewBotStateModel>;
  @Input() id: string;
  @Input() bot: IBot;
  bot_id: number;
  totalRecords: number;
  myESplashScreens = ESplashScreens;
  showLoader = false;
  isDeCryptAuditAccessDenied = false;
  consumerTableData: IConsumerItem[];
  consumersDecrypted: IConsumerItem; //IConsumerItem
  smartTableSettings_Consumers = this.constantsService.SMART_TABLE_CONSUMER_SETTING;
  isFullscreen: false;
  consumerItemToBeDecrypted: IConsumerItem;
  decryptReason: string;
  tableData;

  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private router: Router,
    private permissionService: PermissionService,
    private activatedRoute: ActivatedRoute,
    private matDialog: MatDialog,
    private utilityService: UtilityService,
    private store: Store) {
    super();
  }

  initializeTableData(consumerTableData: IConsumerItem[], tableDataMetaDict): void {
    this.tableData = this.transformDataForMaterialTable(consumerTableData, tableDataMetaDict);
  }

  getTableDataMetaDict() {
    return this.constantsService.SMART_TABLE_CONSUMER_TABLE_DATA_META_DICT_TEMPLATE;
  }

  ngOnInit() {
    this.isDeCryptAuditAccessDenied = this.permissionService.isTabAccessDenied(EAllActions['Create Decrypt Audit']);
    this.bot_id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
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
    this.showLoader = true;
    const url = this.constantsService.getBotConsumerUrl(limit, offset);
    this.serverService
      .makeGetReq<IConsumerResultsFromServer>({url, headerData: {'bot-access-token': this.bot.bot_access_token}})
      .subscribe((value) => {
        this.totalRecords = value.meta.total_count;
        this.showLoader = false;
        this.consumerTableData = value.objects;
        let tableDataMetaDict = this.getTableDataMetaDict();
        this.initializeTableData(value.objects, tableDataMetaDict);
      });
  }


  customActionEventsTriggeredInSessionsTable(data: { action: string, data: IConsumerItem, source: any }, Primarytemplat) {
    if (data.action === 'decrypt') {
      this.consumerItemToBeDecrypted = data.data;
      this.openCreateBotModal(Primarytemplat);
    }
  }


  decryptSubmit() {

    const headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    const body = {'consumer_id': this.consumerItemToBeDecrypted.id, 'decrypt_audit_type': 'consumer', 'message': this.decryptReason};
    const url = this.constantsService.getDecryptUrl();
    this.serverService.makePostReq({headerData, body, url})
      .subscribe(() => {
        this.decryptReason = '';
        const url = this.constantsService.getBotConsumerByIdUrl(this.consumerItemToBeDecrypted.id);
        this.serverService
          .makeGetReq<IConsumerItem>({url, headerData: {'bot-access-token': this.bot.bot_access_token}})
          .pipe(map((result) => {
            const modified_update_at = (new Date(result.updated_at)).toDateString();
            return {...result, updated_at: modified_update_at};
          }))
          .subscribe((value) => {
            this.consumersDecrypted = value;
            const index = this.consumerTableData.findIndex((value) => value.id === this.consumerItemToBeDecrypted.id);
            this.consumerTableData[index] = this.consumersDecrypted;
            this.initializeTableData(this.consumerTableData, this.getTableDataMetaDict());
          });
      });

  }

  performSearchInDbForConsumer(data) {
    const url = this.constantsService.getBotConsumerByIdUrl(data['id']);
    this.serverService
      .makeGetReq<IConsumerItem>({url, headerData: {'bot-access-token': this.bot.bot_access_token}})
      .subscribe((consumer: IConsumerItem) => {
        this.consumerTableData.push(consumer);
        this.initializeTableData(this.consumerTableData, this.getTableDataMetaDict());
      });
  }

  openCreateBotModal(template: TemplateRef<any>) {
    // this.modalRef = this.modalService.show(template, {class: 'modal-md'});
    this.utilityService.openDialog({
      dialog: this.matDialog,
      dialogRefWrapper: this.dialogRefWrapper,
      component:template,
      classStr:'primary-modal-header-border'
    });
  }


}
