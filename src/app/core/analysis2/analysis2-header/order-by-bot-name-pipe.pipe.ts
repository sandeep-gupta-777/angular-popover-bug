import {Pipe, PipeTransform} from '@angular/core';
import {IBot} from '../../interfaces/IBot';

@Pipe({
  name: 'orderByBotNamePipe'
})
export class OrderByBotNamePipePipe implements PipeTransform {

  transform(value: IBot[], args?: any): any {
    return value.sort(function (a, b) {
      let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
      if (nameA < nameB)
      {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    return null;
  }

}
