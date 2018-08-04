import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HotTableModule} from 'ng2-handsontable';
// import { HotTableModule } from '@handsontable/angular'
import {AppComponent} from './app.component';
import {HeaderComponent} from './core/header/header.component';
import {Route, RouterModule} from '@angular/router';
import {NotFoundComponent} from './core/not-found/not-found.component';
import {BsDropdownModule, ModalModule, TabsModule} from 'ngx-bootstrap';
import {UiSwitchModule} from 'ngx-toggle-switch';
import {FormsModule} from '@angular/forms';
import {DragAndDropModule} from 'angular-draggable-droppable';
import {DraggableDirective} from './draggable.directive';
import {DragService} from './drag.service';
import {DropTargetDirective} from './drop-target.directive';
import {AimService} from './aim.service';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {DocumentationComponent} from './core/documentation/documentation.component';
import {ViewCustomnerComponent} from './core/customner/view-customner/view-customner.component';
import {CreateCustomnerComponent} from './core/customner/create-customner/create-customner.component';
import {EnterpriseprofileComponent} from './core/enterpriseprofile/enterpriseprofile.component';
import {ChartComponent} from './core/chart/chart.component';
import {ChartModule} from 'angular-highcharts';
import {NGXS_PLUGINS, NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './auth/login/login.component';
import {CoreWrapperComponent} from './core/core-wrapper.component';
import {SignupComponent} from './auth/signup/signup.component';
import {ViewBotsComponent} from './core/view-bots/view-bots.component';
import {ViewCodeBasedBotComponent} from './core/view-bots/view-code-based-bot/view-code-based-bot.component';
import {ViewPipelineBasedBotsComponent} from './core/view-bots/view-pipeline-based-bots/view-pipeline-based-bots.component';
import {WrapperComponent} from './core/analysis/wrapper.component';
import {OverviewComponent} from './core/analysis/overview/overview.component';
import {UsersComponent} from './core/analysis/users/users.component';
import {SessionsComponent} from './core/analysis/sessions/sessions.component';
import {MessagesComponent} from './core/analysis/messages/messages.component';
import {PlatformsComponent} from './core/analysis/platforms/platforms.component';
import {EventsComponent} from './core/analysis/events/events.component';
import {EngagementComponent} from './core/analysis/engagement/engagement.component';
import {UsageComponent} from './core/analysis/usage/usage.component';
import {ProfileComponent} from './core/profile/profile.component';
import {ReportsComponent} from './core/reports/reports.component';
import {BuildbotWrapperComponent} from './core/buildbot/buildbot-wrapper.component';
import {BuildCodeBasedBotComponent} from './core/buildbot/build-code-based-bot/build-code-based-bot.component';
import {BuildPipelineBasedBotComponent} from './core/buildbot/build-pipeline-based-bot/build-pipeline-based-bot.component';
import {BotPreviewCardComponent} from './core/view-bots/bot-preview-card/bot-preview-card.component';
import {RouterFragmentActiveDirective} from './router-fragment-active.directive';
import {AvatorFormComponent} from './core/buildbot/build-code-based-bot/avator-form/avator-form.component';
import {AceEditorModule} from 'ng2-ace-editor';
import {AppStateReducer} from './ngxs/app.state';
import {AuthWrapperComponent} from './auth/auth-wrapper.component';
import {AuthStateReducer} from './auth/ngxs/auth.state';
import {NavigationStateReducer} from './ngxs/navigation.state';
import {EnterpriseprofileStateReducer} from './core/enterpriseprofile/ngxs/enterpriseprofile.state';
import {PipelineTestComponent} from './pipeline-test/pipeline-test.component';
import {DragulaModule} from 'ng2-dragula';
import {ViewBotStateReducer} from './core/view-bots/ngxs/view-bot.state';
import {BotDetailComponent} from './core/view-bots/bot-detail/bot-detail.component';
import {HandsontableComponent} from './handsontable/handsontable.component';
import {SmartTableComponent} from './smart-table/smart-table.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {Ng2CompleterModule} from 'ng2-completer';
import {BotDetailWrapperComponent} from './core/bot-detail/bot-detail-wrapper.component';
import {CodeBasedBotDetailComponent} from './core/bot-detail/code-based-bot-detail/code-based-bot-detail.component';
import {PipelineBasedBotDetailComponent} from './core/bot-detail/pipeline-based-bot-detail/pipeline-based-bot-detail.component';
import {BotTestingComponent} from './core/bot-detail/bot-testing/bot-testing.component';
import {ConsumersComponent} from './core/bot-detail/consumers/consumers.component';
import {SessionComponent} from './core/bot-detail/session/session.component';
import {BotSessionsComponent} from './core/bot-detail/bot-sessions/bot-sessions.component';
import {ChatWrapperComponent} from './chat/chat-wrapper/chat-wrapper.component';
import {ChatWindowComponent} from './chat/chat-window/chat-window.component';
import {ChatMessageComponent} from './chat/chatroom/chat-message/chat-message.component';
import {BotWelcomeComponent} from './chat/bot-welcome/bot-welcome.component';
import {ChatListComponent} from './chat/chat-list/chat-list.component';
import {ChatItemComponent} from './chat/chat-list/chat-item/chat-item.component';
import {ChatroomComponent} from './chat/chatroom/chatroom.component';
import {ChatSessionStateReducer} from './chat/ngxs/chat.state';
import {ScrollerDirective} from './scroller.directive';
import {BotCreationStateReducer} from './core/buildbot/ngxs/buildbot.state';
import {AnalysisStateReducer} from './core/analysis/ngxs/analysis.state';
import {ReportDetailsComponent} from './core/reports/report-details/report-details.component';
import {ReportDisplayComponent} from './core/reports/report-details/report-display/report-display.component';
import {ReportControlsComponent} from './core/reports/report-details/report-controls/report-controls.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {TestComponent} from './test/test.component';
import {
  ToastrModule,
  ToastNoAnimation,
  ToastNoAnimationModule
} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGaurdService} from './auth-gaurd.service';
import {ReportsStateReducer} from './core/reports/ngxs/reports.state';
import {SessionDetailModelComponent} from './core/bot-detail/bot-sessions/session-detail-model/session-detail-model.component';
import {SessionTabsDetailsComponent} from './core/bot-detail/bot-sessions/session-detail-model/session-tabs-details/session-tabs-details.component';
import {SessionMessageComponent} from './core/bot-detail/bot-sessions/session-detail-model/session-message/session-message.component';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import { Analysis2WrapperComponent } from './core/analysis2/analysis2-wrapper/analysis2-wrapper.component';
import { Analysis2HeaderComponent } from './core/analysis2/analysis2-header/analysis2-header.component';
import { Analysis2BodyComponent } from './core/analysis2/analysis2-body/analysis2-body.component';
import { Analysis2OverviewComponent } from './core/analysis2/analysis2-overview/analysis2-overview.component';
import { Analysis2VolumeComponent } from './core/analysis2/analysis2-volume/analysis2-volume.component';
import { Analysis2PerformanceComponent } from './core/analysis2/analysis2-performance/analysis2-performance.component';
import { Analysis2EngagementComponent } from './core/analysis2/analysis2-engagement/analysis2-engagement.component';
import {AdditionalInfoFormComponent} from './core/buildbot/build-code-based-bot/bot-config/additional-info-form/additional-info-form.component';
import {BotConfigComponent} from './core/buildbot/build-code-based-bot/bot-config/bot-config.component';
import {DataManageFormComponent} from './core/buildbot/build-code-based-bot/bot-config/data-manage-form/data-manage-form.component';
import {BasicInfoFormComponent} from './core/buildbot/build-code-based-bot/bot-config/basic-info-form/basic-info-form.component';
import {PipelineComponent} from './core/buildbot/build-code-based-bot/architecture/pipeline/pipeline.component';
import {KnowledgeBaseComponent} from './core/buildbot/build-code-based-bot/architecture/knowledge-base/knowledge-base.component';
import {CodeInputComponent} from './core/buildbot/build-code-based-bot/architecture/code/code-input/code-input.component';
import {IntegrationOptionListComponent} from './core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/integration-option-list.component';
import {CodeEditorComponent} from './core/buildbot/build-code-based-bot/architecture/code/code-editor/code-editor.component';
import {IntegrationItemComponent} from './core/buildbot/build-code-based-bot/architecture/integration/integration-item/integration-item.component';
import { BotArchitetureComponent } from './core/buildbot/build-code-based-bot/architecture/bot-architeture.component';
import { BotDetailHeaderComponent } from './core/bot-detail/bot-detail-header/bot-detail-header.component';

