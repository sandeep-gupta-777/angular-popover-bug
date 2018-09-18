import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PreloadAllModules, Route, RouterModule} from '@angular/router';
import {BsDropdownModule, CarouselModule, ProgressbarModule} from 'ngx-bootstrap';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {HttpClientModule} from '@angular/common/http';
import {AppStateReducer} from './ngxs/app.state';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {ServerService} from './server.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {NgxsModule} from '@ngxs/store';
import {NotFoundComponent} from './core/not-found/not-found.component';
import {DragService} from './drag.service';
import {AuthStateReducer} from './auth/ngxs/auth.state';
import {EnterpriseprofileStateReducer} from './core/enterpriseprofile/ngxs/enterpriseprofile.state';
import {ViewBotStateReducer} from './core/view-bots/ngxs/view-bot.state';
import {ChatSessionStateReducer} from './chat/ngxs/chat.state';
import {BotCreationStateReducer} from './core/buildbot/ngxs/buildbot.state';
import {AnalysisStateReducer2} from './core/analysis2/ngxs/analysis.state';

import {ReportsStateReducer} from './core/reports/ngxs/reports.state';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {AuthGaurdService} from './auth-gaurd.service';
import {DatePipe} from '@angular/common';
import {LoginGaurdService} from './login-gaurd.service';
import {NotAuthorisedComponent} from './not-authorised/not-authorised.component';
import {ChatWrapperComponent} from './chat/chat-wrapper.component';
import {ChatroomComponent} from './chat/rooms-and-convo-panel/chat-message-list/chatroom.component';
import {ChatItemComponent} from './chat/rooms-and-convo-panel/chat-room-list/chat-item/chat-item.component';
import {ChatListComponent} from './chat/rooms-and-convo-panel/chat-room-list/chat-list.component';
import {ChatMessageComponent} from './chat/rooms-and-convo-panel/chat-message-list/chat-message/chat-message.component';
import {ChatWindowComponent} from './chat/rooms-and-convo-panel/chat-window.component';
import {FormsModule} from '@angular/forms';
import {BotWelcomeComponent} from './chat/bot-welcome-panel/bot-welcome.component';
import {QuickReplyComponent} from './chat/carousel/quick-reply/quick-reply.component';
import {CardCarouselComponent} from './chat/carousel/card-carousel/card-carousel.component';
import {ClickOutsideModule} from 'ng2-click-outside';
// import {CodeEditorComponent} from './core/buildbot/build-code-based-bot/architecture/code/code-editor/code-editor.component';

const routes: Route[] = [
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  {path: 'core', loadChildren: './core/core.module#CoreModule', canLoad:[AuthGaurdService]},
  {path: '', redirectTo:"core/viewbots/chatbot", pathMatch:"full"},
  {path: 'preview/:id', component: ChatWrapperComponent, data: {isFullScreenPreview: true}},
  {path: 'denied', component: NotAuthorisedComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NotAuthorisedComponent,
    // ChatWrapperComponent
    ChatWrapperComponent,
    ChatWindowComponent,
    ChatMessageComponent,
    ChatListComponent,
    ChatItemComponent,
    ChatroomComponent,
    BotWelcomeComponent,
    CardCarouselComponent,
    QuickReplyComponent,
    // CodeEditorComponent
  ],
  imports: [
    CarouselModule.forRoot(),
    // BrowserModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    // BsDropdownModule.forRoot(),
    // TabsModule.forRoot(),
    // AceEditorModule,
    // UiSwitchModule,
    FormsModule,
    // DragAndDropModule.forRoot(),
    // ChartModule,asdsads
    NgxsModule.forRoot([
      AuthStateReducer,
      AppStateReducer,
      EnterpriseprofileStateReducer,
      ViewBotStateReducer,
      ChatSessionStateReducer,
      BotCreationStateReducer,
      AnalysisStateReducer2,
      ReportsStateReducer,
    ]),
    NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    HttpClientModule,
    ClickOutsideModule,
    // DragulaModule,
    // HotTableModule,
    // Ng2CompleterModule,
    // Ng2SmartTableModule,
    // BsDatepickerModule.forRoot(),
    // ModalModule.forRoot(),
    // TooltipModule.forRoot(),
    // BrowserAnimationsModule, // required animations module
    // ToastrModule.forRoot(), // ToastrModule added,
    ProgressbarModule.forRoot(),
    // ClickOutsideModule,
    //
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot(), // ToastrModule added,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
    /*custom modules*/
    // AuthModule,
    // CoreModule

  ],
  providers: [ServerService, DragService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {

}
