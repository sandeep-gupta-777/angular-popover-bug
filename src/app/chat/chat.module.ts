import {NgModule} from '@angular/core';
import {PreloadAllModules, Route, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ClickOutsideModule} from 'ng-click-outside';
import {ChatWrapperComponent} from './chat-wrapper.component';
import {MsToHhMmPipe} from '../ms-to-hh-mm.pipe';
import {ChatWindowComponent} from './rooms-and-convo-panel/chat-window.component';
import {ChatMessageComponent} from './rooms-and-convo-panel/chat-message-list/chat-message/chat-message.component';
import {ChatListComponent} from './rooms-and-convo-panel/chat-room-list/chat-list.component';
import {ChatItemComponent} from './rooms-and-convo-panel/chat-room-list/chat-item/chat-item.component';

import {BotThinkingBubbleComponent} from './carousel/bot-thinking-bubble/bot-thinking-bubble.component';
import {BotWelcomeComponent} from './bot-welcome-panel/bot-welcome.component';
import {RichMediaModule} from '../rich-media.module';
import {ServerService} from '../server.service';
import {ChatService} from '../chat.service';
import {MyMaterialModule} from '../my-material.module';
import {ChatConsumerFormComponent} from '../chat-consumer-form/chat-consumer-form.component';
import {SharedModule} from '../shared.module';
import {LinkPreviewComponent} from './link-preview/link-preview.component';
import {ConstantsService} from '../constants.service';
import {MyToasterService} from '../my-toaster.service';
import {UtilityService} from '../utility.service';
import {StoreVariableService} from '../core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/store--variable.service';
import {NgxsModule} from '@ngxs/store';
import {VersionStateReducer} from '../core/buildbot/build-code-based-bot/architecture/code/code-input/ngxs/code-input.state';
import {ReducerListService} from '../reducer-list.service';
import {ChatSessionStateReducer} from './ngxs/chat.state';
import {LayoutModule} from '@angular/cdk/layout';
import {ChatBotThinkingComponent} from './rooms-and-convo-panel/chat-message-list/chat-message/chat-bot-thinking/chat-bot-thinking.component';
import {FilePreviewOverlayService} from '../overlay.service';
import {OverlayModule} from '@angular/cdk/overlay';
import {HnResolver} from '../core.resolver';

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
    BotThinkingBubbleComponent,
    BotWelcomeComponent,
    LinkPreviewComponent,
    ChatBotThinkingComponent,
  ],
  entryComponents: [
    ChatConsumerFormComponent
  ],
  imports: [
    CommonModule,
    RichMediaModule,
    RouterModule.forChild(routes), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    FormsModule,
    HttpClientModule,
    ClickOutsideModule,
    MyMaterialModule,
    NgxsModule.forFeature([ChatSessionStateReducer]),
    SharedModule, // TODO: remove this later, this is here because of ChatFeedbackComponent and MsToHhMmPipe,
    LayoutModule,
    OverlayModule

  ],
  exports: [
    ChatWrapperComponent,
    ChatConsumerFormComponent,
    ChatWindowComponent,
    ChatMessageComponent,
    ChatListComponent,
    ChatItemComponent,
    BotThinkingBubbleComponent,
    BotWelcomeComponent,

  ],
  providers: [
    DatePipe,
    StoreVariableService,
    UtilityService,
    MyToasterService,
    ConstantsService,
    ServerService,
    ChatService,
    FilePreviewOverlayService
  ],
})
export class ChatModule {

}
