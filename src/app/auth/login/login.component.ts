import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {ServerService} from '../../server.service';
import {ConstantsService, ERoleName} from '../../constants.service';
import {IUser} from '../../core/interfaces/user';
import {Store} from '@ngxs/store';
import {IHeaderData} from '../../../interfaces/header-data';
import {ActivatedRoute, Router} from '@angular/router';
import {UtilityService} from '../../utility.service';
import {IEnterpriseProfileInfo} from '../../../interfaces/enterprise-profile';
import {ResetEnterpriseUsersAction, SetEnterpriseInfoAction} from '../../core/enterpriseprofile/ngxs/enterpriseprofile.action';
import {ResetAppState} from '../../ngxs/app.action';
import {ResetAuthToDefaultState, SetUser} from '../ngxs/auth.action';
import {NgForm} from '@angular/forms';
import {MessageDisplayBase} from './messageDisplayBase';
import {map} from 'rxjs/operators';
import {ResetBotListAction} from '../../core/view-bots/ngxs/view-bot.action';
import {ResetBuildBotToDefault} from '../../core/buildbot/ngxs/buildbot.action';
import {ResetAnalytics2GraphData, ResetAnalytics2HeaderData} from '../../core/analysis2/ngxs/analysis.action';
import {tap} from 'rxjs/internal/operators';

