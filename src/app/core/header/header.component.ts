import { Component, OnInit, TemplateRef } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { IUser } from '../interfaces/user';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetAppState, ResetStoreToDefault } from '../../ngxs/app.action';
import { ResetChatState } from '../../chat/ngxs/chat.action';
import { ResetBotListAction, SetAllBotListAction } from '../view-bots/ngxs/view-bot.action';
import { ResetAuthToDefaultState, SetUser } from '../../auth/ngxs/auth.action';
import { ConstantsService, EAllActions } from '../../constants.service';
import { ServerService } from '../../server.service';
import { ResetEnterpriseUsersAction, SetEnterpriseInfoAction } from '../enterpriseprofile/ngxs/enterpriseprofile.action';
import { ResetBuildBotToDefault } from '../buildbot/ngxs/buildbot.action';
import { IEnterpriseProfileInfo } from '../../../interfaces/enterprise-profile';
import { ResetAnalytics2GraphData, ResetAnalytics2HeaderData } from '../analysis2/ngxs/analysis.action';
import { EBotType, UtilityService } from '../../utility.service';
import { IAppState } from '../../ngxs/app.state';
import { ELogType, LoggingService } from '../../logging.service';
import { IHeaderData } from '../../../interfaces/header-data';
import { IBotResult } from '../interfaces/IBot';
import { IAuthState } from '../../auth/ngxs/auth.state';
import { ModalImplementer } from 'src/app/modal-implementer';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends ModalImplementer implements OnInit {

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
  constructor(
    private store: Store,
    private serverService: ServerService,
    private activatedRoute: ActivatedRoute,
    private constantsService: ConstantsService,
    public utilityService: UtilityService,
    public matDialog: MatDialog,
    private router: Router,
  ) {
    super(utilityService ,matDialog );
  }

  ngOnInit() {
    let getAllEnterpriseUrl = this.constantsService.getAllEnterpriseUrl();

    this.serverService.makeGetReq({ url: getAllEnterpriseUrl })
      .subscribe((value: any) => {

        this.enterpriseList = value.enterprises;
        // console.log("sadasdasdsad");
        console.log(this.enterpriseList);
      });

    document.addEventListener('mozfullscreenchange', () => {
      this.isDocumentFullScreenModeOn = !this.isDocumentFullScreenModeOn;
    });
    document.addEventListener('webkitfullscreenchange', ($event) => {
      this.isDocumentFullScreenModeOn = !this.isDocumentFullScreenModeOn;
    });
    document.addEventListener('msfullscreenchange', () => {
      this.isDocumentFullScreenModeOn = !this.isDocumentFullScreenModeOn;
    });

    /*this.app$Subscription = */this.app$.subscribe((app) => {
      /*every time this callback runs remove all previous setTimeOuts*/
      const autoLogOutTime = app.autoLogoutTime;
      if (autoLogOutTime) {

        /*If autoLogOutTime hasn't changed, return
        * else clear previous timeouts, and create a new one
        * */
        if (this.autoLogOutTime === autoLogOutTime) { return; }
        this.autoLogOutTime = autoLogOutTime;
        this.logoutSetTimeoutRef && clearTimeout(this.logoutSetTimeoutRef);

        /*creating a new Timeout*/
        this.logoutSetTimeoutRef = setTimeout(() => {
          this.logoutSetTimeoutRef && clearTimeout(this.logoutSetTimeoutRef);
          try {
            this.app$Subscription && this.app$Subscription.unsubscribe();
          } catch (e) {
            LoggingService.error(e); /*TODO: find out whats wrong with app$Subscription*/
          }
          LoggingService.log('============================autologout============================');
          this.logout();
          document.location.reload(); /*To destroy all timeouts just in case*/
        }, (autoLogOutTime - Date.now()));
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
    localStorage.clear();
    // this.store.reset({});
    this.url = this.constantsService.getLogoutUrl();
    this.serverService.makeGetReq({ url: this.url })
      .subscribe((v) => {
        this.utilityService.showSuccessToaster('Logged Out');
      });
    this.store.dispatch([

      new ResetBotListAction(),
      new ResetAuthToDefaultState(),
      new ResetEnterpriseUsersAction(),
      new ResetBuildBotToDefault(),
      new ResetAnalytics2GraphData(),
      new ResetAnalytics2HeaderData(),
      new ResetAppState()
    ]).subscribe(() => {
      this.store.dispatch([new ResetChatState()]);
    });
    this.serverService.removeTokens();
    this.router.navigate(['auth', 'login']);

  }
  changeEnterprise(template: TemplateRef<any>) {
    let getAllEnterpriseUrl = this.constantsService.getAllEnterpriseUrl();

    this.serverService.makeGetReq({ url: getAllEnterpriseUrl })
      .subscribe((value: any) => {

        this.enterpriseList = value.enterprises;
        // console.log("sadasdasdsad");
        console.log(this.enterpriseList);
        // this.modalRef = this.modalService.show(template, { class: 'modal-lg' })
        this.openPrimaryModal(template);
      });
  }
  toggleDocumentFullScreen() {
    this.isDocumentFullScreenModeOn ? this.utilityService.closeFullscreen() : this.utilityService.openFullscreen();
  }

  enterEnterprise(Enterprise) {

    let enterpriseLoginUrl = this.constantsService.getEnterpriseLoginUrl();
    let body = {
      "user_id": this.userData.id,
      "enterprise_id": Enterprise.enterpriseId,
      "role_id": Enterprise.roleId
    }
    let headerData = {
      "auth-token": this.userData.auth_token
    }

    this.serverService.makePostReq<any>({ url: enterpriseLoginUrl, body, headerData })
      .subscribe((value) => {

        this.store.dispatch([
          new SetUser({ user: value }),
        ]).subscribe((user) => {
          const url = this.constantsService.getBotListUrl();
          const headerData: IHeaderData = { 'content-type': 'application/json' };
          return this.serverService.makeGetReq<IBotResult>({ url, headerData })
            .subscribe((botResult) => {
              this.store.dispatch(new SetAllBotListAction({ botList: botResult.objects }))
                .subscribe(() => {

                  const enterpriseProfileUrl = this.constantsService.getEnterpriseUrl(Enterprise.enterpriseId);
                  this.serverService.makeGetReq<IEnterpriseProfileInfo>({ url: enterpriseProfileUrl })
                    .subscribe((value: IEnterpriseProfileInfo) => {
                      this.store.dispatch([
                        new SetEnterpriseInfoAction({ enterpriseInfo: value })
                      ]).subscribe(() => {
                        location.reload();
                      });
                    });
                });

            });

        })
        // this.gotUserData$.emit(value);
      });
  }
}
