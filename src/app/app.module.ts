import {ApplicationRef, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PreloadAllModules, Route, RouterModule} from '@angular/router';
import {NotFoundComponent} from './core/not-found/not-found.component';
import {NotAuthorisedComponent} from './not-authorised/not-authorised.component';
import {FilterArrayPipe} from './filter-array.pipe';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {ModuleGaurdLoadService} from './route-gaurds/module-gaurd-load.service';
import {NgxsModule} from '@ngxs/store';
import {LoginPageGaurdService} from './route-gaurds/login-page.gaurd.service';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {BrowserModule} from '@angular/platform-browser';
import {ENgxsStogareKey} from './typings/enum';
import {createInputTransfer, createNewHosts, removeNgStyles} from '@angularclass/hmr';
import {ScriptsLoadResolver} from './script-load.resolver';
import {intersectionObserverPreset, LazyLoadImageModule, SetErrorImageProps} from 'ng-lazyload-image';
import {HttpTrackerLibModule} from 'ngx-loadify';
import {OverlayModule} from '@angular/cdk/overlay';
import {Popover} from './popover/popover.service';
import {PopoverComponent1} from './popover/popover-component1.component';
import {InsidePopoverComponent} from './popover/inside-popover/inside-popover.component';
import {MatButtonModule, MatRadioModule, MatSelectModule, MatSnackBarModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FilterPipeModule} from 'ngx-filter-pipe';
import {UtilityService} from './utility.service';
import {StoreVariableService} from './core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/store--variable.service';

export const x = ({element, errorImagePath, useSrcset}: SetErrorImageProps) => {
  (<any>element).src = 'http://chittagongit.com/images/error-image-icon/error-image-icon-23.jpg';
};
export const lazyOption = {
  // setErrorImage: x,
  // setLoadedImage:({element, errorImagePath, useSrcset}: any) => {
  //   (<any>element).src = "http://chittagongit.com/images/error-image-icon/error-image-icon-23.jpg";
  // },
  preset: intersectionObserverPreset
};

export const lazyOption1 = {lazyOption};

const routes: Route[] = [
  {path: 'postman', loadChildren: './dev/dev.module#DevModule'},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule', canLoad: [LoginPageGaurdService]},
  // {path: 'login', loadChildren: './auth/auth.module#AuthModule', canLoad:[LoginPageGaurdService]},
  {path: 'core', loadChildren: './core/core.module#CoreModule', canLoad: [ModuleGaurdLoadService]},
  {path: 'preview', loadChildren: './chat/chat.module#ChatModule', resolve: {message: ScriptsLoadResolver}},
  {
    path: 'preview-dev',
    loadChildren: './chat/chat.module#ChatModule',
    canLoad: [ModuleGaurdLoadService],
    resolve: {message: ScriptsLoadResolver}
  },
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
    PopoverComponent1,
    InsidePopoverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // NoopAnimationsModule,
    BrowserAnimationsModule,
    LazyLoadImageModule.forRoot(lazyOption1.lazyOption),
    MatButtonModule,
    HttpTrackerLibModule.forRoot({
      loaderClass: 'loading',
      errorClass: 'error',
      successClass: 'success',
      makeDisabledDuringLoading: true,
      successClassDuration: 2000,
      errorClassDuration: 2000,
    }),
    OverlayModule,

    RouterModule.forRoot(routes, {enableTracing: false}),
    NgxsModule.forRoot([]),

    NgxsStoragePluginModule.forRoot({key: ENgxsStogareKey.IMI_BOT_STORAGE_KEY}),
    NgxsReduxDevtoolsPluginModule.forRoot({disabled: environment.production}),
    // NgxsLoggerPluginModule.forRoot({disabled: true}), //disable for prod mode


    // ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),

    // ServiceWorkerModule.register('/static/combined-worker.js', {enabled: environment.production}),

    // MatSnackBarModule,
    //   FormsModule,
    //   ReactiveFormsModule,
    //   HttpClientModule,

    /**/
    // ReactiveFormsModule,
    // FormsModule

    // AngularFireDatabaseModule,
    // AngularFireAuthModule,
    // AngularFireMessagingModule,
    // AngularFireModule.initializeApp(environment.firebase),
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [
    UtilityService,
    LoginPageGaurdService,
    ModuleGaurdLoadService,
    StoreVariableService,
    ScriptsLoadResolver,
    //   {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: !environment.production ? HttpMockRequestInterceptor : HttpRequestInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent],
  entryComponents: [PopoverComponent1, InsidePopoverComponent],

})
export class AppModule {

  constructor(public appRef: ApplicationRef) {
  }

  hmrOnInit(store) {
    if (!store || !store.state) {
      return;
    }
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
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // inject your AppStore and grab state then set it on store
    // var appState = this.AppStore.get()
    store.state = {data: 'yolo'};
    // store.state = Object.assign({}, appState)
    // save input values
    store.restoreInputValues = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
    // anything you need done the component is removed
  }
}
