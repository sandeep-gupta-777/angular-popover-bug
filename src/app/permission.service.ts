import {Injectable} from '@angular/core';
import {EAllActions} from './constants.service';
import {IAppState} from './ngxs/app.state';
import {Observable} from 'rxjs';
import {Select} from '@ngxs/store';
import {IProfilePermission} from '../interfaces/profile-action-permission';
import {IUser} from './core/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  @Select() app$: Observable<IAppState>;
  @Select() loggeduser$: Observable<{ user: IUser }>;
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

  constructor() {
    this.loggeduser$.subscribe((loggeduser) => {
      this.app$.subscribe((appState) => {
        try {
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
        } catch (e) {
          console.log(e);
        }
      });
    });

  }

  isTabAccessDenied(tabName: string, accessType?) {//route,tab
    if (!tabName) return false;
    let isAllowed = !!this.forbiddenActionsToFrontEndMapping[tabName];
    console.info(`checking ${accessType} access for ${tabName} in`, this.forbiddenActionsToFrontEndMapping);
    console.info(`and the access was`, isAllowed);
    return isAllowed;
  }

  isRouteAccessDenied(tabName: string) {
    return this.isTabAccessDenied(tabName, 'route');
    // if (!tabName) return false;
    // // let deniedTabs = this.forbiddenActionsToFrontEndMapping[tabName].tab;
    // // let isTabAccessDenied = deniedTabs.find((route) => {
    // //   return route === tabName;
    // // });
    // console.log(`checking access for ${tabName} in ${this.forbiddenActionsToFrontEndMapping}`);
    // return !!this.forbiddenActionsToFrontEndMapping[tabName];
  }

}
