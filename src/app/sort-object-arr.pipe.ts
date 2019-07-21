import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortObjectArr'
})
export class SortObjectArrPipe implements PipeTransform {

  transform(objs: object[], key: string): any {
    const x =  objs.sort((v1, v2) => {
      return   v2[key] - v1[key];
    });
    console.log(x);
    return x;
  }

}
