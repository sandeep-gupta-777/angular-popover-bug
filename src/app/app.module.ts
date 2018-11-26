import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PreloadAllModules, Route, RouterModule} from '@angular/router';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {HttpClientModule} from '@angular/common/http';
import {AppStateReducer} from './ngxs/app.state';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {ServerService} from './server.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import {AuthGaurdService} from './auth-gaurd.service';
import {DatePipe} from '@angular/common';
import {LoginGaurdService} from './login-gaurd.service';
import {NotAuthorisedComponent} from './not-authorised/not-authorised.component';
import {BotWelcomeComponent} from './chat/bot-welcome-panel/bot-welcome.component';
import {QuickReplyComponent} from './chat/carousel/quick-reply/quick-reply.component';
import {CardCarouselComponent} from './chat/carousel/card-carousel/card-carousel.component';
import {BotThinkingBubbleComponent} from './chat/carousel/bot-thinking-bubble/bot-thinking-bubble.component';
import {RichMediaModule} from './rich-media.module';
import {FilterArrayPipe} from './filter-array.pipe';
import {MsToHhMmPipe} from './ms-to-hh-mm.pipe';
import {BackendDevComponent} from './backend-dev/backend-dev.component';
import {ChatService} from './chat.service';
import {ObjectArrayCrudService} from './object-array-crud.service';
import {SplashScreenComponent} from './splash-screen/splash-screen.component';
import {ThemeComponent} from './theme/theme.component';
import {BrowserModule, SafeHtml} from '@angular/platform-browser';
import {SafeUrlPipe} from './href-sanitizer.pipe';
import {
  MatButtonModule,
  MatCommonModule,
  MatInputModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSnackBar,
  MatSnackBarModule
} from '@angular/material';
import {ClickOutsideModule} from 'ng-click-outside';
// import {CodeEditorComponent} from './core/buildbot/build-code-based-bot/architecture/code/code-editor/code-editor.component';

const routes: Route[] = [
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  {path: 'core', loadChildren: './core/core.module#CoreModule', canLoad: [AuthGaurdService]},
  {path: 'preview', loadChildren: './chat/chat.module#ChatModule'},
  {path: 'denied', component: NotAuthorisedComponent},
  {path: 'theme', component: ThemeComponent},
  {path: '', redirectTo: 'core/viewbots', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    NotFoundComponent,
    NotAuthorisedComponent,
    FilterArrayPipe,
    BackendDevComponent,
  ],
  imports: [
    // RichMediaModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    // FormsModule,
    // MatCommonModule,
    // MatButtonModule,
    // MatInputModule,
    // MatSelectModule,
    // ReactiveFormsModule,
    BrowserAnimationsModule ,
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
    // NgxsReduxDevtoolsPluginModule.forRoot(),//Comment this before pushing to git
    NgxsLoggerPluginModule.forRoot({disabled: true}), //disable for prod mode
    HttpClientModule,
    // ClickOutsideModule,
    MatSnackBarModule,
    // BrowserAnimationsModule,
    MatProgressBarModule,
    // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
    ServiceWorkerModule.register('/static/ngsw-worker.js')

  ],
  providers: [ServerService, DragService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {

}
