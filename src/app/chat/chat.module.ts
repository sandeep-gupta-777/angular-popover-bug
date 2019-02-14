import {NgModule} from '@angular/core';
import {PreloadAllModules, Route, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ClickOutsideModule} from 'ng-click-outside';
import {ChatWrapperComponent} from './chat-wrapper.component';;
import {MsToHhMmPipe} from '../ms-to-hh-mm.pipe';
import {ChatWindowComponent} from './rooms-and-convo-panel/chat-window.component';
import {ChatMessageComponent} from './rooms-and-convo-panel/chat-message-list/chat-message/chat-message.component';
import {ChatListComponent} from './rooms-and-convo-panel/chat-room-list/chat-list.component';
import {ChatItemComponent} from './rooms-and-convo-panel/chat-room-list/chat-item/chat-item.component';
import {ChatroomComponent} from './rooms-and-convo-panel/chat-message-list/chatroom.component';
import {BotThinkingBubbleComponent} from './carousel/bot-thinking-bubble/bot-thinking-bubble.component';
import {BotWelcomeComponent} from './bot-welcome-panel/bot-welcome.component';
import {RichMediaModule} from '../rich-media.module';
import {ServerService} from '../server.service';
import {ChatService} from '../chat.service';
import {MyMaterialModule} from '../my-material.module';
import {ChatConsumerFormComponent} from '../chat-consumer-form/chat-consumer-form.component';
import {SharedModule} from '../shared.module';
import {ChatFeedbackComponent} from '../chat-feedback/chat-feedback.component';

const routes: Route[] = [
  // {path: 'preview',outlet: 'preview', component: ChatWrapperComponent},
  {path: '', component: ChatWrapperComponent, data: {isFullScreenPreview: true}},
];

@NgModule({
  declarations: [
    ChatWrapperComponent,
    ChatConsumerFormComponent,
    ChatWindowComponent,
    ChatMessageComponent,
    ChatListComponent,
    ChatItemComponent,
    ChatroomComponent,
    BotThinkingBubbleComponent,
    BotWelcomeComponent,
  ],
  imports: [
    CommonModule,
    RichMediaModule,
    RouterModule.forChild(routes), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    FormsModule,
    HttpClientModule,
    ClickOutsideModule,
    MyMaterialModule,
    SharedModule//TODO: remove this later, this is here because of ChatFeedbackComponent

  ],
  exports: [
    ChatWrapperComponent,
    ChatConsumerFormComponent,
    ChatWindowComponent,
    ChatMessageComponent,
    ChatListComponent,
    ChatItemComponent,
    ChatroomComponent,
    BotThinkingBubbleComponent,
    BotWelcomeComponent,
  ],
  providers: [DatePipe, ChatService],
})
export class ChatModule {

}
