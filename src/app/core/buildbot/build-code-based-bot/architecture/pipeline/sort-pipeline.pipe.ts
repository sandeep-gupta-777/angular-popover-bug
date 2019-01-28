import { Pipe, PipeTransform } from '@angular/core';
import {IPipelineItemV2} from './pipeline.component';

@Pipe({
  name: 'sortPipeline'
})
export class SortPipelinePipe implements PipeTransform {

  transform(value: IPipelineItemV2[], args?: any): any {
    console.log(value);
    let x = value.sort((a,b)=>{
      if(a.display_values > b.display_values){
        return 1;
      }else if(a.display_values < b.display_values) {
        return -1;
      }else {
        return 0;
      }
    });
    return x;
  }

}
