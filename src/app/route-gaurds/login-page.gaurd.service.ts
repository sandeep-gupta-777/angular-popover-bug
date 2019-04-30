import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, CanLoad, Router} from '@angular/router';
import {AuthGaurdService} from "./auth-gaurd.service";

@Injectable()
export class LoginPageGaurdService implements CanActivate, CanActivateChild, CanLoad {
  constructor(private router: Router) {}
  /*
  * We don't use NGXS state here because we want to keep root module lean
  * */


  canActivate() {
    debugger;
    if (AuthGaurdService.doesAuthTokenExists()) {
      this.router.navigate(['/']);
    } else {
      return true;
    }
  }

  canActivateChild() {
    return this.canActivate();
  }

  canLoad() {

    return this.canActivate();
  }

}
