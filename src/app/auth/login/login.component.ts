import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {ServerService} from '../../server.service';
import {ConstantsService} from '../../constants.service';
import {IUser} from '../../core/interfaces/user';
import {Store} from '@ngxs/store';
import {IHeaderData} from '../../../interfaces/header-data';
import {ActivatedRoute, Router} from '@angular/router';
import {UtilityService} from '../../utility.service';
import {IEnterpriseProfileInfo} from '../../../interfaces/enterprise-profile';
import {
  ResetEnterpriseUsersAction,
  SetEnterpriseInfoAction
} from '../../core/enterpriseprofile/ngxs/enterpriseprofile.action';
import {ResetAppState, SetBackendURlRoot, SetRoleInfo} from '../../ngxs/app.action';
import {ResetAuthToDefaultState, SetUser} from '../ngxs/auth.action';
import {NgForm} from '@angular/forms';
import {MessageDisplayBase} from './messageDisplayBase';
import {forkJoin, observable, Observable, of} from 'rxjs';
import {IAuthState} from '../ngxs/auth.state';
import {map} from 'rxjs/operators';
import {ResetBotListAction} from '../../core/view-bots/ngxs/view-bot.action';
import {ResetBuildBotToDefault} from '../../core/buildbot/ngxs/buildbot.action';
import {ResetAnalytics2GraphData, ResetAnalytics2HeaderData} from '../../core/analysis2/ngxs/analysis.action';
import {IRoleInfo} from '../../../interfaces/role-info';
import {catchError, switchMap} from 'rxjs/internal/operators';
import {PermissionService} from '../../permission.service';
import {tap} from 'rxjs/internal/operators';
import {ENgxsStogareKey, ERoleName} from '../../typings/enum';
import {FormsService} from "../../forms.service";
import {MyToasterService} from "../../my-toaster.service";
import {LoggingService} from '../../logging.service';

