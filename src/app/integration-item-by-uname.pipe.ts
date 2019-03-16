import { Pipe, PipeTransform } from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IAppState} from './ngxs/app.state';
import {map, take} from 'rxjs/internal/operators';

@Pipe({
  name: 'integrationItemByUname'
})
export class IntegrationItemByUnamePipe implements PipeTransform {

  @Select() app$: Observable<IAppState>;
  transform(unique_name: string, args?: any): any {
    return this.app$.pipe(
      take(1),
      map((appState:IAppState)=>{
        return appState.masterIntegrationList.find(e=>e.unique_name===unique_name);
      })
    )
  }
}
