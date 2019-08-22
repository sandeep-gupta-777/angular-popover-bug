import {Component, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable, Subscription} from 'rxjs';
import {IUser} from '../interfaces/user';
import {ActivatedRoute, Router} from '@angular/router';
import {ResetAppState} from '../../ngxs/app.action';
import {ResetChatState} from '../../chat/ngxs/chat.action';
import {ResetBotListAction, SetAllBotListAction} from '../view-bots/ngxs/view-bot.action';
import {ResetAuthToDefaultState, ResetLoggedInStatus, SetUser} from '../../auth/ngxs/auth.action';
import {ConstantsService} from '../../constants.service';
import {ServerService} from '../../server.service';
import {ResetEnterpriseUsersAction} from '../enterpriseprofile/ngxs/enterpriseprofile.action';
import {ResetBuildBotToDefault} from '../buildbot/ngxs/buildbot.action';
import {IEnterpriseProfileInfo} from '../../../interfaces/enterprise-profile';
import {ResetAnalytics2GraphData, ResetAnalytics2HeaderData} from '../analysis2/ngxs/analysis.action';
import {EBotType, UtilityService} from '../../utility.service';
import {IAppState} from '../../ngxs/app.state';
import {LoggingService} from '../../logging.service';
import {IAuthState} from '../../auth/ngxs/auth.state';
import {ModalImplementer} from 'src/app/modal-implementer';
import {MatDialog} from '@angular/material';
import {EAllActions, ENgxsStogareKey} from '../../typings/enum';
import {environment} from '../../../environments/environment';
import {EventService} from '../../event.service';
import {Session} from 'inspector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends ModalImplementer implements OnInit, OnDestroy {

  defaultImage = 'assets/img/no image.svg';
  image = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg';
  bc;
  @Select() loggeduser$: Observable<{ user: IUser }>;
  @Select() loggeduserenterpriseinfo$: Observable<IEnterpriseProfileInfo>;
  @Select() app$: Observable<IAppState>;
  @Select() app$Subscription: Subscription;
  logoSrc = 'https://image.ibb.co/hjJ0xA/icon-2x.png';
  myEBotType = EBotType;
  myEAllActions = EAllActions;
  myEAPermissionsDynamic = EAllActions;
  isFullScreen = false;
  url: string;
  logoutSetTimeoutRef;
  autoLogOutTime: number;
  isOnline = true;
  isDocumentFullScreenModeOn = false;
  searchEnterprise: string;
  enterpriseList: any[];
  userData: IUser;
  showIconRow = false;

  constructor(
    private store: Store,
    private serverService: ServerService,
    private activatedRoute: ActivatedRoute,
    private constantsService: ConstantsService,
    public utilityService: UtilityService,
    public matDialog: MatDialog,
    private router: Router,
  ) {
    super(utilityService, matDialog);
  }

  logout$Sub: Subscription;

  ngOnInit() {

    this.logout$ = EventService.logout$.subscribe((shouldCallLogoutApi?) => {
      this.serverService.logout(shouldCallLogoutApi);
    });

    try {
      this.bc = new BroadcastChannel('test_channel');
    } catch (e) {
      console.log(e);
    }
    // this.bc.onmessage = (ev) => {
    //   location.reload();
    // };
    const getAllEnterpriseUrl = this.constantsService.getAllEnterpriseUrl();

    this.serverService.makeGetReq({url: getAllEnterpriseUrl})
      .subscribe((value: any) => {
        this.enterpriseList = value.enterprises;
        // console.log("sadasdasdsad");
        // console.log(this.enterpriseList);
      });

    /*this.app$Subscription = */
    this.app$.subscribe((app) => {

        /*every time this callback runs remove all previous setTimeOuts*/
        const autoLogOutTime = app.autoLogoutTime;
        if (autoLogOutTime && autoLogOutTime !== Infinity) {

          /*If autoLogOutTime hasn't changed, return
          * else clear previous timeouts, and create a new one
          * */
          if (this.autoLogOutTime === autoLogOutTime) {
            return;
          }
          this.autoLogOutTime = autoLogOutTime;
          if (this.logoutSetTimeoutRef) {
            clearTimeout(this.logoutSetTimeoutRef);
          }


          /*creating a new Timeout*/
          this.logoutSetTimeoutRef = setTimeout(() => {

            // alert('You session has expired. Logging out');
            if (this.logoutSetTimeoutRef) {
              clearTimeout(this.logoutSetTimeoutRef);
            }
            try {
              // TODO:this.app$Subscription && this.app$Subscription.unsubscribe();
            } catch (e) {
              LoggingService.error(e); /*TODO: find out whats wrong with app$Subscription*/
            }

            LoggingService.log('============================autologout============================');
            this.serverService.logout();
            // document.location.reload(); /*To destroy all timeouts just in case*/
          }, (autoLogOutTime - Date.now()));

          // console.log(`next logout time is: ${new Date(autoLogOutTime)}. ${(autoLogOutTime-Date.now())/1000} sec from now`);
        }
      }
    );
    // this.url = this.constantsService.getLogoutUrl();
    // this.serverService.makeGetReq({ url: this.url })
    //   .subscribe((v) => {
    //     this.utilityService.showSuccessToaster('Logged Out');
    //   });


    this.loggeduser$
      .subscribe((value: IAuthState) => {
        if (value && value.user != null) {
          this.userData = value.user;
          this.logoSrc = this.userData.enterprise.logo || this.logoSrc;
        }
      });
    // this.loggeduserenterpriseinfo$.subscribe((enterpriseProfileInfo) => {
    //   this.logoSrc = enterpriseProfileInfo.logo || this.logoSrc;
    // });
    // this.activatedRoute.queryParams.subscribe((queryParams)=>{
    //   ;
    //   this.isFullScreen = queryParams['isArchitectureFullScreen']==='true'
    // })
  }

  logout() {
    this.serverService.logout();
  }

  test() {
    this.bc.postMessage('This is a test message.');
  }

  changeEnterprise(template: TemplateRef<any>) {
    const getAllEnterpriseUrl = this.constantsService.getAllEnterpriseUrl();

    this.serverService.makeGetReq({url: getAllEnterpriseUrl})
      .subscribe((value: any) => {

        this.enterpriseList = value.enterprises;
        // console.log("sadasdasdsad");
        // console.log(this.enterpriseList);
        // this.modalRef = this.modalService.show(template, { class: 'modal-lg' })
        this.openPrimaryModal(template);
      });
  }

  toggleDocumentFullScreen() {
    this.isDocumentFullScreenModeOn ? this.utilityService.closeFullscreen() : this.utilityService.openFullscreen();
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

      this.serverService.makePostReq<any>({url: enterpriseLoginUrl, body, headerData})
        .subscribe((value) => {

          this.store.dispatch([
            new SetUser({user: value, is_loggedIn: true}),
            new SetAllBotListAction({botList: []})
          ]).subscribe((user) => {
            // this.router.navigate(['/core/analytics2/volume']);

            this.router.navigate(['/'])
              .then(() => {
                location.reload();
              });

            // const url = this.constantsService.getBotListUrl();
            // const headerData: IHeaderData = { 'content-type': 'application/json' };
            // return this.serverService.makeGetReq<IBotResult>({ url, headerData })
            //   .subscribe((botResult) => {
            //     this.store.dispatch(new SetAllBotListAction({ botList: botResult.objects }))
            //       .subscribe(async () => {
            // const enterpriseProfileUrl = this.constantsService.getEnterpriseUrl(Enterprise.enterpriseId);
            // this.serverService.makeGetReq<IEnterpriseProfileInfo>({ url: enterpriseProfileUrl })
            //   .subscribe((value: IEnterpriseProfileInfo) => {
            //     this.store.dispatch([
            //       new SetEnterpriseInfoAction({ enterpriseInfo: value })
            //     ]).subscribe(() => {

            //     });
            //   });
            //     });

            // });

          });
          // this.gotUserData$.emit(value);
        });
    } else {
      this.utilityService.showErrorToaster('Please verify this enterprise before trying to login.');
    }

  }

  ngOnDestroy(): void {
    try {
      this.logout$Sub.unsubscribe();
    } catch (e) {
      console.log(e);
    }
  }
}
