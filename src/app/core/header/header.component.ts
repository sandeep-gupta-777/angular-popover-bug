import { Component, OnInit } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IUser} from '../interfaces/user';
import {Router} from '@angular/router';
import {ResetAppState, ResetStoreToDefault} from '../../ngxs/app.action';
import {ResetChatState} from '../../chat/ngxs/chat.action';
import {ResetBotListAction} from '../view-bots/ngxs/view-bot.action';
import {ResetAuthToDefaultState} from '../../auth/ngxs/auth.action';
import {ConstantsService} from '../../constants.service';
import {ServerService} from '../../server.service';
import {ResetEnterpriseUsersAction} from '../enterpriseprofile/ngxs/enterpriseprofile.action';
import {ResetBuildBotToDefault} from '../buildbot/ngxs/buildbot.action';
import {IEnterpriseProfileInfo} from '../../../interfaces/enterprise-profile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Select() loggeduser$: Observable<{user:IUser}>;
  @Select() loggeduserenterpriseinfo$: Observable<IEnterpriseProfileInfo>;
  logoSrc = 'https://hm.imimg.com/imhome_gifs/indiamart-og1.jpg';
  url:string;
  constructor(
    private store: Store,
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private router:Router) { }

  ngOnInit() {
    this.loggeduser$.subscribe((value)=>{
    });
    this.loggeduserenterpriseinfo$.subscribe((enterpriseProfileInfo)=>{
      this.logoSrc = enterpriseProfileInfo.logo || this.logoSrc;
    });
  }

  logout(){
    localStorage.clear();
    // this.store.reset({});
    this.url = this.constantsService.getLogoutUrl();
    this.serverService.makeGetReq({url: this.url})
    .subscribe((v)=>{debugger;});
    this.store.dispatch([
      new ResetChatState(),
      new ResetBotListAction(),
      new ResetAuthToDefaultState(),
      new ResetEnterpriseUsersAction(),
      new ResetBuildBotToDefault(),
      new ResetAppState()
    ]);
    this.serverService.removeTokens();
    this.router.navigate(['auth','login']);

  }

}
