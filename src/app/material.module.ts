import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatTabsModule
} from '@angular/material';
import {NgModule} from '@angular/core';

const materialItems = [
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatTabsModule,
  MatDialogModule,
  MatMenuModule,
  MatIconModule,
  MatInputModule
];

@NgModule({
  imports: materialItems,
  exports: materialItems,
})
export class MyMaterialModule { }
