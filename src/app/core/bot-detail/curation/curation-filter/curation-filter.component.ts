import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-curation-filter',
  templateUrl: './curation-filter.component.html',
  styleUrls: ['./curation-filter.component.scss']
})
export class CurationFilterComponent implements OnInit {

  constructor() { }
  @Input() triggered_rules : string[]; 
  @ViewChild('filterForm') curationForm: NgForm;
  maxDate = new Date();
  date = {
    begin: new Date(new Date().setDate(new Date().getDate() - 30)),
    end: new Date()
  };
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

}
