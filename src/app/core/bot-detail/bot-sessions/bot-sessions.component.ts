import {Component, ElementRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Store, Select} from '@ngxs/store';
import {IConsumerResults} from '../../../../interfaces/consumer';
import {ServerService} from '../../../server.service';
import {Observable} from 'rxjs';
import {ConstantsService} from '../../../constants.service';
import {ISessionItem, ISessionMessage, ISessions} from '../../../../interfaces/sessions';
import {of} from 'rxjs';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {IBot} from '../../interfaces/IBot';
import {SmartTableComponent} from '../../../smart-table/smart-table.component';
import {UtilityService} from '../../../utility.service';
import {IHeaderData} from '../../../../interfaces/header-data';
import {findIndex} from 'rxjs/operators';

@Component({
  selector: 'app-bot-sessions',
  templateUrl: './bot-sessions.component.html',
  styleUrls: ['./bot-sessions.component.scss']
})
export class BotSessionsComponent implements OnInit {

  @Select(state => state.botlist.codeBasedBotList) codeBasedBotList$: Observable<IBot[]>;
  @Input() id: string;
  test = 'asdasdsd';
  @Input() bot: IBot;
  sessionItemToBeDecrypted: ISessionItem;
  @ViewChild(SmartTableComponent) smartTableComponent: SmartTableComponent;
  sessions$: Observable<ISessions>;
  refreshSessions$: Observable<ISessions>;
  url: string;
  modalRef: BsModalRef;
  smartTableSettings_Sessions = this.constantsService.SMART_TABLE_SESSIONS_SETTING;
  selectedRow_Session: ISessionItem;
  selectedRow_number: number = 0;
  totalSessionRecords: number = 0;
  sessions: ISessionItem[];
  showNextButton: boolean;
  showPrevButton: boolean;
  pageNumberOfCurrentRowSelected: number = 1;
  indexOfCurrentRowSelected: number;
  decryptReason: string;

  constructor(
    private serverService: ServerService,
    private utilityService: UtilityService,
    private constantsService: ConstantsService,
    private store: Store,
    private modalService: BsModalService
  ) {
  }

  ngOnInit() {
    this.loadSmartTableSessionData();
    // this.loadSessionTableDataForGivenPage(1);
    // this.sessions$ = this.serverService.makeGetReq<ISessions>({ url: this.url, headerData: { 'bot-access-token': this.bot.bot_access_token } });
    // this.sessions$
    //   .map((value) => {
    //     return {
    //       ...value,
    //       objects: value.objects.map((result) => {
    //         let modified_update_at = (new Date(result.updated_at)).toDateString();
    //         return { ...result, updated_at: modified_update_at };
    //       })
    //     };
    //   })
    //   .subscribe((value) => {
    //     if (!value) return;
    //     this.totalSessionRecords = value.meta.total_count;
    //     this.sessions = value.objects;
    //   });
  }

  /*todo: implement it better way*/
  refreshSession() {
    this.url = this.constantsService.getBotSessionsUrl(10, 0);
    this.refreshSessions$ = this.serverService.makeGetReq<ISessions>({url: this.url});
    this.refreshSessions$.subscribe((value) => {
      this.sessions$ = of(value);
    });
  }

  loadSmartTableSessionData() {
    this.loadSessionTableDataForGivenPage(this.pageNumberOfCurrentRowSelected);
    // this.sessions$ = this.serverService.makeGetReq<ISessions>({ url: this.url, headerData: { 'bot-access-token': this.bot.bot_access_token } });
    // this.sessions$
    //   .map((value) => {
    //     return {
    //       ...value,
    //       objects: value.objects.map((result) => {
    //         let modified_update_at = (new Date(result.updated_at)).toDateString();
    //         return { ...result, updated_at: modified_update_at };
    //       })
    //     };
    //   })
    //   .subscribe((value) => {
    //     if (!value) return;
    //     this.totalSessionRecords = value.meta.total_count;
    //     this.sessions = value.objects;
    //   });
  }

  sessionTableRowClicked(eventData: { data: ISessionItem }, template?, reasonForDecryptionTemplate?) {
    let isEncrypted: boolean;
    /*
      * TODO: there is a data_encrypted key it the row itself. Can we use it?
    * Why do we need to go fetch first message to see if its decrypted or not?
    * */
    if (eventData.data.data_encrypted) {

      // this.sessionItemToBeDecrypted = eventData.data;
      // this.openSessionRowDecryptModal(reasonForDecryptionTemplate);
      this.openSessionRowDecryptModal(this.reasonForDecryptionTemplate, eventData.data);
    }
    else {
      this.loadSessionMessagesById(eventData.data.id)
        .subscribe((value: any) => {
          this.selectedRow_Session = this.sessions.find(session => session.id === eventData.data.id);

          // (<any>this.selectedRow_Session).highlight = true;
          if (this.indexOfCurrentRowSelected !== undefined)
            this.sessions[this.indexOfCurrentRowSelected].highlight = false;
          this.indexOfCurrentRowSelected = this.sessions.findIndex((session) => {
            return this.selectedRow_Session.id === session.id;
          });
          this.sessions[this.indexOfCurrentRowSelected].highlight = true;

          // this.openModal(template);
          this.openModal(this.sessionDetailTemplate);

        });
    }


  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-xlg'});
  }

