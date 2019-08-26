import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DragService} from '../../drag.service';
import {SharedModule} from '../../shared.module';
import {Analysis2WrapperComponent} from './analysis2-wrapper/analysis2-wrapper.component';
import {Analysis2VolumeComponent} from './analysis2-volume/analysis2-volume.component';
import {Analysis2PerformanceComponent} from './analysis2-performance/analysis2-performance.component';
import {Analysis2OverviewComponent} from './analysis2-overview/analysis2-overview.component';
import {Analysis2EngagementComponent} from './analysis2-engagement/analysis2-engagement.component';
import {Analysis2HeaderComponent} from './analysis2-header/analysis2-header.component';
import {Analysis2UsageComponent} from './analysis2-usage/analysis2-usage.component';
import { OrderByBotNamePipePipe } from './analysis2-header/order-by-bot-name-pipe.pipe';

const routes: Route[] = [
  {
    path: '', component: Analysis2WrapperComponent, canActivateChild: [], children: [
      {path: '', redirectTo: 'users', pathMatch: 'full'},
      {path: 'overview', component: Analysis2OverviewComponent},
      {path: 'volume', component: Analysis2VolumeComponent},
      {path: 'performance', component: Analysis2PerformanceComponent},
      {path: 'engagement', component: Analysis2EngagementComponent},
      {path: 'usage', component: Analysis2UsageComponent},
    ]
  }
];

@NgModule({
  declarations: [
    Analysis2WrapperComponent,
    Analysis2HeaderComponent,
    Analysis2OverviewComponent,
    Analysis2VolumeComponent,
    Analysis2PerformanceComponent,
    Analysis2EngagementComponent,
    Analysis2UsageComponent,
    OrderByBotNamePipePipe
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
  providers: [
    DragService
  ]
})
export class Analysis2Module {

}
