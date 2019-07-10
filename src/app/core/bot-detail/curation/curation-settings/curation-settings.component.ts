import {Component, Input, OnInit} from '@angular/core';
import {IBot} from "../../../interfaces/IBot";
import {ConstantsService} from "../../../../constants.service";
import {IHeaderData} from "../../../../../interfaces/header-data";
import {ServerService} from "../../../../server.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-curation-settings',
  templateUrl: './curation-settings.component.html',
  styleUrls: ['./curation-settings.component.scss']
})
export class CurationSettingsComponent implements OnInit {

  constructor(
    private constantsService: ConstantsService,
    private serverService: ServerService,
    private formBuilder: FormBuilder,
  ) { }
  @Input() bot: IBot;
  curationSettingsForm : FormGroup;
  ngOnInit() {    
    this.curationSettingsForm = this.makeCurationSettingsForm();
    this.curationSettingsForm.get('allow_curation').valueChanges
    .subscribe((val)=>{
      if(!val){
        this.curationSettingsForm.get('curation_settings').disable();
      }
      if(val){
        this.curationSettingsForm.get('curation_settings').enable();
      }
    })
    this.curationSettingsForm.get('curation_settings').get('low_confidence').get('enabled').valueChanges
    .subscribe((val)=>{
      if(!val){
        this.curationSettingsForm.get('curation_settings').get('low_confidence').get('low_confidence_score').disable();
      }
      if(val){
        this.curationSettingsForm.get('curation_settings').get('low_confidence').get('low_confidence_score').enable();
      }
    })
  }
  makeCurationSettingsForm(){
    let form = this.formBuilder.group({
      "allow_curation" : [this.bot.allow_curation],
      "curation_settings": this.formBuilder.group({
        "agent_handover": this.formBuilder.group({"enabled":[this.bot.curation_settings.agent_handover.enabled]}),
        "downvoted": this.formBuilder.group({"enabled":[this.bot.curation_settings.downvoted.enabled]}),
        "fallback": this.formBuilder.group({"enabled":[this.bot.curation_settings.fallback.enabled]}),
        "from_session": this.formBuilder.group({"enabled":[this.bot.curation_settings.from_session.enabled]}),
        "low_confidence": this.formBuilder.group({
          "enabled":[this.bot.curation_settings.low_confidence.enabled],
          "low_confidence_score": [this.bot.curation_settings.low_confidence.low_confidence_score]
        }),
        "partial_match": this.formBuilder.group({"enabled":[this.bot.curation_settings.partial_match.enabled]}),
      })
    });
    return form;
  }
}
