import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {ServerService} from '../../../server.service';
import {Observable, of} from 'rxjs';
import {ConstantsService} from '../../../constants.service';
import {ISessionItem, ISessions} from '../../../../interfaces/sessions';
import {IBot} from '../../interfaces/IBot';
import {SmartTableComponent} from '../../../smart-table/smart-table.component';
import {UtilityService} from '../../../utility.service';
import {IHeaderData} from '../../../../interfaces/header-data';
import {ESplashScreens} from '../../../splash-screen/splash-screen.component';
import {MaterialTableImplementer} from '../../../material-table-implementer';
import {MatDialog} from '@angular/material';
import {ObjectArrayCrudService} from '../../../object-array-crud.service';
import {EventService} from '../../../event.service';
import {catchError} from 'rxjs/internal/operators';
import {IAppState} from '../../../ngxs/app.state';
import {IIntegrationMasterListItem} from '../../../../interfaces/integration-option';
import {NgForm} from '@angular/forms';

interface ISessionFilterData {
  id: number,
  updated_at: { begin: number, end: number },
  limit: number,
  page: number
}

@Component({
  selector: 'app-bot-sessions',
  templateUrl: './bot-sessions.component.html',
  styleUrls: ['./bot-sessions.component.scss']
})
export class BotSessionsComponent extends MaterialTableImplementer implements OnInit {
  dialogRefWrapper = {ref: null};

  myESplashScreens = ESplashScreens;
  @Select(state => state.botlist.codeBasedBotList) codeBasedBotList$: Observable<IBot[]>;
  @Input() id: string;
  test = 'asdasdsd';
  @Input() bot: IBot;
  showSplashScreen = false;
  headerData: IHeaderData;
  sessionItemToBeDecrypted: ISessionItem;
  @ViewChild(SmartTableComponent) smartTableComponent: SmartTableComponent;
  sessions$: Observable<ISessions>;
  showLoader = false;
  refreshSessions$: Observable<ISessions>;
  url: string;
  selectedRow_Session: ISessionItem;
  selectedRow_number = 0;
  totalSessionRecords = 0;
  sessions: ISessionItem[];
  tableData: any[];
  showNextButton: boolean;
  showPrevButton: boolean;
  pageNumberOfCurrentRowSelected = 1;
  indexOfCurrentRowSelected: number;
  decryptReason: string;
  filterData: ISessionFilterData;
  @Select() app$: Observable<IAppState>;

  masterIntegrationList: IIntegrationMasterListItem[];

  constructor(
    private serverService: ServerService,
    private utilityService: UtilityService,
    private constantsService: ConstantsService,
    private eventService: EventService,
    private store: Store,
    private matDialog: MatDialog,
  ) {
    super();
  }

  ngOnInit() {

    this.app$
      .subscribe((appState) => {
        this.masterIntegrationList = appState.masterIntegrationList;
      });

    this.headerData = {'bot-access-token': this.bot.bot_access_token};
    this.performSearchInDbForSession(null);
    this.eventService.reloadSessionTable$.subscribe(() => {
      this.performSearchInDbForSession(this.filterData);
    });
  }

  async openDeleteTemplateKeyModal(tempKey) {

    let closeDialogPromise$ = this.utilityService.openDialog({
      dialog: this.matDialog,
      component: this.sessionDetailTemplate,
      data: {
        title: `Delete template key: ${tempKey}?`,
        message: 'This action cannot be undone. Are you sure you wish to delete?',
        actionButtonText: 'Delete',
        isActionButtonDanger: true
      },
      dialogRefWrapper: this.dialogRefWrapper,
      classStr: 'modal-xlg'
    });
    let data = await closeDialogPromise$;
  }


  /*todo: implement it better way*/
  refreshSession() {
    this.url = this.constantsService.getBotSessionsUrl(10, 0);
    this.refreshSessions$ = this.serverService.makeGetReq<ISessions>({url: this.url});
    this.refreshSessions$.subscribe((value) => {
      this.sessions$ = of(value);
    });
  }


  getTableDataMetaDict(): any {
    return this.constantsService.SMART_TABLE_SESSION_TABLE_DATA_META_DICT_TEMPLATE;
  }

  initializeTableData(sessions: ISessionItem[], tableDataMetaDict: any): void {
    this.tableData = this.transformSessionDataForMaterialTable(this.sessions);

  }

  // loadSmartTableSessionData() {
  // this.loadSessionTableDataForGivenPage({page: this.pageNumberOfCurrentRowSelected});
  // this.performSearchInDbForSession({});
  // }

