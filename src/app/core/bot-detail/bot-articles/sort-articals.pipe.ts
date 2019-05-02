import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortArticals'
})
export class SortArticalsPipe implements PipeTransform {

  transform(value: any[], sort_by_key: any, category_mapping): any {
    if(!sort_by_key || !value || !category_mapping) return value;
    if(sort_by_key == 'updated_at') {

      value.sort(function(a, b){return  - a.updated_at + b.updated_at});
    }
    else if(sort_by_key == 'category_id'){
      value.sort(function(a, b){
        let aVal = category_mapping.find((category) => {
          return category.category_id == a.category_id;
        }).name.toUpperCase();
        let bVal = category_mapping.find((category) => {
          return category.category_id == b.category_id;
        }).name.toUpperCase();

        if (aVal < bVal)
          return -1;
        if (aVal > bVal)
          return 1;
        return 0;
      })
    }


  return value;
  }

}
