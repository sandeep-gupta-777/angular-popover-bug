import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryIdToName'
})
export class CategoryIdToNamePipe implements PipeTransform {

  transform(value: any, category_mapping?: any): any {
    if(!value || !category_mapping) return;

    return category_mapping.find((category) => {
      return category.category_id == value;
    }).name;

  }

}
