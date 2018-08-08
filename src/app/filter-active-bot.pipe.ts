import { Pipe, PipeTransform } from '@angular/core';
import { IBotVersionData } from './core/interfaces/IBot';

@Pipe({
  name: 'filterActiveBot'
})
export class FilterActiveBotPipe implements PipeTransform {

  transform(value: IBotVersionData[], id: any): any {
    return value.filter((value)=>{
      return value.id !== id;
    })
  }

}
