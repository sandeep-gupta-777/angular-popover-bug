import {Pipe, PipeTransform} from '@angular/core';
import index from '@angular/cli/lib/cli';
import {ISessionMessageItem} from '../interfaces/sessions';
import {ITxnSessionMessagesItem} from './serialize-session-message.pipe';

@Pipe({
  name: 'filterObjectArray'
})
export class FilterObjectArrayPipe implements PipeTransform {

  transform(arr: ITxnSessionMessagesItem[], messageSearchKeyword: string): ITxnSessionMessagesItem[] {
    if (!arr) { return; }
    if (!messageSearchKeyword) { return arr; }
    messageSearchKeyword = messageSearchKeyword.trim();

    /*creating a deep copy of the arr, in order to avoid mutating arr*/
    arr = JSON.parse(JSON.stringify(arr));

    if (!Array.isArray(arr) || arr.length < 1 || !messageSearchKeyword) { return arr; }

    const modifiedarr =  arr.map((txnSessionMessagesItem: ITxnSessionMessagesItem) => {
      txnSessionMessagesItem.convoList = txnSessionMessagesItem.convoList.map((sessionMessageItem: ISessionMessageItem) => {
        if (sessionMessageItem.message && sessionMessageItem.message.includes(messageSearchKeyword)) {
          sessionMessageItem.messageByHuman = sessionMessageItem.message.replace(messageSearchKeyword, `<span class="text-highlight">${messageSearchKeyword}</span>`);
        }
        if (sessionMessageItem.message && sessionMessageItem.message[0].text && sessionMessageItem.message[0].text.includes(messageSearchKeyword)) {
          sessionMessageItem.message[0].text = sessionMessageItem.message[0].text.replace(messageSearchKeyword, `<span class="text-highlight">${messageSearchKeyword}</span>`);
        }
        return sessionMessageItem;
      });

      if (txnSessionMessagesItem.transaction_id.includes(messageSearchKeyword)) {
        txnSessionMessagesItem.transaction_id_highlighting = txnSessionMessagesItem.transaction_id.replace(messageSearchKeyword, `<span class="text-highlight">${messageSearchKeyword}</span>`);
      }
      return txnSessionMessagesItem;
    });
    return modifiedarr;
  }


}
