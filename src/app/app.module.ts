import {ApplicationRef, NgModule} from '@angular/core';
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
import {NotAuthorisedComponent} from './not-authorised/not-authorised.component';
import {FilterArrayPipe} from './filter-array.pipe';
import {BackendDevComponent} from './backend-dev/backend-dev.component';;
import {
  MatProgressBarModule,
  MatSnackBarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {AuthModule} from './auth/auth.module';
import {BotTestingComponent} from './core/bot-detail/bot-testing/bot-testing.component';
import {SharedModule} from './shared.module';
import {createInputTransfer, createNewHosts, removeNgStyles} from '@angularclass/hmr';
import {VersionStateReducer} from "./core/buildbot/build-code-based-bot/architecture/code/code-input/ngxs/code-input.state";

const routes: Route[] = [
  {path: 'dev', loadChildren: './dev/dev.module#DevModule',canLoad: []},
  // {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  {path: 'core', loadChildren: './core/core.module#CoreModule', canLoad: [AuthGaurdService]},
  {path: 'preview', loadChildren: './chat/chat.module#ChatModule'},
  {path: 'denied', component: NotAuthorisedComponent},
  {path: '', redirectTo: 'core/viewbots', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NotAuthorisedComponent,
    FilterArrayPipe,
    BackendDevComponent,

  ],
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
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
      VersionStateReducer,
    ]),
    NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),//Comment this before pushing to git
    NgxsLoggerPluginModule.forRoot({disabled: true}), //disable for prod mode
    HttpClientModule,
    MatSnackBarModule,
    MatProgressBarModule,
    AuthModule,
    // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
    ServiceWorkerModule.register('/static/ngsw-worker.js'),


    /**/
    FormsModule
  ],
  providers: [ServerService, DragService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    if (!store || !store.state) return;
    // console.log('HMR store', store);
    // console.log('store.state.data:', store.state.data)
    // inject AppStore here and update it
    // this.AppStore.update(store.state)
    if ('restoreInputValues' in store) {
      store.restoreInputValues();
    }
    // change detection
    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }
  hmrOnDestroy(store) {
    var cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // inject your AppStore and grab state then set it on store
    // var appState = this.AppStore.get()
    store.state = {data: 'yolo'};
    // store.state = Object.assign({}, appState)
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts()
    delete store.disposeOldHosts;
    // anything you need done the component is removed
  }
}
