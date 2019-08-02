import {Injectable} from '@angular/core';

import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {LoadJsService} from './core/load-js.service';
import {ServerService} from './server.service';
import {callNgModuleLifecycle} from '@angular/core/src/view/ng_module';
import {IBot} from './core/interfaces/IBot';

@Injectable()
export class BotResolver implements Resolve<Observable<any>> {
  constructor(private serverService: ServerService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    debugger;
    return of(1);
    // try {
    //   console.log(state.url);
    //   const urlSplit = state.url.split('/');
    //   let bot_id = urlSplit[urlSplit.length];
    //   if (!bot_id || bot_id.trim()) {
    //     bot_id = urlSplit[urlSplit.length - 1];
    //   }
    //   const bot: IBot = {
    //     id: Number(bot_id),
    //     bot_access_token: ServerService.getBotTokenById(Number(bot_id))
    //   };
    //   return this.serverService.fetchSpecificBotFromServerAndUpdateBotList(bot);
    // } catch (e) {
    //   of(1);
    // }
  }
}
