import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EBotType, ViewBotsComponent} from './view-bots.component';
import {ViewCodeBasedBotComponent} from './view-code-based-bot/view-code-based-bot.component';
import {ViewPipelineBasedBotsComponent} from './view-pipeline-based-bots/view-pipeline-based-bots.component';
import {BsDropdownModule, ModalModule, TabsModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
// import {DragAndDropModule} from 'angular-draggable-droppable';
// import {NgxsModule} from '@ngxs/store';
// import {ViewBotStateReducer} from './ngxs/view-bot.state';
// import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
// import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
// import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {HttpClientModule} from '@angular/common/http';
import {Ng2CompleterModule} from 'ng2-completer';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {DragService} from '../../drag.service';
import {AimService} from '../../aim.service';
import {SortObjectArrayPipe} from '../../sort-object-array.pipe';
import {BotPreviewCardComponent} from './bot-preview-card/bot-preview-card.component';
import {SharedModule} from '../../shared.module';
import {AuthGaurdService} from '../../auth-gaurd.service';

const routes: Route[] = [
  {

    path: '', component: ViewBotsComponent, canActivateChild:[AuthGaurdService], children:
      [
        {path: EBotType.chatbot, component: ViewCodeBasedBotComponent, data: {route: EBotType.chatbot}},
        {path: EBotType.intelligent, component: ViewPipelineBasedBotsComponent, data: {route: EBotType.intelligent}},
      ]
  }
];

@NgModule({
  declarations: [
    ViewBotsComponent,
    ViewCodeBasedBotComponent,
    ViewPipelineBasedBotsComponent,
    BotPreviewCardComponent,
    SortObjectArrayPipe,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule,
    // DragAndDropModule.forRoot(),
    // NgxsModule.forFeature([
    //   ViewBotStateReducer,
    // ]),
    // NgxsStoragePluginModule.forRoot(),
    // NgxsReduxDevtoolsPluginModule.forRoot(),
    // NgxsLoggerPluginModule.forRoot(),
    SharedModule,
    HttpClientModule,
    Ng2CompleterModule,
    Ng2SmartTableModule,
    ModalModule.forRoot(),
  ],
  providers: [DragService, AimService]
})
export class ViewBotsModule{
}
