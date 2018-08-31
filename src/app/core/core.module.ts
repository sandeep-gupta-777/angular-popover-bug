import {Route, RouterModule} from '@angular/router';
import {AuthGaurdService} from '../auth-gaurd.service';
import {CoreWrapperComponent} from './core-wrapper.component';
import {ViewBotsComponent} from './view-bots/view-bots.component';
import {ViewCodeBasedBotComponent} from './view-bots/view-code-based-bot/view-code-based-bot.component';
import {ViewPipelineBasedBotsComponent} from './view-bots/view-pipeline-based-bots/view-pipeline-based-bots.component';
import {BotDetailWrapperComponent} from './bot-detail/bot-detail-wrapper.component';
import {CodeBasedBotDetailComponent} from './bot-detail/code-based-bot-detail/code-based-bot-detail.component';
import {PipelineBasedBotDetailComponent} from './bot-detail/pipeline-based-bot-detail/pipeline-based-bot-detail.component';
import {Analysis2WrapperComponent} from './analysis2/analysis2-wrapper/analysis2-wrapper.component';
import {Analysis2OverviewComponent} from './analysis2/analysis2-overview/analysis2-overview.component';
import {Analysis2VolumeComponent} from './analysis2/analysis2-volume/analysis2-volume.component';
import {Analysis2PerformanceComponent} from './analysis2/analysis2-performance/analysis2-performance.component';
import {Analysis2EngagementComponent} from './analysis2/analysis2-engagement/analysis2-engagement.component';
import {WrapperComponent} from './analysis/wrapper.component';
import {OverviewComponent} from './analysis/overview/overview.component';
import {UsersComponent} from './analysis/users/users.component';
import {SessionsComponent} from './analysis/sessions/sessions.component';
import {MessagesComponent} from './analysis/messages/messages.component';
import {PlatformsComponent} from './analysis/platforms/platforms.component';
import {EventsComponent} from './analysis/events/events.component';
import {EngagementComponent} from './analysis/engagement/engagement.component';
import {UsageComponent} from './analysis/usage/usage.component';
import {ViewCustomnerComponent} from './customner/view-customner/view-customner.component';
import {CreateCustomnerComponent} from './customner/create-customner/create-customner.component';
import {EnterpriseprofileComponent} from './enterpriseprofile/enterpriseprofile.component';
import {ProfileComponent} from './profile/profile.component';
import {ReportsComponent} from './reports/reports.component';
import {ReportDetailsComponent} from './reports/report-details/report-details.component';
import {DocumentationComponent} from './documentation/documentation.component';
import {BuildbotWrapperComponent} from './buildbot/buildbot-wrapper.component';
import {BuildCodeBasedBotComponent} from './buildbot/build-code-based-bot/build-code-based-bot.component';
import {BuildPipelineBasedBotComponent} from './buildbot/build-pipeline-based-bot/build-pipeline-based-bot.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ChatWrapperComponent} from '../chat/chat-wrapper.component';
import {AppComponent} from '../app.component';
import {BotPreviewCardComponent} from './view-bots/bot-preview-card/bot-preview-card.component';
import {NgModule} from '@angular/core';
import {RouterFragmentActiveDirective} from '../router-fragment-active.directive';
import {BasicInfoFormComponent} from './buildbot/build-code-based-bot/bot-config/basic-info-form/basic-info-form.component';
import {AvatorFormComponent} from './buildbot/build-code-based-bot/avator-form/avator-form.component';
import {PipelineComponent} from './buildbot/build-code-based-bot/architecture/pipeline/pipeline.component';
import {KnowledgeBaseComponent} from './buildbot/build-code-based-bot/architecture/knowledge-base/knowledge-base.component';
import {CodeInputComponent} from './buildbot/build-code-based-bot/architecture/code/code-input/code-input.component';
import {IntegrationOptionListComponent} from './buildbot/build-code-based-bot/architecture/integration/integration-option-list/integration-option-list.component';
import {CodeEditorComponent} from './buildbot/build-code-based-bot/architecture/code/code-editor/code-editor.component';
import {IntegrationItemComponent} from './buildbot/build-code-based-bot/architecture/integration/integration-item/integration-item.component';
import {DraggableDirective} from '../draggable.directive';
import {DropTargetDirective} from '../drop-target.directive';
import {ChartComponent} from './chart/chart.component';
import {SignupComponent} from '../auth/signup/signup.component';
import {PipelineTestComponent} from '../pipeline-test/pipeline-test.component';
import {HandsontableComponent} from '../handsontable/handsontable.component';
import {SmartTableComponent} from '../smart-table/smart-table.component';
import {BotTestingComponent} from './bot-detail/bot-testing/bot-testing.component';
import {ConsumersComponent} from './bot-detail/consumers/consumers.component';
import {SessionComponent} from './bot-detail/session/session.component';
import {BotSessionsComponent} from './bot-detail/bot-sessions/bot-sessions.component';
import {ChatWindowComponent} from '../chat/rooms-and-convo-panel/chat-window.component';
import {ChatMessageComponent} from '../chat/rooms-and-convo-panel/chat-message-list/chat-message/chat-message.component';
import {BotWelcomeComponent} from '../chat/bot-welcome-panel/bot-welcome.component';
import {ChatListComponent} from '../chat/rooms-and-convo-panel/chat-room-list/chat-list.component';
import {ChatItemComponent} from '../chat/rooms-and-convo-panel/chat-room-list/chat-item/chat-item.component';
import {ChatroomComponent} from '../chat/rooms-and-convo-panel/chat-message-list/chatroom.component';
import {ScrollerDirective} from '../scroller.directive';
import {ReportDisplayComponent} from './reports/report-details/report-display/report-display.component';
import {ReportControlsComponent} from './reports/report-details/report-controls/report-controls.component';
import {TestComponent} from '../test/test.component';
import {SessionDetailModelComponent} from './bot-detail/bot-sessions/session-detail-model/session-detail-model.component';
import {SessionTabsDetailsComponent} from './bot-detail/bot-sessions/session-detail-model/session-tabs-details/session-tabs-details.component';
import {SessionMessageComponent} from './bot-detail/bot-sessions/session-detail-model/session-message/session-message.component';
import {Analysis2HeaderComponent} from './analysis2/analysis2-header/analysis2-header.component';
import {Analysis2BodyComponent} from './analysis2/analysis2-body/analysis2-body.component';
import {DataManageFormComponent} from './buildbot/build-code-based-bot/bot-config/data-manage-form/data-manage-form.component';
import {AdditionalInfoFormComponent} from './buildbot/build-code-based-bot/bot-config/additional-info-form/additional-info-form.component';
import {BotConfigComponent} from './buildbot/build-code-based-bot/bot-config/bot-config.component';
import {BotArchitetureComponent} from './buildbot/build-code-based-bot/architecture/bot-architeture.component';
import {FilterActiveBotPipe} from '../filter-active-bot.pipe';
import {BotDetailHeaderComponent} from './bot-detail/bot-detail-header/bot-detail-header.component';
import {FilterArrayPipe} from '../filter-array.pipe';
import {PipelineFilterPipe} from '../pipeline-filter.pipe';
import {ChatPreviewNewPageComponent} from '../chat/chat-preview-new-page/chat-preview-new-page.component';
import {FilterObjectArrayPipe} from '../filter-object-array.pipe';
import {IntegrationLogosPipe} from '../integration-logos.pipe';
import {IntegrationImageCountPipe} from '../integration-image-count.pipe';
import {IntegrationInputKeysFilterPipe} from '../integration-input-keys-filter.pipe';
import {ProfilePermissionIdToNamePipe} from './profile/profile-permission-id-to-name.pipe';
import {BotIdToNamePipe} from '../bot-id-to-name.pipe';
import {FooterComponent} from '../footer/footer.component';
import {EnabledIntegrationsCountPipe} from '../enabled-integrations-count.pipe';
import {SortObjectArrayPipe} from '../sort-object-array.pipe';
import {SerializeEnterpriseprofileDataPipe} from './enterpriseprofile/serialize-enterpriseprofile-data.pipe';
import {KnowledgeBasePresentationComponent} from './buildbot/build-code-based-bot/architecture/knowledge-base/knowledge-base-presentation/knowledge-base-presentation.component';
import {KnowledgeBaseWrapperComponent} from './buildbot/build-code-based-bot/architecture/knowledge-base-wrapper/knowledge-base-wrapper.component';
import {BrowserModule} from '@angular/platform-browser';
import {BsDatepickerModule, BsDropdownModule, ModalModule, ProgressbarModule, TabsModule, TooltipModule} from 'ngx-bootstrap';
import {AceEditorModule} from 'ng2-ace-editor';
import {UiSwitchModule} from 'ngx-toggle-switch';
import {FormsModule} from '@angular/forms';
import {DragAndDropModule} from 'angular-draggable-droppable';
import {ChartModule} from 'angular-highcharts';
import {NgxsModule} from '@ngxs/store';
import {AuthStateReducer} from '../auth/ngxs/auth.state';
import {NavigationStateReducer} from '../ngxs/navigation.state';
import {AppStateReducer} from '../ngxs/app.state';
import {EnterpriseprofileStateReducer} from './enterpriseprofile/ngxs/enterpriseprofile.state';
import {ViewBotStateReducer} from './view-bots/ngxs/view-bot.state';
import {ChatSessionStateReducer} from '../chat/ngxs/chat.state';
import {BotCreationStateReducer} from './buildbot/ngxs/buildbot.state';
import {AnalysisStateReducer} from './analysis/ngxs/analysis.state';
import {ReportsStateReducer} from './reports/ngxs/reports.state';
import {AnalysisStateReducer2} from './analysis2/ngxs/analysis.state';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {HttpClientModule} from '@angular/common/http';
import {DragulaModule} from 'ng2-dragula';
import {Ng2CompleterModule} from 'ng2-completer';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {ClickOutsideModule} from 'ng2-click-outside';
import {AuthModule} from '../auth/auth.module';
import {DragService} from '../drag.service';
import {AimService} from '../aim.service';
import {HeaderComponent} from './header/header.component';

