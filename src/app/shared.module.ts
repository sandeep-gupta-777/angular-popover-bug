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
import {SerializeSessionMessagePipe} from './serialize-session-message.pipe';
import {IntegrationNameFormatterPipe} from './core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/integration-name-formatter.pipe';
import {ClickOutsideModule} from 'ng-click-outside';
import {HighlightDirective} from './readonly-selected-permission.directive';
import {BotConfigInputComponent} from './core/buildbot/build-code-based-bot/bot-config/basic-info-form/bot-config-input/bot-config-input.component';
import {UiSwitchWrapperComponent} from './core/buildbot/build-code-based-bot/bot-config/basic-info-form/ui-switch/ui-switch-wrapper.component';
// import {AvatorFormComponent} from './core/buildbot/build-code-based-bot/bot-config/avator-form/avator-form.component';
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

import {ObjectWithCategoryNamePipe} from './core/enterpriseprofile/roles/object-with-category-name.pipe';

import {MsToHhMmPipe} from './ms-to-hh-mm.pipe';
import {SafeHtmlPipe} from './safe-html.pipe';
import {LinksFromTextPipe} from './links-from-text.pipe';
import {BotTestingComponent} from './core/bot-detail/bot-testing/bot-testing.component';

import {IntegrationChannelListComponent} from './core/integration-channel-list/integration-channel-list.component';
import {SecurityComponent} from './core/buildbot/build-code-based-bot/bot-config/security/security.component';
import {IntegrationItemForTypePipe} from './integration-item-for-type.pipe';
import {IntegrationItemComponent} from './core/buildbot/build-code-based-bot/architecture/integration/integration-item/integration-item.component';
import {IntegrationOptionListComponent} from './core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/integration-option-list.component';
import {DisplayNameForKeyIntegrationPipe} from './core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/display-name-for-key-integration.pipe';
import {BuildbotWrapperComponent} from './core/buildbot/buildbot-wrapper.component';
import {TypeForIntegrationTypePipe} from './type-for-integration-type.pipe';
import {RequiredIfOneFilledValidator} from './core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/requiredIfOneFilledValidator.directive';
import {InfoIconComponent} from './info-icon/info-icon.component';
import {ErrorStateMatcher, MatProgressSpinnerModule, ShowOnDirtyErrorStateMatcher, MatCardModule} from '@angular/material';
import {IntegrationItemByUnamePipe} from './integration-item-by-uname.pipe';
import {BotByIdPipe} from './core/buildbot/build-code-based-bot/bot-config/data-manage-form/bot-by-id.pipe';
import {ListIfNotInThisListPipe} from './core/enterpriseprofile/enterprise-roles/listIfNotInThisList.pipe';
import {ConvertToUniqueArrayPipe} from './convert-to-unique-array.pipe';
import {BotConfigService} from './core/buildbot/build-code-based-bot/bot-config/bot-config.service';
import {PermissionService} from './permission.service';
import {ConstantsService} from './constants.service';
import {SharedEnterpriseListModuleModule} from './auth/shared-enterprise-list-module.module';
import {FaqHandoverAndInterfaceFormComponent} from './core/buildbot/build-code-based-bot/bot-config/faq-handover-and-interface-form/faq-handover-and-interface-form.component';
import {FaqBotBasicInfoFormComponent} from './core/buildbot/build-code-based-bot/bot-config/faq-bot-basic-info-form/faq-bot-basic-info-form.component';

import {LazyLoadImageModule} from 'ng-lazyload-image';
import {ButtonWrapperComponent} from './button-wrapper/button-wrapper.component';
import {BreakpointService} from './core/breakpoint.service';
import {SpliceEllipsisPipe} from './splice-ellipsis.pipe';
import {CurationComponent} from './core/bot-detail/curation/curation.component';
import {CurationIssuesComponent} from './core/bot-detail/curation/curation-issues/curation-issues.component';
import {CurationFilterComponent} from './core/bot-detail/curation/curation-filter/curation-filter.component';
import {CurationIssuesListComponent} from './core/bot-detail/curation/curation-issues-list/curation-issues-list.component';
import {CurationResolvedListComponent} from './core/bot-detail/curation/curation-resolved-list/curation-resolved-list.component';
import {FilePreviewOverlayService} from './overlay.service';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlayMediaComponent} from './chat/play-media/play-media.component';
import {HttpTrackerLibModule} from 'ngx-loadify';

