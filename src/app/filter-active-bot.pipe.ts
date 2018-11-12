import { Pipe, PipeTransform } from '@angular/core';
import { IBotVersionData } from './core/interfaces/IBot';

@Pipe({
  name: 'filterActiveBot'
})
export class FilterActiveBotPipe implements PipeTransform {

  transform(value: IBotVersionData[], id: any): any {
    return value
      .filter((value) => {
      return value.id !== id;
    })
      .sort((item1, item2) => {
        return item1.created_at > item2.created_at ? 1 : -1;
      });
  }

}
