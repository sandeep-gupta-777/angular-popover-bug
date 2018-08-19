import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Store, Select} from '@ngxs/store';
import {IConsumer} from '../../../../interfaces/consumer';
import {ServerService} from '../../../server.service';
import {Observable} from 'rxjs';
import {ConstantsService} from '../../../constants.service';
import {ISessionItem, ISessions} from '../../../../interfaces/sessions';
import {of} from 'rxjs';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {IBot} from '../../interfaces/IBot';
import {SmartTableComponent} from '../../../smart-table/smart-table.component';

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
  smartTableSettings_Sessions;
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

    this.smartTableSettings_Sessions = this.constantsService.SMART_TABLE_SESSIONS_SETTING;
  }

  /*todo: implement it better way*/
  refreshSession() {
    this.refreshSessions$ = this.serverService.makeGetReq<ISessions>({url: this.url});
    this.refreshSessions$.subscribe((value) => {
      this.sessions$ = of(value);
    });
  }

  goToReportEditComponent($event, template) {
    debugger;
    this.selectedRow_Session = $event.data;
    this.indexOfCurrentRowSelected = this.sessions.findIndex((session) => {
      return this.selectedRow_Session.id === session.id;
    });
    this.openModal(template);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }

  sessionTablePageChanged(pageNumber) {

    this.pageNumberOfCurrentRowSelected = pageNumber;
    this.url = this.constantsService.getBotSessionsUrl(10, (pageNumber - 1) * 10);
    this.serverService.makeGetReq<ISessions>({url: this.url})
      .subscribe((value) => {
        this.totalSessionRecords = value.meta.total_count;
        this.selectedRow_Session = value.objects[this.selectedRow_number || 0];
        ;
        this.sessions = value.objects;
      });
  }

  selectNextRow() {
    debugger;
    // this.selectedRow_Session


    let currentIndex = this.sessions.findIndex((session) => {
      return this.selectedRow_Session.id === session.id;
    });
    if (currentIndex <= this.sessions.length - 2) {
      this.selectedRow_Session = this.sessions[++currentIndex];
      this.indexOfCurrentRowSelected = currentIndex;

    }
    else {
      // debugger;
      this.smartTableComponent.goToNextPage();
      this.selectedRow_number = 0;
      this.indexOfCurrentRowSelected = 0;
    }
  }

  selectPrevRow() {
    debugger;
    let currentIndex = this.sessions.findIndex((session) => {
      return this.selectedRow_Session.id === session.id;
    });

    this.indexOfCurrentRowSelected = currentIndex;

    if (currentIndex >= 1) {
      this.selectedRow_Session = this.sessions[--currentIndex];
      this.indexOfCurrentRowSelected = currentIndex;
    }
    else {
      debugger;
      this.smartTableComponent.goToPrevPage();
      this.selectedRow_number = 9;
      this.indexOfCurrentRowSelected = 9;
    }
  }

}
