import {Pipe, PipeTransform} from '@angular/core';
import {IPipelineItemV2} from './core/buildbot/build-code-based-bot/architecture/pipeline/pipeline.component';

@Pipe({
  name: 'pipelineFilter'
})
export class PipelineFilterPipe implements PipeTransform {

  transform(pipelineItemV2List: IPipelineItemV2[], keyword: string): any {

    keyword = keyword && keyword.trim();
    if (!keyword) return pipelineItemV2List;

    return pipelineItemV2List.filter((item) => {
      let found = false;

      // found = item.unique_name && item.unique_name.toLowerCase().includes(keyword.toLowerCase());
      // if (found) return found;

      /*searching in display_values*/
      found = item.display_values && item.display_values.toLowerCase().includes(keyword.toLowerCase());
      if (found) return found;

      /*searching in pipeline_modules.unique_name*/
      if (item.pipeline_modules) {
        let searchStr = item.pipeline_modules.map(e => e.library).join(';') || '';
        found = searchStr.toLowerCase().includes(keyword.toLowerCase());
      }
      return found;
    });
  }

}
