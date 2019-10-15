import {Component, Input, OnInit} from '@angular/core';
import {IBot} from "../../../../interfaces/IBot";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
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
import {FilterTypeArrayPipe} from "./filter-type-array.pipe";
import {validate} from "codelyzer/walkerFactory/walkerFn";

@Component({
  selector: 'app-router-bot-rules',
  templateUrl: './router-bot-rules.component.html',
  styleUrls: ['./router-bot-rules.component.scss'],
  providers: [FilterTypeArrayPipe]
})
export class RouterBotRulesComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private utilityService: UtilityService,
    private serverService: ServerService,
    private constantsService: ConstantsService,
    private filterTypeArrayPipe: FilterTypeArrayPipe
  ) {
  }

  @Input() bot: IBot;
  botListofChild: IBot[];
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
  operatorNameMap = {
    'equal': 'Equals to',
    'not_equal': 'Not equals to',
    'in': 'In',
    'exist': 'Exists ',
    'not_exist': 'Does not exist',
    'greater': 'Greater than',
    'less': 'Less than'
  }
  mockConditionData = {"===": [
      {
        "var": ""
      },
      ""
    ]}
  mockOrRuleData = {'or':[this.mockConditionData]}
  mockAddRuleCondition =  {"and": [this.mockOrRuleData]}
  mockRulesAction = {
    "type": "bot",
    "destination_bot_id": 1234,
    "reply_message": "Please wait while i redirect you to luke skywalker"
  }


  ngOnInit(): void {
    this.botlist$.subscribe(val=>{
      this.botListofChild = val.allBotList;
      this.botListofChild = this.botListofChild.filter(val => {
        return this.bot.child_bots.find(x=>{
          return x == val.id;
        })
      });
      this.botListofChild.sort(function(a, b){return b.name < a.name ? 1:-1})
    })
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
  }
  creatRulesForm(formData){
    let getAndRulesArray = []
    for (let ruleData of formData.rules){
      getAndRulesArray.push(this.getAndRules(ruleData));
    }
    debugger;
    const typeFormControl = this.formBuilder.control(formData.else_action.type || "bot",Validators.required)
    this.rulesForm = this.formBuilder.group({
      rules: this.formBuilder.array(getAndRulesArray),
      else_action: this.formBuilder.group({
        "destination_bot_id": [formData.else_action.destination_bot_id || this.bot.child_bots[0], [Validators.required]],
        "reply_message": [formData.else_action.reply_message || "Please wait while i redirect you to luke skywalker",[this.validationOfOutputFormReplyMessage.bind(this, typeFormControl)]]
      },{validators:this.validationOfOutputForm.bind(this)})
    });
    (<FormGroup>this.rulesForm.get('else_action')).addControl('type', typeFormControl);
    typeFormControl.valueChanges.subscribe((f)=>{
      this.rulesForm.get('else_action').get('reply_message').updateValueAndValidity({onlySelf:true});
    })
  }
  getAndRules(ruleData): FormGroup {
    let getOrRulesFGArray = []
    for (let andRuleData of ruleData.condition['and']){
      getOrRulesFGArray.push(this.getOrRulesFG(andRuleData));
    }
    const typeFormControl = this.formBuilder.control(ruleData.action.type || "bot",Validators.required)
    const andRules = this.formBuilder.group({
      and: this.formBuilder.array(getOrRulesFGArray),
      output: this.formBuilder.group({
        "destination_bot_id":[ruleData.action.destination_bot_id || this.bot.child_bots[0], [Validators.required]],
        "reply_message": [ruleData.action.reply_message || "Please wait while i redirect you to luke skywalker",[this.validationOfOutputFormReplyMessage.bind(this, typeFormControl)]]
      },{validators:this.validationOfOutputForm.bind(this)})
    });
    (<FormGroup>andRules.get('output')).addControl('type', typeFormControl);
    typeFormControl.valueChanges.subscribe((f)=>{
      andRules.get('output').get('reply_message').updateValueAndValidity({onlySelf:true});
    })
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
          if(/^[-+]?\d+$/.test(rValue)){
            rightOperentType = 'integer'
          }
          else{
            rightOperentType = 'float'
          }

        }
      }catch (e) {
        rightOperentType = 'string';
      }
    }
    let newTypeArray = this.filterTypeArrayPipe.transform(this.typeArray,OperationType);
    if(!newTypeArray.find((f) => { return f == rightOperentType})){
      rightOperentType = newTypeArray[0];
    }
    let x =  this.formBuilder.group({
      type: [rightOperentType, [Validators.required]],
      operator: [OperationType , [Validators.required]],
      left_operand: [orRuleData[givenOperation][0].var,[Validators.required]],
      right_operand: [orRuleData[givenOperation][1], [Validators.required]],
    },{validators:this.validationOfTypeOfRightOperator});
    x.get('operator').valueChanges.subscribe( val => {
      let newTypeArrayinSubscription = this.filterTypeArrayPipe.transform(this.typeArray,val);
      if(!newTypeArrayinSubscription.find((f) => { return f == x.get('type').value})){
        x.get('type').setValue(newTypeArrayinSubscription[0]);
      }
      if(val === 'exist' || val === "not_exist"){
        x.get('right_operand').setValue(true);
      }
      if(val === "not_exist"){
        x.get('right_operand').setValue(false);
      }
    })
    return x;
  }
  validationOfOutputForm(group: FormGroup){
    if(group.get('type')){
      if(group.get('type').value === "bot" && this.botListofChild){
        if(this.botListofChild.find(bot => {return bot.id === group.get('destination_bot_id').value })){
          return null;
        }else{
          return {botNotPresent : "Please select a valid child bot"}
        }
      }
    }
  }
  validationOfOutputFormReplyMessage(typeFormControl, group:FormGroup){
    if(typeFormControl.value === "message"){
      return Validators.required(group)
    }
  }
  validationOfTypeOfRightOperator(group: FormGroup){
    let rightStr =  group.get('right_operand').value;
    if(group.get('type').value === 'string'){
      return null;
    }else if(group.get('type').value === 'variable'){
      return /^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(rightStr) ? null : {rightTypeError : "this is not a variable name"};
    }else if(group.get('type').value === 'integer'){
      return  /^[-+]?\d+$/.test(rightStr) ? null : {rightTypeError : "this is not an integer"};
    }else if(group.get('type').value === 'boolean'){
      return (rightStr === 'true' || rightStr === 'false' || rightStr === false || rightStr === true) ? null : {rightTypeError : "this is not a boolean"} ;
    }else if(group.get('type').value === 'float'){
      return /[+-]?([0-9]*[.])?[0-9]+$/.test(rightStr) ?  null : {rightTypeError : "this is not an float"};
    }else if(group.get('type').value === 'array'){
      try {
        let rValue = JSON.parse(rightStr);
        return  Array.isArray(rValue) ? null : {rightTypeError : "this is not an array"};
      }catch (e) {
        return {rightTypeError : "this is not an array"}
      }
    }else if(group.get('type').value === 'dictionary'){
      return null;
    }
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
