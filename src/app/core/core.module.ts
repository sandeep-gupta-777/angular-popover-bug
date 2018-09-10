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
import {FormsModule} from '@angular/forms';
import {DragAndDropModule} from 'angular-draggable-droppable';
import {HttpClientModule} from '@angular/common/http';
import {AimService} from '../aim.service';
import {HeaderComponent} from './header/header.component';
import {BackendDevComponent} from '../backend-dev/backend-dev.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared.module';
import {ViewCustomnerComponent} from './customner/view-customner/view-customner.component';
import {AuthGaurdService} from '../auth-gaurd.service';
import {EBotType} from './view-bots/view-bots.component';
import {CardCarouselComponent} from '../chat/carousel/card-carousel/card-carousel.component';
// import { IntegrationNameFormatterPipe } from './buildbot/build-code-based-bot/architecture/integration/integration-option-list/integration-name-formatter.pipe';

const routes: Route[] = [
  {

    path: '',
    component: CoreWrapperComponent, children: [
      {
        path: 'viewbots', loadChildren: './view-bots/view-bots.module#ViewBotsModule',canLoad:[AuthGaurdService]
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

      {path: 'customner', component: ViewCustomnerComponent, data:{routeName:'customner'}, canActivate:[AuthGaurdService]},
      {path: 'customner/create', component: CreateCustomnerComponent, canActivate:[AuthGaurdService]},
      {path: 'enterpriseprofile', component: EnterpriseprofileComponent, canActivate:[AuthGaurdService]},
      {path: 'profile', component: ProfileComponent, canActivate:[AuthGaurdService]},
      {path: 'reports', component: ReportsComponent, canActivate:[AuthGaurdService]},
      {path: 'reports/edit/:_id', component: ReportDetailsComponent, canActivate:[AuthGaurdService]},
      {path: 'reports/create', component: ReportDetailsComponent, canActivate:[AuthGaurdService]},
      {path: 'documentation', component: DocumentationComponent, canActivate:[AuthGaurdService]},
      // {path: 'buildbot/codebased', component: BuildCodeBasedBotComponent, canActivate:[AuthGaurdService]},
      // {path: 'buildbot/intelligent', component: BuildPipelineBasedBotComponent, canActivate:[AuthGaurdService]},
      {
        path: 'buildbot', component: BuildbotWrapperComponent, children:
          [
            {path: EBotType.chatbot, component: BuildCodeBasedBotComponent, data: {buildBot: EBotType.chatbot}},
            {path: 'intelligent', component: BuildPipelineBasedBotComponent, data: {buildBot: 'pipeLineBased'}},
            // {path: '', component: ViewCodeBasedBotComponent}
          ]
      },
      // {path: 'viewbots/codebased', component: ViewCodeBasedBotComponent},
      // {path: 'viewbots/intelligent', component: ViewPipelineBasedBotsComponent},
      // {path: '**', component: NotFoundComponent}
    ],
  },

  {path: 'preview', component: ChatWrapperComponent, data: {isFullScreenPreview: true}, canActivate:[AuthGaurdService]},
  {path: '', redirectTo: `core/viewbots/${EBotType.chatbot}`, pathMatch: 'full'},
];

@NgModule({
  declarations: [
    HeaderComponent,
    BuildCodeBasedBotComponent,
    BuildPipelineBasedBotComponent,
    RouterFragmentActiveDirective,
    DocumentationComponent,
    ViewCustomnerComponent,
    CreateCustomnerComponent,
    ProfileComponent,
    EnterpriseprofileComponent,
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
    BackendDevComponent,

    /*added after lazy loading*/
    CardCarouselComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    FormsModule,
    DragAndDropModule.forRoot(),
    HttpClientModule,
    SharedModule,

  ],
  providers: [AimService]
})
export class CoreModule {
}
