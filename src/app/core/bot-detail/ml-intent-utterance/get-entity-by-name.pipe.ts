import {Pipe, PipeTransform} from '@angular/core';
import {IEntitiesItem} from '../../interfaces/mlBots';

@Pipe({
  name: 'getEntityByName'
})
export class GetEntityByNamePipe implements PipeTransform {

  transform(value: IEntitiesItem, entitiesItems?: IEntitiesItem[]): any {

    return entitiesItems.find(e => e.entity_id === value.entity_id);
  }

}
