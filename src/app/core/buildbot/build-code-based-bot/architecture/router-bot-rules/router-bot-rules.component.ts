import {Component, Input, OnInit} from '@angular/core';
import {IBot} from "../../../../interfaces/IBot";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EAllActions} from "../../../../../typings/enum";
import {ELoadingStatus} from "../../../../../button-wrapper/button-wrapper.component";
import {UtilityService} from "../../../../../utility.service";
import {Observable, throwError} from "rxjs";
import {Select} from "@ngxs/store";
import {ViewBotStateModel} from "../../../../view-bots/ngxs/view-bot.state";

@Component({
  selector: 'app-router-bot-rules',
  templateUrl: './router-bot-rules.component.html',
  styleUrls: ['./router-bot-rules.component.scss']
})
export class RouterBotRulesComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private utilityService: UtilityService,
  ) {
  }

  @Input() bot: IBot;
  botList: IBot[];
  @Select() botlist$: Observable<ViewBotStateModel>;
  myEAllActions: EAllActions;
  rulesForm: FormGroup;
  uploadingData = ELoadingStatus.default;
  typeArray = [
    'string',
    'variable',
    'integer',
    'boolean',
    'float',
    'array',
    'dictionary',
  ];
  operatorNamesArray = [
    'equal',
    'not_equal',
    'in',
    'not_equal',
    'exist',
    'greater',
    'less',
  ]

  ngOnInit(): void {
    this.rulesForm = this.formBuilder.group({
      rules: this.formBuilder.array([this.getAndRules()])
    });
    this.botlist$.subscribe(val=>{
      this.botList = val.allBotList;
    })
    console.log(this.rulesForm.value);
  }

  getAndRules(): FormGroup {
    const andRules = this.formBuilder.group({
      and: this.formBuilder.array([this.getOrRulesFG()]),
      output: this.formBuilder.group({
        type: "bot",
        destination_bot_id: this.bot.id,
        reply_message: "Please wait while i redirect you to luke skywalker",
      })
    });
    return andRules;
  }

  getOrRulesFG(): FormGroup {
    const orRule = this.formBuilder.group({
      or: this.formBuilder.array([this.getOrRule()])
    });
    return orRule;
  }

  getOrRule() {
    return this.formBuilder.group({
      type: 'string',
      operator: "equal",
      left_operand: 'asd',
      right_operand: ['sdasd', [Validators.required]],
    });
  }

  convertFormValueTologicJson() {
    let ruleobj = this.rulesForm.value;
  debugger;
    try {
      ruleobj = ruleobj.rules.map((rule) => {
        return {
          condition: {
            and: rule['and'].map((orRules) => {
                return {
                  'or': orRules['or'].map((orRule) => {
                      let thisOperation = "";
                      if (orRule.operator === "equal") {
                        thisOperation = "===";
                      } else if (orRule.operator === "not_equal") {
                        thisOperation = "!=="
                      } else if (orRule.operator === "in") {
                        thisOperation = "in"
                      } else if (orRule.operator === "not_equal") {
                        thisOperation = "!=="
                      } else if (orRule.operator === "exist") {
                        thisOperation = "=="
                      } else if (orRule.operator === "greater") {
                        thisOperation = ">"
                      } else if (orRule.operator === "less") {
                        thisOperation = "<"
                      }
                      let returnObjLeftArgument;
                      if (orRule.type === "string") {
                        returnObjLeftArgument = orRule.right_operand;
                      } else if (orRule.type === "variable") {
                        returnObjLeftArgument = {"var": orRule.right_operand};
                      } else if (orRule.type === "integer" || orRule.type === "boolean" || orRule.type === "float" || orRule.type === "array" || orRule.type === "dictionary") {
                        try {
                          returnObjLeftArgument = JSON.parse(orRule.right_operand);
                        } catch (e) {
                          throwError(e);
                        }
                      }
                      let returnObj = {};
                      returnObj[thisOperation] = [{"var": orRule.left_operand}, returnObjLeftArgument];
                      return returnObj;
                    }
                  )
                }
              }
            )
          },
          action: rule['output']
        }
      })
      console.log(ruleobj);
      return ruleobj;
    } catch (e) {
      this.utilityService.showErrorToaster("right hand operator is not of mentioned type");
    }
  }

}
