import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICategoryMappingItem } from 'src/app/core/interfaces/faqbots';

@Component({
  selector: 'app-categorie-modal-input',
  templateUrl: './categorie-modal-input.component.html',
  styleUrls: ['./categorie-modal-input.component.scss']
})
export class CategorieModalInputComponent implements OnInit {

  constructor() { }
  @Input() categorieClone : ICategoryMappingItem;
  @Input() categorieMappingReal : ICategoryMappingItem[];
  @Output()categoryUpdate = new EventEmitter();
  editMode = false;

  ngOnInit() {
  }

  isNameChanged(){
    let name = this.categorieMappingReal.find((cat)=> {return cat.category_id == this.categorieClone.category_id}).name;

    return name == this.categorieClone.name;
  }

  categoryUpdateClicked(){
    const body =  {
      'category_name': this.categorieClone.name,
      'category_id': this.categorieClone.category_id
  }
    this.categoryUpdate.emit(body);
  }

}
