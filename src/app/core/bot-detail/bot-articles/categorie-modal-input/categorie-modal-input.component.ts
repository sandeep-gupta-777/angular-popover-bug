import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ICategoryMappingItem} from 'src/app/core/interfaces/faqbots';
import {UtilityService} from 'src/app/utility.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormsService} from '../../../../forms.service';

@Component({
  selector: 'app-categorie-modal-input',
  templateUrl: './categorie-modal-input.component.html',
  styleUrls: ['./categorie-modal-input.component.scss']
})
export class CategorieModalInputComponent implements OnInit {

  constructor(private utilityService: UtilityService, private formBuilder: FormBuilder) {
  }

  @Input() typeIsEdit;
  @Input() categorieClone: ICategoryMappingItem;
  @Input() categorieMappingReal: ICategoryMappingItem[];
  @Output() categoryUpdate = new EventEmitter();
  @Output() categoryDelete = new EventEmitter();
  @Output() categoryCreate = new EventEmitter();
  @Output() makeShowCreateNewCategoryInputFalse = new EventEmitter();
  @Output() cancelCategoryEditToUnchangedValue = new EventEmitter();
  form: FormGroup;
  editMode = false;
  newCategorieName = '';

  ngOnInit() {
    if (this.typeIsEdit) {
      this.editMode = false;
    } else {
      this.editMode = true;
    }
    this.form = this.formBuilder.group({
      name: [this.categorieClone && this.categorieClone.name, [ FormsService.lengthValidator({min: 1, max: 64}), FormsService.startWithAlphanumericValidator()]]
    });
    this.form.valueChanges.subscribe((formData) => {
      const name = formData.name;
      if (this.categorieClone && this.categorieClone.name) {
        this.categorieClone.name = name;
      }
      this.newCategorieName = name;
    });
  }

  isNameChanged() {
    const name = this.categorieMappingReal.find((cat) => cat.category_id === this.categorieClone.category_id).name;
    return name === this.categorieClone.name;
  }

  categoryUpdateClicked() {
    if (!(this.typeIsEdit && this.isNameChanged())) {
      if (this.typeIsEdit) {
        const body = {
          'category_name': this.categorieClone.name,
          'category_id': this.categorieClone.category_id
        };
        if (body.category_name.trim().length === 0) {
          this.utilityService.showErrorToaster('Category name can not be empty');
          this.cancelClicked(true);
        } else {
          this.categoryUpdate.emit(body);
          this.cancelClicked(false);
        }

      } else {
        const body = {
          'category_name': this.newCategorieName,
        };
        if (body.category_name.trim().length === 0) {
          this.utilityService.showErrorToaster('Category name can not be empty');
          this.cancelClicked(true);
        } else {
          this.categoryCreate.emit(body);
          this.cancelClicked(false);
        }


      }
    }


  }

  categoryDeleteClicked() {
    const body = {
      'category_id': this.categorieClone.category_id
    };
    this.categoryDelete.emit(body);
  }

  cancelClicked(b) {
    if (this.categorieClone) {
      this.editMode = false;
      if (b) {
        this.cancelCategoryEditToUnchangedValue.emit();
      }
    } else {
      this.makeShowCreateNewCategoryInputFalse.emit();
    }
  }

}
