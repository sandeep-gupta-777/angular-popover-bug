import {Injectable} from '@angular/core';
import {IReportList} from '../interfaces/report';
import {DatePipe} from '@angular/common';

@Injectable()
export class SmartTableSettingsService {

  constructor(private datePipe: DatePipe
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
        title: 'Frequency',
        skipXssValidation: true
      },
      last_jobId: {
        title: 'Last job run',
        skipXssValidation: true
      },
      nextreportgenerated: {
        title: 'Next scheduled date',
        skipXssValidation: true
      },
      isactive: {
        title: 'Active',
        skipXssValidation: true
      },
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      skipXssValidation: true
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
          const raw = new Date(date);

          const formatted = this.datePipe.transform(raw, 'fullDate');
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
        {name: 'download', title: `<span class="fa fa-download text-dark"></span>`}
      ],
    },
    pager: {
      display: false,
      perPage: 10
    },
  };

}
