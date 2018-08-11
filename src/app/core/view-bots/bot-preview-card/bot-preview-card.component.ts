import {Component, ElementRef, Input, OnInit, TemplateRef} from '@angular/core';
import {Observable} from 'rxjs';
import {IBot} from '../../interfaces/IBot';
import {UtilityService} from '../../../utility.service';
import {ChatService} from '../../../chat.service';
import {EChatFrame} from '../../../../interfaces/chat-session-state';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Router} from '@angular/router';
import {Store} from '@ngxs/store';
import {ChangeFrameAction, SetCurrentBotID, ToggleChatWindow} from '../../../chat/ngxs/chat.action';

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
  constructor(
    private utilityService:UtilityService,
    private chatService:ChatService,
    private modalService: BsModalService,
    public router: Router,
    public store: Store
  ) { }

  ngOnInit() {}

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
  }



}
