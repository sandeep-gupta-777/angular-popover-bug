import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, CanLoad, Router} from '@angular/router';
import {AuthGaurdService} from "./auth-gaurd.service";
import {ENgxsStogareKey} from '../typings/enum';

@Injectable()
export class ModuleGaurdLoadService implements CanActivate, CanActivateChild, CanLoad {
  constructor(private router: Router) {}
  /*
  * We don't use NGXS state here because we want to keep root module lean
  * */
  doesAuthTokenExists() {

    try {/*TODO: implement it better*/
      return !!JSON.parse(localStorage.getItem(ENgxsStogareKey.IMI_BOT_STORAGE_KEY)).loggeduser.user.auth_token;
    } catch (e) {
      return false;
    }
  }

  canActivate() {
    if (AuthGaurdService.doesAuthTokenExists()) {
      return true;
    } else {
      this.router.navigate(['auth', 'login']);
      return false;
    }
  }

  canActivateChild() {
    return this.canActivate();
  }

  canLoad() {
    return this.canActivate();
  }

}
