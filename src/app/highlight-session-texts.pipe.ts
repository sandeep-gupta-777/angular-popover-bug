import {Pipe, PipeTransform} from '@angular/core';
import index from '@angular/cli/lib/cli';
import {ISessionMessageItem} from '../interfaces/sessions';
import {ITxnSessionMessagesItem} from './serialize-session-message.pipe';
import {UtilityService} from './utility.service';

@Pipe({
  name: 'highlightSessionTexts'
})
export class HighlightSessionTexts implements PipeTransform {

  constructor(private utilityService: UtilityService) {
  }

  transform(txnSessionMessagesItems: ITxnSessionMessagesItem[], messageSearchKeyword: string): ITxnSessionMessagesItem[] {
    if (!Array.isArray(txnSessionMessagesItems) || txnSessionMessagesItems.length < 1 || !messageSearchKeyword) return txnSessionMessagesItems;

    messageSearchKeyword = messageSearchKeyword.trim();

    txnSessionMessagesItems = this.utilityService.createDeepClone(txnSessionMessagesItems);//JSON.parse(JSON.stringify(arr));

    const modifiedarr = txnSessionMessagesItems.map((txnSessionMessagesItem: ITxnSessionMessagesItem) => {
      txnSessionMessagesItem.convoList = txnSessionMessagesItem.convoList.map((sessionMessageItem: ISessionMessageItem) => {
        return this.highlightMatchedTextInSessionMessageItem(sessionMessageItem, messageSearchKeyword);
      });
      this.highlightMatchedTransactionId(txnSessionMessagesItem, messageSearchKeyword);
      return txnSessionMessagesItem;
    });
    return modifiedarr;
  }

  highlightMatchedTextInSessionMessageItem(sessionMessageItem: ISessionMessageItem, messageSearchKeyword: string): ISessionMessageItem {
    debugger;
    if (this.utilityService.doesStringIncludesSubstring(sessionMessageItem.message, messageSearchKeyword)) {
      // sessionMessageItem.messageByHuman = sessionMessageItem.message.replace(messageSearchKeyword, `<span class="text-highlight">${messageSearchKeyword}</span>`);
      sessionMessageItem.messageByHuman = UtilityService.highlightText(sessionMessageItem.message,messageSearchKeyword);
    }
    // if (sessionMessageItem.message && sessionMessageItem.message[0].text && sessionMessageItem.message[0].text.includes(messageSearchKeyword)) {
    if (sessionMessageItem.message && sessionMessageItem.message[0].text) {
      let match = this.utilityService.doesStringIncludesSubstring(sessionMessageItem.message[0].text, messageSearchKeyword);
      if(match){
        // sessionMessageItem.message[0].text = sessionMessageItem.message[0].text.replace(match, `<span class="text-highlight">${match}</span>`);
        sessionMessageItem.message[0].text = UtilityService.highlightText(sessionMessageItem.message[0].text, messageSearchKeyword);
      }
    }
    return sessionMessageItem;
  }

  highlightMatchedTransactionId(txnSessionMessagesItem, messageSearchKeyword: string) {
    if (txnSessionMessagesItem.transaction_id.includes(messageSearchKeyword)) {
      txnSessionMessagesItem.transaction_id_highlighting = txnSessionMessagesItem.transaction_id.replace(messageSearchKeyword, `<span class="text-highlight">${messageSearchKeyword}</span>`);
    }
  }


}