enum ELoginPanels {
  set = 'set',
  reset = 'reset',
  login = 'login',
  'password_reset_notify' = 'password-reset-notify',
  'email_reset_link_notify' = 'email-reset-link-notify',
  'enterprise_list_display' = 'enterprise-list-display',
  'reset-via-email' = 'reset-via-email'
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends MessageDisplayBase implements OnInit {
  myELoginPanels = ELoginPanels;
  panelActive: ELoginPanels = ELoginPanels.login;
  disabeLoginButton = false;
  changePasswordToken;
  changePasswordExpireTime;
  bc;
  userValue: IUser;
  headerData: IHeaderData;

  enterpriseList: any[];
  userData: IUser;
  searchEnterprise: string;
  backend_url;

  constructor(
    private serverService: ServerService,
    private permissionService: PermissionService,
    private constantsService: ConstantsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private myToasterService: MyToasterService,
    private store: Store) {
    super();
  }

  loginEmails = [
    'ayeshreddy.k@imimobile.com',
    'puspita.m@imimobile.com',
    'puspita.m@gmail.com'
  ];
  isConfigDataSet = false;
  @ViewChild('loginForm') loginForm: NgForm;
  @ViewChild('emailForPasswordResetForm') emailForPasswordResetForm: NgForm;
  @ViewChild('resetPasswordForm') r: NgForm;
  gotUserData$ = new EventEmitter();
  showCustomEmails = false;
  timestamp = new Date();

  ngOnInit() {
    try {
      /*replace with plateform.roomId*/
      // localStorage.setItem(ENgxsStogareKey.IMI_BOT_STORAGE_KEY, null);

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

    this.gotUserData$.pipe(
      map((value: IUser) => {

        this.userValue = userValue = value;
        this.serverService.X_AXIS_TOKEN = this.userValue.user_access_token;
        this.serverService.AUTH_TOKEN = this.userValue.auth_token;
        this.permissionService.loggedUser = this.userValue;
      }),
      switchMap(() => {
        return this.serverService.getNSetMasterPermissionsList();
      }),
      switchMap(() => {
        this.flashInfoMessage('Fetching configurations', 10000);

        return forkJoin([
            // this.serverService.getNSetMasterPermissionsList(),
            this.serverService.getNSetIntegrationList(),
            this.serverService.getNSetPipelineModuleV2(),
            this.serverService.getNSetRoleInfo()
          ]
        );
      }),
      switchMap(() => {
        const enterpriseProfileUrl = this.constantsService.getEnterpriseUrl(userValue.enterprise_id);
        return this.serverService.makeGetReq<IEnterpriseProfileInfo>({url: enterpriseProfileUrl});
      }),
      switchMap((value: IEnterpriseProfileInfo) => {

        if (value) {
          return this.store.dispatch([
            new SetEnterpriseInfoAction({enterpriseInfo: value})
          ]).pipe(tap(() => {
            return this.serverService.getNSetBotList()
          }))
        } else {
          return this.serverService.getNSetBotList();
        }
      }),
      switchMap(() => {
        return this.store.dispatch([
          new SetUser({user: this.userValue}),
        ]);
      }),
      switchMap(() => {
        this.flashInfoMessage('Loading your dashboard', 10000);
        console.dir(localStorage);

        // if (userValue.role.name === ERoleName.Analyst) {
        //   this.router.navigate(['/core/analytics2/volume']);
        // } else {
        //   this.router.navigate(['/']);
        // }
        return of(this.router.navigate(['/']));
      }),
      catchError((e) => {
        LoggingService.error(e);
        return this.loginFailedHandler();
      })
    )
      .subscribe(() => {
        console.log('login pipe done');
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
        this.panelActive = ELoginPanels.email_reset_link_notify;
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
        this.panelActive = ELoginPanels.password_reset_notify;
      });
  }

  loginSubmitHandler() {

    this.flashInfoMessage('Connecting to the server', 10000);
    localStorage.setItem(ENgxsStogareKey.IMI_BOT_STORAGE_KEY, null);
    /*logging out so that only one use can login in at one time*/
    this.store.dispatch([
      new ResetBotListAction(),
      new ResetAuthToDefaultState(),
      new ResetEnterpriseUsersAction(),
      new ResetBuildBotToDefault(),
      new ResetAnalytics2GraphData(),
      new ResetAnalytics2HeaderData(),
      new ResetAppState()
    ]);
    const loginData = this.loginForm.value;
    const loginUrl = this.constantsService.getLoginUrl();
    let body;
    if (this.loginForm.valid) {
      body = this.loginForm.value;
    } else {
      this.flashErrorMessage('Details not valid');
      this.disabeLoginButton = false;;
      return;
    }
    this.disabeLoginButton = true;
    const headerData: IHeaderData = {
      'auth-token': null,
      'user-access-token': null
    };
    this.serverService.makePostReq<IUser>({url: loginUrl, body, headerData})
      .pipe(switchMap(((user: IUser) => {
            this.userData = user;
            this.flashInfoMessage('Logged in. Fetching enterprise', 10000);
            if (this.userData.enterprises.length <= 1) {
              let enterpriseDate = {
                enterpriseId: this.userData.enterprises[0].enterprise_id.id,
                roleId: this.userData.enterprises[0].role_id.id,
                isActive: this.userData.is_active
              };
              return this.enterEnterprise(enterpriseDate);

            } else {
              this.enterpriseList = this.userData.enterprises;
              this.panelActive = ELoginPanels.enterprise_list_display;
              // console.log(this.enterpriseList);
              return of();
            }
          }
        ),
      ), switchMap((value) => {
        if (value) {
          this.gotUserData$.emit(value);
        }
        return of();
      }), catchError((e) => {
        this.loginFailedHandler();
        return of([]);
      }))
      .subscribe();

  }

  loginFailedHandler() {
    this.disabeLoginButton = false;
    this.flashErrorMessage('Problem with login. Please try again', 10000);
    return this.store.dispatch([
      new ResetAuthToDefaultState()
    ]);
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

      return this.serverService.makePostReq<any>({url: enterpriseLoginUrl, body, headerData})
      // .pipe(
      //   switchMap((value) => {
      //     this.gotUserData$.emit(value);
      //     return value;
      //   })
      // );
    } else {
      this.myToasterService.showErrorToaster('Please verify this enterprise before trying to login.');
      return of(null);
    }

  }

  clickedEnterprise(Enterprise) {
    this.enterEnterprise(Enterprise)
      .subscribe((value) => {
        this.gotUserData$.emit(value);
      })
  }

  enterpriseLogout() {
    this.panelActive = ELoginPanels.login;
    this.disabeLoginButton = false;
    this.errorMessage = "";
    this.infoMessage = "";
  }

  loginWithCustomEmail(email) {
    this.loginForm.form.patchValue({email: email, password: 'Test@1234'});
    this.loginSubmitHandler();
  }

  backToLogin() {
    this.panelActive = ELoginPanels.login;
    this.router.navigate(['/login'], {queryParams: {token: null, action: null}});

  }


}
