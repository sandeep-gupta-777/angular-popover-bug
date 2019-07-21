import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {ConstantsService} from './constants.service';
import {bots} from './fixtures/bot';
import {login} from './fixtures/login';
import {actions} from './fixtures/actions';
import {enterprise_login} from './fixtures/enterprise_login';
import {enterprises} from './fixtures/enterprises';
import {role} from './fixtures/role';
import {sessions} from './fixtures/sessions';
import {environment} from '../environments/environment';
import {integrations} from './fixtures/integrations';
import {pipeline_module} from './fixtures/pipeline-module';
import {enterprise} from './fixtures/enterprise';
import {enterprise_ner} from './fixtures/enterprise-ner';
import {consumer} from './fixtures/consumer';
import {botTests} from './fixtures/bot-testing';
import {versions} from './fixtures/bot-version';
import {reportTypes} from './fixtures/reporttypes';
import {reportHistory} from './fixtures/reporthistory';
import {reports} from './fixtures/reports';

@Injectable()
export class HttpMockRequestInterceptor implements HttpInterceptor {
  constructor(private injector: Injector, private constantsService: ConstantsService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const apiDetails = this.getApiDetails();

    if (environment.mock) {
      for (const element of apiDetails) {
        const elementPath = new URL(element.url).pathname;
        const requestPath = new URL(request.url).pathname;
        if ((requestPath === elementPath && request.method === element.method && element.mock)) {
          return of(new HttpResponse({ status: 200, body: ((element.json) as any)}));
        }
      }
    }
    return next.handle(request);
  }

  getApiDetails() {
    return [
      {
        url: this.constantsService.getBotListUrl(),
        json: bots,
        method: 'GET',
        mock: false
      }, {
        url: this.constantsService.getLoginUrl(),
        json: login,
        method: 'POST',
        mock: false
      }, {
        url: this.constantsService.getAllActionsUrl(),
        json: actions,
        method: 'GET',
        mock: true
      }, {
        url: this.constantsService.getAllActionsUrl(),
        json: actions,
        method: 'GET',
        mock: true
      },
      {
        url: this.constantsService.getEnterpriseLoginUrl(),
        json: enterprise_login,
        method: 'POST',
        mock: false
      }, {
        url: this.constantsService.getAllEnterpriseUrl(),
        json: enterprises,
        method: 'GET',
        mock: true
      }, {
        url: this.constantsService.getRoleUrl(),
        json: role,
        method: 'GET',
        mock: true
      }, {
        url: this.constantsService.getBotSessionsUrl(10, 0),
        json: sessions,
        method: 'GET',
        mock: true
      }, {
        url: this.constantsService.getMasterIntegrationsList(),
        json: integrations,
        method: 'GET', //
        mock: true
      }, {
        url: this.constantsService.getPipelineModuleV2(),
        json: pipeline_module,
        method: 'GET',
        mock: true
      }, {
        url: this.constantsService.getEnterpriseUrl(4),
        json: enterprise,
        method: 'GET',
        mock: true
      }, {
        url: this.constantsService.getCustomBotNER(10, 0),
        json: enterprise_ner,
        method: 'GET',
        mock: true
      }, {
        url: this.constantsService.getBotConsumerUrl(10, 0),
        json: consumer,
        method: 'GET',
        mock: true
      }, {
        url: this.constantsService.getBotTestingUrl(),
        json: botTests,
        method: 'GET',
        mock: true
      }, {
        url: this.constantsService.getAllVersionsByBotId(),
        json: versions,
        method: 'GET',
        mock: false
      }, {
        url: this.constantsService.geReportTypesUrl(),
        json: reportTypes,
        method: 'GET',
        mock: true
      }, {
        url: this.constantsService.getReportHistoryUrl(10, 0),
        json: reportHistory,
        method: 'GET',
        mock: true
      }, {
        url: this.constantsService.getReportUrl(10, 0),
        json: reports,
        method: 'GET',
        mock: true
      }
    ];
  }
}
