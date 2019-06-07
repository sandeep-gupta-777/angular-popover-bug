import {Injectable} from '@angular/core';
import {IAppState} from './ngxs/app.state';
import {Observable} from 'rxjs';
import {actionMatcher, Select} from '@ngxs/store';
import {IProfilePermission} from '../interfaces/profile-action-permission';
import {IUser} from './core/interfaces/user';
import {IAuthState} from './auth/ngxs/auth.state';

import {ELogType, LoggingService} from './logging.service';
import {EAllActions, ERoleName, EAPINames} from "./typings/enum";
import {environment} from '../environments/environment';

@Injectable()
export class PermissionService {
  @Select() app$: Observable<IAppState>;
  @Select() loggeduser$: Observable<{ user: IUser }>;
  loggedUser: IUser;
  advanced_data_protection;
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
    [EAllActions['GET ModuleDetail']]: true,
  [EAllActions['Create Corpus' ]]:true,
  [EAllActions['Update Corpus' ]]:true,
  [EAllActions['Get Corpus' ]]:true,
  [EAllActions['delete Corpus' ]]:true,
  [EAllActions['Create Category' ]]:true,
  [EAllActions['Update Category' ]]:true,
  [EAllActions['Remove Category' ]]:true,
  [EAllActions['Section Category Change' ]]:true,
  [EAllActions['Make Corpus Live' ]]:true,
  [EAllActions['Create Section' ]]:true,
  [EAllActions['Update Section' ]]:true,
  [EAllActions['Remove Section' ]]:true,
  [EAllActions['Get Default Corpus' ]]:true,
  [EAllActions['Train Corpus' ]]:true,
  [EAllActions['Section Category Change with Category Creation' ]]:true,
  };
  forbiddenActionsToFrontEndMapping = {};
  allowedApiHttpVerbPPathToActionNamesMapping = {};
  ApiAccessAllowedUrlList: string[] = [
    '/api/v1/actions/',
    '/api/v1/user/login/',
    '/api/v1/user/resetpasswordurl/',
    '/api/v1/user/resetpassword/',
    '/api/v1/webhook/web/',
    '/api/v1/user/enterprise_login/',
    '/api/v1/user/enterprises/',
    '/api/v1/enterprise/',
    '/api/v1/room/',
    '/api/v1/role/',
    '/api/v1/corpus/',
    '/api/v1/corpus/getdefaultcorpus/',
    '/static/config.json',
    '/static/deploy.json',
    '/deploy.json',
    ''
  ];

  constructor() {
    this.loggeduser$.subscribe((loggeduser) => {
      if (loggeduser && loggeduser.user) {
        this.loggedUser = loggeduser.user;
      }
    //
    });

    this.app$.subscribe((appState) => {
      ;
      if(!appState){
        return;
      }
      try {
        const masterActionList = appState.masterProfilePermissions;
        if (!this.loggedUser || !masterActionList) {
          return;
        }
        if (this.loggedUser.role.name === 'Admin') {
          this.forbiddenActionsToFrontEndMapping = [];
          return;
        }

        /*for non admin roles*/
        this.forbiddenActionsToFrontEndMapping = {...this.allBackEndActionsToFrontEndTabMapping2};
        /*remove all allowed perms*/
       try{
         this.loggedUser.role.permissions.actions.forEach((permId: number) => {
           /*find action name for given permission roomId*/
           if (!masterActionList) return;
           let actionName;
           try {
              actionName = masterActionList.find((action) => action.id === permId).name;
          }catch (e) {
             if(!environment.production){
               console.error(`can't find action id = ${permId} in masterActionList but its present in role > actions`);
             }
            console.log(e);
          }
           const x = this.forbiddenActionsToFrontEndMapping[actionName];
           const y = this.forbiddenActionsToFrontEndMapping;
           delete this.forbiddenActionsToFrontEndMapping[actionName];
         });
       }catch (e) {
         debugger
         console.log(e);
       }


        /*
        * For API access
        * 1. create path-> action map
        * 2. check if that action is allowed
        * */

        const actionToHttpVerbPPathNameMap = {};
        masterActionList.forEach((action: IProfilePermission) => {
          // actionToHttpVerbPPathNameMap[action.permissions.method + '+' + action.permissions.endpoint] = action.name;
          actionToHttpVerbPPathNameMap[action.name] = action.permissions.method + '+' + action.permissions.endpoint;
          return actionToHttpVerbPPathNameMap;
        });

        this.allowedApiHttpVerbPPathToActionNamesMapping = {};
        /*add the explicit permissions */
        // this.loggeduser.role.permissions.actions.forEach((permId: number) => {
        //   /*find action name for given permission roomId*/
        //   const action = masterActionList.find((action) => action.roomId === permId);
        //   const httpVerb = action.permissions.method;
        //   const path = action.permissions.endpoint;
        //   const httpVerbPPath = httpVerb + '+' + path;
        //   this.allowedApiHttpVerbPPathToActionNamesMapping[httpVerbPPath] = action.name;
        // });

        /*add the explicit and default permissions */
        masterActionList.forEach((action) => {

          let addActionToUser: boolean;
          addActionToUser = action.is_default_action || !!this.loggedUser.role.permissions.actions.find((permId: number) => permId === action.id);
          if(addActionToUser){
            const httpVerb = action.permissions.method;
            const path = action.permissions.endpoint;
            const httpVerbPPath = httpVerb + '+' + path;
            this.allowedApiHttpVerbPPathToActionNamesMapping[httpVerbPPath] = action.name;
          }
        });

        /*add the default permissions*/

      } catch (e) {
        LoggingService.error(e);
      }
    });

  }

  isInApiAccessAllowedUrlList(pathName) {
    const check = this.ApiAccessAllowedUrlList.find(x => x === pathName);
    return !!check;
  }

  findKeyForValueInObject(obj: object, value): string {
    if (!obj || !value) {
      console.error('non valid arguments for findKeyForValueInObject()');
      return;
    }
    const key = Object.keys(obj).find((key) => obj[key] === value);
    return key;
  }

  isTabAccessDenied(tabName: string, accessType = '') {//route,tab
    if (!tabName) {
      return false;
    }
    const isDenied = !!this.forbiddenActionsToFrontEndMapping[tabName];
    LoggingService.logMultiple(`checking ${accessType} access for tabName = ${tabName} and the access was ${isDenied ? 'Denied' : 'Allowed'}. Following is forbiddenActionsToFrontEndMapping`, this.forbiddenActionsToFrontEndMapping);
    return isDenied;
  }

  isRouteAccessDenied(tabName: string) {
    return this.isTabAccessDenied(tabName, 'route');
  }

  isApiAccessDenied(url: string, httpVerb: EHttpVerbs) {

    let isAllowed: boolean, httpVerbAndPathKey: string, logMessage = '', pathName = this.getPathNameFromUrl(url);
    const roleName = this.loggedUser && this.loggedUser.role.name;
    if (!url || !httpVerb) {
      console.error('invalid args for isApiAccessDenied');
      return;
    }
    if (roleName === ERoleName.Admin) {
      logMessage = 'All APIs are allowed for Admin user';
      isAllowed = true;
    } else if (this.isInApiAccessAllowedUrlList(pathName)) {
      logMessage = 'get actions api is allowed for all user';
      /*explicitly allowing get action route for all the users, since we can't create allowedApiHttpVerbPPathToActionNamesMapping without it*/
      isAllowed = true;
    } else {
      httpVerbAndPathKey = httpVerb + '+' + pathName;
      debugger;
      isAllowed = !!this.allowedApiHttpVerbPPathToActionNamesMapping[httpVerbAndPathKey];
    }

    LoggingService.logMultiple(`${logMessage} role = ${roleName}. Checked Api access for ${httpVerbAndPathKey} and the access was ${isAllowed ? 'Allowed' : 'Denied'}. This is forbiddenApiToActionNamesMapping:`, this.allowedApiHttpVerbPPathToActionNamesMapping);
    return !isAllowed;
  }

  getPathNameFromUrl(url: string) {
    /*https://stackoverflow.com/questions/736513/how-do-i-parse-a-url-into-hostname-and-path-in-javascript*/
    const parser = document.createElement('a');
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