  transformSessionDataForMaterialTable(session: ISessionItem[]) {


    let sessionsDataForTable = super.transformDataForMaterialTable(session, this.getTableDataMetaDict());


    sessionsDataForTable = sessionsDataForTable.map((sessionsDataForTableItem) => {

      /*adding two additional columns 1) actions and 2)channels*/
      let additonalColumns: any = {
        Actions: sessionsDataForTableItem['Actions'],
        Channels: sessionsDataForTableItem['Channels'],
      };

      additonalColumns['Actions'].value = additonalColumns['Actions'].value || [];
      additonalColumns['Channels'].value = additonalColumns['Channels'].value || [];
      /*actions*/
      additonalColumns['Actions'].value.push({show: true, name: 'download', class: 'fa fa-download'});

      /*TODO: also check if the user has access to decrypt api*/
      if (sessionsDataForTableItem['originalSessionData']['data_encrypted']) {
        additonalColumns['Actions'].value.push({show: true, name: 'decrypt', class: 'fa fa-lock'});
      }
      /*channels*/
      additonalColumns['Channels'].searchValue = sessionsDataForTableItem['Channels'].value.join();
      ;
      additonalColumns['Channels'].value = (sessionsDataForTableItem.Channels['value'].map((channelName) => {
        return {
          name: channelName,
          src: this.constantsService.getIntegrationIconForChannelName(channelName).icon//'https://s3-eu-west-1.amazonaws.com/imibot-dev/integrations/web.png'
        };
      }));
      return {...sessionsDataForTableItem, ...additonalColumns};
    });


    return sessionsDataForTable;
  }

  sessionTableRowClicked(eventData: { data: ISessionItem }, template?, reasonForDecryptionTemplate?) {
    let isEncrypted: boolean;
    /*
      * TODO: there is a data_encrypted key it the row itself. Can we use it?
    * Why do we need to go fetch first message to see if its decrypted or not?
    * */

    if (eventData.data.data_encrypted) {

      this.openSessionRowDecryptModal(this.reasonForDecryptionTemplate, eventData.data);
    } else {
      this.loadSessionMessagesById(eventData.data.id)
        .subscribe((value: {objects:ISessionItem[]}) => {

          this.selectedRow_Session = this.sessions.find(session => session.id === eventData.data.id);
          // this.selectedRow_Session = value.objects.find(session => session.id === eventData.data.id);
          // (<any>this.selectedRow_Session).highlight = true;
          if (this.indexOfCurrentRowSelected !== undefined) {
            this.sessions[this.indexOfCurrentRowSelected].highlight = false;
          }
          this.indexOfCurrentRowSelected = this.sessions.findIndex((session) => {
            return this.selectedRow_Session.id === session.id;
          });
          this.sessions[this.indexOfCurrentRowSelected].highlight = true;

          // this.openDeleteModal(template);
          this.openDeleteTemplateKeyModal(this.sessionDetailTemplate);

        });
    }


  }

  loadSessionTableDataForGivenPage(filterData: ISessionFilterData) {

    this.showLoader = true;
    this.pageNumberOfCurrentRowSelected = filterData.page;
    this.performSearchInDbForSession(filterData);
    // this.url = this.constantsService.getBotSessionsUrl(10, (data.page - 1) * 10);
    // const headerData: IHeaderData = {
    //   'bot-access-token': this.bot.bot_access_token
    // };
    // this.serverService.makeGetReq<ISessions>({url: this.url, headerData})
    //   .subscribe((value) => {
    //     this.showLoader = false;
    //     this.totalSessionRecords = value.meta.total_count;
    //     this.selectedRow_Session = value.objects[this.selectedRow_number || 0];
    //     this.sessions = value.objects;
    //     this.initializeTableData(this.sessions, this.getTableDataMetaDict());
    //
    //   });
  }

  @ViewChild('reasonForDecryptionTemplate') reasonForDecryptionTemplate: TemplateRef<any>;
  @ViewChild('sessionDetailTemplate') sessionDetailTemplate: TemplateRef<any>;

