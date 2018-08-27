import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {IBot} from '../../interfaces/IBot';
import {ServerService} from '../../../server.service';
import {Store} from '@ngxs/store';
import {ConstantsService} from '../../../constants.service';
import {IHeaderData} from '../../../../interfaces/header-data';
import {UtilityService} from '../../../utility.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-bot-detail-header',
  templateUrl: './bot-detail-header.component.html',
  styleUrls: ['./bot-detail-header.component.scss']
})
export class BotDetailHeaderComponent implements OnInit {

  @Input() bot: IBot;
  myObject = Object;
  @Output() refreshBotDetails$ = new EventEmitter();
  modalRef: BsModalRef;


  constructor(
    private store: Store,
    private serverService: ServerService,
    public utilityService: UtilityService,
    private modalService: BsModalService,
    private constantsService: ConstantsService) {
  }

  ngOnInit() {
  }

  updateBot() {
    let url = this.constantsService.updateBotUrl(this.bot.id);
    let headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    let body = this.constantsService.updateBotSerializer(this.bot);
    this.serverService.makePutReq({url, body, headerData})
      .subscribe((value) => {
        this.utilityService.showSuccessToaster("Bot Successfully updated!");
      });
  }

  refreshBotDetails() {

  }

  deleteBot(){
    this.modalRef.hide();
    let url = this.constantsService.getDeleteBotUrl(this.bot.id);
    let headerData:IHeaderData = {
      "bot-access-token": this.bot.bot_access_token
    };
    this.serverService.makeDeleteReq({url, headerData})
      .subscribe((value)=>{
        this.serverService.getNSetBotList()
          .subscribe(()=>{
          })
      })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
}
