import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToUniqueArray'
})
export class ConvertToUniqueArrayPipe implements PipeTransform {

  transform(value: [], args?: any): any {
    if(!value) return;
    return Array.from(new Set(value))
  }

}
