import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IBot} from '../../interfaces/IBot';
import {UtilityService} from '../../../utility.service';
import {ChatService} from '../../../chat.service';
import {EChatFrame} from '../../../../interfaces/chat-session-state';

@Component({
  selector: 'app-bot-preview-card',
  templateUrl: './bot-preview-card.component.html',
  styleUrls: ['./bot-preview-card.component.scss']
})
export class BotPreviewCardComponent implements OnInit {

  @Input() bot: IBot;
  constructor(private utilityService:UtilityService, private chatService:ChatService) { }

  ngOnInit() {}

  copy(text:string,element){
    this.utilityService.copyToClipboard(text);
    setTimeout(()=>{element.hide()},1000);
  }

  openBot(){
    this.chatService.startNewChat({token:this.bot.token,_id:this.bot._id},"delhi",  EChatFrame.CHAT_BOX);
  }



}
