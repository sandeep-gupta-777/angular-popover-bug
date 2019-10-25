import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {IBot} from "../../interfaces/IBot";
import {IHeaderData} from "../../../../interfaces/header-data";
import {ServerService} from "../../../server.service";
import {ConstantsService} from "../../../constants.service";
import {IEntitiesItem, IIntentsItem, IMLCorpusResult} from "../../interfaces/mlBots";
import {is} from "tslint-sonarts/lib/utils/nodes";
import {UtilityService} from "../../../utility.service";
import {MatDialog} from "@angular/material";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {subscribeOn} from "rxjs/operators";

@Component({
  selector: 'app-ml-model',
  templateUrl: './ml-model.component.html',
  styleUrls: ['./ml-model.component.scss']
})
export class MLModelComponent implements OnInit {

  constructor(
    private constantsService : ConstantsService,
    private serverService : ServerService,
    private utilityService : UtilityService,
    private matDialog : MatDialog,
    private formBuilder: FormBuilder
  ) { }
  @Input() bot: IBot;
  intentList : IIntentsItem[];
  entitiesList : IEntitiesItem[];
  selectedTabIndex : number = 0;
  dialogRefWrapper = {ref: null};
  entity_types : any[];
  modalForm : FormGroup;
  EditMode : string = "";
  edittingData : IEntitiesItem;
  ngOnInit() {
    this.getAndSetMlCorpus();
    this.creatModalForm();
    this.setMLEntityTypes();
  }
  creatModalForm(){
    this.modalForm = this.formBuilder.group({
      'entity_type' : ["",Validators.required],
      'entity_name' : ["",Validators.required],
      'entity_value' : "",
      'entity_id': ""
    },{validator: this.validationOfEntityModal})
  }
  setMLEntityTypes(){
    let url = this.constantsService.getMLEntityTypes();
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
    this.serverService.makeGetReq({url,headerData}).subscribe((value) => {
      this.entity_types = value.entity_types;
    })
  }
  getAndSetMlCorpus(){
    let url = this.constantsService.getMLCorpus();
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
    this.serverService.makeGetReq({url,headerData}).subscribe((val : IMLCorpusResult)=>{
      this.intentList = val.objects[0].intents;
      this.entitiesList = val.objects[0].entities;
      debugger;
    })
  }
  addNewIntentOrEntity(isIntent,template: TemplateRef<any>){
    if(isIntent === 0){


    }
    if(isIntent === 1){
      this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
    }
  }

  submitEntityForm(EntityObj){
    let url;
    debugger;
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
    let body = {
      "name" : EntityObj.entity_name,
      "type": EntityObj.entity_type,
      "data": {},
      "color": ""
    };
    if(EntityObj.entity_type === 'regex'){
      body['data'] = {'pattern':EntityObj.entity_value}
    }
    if(EntityObj.entity_type === 'custom'){
      body['data'] =
        {"values":[
            {
              "value": EntityObj.entity_value,
              "synonyms": [EntityObj.entity_value]
            }
          ]
        }
    }
    if(EntityObj.entity_id){
      url = this.constantsService.updateMLEntity();
      body['entity_id'] = EntityObj.entity_id;
    }else{
      url = this.constantsService.creatMLEntity();
    }
    this.serverService.makePostReq({headerData,url, body}).subscribe((val:any)=>{
      if(EntityObj.entity_id){
        for( var i = 0; i < this.entitiesList.length; i++){
          if ( this.entitiesList[i].entity_id === EntityObj.entity_id) {
            this.entitiesList.splice(i, 1);
            break;
          }
        }
        this.entitiesList = [val.updated_entity,...this.entitiesList];
        this.utilityService.showSuccessToaster("Entity updated");
      }else{
        this.entitiesList = [val.new_entity,...this.entitiesList]
        this.utilityService.showSuccessToaster("New entity added");
      }

    })
  }
  editEntityClicked(data,template){
    debugger;
    let x =data.data.type == 'custom' ? data.data.data.values[0].value : "";
    if(!x){
      this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
      setTimeout(()=>{
        this.modalForm.patchValue(
          {
            'entity_type' : data.data.type,
            'entity_name' : data.data.name,
            'entity_value' : data.data.type == 'regex' ?
              data.data.data.pattern :
              (data.data.type == 'custom' ? data.data.data.values[0].value : "") ,
            'entity_id': data.data.entity_id
          })
      });
    }
    else{
      this.EditMode = 'entity';
      this.edittingData = data.data;

    }
  }
  deleteEntityClicked(data){
    let url = this.constantsService.deleteMLEntity();
    const headerData: IHeaderData = {
      'bot-access-token': ServerService.getBotTokenById(this.bot.id)
    };
    let body = {'entity_id':data.data.entity_id};
    this.serverService.makePostReq({headerData,url,body})
    .subscribe((val)=>{
      for( var i = 0; i < this.entitiesList.length; i++){
        if ( this.entitiesList[i].entity_id === body.entity_id) {
          this.entitiesList.splice(i, 1);
          break;
        }
      }
      this.entitiesList = [...this.entitiesList];
      this.utilityService.showSuccessToaster("Entity deleted");
    })
  }
  validationOfEntityModal(group: FormGroup){
    let type =  group.get('entity_type').value;
    if(type === 'regex' || type === 'custom') {
      return group.get('entity_value').value ? null : {error : true} ;
    }
    return null;
  }
}
