import {Pipe, PipeTransform} from '@angular/core';
import {IBot} from './core/interfaces/IBot';
import {SortService} from './sort.service';

@Pipe({
  name: 'sortBots'
})
export class SortBotsPipe implements PipeTransform {
  /*TODO: make it more generic, as of now its just sorting by created by*/
  transform(botList: IBot[], args?: any): any {
    if (!botList) { return; }
    return botList.sort(SortService.sortBots);
  }
}
