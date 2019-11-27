import {LoginComponent} from './login/login.component';
import {Route, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
// import {AuthWrapperComponent} from './auth-wrapper.component';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginGaurdService} from '../login-gaurd.service';
import {
  MatButtonModule,
  MatCheckbox,
  MatCheckboxModule,
  MatInput,
  MatInputModule,
  MatSnackBarModule
} from '@angular/material';
import {ServerService} from '../server.service';
import {NgxsModule} from '@ngxs/store';
import {ReducerListService} from '../reducer-list.service';
import {PermissionService} from '../permission.service';
import {SharedEnterpriseListModuleModule} from './shared-enterprise-list-module.module';
import {FormsService} from '../forms.service';
import {MyToasterService} from '../my-toaster.service';
import {ConstantsService} from '../constants.service';
import {environment} from '../../environments/environment';
import {HttpMockRequestInterceptor} from '../interceptor.mock';
import {HttpRequestInterceptor} from '../interceptor';
import {SharedModule} from '../shared.module';

declare var areReducersRegistered: any;

const routes: Route[] = [
  {path: 'login', component: LoginComponent, canActivate: [LoginGaurdService]},
];


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    FormsModule,
    NgxsModule.forFeature([
      ...ReducerListService.list
    ]),
    MatSnackBarModule,
    HttpClientModule,
    SharedEnterpriseListModuleModule,
    SharedModule,
  ],

  providers: [
    PermissionService,
    MyToasterService,
    LoginGaurdService,
    ConstantsService,
    ServerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: !environment.production ? HttpMockRequestInterceptor : HttpRequestInterceptor,
      multi: true
    }
  ],
})
export class AuthModule {
  constructor() {
    (<any>window).areReducersRegistered = true;
  }
}
