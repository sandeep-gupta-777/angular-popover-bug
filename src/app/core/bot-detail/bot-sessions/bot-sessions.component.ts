import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Store} from '@ngxs/store';
import {IConsumer} from '../../../../interfaces/consumer';
import {ServerService} from '../../../server.service';
import {Observable} from 'rxjs';
import {ConstantsService} from '../../../constants.service';
import {ISessionItem, ISessions} from '../../../../interfaces/sessions';
import { of } from 'rxjs';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-bot-sessions',
  templateUrl: './bot-sessions.component.html',
  styleUrls: ['./bot-sessions.component.scss']
})
export class BotSessionsComponent implements OnInit {


  @Input() id: string;
  sessions$: Observable<ISessions>;
  refreshSessions$: Observable<ISessions>;
  url:string;
  modalRef: BsModalRef;
  smartTableSettings_Sessions;
  selectedRow_Session:ISessionItem;

  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private store: Store,
    private modalService: BsModalService
  ) {  }

  ngOnInit() {
    this.url = this.constantsService.getBotSessionsUrl(this.id,1,10);
    this.sessions$ = this.serverService.makeGetReq<ISessions>({url:this.url});
    this.smartTableSettings_Sessions = this.constantsService.SMART_TABLE_SESSIONS_SETTING;
  }

  /*todo: implement it better way*/
  refreshSession(){
    this.refreshSessions$ = this.serverService.makeGetReq<ISessions>({url:this.url});
    this.refreshSessions$.subscribe((value)=>{
      this.sessions$ = of(value);
    })
  }

  goToReportEditComponent($event, template){
    console.log($event);
    this.selectedRow_Session = $event.data;
    this.openModal(template);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
