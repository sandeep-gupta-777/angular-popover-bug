import {Route, RouterModule} from '@angular/router';
import {CoreWrapperComponent} from './core-wrapper.component';
import {EnterpriseprofileComponent} from './enterpriseprofile/enterpriseprofile.component';
import {ProfileComponent} from './profile/profile.component';
import {ReportsComponent} from './reports/reports.component';
import {ReportDetailsComponent} from './reports/report-details/report-details.component';
import {DocumentationComponent} from './documentation/documentation.component';
import {BuildbotWrapperComponent} from './buildbot/buildbot-wrapper.component';
import {BuildCodeBasedBotComponent} from './buildbot/build-code-based-bot/build-code-based-bot.component';
import {BuildPipelineBasedBotComponent} from './buildbot/build-pipeline-based-bot/build-pipeline-based-bot.component';
import {NgModule} from '@angular/core';
import {RouterFragmentActiveDirective} from '../router-fragment-active.directive';
import {ReportDisplayComponent} from './reports/report-details/report-display/report-display.component';
import {ReportControlsComponent} from './reports/report-details/report-controls/report-controls.component';
import {FooterComponent} from '../footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import {CommonModule, DatePipe} from '@angular/common';
import {SharedModule} from '../shared.module';
import {ViewCustomnerComponent} from './customner/view-customner/view-customner.component';
import {AccessGaurdService} from '../access-gaurd.service';
import {ConstantsService, ERouteNames} from '../constants.service';
import {ChatModule} from '../chat/chat.module';
import {EBotType, UtilityService} from '../utility.service';
import {MyMaterialModule} from '../my-material.module';
import {ModalConfirmComponent} from '../modal-confirm/modal-confirm.component';
import {GentemplateEditKeyComponent} from './buildbot/build-code-based-bot/architecture/code/code-input/code-gentemplate-ui-component-wrapper/gentemplate-edit-key/gentemplate-edit-key.component';
import {EnterpriseOverviewComponent} from './enterpriseprofile/enterprise-overview/enterprise-overview.component';
import {EnterpriseUsersComponent} from './enterpriseprofile/enterprise-users/enterprise-users.component';
import {EnterpriseRolesComponent} from './enterpriseprofile/enterprise-roles/enterprise-roles.component';
import {RolesComponent} from './enterpriseprofile/roles/roles.component';
import {RoleaccordionComponent} from './enterpriseprofile/roles/roleaccordion/roleaccordion.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {ServerService} from '../server.service';
import {NgxsModule} from '@ngxs/store';
import {ReducerListService} from '../reducer-list.service';
import {CodeInputService} from './buildbot/build-code-based-bot/architecture/code/code-input/code-input.service';
import {PermissionService} from '../permission.service';
import {SmartTableSettingsService} from '../smart-table-settings.service';
import {VersionStateReducer} from './buildbot/build-code-based-bot/architecture/code/code-input/ngxs/code-input.state';
import {FormsService} from '../forms.service';
import {MyToasterService} from '../my-toaster.service';
import {StoreVariableService} from './buildbot/build-code-based-bot/architecture/integration/integration-option-list/store--variable.service';
import {EventService} from '../event.service';
import {ObjectArrayCrudService} from '../object-array-crud.service';
import {LoginPageGaurdService} from '../route-gaurds/login-page.gaurd.service';
import {ModuleGaurdLoadService} from '../route-gaurds/module-gaurd-load.service';
import {environment} from '../../environments/environment';
import {HttpMockRequestInterceptor} from '../interceptor.mock';
import {MatSidenavModule} from '@angular/material';
import {DevHttpInterceptorService} from '../dev/dev-http-interceptor.service';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {ScriptsLoadResolver} from '../script-load.resolver';
import {BotAccessTokenResolver} from '../bot-access-token.resolver';
import {BotResolver} from '../bot.resolver';
import {GentemplateSidebarComponent} from './buildbot/build-code-based-bot/architecture/code/code-input/code-gentemplate-ui-wrapper/gentemplate-sidebar/gentemplate-sidebar.component';
import {HttpIdleInterceptor} from '../http-idle.interceptor';


