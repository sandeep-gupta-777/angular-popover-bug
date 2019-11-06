import {Pipe, PipeTransform} from '@angular/core';
import {IEntitiesItem} from '../../interfaces/mlBots';
import {IIntent} from '../../../typings/intents';

@Pipe({
  name: 'filterEntities',
  pure: false
})
export class FilterEntitiesPipe implements PipeTransform {
  transform(entityList: IEntitiesItem[], selectedEntities?: IEntitiesItem[]): any {

    if (!selectedEntities) {
      return entityList || [];
    }
    const x = entityList.filter((entity) => {
      return !selectedEntities.find(e => e.entity_id === entity.entity_id);
    });

    return x;
  }

}
