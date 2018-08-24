import {Pipe, PipeTransform} from '@angular/core';
import index from '@angular/cli/lib/cli';
import {ISessionMessageItem} from '../interfaces/sessions';

@Pipe({
  name: 'filterObjectArray'
})
export class FilterObjectArrayPipe implements PipeTransform {

  transform(arr: ISessionMessageItem[], messageSearchKeyword: string): any {
    // ;
    if(!Array.isArray(arr) || arr.length<1 || !messageSearchKeyword) return arr;

    return arr.filter((objItem: ISessionMessageItem) => {
      let mainString = objItem.user_type==='human'? objItem.message: objItem.message[0].text;
      return mainString.includes(messageSearchKeyword);
    });
  }

}
;
