import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {IBot} from '../../interfaces/IBot';
import {ServerService} from '../../../server.service';
import {Store} from '@ngxs/store';
import {ConstantsService, ETabNames} from '../../../constants.service';
import {IHeaderData} from '../../../../interfaces/header-data';
import {UtilityService} from '../../../utility.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ChangeFrameAction, SetCurrentBotDetailsAndResetChatStateIfBotMismatch, ToggleChatWindow} from '../../../chat/ngxs/chat.action';
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
  myETabNames = ETabNames;
  showSpinIcon =false;
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
      new SetCurrentBotDetailsAndResetChatStateIfBotMismatch({
        bot:this.bot
      }),
      new ToggleChatWindow({open: true}),
      new ChangeFrameAction({frameEnabled: EChatFrame.WELCOME_BOX})
    ]);
  }

  updateBot() {

    let bot = this.utilityService.performFormValidationBeforeSaving(this.bot);
    if(!bot) return;

    let url = this.constantsService.updateBotUrl(this.bot.id);
    let headerData: IHeaderData = {
      'bot-access-token': this.bot.bot_access_token
    };
    if(this.bot.store_selected_version && this.bot.store_selected_version!== this.bot.active_version_id){
      if(!confirm("active version has been changed")) return;
      this.bot.active_version_id = this.bot.store_selected_version;
    }
    let body = this.constantsService.updateBotSerializer(this.bot);
    if(!body.logo){
      body.logo = 'https://imibot-dev.s3.amazonaws.com/default/defaultbotlogo.png';
    }
    this.serverService.makePutReq({url, body, headerData})
      .subscribe((updatedBot:IBot) => {
        this.store.dispatch([
          new UpdateBotInfoByIdInBotInBotList({botId:this.bot.id, data:updatedBot})
        ]);
        this.utilityService.showSuccessToaster("Bot updated");
      });
  }

  refreshBotDetails() {
    this.showSpinIcon =true;
    setTimeout(()=>{
     this.showSpinIcon = false;
    },2000);
    this.refreshBotDetails$.emit()
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
            this.router.navigate(['']);
            this.utilityService.showSuccessToaster("Bot deleted");
          })
      })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,{class: 'center-modal'});
  }
}
