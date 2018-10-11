import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe implements PipeTransform {

  transform(arr: any[], key: string): any {

    return arr.sort((obj1,obj2)=>{
      return obj2[key]-obj1[key];
    });
  }

}
