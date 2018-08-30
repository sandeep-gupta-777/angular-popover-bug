import { Pipe, PipeTransform } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ViewBotStateModel } from './core/view-bots/ngxs/view-bot.state';

@Pipe({
  name: 'botIdToName'
})
export class BotIdToNamePipe implements PipeTransform {

  @Select() botlist$: Observable<ViewBotStateModel>;
  transform(id: any, args?: any): any {
    return this.botlist$.map((botlist)=>{
      return botlist.allBotList.find((bot)=>bot.id === id).name;
    });
  }

}
