import {Pipe, PipeTransform} from '@angular/core';
import {ISessionMessageItem} from '../interfaces/sessions';

export interface ITxnSessionMessagesItem {
  transaction_id: string;
  transaction_id_highlighting?: string; /*to be used for highlighting purposes*/
  convoList: ISessionMessageItem[];
}

@Pipe({
  name: 'serializeSessionMessage'
})
export class SerializeSessionMessagePipe implements PipeTransform {

  /*this pipe will create new array for each txn id which will be storing convo for that txn id*/
  transform(sessionMessages: ISessionMessageItem[], args?: any): ITxnSessionMessagesItem[] {

    if (!sessionMessages) { return; }
    const txnConversationItems: ITxnSessionMessagesItem[] = [];
    sessionMessages.forEach((sessionMessage) => {
      const txnId = sessionMessage.transaction_id;
      const conversationObjectForGivenTxnId: ITxnSessionMessagesItem = txnConversationItems.find(item => item.transaction_id === txnId);
      if (conversationObjectForGivenTxnId && conversationObjectForGivenTxnId.convoList) {
        conversationObjectForGivenTxnId.convoList.push(sessionMessage);
      } else {
        txnConversationItems.push({transaction_id: txnId, convoList: [sessionMessage]});
      }
    });

    return txnConversationItems;
  }

}
