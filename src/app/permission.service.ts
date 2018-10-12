import {Injectable} from '@angular/core';
import {EAllActions, ERoleName} from './constants.service';
import {IAppState} from './ngxs/app.state';
import {Observable} from 'rxjs';
import {actionMatcher, Select} from '@ngxs/store';
import {IProfilePermission} from '../interfaces/profile-action-permission';
import {IUser} from './core/interfaces/user';
import {IAuthState} from './auth/ngxs/auth.state';
import {st} from '@angular/core/src/render3';
import {ELogType, LoggingService} from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  @Select() app$: Observable<IAppState>;
  @Select() loggeduser$: Observable<{ user: IUser }>;
  loggedUser: IUser;
  allBackEndActionsToFrontEndTabMapping2 = {
    [EAllActions['Get Bots']]: true,
    [EAllActions['Create Bots']]: true,
    [EAllActions['Update Bots']]: true,
    [EAllActions['Delete Bots']]: true,
    [EAllActions['Get Bots Anonymous']]: true,
    [EAllActions['Get Enterprise Knowledge base']]: true,
    [EAllActions['Create Enterprise Knowledge base']]: true,
    [EAllActions['Update Enterprise Knowledge base']]: true,
    [EAllActions['Delete Enterprise Knowledge base']]: true,
    [EAllActions['Create Bot Versioning']]: true,
    [EAllActions['GET Bot Versioning']]: true,
    [EAllActions['Update Bot Versioning']]: true,
    [EAllActions['Delete Bot Versioning']]: true,
    [EAllActions['Create Role']]: true,
    [EAllActions['Get Role']]: true,
    [EAllActions['Update Role']]: true,
    [EAllActions['Delete Role']]: true,
    [EAllActions['Create User']]: true,
    [EAllActions['Get User']]: true,
    [EAllActions['Update User']]: true,
    [EAllActions['Get Consumers']]: true,
    [EAllActions['Get Sessions']]: true,
    [EAllActions['Analytics']]: true,
    [EAllActions['Get Bot Testcases']]: true,
    [EAllActions['Create Bot Testcases']]: true,
    [EAllActions['Update Bot Testcases']]: true,
    [EAllActions['Delete Bot Testcases']]: true,
    [EAllActions['Get Integrations']]: true,
    [EAllActions['Get Pipeline Module']]: true,
    [EAllActions['Create Reports']]: true,
    [EAllActions['Get Reports']]: true,
    [EAllActions['Update Reports']]: true,
    [EAllActions['Delete Reports']]: true,
    [EAllActions['Get Report History']]: true,
    [EAllActions['Get Enterprise']]: true,
    [EAllActions['Update Enterprise']]: true,
    [EAllActions['Delete User']]: true,
    [EAllActions['Get Report Types']]: true,
    [EAllActions['Send API']]: true,
    [EAllActions['Get Messages']]: true,
    [EAllActions['Get Actions']]: true,
    [EAllActions['Close Room']]: true,
    [EAllActions['agent_close']]: true,
    [EAllActions['Anonymize Conversation']]: true,
    [EAllActions['Post dfRules Debug']]: true,
    [EAllActions['Post genRules Debug']]: true,
    [EAllActions['Post genTemplate Debug']]: true,
    [EAllActions['Post Workflow Debug']]: true,
    [EAllActions['Workflow Webhook']]: true,
    [EAllActions['Facebook Webhook']]: true,
    [EAllActions['Backward Compatible Message API']]: true,
    [EAllActions['Intelligence API Webhook']]: true,
    [EAllActions['Delete Consumer']]: true,
    [EAllActions['Create Decrypt Audit']]: true,
    [EAllActions['erase consumer']]: true,
    [EAllActions['Exec Reports']]: true,
    [EAllActions['Download Reports']]: true,
    [EAllActions['Skype API']]: true,
    [EAllActions['Update Password']]: true,
    [EAllActions['Get Bot Knowledge base']]: true,
    [EAllActions['Create Bot Knowledge base']]: true,
    [EAllActions['Update Bot Knowledge base']]: true,
    [EAllActions['Delete Bot Knowledge base']]: true,
  };
  forbiddenActionsToFrontEndMapping = {};
  allowedApiHttpVerbPPathToActionNamesMapping = {};

  constructor() {
    this.loggeduser$.subscribe((loggeduser) => {
      if (loggeduser && loggeduser.user) {
        this.loggedUser = loggeduser.user;
      }
      this.app$.subscribe((appState) => {
        try {
          if(!loggeduser.user){
            return;
          }
          let masterActionList = appState.masterProfilePermissions;
          if (loggeduser.user.role.name === 'Admin') {
            this.forbiddenActionsToFrontEndMapping = [];
            return;
          }

          /*for non admin roles*/
          this.forbiddenActionsToFrontEndMapping = {...this.allBackEndActionsToFrontEndTabMapping2};
          /*remove all allowed perms*/
          loggeduser.user.role.permissions.actions.forEach((permId: number) => {
            /*find action name for given permission id*/
            let actionName = masterActionList.find((action) => action.id === permId).name;
            let x = this.forbiddenActionsToFrontEndMapping[actionName];
            let y = this.forbiddenActionsToFrontEndMapping;
            delete this.forbiddenActionsToFrontEndMapping[actionName];
          });


          /*
          * For API access
          * 1. create path-> action map
          * 2. check if that action is allowed
          * */


          let actionToHttpVerbPPathNameMap = {};
          masterActionList.forEach((action: IProfilePermission) => {
            // actionToHttpVerbPPathNameMap[action.permissions.method + '+' + action.permissions.endpoint] = action.name;
            actionToHttpVerbPPathNameMap[action.name] = action.permissions.method + '+' + action.permissions.endpoint;
            return actionToHttpVerbPPathNameMap;
          });

          this.allowedApiHttpVerbPPathToActionNamesMapping = {};
          loggeduser.user.role.permissions.actions.forEach((permId: number) => {
            /*find action name for given permission id*/
            let action = masterActionList.find((action) => action.id === permId);
            let httpVerb = action.permissions.method;
            let path = action.permissions.endpoint;
            let httpVerbPPath = httpVerb + '+' + path;
            this.allowedApiHttpVerbPPathToActionNamesMapping[httpVerbPPath] = action.name;
            // let key:string = this.findKeyForValueInObject(this.allowedApiHttpVerbPPathToActionNamesMapping, actionName);
            // delete this.allowedApiHttpVerbPPathToActionNamesMapping[key];
          });

        } catch (e) {
          LoggingService.error(e);
        }
      });
    });

  }

  findKeyForValueInObject(obj: object, value): string {
    if (!obj || !value) {
      console.error('non valid arguments for findKeyForValueInObject()');
      return;
    }
    let key = Object.keys(obj).find((key) => obj[key] === value);
    return key;
  }

  isTabAccessDenied(tabName: string, accessType="") {//route,tab
    if (!tabName) return false;
    let isDenied = !!this.forbiddenActionsToFrontEndMapping[tabName];
    LoggingService.logMultiple(`checking ${accessType} access for tabName = ${tabName} and the access was ${isDenied ? 'Denied' : 'Allowed'}. Following is forbiddenActionsToFrontEndMapping`, this.forbiddenActionsToFrontEndMapping );
    return isDenied;
  }

  isRouteAccessDenied(tabName: string) {
    return this.isTabAccessDenied(tabName, 'route');
  }

  isApiAccessDenied(url: string, httpVerb: EHttpVerbs) {
    let isAllowed:boolean, httpVerbAndPathKey:string, logMessage:string = "", pathName = this.getPathNameFromUrl(url);
    let roleName = this.loggedUser && this.loggedUser.role.name;
    if (!url || !httpVerb) {
      console.error('invalid args for isApiAccessDenied');
      return;
    }
    if (roleName === ERoleName.Admin) {
      logMessage = "All APIs are allowed for Admin user";
      isAllowed = true;
    } else if (pathName === '/api/v1/actions/' || pathName === '/api/v1/user/login/') {
      logMessage = "get actions api is allowed for all user";
      /*explicitly allowing get action route for all the users, since we can't create allowedApiHttpVerbPPathToActionNamesMapping without it*/
      isAllowed = true;
    } else {
      httpVerbAndPathKey = httpVerb + '+' + pathName;
      isAllowed = !!this.allowedApiHttpVerbPPathToActionNamesMapping[httpVerbAndPathKey];
    }

    LoggingService.logMultiple(`${logMessage} role = ${roleName}. Checked Api access for ${httpVerbAndPathKey} and the access was ${isAllowed ? 'Allowed' : 'Denied'}. This is forbiddenApiToActionNamesMapping:`, this.allowedApiHttpVerbPPathToActionNamesMapping);
    return !isAllowed;
  }

  getPathNameFromUrl(url: string) {
    /*https://stackoverflow.com/questions/736513/how-do-i-parse-a-url-into-hostname-and-path-in-javascript*/
    let parser = document.createElement('a');
    parser.href = url;
    return parser.pathname;
  }

}


export enum EHttpVerbs {
  'GET' = 'GET',
  'POST' = 'POST',
  'PUT' = 'PUT',
  'DELETE' = 'DELETE',
}
