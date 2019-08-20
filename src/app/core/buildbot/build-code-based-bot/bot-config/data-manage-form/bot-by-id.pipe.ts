import { Pipe, PipeTransform } from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IAppState} from '../../../../../ngxs/app.state';
import {IBot} from '../../../../interfaces/IBot';
import {map, take} from 'rxjs/operators';
import {ViewBotStateModel} from '../../../../view-bots/ngxs/view-bot.state';

@Pipe({
  name: 'botById'
})
export class BotByIdPipe implements PipeTransform {

  @Select() botlist$: Observable<ViewBotStateModel>;
  botList: IBot[];
  constructor() {

  }
  transform(id: any, args?: any): any {

    return this.botlist$.pipe(take(1),
      map((botListState) => {
        return botListState.allBotList.find((bot) => bot.id === id);
      }));
  }

}
