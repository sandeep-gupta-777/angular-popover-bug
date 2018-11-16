import {LoginComponent} from './login/login.component';
import {Route, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {AuthWrapperComponent} from './auth-wrapper.component';
import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {LoginGaurdService} from '../login-gaurd.service';
import {MatButtonModule, MatCheckbox, MatCheckboxModule, MatInput, MatInputModule} from '@angular/material';

const routes: Route[] = [
      {path: 'login', component: LoginComponent, canActivate: [LoginGaurdService]},
];

@NgModule({
  declarations: [
    LoginComponent,
    AuthWrapperComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    RouterModule.forChild(routes), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    FormsModule,
    // NgxsModule.forFeature([
    //   AuthStateReducer,
    // ]),
    HttpClientModule,

  ],
  providers:  [LoginGaurdService],
})
export class AuthModule {

}
