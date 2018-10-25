import {Injectable} from '@angular/core';
import {IAppState} from './ngxs/app.state';
import {IUser} from './core/interfaces/user';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IBot} from './core/interfaces/IBot';
import {IIntegrationOption} from '../interfaces/integration-option';
import {DatePipe} from '@angular/common';
import {environment} from '../environments/environment.prod';
import {IAuthState} from './auth/ngxs/auth.state';
import {IProfilePermission} from '../interfaces/profile-action-permission';

declare var Handsontable: any;


export enum EAPINames {
  integration_master = 'api/v1/integrations/',
  enterprise = 'enterprise/',
}


export enum ERoleName {
  Admin = 'Admin',
  'Bot Developer' = 'Bot Developer',
  Analyst = 'Analyst',
  Tester = 'Tester',
}

export enum EAllActions {
  'Get Bots' = 'Get Bots',
  'Create Bots' = 'Create Bots',
  'Update Bots' = 'Update Bots',
  'Delete Bots' = 'Delete Bots',
  'Get Bots Anonymous' = 'Get Bots Anonymous',
  'Get Enterprise Knowledge base' = 'Get Enterprise Knowledge base',//Get Enterprise Knowledge base
  'Create Enterprise Knowledge base' = 'Create Enterprise Knowledge base',
  'Update Enterprise Knowledge base' = 'Update Enterprise Knowledge base',
  'Delete Enterprise Knowledge base' = 'Delete Enterprise Knowledge base',
  'Create Bot Versioning' = 'Create Bot Versioning',
  'GET Bot Versioning' = 'GET Bot Versioning',
  'Update Bot Versioning' = 'Update Bot Versioning',
  'Delete Bot Versioning' = 'Delete Bot Versioning',
  'Create Role' = 'Create Role',
  'Get Role' = 'Get Role',
  'Update Role' = 'Update Role',
  'Delete Role' = 'Delete Role',
  'Create User' = 'Create User',
  'Get User' = 'Get User',
  'Update User' = 'Update User',
  'Get Consumers' = 'Get Consumers',
  'Get Sessions' = 'Get Sessions',
  'Analytics' = 'Analytics',
  'Get Bot Testcases' = 'Get Bot Testcases',
  'Create Bot Testcases' = 'Create Bot Testcases',
  'Update Bot Testcases' = 'Update Bot Testcases',
  'Delete Bot Testcases' = 'Delete Bot Testcases',
  'Get Integrations' = 'Get Integrations',
  'Get Pipeline Module' = 'Get Pipeline Module',
  'Create Reports' = 'Create Reports',
  'Get Reports' = 'Get Reports',
  'Update Reports' = 'Update Reports',
  'Delete Reports' = 'Delete Reports',
  'Get Report History' = 'Get Report History',
  'Get Enterprise' = 'Get Enterprise',
  'Update Enterprise' = 'Update Enterprise',
  'Delete User' = 'Delete User',
  'Get Report Types' = 'Get Report Types',
  'Send API' = 'Send API',
  'Get Messages' = 'Get Messages',
  'Get Actions' = 'Get Actions',
  'Close Room' = 'Close Room',
  'agent_close' = 'agent_close',
  'Anonymize Conversation' = 'Anonymize Conversation',
  'Post dfRules Debug' = 'Post dfRules Debug',
  'Post genRules Debug' = 'Post genRules Debug',
  'Post genTemplate Debug' = 'Post genTemplate Debug',
  'Post Workflow Debug' = 'Post Workflow Debug',
  'Workflow Webhook' = 'Workflow Webhook',
  'Facebook Webhook' = 'Facebook Webhook',
  'Backward Compatible Message API' = 'Backward Compatible Message API',
  'Intelligence API Webhook' = 'Intelligence API Webhook',
  'Delete Consumer' = 'Delete Consumer',
  'Create Decrypt Audit' = 'Create Decrypt Audit',
  'erase consumer' = 'erase consumer',
  'Exec Reports' = 'Exec Reports',
  'Download Reports' = 'Download Reports',
  'Skype API' = 'Skype API',
  'Update Password' = 'Update Password',
  'Get Bot Knowledge base' = 'Get Bot Knowledge base',
  'Create Bot Knowledge base' = 'Create Bot Knowledge base',
  'Update Bot Knowledge base' = 'Update Bot Knowledge base',
  'Delete Bot Knowledge base' = 'Delete Bot Knowledge base'
}

