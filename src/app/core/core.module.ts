import {Route, RouterModule} from '@angular/router';
import {CoreWrapperComponent} from './core-wrapper.component';
import {CreateCustomnerComponent} from './customner/create-customner/create-customner.component';
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
import {SignupComponent} from '../auth/signup/signup.component';
// import {BotWelcomeComponent} from '../chat/bot-welcome-panel/bot-welcome.component';
import {PipelineTestComponent} from '../pipeline-test/pipeline-test.component';
// import {ChatWindowComponent} from '../chat/rooms-and-convo-panel/chat-window.component';
// import {ChatWrapperComponent} from '../chat/chat-wrapper.component';
// import {ChatMessageComponent} from '../chat/rooms-and-convo-panel/chat-message-list/chat-message/chat-message.component';
// import {ChatListComponent} from '../chat/rooms-and-convo-panel/chat-room-list/chat-list.component';
// import {ChatItemComponent} from '../chat/rooms-and-convo-panel/chat-room-list/chat-item/chat-item.component';
// import {ChatroomComponent} from '../chat/rooms-and-convo-panel/chat-message-list/chatroom.component';
import {ScrollerDirective} from '../scroller.directive';
import {ReportDisplayComponent} from './reports/report-details/report-display/report-display.component';
import {ReportControlsComponent} from './reports/report-details/report-controls/report-controls.component';
import {ChatPreviewNewPageComponent} from '../chat/chat-preview-new-page/chat-preview-new-page.component';
import {FooterComponent} from '../footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {DragAndDropModule} from 'angular-draggable-droppable';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import {CommonModule, DatePipe} from '@angular/common';
import {SharedModule} from '../shared.module';
import {ViewCustomnerComponent} from './customner/view-customner/view-customner.component';
// import {} from '../auth-gaurd.service';
import {AccessGaurdService} from '../access-gaurd.service';
import {ConstantsService, ERouteNames} from '../constants.service';
import {ChatModule} from '../chat/chat.module';
import {EBotType, UtilityService} from '../utility.service';
import {StringIncludesPipe} from './buildbot/build-code-based-bot/architecture/pipeline/string-includes.pipe';
import {MyMaterialModule} from '../my-material.module';
import {CreateBotDialogComponent} from './view-bots/create-bot-dialog/create-bot-dialog.component';
import {ModalConfirmComponent} from '../modal-confirm/modal-confirm.component';
import {GentemplateEditKeyComponent} from './buildbot/build-code-based-bot/architecture/code/code-input/code-gentemplate-ui-component-wrapper/gentemplate-edit-key/gentemplate-edit-key.component';
import {UrlValidatorDirective} from './buildbot/build-code-based-bot/architecture/code/code-input/code-gentemplate-ui-component-wrapper/code-input-caraosal/url-validator.directive';
import {EnterpriseOverviewComponent} from './enterpriseprofile/enterprise-overview/enterprise-overview.component';
import {EnterpriseUsersComponent} from './enterpriseprofile/enterprise-users/enterprise-users.component';
import {EnterpriseRolesComponent} from './enterpriseprofile/enterprise-roles/enterprise-roles.component';
import {RolesComponent} from './enterpriseprofile/roles/roles.component';
import {RoleaccordionComponent} from './enterpriseprofile/roles/roleaccordion/roleaccordion.component';
import {ScrollDispatchModule} from "@angular/cdk/scrolling";
import {ServerService} from "../server.service";
import {NgxsModule} from "@ngxs/store";
import {ReducerListService} from "../reducer-list.service";
import {CodeInputService} from "./buildbot/build-code-based-bot/architecture/code/code-input/code-input.service";
import {PermissionService} from "../permission.service";
import {SmartTableSettingsService} from "../smart-table-settings.service";
import {VersionStateReducer} from "./buildbot/build-code-based-bot/architecture/code/code-input/ngxs/code-input.state";
import {FormsService} from "../forms.service";
import {MyToasterService} from "../my-toaster.service";
import {StoreVariableService} from "./buildbot/build-code-based-bot/architecture/integration/integration-option-list/store--variable.service";
import {EventService} from "../event.service";
import {ObjectArrayCrudService} from "../object-array-crud.service";
import {LoginPageGaurdService} from '../route-gaurds/login-page.gaurd.service';
import {ModuleGaurdLoadService} from '../route-gaurds/module-gaurd-load.service';
import {environment} from '../../environments/environment';
import {HttpMockRequestInterceptor} from '../interceptor.mock';
import {HttpRequestInterceptor} from '../interceptor';
import {MatSidenavModule} from '@angular/material';
import {DevHttpInterceptorService} from "../dev/dev-http-interceptor.service";
import {LazyLoadImageModule} from "ng-lazyload-image";
import {HnResolver} from "../core.resolver";

const routes: Route[] = [
  {

    path: '',
    component: CoreWrapperComponent,
    canActivate: [],
    canActivateChild: [AccessGaurdService],
    resolve:{ message: HnResolver },
    children: [
      {
        path: 'viewbots', loadChildren: './view-bots/view-bots.module#ViewBotsModule', canLoad: []
      },
      {
        path: 'botdetail', loadChildren: './bot-detail/bot-detail.module#BotDetailModule', canLoad: []
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
      {
        path: 'customner/create',
        component: CreateCustomnerComponent,
        data: {routeName: ERouteNames['Create Enterprise Knowledge base']}
      },
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
    CreateCustomnerComponent,
    ProfileComponent,
    EnterpriseprofileComponent,
    EnterpriseRolesComponent,
    EnterpriseOverviewComponent,
    ReportsComponent,
    CoreWrapperComponent,
    SignupComponent,
    PipelineTestComponent,
    RolesComponent,
    RoleaccordionComponent,
    HeaderComponent,

    // ScrollerDirective,
    ReportDetailsComponent,
    // BotWelcomeComponent,
    ReportDisplayComponent,
    ReportControlsComponent,
    ChatPreviewNewPageComponent,
    FooterComponent,
    EnterpriseOverviewComponent,
    EnterpriseUsersComponent,
    EnterpriseRolesComponent,
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
    ScrollDispatchModule,
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
    HnResolver
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: !environment.production ? HttpMockRequestInterceptor : HttpRequestInterceptor,
    //   multi: true
    // },
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
