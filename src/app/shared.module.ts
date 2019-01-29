import {NgModule} from '@angular/core';
import {IntegrationLogosPipe} from './integration-logos.pipe';
import {DataManageFormComponent} from './core/buildbot/build-code-based-bot/bot-config/data-manage-form/data-manage-form.component';
import {BasicInfoFormComponent} from './core/buildbot/build-code-based-bot/bot-config/basic-info-form/basic-info-form.component';
import {BotConfigComponent} from './core/buildbot/build-code-based-bot/bot-config/bot-config.component';
import {BotArchitetureComponent} from './core/buildbot/build-code-based-bot/architecture/bot-architeture.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BotIdToNamePipe} from './bot-id-to-name.pipe';
import {RouterModule} from '@angular/router';
import {AdditionalInfoFormComponent} from './core/buildbot/build-code-based-bot/bot-config/additional-info-form/additional-info-form.component';
import {SmartTableComponent} from './smart-table/smart-table.component';
import {CodeEditorComponent} from './core/buildbot/build-code-based-bot/architecture/code/code-editor/code-editor.component';
import {KnowledgeBaseComponent} from './core/buildbot/build-code-based-bot/architecture/knowledge-base/knowledge-base.component';


import {KnowledgeBasePresentationComponent} from './core/buildbot/build-code-based-bot/architecture/knowledge-base/knowledge-base-presentation/knowledge-base-presentation.component';
import {ChartComponent} from './core/chart/chart.component';
import {HandsontableComponent} from './handsontable/handsontable.component';
// import {ChartModule} from 'angular-highcharts';
import {HighlightSessionTexts} from './highlight-session-texts.pipe';
import {FilterActiveBotPipe} from './filter-active-bot.pipe';
import {IntegrationImageCountPipe} from './integration-image-count.pipe';
import {IntegrationInputKeysFilterPipe} from './integration-input-keys-filter.pipe';
import {ProfilePermissionIdToNamePipe} from './core/profile/profile-permission-id-to-name.pipe';
import {EnabledIntegrationsCountPipe} from './enabled-integrations-count.pipe';
import {SerializeEnterpriseprofileDataPipe} from './core/enterpriseprofile/serialize-enterpriseprofile-data.pipe';
import {DragulaModule} from 'ng2-dragula';
import {SerializeSessionMessagePipe} from './serialize-session-message.pipe';
import {IntegrationNameFormatterPipe} from './core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/integration-name-formatter.pipe';
import {ClickOutsideModule} from 'ng-click-outside';
import {HighlightDirective} from './readonly-selected-permission.directive';
import {BotConfigInputComponent} from './core/buildbot/build-code-based-bot/bot-config/basic-info-form/bot-config-input/bot-config-input.component';
import {UiSwitchWrapperComponent} from './core/buildbot/build-code-based-bot/bot-config/basic-info-form/ui-switch/ui-switch-wrapper.component';
import {AvatorFormComponent} from './core/buildbot/build-code-based-bot/bot-config/avator-form/avator-form.component';
import {MyIfDirective} from './ngIf-permission.directive';
import {ErrorDescriptionPipe} from './core/buildbot/build-code-based-bot/bot-config/basic-info-form/bot-config-input/error-description.pipe';
import {SplashScreenComponent} from './splash-screen/splash-screen.component';
import {SafeUrlPipe} from './href-sanitizer.pipe';
import {MyMaterialModule} from './my-material.module';
import {ImiLoaderComponent} from './imi-loader/imi-loader.component';
import {PipelineFilterPipe} from './pipeline-filter.pipe';
import {EnterpriseListComponent} from './auth/enterprise-list/enterprise-list.component';
import {GenericObjFilterPipe} from './generic-obj-filter.pipe';
import {ChatFeedbackComponent} from './chat-feedback/chat-feedback.component';
import {LinkifyPipe} from './linkify.pipe';

import { ObjectWithCategoryNamePipe } from './core/enterpriseprofile/roles/object-with-category-name.pipe';

import {MsToHhMmPipe} from './ms-to-hh-mm.pipe';
import {LinksFromTextPipe} from './links-from-text.pipe';
import {BotTestingComponent} from './core/bot-detail/bot-testing/bot-testing.component';


@NgModule({
  declarations: [
    EnterpriseListComponent,
    GenericObjFilterPipe,
    IntegrationLogosPipe,
    SplashScreenComponent,
    MsToHhMmPipe,
    DataManageFormComponent,
    BasicInfoFormComponent,
    BotConfigInputComponent,
    ErrorDescriptionPipe,
    UiSwitchWrapperComponent,
    AvatorFormComponent,
    BotConfigComponent,
    BotArchitetureComponent,
    BotTestingComponent,
    BotIdToNamePipe,
    PipelineFilterPipe,
    AdditionalInfoFormComponent,
    SmartTableComponent, //
    CodeEditorComponent, //
    KnowledgeBaseComponent, //
    KnowledgeBasePresentationComponent,
    ChartComponent,
    HandsontableComponent,
    HighlightSessionTexts,
    FilterActiveBotPipe,
    IntegrationImageCountPipe,
    IntegrationInputKeysFilterPipe,
    ProfilePermissionIdToNamePipe,
    ObjectWithCategoryNamePipe,
    EnabledIntegrationsCountPipe,
    SerializeEnterpriseprofileDataPipe,
    SerializeSessionMessagePipe,
    MyIfDirective,
    IntegrationNameFormatterPipe,
    HighlightDirective,
    SafeUrlPipe,
    ImiLoaderComponent,
    ChatFeedbackComponent,
    LinkifyPipe,
    LinksFromTextPipe,
    MsToHhMmPipe
  ],
  imports: [
    MyMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    // ChartModule,
    ClickOutsideModule,
  ],
  exports: [
    LinkifyPipe,
    LinksFromTextPipe,
    MsToHhMmPipe,
    GenericObjFilterPipe,
    EnterpriseListComponent,
    MyIfDirective,
    SplashScreenComponent,
    HighlightDirective,
    SafeUrlPipe,
    IntegrationLogosPipe,
    DataManageFormComponent,
    BasicInfoFormComponent,
    BotConfigInputComponent,
    PipelineFilterPipe,
    ErrorDescriptionPipe,
    UiSwitchWrapperComponent,
    AvatorFormComponent,
    BotConfigComponent,
    BotArchitetureComponent,
    AdditionalInfoFormComponent,
    FormsModule,
    BotIdToNamePipe,
    RouterModule,
    SmartTableComponent, //
    CodeEditorComponent, //
    KnowledgeBaseComponent, //
    KnowledgeBasePresentationComponent,
    ChartComponent,
    HandsontableComponent,
    HighlightSessionTexts,
    FilterActiveBotPipe,
    SerializeSessionMessagePipe,
    IntegrationImageCountPipe,
    IntegrationInputKeysFilterPipe,
    ProfilePermissionIdToNamePipe,
    ObjectWithCategoryNamePipe,
    EnabledIntegrationsCountPipe,
    SerializeEnterpriseprofileDataPipe,
    DragulaModule,
    IntegrationNameFormatterPipe,
    ClickOutsideModule,
    MyMaterialModule,
    ImiLoaderComponent,
    ChatFeedbackComponent,
    MsToHhMmPipe,
    BotTestingComponent
  ]
})
export class SharedModule {

}
