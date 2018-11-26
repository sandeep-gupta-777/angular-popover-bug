import {
  MatAutocompleteModule, MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule
} from '@angular/material';
import {NgModule} from '@angular/core';
import {PortalModule} from '@angular/cdk/portal';
import {PlatformModule} from '@angular/cdk/platform';
import {OverlayModule} from '@angular/cdk/overlay';
import {OverlayComponent} from './overlay/overlay.component';
import {OverlayWithMenuComponent} from './overlay-with-menu/overlay-with-menu.component';
import {ModalConfirmComponent} from './modal-confirm/modal-confirm.component';
import {ModalWrapperComponent} from './modal-wrapper/modal-wrapper.component';
import {CommonModule} from '@angular/common';
import {GentemplateEditKeyComponent} from './core/buildbot/build-code-based-bot/architecture/code/code-input/code-gentemplate-ui-component-wrapper/gentemplate-edit-key/gentemplate-edit-key.component';
import {FormsModule} from '@angular/forms';
import {BotSessionModalWrapperComponent} from './bot-session-modal-wrapper/bot-session-modal-wrapper.component';
// import {SatDatepickerModule, SatNativeDateModule} from 'saturn-datepicker';

const materialModules = [
  CommonModule,
  FormsModule,

  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatTooltipModule,
  MatTabsModule,
  MatDialogModule,
  MatMenuModule,
  MatIconModule,
  MatInputModule,
  //remove in production
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,

  // SatNativeDateModule,
  // SatDatepickerModule,


  OverlayModule,
  PlatformModule,
  PortalModule,

];

const materialDeclarations = [
  OverlayComponent,
  OverlayWithMenuComponent,
  ModalConfirmComponent,
  ModalWrapperComponent,
  BotSessionModalWrapperComponent,
  GentemplateEditKeyComponent
]

@NgModule({
  declarations:materialDeclarations,
  imports: [...materialModules],
  exports: [...materialModules, ...materialDeclarations],
})
export class MyMaterialModule { }
