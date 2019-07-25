import {Component, OnInit, Input, ViewChild, EventEmitter, Output, AfterViewInit, OnDestroy, AfterViewChecked} from '@angular/core';
import { NgForm } from '@angular/forms';
import {ConstantsService} from "../../../../constants.service";

@Component({
  selector: 'app-curation-filter',
  templateUrl: './curation-filter.component.html',
  styleUrls: ['./curation-filter.component.scss']
})
export class CurationFilterComponent implements OnInit,AfterViewInit {

  constructor(
    private constantsService : ConstantsService,
  ) { }
  @Input() triggered_rules : string[];
  @Output() formSubmitted = new EventEmitter();
  @Output() clearForm = new EventEmitter();
  @Input() unsolved : boolean;
  @Input() set resolveIssuesOfArticleByCount(count:number){
    if(count){
      this.curationForm.reset();
      debugger;
      this.curationForm.form.patchValue({
        "order_by": "group_by_section",
        "issue_count_filter": 'issue_count_per_section',
        "count": count
      })
      // this.submitedForm();
      // setTimeout(()=>{
      //   debugger;
      //   this.submitedForm()},10)
    }
  }
  @ViewChild('filterForm') curationForm: NgForm;
  maxDate = new Date();
  date = {};
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
    let body = {};

    for (var key in this.curationForm.value) {
      if (this.curationForm.value[key]) {
        body[key] = this.curationForm.value[key];
      }
    }
    if(body['updated_at__range'] && Object.keys(body['updated_at__range']).length > 0 ){
      body['updated_at__range'] = body['updated_at__range']["begin"].getTime()+','+(body['updated_at__range']["end"].getTime()+86340000);
    }else{
      delete body['updated_at__range'];
    }

    if(body['issue_count_filter'] && body['count']){
      body[body['issue_count_filter']]  = body['count'];
      delete body['issue_count_filter'];
      delete body['count'];
    }else{
      delete body['issue_count_filter'];
      delete body['count'];
    }
    
    if(body['order_by']){
      body['order_by'] = `-${body['order_by']}`;
    }else{
      body['order_by'] = `-updated_at`;
    }
    if(this.unsolved){
      delete body['hideIgnored'];
    }else{
      if(body['hideIgnored']){
        body['curation_state__in']="resolved";
        delete body['hideIgnored'];
      }else{
        body['curation_state__in']="resolved,ignored";
        delete body['hideIgnored'];
      }
    }
    
    this.formSubmitted.emit(body);
  }

  clearFormClicked(){
    this.curationForm.reset();
    
    if(this.unsolved){
      this.curationForm.form.patchValue({
        'order_by' : `updated_at`
      })
      this.submitedForm();
    }
    if(!this.unsolved){
      this.curationForm.form.patchValue({
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
  ngAfterViewInit(){
    debugger;
    setTimeout(()=>{
      this.curationForm.form.get('order_by').valueChanges
      .subscribe((val)=>{
        debugger;
        if(val){
          debugger;
          this.submitedForm();
        }
      }),0})
    
  }
}
