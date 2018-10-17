import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BsDropdownModule, ModalModule, TabsModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
// import {DragAndDropModule} from 'angular-draggable-droppable';
// import {NgxsModule} from '@ngxs/store';
// import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
// import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
// import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {HttpClientModule} from '@angular/common/http';
import {Ng2CompleterModule} from 'ng2-completer';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {DragService} from '../../drag.service';
import {AimService} from '../../aim.service';
import {SortObjectArrayPipe} from '../../sort-object-array.pipe';
import {SharedModule} from '../../shared.module';
import {PipelineBasedBotDetailComponent} from './pipeline-based-bot-detail/pipeline-based-bot-detail.component';
import {CodeBasedBotDetailComponent} from './code-based-bot-detail/code-based-bot-detail.component';
import {BotDetailHeaderComponent} from './bot-detail-header/bot-detail-header.component';
import {BotDetailWrapperComponent} from './bot-detail-wrapper.component';
import {BotTestingComponent} from './bot-testing/bot-testing.component';
import {BotSessionsComponent} from './bot-sessions/bot-sessions.component';
import {SessionDetailModelComponent} from './bot-sessions/session-detail-model/session-detail-model.component';
import {ConsumersComponent} from './consumers/consumers.component';
import {SessionMessageComponent} from './bot-sessions/session-detail-model/session-message/session-message.component';
import {SessionTabsDetailsComponent} from './bot-sessions/session-detail-model/session-tabs-details/session-tabs-details.component';
import {PipelineFilterPipe} from '../../pipeline-filter.pipe';
import {SessionComponent} from './session/session.component';
import {PipelineComponent} from '../buildbot/build-code-based-bot/architecture/pipeline/pipeline.component';
import {CodeInputComponent} from '../buildbot/build-code-based-bot/architecture/code/code-input/code-input.component';
import {IntegrationOptionListComponent} from '../buildbot/build-code-based-bot/architecture/integration/integration-option-list/integration-option-list.component';
import {IntegrationItemComponent} from '../buildbot/build-code-based-bot/architecture/integration/integration-item/integration-item.component';
import {DraggableDirective} from '../../draggable.directive';
import {DropTargetDirective} from '../../drop-target.directive';
import {KnowledgeBaseWrapperComponent} from '../buildbot/build-code-based-bot/architecture/knowledge-base-wrapper/knowledge-base-wrapper.component';
import { LimitObjectArraysStringPipe } from './consumers/limit-object-arrays-string.pipe';
import { ConsumerFullscreenWrapperComponent } from './consumers/consumer-fullscreen-wrapper/consumer-fullscreen-wrapper.component';
import {EBotType} from '../view-bots/view-bots.component';
import {AuthGaurdService} from '../../auth-gaurd.service';
import {RequiredIfOneFilledValidator} from '../buildbot/build-code-based-bot/architecture/integration/integration-option-list/requiredIfOneFilledValidator.directive';
import {DragulaModule} from 'ng2-dragula';
import {RichMediaModule} from '../../rich-media.module';
import {SessionDataToRichMediaSerializerPipe} from '../../session-data-to-rich-media-serializer.pipe';
import {DisplayNameForKeyIntegrationPipe} from '../buildbot/build-code-based-bot/architecture/integration/integration-option-list/display-name-for-key-integration.pipe';
import { CodeGentemplateComponent } from '../buildbot/build-code-based-bot/architecture/code/code-input/code-gentemplate/code-gentemplate.component';
import { TextGentemplateComponent } from '../buildbot/build-code-based-bot/architecture/code/code-input/text-gentemplate/text-gentemplate.component';
import {FilterTemplateLeyListPipe} from '../buildbot/build-code-based-bot/architecture/code/code-input/filter-template-ley-list.pipe';
import {LogosByIntegrationNamePipe} from '../buildbot/build-code-based-bot/architecture/code/code-input/text-gentemplate/logos-by-integration-name.pipe';

const routes: Route[] = [
  {
    path: '', component: BotDetailWrapperComponent, canActivateChild:[AuthGaurdService], children:
      [
        {path: `${EBotType.chatbot}/:id`, component: CodeBasedBotDetailComponent, data: {bot_type: EBotType.chatbot}},
        {path: `${EBotType.intelligent}/:id`, component: PipelineBasedBotDetailComponent, data: {bot_type: EBotType.intelligent}},
        {path: ':id/consumer', component: ConsumerFullscreenWrapperComponent, data:{isFullscreen:true}},
      ]
  }
];

@NgModule({
  declarations: [
    SessionDataToRichMediaSerializerPipe,
    CodeBasedBotDetailComponent,
    PipelineBasedBotDetailComponent,
    BotDetailHeaderComponent,
    BotDetailWrapperComponent,
    BotTestingComponent,
    BotSessionsComponent,
    SessionDetailModelComponent,
    ConsumersComponent,
    SessionDetailModelComponent,
    SessionTabsDetailsComponent,
    SessionMessageComponent,
    PipelineComponent,
    PipelineFilterPipe,
    SessionComponent,
    CodeInputComponent,
    LogosByIntegrationNamePipe,
    FilterTemplateLeyListPipe,
    CodeGentemplateComponent,
    TextGentemplateComponent,
    IntegrationOptionListComponent,
    IntegrationItemComponent,
    DraggableDirective,
    DropTargetDirective,
    KnowledgeBaseWrapperComponent,
    DisplayNameForKeyIntegrationPipe,
    LimitObjectArraysStringPipe,
    ConsumerFullscreenWrapperComponent,
/*after lazy loading*/
    RequiredIfOneFilledValidator
  ],
  imports: [
    RichMediaModule,
    DragulaModule,
    CommonModule,
    RouterModule.forChild(routes), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule,
    // DragAndDropModule.forRoot(),
    // NgxsModule.forFeature([]),
    SharedModule,
    HttpClientModule,
    Ng2SmartTableModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [AimService]
})
export class BotDetailModule {

}
