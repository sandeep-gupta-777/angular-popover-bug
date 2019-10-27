import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IEntitiesItem} from "../../../interfaces/mlBots";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {COMMA, ENTER} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-ml-edit-entity',
  templateUrl: './ml-edit-entity.component.html',
  styleUrls: ['./ml-edit-entity.component.scss']
})
export class MlEditEntityComponent implements OnInit {

  constructor(
    private formBuilder : FormBuilder
  ) { }
  _edittingData : IEntitiesItem;
  @Input() set edittingData(val){
    debugger;
    val = { "color": "", "created_at": 1571990350740,
      "entity_id": "5", "name": "asdasd", "system_entity": false, "type": "custom", "updated_at": 1571990350740,
      "data": { "values": [
          { "synonyms": [ "asdasdf1","asdasdf2","asdasdf3","asdasdf4","asdasdf5","asdasdf6" ], "value": "asdasdf1" },
          { "synonyms": [ "asdasdf1","asdasdf2","asdasdf3","asdasdf4","asdasdf5","asdasdf6" ], "value": "asdasdf2" },
          { "synonyms": [ "asdasdf1","asdasdf2","asdasdf3","asdasdf4","asdasdf5","asdasdf6" ], "value": "asdasdf3" },
          { "synonyms": [ "asdasdf1","asdasdf2","asdasdf3","asdasdf4","asdasdf5","asdasdf6" ], "value": "asdasdf4" },
          { "synonyms": [ "asdasdf1","asdasdf2","asdasdf3","asdasdf4","asdasdf5","asdasdf6" ], "value": "asdasdf5" }
          ] }}
    this._edittingData = val;
    this.makeEditEntityForm();
  } ;
  editEntityForm : FormGroup;
  @Input() entity_types;
  @Output() saveCustomEntity = new EventEmitter();
  @Output() saveAndTrainCustomEntity = new EventEmitter();
  @Output() goBackToTableView = new EventEmitter();
  @Output() deleteCustomEntity = new EventEmitter();
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  NewEntityObjSynonyms : string[] = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];
  ngOnInit() {

  }
  makeEditEntityForm(){
    let entityValueArray = []
    for (let ruleData of this._edittingData.data.values){
      entityValueArray.push(this.getSingleEntityForm(ruleData));
    }

    this.editEntityForm = this.formBuilder.group({
      entity_id: this._edittingData.entity_id,
      data : this.formBuilder.group({values:this.formBuilder.array(entityValueArray)}),
      name: this._edittingData.name,
      system_entity: this._edittingData.system_entity,
      type: this._edittingData.type
    });
    debugger;
  }
  getSingleEntityForm(ruleData) {
    return this.formBuilder.group({
      synonyms: this.formBuilder.array(ruleData.synonyms),
      value: ruleData.value
    })
  }
  deleteSynonym(index,formArr){
    debugger;
    formArr.removeAt(index);
  }
  addSynonym(str,formArr){
    debugger;
    if((str.value || '').trim()){
      formArr.push(new FormControl(str.value, Validators.required));
      if (str.input) {
        str.input.value = '';
      }
    }

  }

  addNewSynonym(str){
    if((str.value || '').trim()){
      this.NewEntityObjSynonyms.push(str.value);
      if (str.input) {
        str.input.value = '';
      }
      this.NewEntityObjSynonyms = [...this.NewEntityObjSynonyms]
    }
  }
  deleteNewSynonym(index){
    this.NewEntityObjSynonyms.splice(index, 1);
    this.NewEntityObjSynonyms= [...this.NewEntityObjSynonyms];
  }
  addNewEntity(obj){
    let body = {
      value : obj.value,
      synonyms : this.NewEntityObjSynonyms
    }
    this.editEntityForm.get('data').get('values').push(this.getSingleEntityForm(body));
    this.NewEntityObjSynonyms = [];
    this.NewEntityObjSynonyms = [...this.NewEntityObjSynonyms];
  }
  saveEntity(){
    this.saveCustomEntity.emit(this.editEntityForm.value);
  }
  saveAndTrain(){
    this.saveAndTrainCustomEntity.emit(this.editEntityForm.value);
  }
  deleteEntity(){
    this.deleteCustomEntity.emit(
      {
        data : { 'entity_id' : this.editEntityForm.value.entity_id}
      }
    );
  }
  goBackToTableViewClicked(){
    this.goBackToTableView.emit();
  }
}