  selectNextRow() {
    // this.selectedRow_Session
    let newSelectedRow_Session: ISessionItem; // = {...this.selectedRow_Session};

    if (this.indexOfCurrentRowSelected !== undefined) {/*removing the highlighted color from the old selected table row*/
      this.sessions[this.indexOfCurrentRowSelected].highlight = false;
    }

    let currentIndex = this.sessions.findIndex((session) => {/*old selected row index*/
      // return this.selectedRow_Session.id === session.id;
      return this.selectedRow_Session.id === session.id;
    });
    if (currentIndex <= this.sessions.length - 2) {
      newSelectedRow_Session = this.sessions[++currentIndex];
      this.indexOfCurrentRowSelected = currentIndex;
      this.sessions[this.indexOfCurrentRowSelected].highlight = true;
      if (newSelectedRow_Session.data_encrypted) {
        // this.customActionEventsTriggeredInSessionsTable({data:selectedRow_SessionClone,action:'decrypt',source:null});
        this.preOpenDecryptionModal();
      } else {
        this.selectedRow_Session = newSelectedRow_Session;
      }
    } else {/*new page is needed to be loaded*/
      this.smartTableComponent.goToNextPage();
      this.selectedRow_number = 0;
      this.indexOfCurrentRowSelected = 0;
    }
  }

  preOpenDecryptionModal() {
    // this.modalRef.hide();
    this.dialogRefWrapper.ref.close();
    const sessionToBeDecrypted = this.sessions[this.indexOfCurrentRowSelected];
    this.openSessionRowDecryptModal(this.reasonForDecryptionTemplate, sessionToBeDecrypted);
    return;
  }

  selectPrevRow() {
    if (this.indexOfCurrentRowSelected !== undefined) {
      this.sessions[this.indexOfCurrentRowSelected].highlight = false;
    }
    let currentIndex = this.sessions.findIndex((session) => {
      return this.selectedRow_Session.id === session.id;
    });

    this.indexOfCurrentRowSelected = currentIndex;
    let newSelectedRow_Session: ISessionItem;

    if (currentIndex >= 1) {
      newSelectedRow_Session = this.sessions[--currentIndex];
      this.indexOfCurrentRowSelected = currentIndex;
      this.sessions[this.indexOfCurrentRowSelected].highlight = true;
      if (newSelectedRow_Session.data_encrypted) {
        // this.customActionEventsTriggeredInSessionsTable({data:selectedRow_SessionClone,action:'decrypt',source:null});
        this.preOpenDecryptionModal();
      } else {
        this.selectedRow_Session = newSelectedRow_Session;
      }
    } else {
      this.smartTableComponent.goToPrevPage();
      this.selectedRow_number = 9;
      this.indexOfCurrentRowSelected = 9;
    }
    if (this.indexOfCurrentRowSelected !== undefined) {
      this.sessions[this.indexOfCurrentRowSelected].highlight = true;
    }

  }

  customActionEventsTriggeredInSessionsTable(data: { action: string, data: ISessionItem, source: any }, Primarytemplate) {
    if (data.action === 'download') {
      /*download the conversation for the record*/
      this.loadSessionMessagesById(data.data.id)
        .subscribe((value: any) => {
          let dataToDownload = value.objects;
          if (dataToDownload.length === 0) {
            dataToDownload = [{name: 'No Data'}];
            this.utilityService.downloadArrayAsCSV(dataToDownload, {name: 'No Data'});
          } else {
            /*todo: give downloaded file an apt name*/
            this.utilityService.downloadArrayAsCSV(dataToDownload);
          }
        });
    }
    if (data.action === 'decrypt') {
      /*use dcrypt api*/

      const sessionItemToBeDecrypted = data.data;
      this.openSessionRowDecryptModal(Primarytemplate, sessionItemToBeDecrypted);

    }
  }

  decryptSubmit(sessionTobeDecryptedId: number) {
    this.decryptReason = '';
    const headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    const body = {'room_id': sessionTobeDecryptedId, 'decrypt_audit_type': 'room', 'message': this.decryptReason};
    const url = this.constantsService.getDecryptUrl();
    this.serverService.makePostReq({headerData, body, url})
      .subscribe(() => {

        this.decryptReason = null;
        const surl = this.constantsService.getSessionsByIdUrl(sessionTobeDecryptedId);
        this.serverService.makeGetReq({url: surl, headerData})
          .subscribe((value: { objects: ISessionItem[] }) => {
            let newSession = value.objects[0];
            /*todo: use perform search in db instead*/
            const del = this.sessions.findIndex((session) => session.id === sessionTobeDecryptedId);
            this.sessions[del] = {...newSession};
            this.sessions = [...this.sessions];
            this.tableData = this.transformSessionDataForMaterialTable(this.sessions);

            this.selectedRow_Session = newSession;
            this.openDeleteTemplateKeyModal(this.sessionDetailTemplate);
          });
      });
    this.dialogRefWrapper.ref.close();

  }

  openSessionRowDecryptModal(template: TemplateRef<any>, sessionToBeDecrypted: ISessionItem) {
    this.sessionItemToBeDecrypted = sessionToBeDecrypted;
    // this.modalRef = this.modalService.show(template, {class: 'modal-md'});
    this.utilityService.openDialog({
      component: template,
      dialog: this.matDialog,
      classStr: 'primary-modal-header-border',
      dialogRefWrapper: this.dialogRefWrapper
    });
  }

