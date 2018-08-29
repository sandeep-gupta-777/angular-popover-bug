import { Pipe, PipeTransform } from '@angular/core';
import {IBot} from './core/interfaces/IBot';

@Pipe({
  name: 'sortObjectArray'
})
export class SortObjectArrayPipe implements PipeTransform {
/*TODO: make it more generic, as of now its just sorting by created by*/
  transform(botList: IBot[], args?: any): any {
    return botList.sort((bot1, bot2)=>{
      return bot1.created_at > bot2.created_at ?-1:1
    });
  }

}
