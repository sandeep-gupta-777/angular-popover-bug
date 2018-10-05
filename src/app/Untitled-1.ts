import { EAPermissionsDynamic } from "./constants.service";
import { ETabNames } from "./Untitled-2";

backEndPermissionsToFrontEndMapping: any = {
    [EAPermissionsDynamic['Get Bots']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Create Bots']]: {
      route: [],
      tab: [ETabNames['Create Bots']],
      api: []
    },
    [EAPermissionsDynamic['Update Bots']]: {
      route: [],
      tab: [ETabNames['update_bot_button']],
      api: []
    },
    [EAPermissionsDynamic['Delete Bots']]: {
      route: [],
      tab: [ETabNames['delete_bot']],
      api: []
    },
    [EAPermissionsDynamic['Get Bots Anonymous']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Get Enterpise Knowledge base']]: {
      route: [],
      tab: [ETabNames['knowledgeBase']],
      api: []
    },
    [EAPermissionsDynamic['Create Enterprise Knowledge base']]: {
      route: [],
      tab: [ETabNames['knowledgeBase']],
      api: []
    },
    [EAPermissionsDynamic['Update Enterprise Knowledge base']]: {
      route: [],
      tab: [ETabNames['knowledgeBase']],
      api: []
    },
    [EAPermissionsDynamic['Delete Enterprise Knowledge base']]: {
      route: [],
      tab: [ETabNames['knowledgeBase']],
      api: []
    },
    [EAPermissionsDynamic['Create Bot Versioning']]: {
      route: [],
      tab: [ETabNames['botversion']],
      api: []
    },
    [EAPermissionsDynamic['GET Bot Versioning']]: {
      route: [],
      tab: [ETabNames['botversion']],
      api: []
    },
    [EAPermissionsDynamic['Update Bot Versioning']]: {
      route: [],
      tab: [ETabNames['botversion']],
      api: []
    },
    [EAPermissionsDynamic['Delete Bot Versioning']]: {
      route: [],
      tab: [ETabNames['botversion']],
      api: []
    },
    [EAPermissionsDynamic['Create Role']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Get Role']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Update Role']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Delete Role']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Create User']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Get User']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Update User']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Get Consumers']]: {
      route: [],
      tab: [ETabNames['customner'], ETabNames['architecture_tab']],
      api: []
    },
    [EAPermissionsDynamic['Get Sessions']]: {
      route: [],
      tab: [ETabNames['sessions'], ETabNames['architecture_tab']],
      api: []
    },
    [EAPermissionsDynamic['Analytics']]: {
      route: [],
      tab: [ETabNames['analytics2']],
      api: []
    },
    [EAPermissionsDynamic['Get Bot Testcases']]: {
      route: [],
      tab: [ETabNames['testing'], ETabNames['architecture_tab']],
      api: []
    },
    [EAPermissionsDynamic['Create Bot Testcases']]: {
      route: [],
      tab: [ETabNames['testing'], ETabNames['architecture_tab']],
      api: []
    },
    [EAPermissionsDynamic['Update Bot Testcases']]: {
      route: [],
      tab: [ETabNames['testing'], ETabNames['architecture_tab']],
      api: []
    },
    [EAPermissionsDynamic['Delete Bot Testcases']]: {
      route: [],
      tab: [ETabNames['testing'], ETabNames['architecture_tab']],
      api: []
    },
    [EAPermissionsDynamic['Get Integrations']]: {
      route: [],
      tab: [ETabNames['architecture_items']],
      api: []
    },
    [EAPermissionsDynamic['Get Pipeline Module']]: {
      route: [],
      tab: [ETabNames['architecture_items']],
      api: []
    },
    [EAPermissionsDynamic['Create Reports']]: {
      route: [],
      tab: [ETabNames['report']],
      api: []
    },
    [EAPermissionsDynamic['Get Reports']]: {
      route: [],
      tab: [ETabNames['report']],
      api: []
    },
    [EAPermissionsDynamic['Update Reports']]: {
      route: [],
      tab: [ETabNames['report']],
      api: []
    },
    [EAPermissionsDynamic['Delete Reports']]: {
      route: [],
      tab: [ETabNames['report']],
      api: []
    },
    [EAPermissionsDynamic['Get Report History']]: {
      route: [],
      tab: [ETa],
      api: []
    },
    [EAPermissionsDynamic['Get Enterprise']]: {
      route: [],
      tab: [ETabNames['enterprise_profile']],
      api: []
    },
    [EAPermissionsDynamic['Update Enterprise']]: {
      route: [],
      tab: [ETabNames['enterprise_profile']],
      api: []
    },
    [EAPermissionsDynamic['Delete User']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Get Report Types']]: {
      route: [],
      tab: [ETabNames['report']],
      api: []
    },
    [EAPermissionsDynamic['Send API']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Get Messages']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Get Actions']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Close Room']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['agent_close']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Anonymize Conversation']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Post dfRules Debug']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Post genRules Debug']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Post genTemplate Debug']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Post Workflow Debug']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Workflow Webhook']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Facebook Webhook']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Backward Compatible Message API']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Intelligence API Webhook']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Delete Consumer']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Create Decrypt Audit']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['erase consumer']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Exec Reports']]: {
      route: [],
      tab: [ETabNames['report']],
      api: []
    },
    [EAPermissionsDynamic['Download Reports']]: {
      route: [],
      tab: [ETabNames['report']],
      api: []
    },
    [EAPermissionsDynamic['Skype API']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Update Password']]: {
      route: [],
      tab: [],
      api: []
    },
    [EAPermissionsDynamic['Get Bot Knowledge base']]: {
      route: [],
      tab: [ETabNames['localknowledgeBase']],
      api: []
    },
    [EAPermissionsDynamic['Create Bot Knowledge base']]: {
      route: [],
      tab: [ETabNames['localknowledgeBase']],
      api: []
    },
    [EAPermissionsDynamic['Update Bot Knowledge base']]: {
      route: [],
      tab: [ETabNames['localknowledgeBase']],
      api: []
    },
    [EAPermissionsDynamic['Delete Bot Knowledge base']]: {
      route: [],
      tab: [ETabNames['localknowledgeBase']],
      api: []
    },
  }