  loadSessionMessagesById(id) {
    this.url = this.constantsService.getSessionsMessageUrl(id);
    return this.serverService.makeGetReq<ISessionItem>({
      url: this.url,
      headerData: {'bot-access-token': this.bot.bot_access_token}
    });
  }

  loadSessionById(id) {
    // this.url = this.constantsService.getSessionsMessageUrl(id);
    this.url = this.constantsService.getSessionsByIdUrl(id);
    return this.serverService.makeGetReq<ISessionItem>({
      url: this.url,
      headerData: {'bot-access-token': this.bot.bot_access_token}
    });
  }

  updateSessionById(id: number) {
    this.loadSessionById(id)
      .subscribe((val: { objects: ISessionItem[] }) => {

        let sessionItem = val.objects[0];
        let index = ObjectArrayCrudService.getObjectIndexByKeyValuePairInObjectArray(this.sessions, {id});
        this.sessions[index] = sessionItem;
        ;
        this.selectedRow_Session = sessionItem;
        this.tableData = this.transformSessionDataForMaterialTable(this.sessions);
        this.tableData = [...this.tableData];
      });
    //
  }

  performSearchInDbForSession(filterData: ISessionFilterData) {
    debugger;
    this.showLoader = true;
    let url: string;
    this.filterData = JSON.parse(JSON.stringify(filterData));
    if (filterData) {
      let dataCopy: any = this.utilityService.createDeepClone(filterData);
      if (dataCopy.updated_at) {
        let x: any;

        // dataCopy.updated_at =
        //   this.utilityService.convertDateObjectStringToYYYYMMDD(new Date((<any>filterData).updated_at.begin).toUTCString(), '-') + ',';
        // x = this.utilityService.convertDateObjectStringToYYYYMMDD(new Date((<any>filterData).updated_at.end).toUTCString(), '-') + " 23:59";

        /*
        * start and end refer to date 00:00
        * We want end to point to 23:59, so added a day
        * */
        let begin = new Date((<any>filterData).updated_at.begin);
        let end = new Date((<any>filterData).updated_at.end);
        end.setDate(end.getDate() + 1);

        dataCopy.updated_at =
          `${begin.getFullYear()}-${begin.getUTCMonth() + 1}-${begin.getUTCDate()} ${begin.getUTCHours()}:${begin.getUTCMinutes()}` + ',' +
          `${end.getFullYear()}-${end.getUTCMonth() + 1}-${end.getUTCDate()} ${begin.getUTCHours()}:${begin.getUTCMinutes()}`;

        // dataCopy.updated_at += x;
        dataCopy.updated_at__range = dataCopy.updated_at;
        delete dataCopy.updated_at;
      }
      if (dataCopy.total_message_count) {
        dataCopy.total_message_count__range = `${dataCopy.total_message_count},${dataCopy.total_message_count}`;

      }
      dataCopy = {
        ...dataCopy,
        offset: dataCopy.page ? ((dataCopy.page - 1) * 10) : 0,
        limit: dataCopy.limit ? dataCopy.limit : 10
      };
      delete dataCopy.page;
      UtilityService.removeAllNonDefinedKeysFromObject(dataCopy);
      url = this.constantsService.getRoomWithFilters(dataCopy);
    } else {
      url = this.constantsService.getRoomWithFilters({limit: 10});
    }
    this.serverService.makeGetReq({url, headerData: this.headerData})
      .subscribe((value: { objects: ISessionItem[], meta: { total_count: number } }) => {

          if (!filterData && value.objects.length === 0) {
            this.showSplashScreen = true;
          }
          this.sessions = value.objects;
          this.totalSessionRecords = value.meta.total_count;
          this.tableData = this.transformSessionDataForMaterialTable(this.sessions);
          this.tableData = [...this.tableData];
          this.showLoader = false;
        }, () => {
          this.showLoader = false;
        }
      );
  }

  sessionFormSubmitted(formData){
    let filterData = UtilityService.cloneObj(formData);
    let channelsObj = filterData.channels;
    let channelStr = Object.keys(channelsObj).filter(key=>channelsObj[key]).join(",");
    delete filterData.channels;
    if(channelStr){
      filterData.channels= channelStr.toLowerCase();
    }
    this.performSearchInDbForSession(filterData);
  }


  log() {
    console.log(this.headerData);
  }

  resetSearchForm(form:NgForm){
    form.resetForm();
    this.performSearchInDbForSession(null);
  }

}
