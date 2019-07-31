import {Pipe, PipeTransform} from '@angular/core';
import {IPipelineItemV2} from './core/buildbot/build-code-based-bot/architecture/pipeline/pipeline.component';
import {UtilityService} from './utility.service';

@Pipe({
  name: 'pipelineFilter'
})
export class PipelineFilterPipe implements PipeTransform {

  transform(pipelineItemV2List: IPipelineItemV2[], keyword: string): any {

    keyword = keyword && keyword.trim();
    if (!keyword) { return pipelineItemV2List; }

    return pipelineItemV2List.filter((item) => {
      let found = false;

      // found = item.unique_name && item.unique_name.toLowerCase().includes(keyword.toLowerCase());
      // if (found) return found;

      /*searching in display_values*/
      found = item.display_values && item.display_values.toLowerCase().includes(keyword.toLowerCase());
      if (found) { return found; }

      /*searching in pipeline_modules.unique_name*/
      if (item.pipeline_modules) {
        const searchStr = item.pipeline_modules.map(e => e.library).join(';') || '';
        found = searchStr.toLowerCase().includes(keyword.toLowerCase());
      }
      return found;
    });
    //
    // let pipelineItemV2ListClone: IPipelineItemV2[] = UtilityService.cloneObj(pipelineItemV2List);
    //
    // pipelineItemV2ListClone = pipelineItemV2ListClone.filter((module) => {
    //   return module.display_values && module.display_values.toLowerCase().includes(keyword.toLowerCase());
    // });
    //
    // pipelineItemV2ListClone.forEach((value, index, array) => {
    //   let matchingModuleList = value.pipeline_modules.filter((item) => {
    //     // let searchStr = item.map(e => e.library).join(';') || '';
    //     return item.display_values.toLowerCase().includes(keyword.toLowerCase());
    //   });
    //   if(matchingModuleList.length>0){
    //     value.pipeline_modules = matchingModuleList;
    //   }
    // })
    //
    // return pipelineItemV2ListClone;
    //

  }

}
