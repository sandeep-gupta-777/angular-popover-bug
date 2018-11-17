import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatMenuModule, MatTabsModule} from '@angular/material';
import {NgModule} from '@angular/core';

const materialItems = [
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatTabsModule,
  MatDialogModule,
  MatMenuModule,
  MatIconModule,
];

@NgModule({
  imports: materialItems,
  exports: materialItems,
})
export class MyMaterialModule { }