const routes: Route[] = [
  {

    path: 'core',
    canActivate: [AuthGaurdService],
    canActivateChild: [AuthGaurdService],
    component: CoreWrapperComponent, children: [
      {
        path: 'viewbots', component: ViewBotsComponent, children:
          [
            {path: 'codebased', component: ViewCodeBasedBotComponent},
            {path: 'intelligent', component: ViewPipelineBasedBotsComponent},
            // {path: '', component: ViewCodeBasedBotComponent}
          ]
      },
      {
        path: 'botdetail', component: BotDetailWrapperComponent, children:
          [
            {path: 'codebased/:id', component: CodeBasedBotDetailComponent},
            {path: 'intelligent/:id', component: PipelineBasedBotDetailComponent},
          ]
      },
      {
        path: 'analytics', component: WrapperComponent, children:
          [
            {path: 'overview', component: OverviewComponent},
            {path: 'users', component: UsersComponent},
            {path: 'sessions', component: SessionsComponent},
            {path: 'messages', component: MessagesComponent},
            {path: 'platforms', component: PlatformsComponent},
            {path: 'events', component: EventsComponent},
            {path: 'engagement', component: EngagementComponent},
            {path: 'usage', component: UsageComponent}
          ]
      },

      {path: 'customner', component: ViewCustomnerComponent},
      {path: 'customner/create', component: CreateCustomnerComponent},
      {path: 'enterpriseprofile', component: EnterpriseprofileComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'reports', component: ReportsComponent},
      {path: 'reports/edit/:_id', component: ReportDetailsComponent},
      {path: 'documentation', component: DocumentationComponent},
      // {path: 'buildbot/codebased', component: BuildCodeBasedBotComponent},
      // {path: 'buildbot/intelligent', component: BuildPipelineBasedBotComponent},
      {
        path: 'buildbot', component: BuildbotWrapperComponent, children:
          [
            {path: 'codebased', component: BuildCodeBasedBotComponent},
            {path: 'intelligent', component: BuildPipelineBasedBotComponent},
            {path: '', component: ViewCodeBasedBotComponent}
          ]
      },
      // {path: 'viewbots/codebased', component: ViewCodeBasedBotComponent},
      // {path: 'viewbots/intelligent', component: ViewPipelineBasedBotsComponent},
      {path: 'login', component: LoginComponent, pathMatch: 'full'},
      {path: 'login', component: LoginComponent, pathMatch: 'full'},

      {path: '**', component: NotFoundComponent}
    ],
  },
  {
    path: 'auth', component: AuthWrapperComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'test', component: TestComponent},
      {path: 'auth', component: SignupComponent}
    ]
  },
  {path: '', redirectTo: 'core/viewbots/codebased', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewBotsComponent,
    ViewCodeBasedBotComponent,
    ViewPipelineBasedBotsComponent,
    BotPreviewCardComponent,
    NotFoundComponent,
    BuildCodeBasedBotComponent,
    BuildPipelineBasedBotComponent,
    RouterFragmentActiveDirective,
    BasicInfoFormComponent,
    AvatorFormComponent,
    PipelineComponent,
    KnowledgeBaseComponent,
    CodeInputComponent,
    IntegrationOptionListComponent,
    CodeEditorComponent,
    IntegrationItemComponent,
    DraggableDirective,
    DropTargetDirective,
    DocumentationComponent,
    ViewCustomnerComponent,
    CreateCustomnerComponent,
    OverviewComponent,
    UsersComponent,
    SessionsComponent,
    MessagesComponent,
    PlatformsComponent,
    EventsComponent,
    EngagementComponent,
    UsageComponent,
    ProfileComponent,
    EnterpriseprofileComponent,
    WrapperComponent,
    ReportsComponent,
    ChartComponent,
    BuildbotWrapperComponent,
    LoginComponent,
    CoreWrapperComponent,
    SignupComponent,
    AuthWrapperComponent,
    PipelineTestComponent,
    BotDetailComponent,
    HandsontableComponent,
    SmartTableComponent,
    BotDetailWrapperComponent,
    CodeBasedBotDetailComponent,
    PipelineBasedBotDetailComponent,
    BotTestingComponent,
    ConsumersComponent,
    SessionComponent,
    BotSessionsComponent,
    ChatWrapperComponent,
    ChatWindowComponent,
    ChatMessageComponent,
    BotWelcomeComponent,
    ChatListComponent,
    ChatItemComponent,
    ChatroomComponent,
    ScrollerDirective,
    ReportDetailsComponent,
    ReportDisplayComponent,
    ReportControlsComponent,
    TestComponent,
    SessionDetailModelComponent,
    SessionTabsDetailsComponent,
    SessionMessageComponent,
    Analysis2WrapperComponent,
    Analysis2HeaderComponent,
    Analysis2BodyComponent,
    Analysis2OverviewComponent,
    Analysis2VolumeComponent,
    Analysis2PerformanceComponent,
    Analysis2EngagementComponent,
    DataManageFormComponent,
    AdditionalInfoFormComponent,
    BotConfigComponent,
    BotArchitetureComponent,
    BotDetailHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    AceEditorModule,
    UiSwitchModule,
    FormsModule,
    DragAndDropModule.forRoot(),
    ChartModule,
    NgxsModule.forRoot([AuthStateReducer,
      NavigationStateReducer,
      AppStateReducer,
      EnterpriseprofileStateReducer,
      ViewBotStateReducer,
      ChatSessionStateReducer,
      BotCreationStateReducer,
      AnalysisStateReducer,
      ReportsStateReducer
    ]),
    NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    HttpClientModule,
    DragulaModule,
    HotTableModule,
    Ng2CompleterModule,
    Ng2SmartTableModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [DragService, AimService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
