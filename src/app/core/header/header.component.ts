import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable, Subscription} from 'rxjs';
import {IUser} from '../interfaces/user';
import {ActivatedRoute, Router} from '@angular/router';
import {ResetAppState, ResetStoreToDefault} from '../../ngxs/app.action';
import {ResetChatState} from '../../chat/ngxs/chat.action';
import {ResetBotListAction} from '../view-bots/ngxs/view-bot.action';
import {ResetAuthToDefaultState} from '../../auth/ngxs/auth.action';
import {ConstantsService, EAllActions} from '../../constants.service';
import {ServerService} from '../../server.service';
import {ResetEnterpriseUsersAction} from '../enterpriseprofile/ngxs/enterpriseprofile.action';
import {ResetBuildBotToDefault} from '../buildbot/ngxs/buildbot.action';
import {IEnterpriseProfileInfo} from '../../../interfaces/enterprise-profile';
import {EBotType} from '../view-bots/view-bots.component';
import {ResetAnalytics2GraphData, ResetAnalytics2HeaderData} from '../analysis2/ngxs/analysis.action';
import {UtilityService} from '../../utility.service';
import {IAppState} from '../../ngxs/app.state';
import {ELogType, LoggingService} from '../../logging.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Select() loggeduser$: Observable<{ user: IUser }>;
  @Select() loggeduserenterpriseinfo$: Observable<IEnterpriseProfileInfo>;
  @Select() app$: Observable<IAppState>;
  @Select() app$Subscription: Subscription;
  logoSrc = 'https://hm.imimg.com/imhome_gifs/indiamart-og1.jpg';
  myEBotType = EBotType;
  myEAllActions = EAllActions;
  myEAPermissionsDynamic = EAllActions;
  isFullScreen = false;
  url: string;
  logoutSetTimeoutRef;
  autoLogOutTime: number;
  isOnline = true;
  isDocumentFullScreenModeOn = false;

  constructor(
    private store: Store,
    private serverService: ServerService,
    private activatedRoute: ActivatedRoute,
    private constantsService: ConstantsService,
    public utilityService: UtilityService,
    private router: Router) {
  }

  ngOnInit() {
    document.addEventListener("mozfullscreenchange", ()=>{
      this.isDocumentFullScreenModeOn = !this.isDocumentFullScreenModeOn;
    });
    document.addEventListener("webkitfullscreenchange", ($event)=>{
      this.isDocumentFullScreenModeOn = !this.isDocumentFullScreenModeOn;
    });
    document.addEventListener("msfullscreenchange", ()=>{
      this.isDocumentFullScreenModeOn = !this.isDocumentFullScreenModeOn;
    });

    /*this.app$Subscription = */this.app$.subscribe((app) => {
        /*every time this callback runs remove all previous setTimeOuts*/
        let autoLogOutTime = app.autoLogoutTime;
        if (autoLogOutTime) {

          /*If autoLogOutTime hasn't changed, return
          * else clear previous timeouts, and create a new one
          * */
          if (this.autoLogOutTime === autoLogOutTime) return;
          this.autoLogOutTime = autoLogOutTime;
          this.logoutSetTimeoutRef && clearTimeout(this.logoutSetTimeoutRef);

          /*creating a new Timeout*/
          this.logoutSetTimeoutRef = setTimeout(() => {
            this.logoutSetTimeoutRef && clearTimeout(this.logoutSetTimeoutRef);
            try {
              this.app$Subscription && this.app$Subscription.unsubscribe();
            }catch (e) {
              LoggingService.error(e);/*TODO: find out whats wrong with app$Subscription*/
            }
            LoggingService.log('============================autologout============================');
            this.logout();
            document.location.reload();/*To destroy all timeouts just in case*/
          }, (autoLogOutTime - Date.now()));
        }
      }
    );
    this.loggeduser$.subscribe((value) => {
    });
    this.loggeduserenterpriseinfo$.subscribe((enterpriseProfileInfo) => {
      this.logoSrc = enterpriseProfileInfo.logo || this.logoSrc;
    });
    // this.activatedRoute.queryParams.subscribe((queryParams)=>{
    //   ;
    //   this.isFullScreen = queryParams['isArchitectureFullScreen']==='true'
    // })
  }

  logout() {
    localStorage.clear();
    // this.store.reset({});
    this.url = this.constantsService.getLogoutUrl();
    this.serverService.makeGetReq({url: this.url})
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

  toggleDocumentFullScreen(){
    this.isDocumentFullScreenModeOn? this.utilityService.closeFullscreen() :this.utilityService.openFullscreen();
  }
}
