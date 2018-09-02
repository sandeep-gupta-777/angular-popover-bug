import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BsDatepickerModule, BsDropdownModule, ModalModule, TabsModule, TooltipModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {DragAndDropModule} from 'angular-draggable-droppable';
import {NgxsModule} from '@ngxs/store';
import {HttpClientModule} from '@angular/common/http';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {DragService} from '../../drag.service';
import {AimService} from '../../aim.service';
import {SharedModule} from '../../shared.module';
import {Analysis2WrapperComponent} from './analysis2-wrapper/analysis2-wrapper.component';
import {Analysis2VolumeComponent} from './analysis2-volume/analysis2-volume.component';
import {Analysis2PerformanceComponent} from './analysis2-performance/analysis2-performance.component';
import {Analysis2OverviewComponent} from './analysis2-overview/analysis2-overview.component';
import {Analysis2EngagementComponent} from './analysis2-engagement/analysis2-engagement.component';
import {Analysis2HeaderComponent} from './analysis2-header/analysis2-header.component';
import {Analysis2BodyComponent} from './analysis2-body/analysis2-body.component';
import {AnalysisStateReducer2} from './ngxs/analysis.state';

const routes: Route[] = [
  {
    path: '', component: Analysis2WrapperComponent, children: [
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'overview', component: Analysis2OverviewComponent},
      {path: 'volume', component: Analysis2VolumeComponent},
      {path: 'performance', component: Analysis2PerformanceComponent},
      {path: 'engagement', component: Analysis2EngagementComponent},

    ]
  }
];

@NgModule({
  declarations: [
    Analysis2WrapperComponent ,
    Analysis2HeaderComponent,
    Analysis2BodyComponent,
    Analysis2OverviewComponent,
    Analysis2VolumeComponent,
    Analysis2PerformanceComponent,
    Analysis2EngagementComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule,
    DragAndDropModule.forRoot(),
    NgxsModule.forFeature([
      AnalysisStateReducer2
    ]),
    SharedModule,
    HttpClientModule,
    // Ng2SmartTableModule,
    // ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [DragService, AimService]
})
export class Analysis2Module {

}
