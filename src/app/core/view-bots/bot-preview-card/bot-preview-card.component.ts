import {Component, ElementRef, Input, OnInit, TemplateRef} from '@angular/core';
import {Observable} from 'rxjs';
import {IBot} from '../../interfaces/IBot';
import {UtilityService} from '../../../utility.service';
import {ChatService} from '../../../chat.service';
import {EChatFrame} from '../../../../interfaces/chat-session-state';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngxs/store';
import {ChangeFrameAction, SetCurrentBotID, ToggleChatWindow} from '../../../chat/ngxs/chat.action';
import {ConstantsService} from '../../../constants.service';
import {ServerService} from '../../../server.service';
import {IHeaderData} from '../../../../interfaces/header-data';

@Component({
  selector: 'app-bot-preview-card',
  templateUrl: './bot-preview-card.component.html',
  styleUrls: ['./bot-preview-card.component.scss']
})
export class BotPreviewCardComponent implements OnInit {

  @Input() bot: IBot;
  modalRef: BsModalRef;
  myObject = Object;
  message: string;
  parentRoute:string;
  constructor(
    public utilityService:UtilityService,
    private chatService:ChatService,
    private modalService: BsModalService,
    private activatedRoute: ActivatedRoute,
    public router: Router,
    public constantsService: ConstantsService,
    public serverService: ServerService,
    public store: Store
  ) { }

  ngOnInit() {
    this.parentRoute = this.activatedRoute.snapshot.data.route;
  }

  copy(text:string,element){
    this.utilityService.copyToClipboard(text);
    setTimeout(()=>{element.hide()},1000);
  }

  openBot(){
    this.store.dispatch([
      new SetCurrentBotID({bot_id:this.bot.id, bot:this.bot}),
      new ToggleChatWindow({open:true}),
      new ChangeFrameAction({frameEnabled:EChatFrame.WELCOME_BOX})
    ]);
    // this.chatService.startNewChat({
    //   bot_access_token:this.bot.bot_access_token,
    //   id:this.bot.id
    // },"delhi",  EChatFrame.CHAT_BOX);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  deleteBot(){
    this.modalRef.hide()
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



}
