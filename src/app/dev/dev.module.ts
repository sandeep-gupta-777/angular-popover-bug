import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyMaterialModule} from '../my-material.module';
import {ThemeComponent} from '../theme/theme.component';
import {Route, Router, RouterModule} from '@angular/router';
import {IsDevModeGuard} from '../is-dev-mode.guard';

const routes: Route[] = [{
  path: '', component: ThemeComponent, canActivate:[IsDevModeGuard]
}];

@NgModule({
  declarations: [
    ThemeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MyMaterialModule
  ]
})
export class DevModule { }
