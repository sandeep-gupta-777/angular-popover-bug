import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {IBot} from '../../interfaces/IBot';
import {ServerService} from '../../../server.service';
import {Select, Store} from '@ngxs/store';
import {ConstantsService, ETabNames} from '../../../constants.service';
import {IHeaderData} from '../../../../interfaces/header-data';
import {UtilityService} from '../../../utility.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ChangeFrameAction, SetCurrentBotDetailsAndResetChatStateIfBotMismatch, ToggleChatWindow} from '../../../chat/ngxs/chat.action';
import {EChatFrame} from '../../../../interfaces/chat-session-state';
import {AddNewBotInAllBotList, UpdateBotInfoByIdInBotInBotList} from '../../view-bots/ngxs/view-bot.action';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {IEnterpriseProfileInfo} from '../../../../interfaces/enterprise-profile';

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
  enterprise_unique_name;
  @Select() loggeduserenterpriseinfo$: Observable<IEnterpriseProfileInfo>;

  constructor(
    private store: Store,
    private serverService: ServerService,
    private router: Router,
    public utilityService: UtilityService,
    private modalService: BsModalService,
    private constantsService: ConstantsService) {
  }

  ngOnInit() {
    this.loggeduserenterpriseinfo$.subscribe((enterpriseProfileInfo) => {
      this.enterprise_unique_name = enterpriseProfileInfo.enterprise_unique_name;
    });
  }

  openBot() {
    this.store.dispatch([
      new SetCurrentBotDetailsAndResetChatStateIfBotMismatch({
        bot:{...this.bot,enterprise_unique_name:this.enterprise_unique_name}
      }),
      new ToggleChatWindow({open: true}),
      new ChangeFrameAction({frameEnabled: EChatFrame.WELCOME_BOX})
    ])
    // this.store.dispatch([
    //   // new SetCurrentBotDetailsAndResetChatStateIfBotMismatch({
    //   //   bot:this.bot
    //   // }),
    //   new ToggleChatWindow({open: true}),
    //   // new ChangeFrameAction({frameEnabled: EChatFrame.WELCOME_BOX})
    // ]).subscribe(()=>{
    //   this.router.navigate(['/core/botdetail/chatbot/',this.bot.id], {
    //     queryParams: {preview: true, bot_unique_name: this.bot.bot_unique_name, enterprise_unique_name: this.enterprise_unique_name}
    //   });
    // })
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
        this.utilityService.showSuccessToaster("Bot Successfully updated!");
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
            this.utilityService.showSuccessToaster("Bot Successfully deleted");
          })
      })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,{class: 'center-modal'});
  }
}
