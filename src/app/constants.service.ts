import {Injectable} from '@angular/core';
import {st} from '@angular/core/src/render3';
import {IAppData} from './ngxs/app.state';
import {IAuthState} from './auth/ngxs/auth.state';
import {IUser} from './core/interfaces/user';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';

// import {IGlobalState} from '../interfaces/global-state';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  static state: any;
  loggedUser: IUser;

  public BACKEND_URL = 'https://dev.imibot.ai/';
  public BACKEND_URL_LOGIN = `${this.BACKEND_URL}` + 'api/v1/user/login/';
  private BACKEND_URL_ENTERPRISE_USERS = `${this.BACKEND_URL}` + 'users/enterprise';
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
  }


  setLoggedUser(loggedUser: IUser) {
    this.loggedUser = loggedUser;
  }

  getUserUpdateUrl() {
    return this.BACKEND_USER_UPDATE_URL + <any>(ConstantsService).state.loggeduser.user.id;
  }

  getEnterpriseUrl(enterpriseId: number) {
    return this.BACKEND_URL + 'enterprise/' + enterpriseId; //https://dev.imibot.ai/enterprise/59b0f043378feb000d7c9d13
  }

  getEnterpriseUsersUrl() {
    return this.BACKEND_URL_ENTERPRISE_USERS; //https://dev.imibot.ai/users/enterprise
  }

  getPipelinebasedBotListUrl() {
    return this.BACKEND_USER_PIPELINE_BASED_BOT_LIST;
  }

  getCodebasedBotListUrl() {
    return this.BACKEND_USER_CODE_BASED_BOT_LIST;
  }

  getOverViewInfoUrl() {
    return this.BACKEND_URL + 'analytics/overviewinfo'; //https://dev.imibot.ai/analytics/overviewinfo;
  }

  getUserAcquisitionUrl() {
    return this.BACKEND_URL + 'analytics/userAcquisition'; //https://dev.imibot.ai/analytics/userAcquisition
  }

  getAverageRoomTimeUrl() {
    return this.BACKEND_URL + 'analytics/averageRoomTime'; //https://dev.imibot.ai/analytics/averageRoomTime
  }

  getTotalFlowsUrl() {
    return this.BACKEND_URL + 'analytics/totalFlows'; //https://dev.imibot.ai/analytics/totalFlows
  }

  getTotalSessionsUrl() {
    return this.BACKEND_URL + 'analytics/totalSessions'; //https://dev.imibot.ai/analytics/totalSessions
  }

  getTotalMessagesUrl() {
    return this.BACKEND_URL + 'analytics/totalMessages'; //https://dev.imibot.ai/analytics/totalMessages
  }

  getMessagesByTemplateKeyUrl() {
    return this.BACKEND_URL + 'analytics/messagesByTemplateKey'; //https://dev.imibot.ai/analytics/messagesByTemplateKey
  }

  /*analytics channel urls below*/
  getChannelWiseUsersUrl() {
    return this.BACKEND_URL + 'analytics/channelWiseUsers'; //https://dev.imibot.ai/analytics/channelWiseUsers
  }

  getChannelWiseSessionsUrl() {
    return this.BACKEND_URL + 'analytics/channelWiseSessions'; //https://dev.imibot.ai/analytics/channelWiseSessions
  }

  getChannelWiseFlowsPerSessionUrl() {
    return this.BACKEND_URL + 'analytics/channelWiseFlowsPerSession'; //https://dev.imibot.ai/analytics/channelWiseFlowsPerSession
  }

  getChannelWiseAverageSessionTimeUrl() {
    return this.BACKEND_URL + 'analytics/channelWiseAverageSessionTime'; //https://dev.imibot.ai/analytics/channelWiseAverageSessionTime
  }

  getReportUrl(page = 1, pageSize = 10) {
    return this.BACKEND_URL + `reports?page=${page}&pageSize=${pageSize}`; //https://dev.imibot.ai/reports?page=1&pageSize=10
  }

  getReportHistoryUrl(page = 1, pageSize = 10) {
    return this.BACKEND_URL + `reporthistory?page=${page}&pageSize=${pageSize}`; //https://dev.imibot.ai/reporthistory?page=1&pageSize=10
  }

  geReportTypesUrl() {
    return this.BACKEND_URL + 'reporttypes'; //  https://dev.imibot.ai/reporttypes
  }

  getReportsEditInfo(_id) {
    return this.BACKEND_URL + 'reports/' + _id; //  https://dev.imibot.ai/reports/5b335b127c15580059c13fc5
  }

  getSaveReportsEditInfo(_id) {
    return this.BACKEND_URL + 'reports/' + _id; //  https://dev.imibot.ai/reports/5b335b127c15580059c13fc5
  }


  getAllVersionsByBotId() {
    return this.BACKEND_URL + 'api/v1/botversioning'; //"http://localhost:8000/api/v1/botversioning"
  }


  getBotTestingUrl(id: string) {
    return this.BACKEND_URL + 'bottestcases/bot/' + id; //https://dev.imibot.ai/bottestcases/bot/59e055773b6219000ca825ba
  }

  getBotConsumerUrl(id: string, pageNumber: number, pageSize: number) {
    return this.BACKEND_URL + `consumers/bot/${id}?page=${pageNumber}&pageSize=${pageSize}`; //https://dev.imibot.ai/consumers/bot/59e055773b6219000ca825ba?page=1&pageSize=10
  }

  getBotSessionsUrl(limit: number, offset: number) {
    return this.BACKEND_URL + `api/v1/room/?limit=${limit}&offset=${offset}`; //https://dev.imibot.ai/aip/v1/room
  }

  getStartNewChatLoginUrl() {
    return this.BACKEND_URL + 'send';
  }

  getAllBotVersionByBotIdUrl(bot_id) {
    return this.BACKEND_URL + `api/v1/botversioning/?bot_id=${bot_id}`; //http://localhost:8000/api/v1/botversioning/?bot_id=2
  }

  //localstorage keys
  LOCALSTORAGE_APP_STATE: string = 'LOCALSTORAGE_APP_STATE';
  LOCALSTORAGE_LAST_STATE_UPDATED: string = 'LOCALSTORAGE_LAST_STATE_UPDATED';


  //settings for smart table
  readonly SMART_TABLE_CONSUMER_SETTING = {
    columns: {
      _id: {//
        title: 'ID'
      },
      name: {//
        title: 'Name'
      },
      phone: {//
        title: 'Phone'
      },
      facebookId: {//
        title: 'Facebook Id'
      },
      skypeId: {//
        title: 'Skype Id'
      },
      botId: {
        title: 'U Id'
      },
      email: {//
        title: 'Email'
      },
      created_at: {//
        title: 'Created At'
      },

    },
    // hideSubHeader: true
    actions: {
      add: false,
      edit: false,
      delete: false
    },
  };

  readonly SMART_TABLE_SESSIONS_SETTING = {

    columns: {
      id: {
        title: 'Room ID'
      },
      consumer_id: {
        title: 'Consumer Id'
      },
      // 'messages.length': {
      //   title: 'Messages'
      // },
      last_updated_job_id: {
        title: 'Last Updated Job Id'
      },
      agent_handover: {
        title: 'Sent to Agent'
      },
      bot_id: {
        title: 'Bot Id'
      },

    },
    // hideSubHeader: true
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    pager: {
      display: true,
      perPage: 5
    }
  };
  readonly SMART_TABLE_KNOWLEDGEBASE_SETTING = {

    columns: {
      key: {
        title: 'Concept Key'
      },
      nerType: {
        title: 'type'
      },
      conflict_policy: {
        title: 'Override Policy'
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false
    },
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

}
