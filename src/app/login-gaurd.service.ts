
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {IAuthState} from './auth/ngxs/auth.state';
import {RouteConfigLoadEnd, RouteConfigLoadStart, Router, RoutesRecognized} from '@angular/router';
import {Observable} from 'rxjs';
import {Select} from '@ngxs/store';

@Injectable()
export class LoginGaurdService {

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

  @Select() loggeduser$: Observable<IAuthState>;

  canActivate() {

    /*todo: temporary solution...might not work in SSR*/
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

    return this.loggeduser$.pipe(map((value: IAuthState) => {
      if (!value || !value.is_loggedIn) {
        return true;
      } else {
        this.router.navigate(['/core/viewbots']);
        return false;
      }
    }));
  }
}