export const ERouteNames = EAllActions;

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  forbiddenPermsDynamic: { id?: string, name?: number };

  allowedPermissionIdsToCurrentRole: number[];

  constructor(private datePipe: DatePipe) {
    this.app$.subscribe((value) => {
      if (!value) return;
      this.BACKEND_URL = (value && value.backendUrlRoot) || 'https://dev.imibot.ai/';
    });
    this.loggeduser$.subscribe((loggedUser: IAuthState) => {
      if (loggedUser && loggedUser.user) {
        this.loggedUser = loggedUser.user;
        this.allowedPermissionIdsToCurrentRole = this.loggedUser.role.permissions.actions;
      }
    });
  }

  NEW_BOT_VERSION_TEMPLATE = {
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
    'forked_from': -1,
  };

  getNewBotVersionTemplate(botId: number) {
    this.NEW_BOT_VERSION_TEMPLATE.bot_id = botId;
    return this.NEW_BOT_VERSION_TEMPLATE;
  }

  static state: any;
  loggedUser: IUser;
  @Select() app$: Observable<IAppState>;
  @Select() loggeduser$: Observable<{ user: IUser }>;


  isRouteAccessDenied(routeName: string) {
    // let role = this.loggedUser.role.name;
    // let deniedRoutes = this.permissionsDeniedMap[role].route;
    // let isRouteAccessDenied = deniedRoutes.find((route) => {
    //   return route === routeName;
    // });
    return false;// isRouteAccessDenied;
  }

  // isTabAccessDenied(tabName: string) {
  //   if (!tabName) return false;
  //   let role = this.loggedUser.role.name;
  //   let deniedTabs = this.permissionsDeniedMap[role].tab;
  //   let isTabAccessDenied = deniedTabs.find((route) => {
  //     return route === tabName;
  //   });
  //   return !!isTabAccessDenied;
  // }

  isAccessDeniedDynamic(tabName: EAllActions) {
    if (!tabName || !this.forbiddenPermsDynamic) return false;
    // let role = this.loggedUser.role.name;
    // let deniedTabs = this.permissionsDeniedMap[role].tab;
    let isTabAccessDenied = Object.keys(this.forbiddenPermsDynamic).find((perm) => {
      return perm === tabName;
    });
    return !!isTabAccessDenied;
  }

  isApiAccessDenied(apiUrl: string) {
    return false;
    // if (!apiUrl) return false;
    // let role = this.loggedUser.role.name;
    // let deniedApi = this.permissionsDeniedMap[role].api;
    // let isApiAccessDenied = deniedApi.find((route) => {
    //   return apiUrl.includes(route);
    // });
    // let x = !!isApiAccessDenied;
    // return x;
  }

  //
  public BACKEND_URL;// = environment.url;//'https://dev.imibot.ai/';//'http://10.0.27.176:8000/';
  public BACKEND_URL_LOGIN = `${this.BACKEND_URL}` + 'api/v1/user/login/';
  private BACKEND_URL_ENTERPRISE_USERS = `${this.BACKEND_URL}` + 'users/enterprise/';
  private BACKEND_USER_UPDATE_URL = `${this.BACKEND_URL}` + 'user/';//https://dev.imibot.ai/user/5a030aa9b050705bd0ca5a45
  private BACKEND_USER_CODE_BASED_BOT_LIST = `${this.BACKEND_URL}` + 'integrations';//https://dev.imibot.ai/integrations
  public BACKEND_USER_PIPELINE_BASED_BOT_LIST = `${this.BACKEND_URL}` + 'api/v1/bot/';//https://dev.imibot.ai/bots

  public readonly CHANNEL_LIST = [
    {name: 'all', displayName: 'All Channels'},
    {name: 'facebook', displayName: 'Facebook'},
    {name: 'web', displayName: 'WebChat'},
    {name: 'alexa', displayName: 'Alexa'}];

  public readonly TIME_GRANULARITY_LIST = [
    {name: 'hour', displayName: 'Hour'},
    {name: 'day', displayName: 'Day'},
    {name: 'week', displayName: 'Week'},
    {name: 'month', displayName: 'Month'},
    {name: 'year', displayName: 'Year'}
  ];

  public readonly DATE_PICKER_CONFIG = Object.assign({}, {
    'containerClass': 'theme-dark-blue',
    'dateInputFormat': 'DD/MM/YYYY',
  });


  getLoginUrl() {
    return this.BACKEND_URL + 'api/v1/user/login/';
  }
  sendEmailUrl() {
    return this.BACKEND_URL + 'api/v1/user/resetpasswordurl/';
  }
  resetPasswordUrl(){
    return this.BACKEND_URL + 'api/v1/user/resetpassword/';
  }
  setLoggedUser(loggedUser: IUser) {
    this.loggedUser = loggedUser;
  }

  getSelectedVersionTemplate(botId) {
    return {
      'bot_id' : botId,
      'comment'  : "",
      'created_at'  : "",
      'df_rules'  : "",
      'df_template'  : "#####DF Template Goes here####",
      'generation_rules'  : "",
      'generation_templates'  : "",
      'id' : -1,
      'resource_uri'  : "",
      'updated_at'  : "",
      'version' : null,
      'workflow'  : "",
      'updated_fields' : {
        'df_template' : false,
        'df_rules' : false,
        'generation_rules' : false,
        'generation_template' : false,
        'workflows' : false
      },
      'changed_fields' : {
        'df_template' : false,
        'df_rules' : false,
        'generation_rules' : false,
        'generation_template' : false,
        'workflows' : false
      },
      'forked_from' : null,
    };
  }

  getUserUpdateUrl(enterprise_UserId: number) {
    return this.BACKEND_URL + `api/v1/user/${enterprise_UserId}/`;//{{url}}/user/{{Enterprise_UserId}}
  }

  getEnterpriseUrl(enterpriseId: number) {
    // return this.BACKEND_URL + `api/v1/enterprise/${enterpriseId}/`;// + enterpriseId+'/'; //https://dev.imibot.ai/enterprise/59b0f043378feb000d7c9d13
    return this.BACKEND_URL + `api/v1/enterprise/${enterpriseId}/`;// + enterpriseId+'/'; //https://dev.imibot.ai/enterprise/59b0f043378feb000d7c9d13
  }

  stopTestUrl() {
    return this.BACKEND_URL + `api/v1/bottestcases/canceltesting/`;// https://dev.imibot.ai/api/v1/bottestcases/canceltesting/

  }

  getEnterpriseUsersUrl() {
    return this.BACKEND_URL + 'api/v1/user/enterpriseusers/'; //https://dev.imibot.ai/api/v1/user/enterpriseusers/
  }

  getBotListUrl() {
    // return this.BACKEND_USER_PIPELINE_BASED_BOT_LIST + 'api/v1/bot/';
    return this.BACKEND_URL + 'api/v1/bot/?limit=1000';
  }

  getLogoutUrl() {
    // http://localhost:8000/api/v1/logout/;
    return this.BACKEND_URL + 'api/v1/logout/';
  }

  getNSetChatPreviewBotUrl(bot_unique_name, enterprise_unique_name) {
    // http://localhost:8000/api/v1/logout/;
    return this.BACKEND_URL + `api/v1/bot/preview/?bot_unique_name=${bot_unique_name}&enterprise_unique_name=${enterprise_unique_name}`;
  }

  getMasterIntegrationsList() {
    return this.BACKEND_URL + 'api/v1/integrations/';
  }

  // getCodebasedBotListUrl() {
  //   return this.BACKEND_USER_CODE_BASED_BOT_LIST;
  //   return this.BACKEND_URL + 'api/v1/integrations/';
  //
  // }

  getOverViewInfoUrl() {
    return this.BACKEND_URL + 'analytics/overviewinfo/'; //https://dev.imibot.ai/analytics/overviewinfo;
  }

  getUserAcquisitionUrl() {
    return this.BACKEND_URL + 'analytics/userAcquisition/'; //https://dev.imibot.ai/analytics/userAcquisition
  }

  getAverageRoomTimeUrl() {
    return this.BACKEND_URL + 'analytics/averageRoomTime/'; //https://dev.imibot.ai/analytics/averageRoomTime
  }

  getTotalFlowsUrl() {
    return this.BACKEND_URL + 'analytics/totalFlows/'; //https://dev.imibot.ai/analytics/totalFlows
  }

  getTotalSessionsUrl() {
    return this.BACKEND_URL + 'analytics/totalSessions/'; //https://dev.imibot.ai/analytics/totalSessions
  }

  getSessionsByIdUrl(id) {
    return this.BACKEND_URL + `api/v1/room/${id}/`; //https://dev.imibot.ai/api/v1/room/9913/
  }

  getSessionsMessageUrl(room_id: number) {
    return this.BACKEND_URL + `api/v1/message/?room_id=${room_id}&limit=1000`; //https://dev.imibot.ai/api/v1/message/?room_id=60
  }

  getTotalMessagesUrl() {
    return this.BACKEND_URL + 'analytics/totalMessages/'; //https://dev.imibot.ai/analytics/totalMessages
  }

  getMessagesByTemplateKeyUrl() {
    return this.BACKEND_URL + 'analytics/messagesByTemplateKey/'; //https://dev.imibot.ai/analytics/messagesByTemplateKey
  }

  /*analytics channel urls below*/
  getChannelWiseUsersUrl() {
    return this.BACKEND_URL + 'analytics/channelWiseUsers/'; //https://dev.imibot.ai/analytics/channelWiseUsers
  }

  getChannelWiseSessionsUrl() {
    return this.BACKEND_URL + 'analytics/channelWiseSessions/'; //https://dev.imibot.ai/analytics/channelWiseSessions
  }

  getChannelWiseFlowsPerSessionUrl() {
    return this.BACKEND_URL + 'analytics/channelWiseFlowsPerSession/'; //https://dev.imibot.ai/analytics/channelWiseFlowsPerSession
  }

  getChannelWiseAverageSessionTimeUrl() {
    return this.BACKEND_URL + 'analytics/channelWiseAverageSessionTime/'; //https://dev.imibot.ai/analytics/channelWiseAverageSessionTime
  }

  getReportUrl(limit = 1, offset = 10) {//limit: number, offset: number
    return this.BACKEND_URL + `api/v1/reports?limit=${limit}&offset=${offset}`; //{{url}}/reports?limit=1&offset=10
  }

  getReportHistoryUrl(limit = 1, offset = 10) {
    return this.BACKEND_URL + `api/v1/reporthistory?limit=${limit}&offset=${offset}`; //https://dev.imibot.ai/reporthistory?limit=1&offset=10
  }

  getReportDeleteUrl(report_id: number) {
    return this.BACKEND_URL + `api/v1/reports/${report_id}/`; //http://dev.imibot.ai/api/v1/reports/1/
  }

  getDownloadReportHistoryByIdUrl(id: number) {
    return this.BACKEND_URL + `api/v1/reporthistory/downloadreports/?id=${id}`; //http://localhost:8000/api/v1/reporthistory/downloadreports/?id=10
  }

  geReportTypesUrl() {
    return this.BACKEND_URL + 'api/v1/reporttypes/'; // http://dev.imibot.ai/api/v1/reporttypes
  }

  getReportsEditInfo(_id) {
    return this.BACKEND_URL + 'api/v1/reports/' + _id + '/'; //  https://dev.imibot.ai/reports/5b335b127c15580059c13fc5
  }

  getSaveReportsEditInfo(_id) {
    return this.BACKEND_URL + `api/v1/reports/${_id}`; //  http://dev.imibot.ai/api/v1/reports/1/
  }


  getCreateReportUrl() {
    return this.BACKEND_URL + `api/v1/reports/`; //  http://dev.imibot.ai/api/v1/reports
  }


  getAllVersionsByBotId() {
    return this.BACKEND_URL + 'api/v1/botversioning/?limit=1000'; //"http://localhost:8000/api/v1/botversioning"
  }

  getSaveVersionByBotId(id) {
    return this.BACKEND_URL + `api/v1/botversioning/${id}`; //https://dev.imibot.ai/api/v1/botversioning/9/
  }

  getCreateNewVersionByBotId(id) {
    return this.BACKEND_URL + `api/v1/botversioning/`; //https://dev.imibot.ai/api/v1/botversioning/9/
  }

  getCreateNewBot() {
    return this.BACKEND_URL + `api/v1/bot/`; //https://dev.imibot.ai/api/v1/bot/
  }


  getBotTestingUrl() {
    return this.BACKEND_URL + 'api/v1/bottestcases/'; //https://dev.imibot.ai/api/v1/bottestcases/
  }

  getBotConsumerUrl(limit: number, offset: number) {
    return this.BACKEND_URL + `api/v1/consumer/?limit=${limit}&offset=${offset}&order_by=-id`; //https://localhost:8000/api/v1/consumer/?limit=1&offset=0
  }

  getBotConsumerByIdUrl(id: number) {
    return this.BACKEND_URL + `api/v1/consumer/${id}`; //https://dev.imibot.ai/api/v1/consumer/2320/
  }

  getAllActionsUrl() {
    return this.BACKEND_URL + `api/v1/actions/?limit=100`; //https://dev.imibot.ai/api/v1/actions/
  }

  getDeleteBotUrl(id: number) {
    return this.BACKEND_URL + `api/v1/bot/${id}`; //http://localhost:8000/api/v1/bot/66/
  }

  getDecryptUrl() {
    return this.BACKEND_URL + `api/v1/decrypt_audit/`; ///api/v1/decrypt_audit/
  }

  getSpecificBotByBotTokenUrl() {
    return this.BACKEND_URL + `api/v1/bot/?limit=1000`; //https://dev.imibot.ai/api/v1/bot/
  }

  getBotSessionsUrl(limit: number, offset: number) {
    return this.BACKEND_URL + `api/v1/room/?limit=${limit}&offset=${offset}&order_by=-id`; //https://dev.imibot.ai/aip/v1/room
  }

  getStartNewChatLoginUrl() {
    return this.BACKEND_URL + 'api/v1/webhook/web/';//'send';
  }

  getAllBotVersionByBotIdUrl(bot_id) {
    return this.BACKEND_URL + `api/v1/botversioning/?bot_id=${bot_id}`; //http://localhost:8000/api/v1/botversioning/?bot_id=2
  }

  getCustomBotNER(limit, offset) {
    return this.BACKEND_URL + `api/v1/customner/?limit=${limit}&offset=${offset}`; //https://dev.imibot.ai/api/v1/customner/
  }

  updateOrDeleteCustomBotNER(custom_ner_id) {
    return this.BACKEND_URL + `api/v1/customner/${custom_ner_id}`; //https://dev.imibot.ai/api/v1/customner/13/
  }

  updateBotUrl(bot_id: number) {
    return this.BACKEND_URL + `api/v1/bot/${bot_id}`;//https://dev.imibot.ai/api/v1/bot/13/
  }

  createNewCustomBotNER() {
    return this.BACKEND_URL + `api/v1/customner/`; //https://dev.imibot.ai/api/v1/customner/
  }

  /*Pipeline*/
  getAllPipelineModuleUrl() {
    return this.BACKEND_URL + `api/v1/pipelinemodule/?limit=200&offset=0`; //https://dev.imibot.ai/api/v1/pipelinemodule/
  }

  /*Enterprise NER*/
  getEnterpriseNer(limit: number = 10, offset: number = 0) {
    return this.BACKEND_URL + `api/v1/customner/?type=enterprise&limit=${limit}&offset=${offset}`; //https://dev.imibot.ai/api/v1/customner/
  }

  getEnterpriseNerById(id) {
    return this.BACKEND_URL + `api/v1/customner/?type=enterprise&id=${id}`; //https://dev.imibot.ai/api/v1/customner/
  }

  getCustomNerById(id) {
    return this.BACKEND_URL + `api/v1/customner/?id=${id}`; //dev.imibot.ai/api/v1/customner/?id=13
  }

  getAnalyticsUrl() {
    return this.BACKEND_URL + 'api/v1/analytics/';//https://dev.imibot.ai/api/v1/analytics/
  }

  updateOrDeleteEnterpriseNer(id) {/*TODO: is it enterprise id??*/
    return this.BACKEND_URL + `api/v1/customner/${id}`; //https://dev.imibot.ai/api/v1/customner/12/
  }

  createEnterpriseNer() {
  }

  updatePassword() {
    return this.BACKEND_URL + 'api/v1/user/updatepassword/'; //https:dev.imibot.ai/api/v1/user/updatepassword///
  }

  updateBotSerializer(bot: IBot) {
    let clone = {...bot};
    let not_keys = [
      'bot_access_token',
      'created_at',
      'created_by',
      'enterprise_id',
      'id',
      'store_bot_versions',
      'updated_at',
      'updated_by'
    ];
    not_keys.forEach((key) => {
      delete clone[key];
    });
    return clone;
  }


  //localstorage keys
  LOCALSTORAGE_APP_STATE: string = 'LOCALSTORAGE_APP_STATE';
  LOCALSTORAGE_LAST_STATE_UPDATED: string = 'LOCALSTORAGE_LAST_STATE_UPDATED';


  //settings for smart table
  readonly SMART_TABLE_CONSUMER_SETTING = {
    columns: {
      id: {//
        title: 'ID',
        width: '120px',
        /*
        https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/filter/advanced-example-filters.component.ts#L69-L79
        filter: {
          type: 'list',
          config: {
            selectText: 'Select...',
            list: [
              { value: 'Glenna Reichert', title: 'Glenna Reichert' },
              { value: 'Kurtis Weissnat', title: 'Kurtis Weissnat' },
              { value: 'Chelsey Dietrich', title: 'Chelsey Dietrich' },
            ],
          },
        },
        */
      },
      name: {//
        title: 'Name',
        filter: false
      },
      phone: {
        title: 'Phone',
        filter: false
      },
      facebook_id: {//
        title: 'Facebook ID',
        width: '120px',
        filter: false
      },
      skype_id: {//
        title: 'Skype ID',
        width: '120px',
        filter: false
      },
      uid: {
        title: 'UID',
        width: '120px',
        filter: false
      },
      email: {//
        title: 'Email',
        filter: false
      },
      updated_at: {//
        title: 'Updated At',
        width: '150px',
        filter: false,
        valuePrepareFunction: (date) => {

          // var raw = new Date(date);
          var formatted = new Date(date).toJSON().slice(0, 10).split('-').reverse().join('/'); //this.datePipe.transform(raw, 'd/m/yy');
          return formatted;
        }
      },

    },
    // hideSubHeader: true
    actions: {
      edit: false,
      add: false,
      delete: false,
      position: 'right',
      custom: [
        {name: 'decrypt', title: `<i class="fa fa-lock text-dark"></i>`}
      ],
      width: '150px',
    },
    rowClassFunction: (row) => {
      if (row.data.data_encrypted === false) {
        return 'hightlight-decrypted';
        ;
      }
      return '';
    }
  };

  readonly SMART_TABLE_SESSIONS_SETTING = {

    columns: {
      id: {
        title: 'Room ID',
        width: '150px'
      },
      consumer_id: {
        title: 'Consumer ID',
        width: '150px'
      },
      total_message_count: {
        title: 'Messages',
        width: '150px'
      },
      updated_at: {
        title: 'Updated At',
        valuePrepareFunction: (date) => {
          var raw = new Date(date);
          var formatted = this.datePipe.transform(raw, 'medium');
          return formatted;
        }
      },
      sendtoagent: {
        title: 'Sent to Agent'
      }

    },
    // hideSubHeader: true
    // actions: {
    //   add: true,
    //   edit: true,
    //   delete: false
    // },
    actions: {
      edit: false,
      add: false,
      delete: false,
      position: 'right',
      custom: [
        {name: 'download', title: `<i  class="fa fa-download pr-2 text-dark"></i>`},
        {name: 'decrypt', title: `<i class="fa fa-lock text-dark"></i>`},
      ],

    },
    pager: {
      display: false,
      perPage: 5
    },
    rowClassFunction: (row) => {
      if (row.data.highlight && !row.data.data_encrypted === false) {
        return 'hightlight-created-row';
        //   return 'score negative'; // Color from row with negative in score
        // } else if (row.data.type === '(+)') {
        //   return 'score positive';
      }
      if (row.data.highlight && row.data.data_encrypted === false) {
        return 'hightlight-created-row hightlight-decrypted';
      }
      if (!row.data.highlight && row.data.data_encrypted === false) {
        return 'hightlight-decrypted';
      }
      return '';
    }
  };
  readonly SMART_TABLE_ENTERPISE_USERS_SETTING = {

    columns: {
      first_name: {
        title: 'First Name'
      },
      email: {
        title: 'Email'
      },
      // 'messages.length': {
      //   title: 'Messages'
      // },
      'role': {
        title: 'Role'
      },
      'permissions': {
        title: 'Permissions'
      }
      , created_at: {
        title: 'Created At'
      },
      updated_at: {
        title: 'Updated At'
      }
    },
    // hideSubHeader: true
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    pager: {
      display: false,
      perPage: 5
    }
  };


  readonly SMART_TABLE_KNOWLEDGEBASE_SETTING = {

    columns: {
      key: {
        title: 'Concept Key'
      },
      ner_type: {
        title: 'Type'
      },
      conflict_policy: {
        title: 'Override Policy'
      },
    },
    pager: {
      display: false
    },
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    rowClassFunction: (row) => {
      if (row.data.highlight) {
        return 'hightlight-created-row';
        //   return 'score negative'; // Color from row with negative in score
        // } else if (row.data.type === '(+)') {
        //   return 'score positive';
      }
      return '';
    }
  };

  readonly HANDSON_TABLE_BOT_TESTING_colHeaders = ['Message', 'Expected Template', 'Status', 'Generated Template', 'RoomId', 'TransactionId'];
  readonly HANDSON_TABLE_BOT_TESTING_columns = [
    {data: 0, type: 'text',},
    {data: 1, type: 'text',},
    {data: 2, type: 'text', readOnly: true},
    {data: 3, type: 'text', readOnly: true},
    {data: 4, type: 'text', readOnly: true},
    {data: 5, type: 'text', readOnly: true},
  ];

  readonly HANDSON_TABLE_KNOWLEDGE_BASE_SETTING = {
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
  readonly HANDSON_TABLE_KNOWLEDGE_BASE_colHeaders = ['', '', ''];
  readonly HANDSON_TABLE_KNOWLEDGE_BASE_columns = [
    // {data: 0, type: 'text'},
    // {data: 1, type: 'text'},
    // {data: 2, type: 'text'},
    // {data: 3, type: 'text'},
    // {data: 4, type: 'text'},
    // {data: 5, type: 'text'}
  ];


  readonly HIGHCHART_CHARTVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE = {
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

  readonly HIGHCHART_THEMEVALUE_ANALYTICS_USER_LOYALTY = {
    chart: {
      style: {
        fontFamily: 'helvetica'
      }
    },
    colors: ['#5392ff', '#71cddd', '#34bc6e', '#95d13c', '#ffb000', '#fe8500', '#ff509e', '#9b82f3']
  };

  readonly HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_SESSION_WISE = {
    chart: {
      style: {
        fontFamily: 'helvetica'
      }
    },
    colors: ['#5392ff', '#71cddd', '#34bc6e', '#95d13c', '#ffb000', '#fe8500', '#ff509e', '#9b82f3']
  };

  readonly HIGHCHART_CHARTVALUE_ANALYTICS_PERFORMANCE_TEMPLATE_KEY_AND_FLOW_TRIGGERED = {
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

  readonly HIGHCHART_THEMEVALUE_ANALYTICS_PERFORMANCE_TEMPLATE_KEY_AND_FLOW_TRIGGERED = {
    chart: {
      style: {
        fontFamily: 'helvetica'
      }
    },
    colors: ['#5392ff', '#71cddd', '#34bc6e', '#95d13c', '#ffb000', '#fe8500', '#ff509e', '#9b82f3']
  };

  readonly HIGHCHART_CHARTVALUE_ANALYTICS_ENGAGEMENT = {

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
    },

    // plotOptions: {
    //   series: {
    //     pointStart: Date.UTC(2018, 6, 20),
    //     pointInterval: 24 * 3600 * 1000, // one day
    //     marker: {
    //       symbol: 'circle',
    //       /* fillColor: '#ffffff' , */
    //       lineWidth: 0,
    //       radius: 4,
    //       lineColor: null, // inherit from series
    //     },
    //     lineWidth: 3,
    //     label: {
    //       enabled: false,
    //       style: {
    //         fontFamily: 'sans-serif',
    //         fontWeight: 'regular',
    //         fontSize: 11
    //       }
    //     }
    //   }
    // },
    // responsive: {
    //   rules: [{
    //     condition: {
    //       maxWidth: 1200
    //     },
    //     chartOptions: {
    //       legend: {
    //         layout: 'horizontal',
    //         align: 'center',
    //         verticalAlign: 'bottom'
    //       }
    //     }
    //   }]
    // }

  };
  readonly HIGHCHART_CHARTVALUE_USER_LOYALTY = {
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

  readonly integrationOptionListTemplate: IIntegrationOption = {
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
}
