import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from '../../server.service';
import { ConstantsService, ERoleName } from '../../constants.service';
import { IUser } from '../../core/interfaces/user';
import { Store } from '@ngxs/store';
import { IHeaderData } from '../../../interfaces/header-data';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from '../../utility.service';
import { IEnterpriseProfileInfo } from '../../../interfaces/enterprise-profile';
import { SetEnterpriseInfoAction } from '../../core/enterpriseprofile/ngxs/enterpriseprofile.action';
import { SetBackendURlRoot } from '../../ngxs/app.action';
import { SetUser } from '../ngxs/auth.action';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  panelActive = 'login';
  // panelActive==='reset-via-email'
  errorMessage = '';

  disabeLoginButton = false;
  changePasswordToken;
  changePasswordExpireTime;
  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private utilityService: UtilityService,
    private store: Store) {
  }

  loginEmails = [
    'ayeshreddy.k@imimobile.com',
    'qa.analyst_1537783720606@imimobile.com',
    'qa.dev_1537783640111@imimobile.com',
    'qa.tester_1537783698819@imimobile.com',
  ];

  @ViewChild('heroForm') f: NgForm;
  @ViewChild('emailForm') e: NgForm;
  @ViewChild('resetPasswordForm') r: NgForm;
  showCustomEmails: boolean = false;
  ngOnInit() {
    this.showCustomEmails = !!this.activatedRoute.snapshot.queryParamMap.get('burl');
    this.changePasswordToken = this.activatedRoute.snapshot.queryParamMap.get('token');
    this.changePasswordExpireTime = this.activatedRoute.snapshot.queryParamMap.get('timestamp');
    if (this.changePasswordToken) {
      this.panelActive = 'reset-password'
    }
    // this.store.dispatch()
    this.serverService.makeGetReq({ url: '/static/config.json', noValidateUser: true })
      .subscribe(((value: { 'backend_url': string, 'version': string }) => {
        // {"backend_url":"https://dev.imibot.ai/","version":"1.0.0"}
        this.store.dispatch([
          new SetBackendURlRoot({ url: value.backend_url })
        ]);
      }));
  }

  flashErrorMessage(message: string, time_ms: number = 3000) {
    this.errorMessage = message;
    setTimeout(() => {
      this.errorMessage = '';
    }, time_ms);
  }
  sendEmailForReset() {
    let sendEmailUrl = this.constantsService.sendEmailUrl();
    let body;
    if (this.e.valid) {
      body = this.e.value;
    } else {
      this.flashErrorMessage('Details not valid');
      return;
    }
    this.serverService.makePostReq<IUser>({ url: sendEmailUrl, body })
      .subscribe(() => {
        this.panelActive = 'email-reset-link-notify'
      })
  }
  resetPassword() {

    let resetPasswordUrl = this.constantsService.resetPasswordUrl();
    let body;
    if (this.r.valid) {
      if (this.r.value.password === this.r.value.confirm) {
        body = {
          "password": this.r.value.password,
          "token": this.changePasswordToken
        }
      }
      else{
        this.flashErrorMessage('Passwords dont match');
        return;
      }

    } else {
      this.flashErrorMessage('Details not valid');
      return;
    }
    this.serverService.makePostReq<IUser>({ url: resetPasswordUrl, body })
      .subscribe(() => {
        this.panelActive = 'password-reset-notify'
      })
  }
  onSubmit() {
    this.disabeLoginButton = true;
    let loginData = this.f.value;
    let loginUrl = this.constantsService.getLoginUrl();
    let body;
    if (this.f.valid) {
      body = this.f.value;
    } else {
      this.flashErrorMessage('Details not valid');
      return;
    }

    this.flashErrorMessage('Reaching out to the server', 100000);
    let headerData: IHeaderData = {
      'auth-token': null,
      'user-access-token': null
    };

    this.serverService.makePostReq<IUser>({ url: loginUrl, body, headerData })
      .subscribe((user: IUser) => {
        this.flashErrorMessage('Logged in. Fetching permissions', 100000);
        this.store.dispatch([
          new SetUser({ user }),
        ]).subscribe(() => {
          this.serverService.getNSetMasterPermissionsList()
            .subscribe(() => {
              this.flashErrorMessage('Taking you to homepage', 100000);
              /*after login, route to appropriate page according to user role*/
              if (user.role.name === ERoleName.Analyst) {
                this.router.navigate(['/core/analytics2/users']);
              } else {
                this.router.navigate(['.']);
              }
              this.serverService.getNSetBotList().subscribe(() => {
              });
              this.serverService.getNSetIntegrationList();
            });

          let enterpriseProfileUrl = this.constantsService.getEnterpriseUrl(user.enterprise_id);
          this.serverService.makeGetReq<IEnterpriseProfileInfo>({ url: enterpriseProfileUrl })
            .subscribe((value: IEnterpriseProfileInfo) => {
              this.store.dispatch([
                new SetEnterpriseInfoAction({ enterpriseInfo: value })
              ]);
            });
        });
      },
        () => {
          this.disabeLoginButton = false;
          this.flashErrorMessage('Login failed. Please try again', 100000);
        }
      );
  }

  showPanel(panel) {
    this.panelActive = panel;
  }


  loginWithCustomEmail(email) {
    this.f.form.patchValue({ email: email, password: 'Botwoman@123!' });
    this.onSubmit();
  }
}
