import { Injectable } from '@angular/core';
import {Store} from '@ngxs/store';
import {ResetBotListAction} from './core/view-bots/ngxs/view-bot.action';
import {ResetAuthToDefaultState} from './auth/ngxs/auth.action';
import {ResetEnterpriseUsersAction} from './core/enterpriseprofile/ngxs/enterpriseprofile.action';
import {ResetBuildBotToDefault} from './core/buildbot/ngxs/buildbot.action';
import {ResetAnalytics2GraphData, ResetAnalytics2HeaderData} from './core/analysis2/ngxs/analysis.action';
import {ResetAppState} from './ngxs/app.action';
import {ResetChatState} from './chat/ngxs/chat.action';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private store:Store) { }

  logout(){

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
  }


}
