import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PreloadAllModules, Route, RouterModule} from '@angular/router';
import { ProgressbarModule } from 'ngx-bootstrap';
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
import {NavigationStateReducer} from './ngxs/navigation.state';
import {EnterpriseprofileStateReducer} from './core/enterpriseprofile/ngxs/enterpriseprofile.state';
import {ViewBotStateReducer} from './core/view-bots/ngxs/view-bot.state';
import {ChatSessionStateReducer} from './chat/ngxs/chat.state';
import {BotCreationStateReducer} from './core/buildbot/ngxs/buildbot.state';
import {AnalysisStateReducer2} from './core/analysis2/ngxs/analysis.state';
import {ReportsStateReducer} from './core/reports/ngxs/reports.state';
// import {IntegrationLogosPipe} from './integration-logos.pipe';
// const routes: Route[] = []
const routes: Route[] = [
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  {path: 'core', loadChildren: './core/core.module#CoreModule'},
  {path: '', redirectTo:"core/viewbots/codebased", pathMatch:"full"},
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    // IntegrationLogosPipe
  ],
  imports: [
    // BrowserModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    // BsDropdownModule.forRoot(),
    // TabsModule.forRoot(),
    // AceEditorModule,
    // UiSwitchModule,
    // FormsModule,
    // DragAndDropModule.forRoot(),
    // ChartModule,
    NgxsModule.forRoot([
      AuthStateReducer,
      NavigationStateReducer,
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

    ToastrModule.forRoot(), // ToastrModule added,
    BrowserAnimationsModule
    /*custom modules*/
    // AuthModule,
    // CoreModule

  ],
  providers: [ServerService, DragService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
