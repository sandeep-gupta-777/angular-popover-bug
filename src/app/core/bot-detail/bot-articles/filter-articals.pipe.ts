import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArticals'
})
export class FilterArticalsPipe implements PipeTransform {

  transform(value: any[], arr: []): any {

    if(!value) return;
    if(!arr || arr.length < 1) return value;
    return value.filter((section)=>{
      return !!arr.find(id => {return section.category_id == id} )
    })

  }

}
