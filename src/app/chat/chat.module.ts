import {NgModule} from '@angular/core';
import {PreloadAllModules, Route, RouterModule} from '@angular/router';
import {BsDropdownModule, CarouselModule, ProgressbarModule} from 'ngx-bootstrap';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {HttpClientModule} from '@angular/common/http';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {NgxsModule} from '@ngxs/store';
import { ServiceWorkerModule } from '@angular/service-worker';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ClickOutsideModule} from 'ng2-click-outside';
import {AuthGaurdService} from '../auth-gaurd.service';
import {ChatWrapperComponent} from './chat-wrapper.component';
import {NotAuthorisedComponent} from '../not-authorised/not-authorised.component';
import {NotFoundComponent} from '../core/not-found/not-found.component';
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
import {SharedModule} from "../shared.module";

const routes: Route[] = [
  // {path: 'preview',outlet: 'preview', component: ChatWrapperComponent},
  {path: '', component: ChatWrapperComponent, data: {isFullScreenPreview: true}},
];

@NgModule({
  declarations: [
    // MsToHhMmPipe,
    ChatWrapperComponent,
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
    CarouselModule.forRoot(),
    RichMediaModule,
    RouterModule.forChild(routes), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    FormsModule,
    HttpClientModule,
    ClickOutsideModule,
    BsDropdownModule.forRoot(),
    SharedModule
    // ToastrModule.forRoot(), // ToastrModule added,
  ],
  exports: [
    // MsToHhMmPipe,
    ChatWrapperComponent,
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
