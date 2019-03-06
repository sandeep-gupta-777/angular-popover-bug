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
import {ObjectArrayCrudService} from '../../../object-array-crud.service';
import { ModalConfirmComponent } from 'src/app/modal-confirm/modal-confirm.component';

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
  consumerItems: IConsumerItem[];
  consumersDecrypted: IConsumerItem; //IConsumerItem
  isFullscreen: false;
  consumerItemToBeDecrypted: IConsumerItem;
  // decryptReason: string;
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

  initializeTableData(consumerTableData: IConsumerItem[], tableDataMetaDict) {
    let tableData = this.transformDataForMaterialTable(consumerTableData, tableDataMetaDict);
    tableData.map((tableRow)=>{
      let additonalColumns: any = {
        Actions:tableRow['Actions'],
      };

      additonalColumns['Actions'].value = additonalColumns['Actions'].value || [];
      if(tableRow['originalSessionData']['data_encrypted']){
        additonalColumns['Actions'].value.push({show: true, name: 'decrypt', class: 'fa fa-lock'});
      }

      return {...tableRow, ...additonalColumns};
    });
    return tableData;
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

  pageChanged({page}) {

    this.loadConsumerData(10, (page - 1) * 10);
  }

  loadConsumerData(limit: number = 10, offset: number = 0) {
    this.showLoader = true;
    const url = this.constantsService.getBotConsumerUrl(limit, offset);
    this.serverService
      .makeGetReq<IConsumerResultsFromServer>({url, headerData: {'bot-access-token': this.bot.bot_access_token}})
      .subscribe((value) => {
        this.totalRecords = value.meta.total_count;
        this.showLoader = false;
        this.consumerItems = value.objects;
        let tableDataMetaDict = this.getTableDataMetaDict();
        this.tableData = this.initializeTableData(value.objects, tableDataMetaDict);
      });
  }


  customActionEventsTriggeredInSessionsTable(data: { action: string, data: IConsumerItem, source: any }) {

    if (data.action === 'decrypt') {
      this.consumerItemToBeDecrypted = data.data;
      this.utilityService.openDialog({
        dialogRefWrapper: this.dialogRefWrapper,
        classStr:'danger-modal-header-border',
        data:{
          actionButtonText:`Decrypt`,
          message: 'Use the decryption key to decrypt this consumer',
          title:`Decrypt consumer`,
          isActionButtonDanger:false,
          inputDescription: "Key"
        },
        dialog: this.matDialog,
        component:ModalConfirmComponent
      }).then((data)=>{
        if(data){
          // this.decryptSubmit()
          this.decryptSubmit(data);
        }
      })
    }
  }


  decryptSubmit(decryptKey) {


    const headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    const body = {'consumer_id': this.consumerItemToBeDecrypted.id, 'decrypt_audit_type': 'consumer', 'message': decryptKey};
    const url = this.constantsService.getDecryptUrl();
    this.serverService.makePostReq({headerData, body, url})
      .subscribe(() => {
        decryptKey = '';
        const url = this.constantsService.getBotConsumerByIdUrl(this.consumerItemToBeDecrypted.id);
        this.serverService
          .makeGetReq<IConsumerItem>({url, headerData: {'bot-access-token': this.bot.bot_access_token}})
          // .pipe(map((result) => {
          //   const modified_update_at = (new Date(result.updated_at)).toDateString();
          //   return {...result, updated_at: modified_update_at};
          // }))
          .subscribe((value: {objects:IConsumerItem[]}) => {
            this.consumersDecrypted = value.objects[0];
            const index = this.consumerItems.findIndex((value) => value.id === this.consumerItemToBeDecrypted.id);
            this.consumerItems[index] = this.consumersDecrypted;
            this.tableData = this.initializeTableData(this.consumerItems, this.getTableDataMetaDict());
          });
      });

  }

  performSearchInDbForConsumer(data) {

    if(!data.id){
      if(data.page){
        this.loadConsumerData(10, (data.page-1)*10);
      }
      return;
    }
    const url = this.constantsService.getBotConsumerByIdUrl(data['id']);
    this.serverService
      .makeGetReq<IConsumerItem>({url, headerData: {'bot-access-token': this.bot.bot_access_token}})
      .subscribe(({objects, meta}) => {
        debugger;
        // let index = ObjectArrayCrudService.getObjectIndexByKeyValuePairInObjectArray(this.consumerItems, {roomId: consumer.roomId});
        // if(index >= 0){
        //   this.consumerItems[index] = consumer;
        // }else {
        //   this.consumerItems.push(consumer);
        // }
        this.totalRecords = meta.total_count;
        this.tableData = this.initializeTableData(objects, this.getTableDataMetaDict());
      });
  }



}
