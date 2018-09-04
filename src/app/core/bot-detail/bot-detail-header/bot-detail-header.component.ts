import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {IBot} from '../../interfaces/IBot';
import {ServerService} from '../../../server.service';
import {Store} from '@ngxs/store';
import {ConstantsService} from '../../../constants.service';
import {IHeaderData} from '../../../../interfaces/header-data';
import {UtilityService} from '../../../utility.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ChangeFrameAction, SetCurrentBotID, ToggleChatWindow} from '../../../chat/ngxs/chat.action';
import {EChatFrame} from '../../../../interfaces/chat-session-state';
import {AddNewBotInAllBotList, UpdateBotInfoByIdInBotInBotList} from '../../view-bots/ngxs/view-bot.action';
import {Router} from '@angular/router';

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
    private router: Router,
    public utilityService: UtilityService,
    private modalService: BsModalService,
    private constantsService: ConstantsService) {
  }

  ngOnInit() {
  }
  openBot() {
    this.store.dispatch([
      new SetCurrentBotID({bot_id: this.bot.id, bot: this.bot}),
      new ToggleChatWindow({open: true}),
      new ChangeFrameAction({frameEnabled: EChatFrame.WELCOME_BOX})
    ]);
  }

  updateBot() {
    debugger;
    let url = this.constantsService.updateBotUrl(this.bot.id);
    let headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    if(this.bot.store_selected_version!== this.bot.active_version_id){
      if(!confirm("active version has been changed")) return;
      this.bot.active_version_id = this.bot.store_selected_version;
    }
    let body = this.constantsService.updateBotSerializer(this.bot);
    this.serverService.makePutReq({url, body, headerData})
      .subscribe((updatedBot:IBot) => {
        debugger;
        this.store.dispatch([
          new UpdateBotInfoByIdInBotInBotList({botId:this.bot.id, data:updatedBot})
        ]);
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
            this.router.navigate(['/core/viewbots/codebased']);
            this.utilityService.showSuccessToaster("Bot Successfully deleted");
          })
      })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
}
