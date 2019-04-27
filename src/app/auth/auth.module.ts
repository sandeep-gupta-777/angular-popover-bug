import {LoginComponent} from './login/login.component';
import {Route, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
// import {AuthWrapperComponent} from './auth-wrapper.component';
import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {LoginGaurdService} from '../login-gaurd.service';
import {MatButtonModule, MatCheckbox, MatCheckboxModule, MatInput, MatInputModule} from '@angular/material';
import {SharedModule} from '../shared.module';
import {AimService} from "../aim.service";
import {ServerService} from "../server.service";
import {UtilityService} from "../utility.service";
import {NgxsModule} from "@ngxs/store";
import {AuthStateReducer} from "./ngxs/auth.state";
import {AppStateReducer} from "../ngxs/app.state";
import {ViewBotStateReducer} from "../core/view-bots/ngxs/view-bot.state";
import {ReducerListService} from "../reducer-list.service";
import {PermissionService} from "../permission.service";
import {CodeInputService} from "../core/buildbot/build-code-based-bot/architecture/code/code-input/code-input.service";

declare var areReducersRegistered:any ;

const routes: Route[] = [
      {path: 'login', component: LoginComponent, canActivate: [LoginGaurdService]},
];



@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    RouterModule.forChild(routes), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    FormsModule,
    NgxsModule.forFeature((<any>window).areReducersRegistered?[]:[
      ...ReducerListService.list
    ]),
    SharedModule,
    HttpClientModule,

  ],
  providers:  [PermissionService,LoginGaurdService, UtilityService, ServerService, CodeInputService],
})
export class AuthModule {
  constructor(){
    (<any>window).areReducersRegistered = true;
  }
}
