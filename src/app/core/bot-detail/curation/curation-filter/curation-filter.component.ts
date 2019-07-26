import {Component, OnInit, Input, ViewChild, EventEmitter, Output, AfterViewInit, OnDestroy, AfterViewChecked} from '@angular/core';
import { NgForm,FormGroup, FormControl } from '@angular/forms';
import {ConstantsService} from "../../../../constants.service";

@Component({
  selector: 'app-curation-filter',
  templateUrl: './curation-filter.component.html',
  styleUrls: ['./curation-filter.component.scss']
})
export class CurationFilterComponent implements OnInit {

  constructor(
    private constantsService : ConstantsService,
  ) { }
  @Input() triggered_rules : string[];
  @Input() form : FormGroup;
  @Output() formSubmitted = new EventEmitter();
  @Output() clearForm = new EventEmitter();
  @Input() unsolved : boolean;

  // @ViewChild('filterForm') curationForm: NgForm;

  formChangesSubscription;
  ngOnInit() {
    
    if(!this.triggered_rules){
      this.triggered_rules = this.constantsService.getDefaultTriggeredRulesForArticleFilter();
    }

    

  }

  toDisplayValue(value:string){
    var pieces = value.split("_");
    var j = pieces[0].charAt(0).toUpperCase();
    pieces[0] = j + pieces[0].substr(1).toLowerCase();
    return pieces.join(" ");
  }

  submitedForm(){
    this.formSubmitted.emit({'unsolved':this.unsolved,value:this.form.value});
  }
  clearFormClicked(){
    this.form.reset();
    
    if(this.unsolved){
      this.form.patchValue({
        'order_by' : `updated_at`
      })
      this.submitedForm();
    }
    if(!this.unsolved){
      this.form.patchValue({
        'curation_state__in':"resolved,ignored",
        'order_by' : `updated_at`
      })
      this.submitedForm();
    }
    
  }

  // onSortByChange(val){
  //   debugger;
  //   let x = this.curationForm.form.value;
  //   this.submitedForm();
    
  // }
}
