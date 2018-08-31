import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {Route, RouterModule} from '@angular/router';
import { ProgressbarModule } from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {DragService} from './drag.service';
import {AimService} from './aim.service';
import {NGXS_PLUGINS, NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {HttpClientModule} from '@angular/common/http';
import {AppStateReducer} from './ngxs/app.state';
import {AuthStateReducer} from './auth/ngxs/auth.state';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
import {BackendDevComponent} from './backend-dev/backend-dev.component';
// import {AnalysisStateReducer2} from './core/analysis2/ngxs/analysis.state';

// const routes: Route[] = [
//   {
//
//     path: 'core',
//     canActivate: [AuthGaurdService],
//     canActivateChild: [AuthGaurdService],
//     component: CoreWrapperComponent, children: [
//       {
//         path: 'viewbots', component: ViewBotsComponent, children:
//           [
//             {path: 'codebased', component: ViewCodeBasedBotComponent, data:{route:'codebased'}},
//             {path: 'intelligent', component: ViewPipelineBasedBotsComponent, data:{route:'intelligent'}},
//             // {path: '', component: ViewCodeBasedBotComponent}
//           ]
//       },
//       {
//         path: 'botdetail', component: BotDetailWrapperComponent, children:
//           [
//             {path: 'codebased/:id', component: CodeBasedBotDetailComponent},
//             {path: 'intelligent/:id', component: PipelineBasedBotDetailComponent},
//           ]
//       },
//       {
//         path: 'analytics2', component: Analysis2WrapperComponent,children: [
//           {path: '', redirectTo: "overview", pathMatch:"full" },
//           {path: 'overview', component: Analysis2OverviewComponent},
//           {path: 'volume', component: Analysis2VolumeComponent},
//           {path: 'performance', component: Analysis2PerformanceComponent},
//           {path: 'engagement', component: Analysis2EngagementComponent},
//
//         ]
//       },
//       {
//         path: 'analytics', component: WrapperComponent, children:
//           [
//             {path: 'overview', component: OverviewComponent},
//             {path: 'users', component: UsersComponent},
//             {path: 'sessions', component: SessionsComponent},
//             {path: 'messages', component: MessagesComponent},
//             {path: 'platforms', component: PlatformsComponent},
//             {path: 'events', component: EventsComponent},
//             {path: 'engagement', component: EngagementComponent},
//             {path: 'usage', component: UsageComponent}
//           ]
//       },
//
//       {path: 'customner', component: ViewCustomnerComponent},
//       {path: 'customner/create', component: CreateCustomnerComponent},
//       {path: 'enterpriseprofile', component: EnterpriseprofileComponent},
//       {path: 'profile', component: ProfileComponent},
//       {path: 'reports', component: ReportsComponent},
//       {path: 'reports/edit/:_id', component: ReportDetailsComponent},
//       {path: 'documentation', component: DocumentationComponent},
//       // {path: 'buildbot/codebased', component: BuildCodeBasedBotComponent},
//       // {path: 'buildbot/intelligent', component: BuildPipelineBasedBotComponent},
//       {
//         path: 'buildbot', component: BuildbotWrapperComponent, children:
//           [
//             {path: 'codebased', component: BuildCodeBasedBotComponent, data:{buildBot:'codeBased'}},
//             {path: 'intelligent', component: BuildPipelineBasedBotComponent, data:{buildBot:'pipeLineBased'}},
//             {path: '', component: ViewCodeBasedBotComponent}
//           ]
//       },
//       // {path: 'viewbots/codebased', component: ViewCodeBasedBotComponent},
//       // {path: 'viewbots/intelligent', component: ViewPipelineBasedBotsComponent},
//       {path: '**', component: NotFoundComponent}
//     ],
//   },
//
//   {path: 'preview', component:ChatWrapperComponent, data:{isFullScreenPreview:true} },
//   {path: '', redirectTo: 'core/viewbots/codebased', pathMatch: 'full'},
// ];

@NgModule({
  declarations: [
    AppComponent,
    BackendDevComponent,
    // HeaderComponent,
    // ViewBotsComponent,
    // ViewCodeBasedBotComponent,
    // ViewPipelineBasedBotsComponent,
    // BotPreviewCardComponent,
    // NotFoundComponent,
    // BuildCodeBasedBotComponent,
    // BuildPipelineBasedBotComponent,
    // RouterFragmentActiveDirective,
    // BasicInfoFormComponent,
    // AvatorFormComponent,
    // PipelineComponent,
    // KnowledgeBaseComponent,
    // CodeInputComponent,
    // IntegrationOptionListComponent,
    // CodeEditorComponent,
    // IntegrationItemComponent,
    // DraggableDirective,
    // DropTargetDirective,
    // DocumentationComponent,
    // ViewCustomnerComponent,
    // CreateCustomnerComponent,
    // OverviewComponent,
    // UsersComponent,
    // SessionsComponent,
    // MessagesComponent,
    // PlatformsComponent,
    // EventsComponent,
    // EngagementComponent,
    // UsageComponent,
    // ProfileComponent,
    // EnterpriseprofileComponent,
    // WrapperComponent,
    // ReportsComponent,
    // ChartComponent,
    // BuildbotWrapperComponent,
    // CoreWrapperComponent,
    // SignupComponent,
    // AuthWrapperComponent,
    // PipelineTestComponent,
    // HandsontableComponent,
    // SmartTableComponent,
    // BotDetailWrapperComponent,
    // CodeBasedBotDetailComponent,
    // PipelineBasedBotDetailComponent,
    // BotTestingComponent,
    // ConsumersComponent,
    // SessionComponent,
    // BotSessionsComponent,
    // ChatWrapperComponent,
    // ChatWindowComponent,
    // ChatMessageComponent,
    // BotWelcomeComponent,
    // ChatListComponent,
    // ChatItemComponent,
    // ChatroomComponent,
    // ScrollerDirective,
    // ReportDetailsComponent,
    // ReportDisplayComponent,
    // ReportControlsComponent,
    // TestComponent,
    // SessionDetailModelComponent,
    // SessionTabsDetailsComponent,
    // SessionMessageComponent,
    // Analysis2WrapperComponent,
    // Analysis2HeaderComponent,
    // Analysis2BodyComponent,
    // Analysis2OverviewComponent,
    // Analysis2VolumeComponent,
    // Analysis2PerformanceComponent,
    // Analysis2EngagementComponent,
    // DataManageFormComponent,
    // AdditionalInfoFormComponent,
    // BotConfigComponent,
    // BotArchitetureComponent,
    // BotDetailHeaderComponent,
    // FilterActiveBotPipe,
    // FilterArrayPipe,
    // PipelineFilterPipe,
    // ChatPreviewNewPageComponent,
    // FilterObjectArrayPipe,
    // IntegrationLogosPipe,
    // IntegrationImageCountPipe,
    // IntegrationInputKeysFilterPipe,
    // ProfilePermissionIdToNamePipe,
    // BotIdToNamePipe,
    // FooterComponent,
    // BackendDevComponent,
    // EnabledIntegrationsCountPipe,
    // SortObjectArrayPipe,
    // SerializeEnterpriseprofileDataPipe,
    // KnowledgeBasePresentationComponent,
    // KnowledgeBaseWrapperComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,//.forRoot(routes), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    // BsDropdownModule.forRoot(),
    // TabsModule.forRoot(),
    // AceEditorModule,
    // UiSwitchModule,
    FormsModule,
    // DragAndDropModule.forRoot(),
    // ChartModule,
    NgxsModule.forRoot([
      AuthStateReducer,
      // NavigationStateReducer,
      AppStateReducer,
      // EnterpriseprofileStateReducer,
      // ViewBotStateReducer,
      // ChatSessionStateReducer,
      // BotCreationStateReducer,
      // AnalysisStateReducer,
      // ReportsStateReducer,
      // AnalysisStateReducer2
    ]),
    NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    HttpClientModule,
    // DragulaModule,
    // HotTableModule,
    // Ng2CompleterModule,
    // Ng2SmartTableModule,
    // BsDatepickerModule.forRoot(),
    // ModalModule.forRoot(),
    // TooltipModule.forRoot(),
    // BrowserAnimationsModule, // required animations module
    // ToastrModule.forRoot(), // ToastrModule added,
    ProgressbarModule.forRoot(),
    // ClickOutsideModule,
    //
    /*custom modules*/
    AuthModule,
    CoreModule
  ],
  providers: [DragService, AimService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
