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
import {TestComponent} from '../test/test.component';
import {ChatPreviewNewPageComponent} from '../chat/chat-preview-new-page/chat-preview-new-page.component';
import {FooterComponent} from '../footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {DragAndDropModule} from 'angular-draggable-droppable';
import {HttpClientModule} from '@angular/common/http';
import {AimService} from '../aim.service';
import {HeaderComponent} from './header/header.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared.module';
import {ViewCustomnerComponent} from './customner/view-customner/view-customner.component';
import {AuthGaurdService} from '../auth-gaurd.service';
import {AccessGaurdService} from '../access-gaurd.service';
import {ERouteNames} from '../constants.service';
import {ChatModule} from '../chat/chat.module';
import {EBotType} from '../utility.service';
import { StringIncludesPipe } from './buildbot/build-code-based-bot/architecture/pipeline/string-includes.pipe';
import {MyMaterialModule} from '../my-material.module';
import {CreateBotDialogComponent} from './view-bots/create-bot-dialog/create-bot-dialog.component';
import {ModalConfirmComponent} from '../modal-confirm/modal-confirm.component';
import {GentemplateEditKeyComponent} from './buildbot/build-code-based-bot/architecture/code/code-input/code-gentemplate-ui-component-wrapper/gentemplate-edit-key/gentemplate-edit-key.component';
import {BotSessionModalWrapperComponent} from '../bot-session-modal-wrapper/bot-session-modal-wrapper.component';
import { UrlValidatorDirective } from './buildbot/build-code-based-bot/architecture/code/code-input/code-gentemplate-ui-component-wrapper/code-input-caraosal/url-validator.directive';
import { EnterpriseOverviewComponent } from './enterpriseprofile/enterprise-overview/enterprise-overview.component';
import { EnterpriseUsersComponent } from './enterpriseprofile/enterprise-users/enterprise-users.component';
import { EnterpriseRolesComponent } from './enterpriseprofile/enterprise-roles/enterprise-roles.component';
const routes: Route[] = [
  {

    path: '',
    component: CoreWrapperComponent,
    canActivate: [AuthGaurdService],
    canActivateChild: [AuthGaurdService, AccessGaurdService],
    children: [
      {
        path: 'viewbots', loadChildren: './view-bots/view-bots.module#ViewBotsModule', canLoad: [AuthGaurdService]
      },
      {
        path: 'botdetail', loadChildren: './bot-detail/bot-detail.module#BotDetailModule', canLoad: [AuthGaurdService]
      },
      {
        path: 'analytics2', loadChildren: './analysis2/analysis2.module#Analysis2Module', canLoad: [AuthGaurdService]
      },
      {path: 'customner', component: ViewCustomnerComponent, data: {routeName: ERouteNames['Get Enterprise Knowledge base']}, canActivate: []},
      {path: 'customner/create', component: CreateCustomnerComponent, data: {routeName: ERouteNames['Create Enterprise Knowledge base']}},
      {path: 'enterpriseprofile', component: EnterpriseprofileComponent, data: {routeName: ERouteNames['Get Enterprise']}, canActivate: []},
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
    EnterpriseOverviewComponent,
    ReportsComponent,
    CoreWrapperComponent,
    BuildbotWrapperComponent,
    SignupComponent,
    PipelineTestComponent,

    ScrollerDirective,
    ReportDetailsComponent,
    // BotWelcomeComponent,
    ReportDisplayComponent,
    ReportControlsComponent,
    TestComponent,
    ChatPreviewNewPageComponent,
    FooterComponent,
    EnterpriseOverviewComponent,
    EnterpriseUsersComponent,
    EnterpriseRolesComponent
    // DisplayNameForKeyIntegrationPipe,

    /*added after lazy loading*/

    // HighlightDirective

  ],
  entryComponents: [
    ModalConfirmComponent,
    GentemplateEditKeyComponent,
    BotSessionModalWrapperComponent
  ],
  imports: [
    ChatModule,
    CommonModule,
    RouterModule.forChild(routes), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    FormsModule,
    // DragAndDropModule.forRoot(),
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    MyMaterialModule

  ],
  providers: [AimService]
})
export class CoreModule {
}
