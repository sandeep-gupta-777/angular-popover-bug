"use strict";
// import { EAPermissionsDynamic } from "./constants.service";
// import { ETabNames } from "./Untitled-2";
exports.__esModule = true;
var _a;
var ETabNames;
(function (ETabNames) {
    ETabNames["Get Bots"] = "Get Bots";
    ETabNames["Create Bots"] = "Create Bots";
    ETabNames["Update Bots"] = "Update Bots";
    ETabNames["Delete Bots"] = "Delete Bots";
    ETabNames["Get Bots Anonymous"] = "Get Bots Anonymous";
    ETabNames["Get Enterpise Knowledge base"] = "Get Enterpise Knowledge base";
    ETabNames["Create Enterprise Knowledge base"] = "Create Enterprise Knowledge base";
    ETabNames["Update Enterprise Knowledge base"] = "Update Enterprise Knowledge base";
    ETabNames["Delete Enterprise Knowledge base"] = "Delete Enterprise Knowledge base";
    ETabNames["Create Bot Versioning"] = "Create Bot Versioning";
    ETabNames["GET Bot Versioning"] = "GET Bot Versioning";
    ETabNames["Update Bot Versioning"] = "Update Bot Versioning";
    ETabNames["Delete Bot Versioning"] = "Delete Bot Versioning";
    ETabNames["Create Role"] = "Create Role";
    ETabNames["Get Role"] = "Get Role";
    ETabNames["Update Role"] = "Update Role";
    ETabNames["Delete Role"] = "Delete Role";
    ETabNames["Create User"] = "Create User";
    ETabNames["Get User"] = "Get User";
    ETabNames["Update User"] = "Update User";
    ETabNames["Get Consumers"] = "Get Consumers";
    ETabNames["Get Sessions"] = "Get Sessions";
    ETabNames["Analytics"] = "Analytics";
    ETabNames["Get Bot Testcases"] = "Get Bot Testcases";
    ETabNames["Create Bot Testcases"] = "Create Bot Testcases";
    ETabNames["Update Bot Testcases"] = "Update Bot Testcases";
    ETabNames["Delete Bot Testcases"] = "Delete Bot Testcases";
    ETabNames["Get Integrations"] = "Get Integrations";
    ETabNames["Get Pipeline Module"] = "Get Pipeline Module";
    ETabNames["Create Reports"] = "Create Reports";
    ETabNames["Get Reports"] = "Get Reports";
    ETabNames["Update Reports"] = "Update Reports";
    ETabNames["Delete Reports"] = "Delete Reports";
    ETabNames["Get Report History"] = "Get Report History";
    ETabNames["Get Enterprise"] = "Get Enterprise";
    ETabNames["Update Enterprise"] = "Update Enterprise";
    ETabNames["Delete User"] = "Delete User";
    ETabNames["Get Report Types"] = "Get Report Types";
    ETabNames["Send API"] = "Send API";
    ETabNames["Get Messages"] = "Get Messages";
    ETabNames["Get Actions"] = "Get Actions";
    ETabNames["Close Room"] = "Close Room";
    ETabNames["agent_close"] = "agent_close";
    ETabNames["Anonymize Conversation"] = "Anonymize Conversation";
    ETabNames["Post dfRules Debug"] = "Post dfRules Debug";
    ETabNames["Post genRules Debug"] = "Post genRules Debug";
    ETabNames["Post genTemplate Debug"] = "Post genTemplate Debug";
    ETabNames["Post Workflow Debug"] = "Post Workflow Debug";
    ETabNames["Workflow Webhook"] = "Workflow Webhook";
    ETabNames["Facebook Webhook"] = "Facebook Webhook";
    ETabNames["Backward Compatible Message API"] = "Backward Compatible Message API";
    ETabNames["Intelligence API Webhook"] = "Intelligence API Webhook";
    ETabNames["Delete Consumer"] = "Delete Consumer";
    ETabNames["Create Decrypt Audit"] = "Create Decrypt Audit";
    ETabNames["erase consumer"] = "erase consumer";
    ETabNames["Exec Reports"] = "Exec Reports";
    ETabNames["Download Reports"] = "Download Reports";
    ETabNames["Skype API"] = "Skype API";
    ETabNames["Update Password"] = "Update Password";
    ETabNames["Get Bot Knowledge base"] = "Get Bot Knowledge base";
    ETabNames["Create Bot Knowledge base"] = "Create Bot Knowledge base";
    ETabNames["Update Bot Knowledge base"] = "Update Bot Knowledge base";
    ETabNames["Delete Bot Knowledge base"] = "Delete Bot Knowledge base";
})(ETabNames = exports.ETabNames || (exports.ETabNames = {}));
var EAPermissionsDynamic;
(function (EAPermissionsDynamic) {
    EAPermissionsDynamic["Get Bots"] = "Get Bots";
    EAPermissionsDynamic["Create Bots"] = "Create Bots";
    EAPermissionsDynamic["Update Bots"] = "Update Bots";
    EAPermissionsDynamic["Delete Bots"] = "Delete Bots";
    EAPermissionsDynamic["Get Bots Anonymous"] = "Get Bots Anonymous";
    EAPermissionsDynamic["Get Enterpise Knowledge base"] = "Get Enterpise Knowledge base";
    EAPermissionsDynamic["Create Enterprise Knowledge base"] = "Create Enterprise Knowledge base";
    EAPermissionsDynamic["Update Enterprise Knowledge base"] = "Update Enterprise Knowledge base";
    EAPermissionsDynamic["Delete Enterprise Knowledge base"] = "Delete Enterprise Knowledge base";
    EAPermissionsDynamic["Create Bot Versioning"] = "Create Bot Versioning";
    EAPermissionsDynamic["GET Bot Versioning"] = "GET Bot Versioning";
    EAPermissionsDynamic["Update Bot Versioning"] = "Update Bot Versioning";
    EAPermissionsDynamic["Delete Bot Versioning"] = "Delete Bot Versioning";
    EAPermissionsDynamic["Create Role"] = "Create Role";
    EAPermissionsDynamic["Get Role"] = "Get Role";
    EAPermissionsDynamic["Update Role"] = "Update Role";
    EAPermissionsDynamic["Delete Role"] = "Delete Role";
    EAPermissionsDynamic["Create User"] = "Create User";
    EAPermissionsDynamic["Get User"] = "Get User";
    EAPermissionsDynamic["Update User"] = "Update User";
    EAPermissionsDynamic["Get Consumers"] = "Get Consumers";
    EAPermissionsDynamic["Get Sessions"] = "Get Sessions";
    EAPermissionsDynamic["Analytics"] = "Analytics";
    EAPermissionsDynamic["Get Bot Testcases"] = "Get Bot Testcases";
    EAPermissionsDynamic["Create Bot Testcases"] = "Create Bot Testcases";
    EAPermissionsDynamic["Update Bot Testcases"] = "Update Bot Testcases";
    EAPermissionsDynamic["Delete Bot Testcases"] = "Delete Bot Testcases";
    EAPermissionsDynamic["Get Integrations"] = "Get Integrations";
    EAPermissionsDynamic["Get Pipeline Module"] = "Get Pipeline Module";
    EAPermissionsDynamic["Create Reports"] = "Create Reports";
    EAPermissionsDynamic["Get Reports"] = "Get Reports";
    EAPermissionsDynamic["Update Reports"] = "Update Reports";
    EAPermissionsDynamic["Delete Reports"] = "Delete Reports";
    EAPermissionsDynamic["Get Report History"] = "Get Report History";
    EAPermissionsDynamic["Get Enterprise"] = "Get Enterprise";
    EAPermissionsDynamic["Update Enterprise"] = "Update Enterprise";
    EAPermissionsDynamic["Delete User"] = "Delete User";
    EAPermissionsDynamic["Get Report Types"] = "Get Report Types";
    EAPermissionsDynamic["Send API"] = "Send API";
    EAPermissionsDynamic["Get Messages"] = "Get Messages";
    EAPermissionsDynamic["Get Actions"] = "Get Actions";
    EAPermissionsDynamic["Close Room"] = "Close Room";
    EAPermissionsDynamic["agent_close"] = "agent_close";
    EAPermissionsDynamic["Anonymize Conversation"] = "Anonymize Conversation";
    EAPermissionsDynamic["Post dfRules Debug"] = "Post dfRules Debug";
    EAPermissionsDynamic["Post genRules Debug"] = "Post genRules Debug";
    EAPermissionsDynamic["Post genTemplate Debug"] = "Post genTemplate Debug";
    EAPermissionsDynamic["Post Workflow Debug"] = "Post Workflow Debug";
    EAPermissionsDynamic["Workflow Webhook"] = "Workflow Webhook";
    EAPermissionsDynamic["Facebook Webhook"] = "Facebook Webhook";
    EAPermissionsDynamic["Backward Compatible Message API"] = "Backward Compatible Message API";
    EAPermissionsDynamic["Intelligence API Webhook"] = "Intelligence API Webhook";
    EAPermissionsDynamic["Delete Consumer"] = "Delete Consumer";
    EAPermissionsDynamic["Create Decrypt Audit"] = "Create Decrypt Audit";
    EAPermissionsDynamic["erase consumer"] = "erase consumer";
    EAPermissionsDynamic["Exec Reports"] = "Exec Reports";
    EAPermissionsDynamic["Download Reports"] = "Download Reports";
    EAPermissionsDynamic["Skype API"] = "Skype API";
    EAPermissionsDynamic["Update Password"] = "Update Password";
    EAPermissionsDynamic["Get Bot Knowledge base"] = "Get Bot Knowledge base";
    EAPermissionsDynamic["Create Bot Knowledge base"] = "Create Bot Knowledge base";
    EAPermissionsDynamic["Update Bot Knowledge base"] = "Update Bot Knowledge base";
    EAPermissionsDynamic["Delete Bot Knowledge base"] = "Delete Bot Knowledge base";
})(EAPermissionsDynamic = exports.EAPermissionsDynamic || (exports.EAPermissionsDynamic = {}));
var backEndPermissionsToFrontEndMapping = (_a = {},
    _a[EAPermissionsDynamic['Get Bots']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Create Bots']] = {
        route: [],
        tab: [ETabNames['Create Bots']],
        api: []
    },
    _a[EAPermissionsDynamic['Update Bots']] = {
        route: [],
        tab: [ETabNames['update_bot_button']],
        api: []
    },
    _a[EAPermissionsDynamic['Delete Bots']] = {
        route: [],
        tab: [ETabNames['delete_bot']],
        api: []
    },
    _a[EAPermissionsDynamic['Get Bots Anonymous']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Get Enterpise Knowledge base']] = {
        route: [],
        tab: [ETabNames['knowledgeBase']],
        api: []
    },
    _a[EAPermissionsDynamic['Create Enterprise Knowledge base']] = {
        route: [],
        tab: [ETabNames['knowledgeBase']],
        api: []
    },
    _a[EAPermissionsDynamic['Update Enterprise Knowledge base']] = {
        route: [],
        tab: [ETabNames['knowledgeBase']],
        api: []
    },
    _a[EAPermissionsDynamic['Delete Enterprise Knowledge base']] = {
        route: [],
        tab: [ETabNames['knowledgeBase']],
        api: []
    },
    _a[EAPermissionsDynamic['Create Bot Versioning']] = {
        route: [],
        tab: [ETabNames['botversion']],
        api: []
    },
    _a[EAPermissionsDynamic['GET Bot Versioning']] = {
        route: [],
        tab: [ETabNames['botversion']],
        api: []
    },
    _a[EAPermissionsDynamic['Update Bot Versioning']] = {
        route: [],
        tab: [ETabNames['botversion']],
        api: []
    },
    _a[EAPermissionsDynamic['Delete Bot Versioning']] = {
        route: [],
        tab: [ETabNames['botversion']],
        api: []
    },
    _a[EAPermissionsDynamic['Create Role']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Get Role']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Update Role']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Delete Role']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Create User']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Get User']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Update User']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Get Consumers']] = {
        route: [],
        tab: [ETabNames['customner'], ETabNames['architecture_tab']],
        api: []
    },
    _a[EAPermissionsDynamic['Get Sessions']] = {
        route: [],
        tab: [ETabNames['sessions'], ETabNames['architecture_tab']],
        api: []
    },
    _a[EAPermissionsDynamic['Analytics']] = {
        route: [],
        tab: [ETabNames['analytics2']],
        api: []
    },
    _a[EAPermissionsDynamic['Get Bot Testcases']] = {
        route: [],
        tab: [ETabNames['testing'], ETabNames['architecture_tab']],
        api: []
    },
    _a[EAPermissionsDynamic['Create Bot Testcases']] = {
        route: [],
        tab: [ETabNames['testing'], ETabNames['architecture_tab']],
        api: []
    },
    _a[EAPermissionsDynamic['Update Bot Testcases']] = {
        route: [],
        tab: [ETabNames['testing'], ETabNames['architecture_tab']],
        api: []
    },
    _a[EAPermissionsDynamic['Delete Bot Testcases']] = {
        route: [],
        tab: [ETabNames['testing'], ETabNames['architecture_tab']],
        api: []
    },
    _a[EAPermissionsDynamic['Get Integrations']] = {
        route: [],
        tab: [ETabNames['architecture_items']],
        api: []
    },
    _a[EAPermissionsDynamic['Get Pipeline Module']] = {
        route: [],
        tab: [ETabNames['architecture_items']],
        api: []
    },
    _a[EAPermissionsDynamic['Create Reports']] = {
        route: [],
        tab: [ETabNames['report']],
        api: []
    },
    _a[EAPermissionsDynamic['Get Reports']] = {
        route: [],
        tab: [ETabNames['report']],
        api: []
    },
    _a[EAPermissionsDynamic['Update Reports']] = {
        route: [],
        tab: [ETabNames['report']],
        api: []
    },
    _a[EAPermissionsDynamic['Delete Reports']] = {
        route: [],
        tab: [ETabNames['report']],
        api: []
    },
    _a[EAPermissionsDynamic['Get Report History']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Get Enterprise']] = {
        route: [],
        tab: [ETabNames['enterprise_profile']],
        api: []
    },
    _a[EAPermissionsDynamic['Update Enterprise']] = {
        route: [],
        tab: [ETabNames['enterprise_profile']],
        api: []
    },
    _a[EAPermissionsDynamic['Delete User']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Get Report Types']] = {
        route: [],
        tab: [ETabNames['report']],
        api: []
    },
    _a[EAPermissionsDynamic['Send API']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Get Messages']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Get Actions']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Close Room']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['agent_close']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Anonymize Conversation']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Post dfRules Debug']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Post genRules Debug']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Post genTemplate Debug']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Post Workflow Debug']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Workflow Webhook']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Facebook Webhook']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Backward Compatible Message API']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Intelligence API Webhook']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Delete Consumer']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Create Decrypt Audit']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['erase consumer']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Exec Reports']] = {
        route: [],
        tab: [ETabNames['report']],
        api: []
    },
    _a[EAPermissionsDynamic['Download Reports']] = {
        route: [],
        tab: [ETabNames['report']],
        api: []
    },
    _a[EAPermissionsDynamic['Skype API']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Update Password']] = {
        route: [],
        tab: [],
        api: []
    },
    _a[EAPermissionsDynamic['Get Bot Knowledge base']] = {
        route: [],
        tab: [ETabNames['localknowledgeBase']],
        api: []
    },
    _a[EAPermissionsDynamic['Create Bot Knowledge base']] = {
        route: [],
        tab: [ETabNames['localknowledgeBase']],
        api: []
    },
    _a[EAPermissionsDynamic['Update Bot Knowledge base']] = {
        route: [],
        tab: [ETabNames['localknowledgeBase']],
        api: []
    },
    _a[EAPermissionsDynamic['Delete Bot Knowledge base']] = {
        route: [],
        tab: [ETabNames['localknowledgeBase']],
        api: []
    },
    _a);

console.log(backEndPermissionsToFrontEndMapping);
