import {Component, Input, OnInit} from '@angular/core';
import {IBot} from "../../../../interfaces/IBot";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EAllActions} from "../../../../../typings/enum";
import {ELoadingStatus} from "../../../../../button-wrapper/button-wrapper.component";
import {UtilityService} from "../../../../../utility.service";
import {Observable, throwError} from "rxjs";
import {Select} from "@ngxs/store";
import {ViewBotStateModel} from "../../../../view-bots/ngxs/view-bot.state";
import {RouterService} from "../../../../../router.service";
import {ServerService} from "../../../../../server.service";
import {ConstantsService} from "../../../../../constants.service";
import {IHeaderData} from "../../../../../../interfaces/header-data";

@Component({
  selector: 'app-router-bot-rules',
  templateUrl: './router-bot-rules.component.html',
  styleUrls: ['./router-bot-rules.component.scss']
})
export class RouterBotRulesComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private utilityService: UtilityService,
    private serverService: ServerService,
    private constantsService: ConstantsService
  ) {
  }

  @Input() bot: IBot;
  botList: IBot[];
  @Select() botlist$: Observable<ViewBotStateModel>;
  myEAllActions: EAllActions;
  rulesForm: FormGroup;
  reloading = false;
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
    'exist',
    'not_exist',
    'greater',
    'less',
  ]
  mockConditionData = {"==": [
      {
        "var": "detected_language"
      },
      "en"
    ]}
  mockOrRuleData = {'or':[this.mockConditionData]}
  mockAddRuleCondition =  {"and": [this.mockOrRuleData]}
  mockRulesAction = {
    "type": "bot",
    "destination_bot_id": 1389,
    "reply_message": "Please wait while i redirect you to luke skywalker"
  }

data = {
  "bot_id": 1389,
  "rules": [
    {
      "condition": {
        "and": [
          {
            "or": [
              {"==": [
                  {
                    "var": "detected_language"
                  },
                  "en"
                ]}
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

    if(this.bot.bot_metadata.router_logic_id){
      this.reloading = true;
      const getRouterBotRuleByRuleIDUrl = this.constantsService.getRouterBotRuleByRuleIDUrl(this.bot.bot_metadata.router_logic_id);
      this.serverService.makeGetReq({url: getRouterBotRuleByRuleIDUrl})
        .subscribe((value: any) => {
          this.reloading = false;
          this.creatRulesForm(value);
        },()=>{
          this.reloading = false;
        });
    }else{
      this.utilityService.showErrorToaster("Not found router bot logic id")
    }

    // this.creatRulesForm(this.data);
    this.botlist$.subscribe(val=>{
      this.botList = val.allBotList;
    })
    // console.log(this.rulesForm.value);
  }
  creatRulesForm(formData){
    let getAndRulesArray = []
    for (let ruleData of formData.rules){
      getAndRulesArray.push(this.getAndRules(ruleData));
    }
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
    const andRules = this.formBuilder.group({
      and: this.formBuilder.array(getOrRulesFGArray),
      output: this.formBuilder.group({
        "type": [ruleData.action.type, [Validators.required]],
        "destination_bot_id": [ruleData.action.destination_bot_id, [Validators.required]],
        "reply_message": [ruleData.action.reply_message,[Validators.required]]
      })
    });
    return andRules;
  }

  getOrRulesFG(andRuleData): FormGroup {
    let getOrRuleArray = []
    for (let orRuleData of andRuleData.or){
      getOrRuleArray.push(this.getOrRule(orRuleData));
    }
    const orRule = this.formBuilder.group({
      or: this.formBuilder.array(getOrRuleArray)
    });
    return orRule;
  }

  getOrRule(orRuleData) {
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
    let rightOperentType = 'string' ;
    let rightOperant = orRuleData[givenOperation][1];
    if( rightOperant === 'true' || rightOperant === 'false' || rightOperant === false || rightOperant === true ){
      rightOperentType = 'boolean';
    }else{
      try {
        let rValue = JSON.parse(rightOperant);
        if(Array.isArray(rValue)){
          rightOperentType = 'array';
        }else{
          rightOperentType = 'float'
        }
      }catch (e) {
        rightOperentType = 'string';
      }
    }
    return this.formBuilder.group({
      type: [rightOperentType, [Validators.required]],
      operator: [OperationType , [Validators.required]],
      left_operand: [orRuleData[givenOperation][0].var,[Validators.required]],
      right_operand: [orRuleData[givenOperation][1], [Validators.required]],
    });
  }
  addOrCondition(andRule){
    andRule.get('or').push(this.getOrRule(this.mockConditionData));
  }
  addAndCondition(singleRule){
    singleRule.get('and').push(this.getOrRulesFG(this.mockOrRuleData));
  }
  addRule(rulesForm){
    let data = {
      "condition": this.mockAddRuleCondition,
      "action": this.mockRulesAction
    }
    rulesForm.get('rules').push(this.getAndRules(data))
  }
  convertFormValueTologicJson() {
    let ruleobj = this.rulesForm.value;
    let elseObj = this.rulesForm.value.else_action;
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

  updateRouterBotLogic(){
    if(this.bot.bot_metadata.router_logic_id){
      const getRouterBotRuleByRuleIDUrl = this.constantsService.getRouterBotRuleByRuleIDUrl(this.bot.bot_metadata.router_logic_id);
      const headerData: IHeaderData = {
        'bot-access-token': ServerService.getBotTokenById(this.bot.id)
      };
      const body = this.convertFormValueTologicJson();
      this.serverService.makePutReq({url: getRouterBotRuleByRuleIDUrl, body, headerData})
        .subscribe((value: any) => {
          this.utilityService.showSuccessToaster("Bot rule updated");
          this.uploadingData = ELoadingStatus.success;
        },()=>{
          this.uploadingData = ELoadingStatus.error;
        });
    }else{
      this.utilityService.showErrorToaster("Not found router bot logic id")
    }
  }

}
