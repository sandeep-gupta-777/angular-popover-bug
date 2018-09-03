import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
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

@Component({
  selector: 'app-bot-sessions',
  templateUrl: './bot-sessions.component.html',
  styleUrls: ['./bot-sessions.component.scss']
})
export class BotSessionsComponent implements OnInit {

  @Select(state => state.botlist.codeBasedBotList) codeBasedBotList$: Observable<IBot[]>;
  @Input() id: string;
  @Input() bot: IBot;
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

  constructor(
    private serverService: ServerService,
    private utilityService: UtilityService,
    private constantsService: ConstantsService,
    private store: Store,
    private modalService: BsModalService
  ) {
  }

  ngOnInit() {
    this.url = this.constantsService.getBotSessionsUrl(10, 0);
    this.sessions$ = this.serverService.makeGetReq<ISessions>({url: this.url, headerData: {'bot-access-token': this.bot.bot_access_token}});
    this.sessions$.subscribe((value) => {
      if (!value) return;
      this.totalSessionRecords = value.meta.total_count;
      this.sessions = value.objects;
    });
  }

  /*todo: implement it better way*/
  refreshSession() {
    this.refreshSessions$ = this.serverService.makeGetReq<ISessions>({url: this.url});
    this.refreshSessions$.subscribe((value) => {
      this.sessions$ = of(value);
    });
  }

  goToReportEditComponent($event, template) {
    // if(this.selectedRow_Session)(<any>this.selectedRow_Session).highlight = false;
    this.selectedRow_Session = $event.data;
    // (<any>this.selectedRow_Session).highlight = true;
    if(this.indexOfCurrentRowSelected !== undefined)
      this.sessions[this.indexOfCurrentRowSelected].highlight = false;
    this.indexOfCurrentRowSelected = this.sessions.findIndex((session) => {
      return this.selectedRow_Session.id === session.id;
    });
    this.sessions[this.indexOfCurrentRowSelected].highlight = true;

    this.openModal(template);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }

  sessionTablePageChanged(pageNumber) {

    this.pageNumberOfCurrentRowSelected = pageNumber;
    this.url = this.constantsService.getBotSessionsUrl(10, (pageNumber - 1) * 10);
    let headerData: IHeaderData = {
      "bot-access-token":this.bot.bot_access_token
    };
    this.serverService.makeGetReq<ISessions>({url: this.url, headerData})
      .subscribe((value) => {
        this.totalSessionRecords = value.meta.total_count;
        this.selectedRow_Session = value.objects[this.selectedRow_number || 0];
        this.sessions = value.objects;
        if(this.indexOfCurrentRowSelected !== undefined)
          this.sessions[this.indexOfCurrentRowSelected].highlight = true;
      });
  }

  selectNextRow() {
    // this.selectedRow_Session


    if(this.indexOfCurrentRowSelected !== undefined)
      this.sessions[this.indexOfCurrentRowSelected].highlight = false;

    let currentIndex = this.sessions.findIndex((session) => {
      return this.selectedRow_Session.id === session.id;
    });
    if (currentIndex <= this.sessions.length - 2) {
      this.selectedRow_Session = this.sessions[++currentIndex];
      this.indexOfCurrentRowSelected = currentIndex;

    }
    else {
      this.smartTableComponent.goToNextPage();
      this.selectedRow_number = 0;
      this.indexOfCurrentRowSelected = 0;
    }

    if(this.indexOfCurrentRowSelected !== undefined)
      this.sessions[this.indexOfCurrentRowSelected].highlight = true;
  }

  selectPrevRow() {
    if(this.indexOfCurrentRowSelected !== undefined)
      this.sessions[this.indexOfCurrentRowSelected].highlight = false;
    let currentIndex = this.sessions.findIndex((session) => {
      return this.selectedRow_Session.id === session.id;
    });

    this.indexOfCurrentRowSelected = currentIndex;

    if (currentIndex >= 1) {
      this.selectedRow_Session = this.sessions[--currentIndex];
      this.indexOfCurrentRowSelected = currentIndex;
    }
    else {
      this.smartTableComponent.goToPrevPage();
      this.selectedRow_number = 9;
      this.indexOfCurrentRowSelected = 9;
    }
    if(this.indexOfCurrentRowSelected !== undefined)
      this.sessions[this.indexOfCurrentRowSelected].highlight = true;

  }

  customActionEventsTriggeredInSessionsTable(data: { action: string, data: ISessionItem, source: any }) {
    if (data.action === 'download') {
      /*download the conversation for the record*/
      this.loadSessionById(data.data.id)
        .subscribe((value: any) => {
          let dataToDownload = value.objects;
          if (dataToDownload.length === 0) {
            dataToDownload = [{name:'No Data'}];
            this.utilityService.downloadArrayAsCSV(dataToDownload, {name:'No Data'});
          }else {
            this.utilityService.downloadArrayAsCSV(dataToDownload);
          }
        });

    }
    if (data.action === 'dcrypt') {
      /*use dcrypt api*/
    }
  }

  loadSessionById(id) {
    this.url = this.constantsService.getSessionsMessageUrl(id);
    return this.serverService.makeGetReq<{objects: ISessionItem[]}>({
      url: this.url,
      headerData: {'bot-access-token': this.bot.bot_access_token}
    });
  }

  performSearchInDbForSession(data){
    this.loadSessionById(data["Room ID"])
      .subscribe((value:{objects: ISessionItem[]})=>{

          this.sessions = [...this.sessions, ...value.objects];
      });
  }

}