const routes: Route[] = [
  {

    path: '',
    component: CoreWrapperComponent,
    canActivate: [ModuleGaurdLoadService], /*this is required even if we have canLoad on this module, because canLoad runs only once*/
    canActivateChild: [AccessGaurdService],
    resolve: {message: ScriptsLoadResolver, token: BotAccessTokenResolver},
    children: [
      {
        path: 'viewbots', loadChildren: './view-bots/view-bots.module#ViewBotsModule', canLoad: [],
      },
      {
        path: 'botdetail', loadChildren: './bot-detail/bot-detail.module#BotDetailModule', canLoad: [],
      },
      {
        path: 'analytics2', loadChildren: './analysis2/analysis2.module#Analysis2Module', canLoad: []
      },
      {
        path: 'customner',
        component: ViewCustomnerComponent,
        data: {routeName: ERouteNames['Get Enterprise Knowledge base']},
        canActivate: []
      },
      // {
      //   path: 'customner/create',
      //   component: CreateCustomnerComponent,
      //   data: {routeName: ERouteNames['Create Enterprise Knowledge base']}
      // },
      {
        path: 'enterpriseprofile',
        component: EnterpriseprofileComponent,
        data: {routeName: ERouteNames['Get Enterprise']},
        canActivate: []
      },

      {path: 'profile', component: ProfileComponent, data: {routeName: ERouteNames['Get User']}},
      {path: 'reports', component: ReportsComponent, data: {routeName: ERouteNames['Get Reports']}},
      {path: 'reports/edit/:_id', component: ReportDetailsComponent, data: {routeName: ERouteNames['Update Reports']}},
      {path: 'reports/create', component: ReportDetailsComponent, data: {name: ERouteNames['Create Reports']}},
      {path: 'documentation', component: DocumentationComponent, canActivate: []},
      {
        path: 'buildbot', component: BuildbotWrapperComponent, data: {name: ERouteNames['Create Bots']}, children:
          [
            {path: EBotType.chatbot, component: BuildCodeBasedBotComponent, data: {buildBot: EBotType.chatbot}},
            {path: 'intelligent', component: BuildPipelineBasedBotComponent, data: {buildBot: 'pipeLineBased'}},
          ]
      },
    ],
  },

  {path: '', redirectTo: `core/viewbots/${EBotType.chatbot}`, pathMatch: 'full'},
];

// declare let areReducersRegistered ;

@NgModule({
  declarations: [
    BuildCodeBasedBotComponent,
    BuildPipelineBasedBotComponent,
    RouterFragmentActiveDirective,
    DocumentationComponent,
    ViewCustomnerComponent,
    // CreateCustomnerComponent,
    ProfileComponent,
    EnterpriseprofileComponent,
    EnterpriseRolesComponent,
    EnterpriseOverviewComponent,
    ReportsComponent,
    CoreWrapperComponent,
    // SignupComponent,
    RolesComponent,
    RoleaccordionComponent,
    HeaderComponent,

    // ScrollerDirective,
    ReportDetailsComponent,
    // BotWelcomeComponent,
    ReportDisplayComponent,
    ReportControlsComponent,
    FooterComponent,
    EnterpriseOverviewComponent,
    EnterpriseUsersComponent,
    EnterpriseRolesComponent
  ],
  entryComponents: [
    ModalConfirmComponent,
    GentemplateEditKeyComponent,
  ],
  imports: [
    ChatModule,
    CommonModule,
    RouterModule.forChild(routes), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    LazyLoadImageModule,
    ReactiveFormsModule,
    MyMaterialModule,
    // ScrollDispatchModule,
    ScrollingModule,
    MatSidenavModule,

    NgxsModule.forFeature((<any>window).areReducersRegistered ? [VersionStateReducer] : [
      ...ReducerListService.list,
      VersionStateReducer,
    ])
  ],
  providers: [
    EventService,
    ConstantsService,
    ObjectArrayCrudService,
    AccessGaurdService,
    StoreVariableService,
    MyToasterService,
    FormsService,
    PermissionService,
    UtilityService,
    ServerService,
    CodeInputService,
    DatePipe,
    SmartTableSettingsService,
    FormsService,
    ScriptsLoadResolver,
    BotAccessTokenResolver,
    BotResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpIdleInterceptor,
      multi: true
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: DevHttpInterceptorService,
    //   multi: true
    // }
  ]
})
export class CoreModule {
  constructor() {
    // alert('core '+areReducersRegistered);
    (<any>window).areReducersRegistered = true;

  }
}
