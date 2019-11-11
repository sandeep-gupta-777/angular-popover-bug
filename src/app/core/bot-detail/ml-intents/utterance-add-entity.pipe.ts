import {Pipe, PipeTransform} from '@angular/core';
import {IEntitiesItem} from '../../interfaces/mlBots';
import {MlService} from '../ml-model/ml.service';
import {EMarkerAttributes} from '../ml-intents-detail/ml-intents-detail.component';

@Pipe({
  name: 'utteranceAddEntity'
})
export class UtteranceAddEntityPipe implements PipeTransform {

  transform(utteranceStr: any, args: any[]): any {

    const entityList: IEntitiesItem[] = MlService.entityList;
    let str: string = utteranceStr.trim() + `&nbsp;`;

    args = [...args];
    args = args.map((arg) => {
      return {
        ...arg,
        class: 'bg-red'
      };
    });
    str = this.replaceX(str, args, entityList);
    return str;
  }

  getColorByEntity(entityList: IEntitiesItem[], entity_id: string) {
    const x = entityList.find(e => e.entity_id === entity_id);
    return x && x.color || 'red';
  }

  replaceX(phrase, replacementArr, entityList) {
    // let replacementArr = [{start: 0,  end: 11, class: "alive"},{start: 0,  end: 5, class: "firstName"},{start: 17,  end: 23, class: "firstName"},{start: 7,  end: 11, class: "lastName"},{start: 25,  end: 30, class: "lastName"},{start: 17, end: 30, class: "dead"}];
    // let phrase = "Barack Obama and Abraham Lincon were US presidents"

    const random = Date.now();
    const result = replacementArr.flatMap(o => [
      {
        idx: o.start,
        tag: `<${o.class} style="background-color: ${this.getColorByEntity(entityList, o.entity_id)}"
                    ${EMarkerAttributes.data_position}="entity-${o.start}-${o.end}"
                    ${EMarkerAttributes.data_entity_id}="${o.entity_id}"
                    ${EMarkerAttributes.data_id}="${random}" class="${o.class}">`,
        order: o.start - o.end - 1
      },
      {idx: o.end, tag: `</${o.class}>`, order: o.end - o.start}
    ]).sort((a, b) =>
      a.idx - b.idx || a.order - b.order
    ).concat({tag: ''}).reduce((acc, {idx, tag}) => ({
      str: acc.str + phrase.slice(acc.idx, idx) + tag,
      idx
    }), {str: '', idx: 0}).str;
    return result;
  }


}
