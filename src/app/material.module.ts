import {MatButtonModule, MatCheckboxModule, MatMenuModule} from '@angular/material';
import {NgModule} from '@angular/core';

const materialItems = [
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule
];

@NgModule({
  imports: materialItems,
  exports: materialItems,
})
export class MyMaterialModule { }
