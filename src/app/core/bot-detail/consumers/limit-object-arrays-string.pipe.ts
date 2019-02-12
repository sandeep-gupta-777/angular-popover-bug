import { Pipe, PipeTransform } from '@angular/core';
import {IConsumerItem} from '../../../../interfaces/consumer';

@Pipe({
  name: 'limitObjectArraysString'
})
export class LimitObjectArraysStringPipe implements PipeTransform {

  transform(consumerResults: IConsumerItem[], args?: any): any {
    if (!consumerResults) { return; }
    consumerResults = JSON.parse(JSON.stringify(consumerResults));

    const x = consumerResults.map((consumer) => {
      for (const key in consumer) {
        if (consumer[key] && consumer[key].length &&  consumer[key].length > 32) {
        consumer[key] = consumer[key].substring(1, 15) + '...';
        }
      }
      return consumer;
    });
    return x;
  }

}
