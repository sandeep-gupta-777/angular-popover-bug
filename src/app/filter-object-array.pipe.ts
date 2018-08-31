import {Pipe, PipeTransform} from '@angular/core';
import index from '@angular/cli/lib/cli';
import {ISessionMessageItem} from '../interfaces/sessions';
import {ITxnSessionMessagesItem} from './serialize-session-message.pipe';

@Pipe({
  name: 'filterObjectArray'
})
export class FilterObjectArrayPipe implements PipeTransform {

  transform(arr: ITxnSessionMessagesItem[], messageSearchKeyword: string): ITxnSessionMessagesItem[] {
    if(!arr) return;
    if(!messageSearchKeyword) return arr;
    messageSearchKeyword = messageSearchKeyword.trim();

    /*creating a deep copy of the arr, in order to avoid mutating arr*/
    arr = JSON.parse(JSON.stringify(arr));

    if(!Array.isArray(arr) || arr.length<1 || !messageSearchKeyword) return arr;

    let modifiedarr =  arr.map((txnSessionMessagesItem: ITxnSessionMessagesItem) => {
      txnSessionMessagesItem.convoList = txnSessionMessagesItem.convoList.map((sessionMessageItem:ISessionMessageItem)=>{
        if(sessionMessageItem.message && sessionMessageItem.message.includes(messageSearchKeyword)){
          sessionMessageItem.message = sessionMessageItem.message.replace(messageSearchKeyword, `<span class="text-highlight">${messageSearchKeyword}</span>`);
        }
        if(sessionMessageItem.message && sessionMessageItem.message[0].text && sessionMessageItem.message[0].text.includes(messageSearchKeyword)){
          sessionMessageItem.message[0].text = sessionMessageItem.message[0].text.replace(messageSearchKeyword, `<span class="text-highlight">${messageSearchKeyword}</span>`);
        }
        return sessionMessageItem;
      })
      return txnSessionMessagesItem;
    });
    return modifiedarr;
  }


}
