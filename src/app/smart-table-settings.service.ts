import { Injectable } from '@angular/core';
import {IReportList} from '../interfaces/report';

@Injectable({
  providedIn: 'root'
})
export class SmartTableSettingsService {

  constructor() { }

  readonly SMART_TABLE_REPORTS_SETTING = {

    columns: {
      bot: {
        title: 'Bot'
      },
      name: {
        title: 'Report Type'
      },
      frequency: {
        title: 'Frequency'
      },
      last_jobId: {
        title: 'Last job run'
      },
      nextreportgenerated: {
        title: 'Next scheduled date'
      },
      isactive: {
        title: 'Active'
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false
    },
  };
  readonly SMART_TABLE_REPORTS_HISTORY_SETTING = {

    columns: {
      bot: {
        title: 'Bot'
      },
      name: {
        title: 'Report Type'
      },
      created_at: {
        title: 'Generated Date'
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false
    },
  };

}
