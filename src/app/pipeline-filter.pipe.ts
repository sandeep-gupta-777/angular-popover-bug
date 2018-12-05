import { Pipe, PipeTransform } from '@angular/core';
import {IPipelineItemV2} from './core/buildbot/build-code-based-bot/architecture/pipeline/pipeline.component';

@Pipe({
  name: 'pipelineFilter'
})
export class PipelineFilterPipe implements PipeTransform {

  transform(items: IPipelineItemV2[], keyword: string): any {
    // ;
    keyword = keyword && keyword.trim();
    if (!keyword || keyword === '') { return items; }
    debugger;
    return items.filter((item) => {
      let found = false;
        found =  item.unique_name && item.unique_name.toLowerCase().includes(keyword.toLowerCase())
      if(!found && item.pipeline_modules){
        let searchStr = item.pipeline_modules.map(e=>e.unique_name).join(';')||'';
        found =  searchStr.toLowerCase().includes(keyword.toLowerCase())
      }
      return found;
    });
  }

}
