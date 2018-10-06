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
  // allBackEndActionsToFrontEndTabMapping = {
  //   [EAllActions['Get Bots']]: {
  //     route: [],
  //     tab: [ETabNames['Get Bots']],
  //     api: []
  //   },
  //   [EAllActions['Create Bots']]: {
  //     route: [],
  //     tab: [ETabNames['Create Bots']],
  //     api: []
  //   },
  //   [EAllActions['Update Bots']]: {
  //     route: [],
  //     tab: [ETabNames['Update Bots']],
  //     api: []
  //   },
  //   [EAllActions['Delete Bots']]: {
  //     route: [],
  //     tab: [ETabNames['Delete Bots']],
  //     api: []
  //   },
  //   [EAllActions['Get Bots Anonymous']]: {
  //     route: [],
  //     tab: [ETabNames['Get Bots Anonymous']],
  //     api: []
  //   },
  //   [EAllActions['Get Enterprise Knowledge base']]: {
  //     route: [],
  //     tab: [ETabNames['Get Enterprise Knowledge base']],
  //     api: []
  //   },
  //   [EAllActions['Create Enterprise Knowledge base']]: {
  //     route: [],
  //     tab: [ETabNames['Create Enterprise Knowledge base']],
  //     api: []
  //   },
  //   [EAllActions['Update Enterprise Knowledge base']]: {
  //     route: [],
  //     tab: [ETabNames['Update Enterprise Knowledge base']],
  //     api: []
  //   },
  //   [EAllActions['Delete Enterprise Knowledge base']]: {
  //     route: [],
  //     tab: [ETabNames['Delete Enterprise Knowledge base']],
  //     api: []
  //   },
  //   [EAllActions['Create Bot Versioning']]: {
  //     route: [],
  //     tab: [ETabNames['Create Bot Versioning']],
  //     api: []
  //   },
  //   [EAllActions['GET Bot Versioning']]: {
  //     route: [],
  //     tab: [ETabNames['GET Bot Versioning']],
  //     api: []
  //   },
  //   [EAllActions['Update Bot Versioning']]: {
  //     route: [],
  //     tab: [ETabNames['Update Bot Versioning']],
  //     api: []
  //   },
  //   [EAllActions['Delete Bot Versioning']]: {
  //     route: [],
  //     tab: [ETabNames['Delete Bot Versioning']],
  //     api: []
  //   },
  //   [EAllActions['Create Role']]: {
  //     route: [],
  //     tab: [ETabNames['Create Role']],
  //     api: []
  //   },
  //   [EAllActions['Get Role']]: {
  //     route: [],
  //     tab: [ETabNames['Get Role']],
  //     api: []
  //   },
  //   [EAllActions['Update Role']]: {
  //     route: [],
  //     tab: [ETabNames['Update Role']],
  //     api: []
  //   },
  //   [EAllActions['Delete Role']]: {
  //     route: [],
  //     tab: [ETabNames['Delete Role']],
  //     api: []
  //   },
  //   [EAllActions['Create User']]: {
  //     route: [],
  //     tab: [ETabNames['Create User']],
  //     api: []
  //   },
  //   [EAllActions['Get User']]: {
  //     route: [],
  //     tab: [ETabNames['Get User']],
  //     api: []
  //   },
  //   [EAllActions['Update User']]: {
  //     route: [],
  //     tab: [ETabNames['Update User']],
  //     api: []
  //   },
  //   [EAllActions['Get Consumers']]: {
  //     route: [],
  //     tab: [ETabNames['Get Consumers']],
  //     api: []
  //   },
  //   [EAllActions['Get Sessions']]: {
  //     route: [],
  //     tab: [ETabNames['Get Sessions']],
  //     api: []
  //   },
  //   [EAllActions['Analytics']]: {
  //     route: [],
  //     tab: [ETabNames['Analytics']],
  //     api: []
  //   },
  //   [EAllActions['Get Bot Testcases']]: {
  //     route: [],
  //     tab: [ETabNames['Get Bot Testcases']],
  //     api: []
  //   },
  //   [EAllActions['Create Bot Testcases']]: {
  //     route: [],
  //     tab: [ETabNames['Create Bot Testcases']],
  //     api: []
  //   },
  //   [EAllActions['Update Bot Testcases']]: {
  //     route: [],
  //     tab: [ETabNames['Update Bot Testcases']],
  //     api: []
  //   },
  //   [EAllActions['Delete Bot Testcases']]: {
  //     route: [],
  //     tab: [ETabNames['Delete Bot Testcases']],
  //     api: []
  //   },
  //   [EAllActions['Get Integrations']]: {
  //     route: [],
  //     tab: [ETabNames['Get Integrations']],
  //     api: []
  //   },
  //   [EAllActions['Get Pipeline Module']]: {
  //     route: [],
  //     tab: [ETabNames['Get Pipeline Module']],
  //     api: []
  //   },
  //   [EAllActions['Create Reports']]: {
  //     route: [],
  //     tab: [ETabNames['Create Reports']],
  //     api: []
  //   },
  //   [EAllActions['Get Reports']]: {
  //     route: [],
  //     tab: [ETabNames['Get Reports']],
  //     api: []
  //   },
  //   [EAllActions['Update Reports']]: {
  //     route: [],
  //     tab: [ETabNames['Update Reports']],
  //     api: []
  //   },
  //   [EAllActions['Delete Reports']]: {
  //     route: [],
  //     tab: [ETabNames['Delete Reports']],
  //     api: []
  //   },
  //   [EAllActions['Get Report History']]: {
  //     route: [],
  //     tab: [ETabNames['Get Report History']],
  //     api: []
  //   },
  //   [EAllActions['Get Enterprise']]: {
  //     route: [],
  //     tab: [ETabNames['Get Enterprise']],
  //     api: []
  //   },
  //   [EAllActions['Update Enterprise']]: {
  //     route: [],
  //     tab: [ETabNames['Update Enterprise']],
  //     api: []
  //   },
  //   [EAllActions['Delete User']]: {
  //     route: [],
  //     tab: [ETabNames['Delete User']],
  //     api: []
  //   },
  //   [EAllActions['Get Report Types']]: {
  //     route: [],
  //     tab: [ETabNames['Get Report Types']],
  //     api: []
  //   },
  //   [EAllActions['Send API']]: {
  //     route: [],
  //     tab: [ETabNames['Send API']],
  //     api: []
  //   },
  //   [EAllActions['Get Messages']]: {
  //     route: [],
  //     tab: [ETabNames['Get Messages']],
  //     api: []
  //   },
  //   [EAllActions['Get Actions']]: {
  //     route: [],
  //     tab: [ETabNames['Get Actions']],
  //     api: []
  //   },
  //   [EAllActions['Close Room']]: {
  //     route: [],
  //     tab: [ETabNames['Close Room']],
  //     api: []
  //   },
  //   [EAllActions['agent_close']]: {
  //     route: [],
  //     tab: [ETabNames['agent_close']],
  //     api: []
  //   },
  //   [EAllActions['Anonymize Conversation']]: {
  //     route: [],
  //     tab: [ETabNames['Anonymize Conversation']],
  //     api: []
  //   },
  //   [EAllActions['Post dfRules Debug']]: {
  //     route: [],
  //     tab: [ETabNames['Post dfRules Debug']],
  //     api: []
  //   },
  //   [EAllActions['Post genRules Debug']]: {
  //     route: [],
  //     tab: [ETabNames['Post genRules Debug']],
  //     api: []
  //   },
  //   [EAllActions['Post genTemplate Debug']]: {
  //     route: [],
  //     tab: [ETabNames['Post genTemplate Debug']],
  //     api: []
  //   },
  //   [EAllActions['Post Workflow Debug']]: {
  //     route: [],
  //     tab: [ETabNames['Post Workflow Debug']],
  //     api: []
  //   },
  //   [EAllActions['Workflow Webhook']]: {
  //     route: [],
  //     tab: [ETabNames['Workflow Webhook']],
  //     api: []
  //   },
  //   [EAllActions['Facebook Webhook']]: {
  //     route: [],
  //     tab: [ETabNames['Facebook Webhook']],
  //     api: []
  //   },
  //   [EAllActions['Backward Compatible Message API']]: {
  //     route: [],
  //     tab: [ETabNames['Backward Compatible Message API']],
  //     api: []
  //   },
  //   [EAllActions['Intelligence API Webhook']]: {
  //     route: [],
  //     tab: [ETabNames['Intelligence API Webhook']],
  //     api: []
  //   },
  //   [EAllActions['Delete Consumer']]: {
  //     route: [],
  //     tab: [ETabNames['Delete Consumer']],
  //     api: []
  //   },
  //   [EAllActions['Create Decrypt Audit']]: {
  //     route: [],
  //     tab: [ETabNames['Create Decrypt Audit']],
  //     api: []
  //   },
  //   [EAllActions['erase consumer']]: {
  //     route: [],
  //     tab: [ETabNames['erase consumer']],
  //     api: []
  //   },
  //   [EAllActions['Exec Reports']]: {
  //     route: [],
  //     tab: [ETabNames['Exec Reports']],
  //     api: []
  //   },
  //   [EAllActions['Download Reports']]: {
  //     route: [],
  //     tab: [ETabNames['Download Reports']],
  //     api: []
  //   },
  //   [EAllActions['Skype API']]: {
  //     route: [],
  //     tab: [ETabNames['Skype API']],
  //     api: []
  //   },
  //   [EAllActions['Update Password']]: {
  //     route: [],
  //     tab: [ETabNames['Update Password']],
  //     api: []
  //   },
  //   [EAllActions['Get Bot Knowledge base']]: {
  //     route: [],
  //     tab: [ETabNames['Get Bot Knowledge base']],
  //     api: []
  //   },
  //   [EAllActions['Create Bot Knowledge base']]: {
  //     route: [],
  //     tab: [ETabNames['Create Bot Knowledge base']],
  //     api: []
  //   },
  //   [EAllActions['Update Bot Knowledge base']]: {
  //     route: [],
  //     tab: [ETabNames['Update Bot Knowledge base']],
  //     api: []
  //   },
  //   [EAllActions['Delete Bot Knowledge base']]: {
  //     route: [],
  //     tab: [ETabNames['Delete Bot Knowledge base']],
  //     api: []
  //   },
  // }
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
        let masterActionList = appState.masterProfilePermissions;
        if (loggeduser.user.role.name === 'Admin') {
          this.forbiddenActionsToFrontEndMapping = [];
          return;
        }
        /*for non admin roles*/
        try {
          this.forbiddenActionsToFrontEndMapping = {...this.allBackEndActionsToFrontEndTabMapping2};
          debugger;
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

  isTabAccessDenied(tabName: string) {
    if (!tabName) return false;
    // let deniedTabs = this.forbiddenActionsToFrontEndMapping[tabName].tab;
    // let isTabAccessDenied = deniedTabs.find((route) => {
    //   return route === tabName;
    // });
    return !!this.forbiddenActionsToFrontEndMapping[tabName];
  }

}
