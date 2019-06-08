"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var store_1 = require("@ngxs/store");
var environment_prod_1 = require("../environments/environment.prod");
var ERouteNames;
(function (ERouteNames) {
    ERouteNames["customner"] = "customner";
    ERouteNames["report"] = "report";
    ERouteNames["create_report"] = "create_report";
    ERouteNames["enterprise_profile"] = "enterprise_profile";
    ERouteNames["analytics2"] = "analytics2";
    ERouteNames["consumer"] = "consumer";
    ERouteNames["sessions"] = "sessions";
})(ERouteNames = exports.ERouteNames || (exports.ERouteNames = {}));
var EAPINames;
(function (EAPINames) {
    EAPINames["integration_master"] = "api/v1/integrations/";
    EAPINames["enterprise"] = "enterprise/";
})(EAPINames = exports.EAPINames || (exports.EAPINames = {}));
var ETabNames;
(function (ETabNames) {
    ETabNames["customner"] = "customner";
    ETabNames["create_bot"] = "create_bot";
    ETabNames["knowledgeBase"] = "knowledgeBase";
    ETabNames["enterprise_profile"] = "enterprise_profile";
    ETabNames["architecture_tab"] = "architecture_tab";
    ETabNames["delete_bot"] = "delete_bot";
    ETabNames["architecture_items"] = "architecture_items";
    ETabNames["lower_panel_bot_detail"] = "lower_panel_bot_detail";
    ETabNames["lower_panel_tabs"] = "lower_panel_tabs";
    ETabNames["architecture_panel_pipeline"] = "architecture_panel";
    ETabNames["update_bot_button"] = "update_bot_button";
    ETabNames["bot_header_ellipsis"] = "bot_header_ellipsis";
    ETabNames["bot_header_reset"] = "bot_header_reset";
    ETabNames["integration_icons"] = "integration_icons";
    ETabNames["action_items"] = "fa_action_icons";
    ETabNames["forms"] = "forms";
    ETabNames["UI_SWITCH"] = "UI_SWITCH";
    ETabNames["report"] = "report";
    ETabNames["analytics2"] = "analytics2";
    ETabNames["pipeline"] = "pipeline";
    ETabNames["knowledgebase"] = "knowledgebase";
    ETabNames["botversion"] = "botversion";
    ETabNames["sessions"] = "sessions";
    ETabNames["consumers"] = "consumers";
    ETabNames["update_profile"] = "update_profile";
    ETabNames["testing"] = "testing";
})(ETabNames = exports.ETabNames || (exports.ETabNames = {}));
var ERoleName;
(function (ERoleName) {
    ERoleName["Admin"] = "Admin";
    ERoleName["Bot Developer"] = "Bot Developer";
    ERoleName["Analyst"] = "Analyst";
    ERoleName["Tester"] = "Tester";
})(ERoleName = exports.ERoleName || (exports.ERoleName = {}));
var EAPermissionsDynamic;
(function (EAPermissionsDynamic) {
    EAPermissionsDynamic["Get Bots"] = "Get Bots";
    EAPermissionsDynamic["Create Bots"] = "Create Bots";
    EAPermissionsDynamic["Update Bots"] = "Update Bots";
    EAPermissionsDynamic["Delete Bots"] = "Delete Bots";
    EAPermissionsDynamic["Get Bots Anonymous"] = "Get Bots Anonymous";
    EAPermissionsDynamic["Get Enterprise Knowledge base"] = "Get Enterprise Knowledge base";
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
// import {IGlobalState} from '../interfaces/global-state';
var ConstantsService = /** @class */ (function () {
    function ConstantsService(datePipe) {
        var _this = this;
        this.datePipe = datePipe;
        this.allPermissions = {};
        //   [
        //   'Get Bots',
        //   'Create Bots',
        //   'Update Bots',
        //   'Delete Bots',
        //   'Get Bots Anonymous',
        //   'Get Enterprise Knowledge base',
        //   'Create Enterprise Knowledge base',
        //   'Update Enterprise Knowledge base',
        //   'Delete Enterprise Knowledge base',
        //   'Create Bot Versioning',
        //   'GET Bot Versioning',
        //   'Update Bot Versioning',
        //   'Delete Bot Versioning',
        //   'Create Role',
        //   'Get Role',
        //   'Update Role',
        //   'Delete Role',
        //   'Create User',
        //   'Get User',
        //   'Update User',
        //   'Get Consumers',
        //   'Get Sessions',
        //   'Analytics',
        //   'Get Bot Testcases',
        //   'Create Bot Testcases',
        //   'Update Bot Testcases',
        //   'Delete Bot Testcases',
        //   'Get Integrations',
        //   'Get Pipeline Module',
        //   'Create Reports',
        //   'Get Reports',
        //   'Update Reports',
        //   'Delete Reports',
        //   'Get Report History',
        //   'Get Enterprise',
        //   'Update Enterprise',
        //   'Delete User',
        //   'Get Report Types',
        //   'Send API',
        //   'Get Messages',
        //   'Get Actions',
        //   'Close Room',
        //   'agent_close',
        //   'Anonymize Conversation',
        //   'Post dfRules Debug',
        //   'Post genRules Debug',
        //   'Post genTemplate Debug',
        //   'Post Workflow Debug',
        //   'Workflow Webhook',
        //   'Facebook Webhook',
        //   'Backward Compatible Message API',
        //   'Intelligence API Webhook',
        //   'Delete Consumer',
        //   'Create Decrypt Audit',
        //   'Anonymize Conversation',
        //   'erase consumer',
        //   'Exec Reports',
        //   'Download Reports',
        //   'Skype API',
        //   'Update Password',
        //   'Get Bot Knowledge base',
        //   'Create Bot Knowledge base',
        //   'Update Bot Knowledge base',
        //   'Delete Bot Knowledge base'
        // ];
        // export inteface IBackEndPermissionsToFrontEndMappingItem {
        //   [key: EAPermissionsDynamic]: {
        //   route: [],
        //   module: [],
        //   tab: [],//tab, hyperlink, button
        //   api: [],//tab, hyperlink, button
        // };
        this.permissionsDeniedMap = {
            'Admin': {
                route: [],
                module: [],
                tab: [],
                api: []
            },
            'Analyst': {
                route: [
                    ERouteNames.customner,
                    ERouteNames.enterprise_profile,
                    ERouteNames.report,
                    ERouteNames.create_report,
                ],
                module: [],
                tab: [
                    ETabNames.enterprise_profile,
                    ETabNames.customner,
                    ETabNames.architecture_tab,
                    ETabNames.bot_header_ellipsis,
                    ETabNames.knowledgeBase,
                    ETabNames.update_bot_button,
                    ETabNames.bot_header_reset,
                    ETabNames.architecture_items,
                    ETabNames.integration_icons,
                    ETabNames.forms,
                    ETabNames.action_items,
                    ETabNames.UI_SWITCH,
                    ETabNames.report,
                    // ETabNames.analytics2,
                    ETabNames.testing,
                    ETabNames.pipeline,
                    ETabNames.knowledgebase,
                    ETabNames.botversion,
                    // ETabNames.update_profile,
                    ETabNames.create_bot,
                ],
                api: [
                    EAPINames.integration_master,
                    EAPINames.enterprise,
                ]
            },
            'Bot Developer': {
                route: [
                    ERouteNames.enterprise_profile,
                ],
                module: [],
                tab: [
                    ETabNames.enterprise_profile,
                ],
                api: [EAPINames.enterprise]
            },
            'Tester': {
                route: [
                    ERouteNames.customner,
                    ERouteNames.enterprise_profile,
                    ERouteNames.report,
                ],
                module: [],
                tab: [
                    ETabNames.enterprise_profile,
                    ETabNames.customner,
                    ETabNames.create_bot,
                    ETabNames.architecture_tab,
                    ETabNames.delete_bot,
                    // ETabNames.lower_panel_bot_detail,
                    ETabNames.architecture_panel_pipeline,
                    ETabNames.bot_header_ellipsis,
                    ETabNames.knowledgeBase,
                    ETabNames.update_bot_button,
                    ETabNames.bot_header_reset,
                    ETabNames.consumers,
                    // ETabNames.integration_icons,
                    ETabNames.forms,
                    ETabNames.action_items,
                    ETabNames.UI_SWITCH,
                    ETabNames.report,
                    ETabNames.analytics2,
                ],
                api: [
                    EAPINames.integration_master,
                    EAPINames.enterprise,
                ]
            }
        };
        this.NEW_BOT_VERSION_TEMPLATE = {
            'bot_id': 0,
            'comment': '',
            'df_rules': '',
            'df_template': '',
            'generation_rules': '',
            'generation_templates': '',
            'id': -1,
            'workflow': '',
            'updated_fields': {
                'df_template': false,
                'df_rules': false,
                'generation_rules': false,
                'generation_template': false,
                'workflows': false
            },
            'forked_from': -1
        };
        this.BACKEND_URL = environment_prod_1.environment.url; //'https://dev.imibot.ai/';//'http://10.0.27.176:8000/';
        this.BACKEND_URL_LOGIN = "" + this.BACKEND_URL + 'api/v1/user/login/';
        this.BACKEND_URL_ENTERPRISE_USERS = "" + this.BACKEND_URL + 'users/enterprise/';
        this.BACKEND_USER_UPDATE_URL = "" + this.BACKEND_URL + 'user/'; //https://dev.imibot.ai/user/5a030aa9b050705bd0ca5a45
        this.BACKEND_USER_CODE_BASED_BOT_LIST = "" + this.BACKEND_URL + 'integrations'; //https://dev.imibot.ai/integrations
        this.BACKEND_USER_PIPELINE_BASED_BOT_LIST = "" + this.BACKEND_URL + 'api/v1/bot/'; //https://dev.imibot.ai/bots
        this.CHANNEL_LIST = [
            { name: 'all', displayName: 'All Channels' },
            { name: 'facebook', displayName: 'Facebook' },
            { name: 'web', displayName: 'WebChat' },
            { name: 'alexa', displayName: 'Alexa' }
        ];
        this.TIME_GRANULARITY_LIST = [
            { name: 'hour', displayName: 'Hour' },
            { name: 'day', displayName: 'Day' },
            { name: 'week', displayName: 'Week' },
            { name: 'month', displayName: 'Month' },
            { name: 'year', displayName: 'Year' }
        ];
        this.DATE_PICKER_CONFIG = Object.assign({}, {
            'containerClass': 'theme-dark-blue',
            'dateInputFormat': 'DD/MM/YYYY'
        });
        //localstorage keys
        this.LOCALSTORAGE_APP_STATE = 'LOCALSTORAGE_APP_STATE';
        this.LOCALSTORAGE_LAST_STATE_UPDATED = 'LOCALSTORAGE_LAST_STATE_UPDATED';
        //settings for smart table


        this.HANDSON_TABLE_BOT_TESTING_colHeaders = ['Message', 'Expected Template', 'Status', 'Generated Template', 'RoomId', 'TransactionId'];
        this.HANDSON_TABLE_BOT_TESTING_columns = [
            { data: 0, type: 'text' },
            { data: 1, type: 'text' },
            { data: 2, type: 'text', readOnly: true },
            { data: 3, type: 'text', readOnly: true },
            { data: 4, type: 'text', readOnly: true },
            { data: 5, type: 'text', readOnly: true },
        ];
        this.HANDSON_TABLE_KNOWLEDGE_BASE_SETTING = {
            cells: function (row, col) {
                /*To make first row highlighted*/
                /*https://docs.handsontable.com/5.0.2/demo-conditional-formatting.html*/
                var cellProperties = {};
                // var data = this.instance.getData();
                if (row === 0) {
                    cellProperties['renderer'] = function (instance, td, row, col, prop, value, cellProperties) {
                        Handsontable.renderers.TextRenderer.apply(this, arguments);
                        td.style.fontWeight = 'bold';
                    }; // uses function directly
                }
                return cellProperties;
            }
        };
        this.HANDSON_TABLE_KNOWLEDGE_BASE_colHeaders = ['', '', ''];
        this.HANDSON_TABLE_KNOWLEDGE_BASE_columns = [
        // {data: 0, type: 'text'},
        // {data: 1, type: 'text'},
        // {data: 2, type: 'text'},
        // {data: 3, type: 'text'},
        // {data: 4, type: 'text'},
        // {data: 5, type: 'text'}
        ];
        this.HIGHCHART_CHARTVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Session Handling'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Percentage'
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                shared: true
            },
            plotOptions: {
                column: {
                    stacking: 'percent'
                },
                series: {
                    pointStart: Date.UTC(2018, 6, 20),
                    pointInterval: 24 * 3600 * 1000
                }
            }
        };
        this.HIGHCHART_THEMEVALUE_ANALYTICS_USER_LOYALTY = {
            chart: {
                style: {
                    fontFamily: 'helvetica'
                }
            },
            colors: ['#5392ff', '#71cddd', '#34bc6e', '#95d13c', '#ffb000', '#fe8500', '#ff509e', '#9b82f3']
        };
        this.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE = {
            chart: {
                style: {
                    fontFamily: 'helvetica'
                }
            },
            colors: ['#5392ff', '#71cddd', '#34bc6e', '#95d13c', '#ffb000', '#fe8500', '#ff509e', '#9b82f3']
        };
        this.HIGHCHART_CHARTVALUE_ANALYTICS_PERFORMANCE_TEMPLATE_KEY_AND_FLOW_TRIGGERED = {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['Flow 1', 'Flow 2', 'Flow 3', 'Flow 4', 'Flow 5']
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                },
                stackLabels: {
                    enabled: false,
                    style: {
                        fontWeight: 'bold',
                        color: 'gray'
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>'
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            }
        };
        this.HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_TEMPLATE_KEY_AND_FLOW_TRIGGERED = {
            chart: {
                style: {
                    fontFamily: 'helvetica'
                }
            },
            colors: ['#5392ff', '#71cddd', '#34bc6e', '#95d13c', '#ffb000', '#fe8500', '#ff509e', '#9b82f3']
        };
        this.HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT = {
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            // xAxis: {
            //   type: 'datetime'
            // },
            yAxis: {
                title: {
                    text: '',
                    rotation: -90,
                    margin: 10,
                    style: {
                        fontWeight: 'bold'
                    }
                }
            },
            legend: {
                layout: 'horizontal',
                align: 'right',
                verticalAlign: 'bottom'
            },
            tooltip: {
                shared: true
            }
        };
        this.HIGHCHART_CHARTVALUE_USER_LOYALTY = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Stacked column chart'
            },
            xAxis: {
                categories: ['Apples1', 'Oranges', 'Pears', 'Grapes', 'Bananas']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total fruit consumption'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -30,
                verticalAlign: 'top',
                y: 25,
                floating: true,
                backgroundColor: 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                headerFormat: '<b>{point.x}</b><br/>',
                pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: 'white'
                    }
                }
            },
            series: [{
                    name: 'John',
                    data: [5, 3, 4, 7, 2]
                }]
        };
        this.integrationOptionListTemplate = {
            ccsp_details: {
                debug: {
                    debugurl: '',
                    enabled: false
                },
                imichat: {
                    'access-token': '',
                    domain: '',
                    enabled: false,
                    'service-key': ''
                }
            },
            channels: {
                alexa: {
                    enabled: false,
                    skillId: ''
                },
                facebook: {
                    enabled: false,
                    'facebook-token': '',
                    id: ''
                },
                skype: {
                    client_id: '',
                    client_secret: '',
                    'skype-page-name': '',
                    enabled: false
                },
                'viber': {
                    'enabled': false,
                    'bot_name': '',
                    'bot_auth_token': '',
                    'bot_avatar': ''
                },
                'web': {
                    'enabled': false,
                    'speech_model': '',
                    'speech_tts': '',
                    'speech_url': ''
                },
                'line': {
                    'enabled': false,
                    skillId: ''
                }
            },
            fulfillment_provider_details: {
                imiconnect: {
                    appId: '',
                    appSecret: '',
                    enabled: false,
                    serviceKey: '',
                    streamName: '',
                    send_via_connect: ''
                }
            }
        };
        this.app$.subscribe(function (value) {
            if (!value)
                return;
            _this.BACKEND_URL = (value && value.backendUrlRoot) || 'https://dev.imibot.ai/';
        });
        this.loggeduser$.subscribe(function (loggedUser) {
            if (loggedUser && loggedUser.user) {
                _this.loggedUser = loggedUser.user;
                _this.allowedPermissionIdsToCurrentRole = _this.loggedUser.role.permissions.actions;
            }
        });
    }
    ConstantsService.prototype.setPermissionsDeniedMap = function (allPermissions) {
        var _this = this;
        try {
            if (this.allowedPermissionIdsToCurrentRole.length === 0) { /*exception for admin*/
                this.forbiddenPermsDynamic = {};
                return;
            }
        }
        catch (e) {
            console.log(e);
        }
        /*initializing allPermissions*/
        allPermissions.forEach(function (perm) {
            _this.allPermissions[perm.id] = perm.name;
            _this.allPermissions[perm.name] = perm.id;
        });
        this.forbiddenPermsDynamic = this.allPermissions;
        this.allowedPermissionIdsToCurrentRole.forEach(function (currentPermId) {
            /*remove allowed permission from all permissions*/
            var permName = _this.allPermissions[currentPermId];
            delete _this.forbiddenPermsDynamic[currentPermId];
            delete _this.forbiddenPermsDynamic[permName];
        });
    };
    ConstantsService.prototype.getNewBotVersionTemplate = function (botId) {
        this.NEW_BOT_VERSION_TEMPLATE.bot_id = botId;
        return this.NEW_BOT_VERSION_TEMPLATE;
    };
    ConstantsService.prototype.isRouteAccessDenied = function (routeName) {
        var role = this.loggedUser.role.name;
        var deniedRoutes = this.permissionsDeniedMap[role].route;
        var isRouteAccessDenied = deniedRoutes.find(function (route) {
            return route === routeName;
        });
        return isRouteAccessDenied;
    };
    ConstantsService.prototype.isTabAccessDenied = function (tabName) {
        if (!tabName)
            return false;
        var role = this.loggedUser.role.name;
        var deniedTabs = this.permissionsDeniedMap[role].tab;
        var isTabAccessDenied = deniedTabs.find(function (route) {
            return route === tabName;
        });
        return !!isTabAccessDenied;
    };
    ConstantsService.prototype.isAccessDeniedDynamic = function (tabName) {
        if (!tabName || !this.forbiddenPermsDynamic)
            return false;
        // let role = this.loggedUser.role.name;
        // let deniedTabs = this.permissionsDeniedMap[role].tab;
        var isTabAccessDenied = Object.keys(this.forbiddenPermsDynamic).find(function (perm) {
            return perm === tabName;
        });
        return !!isTabAccessDenied;
    };
    ConstantsService.prototype.isApiAccessDenied = function (apiUrl) {
        if (!apiUrl)
            return false;
        var role = this.loggedUser.role.name;
        var deniedApi = this.permissionsDeniedMap[role].api;
        var isApiAccessDenied = deniedApi.find(function (route) {
            return apiUrl.includes(route);
        });
        var x = !!isApiAccessDenied;
        return x;
    };
    ConstantsService.prototype.getLoginUrl = function () {
        return this.BACKEND_URL + 'api/v1/user/login/';
    };
    ConstantsService.prototype.setLoggedUser = function (loggedUser) {
        this.loggedUser = loggedUser;
    };
    ConstantsService.prototype.getUserUpdateUrl = function (enterprise_UserId) {
        return this.BACKEND_URL + ("api/v1/user/" + enterprise_UserId + "/"); //{{url}}/user/{{Enterprise_UserId}}
    };
    ConstantsService.prototype.getEnterpriseUrl = function (enterpriseId) {
        // return this.BACKEND_URL + `api/v1/enterprise/${enterpriseId}/`;// + enterpriseId+'/'; //https://dev.imibot.ai/enterprise/59b0f043378feb000d7c9d13
        return this.BACKEND_URL + ("api/v1/enterprise/" + enterpriseId + "/"); // + enterpriseId+'/'; //https://dev.imibot.ai/enterprise/59b0f043378feb000d7c9d13
    };
    ConstantsService.prototype.stopTestUrl = function () {
        return this.BACKEND_URL + "api/v1/bottestcases/canceltesting/"; // https://dev.imibot.ai/api/v1/bottestcases/canceltesting/
    };
    ConstantsService.prototype.getEnterpriseUsersUrl = function () {
        return this.BACKEND_URL + 'api/v1/user/enterpriseusers/'; //https://dev.imibot.ai/api/v1/user/enterpriseusers/
    };
    ConstantsService.prototype.getBotListUrl = function () {
        // return this.BACKEND_USER_PIPELINE_BASED_BOT_LIST + 'api/v1/bot/';
        return this.BACKEND_URL + 'api/v1/bot/?limit=1000';
    };
    ConstantsService.prototype.getLogoutUrl = function () {
        // http://localhost:8000/api/v1/logout/;
        return this.BACKEND_URL + 'api/v1/logout/';
    };
    ConstantsService.prototype.getNSetChatPreviewBotUrl = function (bot_unique_name, enterprise_unique_name) {
        // http://localhost:8000/api/v1/logout/;
        return this.BACKEND_URL + ("api/v1/bot/preview/?bot_unique_name=" + bot_unique_name + "&enterprise_unique_name=" + enterprise_unique_name);
    };
    ConstantsService.prototype.getMasterIntegrationsList = function () {
        return this.BACKEND_URL + 'api/v1/integrations/';
    };
    // getCodebasedBotListUrl() {
    //   return this.BACKEND_USER_CODE_BASED_BOT_LIST;
    //   return this.BACKEND_URL + 'api/v1/integrations/';
    //
    // }
    ConstantsService.prototype.getOverViewInfoUrl = function () {
        return this.BACKEND_URL + 'analytics/overviewinfo/'; //https://dev.imibot.ai/analytics/overviewinfo;
    };
    ConstantsService.prototype.getUserAcquisitionUrl = function () {
        return this.BACKEND_URL + 'analytics/userAcquisition/'; //https://dev.imibot.ai/analytics/userAcquisition
    };
    ConstantsService.prototype.getAverageRoomTimeUrl = function () {
        return this.BACKEND_URL + 'analytics/averageRoomTime/'; //https://dev.imibot.ai/analytics/averageRoomTime
    };
    ConstantsService.prototype.getTotalFlowsUrl = function () {
        return this.BACKEND_URL + 'analytics/totalFlows/'; //https://dev.imibot.ai/analytics/totalFlows
    };
    ConstantsService.prototype.getTotalSessionsUrl = function () {
        return this.BACKEND_URL + 'analytics/totalSessions/'; //https://dev.imibot.ai/analytics/totalSessions
    };
    ConstantsService.prototype.getSessionsByIdUrl = function (id) {
        return this.BACKEND_URL + ("api/v1/room/" + id + "/"); //https://dev.imibot.ai/api/v1/room/9913/
    };
    ConstantsService.prototype.getSessionsMessageUrl = function (room_id) {
        return this.BACKEND_URL + ("api/v1/message/?room_id=" + room_id + "&limit=1000"); //https://dev.imibot.ai/api/v1/message/?room_id=60
    };
    ConstantsService.prototype.getTotalMessagesUrl = function () {
        return this.BACKEND_URL + 'analytics/totalMessages/'; //https://dev.imibot.ai/analytics/totalMessages
    };
    ConstantsService.prototype.getMessagesByTemplateKeyUrl = function () {
        return this.BACKEND_URL + 'analytics/messagesByTemplateKey/'; //https://dev.imibot.ai/analytics/messagesByTemplateKey
    };
    /*analytics channel urls below*/
    ConstantsService.prototype.getChannelWiseUsersUrl = function () {
        return this.BACKEND_URL + 'analytics/channelWiseUsers/'; //https://dev.imibot.ai/analytics/channelWiseUsers
    };
    ConstantsService.prototype.getChannelWiseSessionsUrl = function () {
        return this.BACKEND_URL + 'analytics/channelWiseSessions/'; //https://dev.imibot.ai/analytics/channelWiseSessions
    };
    ConstantsService.prototype.getChannelWiseFlowsPerSessionUrl = function () {
        return this.BACKEND_URL + 'analytics/channelWiseFlowsPerSession/'; //https://dev.imibot.ai/analytics/channelWiseFlowsPerSession
    };
    ConstantsService.prototype.getChannelWiseAverageSessionTimeUrl = function () {
        return this.BACKEND_URL + 'analytics/channelWiseAverageSessionTime/'; //https://dev.imibot.ai/analytics/channelWiseAverageSessionTime
    };
    ConstantsService.prototype.getReportUrl = function (limit, offset) {
        if (limit === void 0) { limit = 1; }
        if (offset === void 0) { offset = 10; }
        return this.BACKEND_URL + ("api/v1/reports?limit=" + limit + "&offset=" + offset); //{{url}}/reports?limit=1&offset=10
    };
    ConstantsService.prototype.getReportHistoryUrl = function (limit, offset) {
        if (limit === void 0) { limit = 1; }
        if (offset === void 0) { offset = 10; }
        return this.BACKEND_URL + ("api/v1/reporthistory?limit=" + limit + "&offset=" + offset); //https://dev.imibot.ai/reporthistory?limit=1&offset=10
    };
    ConstantsService.prototype.getReportDeleteUrl = function (report_id) {
        return this.BACKEND_URL + ("api/v1/reports/" + report_id + "/"); //http://dev.imibot.ai/api/v1/reports/1/
    };
    ConstantsService.prototype.getDownloadReportHistoryByIdUrl = function (id) {
        return this.BACKEND_URL + ("api/v1/reporthistory/downloadreports/?roomId=" + id); //http://localhost:8000/api/v1/reporthistory/downloadreports/?id=10
    };
    ConstantsService.prototype.geReportTypesUrl = function () {
        return this.BACKEND_URL + 'api/v1/reporttypes/'; // http://dev.imibot.ai/api/v1/reporttypes
    };
    ConstantsService.prototype.getReportsEditInfo = function (_id) {
        return this.BACKEND_URL + 'api/v1/reports/' + _id + '/'; //  https://dev.imibot.ai/reports/5b335b127c15580059c13fc5
    };
    ConstantsService.prototype.getSaveReportsEditInfo = function (_id) {
        return this.BACKEND_URL + ("api/v1/reports/" + _id); //  http://dev.imibot.ai/api/v1/reports/1/
    };
    ConstantsService.prototype.getCreateReportUrl = function () {
        return this.BACKEND_URL + "api/v1/reports/"; //  http://dev.imibot.ai/api/v1/reports
    };
    ConstantsService.prototype.getAllVersionsByBotId = function () {
        return this.BACKEND_URL + 'api/v1/botversioning/?limit=1000'; //"http://localhost:8000/api/v1/botversioning"
    };
    ConstantsService.prototype.getSaveVersionByBotId = function (id) {
        return this.BACKEND_URL + ("api/v1/botversioning/" + id); //https://dev.imibot.ai/api/v1/botversioning/9/
    };
    ConstantsService.prototype.getCreateNewVersionByBotId = function (id) {
        return this.BACKEND_URL + "api/v1/botversioning/"; //https://dev.imibot.ai/api/v1/botversioning/9/
    };
    ConstantsService.prototype.getCreateNewBot = function () {
        return this.BACKEND_URL + "api/v1/bot/"; //https://dev.imibot.ai/api/v1/bot/
    };
    ConstantsService.prototype.getBotTestingUrl = function () {
        return this.BACKEND_URL + 'api/v1/bottestcases/'; //https://dev.imibot.ai/api/v1/bottestcases/
    };
    ConstantsService.prototype.getBotConsumerUrl = function (limit, offset) {
        return this.BACKEND_URL + ("api/v1/consumer/?limit=" + limit + "&offset=" + offset); //https://localhost:8000/api/v1/consumer/?limit=1&offset=0
    };
    ConstantsService.prototype.getBotConsumerByIdUrl = function (id) {
        return this.BACKEND_URL + ("api/v1/consumer/" + id); //https://dev.imibot.ai/api/v1/consumer/2320/
    };
    ConstantsService.prototype.getAllActionsUrl = function () {
        return this.BACKEND_URL + "api/v1/actions/?limit=100"; //https://dev.imibot.ai/api/v1/actions/
    };
    ConstantsService.prototype.getDeleteBotUrl = function (id) {
        return this.BACKEND_URL + ("api/v1/bot/" + id); //http://localhost:8000/api/v1/bot/66/
    };
    ConstantsService.prototype.getDecryptUrl = function () {
        return this.BACKEND_URL + "api/v1/decrypt_audit/"; ///api/v1/decrypt_audit/
    };
    ConstantsService.prototype.getSpecificBotByBotTokenUrl = function () {
        return this.BACKEND_URL + "api/v1/bot/?limit=1000"; //https://dev.imibot.ai/api/v1/bot/
    };
    ConstantsService.prototype.getBotSessionsUrl = function (limit, offset) {
        return this.BACKEND_URL + ("api/v1/room/?limit=" + limit + "&offset=" + offset + "&order_by=-roomId"); //https://dev.imibot.ai/aip/v1/room
    };
    ConstantsService.prototype.getStartNewChatLoginUrl = function () {
        return this.BACKEND_URL + 'api/v1/webhook/web/'; //'send';
    };
    ConstantsService.prototype.getAllBotVersionByBotIdUrl = function (bot_id) {
        return this.BACKEND_URL + ("api/v1/botversioning/?bot_id=" + bot_id); //http://localhost:8000/api/v1/botversioning/?bot_id=2
    };
    ConstantsService.prototype.getCustomBotNER = function (limit, offset) {
        return this.BACKEND_URL + ("api/v1/customner/?limit=" + limit + "&offset=" + offset); //https://dev.imibot.ai/api/v1/customner/
    };
    ConstantsService.prototype.updateOrDeleteCustomBotNER = function (custom_ner_id) {
        return this.BACKEND_URL + ("api/v1/customner/" + custom_ner_id); //https://dev.imibot.ai/api/v1/customner/13/
    };
    ConstantsService.prototype.updateBotUrl = function (bot_id) {
        return this.BACKEND_URL + ("api/v1/bot/" + bot_id); //https://dev.imibot.ai/api/v1/bot/13/
    };
    ConstantsService.prototype.createNewCustomBotNER = function () {
        return this.BACKEND_URL + "api/v1/customner/"; //https://dev.imibot.ai/api/v1/customner/
    };
    /*Pipeline*/
    ConstantsService.prototype.getAllPipelineModuleUrl = function () {
        return this.BACKEND_URL + "api/v1/pipelinemodule/?limit=200&offset=0"; //https://dev.imibot.ai/api/v1/pipelinemodule/
    };
    /*Enterprise NER*/
    ConstantsService.prototype.getEnterpriseNer = function (limit, offset) {
        if (limit === void 0) { limit = 10; }
        if (offset === void 0) { offset = 0; }
        return this.BACKEND_URL + ("api/v1/customner/?type=enterprise&limit=" + limit + "&offset=" + offset); //https://dev.imibot.ai/api/v1/customner/
    };
    ConstantsService.prototype.getEnterpriseNerById = function (id) {
        return this.BACKEND_URL + ("api/v1/customner/?type=enterprise&roomId=" + id); //https://dev.imibot.ai/api/v1/customner/
    };
    ConstantsService.prototype.getCustomNerById = function (id) {
        return this.BACKEND_URL + ("api/v1/customner/?roomId=" + id); //dev.imibot.ai/api/v1/customner/?roomId=13
    };
    ConstantsService.prototype.getAnalyticsUrl = function () {
        return this.BACKEND_URL + 'api/v1/analytics/'; //https://dev.imibot.ai/api/v1/analytics/
    };
    ConstantsService.prototype.updateOrDeleteEnterpriseNer = function (id) {
        return this.BACKEND_URL + ("api/v1/customner/" + id); //https://dev.imibot.ai/api/v1/customner/12/
    };
    ConstantsService.prototype.createEnterpriseNer = function () {
    };
    ConstantsService.prototype.updatePassword = function () {
        return this.BACKEND_URL + 'api/v1/user/updatepassword/'; //https:dev.imibot.ai/api/v1/user/updatepassword///
    };
    ConstantsService.prototype.updateBotSerializer = function (bot) {
        var clone = __assign({}, bot);
        var not_keys = [
            'bot_access_token',
            'created_at',
            'created_by',
            'enterprise_id',
            'id',
            'store_bot_versions',
            'updated_at',
            'updated_by'
        ];
        not_keys.forEach(function (key) {
            delete clone[key];
        });
        return clone;
    };
    __decorate([
        store_1.Select()
    ], ConstantsService.prototype, "app$");
    __decorate([
        store_1.Select()
    ], ConstantsService.prototype, "loggeduser$");
    ConstantsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ConstantsService);
    return ConstantsService;
}());
exports.ConstantsService = ConstantsService;
