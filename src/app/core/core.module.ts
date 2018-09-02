import {Route, RouterModule} from '@angular/router';
import {CoreWrapperComponent} from './core-wrapper.component';
// import {WrapperComponent} from './analysis/wrapper.component';
// import {OverviewComponent} from './analysis/overview/overview.component';
// import {UsersComponent} from './analysis/users/users.component';
// import {SessionsComponent} frosm './analysis/sessions/sessions.component';
// import {MessagesComponent} from './analysis/messages/messages.component';
// import {PlatformsComponent} from './analysis/platforms/platforms.component';
// import {EventsComponent} from './analysis/events/events.component';
// import {EngagementComponent} from './analysis/engagement/engagement.component';
// import {UsageComponent} from './analysis/usage/usage.component';
// import {ViewCustomnerComponent} from './customner/view-customner/view-customner.component';
import {CreateCustomnerComponent} from './customner/create-customner/create-customner.component';
import {EnterpriseprofileComponent} from './enterpriseprofile/enterpriseprofile.component';
import {ProfileComponent} from './profile/profile.component';
import {ReportsComponent} from './reports/reports.component';
import {ReportDetailsComponent} from './reports/report-details/report-details.component';
import {DocumentationComponent} from './documentation/documentation.component';
import {BuildbotWrapperComponent} from './buildbot/buildbot-wrapper.component';
import {BuildCodeBasedBotComponent} from './buildbot/build-code-based-bot/build-code-based-bot.component';
import {BuildPipelineBasedBotComponent} from './buildbot/build-pipeline-based-bot/build-pipeline-based-bot.component';
import {ChatWrapperComponent} from '../chat/chat-wrapper.component';
import {NgModule} from '@angular/core';
import {RouterFragmentActiveDirective} from '../router-fragment-active.directive';
import {SignupComponent} from '../auth/signup/signup.component';
import {PipelineTestComponent} from '../pipeline-test/pipeline-test.component';
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
import {ChatPreviewNewPageComponent} from '../chat/chat-preview-new-page/chat-preview-new-page.component';
import {FooterComponent} from '../footer/footer.component';
import {BsDatepickerModule, BsDropdownModule, ModalModule, ProgressbarModule, TabsModule, TooltipModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {DragAndDropModule} from 'angular-draggable-droppable';
// import {NgxsModule} from '@ngxs/store';
// import {AuthStateReducer} from '../auth/ngxs/auth.state';
// import {NavigationStateReducer} from '../ngxs/navigation.state';
// import {AppStateReducer} from '../ngxs/app.state';
// import {EnterpriseprofileStateReducer} from './enterpriseprofile/ngxs/enterpriseprofile.state';
// import {ViewBotStateReducer} from './view-bots/ngxs/view-bot.state';
// import {ChatSessionStateReducer} from '../chat/ngxs/chat.state';
// import {BotCreationStateReducer} from './buildbot/ngxs/buildbot.state';
// import {ReportsStateReducer} from './reports/ngxs/reports.state';
// import {AnalysisStateReducer2} from './analysis2/ngxs/analysis.state';
import {HttpClientModule} from '@angular/common/http';
import {ClickOutsideModule} from 'ng2-click-outside';
import {AimService} from '../aim.service';
import {HeaderComponent} from './header/header.component';
import {BackendDevComponent} from '../backend-dev/backend-dev.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared.module';
import {ViewCustomnerComponent} from './customner/view-customner/view-customner.component';
import {AuthGaurdService} from '../auth-gaurd.service';

const routes: Route[] = [
  {

    path: '',
    component: CoreWrapperComponent, children: [
      {
        path: 'viewbots', loadChildren: './view-bots/view-bots.module#ViewBotsModule'
      },
      {
        path: 'botdetail', loadChildren: './bot-detail/bot-detail.module#BotDetailModule', canLoad:[AuthGaurdService]
      },
      {
        path: 'analytics2', loadChildren: './analysis2/analysis2.module#Analysis2Module', canLoad:[AuthGaurdService]
      },
      // {
      //   path: 'analytics', component: WrapperComponent, children:
      //     [
      //       {path: 'overview', component: OverviewComponent},
      //       {path: 'users', component: UsersComponent},
      //       {path: 'sessions', component: SessionsComponent},
      //       {path: 'messages', component: MessagesComponent},
      //       {path: 'platforms', component: PlatformsComponent},
      //       {path: 'events', component: EventsComponent},
      //       {path: 'engagement', component: EngagementComponent},
      //       {path: 'usage', component: UsageComponent}
      //     ]
      // },

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
            {path: 'codebased', component: BuildCodeBasedBotComponent, data: {buildBot: 'codeBased'}},
            {path: 'intelligent', component: BuildPipelineBasedBotComponent, data: {buildBot: 'pipeLineBased'}},
            // {path: '', component: ViewCodeBasedBotComponent}
          ]
      },
      // {path: 'viewbots/codebased', component: ViewCodeBasedBotComponent},
      // {path: 'viewbots/intelligent', component: ViewPipelineBasedBotsComponent},
      // {path: '**', component: NotFoundComponent}
    ],
  },

  {path: 'preview', component: ChatWrapperComponent, data: {isFullScreenPreview: true}},
  {path: '', redirectTo: 'core/viewbots/codebased', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    HeaderComponent,
    // ViewBotsComponent,
    // ViewCodeBasedBotComponent,
    // ViewPipelineBasedBotsComponent,
    // BotPreviewCardComponent,
    // NotFoundComponent,
    BuildCodeBasedBotComponent,
    BuildPipelineBasedBotComponent,
    RouterFragmentActiveDirective,
    DocumentationComponent,
    ViewCustomnerComponent,
    CreateCustomnerComponent,
    // OverviewComponent,
    // UsersComponent,
    // SessionsComponent,
    // MessagesComponent,
    // PlatformsComponent,
    // EventsComponent,
    // EngagementComponent,
    // UsageComponent,
    ProfileComponent,
    EnterpriseprofileComponent,
    // WrapperComponent,
    ReportsComponent,
    CoreWrapperComponent,
    BuildbotWrapperComponent,
    SignupComponent,
    PipelineTestComponent,
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
    ChatPreviewNewPageComponent,
    FooterComponent,
    BackendDevComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    // AceEditorModule,
    FormsModule,
    DragAndDropModule.forRoot(),
    // NgxsModule.forFeature([
    //
    // ]),
    // NgxsStoragePluginModule.forRoot(),
    // NgxsReduxDevtoolsPluginModule.forRoot(),
    // NgxsLoggerPluginModule.forRoot(),
    HttpClientModule,
    // HotTableModule,

    // BrowserAnimationsModule, // required animations module
    // ToastrModule.forRoot(), // ToastrModule added,
    ProgressbarModule.forRoot(),
    ClickOutsideModule,
    SharedModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot()

  ],
  providers: [AimService]
})
export class CoreModule {
}
