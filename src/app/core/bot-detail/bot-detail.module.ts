import {Route, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AimService} from '../../aim.service';
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
import {PipelineComponent} from '../buildbot/build-code-based-bot/architecture/pipeline/pipeline.component';
import {CodeInputComponent} from '../buildbot/build-code-based-bot/architecture/code/code-input/code-input.component';
import {IntegrationOptionListComponent} from '../buildbot/build-code-based-bot/architecture/integration/integration-option-list/integration-option-list.component';
import {IntegrationItemComponent} from '../buildbot/build-code-based-bot/architecture/integration/integration-item/integration-item.component';
import {DraggableDirective} from '../../draggable.directive';
import {DropTargetDirective} from '../../drop-target.directive';
import {KnowledgeBaseWrapperComponent} from '../buildbot/build-code-based-bot/architecture/knowledge-base-wrapper/knowledge-base-wrapper.component';
import { LimitObjectArraysStringPipe } from './consumers/limit-object-arrays-string.pipe';
import { ConsumerFullscreenWrapperComponent } from './consumers/consumer-fullscreen-wrapper/consumer-fullscreen-wrapper.component';
import {AuthGaurdService} from '../../auth-gaurd.service';
import {RequiredIfOneFilledValidator} from '../buildbot/build-code-based-bot/architecture/integration/integration-option-list/requiredIfOneFilledValidator.directive';
import {DragulaModule} from 'ng2-dragula';
import {RichMediaModule} from '../../rich-media.module';
import {SessionDataToRichMediaSerializerPipe} from '../../session-data-to-rich-media-serializer.pipe';
import {DisplayNameForKeyIntegrationPipe} from '../buildbot/build-code-based-bot/architecture/integration/integration-option-list/display-name-for-key-integration.pipe';
import {UnderscroreToSpaceDelimitorPipe} from '../buildbot/build-code-based-bot/architecture/pipeline/underscrore-to-space-delimitor.pipe';

import { CodeGentemplateComponent } from '../buildbot/build-code-based-bot/architecture/code/code-input/code-gentemplate-ui-component-wrapper/code-gentemplate/code-gentemplate.component';
import { TextGentemplateComponent } from '../buildbot/build-code-based-bot/architecture/code/code-input/code-gentemplate-ui-component-wrapper/text-gentemplate/text-gentemplate.component';
import {FilterTemplateLeyListPipe} from '../buildbot/build-code-based-bot/architecture/code/code-input/filter-template-ley-list.pipe';
import {LogosByIntegrationNamePipe} from '../buildbot/build-code-based-bot/architecture/code/code-input/code-gentemplate-ui-component-wrapper/text-gentemplate/logos-by-integration-name.pipe';
import {FilterResponseComponentByChannelNamePipe} from '../buildbot/build-code-based-bot/architecture/code/code-input/filter-response-component-by-channel-name.pipe';
import {NumberOfTrueKeysPipe} from '../buildbot/build-code-based-bot/architecture/code/code-input/number-of-true-keys.pipe';
import {DataTypePipe} from '../buildbot/build-code-based-bot/architecture/code/code-input/data-type.pipe';
import {CodeInputCaraosalComponent} from '../buildbot/build-code-based-bot/architecture/code/code-input/code-gentemplate-ui-component-wrapper/code-input-caraosal/code-input-caraosal.component';
import {CodeQuickReplyComponent} from '../buildbot/build-code-based-bot/architecture/code/code-input/code-gentemplate-ui-component-wrapper/code-quick-reply/code-quick-reply.component';
import {CodeQuickReplyWrapperComponent} from '../../code-quick-reply-wrapper/code-quick-reply-wrapper.component';
import {CodeQuickReplyButtonWrapperComponent} from '../../code-quick-reply-button-wrapper/code-quick-reply-button-wrapper.component';
import {TypeForIntegrationTypePipe} from '../../type-for-integration-type.pipe';
import {IntegrationItemForTypePipe} from '../../integration-item-for-type.pipe';
import {CodeGentemplateUiComponentWrapperComponent} from '../buildbot/build-code-based-bot/architecture/code/code-input/code-gentemplate-ui-component-wrapper/code-gentemplate-ui-component-wrapper.component';
import {CodeVersionListComponent} from '../buildbot/build-code-based-bot/architecture/code/code-input/code-version-list/code-version-list.component';
import {CodeGentemplateUiWrapperComponent} from '../buildbot/build-code-based-bot/architecture/code/code-input/code-gentemplate-ui-wrapper/code-gentemplate-ui-wrapper.component';
import {TrimStringPipe} from '../../trim-string.pipe';
import {DebounceClickDirective} from '../../debounce-click.directive';
import {CheckImageValidityPipe} from '../../check-image-validity.pipe';
import {HasChannelPipe} from '../../has-channel.pipe';
import {MyMaterialModule} from '../../my-material.module';
import {EBotType} from '../../utility.service';
import {StringIncludesPipe} from '../buildbot/build-code-based-bot/architecture/pipeline/string-includes.pipe';
import {SimpleTableComponent} from '../buildbot/build-code-based-bot/architecture/pipeline/simple-table/simple-table.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {UrlValidatorDirective} from '../buildbot/build-code-based-bot/architecture/code/code-input/code-gentemplate-ui-component-wrapper/code-input-caraosal/url-validator.directive';

const routes: Route[] = [
  {
    path: '', component: BotDetailWrapperComponent, canActivateChild: [AuthGaurdService], children:
      [
        {path: `${EBotType.chatbot}/:id`, component: CodeBasedBotDetailComponent, data: {bot_type: EBotType.chatbot}},
        {path: `${EBotType.intelligent}/:id`, component: PipelineBasedBotDetailComponent, data: {bot_type: EBotType.intelligent}},
        {path: ':id/consumer', component: ConsumerFullscreenWrapperComponent, data: {isFullscreen: true}},
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
    SessionTabsDetailsComponent,
    SessionMessageComponent,
    PipelineComponent,
    SimpleTableComponent,
    StringIncludesPipe,
    UnderscroreToSpaceDelimitorPipe,
    CodeInputComponent,
    CodeGentemplateUiComponentWrapperComponent,
    CodeVersionListComponent,
    CodeGentemplateUiWrapperComponent,
    HasChannelPipe,
    TrimStringPipe,
    FilterTemplateLeyListPipe,
    CodeInputCaraosalComponent,
    UrlValidatorDirective,
    CheckImageValidityPipe,
    DebounceClickDirective,
    CodeQuickReplyWrapperComponent,
    CodeQuickReplyComponent,
    CodeQuickReplyButtonWrapperComponent,
    DataTypePipe,
    NumberOfTrueKeysPipe,
    FilterResponseComponentByChannelNamePipe,
    LogosByIntegrationNamePipe,
    CodeGentemplateComponent,
    TextGentemplateComponent,
    IntegrationOptionListComponent,
    TypeForIntegrationTypePipe,
    IntegrationItemForTypePipe,
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
    FormsModule,
    SharedModule,
    HttpClientModule,
    MyMaterialModule,
    DragDropModule
  ],
  providers: [AimService]
})
export class BotDetailModule {

}
