import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../chat.service';

@Component({
  selector: 'app-chat-know-more-panel',
  template: `
    <div
      class="chat-img-overlay">
      <span class="fa fa-times close-chat-img-overlay"></span>
      <div class="chat-know-more-overlay" (click)="$event.stopPropagation()">

        <header class="chat-know-more-overlay-header">
          <div class="description-top" style="text-align: center">This bot was built using</div>
          <div><img src="assets/img/IMI_logo.png" alt=""></div>
          <strong class="description-bottom">The enterprise bot building platform to automate conversations</strong>
        </header>

        <div class="chat-know-more-overlay-item" *ngFor="let item of knowMorePanelItems">
          <img [src]="item.imgUrl" alt="">
          <div>
            {{item.title}}
          </div>
        </div>

        <a href="https://imimobile.com/products/ai-automation" target="_blank"><button mat-flat-button color="primary"> Know more</button></a>

      </div>
    </div>

  `,
  styleUrls: ['chat-know-more-panel.component.scss']
})
export class ChatKnowMorePanelComponent implements OnInit {
  knowMorePanelItems = ChatService.knowMorePanelItems;
  constructor() { }

  ngOnInit() {
  }

}
