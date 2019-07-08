import {Component, OnInit, Input, ViewChild, EventEmitter, Output} from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-curation-filter',
  templateUrl: './curation-filter.component.html',
  styleUrls: ['./curation-filter.component.scss']
})
export class CurationFilterComponent implements OnInit {

  constructor() { }
  @Input() triggered_rules : string[];
  @Output() formSubmitted = new EventEmitter();
  @Output() clearForm = new EventEmitter();
  @Input() unsolved : boolean;
  @ViewChild('filterForm') curationForm: NgForm;
  maxDate = new Date();
  date = {};
  ngOnInit() {
    if(!this.triggered_rules){
      this.triggered_rules = [
                "agent_handover",
                "downvoted",
                "fallback",
                "from_session",
                "low_confidence",
                "partial_match"
      ]
    }
  }

  toDisplayValue(value:string){
    var pieces = value.split("_");
    for ( var i = 0; i < pieces.length; i++ )
    {
        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1).toLowerCase();
    }
    return pieces.join(" ");
  }
  submitedForm(){
    let body = {};

    for (var key in this.curationForm.value) {
      if (this.curationForm.value[key]) {
        body[key] = this.curationForm.value[key];
      }
    }
    if(body['created_at__range'] && Object.keys(body['created_at__range']).length > 0 ){
      body['created_at__range'] = body['created_at__range']["begin"].getTime()+','+(body['created_at__range']["end"].getTime()+86340000);
    }else{
      delete body['created_at__range'];
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
    this.formSubmitted.emit({});
  }
}
