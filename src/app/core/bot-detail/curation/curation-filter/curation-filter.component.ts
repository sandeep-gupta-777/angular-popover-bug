import {Component, OnInit, Input, ViewChild, EventEmitter, Output, AfterViewInit, OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import {ConstantsService} from '../../../../constants.service';

@Component({
  selector: 'app-curation-filter',
  templateUrl: './curation-filter.component.html',
  styleUrls: ['./curation-filter.component.scss']
})
export class CurationFilterComponent implements OnInit {

  constructor(
    private constantsService: ConstantsService,
  ) { }
  @Input() triggered_rules: string[];
  @Output() formSubmitted = new EventEmitter();
  @Output() clearForm = new EventEmitter();
  @Input() unsolved: boolean;
  @Input() set resolveIssuesOfArticleByCount(count: number) {
    if (count) {
      this.curationForm.reset();
      this.curationForm.form.patchValue({
        'order_by': 'room_id',
        'issue_count_filter': 'issue_count_per_section',
        'count': count
      });
      this.submitedForm();
    }
  }
  @ViewChild('filterForm') curationForm: NgForm;
  maxDate = new Date();
  date = {};
  tempOrderBy = 'updated_at';
  formChangesSubscription;
  ngOnInit() {

    if (!this.triggered_rules) {
      this.triggered_rules = this.constantsService.getDefaultTriggeredRulesForArticleFilter();
    }

  }

  toDisplayValue(value: string) {
    const pieces = value.split('_');
    for ( let i = 0; i < pieces.length; i++ ) {
        const j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1).toLowerCase();
    }
    return pieces.join(' ');
  }

  submitedForm() {
    const body = {};

    for (const key in this.curationForm.value) {
      if (this.curationForm.value[key]) {
        body[key] = this.curationForm.value[key];
      }
    }
    if (body['updated_at__range'] && Object.keys(body['updated_at__range']).length > 0 ) {
      body['updated_at__range'] = body['updated_at__range']['begin'].getTime() + ',' + (body['updated_at__range']['end'].getTime() + 86340000);
    } else {
      delete body['updated_at__range'];
    }

    if (body['issue_count_filter'] && body['count']) {
      body[body['issue_count_filter']]  = body['count'];
      delete body['issue_count_filter'];
      delete body['count'];
    } else {
      delete body['issue_count_filter'];
      delete body['count'];
    }

    if (body['order_by']) {
      body['order_by'] = `-${body['order_by']}`;
    } else {
      body['order_by'] = `-updated_at`;
    }
    if (this.unsolved) {
      delete body['hideIgnored'];
    } else {
      if (body['hideIgnored']) {
        body['curation_state__in'] = 'resolved';
        delete body['hideIgnored'];
      } else {
        body['curation_state__in'] = 'resolved,ignored';
        delete body['hideIgnored'];
      }
    }

    this.formSubmitted.emit(body);
  }

  clearFormClicked() {
    this.curationForm.reset();
    if (this.unsolved) {
      this.formSubmitted.emit({
        'order_by' : `-updated_at`
      });
    }
    if (!this.unsolved) {
      this.formSubmitted.emit({
        'curation_state__in': 'resolved,ignored',
        'order_by' : `-updated_at`
      });
    }

  }

  onSortByChange(val) {
    this.submitedForm();
  }

}
