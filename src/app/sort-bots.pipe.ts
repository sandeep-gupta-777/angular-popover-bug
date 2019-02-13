import {Pipe, PipeTransform} from '@angular/core';
import {IBot} from './core/interfaces/IBot';

@Pipe({
  name: 'sortBots'
})
export class SortBotsPipe implements PipeTransform {
  /*TODO: make it more generic, as of now its just sorting by created by*/
  transform(botList: IBot[], args?: any): any {
    if (!botList) { return; }
    // console.log(botList);
    const x = botList
      .sort((bot1, bot2) => {
        if (bot1.store_isPinned && !bot2.store_isPinned) {
          return -1;
        } else if (!bot1.store_isPinned && bot2.store_isPinned) {
          return 1;
        } else {
          return bot1.updated_at > bot2.updated_at ? -1 : 1;
        }
      });

    return x;
  }

}
