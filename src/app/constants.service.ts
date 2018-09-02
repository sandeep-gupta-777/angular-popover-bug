import {Injectable} from '@angular/core';
import {IAppState} from './ngxs/app.state';
import {IUser} from './core/interfaces/user';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IBot} from './core/interfaces/IBot';
import {IIntegrationOption} from '../interfaces/integration-option';

// import {IGlobalState} from '../interfaces/global-state';
@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  static state: any;
  loggedUser: IUser;
  @Select() app$:Observable<IAppState>;

  public BACKEND_URL = 'https://dev.imibot.ai/';//'http://10.0.27.176:8000/';
  public BACKEND_URL_LOGIN = `${this.BACKEND_URL}` + 'api/v1/user/login/';
  private BACKEND_URL_ENTERPRISE_USERS = `${this.BACKEND_URL}` + 'users/enterprise/';
  private BACKEND_USER_UPDATE_URL = `${this.BACKEND_URL}` + 'user/';//https://dev.imibot.ai/user/5a030aa9b050705bd0ca5a45
  private BACKEND_USER_CODE_BASED_BOT_LIST = `${this.BACKEND_URL}` + 'integrations';//https://dev.imibot.ai/integrations
  public BACKEND_USER_PIPELINE_BASED_BOT_LIST = `${this.BACKEND_URL}` + 'api/v1/bot/';//https://dev.imibot.ai/bots

  public readonly CHANNEL_LIST = [
    {name: 'all', displayName: 'All channels'},
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

  constructor() {
    this.app$.subscribe((value)=>{
      this.BACKEND_URL = (value && value.backendUrlRoot) || 'https://dev.imibot.ai/';
    });
  }

  getLoginUrl(){
    return this.BACKEND_URL + 'api/v1/user/login/';
  }

  setLoggedUser(loggedUser: IUser) {
    this.loggedUser = loggedUser;
  }

  getUserUpdateUrl(enterprise_UserId: number) {
    return this.BACKEND_URL + `api/v1/user/${enterprise_UserId}/`;//{{url}}/user/{{Enterprise_UserId}}
  }

  getEnterpriseUrl(enterpriseId: number) {
    // return this.BACKEND_URL + `api/v1/enterprise/${enterpriseId}/`;// + enterpriseId+'/'; //https://dev.imibot.ai/enterprise/59b0f043378feb000d7c9d13
    return this.BACKEND_URL + `api/v1/enterprise/${enterpriseId}/`;// + enterpriseId+'/'; //https://dev.imibot.ai/enterprise/59b0f043378feb000d7c9d13
  }

  getEnterpriseUsersUrl() {
    return this.BACKEND_URL + 'api/v1/user/enterpriseusers/'; //https://dev.imibot.ai/api/v1/user/enterpriseusers/
  }

  getPipelinebasedBotListUrl() {
    // return this.BACKEND_USER_PIPELINE_BASED_BOT_LIST + 'api/v1/bot/';
    return this.BACKEND_URL+ 'api/v1/bot/';
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

  getSessionsMessageUrl(room_id: number) {
    return this.BACKEND_URL + `api/v1/message/?room_id=${room_id}`; //https://dev.imibot.ai/api/v1/message/?room_id=60
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

  getReportUrl(page = 1, pageSize = 10) {
    return this.BACKEND_URL + `api/v1/reports?page=${page}&pageSize=${pageSize}/`; //{{url}}/reports?page=1&pageSize=10
  }

  getReportHistoryUrl(page = 1, pageSize = 10) {
    return this.BACKEND_URL + `api/v1/reporthistory?page=${page}&pageSize=${pageSize}/`; //https://dev.imibot.ai/reporthistory?page=1&pageSize=10
  }

  geReportTypesUrl() {
    return this.BACKEND_URL + 'api/v1/reporttypes/'; // http://dev.imibot.ai/api/v1/reporttypes
  }

  getReportsEditInfo(_id) {
    return this.BACKEND_URL + 'api/v1/reports/' + _id+'/'; //  https://dev.imibot.ai/reports/5b335b127c15580059c13fc5
  }

  getSaveReportsEditInfo(_id) {
    return this.BACKEND_URL + `api/v1/reports/${_id}/`; //  http://dev.imibot.ai/api/v1/reports/1/
  }


  getAllVersionsByBotId() {
    return this.BACKEND_URL + 'api/v1/botversioning/?limit=1000'; //"http://localhost:8000/api/v1/botversioning"
  }

  getSaveVersionByBotId(id) {
    return this.BACKEND_URL + `api/v1/botversioning/${id}/`; //https://dev.imibot.ai/api/v1/botversioning/9/
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
    return this.BACKEND_URL + `api/v1/consumer/?limit=${limit}&offset=${offset}`; //https://localhost:8000/api/v1/consumer/?limit=1&offset=0
  }

  getAllActionsUrl() {
    return this.BACKEND_URL + `api/v1/actions/?limit=100`; //https://dev.imibot.ai/api/v1/actions/
  }
  getDeleteBotUrl(id: number) {
    return this.BACKEND_URL + `api/v1/bot/${id}`; //http://localhost:8000/api/v1/bot/66/
  }

  getSpecificBotByBotTokenUrl(){
    return this.BACKEND_URL + `api/v1/bot/`; //https://dev.imibot.ai/api/v1/bot/
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

  updateCustomBotNER(custom_ner_id) {
    return this.BACKEND_URL + `api/v1/customner/${custom_ner_id}/`; //https://dev.imibot.ai/api/v1/customner/13/
  }

  updateBotUrl(bot_id: number) {
    return this.BACKEND_URL + `api/v1/bot/${bot_id}/`;//https://dev.imibot.ai/api/v1/bot/13/
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

  getAnalyticsUrl() {
    return this.BACKEND_URL + 'api/v1/analytics/';//https://dev.imibot.ai/api/v1/analytics/
  }

  updateEnterpriseNer(id) {/*TODO: is it enterprise id??*/
    return this.BACKEND_URL + `api/v1/customner/${id}/`; //https://dev.imibot.ai/api/v1/customner/12/
  }

  createEnterpriseNer() {
  }

  updatePassword(){
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
        width:'120px'
      },
      name: {//
        title: 'Name'
      },
      phone: {
        title: 'Phone'
      },
      facebook_id: {//
        title: 'Facebook Id',
        width:'120px'
      },
      skype_id: {//
        title: 'Skype Id',
        width:'120px'
      },
      bot_id: {
        title: 'U Id',
        width:'120px'
      },
      email: {//
        title: 'Email',
      },
      updated_at: {//
        title: 'Updated At',
        width:'150px'

      },

    },
    // hideSubHeader: true
    actions: {
      edit: false,
      add: false,
      delete:false,
      position: 'right',
      custom: [
        { name: 'decrypt', title: `<i class="fa fa-lock text-dark"></i>` }
      ],
    },
  };

  readonly SMART_TABLE_SESSIONS_SETTING = {

    columns: {
      id: {
        title: 'Room ID',
        width:'150px'
      },
      consumer_id: {
        title: 'Consumer Id',
        width:'150px'
      },
      total_message_count: {
        title: 'Messages',
        width:'150px'
      },
      last_updated_job_id: {
        title: 'Last Updated Job Id'
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
      delete:false,
      position: 'right',
      custom: [{name: 'download', title: `<i  class="fa fa-download pr-2 text-dark"></i>` },
        { name: 'decrypt', title: `<i class="fa fa-lock text-dark"></i>` }
      ],

    },
    pager: {
      display: false,
      perPage: 5
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
      "role": {
        title: 'Role'
      },
      "permissions": {
        title: 'Permissions'
      }
      ,created_at: {
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
    pager:{
      display:false
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

  readonly HANDSON_TABLE_BOT_TESTING_colHeaders = ['Message', 'Template', 'Status'];
  readonly HANDSON_TABLE_BOT_TESTING_columns = [
    {data: 0, type: 'text'},
    {data: 1, type: 'text'},
    {data: 2, type: 'text'},
  ];
  readonly HANDSON_TABLE_KNOWLEDGE_BASE_colHeaders = ['Key', 'Title', 'Payload'];
  readonly HANDSON_TABLE_KNOWLEDGE_BASE_columns = [
    {data: 0, type: 'text'},
    {data: 1, type: 'text'},
    {data: 2, type: 'text'},
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

  readonly HIGHCHART_THEMEVALUE_ANALYTICS_ENGAGEMENT = {

    title: {
      text: ''
    },

    subtitle: {
      text: ''
    },
    xAxis: {
      type: 'datetime'
    },

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

    plotOptions: {
      series: {
        pointStart: Date.UTC(2018, 6, 20),
        pointInterval: 24 * 3600 * 1000, // one day
        marker: {
          symbol: 'circle',
          /* fillColor: '#ffffff' , */
          lineWidth: 0,
          radius: 4,
          lineColor: null, // inherit from series
        },
        lineWidth: 3,
        label: {
          enabled: false,
          style: {
            fontFamily: 'sans-serif',
            fontWeight: 'regular',
            fontSize: 11
          }
        }
      }
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 1200
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }

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
        skillId:''
      }
    },
    fulfillment_provider_details: {
      imiconnect: {
        appId: '',
        appSecret: '',
        enabled: false,
        serviceKey: '',
        streamName: ''
      }
    }

  };
}
