import {Pipe, PipeTransform} from '@angular/core';
import {IEntitiesItem} from '../../interfaces/mlBots';
import {MlService} from '../ml-model/ml.service';

@Pipe({
  name: 'utteranceAddEntity'
})
export class UtteranceAddEntityPipe implements PipeTransform {

  transform(utteranceStr: any, args: any[]): any {

    const entityList: IEntitiesItem[] = MlService.entityList;
    let str: string = utteranceStr;
    const random = Date.now();
    args = [...args];
    let x = args.sort((a, b) => {
      return -a.start + b.start;
    });
    x.forEach((value, index, array) => {
      const isEnd = str.length === value.end;
      // const isStart = str.startsWith(value.value);
      const first = str.substr(0, (value.start));
      debugger;
      const second = `<span class="bg-red" style="background-color: ${this.getColorByEntity(entityList, value.entity_id)}" data-position="entity-${value.start}-${value.end}" data-id="${random}">${str.substr(value.start, (value.end - value.start))}</span>${isEnd ? '&nbsp' : ''}`;
      const last = str.substr(value.end, 1000000);
      str = first + second + last;
    });
    return str;
  }

  getColorByEntity(entityList: IEntitiesItem[], entity_id: string) {
    const x = entityList.find(e => e.entity_id === entity_id);
    return x && x.color || 'red';
  }

}
