import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Store} from '@ngxs/store';
import {IConsumer} from '../../../../interfaces/consumer';
import {ServerService} from '../../../server.service';
import {Observable} from 'rxjs';
import {ConstantsService} from '../../../constants.service';
import {ISessionItem, ISessions} from '../../../../interfaces/sessions';
import { of } from 'rxjs';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import { IBot } from '../../interfaces/IBot';

@Component({
  selector: 'app-bot-sessions',
  templateUrl: './bot-sessions.component.html',
  styleUrls: ['./bot-sessions.component.scss']
})
export class BotSessionsComponent implements OnInit {


  @Input() id: string;
  @Input() bot: IBot;
  sessions$: Observable<ISessions>;
  refreshSessions$: Observable<ISessions>;
  url:string;
  modalRef: BsModalRef;
  smartTableSettings_Sessions;
  selectedRow_Session:ISessionItem;
  totalSessionRecords:number = 0;
  sessions:ISessionItem[];

  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private store: Store,
    private modalService: BsModalService
  ) {  }

  ngOnInit() {
    this.url = this.constantsService.getBotSessionsUrl(5,0);
    this.sessions$ = this.serverService.makeGetReq<ISessions>({url:this.url,headerData:{"bot-access-token":this.bot.bot_access_token}});
    this.sessions$.subscribe((value) =>{
      if(!value) return;
      this.totalSessionRecords = value.meta.total_count;
      this.sessions = value.objects;
      console.log("sdasdasdasdasdasdasd"+this.sessions+"sdasdasdasdasdasdasd");
    });

    this.smartTableSettings_Sessions = this.constantsService.SMART_TABLE_SESSIONS_SETTING;
    // debugger;
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
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }
  sessionTablePageChanged(pageNumber){

    this.url = this.constantsService.getBotSessionsUrl(5,0);
    this.serverService.makeGetReq<ISessions>({url:this.url})
      .subscribe((value) =>{
        this.totalSessionRecords = value.meta.total_count
        this.sessions = value.objects;
      });
  }

}
