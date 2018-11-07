import {NgModule} from '@angular/core';
import {IntegrationLogosPipe} from './integration-logos.pipe';
import {DataManageFormComponent} from './core/buildbot/build-code-based-bot/bot-config/data-manage-form/data-manage-form.component';
import {BasicInfoFormComponent} from './core/buildbot/build-code-based-bot/bot-config/basic-info-form/basic-info-form.component';
import {BotConfigComponent} from './core/buildbot/build-code-based-bot/bot-config/bot-config.component';
import {BotArchitetureComponent} from './core/buildbot/build-code-based-bot/architecture/bot-architeture.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UiSwitchModule} from 'ngx-toggle-switch';
import {CommonModule} from '@angular/common';
import {BotIdToNamePipe} from './bot-id-to-name.pipe';
import {RouterModule} from '@angular/router';
import {AdditionalInfoFormComponent} from './core/buildbot/build-code-based-bot/bot-config/additional-info-form/additional-info-form.component';
import {SmartTableComponent} from './smart-table/smart-table.component';
import {CodeEditorComponent} from './core/buildbot/build-code-based-bot/architecture/code/code-editor/code-editor.component';
import {KnowledgeBaseComponent} from './core/buildbot/build-code-based-bot/architecture/knowledge-base/knowledge-base.component';
import {Ng2CompleterModule} from 'ng2-completer';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {KnowledgeBasePresentationComponent} from './core/buildbot/build-code-based-bot/architecture/knowledge-base/knowledge-base-presentation/knowledge-base-presentation.component';
import {ChartComponent} from './core/chart/chart.component';
import {HandsontableComponent} from './handsontable/handsontable.component';
import {ChartModule} from 'angular-highcharts';
import {FilterObjectArrayPipe} from './filter-object-array.pipe';
import {FilterActiveBotPipe} from './filter-active-bot.pipe';
import {IntegrationImageCountPipe} from './integration-image-count.pipe';
import {IntegrationInputKeysFilterPipe} from './integration-input-keys-filter.pipe';
import {ProfilePermissionIdToNamePipe} from './core/profile/profile-permission-id-to-name.pipe';
import {EnabledIntegrationsCountPipe} from './enabled-integrations-count.pipe';
import {SerializeEnterpriseprofileDataPipe} from './core/enterpriseprofile/serialize-enterpriseprofile-data.pipe';
import {DragulaModule} from 'ng2-dragula';
import {
  BsDatepickerModule,
  BsDropdownModule,
  ModalModule, PopoverModule,
  ProgressbarModule,
  TabsModule,
  TimepickerModule,
  TooltipModule
} from 'ngx-bootstrap';
import {SerializeSessionMessagePipe} from './serialize-session-message.pipe';
import {IntegrationNameFormatterPipe} from './core/buildbot/build-code-based-bot/architecture/integration/integration-option-list/integration-name-formatter.pipe';
import {ClickOutsideModule} from 'ng2-click-outside';
import {HighlightDirective} from './readonly-selected-permission.directive';
import {BotConfigInputComponent} from './core/buildbot/build-code-based-bot/bot-config/basic-info-form/bot-config-input/bot-config-input.component';
import {UiSwitchWrapperComponent} from './core/buildbot/build-code-based-bot/bot-config/basic-info-form/ui-switch/ui-switch-wrapper.component';
import {AvatorFormComponent} from './core/buildbot/build-code-based-bot/bot-config/avator-form/avator-form.component';
import {MyIfDirective} from './ngIf-permission.directive';
import {ErrorDescriptionPipe} from './core/buildbot/build-code-based-bot/bot-config/basic-info-form/bot-config-input/error-description.pipe';
import {TypeForIntegrationTypePipe} from './type-for-integration-type.pipe';
import {SplashScreenComponent} from './splash-screen/splash-screen.component';
import {SafeUrlPipe} from './href-sanitizer.pipe';

@NgModule({
  declarations: [
    IntegrationLogosPipe,
    SplashScreenComponent,
    DataManageFormComponent,
    BasicInfoFormComponent,
    BotConfigInputComponent,
    ErrorDescriptionPipe,
    UiSwitchWrapperComponent,
    AvatorFormComponent,
    BotConfigComponent,
    BotArchitetureComponent,
    BotIdToNamePipe,
    AdditionalInfoFormComponent,
    SmartTableComponent, //
    CodeEditorComponent, //
    KnowledgeBaseComponent, //
    KnowledgeBasePresentationComponent,
    ChartComponent,
    HandsontableComponent,
    FilterObjectArrayPipe,
    FilterActiveBotPipe,
    IntegrationImageCountPipe,
    IntegrationInputKeysFilterPipe,
    ProfilePermissionIdToNamePipe,
    EnabledIntegrationsCountPipe,
    SerializeEnterpriseprofileDataPipe,
    SerializeSessionMessagePipe,
    MyIfDirective,
    IntegrationNameFormatterPipe,
    HighlightDirective,
    SafeUrlPipe,
  ],
  imports: [
    UiSwitchModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    Ng2CompleterModule,
    Ng2SmartTableModule,
    ChartModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule,
    TabsModule.forRoot(),
    ClickOutsideModule,
    PopoverModule.forRoot(),
  ],
  exports: [
    MyIfDirective,
    SplashScreenComponent,
    HighlightDirective,
    SafeUrlPipe,
    ChartModule,
    IntegrationLogosPipe,
    DataManageFormComponent,
    BasicInfoFormComponent,
    BotConfigInputComponent,
    ErrorDescriptionPipe,
    UiSwitchWrapperComponent,
    AvatorFormComponent,
    BotConfigComponent,
    BotArchitetureComponent,
    AdditionalInfoFormComponent,
    FormsModule,
    BotIdToNamePipe,
    RouterModule,
    UiSwitchModule,
    SmartTableComponent, //
    CodeEditorComponent, //
    KnowledgeBaseComponent, //
    Ng2CompleterModule,
    Ng2SmartTableModule,
    KnowledgeBasePresentationComponent,
    ChartComponent,
    HandsontableComponent,
    FilterObjectArrayPipe,
    FilterActiveBotPipe,
    SerializeSessionMessagePipe,
    IntegrationImageCountPipe,
    IntegrationInputKeysFilterPipe,
    ProfilePermissionIdToNamePipe,
    EnabledIntegrationsCountPipe,
    SerializeEnterpriseprofileDataPipe,
    DragulaModule,
    IntegrationNameFormatterPipe,
    BsDatepickerModule,
    BsDropdownModule,
    ModalModule,
    ProgressbarModule,
    TabsModule,
    TimepickerModule,
    TooltipModule,
    ClickOutsideModule,
    PopoverModule



  ]
})
export class SharedModule {

}
