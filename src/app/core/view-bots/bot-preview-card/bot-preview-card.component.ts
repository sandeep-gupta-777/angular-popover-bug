import {Component, ElementRef, Input, OnInit, TemplateRef} from '@angular/core';
import {Observable} from 'rxjs';
import {IBot} from '../../interfaces/IBot';
import {UtilityService} from '../../../utility.service';
import {ChatService} from '../../../chat.service';
import {EChatFrame} from '../../../../interfaces/chat-session-state';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Router} from '@angular/router';

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
    public router: Router
  ) { }

  ngOnInit() {}

  copy(text:string,element){
    this.utilityService.copyToClipboard(text);
    setTimeout(()=>{element.hide()},1000);
  }

  openBot(){
    this.chatService.startNewChat({token:this.bot.bot_access_token,id:this.bot.id},"delhi",  EChatFrame.CHAT_BOX);//comperror:
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  deleteBot(){
    this.modalRef.hide()
  }



}
