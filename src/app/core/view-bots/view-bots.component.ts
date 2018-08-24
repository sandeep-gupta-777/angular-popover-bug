import {Component, OnInit, TemplateRef} from '@angular/core';
import {Observable} from 'rxjs';
import {ServerService} from '../../server.service';
import {ConstantsService} from '../../constants.service';
import {IBot} from '../interfaces/IBot';
import {IHeaderData} from '../../../interfaces/header-data';
import {Store} from '@ngxs/store';
import {SetCodeBasedBotListAction, SetPipeLineBasedBotListAction} from './ngxs/view-bot.action';
import {Router} from '@angular/router';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-view-bots',
  templateUrl: './view-bots.component.html',
  styleUrls: ['./view-bots.component.scss']
})
export class ViewBotsComponent implements OnInit {

  botList$: Observable<IBot[]>;
  activeTab:string = "codebased";
  modalRef: BsModalRef;

  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private router: Router,
    private modalService: BsModalService,
    private store: Store) {
  }

  ngOnInit() {


    this.serverService.getNSetIntegrationList()
    this.serverService.getNSetBotList()
      .subscribe(()=>{
      })
  }

  openCreateBotModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
  }

  navigate(arr){
    this.modalRef.hide();
    this.router.navigate(arr);
  }
}
