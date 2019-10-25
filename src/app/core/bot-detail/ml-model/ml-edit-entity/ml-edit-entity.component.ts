import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
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
  @Input() edittingData : IEntitiesItem;
  editEntityForm : FormGroup;
  @Input() entity_types;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits= [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
  ];
  ngOnInit() {
    this.makeEditEntityForm();
  }
  makeEditEntityForm(){
    let entityValueArray = []
    for (let ruleData of this.edittingData.data.values){
      entityValueArray.push(this.getSingleEntityForm(ruleData));
    }

    this.editEntityForm = this.formBuilder.group({
      entity_id: this.edittingData.entity_id,
      data : this.formBuilder.group({values:this.formBuilder.array(entityValueArray)}),
      name: this.edittingData.name,
      system_entity: this.edittingData.system_entity,
      type: this.edittingData.type
    });
    debugger;
  }
  getSingleEntityForm(ruleData) {
    return this.formBuilder.group({
      synonyms: this.formBuilder.array(ruleData.synonyms),
      value: ruleData.value
    })
  }
}
