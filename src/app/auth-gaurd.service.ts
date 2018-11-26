
import {map,  take } from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, CanLoad, Route, Router, RouterLinkActive} from '@angular/router';
import {IAuthState} from './auth/ngxs/auth.state';
import {Observable} from 'rxjs';
import {Select} from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate, CanActivateChild, CanLoad {
  constructor(private router: Router) {
  }

  @Select() loggeduser$: Observable<IAuthState>;

  canActivate() {
    return this.loggeduser$.pipe(map((value: IAuthState) => {
      if (value && value.user != null) {
        return true;
      } else {
        this.router.navigate(['auth', 'login']);
        return false;
      }
    }));
  }

  canActivateChild() {

    return this.loggeduser$.pipe(map((value: IAuthState) => {
      if (value.user != null) {
        return true;
      } else {
        this.router.navigate(['auth', 'login']);
        return false;
      }
    }));
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    // return true;
    return this.loggeduser$.pipe(map((value: IAuthState) => {
      if (value.user != null) {
        return true;
      } else {
        this.router.navigate(['auth', 'login']);
        return false;
      }
    }),take(1),);
    /*OMG:
    *What does it means for an observable to complete
    * https://github.com/angular/angular/issues/9613*/
  }

}