const routes: Route[] = [
  {

    path: 'core',
    canActivate: [AuthGaurdService],
    canActivateChild: [AuthGaurdService],
    component: CoreWrapperComponent, children: [
      {
        path: 'viewbots', component: ViewBotsComponent, children:
          [
            {path: 'codebased', component: ViewCodeBasedBotComponent, data:{route:'codebased'}},
            {path: 'intelligent', component: ViewPipelineBasedBotsComponent, data:{route:'intelligent'}},
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
        path: 'analytics2', component: Analysis2WrapperComponent,children: [
          {path: '', redirectTo: "overview", pathMatch:"full" },
          {path: 'overview', component: Analysis2OverviewComponent},
          {path: 'volume', component: Analysis2VolumeComponent},
          {path: 'performance', component: Analysis2PerformanceComponent},
          {path: 'engagement', component: Analysis2EngagementComponent},

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
            {path: 'codebased', component: BuildCodeBasedBotComponent, data:{buildBot:'codeBased'}},
            {path: 'intelligent', component: BuildPipelineBasedBotComponent, data:{buildBot:'pipeLineBased'}},
            {path: '', component: ViewCodeBasedBotComponent}
          ]
      },
      // {path: 'viewbots/codebased', component: ViewCodeBasedBotComponent},
      // {path: 'viewbots/intelligent', component: ViewPipelineBasedBotsComponent},
      {path: '**', component: NotFoundComponent}
    ],
  },

  {path: 'preview', component:ChatWrapperComponent, data:{isFullScreenPreview:true} },
  {path: '', redirectTo: 'core/viewbots/codebased', pathMatch: 'full'},
];

@NgModule({
  declarations: [
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
    CoreWrapperComponent,
    SignupComponent,
    PipelineTestComponent,
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
    Analysis2WrapperComponent ,
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
    BotDetailHeaderComponent,
    FilterActiveBotPipe,
    FilterArrayPipe,
    PipelineFilterPipe,
    ChatPreviewNewPageComponent,
    FilterObjectArrayPipe,
    IntegrationLogosPipe,
    IntegrationImageCountPipe,
    IntegrationInputKeysFilterPipe,
    ProfilePermissionIdToNamePipe,
    BotIdToNamePipe,
    FooterComponent,
    EnabledIntegrationsCountPipe,
    SortObjectArrayPipe,
    SerializeEnterpriseprofileDataPipe,
    KnowledgeBasePresentationComponent,
    KnowledgeBaseWrapperComponent
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
    NgxsModule.forRoot([
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
    DragulaModule,
    // HotTableModule,
    Ng2CompleterModule,
    Ng2SmartTableModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added,
    ProgressbarModule.forRoot(),
    ClickOutsideModule,

    /*custom modules*/
    AuthModule
  ],
  providers: [DragService, AimService],
  bootstrap: [AppComponent]
})
export class CoreModule {
}
