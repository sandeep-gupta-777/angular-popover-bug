import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, CanLoad, Router, RoutesRecognized} from '@angular/router';
import {AuthGaurdService} from './auth-gaurd.service';

@Injectable()
export class LoginPageGaurdService implements CanActivate, CanActivateChild, CanLoad {
  token;
  action;

  constructor(private router: Router) {
    router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {

        this.token = data.state.root.firstChild.queryParamMap.get('token');
        this.action = data.state.root.firstChild.queryParamMap.get('action');
      }
    });
  }

  /*
  * We don't use NGXS state here because we want to keep root module lean
  * */


  canActivate() {

    const obj: any = decodeURI(window.location.search)
      .replace('?', '')
      .split('&')
      .map(param => param.split('='))
      .reduce((values, [key, value]) => {
        values[key] = value;
        return values;
      }, {});

    if (obj.token && obj.action) {
      return true;
    }


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
