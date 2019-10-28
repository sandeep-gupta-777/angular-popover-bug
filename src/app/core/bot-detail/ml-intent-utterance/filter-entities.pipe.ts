import {Pipe, PipeTransform} from '@angular/core';
import {IEntitiesItem} from '../../interfaces/mlBots';
import {IIntent} from '../../../typings/intents';

@Pipe({
  name: 'filterEntities'
})
export class FilterEntitiesPipe implements PipeTransform {
  transform(entities: IEntitiesItem[], intent?: IIntent): any {
    if (!intent || !intent.entities) {
      return entities || [];
    }
    const x = entities.filter((entity) => {
      return !intent.entities.find(e => e.entity_id === entity.entity_id);
    });

    return x;
  }

}
