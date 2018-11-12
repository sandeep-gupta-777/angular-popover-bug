import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipelineFilter'
})
export class PipelineFilterPipe implements PipeTransform {

  transform(items: any[], keyword: string): any {
    // ;
    keyword = keyword && keyword.trim();
    if (!keyword || keyword === '') { return items; }
    return items.filter((item) => {
      return item.unique_name.toLowerCase().includes(keyword.toLowerCase());
    });
  }

}