enum ELoginPanels {
  set = "set",
  reset = "reset",
  login = "login",
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends MessageDisplayBase implements OnInit {
  myELoginPanels = ELoginPanels
  panelActive = 'login';
  disabeLoginButton = false;
  changePasswordToken;
  changePasswordExpireTime;

  enterpriseList: any[];
  userData: IUser;
  searchEnterprise: string;
  backend_url;

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
    try {
      /*replace with plateform.id*/
      localStorage.clear();
    } catch (e) {
      console.log(e);
    }
    let userValue = null;
    this.showCustomEmails = !!this.activatedRoute.snapshot.queryParamMap.get('burl');
    let token = this.activatedRoute.snapshot.queryParamMap.get('token');
    let action = this.activatedRoute.snapshot.queryParamMap.get('action');
    if (token && (action === ELoginPanels.reset || action === ELoginPanels.set)) {
      this.panelActive = action;
    }
    this.changePasswordExpireTime = this.activatedRoute.snapshot.queryParamMap.get('timestamp');
    this.getNSetConfigData$().subscribe((val) => this.isConfigDataSet = true);
    this.gotUserData$.pipe(
      map((value: IUser) => {
        userValue = value;
        this.store.dispatch([
          new SetUser({user: value}),
          // new SetEnterpriseInfoAction({ enterpriseInfo: value})
        ]);
      })
    )
      .subscribe(() => {
        this.serverService.getNSetMasterPermissionsList()
          .subscribe(() => {
            this.flashInfoMessage('Loading your dashboard', 10000);
            /*after login, route to appropriate page according to user role*/
            if (userValue.role.name === ERoleName.Analyst) {
              this.router.navigate(['/core/analytics2']);
            } else {
              this.router.navigate(['/']);
            }

            this.serverService.getNSetBotList().subscribe(() => { });
            this.serverService.getNSetIntegrationList();

            this.serverService.getNSetPipelineModuleV2();

          }, () => {
            this.disabeLoginButton = false;
            this.store.dispatch([
              new ResetAuthToDefaultState()
            ]);
            this.flashErrorMessage('Could not fetch permission. Please try again', 10000);
          });
        const enterpriseProfileUrl = this.constantsService.getEnterpriseUrl(userValue.enterprise_id);
        this.serverService.makeGetReq<IEnterpriseProfileInfo>({ url: enterpriseProfileUrl })
          .subscribe((value: IEnterpriseProfileInfo) => {
            this.store.dispatch([
              new SetEnterpriseInfoAction({ enterpriseInfo: value })
            ]);
          });
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
    this.serverService.makePostReq<IUser>({url: sendEmailUrl, body})
      .subscribe(() => {
        this.panelActive = 'email-reset-link-notify';
      });
  }

  resetPassword() {

    const resetPasswordUrl = this.constantsService.resetPasswordUrl();
    let body;
    if (this.r.valid) {
      if (this.r.value.password === this.r.value.confirm) {
        this.changePasswordToken = this.activatedRoute.snapshot.queryParamMap.get('token');
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
    this.serverService.makePostReq<IUser>({url: resetPasswordUrl, body})
      .subscribe(() => {
        this.panelActive = 'password-reset-notify';
      });
  }

  onSubmit() {
    localStorage.clear();
    /*logging out so that only one use can login in at one time*/
    this.store.dispatch([
      new ResetBotListAction(),
      new ResetAuthToDefaultState(),
      new ResetEnterpriseUsersAction(),
      new ResetBuildBotToDefault(),
      new ResetAnalytics2GraphData(),
      new ResetAnalytics2HeaderData(),
      new ResetAppState()
    ]).subscribe(()=>{
      this.store.dispatch([
        new SetBackendURlRoot({url: this.backend_url})
      ])
    });
    const loginData = this.loginForm.value;
    const loginUrl = this.constantsService.getLoginUrl();
    let body;
    if (this.loginForm.valid) {
      body = this.loginForm.value;
    } else {
      this.flashErrorMessage('Details not valid');
      this.disabeLoginButton = false;
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
        // try {/*TODO: not sure what this does. ask shoaib*/
        //   if (this.userData.enterprises.length <= 1) {
        //
        // let enterpriseDate = {
        //   enterpriseId : this.userData.enterprises[0].enterprise_id.id ,
        //   roleId : this.userData.enterprises[0].role_id.id,
        //   isActive : this.userData.is_active
        // };
        //
        // this.enterEnterprise(enterpriseDate);

        this.flashInfoMessage('Logged in. Fetching permissions', 10000);
        try {/*TODO: not sure what this does. ask shoaib*/

          if (this.userData.enterprises.length <= 1) {
            const enterpriseDate = {
              enterpriseId: this.userData.enterprises[0].enterprise_id.id,
              roleId: this.userData.enterprises[0].role_id.id,
              isActive: this.userData.is_active
            };
            this.enterEnterprise(enterpriseDate);

          } else {
            this.enterpriseList = this.userData.enterprises;
            this.panelActive = 'enterprise-list-display';
            console.log(this.enterpriseList);
          }
        } catch (e) {
          console.error(e);
        }
        // });
        // }
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

  enterEnterprise(Enterprise) {
    if (Enterprise.isActive) {
      const enterpriseLoginUrl = this.constantsService.getEnterpriseLoginUrl();
      const body = {
        'user_id': this.userData.id,
        'enterprise_id': Enterprise.enterpriseId,
        'role_id': Enterprise.roleId
      };
      const headerData = {
        'auth-token': this.userData.auth_token
      };

      this.serverService.makePostReq<any>({ url: enterpriseLoginUrl, body, headerData })
        .subscribe((value) => {

          this.gotUserData$.emit(value);
        });
    } else {
      this.utilityService.showErrorToaster('Please verify this enterprise before trying to login.');
    }

  }
  enterpriseLogout() {
    this.panelActive = 'login';
    this.panelActive = 'login';
    this.disabeLoginButton = false;
  }

  loginWithCustomEmail(email) {
    this.loginForm.form.patchValue({email: email, password: 'Botwoman@123!'});
    this.onSubmit();
  }

  backToLogin(){
    this.panelActive=ELoginPanels.login;
    this.router.navigate(['/login'], {queryParams:{token:null, action:null}});

  }

  getNSetConfigData$() {
    return this.serverService.makeGetReq({url: '/static/config.json', noValidateUser: true})
      .pipe(tap(((value: { 'backend_url': string, 'version': string }) => {
        this.backend_url = value.backend_url;
        this.store.dispatch([
          new SetBackendURlRoot({url: value.backend_url})
        ]);
      })));
  }
}
