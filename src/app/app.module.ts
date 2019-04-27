import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PreloadAllModules, Route, RouterModule} from '@angular/router';
import {NotFoundComponent} from './core/not-found/not-found.component';
import {NotAuthorisedComponent} from './not-authorised/not-authorised.component';
import {FilterArrayPipe} from './filter-array.pipe';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ServiceWorkerModule} from "@angular/service-worker";
import {environment} from "../environments/environment";
import {ModuleGaurdLoadService} from "./route-gaurds/module-gaurd-load.service";
import {NgxsModule} from "@ngxs/store";
import {LoginPageGaurdService} from "./route-gaurds/login-page.gaurd.service";
import {NgxsStoragePluginModule} from "@ngxs/storage-plugin";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {AuthStateReducer} from "./auth/ngxs/auth.state";
import {AppStateReducer} from "./ngxs/app.state";
import {EnterpriseprofileStateReducer} from "./core/enterpriseprofile/ngxs/enterpriseprofile.state";
import {ViewBotStateReducer} from "./core/view-bots/ngxs/view-bot.state";
import {ChatSessionStateReducer} from "./chat/ngxs/chat.state";
import {BotCreationStateReducer} from "./core/buildbot/ngxs/buildbot.state";
import {AnalysisStateReducer2} from "./core/analysis2/ngxs/analysis.state";
import {ReportsStateReducer} from "./core/reports/ngxs/reports.state";
import {VersionStateReducer} from "./core/buildbot/build-code-based-bot/architecture/code/code-input/ngxs/code-input.state";
import {UtilityService} from "./utility.service";
import {MatSnackBar, MatSnackBarModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ServerService} from "./server.service";
import {HttpClientModule} from "@angular/common/http";
import {CodeInputService} from "./core/buildbot/build-code-based-bot/architecture/code/code-input/code-input.service";
import {PermissionService} from "./permission.service";
import {ConstantsService} from "./constants.service";

const routes: Route[] = [
  {path: 'dev', loadChildren: './dev/dev.module#DevModule'},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule', canLoad:[LoginPageGaurdService]},
  {path: 'core', loadChildren: './core/core.module#CoreModule', canLoad:[ModuleGaurdLoadService]},
  {path: 'preview', loadChildren: './chat/chat.module#ChatModule'},
  {path: 'denied', component: NotAuthorisedComponent},
  {path: 'login', redirectTo: 'auth/login', pathMatch: 'full'},
  {path: '', redirectTo: 'core/viewbots', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NotAuthorisedComponent,
    FilterArrayPipe,
    // BackendDevComponent,

  ],
  imports: [
    // BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    // RouterModule,
    NgxsModule.forRoot([

    ]),

    NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),//Comment this before pushing to git
    // NgxsLoggerPluginModule.forRoot({disabled: true}), //disable for prod mode


    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    // ServiceWorkerModule.register('/static/ngsw-worker.js'),
  // MatSnackBarModule,
  //   FormsModule,
  //   ReactiveFormsModule,
  //   HttpClientModule,

    /**/
    // ReactiveFormsModule,
    // FormsModule
  ],
  providers:[PermissionService/*todo: removing it will throw static injectiom error, remove it*/],
  bootstrap: [AppComponent]
})
export class AppModule {
  //
  // constructor(public appRef: ApplicationRef) {}
  // hmrOnInit(store) {
  //   if (!store || !store.state) return;
  //   // console.log('HMR store', store);
  //   // console.log('store.state.data:', store.state.data)
  //   // inject AppStore here and update it
  //   // this.AppStore.update(store.state)
  //   if ('restoreInputValues' in store) {
  //     store.restoreInputValues();
  //   }
  //   // change detection
  //   this.appRef.tick();
  //   delete store.state;
  //   delete store.restoreInputValues;
  // }
  // hmrOnDestroy(store) {
  //   var cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
  //   // recreate elements
  //   store.disposeOldHosts = createNewHosts(cmpLocation);
  //   // inject your AppStore and grab state then set it on store
  //   // var appState = this.AppStore.get()
  //   store.state = {data: 'yolo'};
  //   // store.state = Object.assign({}, appState)
  //   // save input values
  //   store.restoreInputValues  = createInputTransfer();
  //   // remove styles
  //   removeNgStyles();
  // }
  // hmrAfterDestroy(store) {
  //   // display new elements
  //   store.disposeOldHosts()
  //   delete store.disposeOldHosts;
  //   // anything you need done the component is removed
  // }
}
