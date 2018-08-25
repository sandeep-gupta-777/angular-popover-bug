import {Pipe, PipeTransform} from '@angular/core';
import index from '@angular/cli/lib/cli';
import {ISessionMessageItem} from '../interfaces/sessions';

@Pipe({
  name: 'filterObjectArray'
})
export class FilterObjectArrayPipe implements PipeTransform {

  transform(arr: ISessionMessageItem[], messageSearchKeyword: string): any {
    messageSearchKeyword = messageSearchKeyword.trim();

    /*creating a deep copy of the arr, in order to avoid mutating arr*/
    arr = JSON.parse(JSON.stringify(arr));

    if(!Array.isArray(arr) || arr.length<1 || !messageSearchKeyword) return arr;

    let modifiedarr =  arr.map((objItem: ISessionMessageItem) => {
      if(objItem.message && objItem.message.includes(messageSearchKeyword)){
        objItem.message = objItem.message.replace(messageSearchKeyword, `<span class="text-highlight">${messageSearchKeyword}</span>`);
      }
      if(objItem.message && objItem.message[0].text && objItem.message[0].text.includes(messageSearchKeyword)){
        objItem.message[0].text = objItem.message[0].text.replace(messageSearchKeyword, `<span class="text-highlight">${messageSearchKeyword}</span>`);
      }
      return objItem;
    });
    return modifiedarr;
  }


}
