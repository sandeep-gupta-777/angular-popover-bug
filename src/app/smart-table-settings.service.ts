import {Injectable} from '@angular/core';
import {IReportList} from '../interfaces/report';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SmartTableSettingsService {

  constructor(    private datePipe: DatePipe
  ) {
  }

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
    pager: {
      display: false,
      perPage: 10
    }
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
        title: 'Generated Date',
        valuePrepareFunction: (date) => {
          var raw = new Date(date);

          var formatted = this.datePipe.transform(raw, 'fullDate');
          return formatted;
        }
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      position: 'right',
      custom: [
        {name: 'download', title: `<i class="fa fa-download text-dark"></i>`}
      ],
    },
    pager: {
      display: false,
      perPage: 10
    },
  };

}
