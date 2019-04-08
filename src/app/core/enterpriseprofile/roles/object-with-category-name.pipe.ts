import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectWithCategoryName'
})
export class ObjectWithCategoryNamePipe implements PipeTransform {

  transform(arr: any[], key: string): any {

    return arr.filter((obj) => {
      return obj["category"] == key;
    });
  }

}
