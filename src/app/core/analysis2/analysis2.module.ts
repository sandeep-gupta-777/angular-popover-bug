import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragService } from '../../drag.service';
import { AimService } from '../../aim.service';
import { SharedModule } from '../../shared.module';
import { Analysis2WrapperComponent } from './analysis2-wrapper/analysis2-wrapper.component';
import { Analysis2VolumeComponent } from './analysis2-volume/analysis2-volume.component';
import { Analysis2PerformanceComponent } from './analysis2-performance/analysis2-performance.component';
import { Analysis2OverviewComponent } from './analysis2-overview/analysis2-overview.component';
import { Analysis2EngagementComponent } from './analysis2-engagement/analysis2-engagement.component';
import { Analysis2HeaderComponent } from './analysis2-header/analysis2-header.component';
import { Analysis2BodyComponent } from './analysis2-body/analysis2-body.component';
// import { Analytics2UsersComponent } from './according-to-old-ui/analytics2-users/analytics2-users.component';
// import { Analytics2SessionsComponent } from './according-to-old-ui/analytics2-sessions/analytics2-sessions.component';
// import { Analysis2MessagesComponent } from './according-to-old-ui/analysis2-messages/analysis2-messages.component';
// import { Analysis2PlatformComponent } from './according-to-old-ui/analysis2-platform/analysis2-platform.component';
// import { Analysis2EventsComponent } from './according-to-old-ui/analysis2-events/analysis2-events.component';
// import { Analysis2UsageComponent } from './according-to-old-ui/analysis2-usage/analysis2-usage.component';
// import { Analysis2Engagement1Component } from './according-to-old-ui/analysis2-engagement1/analysis2-engagement1.component';
import { AuthGaurdService } from '../../auth-gaurd.service';
import { Analysis2UsageComponent } from './analysis2-usage/analysis2-usage.component';

const routes: Route[] = [
  {
    path: '', component: Analysis2WrapperComponent, canActivateChild: [AuthGaurdService], children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      // {path: 'overview', component: Analysis2OverviewComponent},
      { path: 'overview', component: Analysis2OverviewComponent },
      { path: 'volume', component: Analysis2VolumeComponent },
      { path: 'performance', component: Analysis2PerformanceComponent },
      { path: 'engagement', component: Analysis2EngagementComponent },
      { path: 'usage', component: Analysis2UsageComponent },

      /*Analytics2: According to old UI*/
      // { path: 'users', component: Analytics2UsersComponent },
      // { path: 'sessions', component: Analytics2SessionsComponent },
      // { path: 'messages', component: Analysis2MessagesComponent },
      // { path: 'platform', component: Analysis2PlatformComponent },
      // { path: 'events', component: Analysis2EventsComponent },
      // { path: 'engagement', component: Analysis2EngagementComponent },
      // { path: 'usage', component: Analysis2UsageComponent },

    ]
  }
];

@NgModule({
  declarations: [
    Analysis2WrapperComponent,
    Analysis2HeaderComponent,
    Analysis2BodyComponent,
    Analysis2OverviewComponent,
    Analysis2VolumeComponent,
    Analysis2PerformanceComponent,
    Analysis2EngagementComponent,
    Analysis2UsageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    FormsModule,
    // DragAndDropModule.forRoot(),
    // NgxsModule.forFeature([
    //   AnalysisStateReducer2
    // ]),
    SharedModule,
    HttpClientModule,
    // ModalModule.forRoot(),
  ],
  providers: [DragService, AimService]
})
export class Analysis2Module {

}