  loadSessionTableDataForGivenPage(pageNumber) {

    this.pageNumberOfCurrentRowSelected = pageNumber;
    this.url = this.constantsService.getBotSessionsUrl(10, (pageNumber - 1) * 10);
    let headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    this.serverService.makeGetReq<ISessions>({url: this.url, headerData})
      .subscribe((value) => {
        this.totalSessionRecords = value.meta.total_count;
        this.selectedRow_Session = value.objects[this.selectedRow_number || 0];
        this.sessions = value.objects;

        // if (this.indexOfCurrentRowSelected !== undefined && this.sessions[this.indexOfCurrentRowSelected].isEncrypted === false) {
        //   this.sessions[this.indexOfCurrentRowSelected].highlight = true;
        // } else {
        //   try {
        //     this.modalRef.hide();
        //   } catch (e) {
        //     console.error(e);
        //   }
        //   // this.sessionTableRowClicked({data: this.sessions[this.indexOfCurrentRowSelected]});
        // }
      });
  }

  @ViewChild('reasonForDecryptionTemplate') reasonForDecryptionTemplate: TemplateRef<any>;
  @ViewChild('sessionDetailTemplate') sessionDetailTemplate: TemplateRef<any>;

  selectNextRow() {
    // this.selectedRow_Session
    let newSelectedRow_Session: ISessionItem;// = {...this.selectedRow_Session};

    if (this.indexOfCurrentRowSelected !== undefined)/*removing the highlighted color from the old selected table row*/
      this.sessions[this.indexOfCurrentRowSelected].highlight = false;

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
      }else {
        this.selectedRow_Session=  newSelectedRow_Session;
      }
    }
    else {/*new page is needed to be loaded*/
      this.smartTableComponent.goToNextPage();
      this.selectedRow_number = 0;
      this.indexOfCurrentRowSelected = 0;
    }

    // if (this.indexOfCurrentRowSelected !== undefined)
    //   this.sessions[this.indexOfCurrentRowSelected].highlight = true;
  }

  preOpenDecryptionModal(){
    this.modalRef.hide();
    let sessionToBeDecrypted = this.sessions[this.indexOfCurrentRowSelected];
    this.openSessionRowDecryptModal(this.reasonForDecryptionTemplate, sessionToBeDecrypted);
    return;
  }

  selectPrevRow() {
    if (this.indexOfCurrentRowSelected !== undefined)
      this.sessions[this.indexOfCurrentRowSelected].highlight = false;
    let currentIndex = this.sessions.findIndex((session) => {
      return this.selectedRow_Session.id === session.id;
    });

    this.indexOfCurrentRowSelected = currentIndex;
    let newSelectedRow_Session:ISessionItem;

    if (currentIndex >= 1) {
      newSelectedRow_Session = this.sessions[--currentIndex];
      this.indexOfCurrentRowSelected = currentIndex;
      this.sessions[this.indexOfCurrentRowSelected].highlight = true;
      if (newSelectedRow_Session.data_encrypted) {
        // this.customActionEventsTriggeredInSessionsTable({data:selectedRow_SessionClone,action:'decrypt',source:null});
        this.preOpenDecryptionModal();
      }else {
        this.selectedRow_Session=  newSelectedRow_Session;
      }
    }
    else {
      this.smartTableComponent.goToPrevPage();
      this.selectedRow_number = 9;
      this.indexOfCurrentRowSelected = 9;
    }
    if (this.indexOfCurrentRowSelected !== undefined)
      this.sessions[this.indexOfCurrentRowSelected].highlight = true;

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
            this.utilityService.downloadArrayAsCSV(dataToDownload);
          }
        });
    }
    if (data.action === 'decrypt') {
      /*use dcrypt api*/

      let sessionItemToBeDecrypted = data.data;
      this.openSessionRowDecryptModal(Primarytemplate, sessionItemToBeDecrypted);

    }
  }

  decryptSubmit(sessionTobeDecryptedId: number) {
    let headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    let body = {'room_id': sessionTobeDecryptedId, 'decrypt_audit_type': 'room', 'message': this.decryptReason};
    let url = this.constantsService.getDecryptUrl();
    this.serverService.makePostReq({headerData, body, url})
      .subscribe(() => {
        this.decryptReason = null;
        let surl = this.constantsService.getSessionsByIdUrl(sessionTobeDecryptedId);
        this.serverService.makeGetReq({url: surl, headerData})
          .subscribe((newSession: ISessionItem) => {

            let del = this.sessions.findIndex((session) => session.id === sessionTobeDecryptedId);
            this.sessions[del] = {...newSession};
            this.sessions = [...this.sessions];
          });
      });

  }

  openSessionRowDecryptModal(template: TemplateRef<any>, sessionToBeDecrypted: ISessionItem) {
    this.sessionItemToBeDecrypted = sessionToBeDecrypted;
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
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

  performSearchInDbForSession(data) {
    this.loadSessionById(data['Room ID'])
      .subscribe((session: ISessionItem) => {
        this.sessions.push(session);
        this.sessions = [...this.sessions];
      });
  }

}