@NgModule({
  declarations: [
    ButtonWrapperComponent,
    IntegrationChannelListComponent,
    IntegrationLogosPipe,
    IntegrationItemByUnamePipe,
    SplashScreenComponent,
    MsToHhMmPipe,
    DataManageFormComponent,
    BotByIdPipe,
    InfoIconComponent,
    BuildbotWrapperComponent,
    BasicInfoFormComponent,
    SpliceEllipsisPipe,
    BotConfigInputComponent,
    ErrorDescriptionPipe,
    UiSwitchWrapperComponent,
    // AvatorFormComponent,
    BotConfigComponent,

    BotArchitetureComponent,
    BotTestingComponent,
    BotIdToNamePipe,
    PipelineFilterPipe,
    ListIfNotInThisListPipe,
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
    MsToHhMmPipe,
    SafeHtmlPipe,
    LinksFromTextPipe,
    MsToHhMmPipe,
    SecurityComponent,
    TypeForIntegrationTypePipe,
    IntegrationItemForTypePipe,
    IntegrationItemComponent,
    IntegrationOptionListComponent,
    RequiredIfOneFilledValidator,
    DisplayNameForKeyIntegrationPipe,
    ConvertToUniqueArrayPipe,
    FaqHandoverAndInterfaceFormComponent,
    FaqBotBasicInfoFormComponent,
    PlayMediaComponent,

    // todo: put it inside view bot details moduel

  ],
  imports: [
    SharedEnterpriseListModuleModule,
    MyMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    // ChartModule,
    ClickOutsideModule,
    MatProgressSpinnerModule,
    <any>LazyLoadImageModule, /*todo: getting error lazy loaded module is not angular module*/
    MatCardModule,
    HttpTrackerLibModule.forRoot({
      loaderClass: 'loading',
      errorClass: 'error',
      successClass: 'success',
      makeDisabledDuringLoading: true,
      successClassDuration: 2000,
      errorClassDuration: 2000,
    })
  ],
  exports: [
    PlayMediaComponent,
    ButtonWrapperComponent,
    SharedEnterpriseListModuleModule,
    LinkifyPipe,
    LinksFromTextPipe,
    MsToHhMmPipe,
    // EnterpriseListComponent,
    MyIfDirective,
    SplashScreenComponent,
    HighlightDirective,
    SafeUrlPipe,
    IntegrationLogosPipe,
    DataManageFormComponent,
    BotByIdPipe,

    SpliceEllipsisPipe,
    InfoIconComponent,
    BasicInfoFormComponent,
    BotConfigInputComponent,
    PipelineFilterPipe,
    ErrorDescriptionPipe,
    UiSwitchWrapperComponent,
    // AvatorFormComponent,
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
    MsToHhMmPipe,
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
    IntegrationNameFormatterPipe,
    ClickOutsideModule,
    MyMaterialModule,
    ImiLoaderComponent,
    ChatFeedbackComponent,
    SafeHtmlPipe,
    MsToHhMmPipe,
    BotTestingComponent,
    IntegrationChannelListComponent,
    LazyLoadImageModule,
    SecurityComponent,
    TypeForIntegrationTypePipe,
    IntegrationItemForTypePipe,
    IntegrationItemComponent,
    IntegrationOptionListComponent,
    RequiredIfOneFilledValidator,
    DisplayNameForKeyIntegrationPipe,
    BuildbotWrapperComponent,
    ListIfNotInThisListPipe,
    ConvertToUniqueArrayPipe,
    FaqHandoverAndInterfaceFormComponent,
    FaqBotBasicInfoFormComponent,
    MatCardModule,
    // HttpTrackerLibModule
    HttpTrackerLibModule,
  ],
  providers: [ConstantsService, PermissionService, BotConfigService, BreakpointService],

})
export class SharedModule {

}
