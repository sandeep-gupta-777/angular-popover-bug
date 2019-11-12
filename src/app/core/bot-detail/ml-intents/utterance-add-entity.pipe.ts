import {Pipe, PipeTransform} from '@angular/core';
import {IEntitiesItem} from '../../interfaces/mlBots';
import {MlService} from '../ml-model/ml.service';
import {EMarkerAttributes} from '../ml-intents-detail/ml-intents-detail.component';

@Pipe({
  name: 'utteranceAddEntity'
})
export class UtteranceAddEntityPipe implements PipeTransform {

  transform(utteranceStr: any, args: any[]): any {
    debugger;
    const entityList: IEntitiesItem[] = MlService.entityList;
    let str: string = utteranceStr;
    args = [...args];
    args = args.map((arg) => {
      return {
        ...arg,
        class: 'bg-red'
      };
    });
    str = MlService.replaceX(str, args, entityList);
    return str;
  }






}
