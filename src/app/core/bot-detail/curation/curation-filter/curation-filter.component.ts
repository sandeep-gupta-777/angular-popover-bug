import {Component, OnInit, Input, ViewChild, EventEmitter, Output, AfterViewInit, OnDestroy, AfterViewChecked} from '@angular/core';
import {NgForm, FormGroup, FormControl} from '@angular/forms';
import {ConstantsService} from '../../../../constants.service';
import {IIntent} from "../../../../typings/intents";
import {IMLResponse} from "../../../../typings/reply";

@Component({
  selector: 'app-curation-filter',
  templateUrl: './curation-filter.component.html',
  styleUrls: ['./curation-filter.component.scss']
})
export class CurationFilterComponent implements OnInit {

  constructor(
    private constantsService: ConstantsService,
  ) {
  }

  @Input() triggered_rules: string[];
  @Input() form: FormGroup;
  @Output() formSubmitted = new EventEmitter();
  @Output() clearForm = new EventEmitter();
  @Input() unsolved: boolean;
  @Input() isMlBot: boolean = false;
  @Input() mlTemplateKeyList;
  @Input() mlIntentList : IIntent[] = []
  myObject = Object;
  // @ViewChild('filterForm') curationForm: NgForm;

  formChangesSubscription;

  ngOnInit() {

    if (!this.triggered_rules) {
      this.triggered_rules = this.constantsService.getDefaultTriggeredRulesForArticleFilter();
    }


  }

  toDisplayValue(value: string) {
    const pieces = value.split('_');
    const j = pieces[0].charAt(0).toUpperCase();
    pieces[0] = j + pieces[0].substr(1).toLowerCase();
    return pieces.join(' ');
  }

  submitedForm() {
    this.formSubmitted.emit({'unsolved': this.unsolved, value: this.form.value});
  }

  clearFormClicked() {
    this.form.reset();

    if (this.unsolved) {
      this.form.patchValue({
        'order_by': `updated_at`
      });
      this.submitedForm();
    }
    if (!this.unsolved) {
      this.form.patchValue({
        'curation_state__in': 'resolved,ignored',
        'order_by': `updated_at`
      });
      this.submitedForm();
    }

  }

  // onSortByChange(val){
  //
  //   let x = this.curationForm.form.value;
  //   this.submitedForm();

  // }
}
