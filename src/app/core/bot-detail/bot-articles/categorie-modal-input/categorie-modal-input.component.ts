import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICategoryMappingItem } from 'src/app/core/interfaces/faqbots';

@Component({
  selector: 'app-categorie-modal-input',
  templateUrl: './categorie-modal-input.component.html',
  styleUrls: ['./categorie-modal-input.component.scss']
})
export class CategorieModalInputComponent implements OnInit {

  constructor() { }
  @Input() typeIsEdit;
  @Input() categorieClone: ICategoryMappingItem;
  @Input() categorieMappingReal: ICategoryMappingItem[];
  @Output() categoryUpdate = new EventEmitter();
  @Output() categoryDelete = new EventEmitter();
  @Output() categoryCreate = new EventEmitter();
  @Output() makeShowCreateNewCategoryInputFalse = new EventEmitter();
  @Output() cancelCategoryEditToUnchangedValue = new EventEmitter();
  editMode = false;
  newCategorieName: string = "";
  ngOnInit() {
    if (this.typeIsEdit) {
      this.editMode = false;
    }
    else {
      this.editMode = true;
    }
  }

  isNameChanged() {
    let name = this.categorieMappingReal.find((cat) => { return cat.category_id == this.categorieClone.category_id }).name;
    return name == this.categorieClone.name ;
  }

  categoryUpdateClicked() {
    if(!( this.typeIsEdit && this.isNameChanged())){
      if (this.typeIsEdit) {
        const body = {
          'category_name': this.categorieClone.name,
          'category_id': this.categorieClone.category_id
        }
        this.categoryUpdate.emit(body);
        this.cancelClicked(false)
      }
      else {
        const body = {
          'category_name': this.newCategorieName,
        }
        this.categoryCreate.emit(body);
        this.cancelClicked(false)
      }
    }
    

  }
  categoryDeleteClicked() {
    const body = {
      'category_id': this.categorieClone.category_id
    }
    this.categoryDelete.emit(body);
  }
  cancelClicked(b) {
    if (this.categorieClone) {
      this.editMode = false;
      if(b){
        this.cancelCategoryEditToUnchangedValue.emit();
      }
    }
    else {
      this.makeShowCreateNewCategoryInputFalse.emit();
    }
  }

}
