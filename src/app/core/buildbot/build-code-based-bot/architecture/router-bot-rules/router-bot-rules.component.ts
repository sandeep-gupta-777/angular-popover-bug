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
data = {
  "bot_id": 1389,
  "rules": [
    {
      "condition": {
        "and": [
          {
            "or": [
              {
                "===": [
                  {
                    "var": "asd"
                  },
                  "sdasd"
                ]
              }
            ]
          }
        ]
      },
      "action": {
        "type": "bot",
        "destination_bot_id": 1389,
        "reply_message": "Please wait while i redirect you to luke skywalker"
      }
    }
  ],
  "else_action": {
    "type": "bot",
    "destination_bot_id": 1389,
    "reply_message": "Please wait while i redirect you to luke skywalker"
  }
}
  ngOnInit(): void {
    debugger;
    this.creatRulesForm(this.data);
    this.botlist$.subscribe(val=>{
      this.botList = val.allBotList;
    })
    console.log(this.rulesForm.value);
  }
  creatRulesForm(formData){
    let getAndRulesArray = []
    for (let ruleData of formData.rules){
      getAndRulesArray.push(this.getAndRules(ruleData));
    }
    debugger;
    this.rulesForm = this.formBuilder.group({
      rules: this.formBuilder.array(getAndRulesArray),
      else_action: this.formBuilder.group(formData.else_action)
    });

  }
  getAndRules(ruleData): FormGroup {
    let getOrRulesFGArray = []
    for (let andRuleData of ruleData.condition['and']){
      getOrRulesFGArray.push(this.getOrRulesFG(andRuleData));
    }
  debugger;
    const andRules = this.formBuilder.group({
      and: this.formBuilder.array(getOrRulesFGArray),
      output: this.formBuilder.group(ruleData.action)
    });
    return andRules;
  }

  getOrRulesFG(andRuleData): FormGroup {
    let getOrRuleArray = []
    for (let orRuleData of andRuleData.or){
      getOrRuleArray.push(this.getOrRule(orRuleData));
    }
  debugger;
    const orRule = this.formBuilder.group({
      or: this.formBuilder.array(getOrRuleArray)
    });
    return orRule;
  }

  getOrRule(orRuleData) {
  debugger;
  // {
  //   "===": [
  //     {
  //       "var": "asd"
  //     },
  //     "sdasd"
  //   ]
  // }
    let givenOperation = Object.keys(orRuleData)[0];
    let OperationType;
    if (givenOperation === "===") {
      OperationType ="equal"
    } else if (givenOperation ===  "!==") {
      OperationType ="not_equal"
    } else if (givenOperation ===  "in") {
      OperationType ="in"
    } else if (givenOperation ===  "!==") {
      OperationType ="not_equal"
    } else if (givenOperation ===  "==") {
      OperationType ="exist"
    } else if (givenOperation ===  ">") {
      OperationType ="greater"
    } else if (givenOperation ===  "<") {
      OperationType ="less"
    }


    return this.formBuilder.group({
      type: 'string',
      operator: OperationType,
      left_operand: orRuleData[givenOperation][0].var,
      right_operand: [orRuleData[givenOperation][1], [Validators.required]],
    });
  }
  addOrRule(){

  }
  convertFormValueTologicJson() {
    let ruleobj = this.rulesForm.value;
    let elseObj = this.rulesForm.value.else_action;
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
      // bot_id: 1389
      // else_action: {type: "message", destination_bot_id: null, reply_message: "this was else"}
      // rules: ruleobj
      console.log({bot_id:this.bot.id,rules:ruleobj,else_action:elseObj});
      return {bot_id:this.bot.id,rules:ruleobj,else_action:elseObj};
    } catch (e) {
      this.utilityService.showErrorToaster("right hand operator is not of mentioned type");
    }
  }
  deleteRule(rulesForm,ruleIndex,singleRule,andRulesIndex,andRule,orRulesIndex){
    if(andRule.get('or').length === 1 && singleRule.get('and').length === 1 && rulesForm.get('rules').length === 1){
      this.utilityService.showErrorToaster("Atlest one rule is necessary")
      console.log("cant delete");
    }
    else{
      andRule.get('or').removeAt(orRulesIndex);
      if(andRule.get('or').length === 0){
        singleRule.get('and').removeAt(andRulesIndex);
        if(singleRule.get('and').length === 0){
          rulesForm.get('rules').removeAt(ruleIndex);
        }
      }
    }
    }
}
