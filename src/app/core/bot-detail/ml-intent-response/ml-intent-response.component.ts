import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {IMLResponse} from '../../../typings/reply';
import {UtilityService} from '../../../utility.service';
import {MlReplyService} from '../ml-reply/ml-reply.service';
import {IBot} from '../../interfaces/IBot';
import {map, startWith, tap} from 'rxjs/operators';

@Component({
  selector: 'app-ml-intent-response',
  templateUrl: './ml-intent-response.component.html',
  styleUrls: ['./ml-intent-response.component.scss']
})
export class MlIntentResponseComponent implements OnInit {
  filteredOptions;
  @Input() form: FormGroup;
  @Input() bot: IBot;
  _keys;
  @Output() updateResponse$ = new EventEmitter();
  @Input() set keys(val) {

    this._keys = val;
    /*hack: to trigger value changes in autocomplete filter*/
    this.form.patchValue(this.form.value);
  }

  ngOnInit() {
    this.filteredOptions = this.form.get('template_key').valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value)),
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value && value.toLowerCase && value.toLowerCase();
    return this._keys.filter(option => option && option.toLowerCase().includes(filterValue));
  }
}
