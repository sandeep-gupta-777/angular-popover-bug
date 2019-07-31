import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EnterpriseListComponent} from './enterprise-list/enterprise-list.component';
import {GenericObjFilterPipe} from '../generic-obj-filter.pipe';

@NgModule({
  declarations: [
    EnterpriseListComponent,
    GenericObjFilterPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    EnterpriseListComponent,
    GenericObjFilterPipe,
  ]
})
export class SharedEnterpriseListModuleModule { }
