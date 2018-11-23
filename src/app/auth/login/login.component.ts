import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ServerService } from '../../server.service';
import { ConstantsService, ERoleName } from '../../constants.service';
import { IUser } from '../../core/interfaces/user';
import { Store, Select } from '@ngxs/store';
import { IHeaderData } from '../../../interfaces/header-data';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from '../../utility.service';
import { IEnterpriseProfileInfo } from '../../../interfaces/enterprise-profile';
import { SetEnterpriseInfoAction } from '../../core/enterpriseprofile/ngxs/enterpriseprofile.action';
import { SetBackendURlRoot } from '../../ngxs/app.action';
import { ResetAuthToDefaultState, SetUser } from '../ngxs/auth.action';
import { NgForm } from '@angular/forms';
import { TestComponent } from '../../test/test.component';
import { MessageDisplayBase } from './messageDisplayBase';
import { Observable } from 'rxjs';
import { IAuthState } from '../ngxs/auth.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends MessageDisplayBase implements OnInit {

  panelActive = 'login';
  disabeLoginButton = false;
  changePasswordToken;
  changePasswordExpireTime;
  enterpriseList: any[];
  userData: IUser;
  searchEnterprise: string;
  constructor(
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private utilityService: UtilityService,
    private store: Store) {
    super();
  }

  loginEmails = [
    'ayeshreddy.k@imimobile.com',
    'qa.analyst_1537783720606@imimobile.com',
    'qa.dev_1537783640111@imimobile.com',
    'qa.tester_1537783698819@imimobile.com',
  ];
  isConfigDataSet = false;
  @ViewChild('loginForm') loginForm: NgForm;
  @ViewChild('emailForPasswordResetForm') emailForPasswordResetForm: NgForm;
  @ViewChild('resetPasswordForm') r: NgForm;
  gotUserData$ = new EventEmitter();
  showCustomEmails = false;
  ngOnInit() {
    let userValue = null;
    this.showCustomEmails = !!this.activatedRoute.snapshot.queryParamMap.get('burl');
    this.panelActive = this.activatedRoute.snapshot.queryParamMap.get('token') ? 'reset-password' : this.panelActive;
    this.changePasswordExpireTime = this.activatedRoute.snapshot.queryParamMap.get('timestamp');
    this.serverService.getNSetConfigData$().subscribe(() => this.isConfigDataSet = true);
    this.gotUserData$
      .map((value: IUser) => {
        debugger;
        userValue = value;
        this.store.dispatch([
          new SetUser({ user: value }),
          // new SetEnterpriseInfoAction({ enterpriseInfo: value})
        ])
      })
      .map(() => {
          this.serverService.getNSetMasterPermissionsList()
            .subscribe(() => {
              debugger;
              this.flashInfoMessage('Loading your dashboard', 10000);
              /*after login, route to appropriate page according to user role*/
              if (userValue.role.name === ERoleName.Analyst) {
                this.router.navigate(['/core/analytics2/users']);
              } else {
                this.router.navigate(['/']);
              }
              this.serverService.getNSetBotList().subscribe(() => {
              });
              this.serverService.getNSetIntegrationList();
            }, () => {
              this.disabeLoginButton = false;
              this.store.dispatch([
                new ResetAuthToDefaultState()
              ]);
              this.flashErrorMessage('Could not fetch permission. Please try again', 10000);
            });
            debugger;
            const enterpriseProfileUrl = this.constantsService.getEnterpriseUrl(userValue.enterprise_id);
            this.serverService.makeGetReq<IEnterpriseProfileInfo>({ url: enterpriseProfileUrl })
              .subscribe((value: IEnterpriseProfileInfo) => {
                this.store.dispatch([
                  new SetEnterpriseInfoAction({ enterpriseInfo: value })
                ]);
              });
        })
        .subscribe(()=>{
          
        });
  }

  sendEmailForReset() {
    const sendEmailUrl = this.constantsService.sendEmailUrl();
    let body;
    if (this.emailForPasswordResetForm.valid) {
      body = this.emailForPasswordResetForm.value;
    } else {
      this.flashErrorMessage('Details not valid');
      return;
    }
    this.serverService.makePostReq<IUser>({ url: sendEmailUrl, body })
      .subscribe(() => {
        this.panelActive = 'email-reset-link-notify';
      });
  }
  resetPassword() {

    const resetPasswordUrl = this.constantsService.resetPasswordUrl();
    let body;
    if (this.r.valid) {
      if (this.r.value.password === this.r.value.confirm) {
        this.changePasswordToken = this.activatedRoute.snapshot.queryParamMap.get('token')
        body = {
          'password': this.r.value.password,
          'token': this.changePasswordToken
        };
      } else {
        this.flashErrorMessage('Passwords dont match');
        return;
      }

    } else {
      this.flashErrorMessage('Details not valid');
      return;
    }
    this.serverService.makePostReq<IUser>({ url: resetPasswordUrl, body })
      .subscribe(() => {
        this.panelActive = 'password-reset-notify';
      });
  }
  onSubmit() {
    const loginData = this.loginForm.value;
    const loginUrl = this.constantsService.getLoginUrl();
    let body;
    if (this.loginForm.valid) {
      body = this.loginForm.value;
    } else {
      this.flashErrorMessage('Details not valid');
      return;
    }
    this.disabeLoginButton = true;
    this.flashInfoMessage('Connecting to the server', 10000);
    const headerData: IHeaderData = {
      'auth-token': null,
      'user-access-token': null
    };

    this.serverService.makePostReq<IUser>({ url: loginUrl, body, headerData })
      .subscribe((user: IUser) => {
        this.userData = user;
        this.flashInfoMessage('Logged in. Fetching permissions', 10000);
        debugger;
        if (this.userData.enterprises.length <= 1) {
          let enterpriseDate = {
            enterpriseId : this.userData.enterprises[0].enterprise_id.id ,
            roleId : this.userData.enterprises[0].role_id.id
          };
          this.enterEnterprise(enterpriseDate);
          // this.gotUserData$.emit(user);
          // this.store.dispatch([
          //   new SetUser({ user }),
          // ]).subscribe(() => {
          //   this.serverService.getNSetMasterPermissionsList()
          //     .subscribe(() => {
          //       this.flashInfoMessage('Loading your dashboard', 100000);
          //       /*after login, route to appropriate page according to user role*/
          //       if (this.userData.role.name === ERoleName.Analyst) {
          //         this.router.navigate(['/core/analytics2/users']);
          //       } else {
          //         this.router.navigate([' ']);
          //       }
          //       this.serverService.getNSetBotList().subscribe(() => {
          //       });
          //       this.serverService.getNSetIntegrationList();
          //     }, () => {
          //       this.disabeLoginButton = false;
          //       this.store.dispatch([
          //         new ResetAuthToDefaultState()
          //       ]);
          //       this.flashErrorMessage('Could not fetch permission. Please try again', 100000);
          //     });
          // });
          // const enterpriseProfileUrl = this.constantsService.getEnterpriseUrl(user.enterprise_id);
          // this.serverService.makeGetReq<IEnterpriseProfileInfo>({ url: enterpriseProfileUrl })
          //   .subscribe((value: IEnterpriseProfileInfo) => {
          //     this.store.dispatch([
          //       new SetEnterpriseInfoAction({ enterpriseInfo: value })
          //     ]);
          //   });

        }
        else {
          this.enterpriseList = this.userData.enterprises;
          this.panelActive = "enterprise-list-display";
          console.log(this.enterpriseList);
        }
        // });
      },
        () => {
          this.disabeLoginButton = false;
          this.flashErrorMessage('Login failed. Please try again', 10000);
        }
      );
  }

  showPanel(panel) {
    this.panelActive = panel;
  }
  enterEnterprise(Enterprise) {
    debugger;
    let enterpriseLoginUrl = this.constantsService.getEnterpriseLoginUrl();
    let body = {
      "user_id": this.userData.id,
      "enterprise_id": Enterprise.enterpriseId,
      "role_id": Enterprise.roleId
    }
    let headerData = {
      "auth-token": this.userData.auth_token
    }
    debugger;
    this.serverService.makePostReq<any>({ url: enterpriseLoginUrl, body, headerData })
      .subscribe((value) => {
        debugger;
        this.gotUserData$.emit(value);
      });
  }
  enterpriseLogout(){
    this.panelActive = 'login';
    this.panelActive = 'login';
    this.disabeLoginButton=false;
  }
  loginWithCustomEmail(email) {
    this.loginForm.form.patchValue({ email: email, password: 'Botwoman@123!' });
    this.onSubmit();
  }
}
