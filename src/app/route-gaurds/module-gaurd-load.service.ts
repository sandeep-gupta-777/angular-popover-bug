import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, CanLoad, Router} from '@angular/router';
import {AuthGaurdService} from './auth-gaurd.service';
import {ENgxsStogareKey} from '../typings/enum';
import {defineBase} from '@angular/core/src/render3';

@Injectable()
export class ModuleGaurdLoadService implements CanActivate, CanActivateChild, CanLoad {
  constructor(private router: Router) {}
  /*
  * We don't use NGXS state here because we want to keep root module lean
  * */
  doesAuthTokenExists() {
    debugger;
    try {/*TODO: implement it better*/
      return !!JSON.parse(localStorage.getItem(ENgxsStogareKey.IMI_BOT_STORAGE_KEY)).loggeduser.is_loggedIn;
    } catch (e) {
      return false;
    }
  }

  canActivate() {

  debugger;
    if (AuthGaurdService.doesAuthTokenExists()) {
      return true;
    } else {
      setTimeout(() => {
        this.router.navigate(['auth', 'login']);
      });
      return false;
    }
  }

  canActivateChild() {
  debugger;

    return this.canActivate();
  }

  canLoad() {
  debugger;
    return this.canActivate();
  }

}
