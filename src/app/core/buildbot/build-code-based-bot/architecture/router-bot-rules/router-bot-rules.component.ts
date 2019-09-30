import {Component, Input, OnInit} from '@angular/core';
import {IBot} from "../../../../interfaces/IBot";
import {FormBuilder, FormGroup} from "@angular/forms";
import {EAllActions} from "../../../../../typings/enum";
import {ELoadingStatus} from "../../../../../button-wrapper/button-wrapper.component";

@Component({
  selector: 'app-router-bot-rules',
  templateUrl: './router-bot-rules.component.html',
  styleUrls: ['./router-bot-rules.component.scss']
})
export class RouterBotRulesComponent implements OnInit {

  constructor(
    private formBuilder : FormBuilder,
  ) { }
  @Input() bot :IBot;
  myEAllActions : EAllActions;
  rulesForm: FormGroup;
  uploadingData = ELoadingStatus.default;
  ngOnInit(): void {
    this.rulesForm = this.formBuilder.group({
      rules: this.formBuilder.array([this.getAndRules(), this.getAndRules()])
    });
    console.log(this.rulesForm.value);
  }
  getAndRules(): FormGroup {
    const andRules = this.formBuilder.group({
      and: this.formBuilder.array([this.getOrRulesFG(), this.getOrRulesFG()]),
      output: []
    });
    return andRules;
  }
  getOrRulesFG(): FormGroup {
    const orRule = this.formBuilder.group({
      or: this.formBuilder.array([this.getOrRule(), this.getOrRule(), ])
    });
    return orRule;
  }
  getOrRule() {
    return this.formBuilder.group({
      type: [],
      operator: [],
      left_operand: [],
      right_operand: [],
    });
  }chartValue2

}