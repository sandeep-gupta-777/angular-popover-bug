import {Component, OnInit, TemplateRef} from '@angular/core';
import {Observable} from 'rxjs';
import {ServerService} from '../../server.service';
import {ConstantsService, EAllActions} from '../../constants.service';
import {IBot} from '../interfaces/IBot';
import {IHeaderData} from '../../../interfaces/header-data';
import {Store} from '@ngxs/store';
import {SetCodeBasedBotListAction, SetPipeLineBasedBotListAction} from './ngxs/view-bot.action';
import {ActivatedRoute, Router} from '@angular/router';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BsModalService} from 'ngx-bootstrap/modal';

export enum EBotType {
  chatbot = 'chatbot',
  intelligent = 'intelligent'
}

@Component({
  selector: 'app-view-bots',
  templateUrl: './view-bots.component.html',
  styleUrls: ['./view-bots.component.scss']
})
export class ViewBotsComponent implements OnInit {

  myEBotType = EBotType;
  botList$: Observable<IBot[]>;
  activeTab: string = EBotType.chatbot;
  modalRef: BsModalRef;
  myEAllActions = EAllActions;

  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService,
    private store: Store) {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    // this.serverService.getNSetIntegrationList();
    this.serverService.getNSetBotList()
      .subscribe(() => {
        console.log('bot list fetched from view bots page');
      });
  }

  openCreateBotModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
  }

  navigate(bot_type) {
    this.modalRef.hide();
    this.router.navigate(['core', 'buildbot'], {queryParams: {bot_type: bot_type}});
  }
}
