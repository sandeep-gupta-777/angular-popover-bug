import {Pipe, PipeTransform} from '@angular/core';
import {IPipelineItemV2} from './pipeline.component';
import {SortService} from '../../../../../sort.service';

@Pipe({
  name: 'sortPipeline'
})
export class SortPipelinePipe implements PipeTransform {

  transform(value: IPipelineItemV2[], args?: any): any {
    return value.sort(SortService.sortPipeline);
  }

}
