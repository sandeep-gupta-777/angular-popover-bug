import {Pipe, PipeTransform} from '@angular/core';
import {IEntitiesItem} from '../../interfaces/mlBots';

@Pipe({
  name: 'utteranceAddEntity'
})
export class UtteranceAddEntityPipe implements PipeTransform {

  transform(utteranceStr: any, args: any[], entityList: IEntitiesItem[]): any {
    let str: string = utteranceStr;
    const random = Date.now();
    args = [...args];
    let x = args.sort((a, b) => {
      return -a.start + b.start;
    });
    console.dir(x);
    x.forEach((value, index, array) => {
      const first = str.substr(0, (value.start));
      const second = `<span class="bg-red" style="background-color: ${this.getColorByEntity(entityList, value.entity_id)}" data-position="entity-${value.start}-${value.end}" data-id="${random}">${str.substr(value.start, (value.end - value.start))}</span>`;
      const last = str.substr(value.end, 1000000);
      str = first + second + last;
    });
    console.log(str);
    return str;
  }

  getColorByEntity(entityList: IEntitiesItem[], entity_id: string) {
    const x = entityList.find(e => e.entity_id === entity_id);
    return x && x.color || 'red';
  }

}