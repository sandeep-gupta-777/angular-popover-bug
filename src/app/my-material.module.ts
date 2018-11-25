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

const materialModules = [
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
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

  OverlayModule,
  PlatformModule,
  PortalModule,

];

const materialDeclarations = [
  OverlayComponent,
  OverlayWithMenuComponent
]

@NgModule({
  declarations:materialDeclarations,
  imports: [...materialModules],
  exports: [...materialModules, ...materialDeclarations],
})
export class MyMaterialModule { }
