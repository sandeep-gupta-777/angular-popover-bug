import {Injectable} from '@angular/core';
import {
  ActivatedRoute, ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterLinkActive,
  RouterStateSnapshot
} from '@angular/router';
import {IAuthState} from './auth/ngxs/auth.state';
import {Observable} from 'rxjs';
import {Select} from '@ngxs/store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { take } from 'rxjs/operators';
import {ConstantsService} from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGaurdService implements CanActivate, CanActivateChild, CanLoad {
  constructor(
    private router: Router,
    private constantsService:ConstantsService,
    private activatedRoute:ActivatedRoute
    ) {
  }

  @Select() loggeduser$: Observable<IAuthState>;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return true;

    return this.loggeduser$.map((value: IAuthState) => {
      return this.shouldAllowAccess(value,route);
    });
  }

  shouldAllowAccess(value,route:ActivatedRouteSnapshot){
    if (value && value.user != null) {

      let routeName = route.data["routeName"];
      if(!this.constantsService.isRouteAccessDenied(routeName)){
        return true;
      }else {f
        this.router.navigate(['/denied']);
      }
    } else {
      this.router.navigate(['auth','login']);
      return false;
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.loggeduser$.map((value: IAuthState) => {
     return this.shouldAllowAccess(value, route)
    });
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.loggeduser$.map((value: IAuthState) => {
      if (value.user != null) {
        return true;
      } else {
        this.router.navigate(['auth', 'login']);
        return false;
      }
    }).take(1)
    /*OMG:
    *What does it means for an observable to complete
    * https://github.com/angular/angular/issues/9613*/
  }

}
