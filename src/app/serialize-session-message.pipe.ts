import {Pipe, PipeTransform} from '@angular/core';
import {ISessionMessageItem} from '../interfaces/sessions';
import {UtilityService} from './utility.service';

export interface ITxnSessionMessagesItem {
  transaction_id: string;
  transaction_id_highlighting?: string; /*to be used for highlighting purposes*/
  convoList: ISessionMessageItem[];
}

@Pipe({
  name: 'serializeSessionMessage'
})
export class SerializeSessionMessagePipe implements PipeTransform {

  /*this pipe will create new array for each txn roomId which will be storing convo for that txn roomId*/
  transform(sessionMessages: ISessionMessageItem[], args?: any): ITxnSessionMessagesItem[] {

    if (!sessionMessages) {
      return;
    }
    const txnConversationItems: ITxnSessionMessagesItem[] = [];
    sessionMessages.forEach((sessionMessage) => {
      // sessionMessage.message_store.response_language
      const txnId = sessionMessage.transaction_id;
      const conversationObjectForGivenTxnId: ITxnSessionMessagesItem = txnConversationItems.find(item => item.transaction_id === txnId);
      if (typeof sessionMessage.message === 'string') {
        sessionMessage.message = UtilityService.sanitizeHTML(sessionMessage.message);
      }
      if (conversationObjectForGivenTxnId && conversationObjectForGivenTxnId.convoList) {
        if (sessionMessage.message && sessionMessage.message[0] && sessionMessage.message[0].text) {
          sessionMessage.message[0].text = UtilityService.sanitizeHTML(sessionMessage.message[0].text);
        }
        conversationObjectForGivenTxnId.convoList.push(sessionMessage);
      } else {
        txnConversationItems.push({transaction_id: txnId, convoList: [sessionMessage]});
      }
    });

    return txnConversationItems;
  }

}
