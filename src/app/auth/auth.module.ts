import {LoginComponent} from './login/login.component';
import {Route, RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {TabsModule} from 'ngx-bootstrap';
import {UiSwitchModule} from 'ngx-toggle-switch';
import {FormsModule} from '@angular/forms';
import {AuthStateReducer} from './ngxs/auth.state';
import {NavigationStateReducer} from '../ngxs/navigation.state';
import {AppStateReducer} from '../ngxs/app.state';
import {EnterpriseprofileStateReducer} from '../core/enterpriseprofile/ngxs/enterpriseprofile.state';
import {ViewBotStateReducer} from '../core/view-bots/ngxs/view-bot.state';
import {ChatSessionStateReducer} from '../chat/ngxs/chat.state';
import {BotCreationStateReducer} from '../core/buildbot/ngxs/buildbot.state';
import {AnalysisStateReducer} from '../core/analysis/ngxs/analysis.state';
import {ReportsStateReducer} from '../core/reports/ngxs/reports.state';
import {AnalysisStateReducer2} from '../core/analysis2/ngxs/analysis.state';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {HttpClientModule} from '@angular/common/http';
import {NgxsModule} from '@ngxs/store';
import {AppComponent} from '../app.component';
import {NgModule} from '@angular/core';
import {AuthWrapperComponent} from './auth-wrapper.component';

const routes: Route[] = [
  {
    path: 'auth', component: AuthWrapperComponent, children: [
      {path: 'login', component: LoginComponent},
    ]
  },
];

@NgModule({
  declarations: [
    LoginComponent,
    AuthWrapperComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    TabsModule.forRoot(),
    UiSwitchModule,
    FormsModule,
    NgxsModule.forFeature([
      AuthStateReducer,
      NavigationStateReducer,
      AppStateReducer,
      EnterpriseprofileStateReducer,
      ViewBotStateReducer,
      ChatSessionStateReducer,
      BotCreationStateReducer,
      AnalysisStateReducer,
      ReportsStateReducer,
      AnalysisStateReducer2
    ]),
    NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AuthModule {

}
