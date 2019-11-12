import {Injectable} from '@angular/core';
import {IEntitiesItem} from '../../interfaces/mlBots';
import {EMarkerAttributes} from '../../../typings/intents';

@Injectable({
  providedIn: 'root'
})
export class MlService {

  static entityList: IEntitiesItem[];

  constructor() {
  }

  static replaceX(phrase, replacementArr, entityList) {
    const random = Date.now();
    const result = replacementArr.flatMap(o => [
      {
        idx: o.start,
        tag: `<span style="background-color: ${MlService.getColorByEntity(entityList, o.entity_id)}"
                    contenteditable="true"
                    ${EMarkerAttributes.data_position}="entity-${o.start}-${o.end}"
                    ${EMarkerAttributes.data_entity_id}="${o.entity_id}"
                    ${EMarkerAttributes.data_id}="${random}" class="${o.class || 'bg-red'}">`,
        order: o.start - o.end - 1
      },
      {idx: o.end, tag: `</span>`, order: o.end - o.start}
    ]).sort((a, b) =>
      a.idx - b.idx || a.order - b.order
    ).concat({tag: ''}).reduce((acc, {idx, tag}) => ({
      str: acc.str + phrase.slice(acc.idx, idx) + tag,
      idx
    }), {str: '', idx: 0}).str;
    return result + '&nbsp;';
  }

  static getColorByEntity(entityList: IEntitiesItem[], entity_id: string) {
    const x = entityList.find(e => e.entity_id === entity_id);
    return x && x.color || 'red';
  }
}
