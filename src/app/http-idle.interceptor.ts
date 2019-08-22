import {Injectable, Injector} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ConstantsService} from './constants.service';
import {bots} from './fixtures/bot';
import {login} from './fixtures/login';
import {actions} from './fixtures/actions';
import {enterprise_login} from './fixtures/enterprise_login';
import {enterprises} from './fixtures/enterprises';
import {role} from './fixtures/role';
import {sessions} from './fixtures/sessions';
import {environment} from '../environments/environment';
import {integrations} from './fixtures/integrations';
import {pipeline_module} from './fixtures/pipeline-module';
import {enterprise} from './fixtures/enterprise';
import {enterprise_ner} from './fixtures/enterprise-ner';
import {consumer} from './fixtures/consumer';
import {botTests} from './fixtures/bot-testing';
import {versions} from './fixtures/bot-version';
import {reportTypes} from './fixtures/reporttypes';
import {reportHistory} from './fixtures/reporthistory';
import {reports} from './fixtures/reports';
import {SetAutoLogoutTime} from './ngxs/app.action';
import {Select, Store} from '@ngxs/store';
import {IUser} from './core/interfaces/user';
import {IAppState} from './ngxs/app.state';
import {IRoleInfo} from '../interfaces/role-info';
import {tap} from 'rxjs/operators';
import {EventService} from './event.service';

@Injectable()
export class HttpIdleInterceptor implements HttpInterceptor {
  @Select() loggeduser$: Observable<{ user: IUser }>;
  @Select() app$: Observable<IAppState>;
  roleInfo: IRoleInfo;
  roleName;

  constructor(private store: Store) {
    /*todo: duplicated from server service*/
    this.loggeduser$.subscribe((value) => {
      if (!value || !value.user) {
        return;
      }
      this.roleName = value.user.role.name;
      this.app$.subscribe((appState) => {
        if (!this.roleInfo && appState && appState.roleInfoArr) {
          this.roleInfo = appState.roleInfoArr.find((role_temp) => {
            return role_temp.name === value.user.role.name;
          });
        }
      });
    });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(tap((response) => {

        if (response instanceof HttpResponse || response instanceof HttpErrorResponse) {
          this.increaseAutoLogoutTime();
          if (response instanceof HttpResponse) {
            this.checkForLogoutAction(response.body);
          } else {
            /*todo: something should be here*/
            // this.checkForLogoutAction(response.);
          }
        }
      }));
  }

  increaseAutoLogoutTime() {
    let autoLogoutInterval = Infinity;
    if (this.roleInfo) {

      if (this.roleInfo.session_expiry_time === -1) {
        autoLogoutInterval = Infinity;
      } else {
        autoLogoutInterval = (this.roleInfo && this.roleInfo.session_expiry_time * 1000) || 3600 * 1000; // 3600*1000
      }
    }
    if (!this.roleInfo) {
      // console.log("increaseAutoLogoutTime: ROLE IS NOT FOUND=====================")
    }
    this.store.dispatch([
      new SetAutoLogoutTime({time: (Date.now() + autoLogoutInterval)})
    ]);
    console.log('increaseAutoLogoutTime', autoLogoutInterval, this.roleInfo.session_expiry_time);
  }

  checkForLogoutAction(obj: { action: string }) {
    if (!obj) {
      return;
    }
    const {action} = obj;
    if (action === 'logout') {
      /* temporary*/
      localStorage.clear();
      EventService.logout$.emit();
      // location.reload();
      return;
    }
  }
}
